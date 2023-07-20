import classNames from "classnames";
import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
const CollapseContext = createContext({} as any);

const Collapse = ({
  as = "div",
  className = "",
  children,
  action = "click",
  caret = false,
  placement,
  ...props
}: {
  as?: any;
  className?: string;
  children?: any;
  action?: "click" | "hover";
  caret?: boolean;
  placement?: any;
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

  const menu = children.find((c: any) => c.type === Collapse.Menu);
  const button = children.find((c: any) => c.type === Collapse.Button);

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
      className: classNames("collapse", className, { "collapse-caret": caret }),
      onMouseEnter: action === "hover" ? () => setOpen(true) : undefined,
      onMouseLeave: action === "hover" ? () => setOpen(false) : undefined,
    },
    <CollapseContext.Provider value={data}>
      {button}
      {open && menu}
    </CollapseContext.Provider>
  );
};

const Button = ({
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
  const { open, toggle, action } = useContext(CollapseContext);

  return createElement(
    as,
    {
      ...props,
      type: as === "button" ? "button" : "",
      className: classNames("collapse-button", className),
      onClick: () => {
        props.onClick && props.onClick();
        action === "click" && toggle();
      },
    },
    typeof children === "function" ? children({ open }) : children
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
  const { close } = useContext(CollapseContext);

  return createElement(
    as,
    {
      ...props,
      // "aria-labelledby": headingId,
      className:
        typeof className === "function"
          ? className({ close })
          : classNames("collapse-menu", className),
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
  const { open, toggle, action } = useContext(CollapseContext);

  return createElement(
    as,
    {
      ...props,
      type: as === "button" ? "button" : "",
      className: classNames("collapse-item", className),
      onClick: () => {
        props.onClick && props.onClick();
        action === "click" && toggle();
      },
    },
    typeof children === "function" ? children({ open }) : children
  );
};

Collapse.Button = Button;
Collapse.Menu = Menu;
Collapse.Item = Item;
export default Collapse;
