import classNames from "classnames";
import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const DropdownContext = createContext({} as any);

const Dropdown = ({
  as = "div",
  className = "",
  children,
  action = "click",
  caret = false,
  ...props
}: {
  as?: any;
  className?: string;
  children?: any;
  action?: "click" | "hover";
  caret?: boolean;
  props?: any;
}) => {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const clickHandle = (e: any) => {
      if (!e.composedPath().includes(menuRef.current)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", clickHandle);
    return () => {
      document.removeEventListener("click", clickHandle);
    };
  }, []);

  const menu = children.find((c: any) => c.type === Dropdown.Menu);
  const item = children.find((c: any) => c.type === Dropdown.Item);

  const data: any = {
    open,
    close: () => setOpen(false),
    toggle: () => setOpen(!open),
    menuRef,
    action,
  };

  return createElement(
    as,
    {
      ...props,
      ref: menuRef,
      className: classNames("dropdown", className, {
        "dropdown-caret": caret,
      }),
      onMouseEnter: () => {
        action === "hover" && setOpen(true);
      },
      onMouseLeave: () => {
        action === "hover" && setOpen(false);
      },
    },
    <DropdownContext.Provider value={data}>
      {item}
      {open && menu}
    </DropdownContext.Provider>
  );
};

const Menu = ({
  as = "div",
  className = "",
  children,
  ...props
}: {
  as?: any;
  className?: string | Function;
  children?: any;
  props?: any;
}) => {
  const { close } = useContext(DropdownContext);

  return createElement(
    as,
    {
      ...props,
      className:
        typeof className === "function"
          ? className({ close })
          : classNames("dropdown-menu", className),
    },
    typeof children === "function" ? children({ close }) : children
  );
};

const Item = ({
  as = "button",
  className = "",
  children,
  ...props
}: {
  as?: any;
  className?: string;
  children?: any;
  props?: any;
  [x: string]: any;
}) => {
  const { open, toggle, action } = useContext(DropdownContext);

  return createElement(
    as,
    {
      ...props,
      type: as === "button" ? "button" : "",
      className: classNames("dropdown-item", className),
      onClick: () => {
        props.onClick && props.onClick();
        action === "click" && toggle();
      },
    },
    typeof children === "function" ? children({ open }) : children
  );
};

Dropdown.Menu = Menu;
Dropdown.Item = Item;
export default Dropdown;
