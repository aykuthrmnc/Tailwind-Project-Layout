import classNames from "classnames";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  useFloating,
  shift,
  autoUpdate,
  flip,
  Placement,
} from "@floating-ui/react-dom";

const DropdownContext = createContext({} as any);

const Dropdown = ({
  as: As = "div",
  className = "",
  children,
  action = "click",
  caret = false,
  placement = "bottom-start",
  ...props
}: {
  as?: any;
  className?: string;
  children?: any;
  action?: "click" | "hover";
  caret?: boolean;
  placement?: Placement;
  props?: any;
}) => {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    placement,
    middleware: [flip({ crossAxis: true, padding: 40 }), shift()],
    whileElementsMounted: autoUpdate,
  });

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
  const button = children.find((c: any) => c.type === Dropdown.Button);

  const data: any = {
    open,
    close: () => setOpen(false),
    toggle: () => setOpen(!open),
    menuRef,
    action,
    refs,
    floatingStyles,
  };

  return (
    <As
      {...props}
      ref={menuRef}
      className={classNames("dropdown", className, {
        "dropdown-toggle": caret,
      })}
      onMouseEnter={action === "hover" ? () => setOpen(true) : undefined}
      onMouseLeave={action === "hover" ? () => setOpen(false) : undefined}
    >
      <DropdownContext.Provider value={data}>
        {button}
        {open && menu}
      </DropdownContext.Provider>
    </As>
  );
};

const Button = ({
  as: As = "button",
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
  const { open, toggle, action, refs } = useContext(DropdownContext);

  return (
    <As
      {...props}
      type="button"
      ref={refs.setReference}
      className={classNames("dropdown-button", className)}
      onClick={() => {
        props.onClick && props.onClick();
        action === "click" && toggle();
      }}
    >
      {typeof children === "function" ? children({ open }) : children}
    </As>
  );
};

const Menu = ({
  as: As = "div",
  className = "",
  children,
  ...props
}: {
  as?: any;
  className?: string | Function;
  children?: any;
  props?: any;
}) => {
  const { close, refs, floatingStyles } = useContext(DropdownContext);

  return (
    <As
      {...props}
      ref={refs.setFloating}
      style={floatingStyles}
      className={
        typeof className === "function"
          ? className({ close })
          : classNames("dropdown-menu", className)
      }
    >
      {typeof children === "function" ? children({ close }) : children}
    </As>
  );
};

const Item = ({
  as: As = "button",
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

  return (
    <As
      {...props}
      type="button"
      className={classNames("dropdown-item", className)}
      onClick={() => {
        props.onClick && props.onClick();
        action === "click" && toggle();
      }}
    >
      {typeof children === "function" ? children({ open }) : children}
    </As>
  );
};

Dropdown.Button = Button;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
export default Dropdown;
