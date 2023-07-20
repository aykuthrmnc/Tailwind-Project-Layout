import classNames from "classnames";
import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuItemTypes } from "~/types";
import Dropdown from "../Custom/Dropdown";

const findAllParent = (
  menuItems: MenuItemTypes[],
  menuItem: MenuItemTypes
): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem?.parentKey);

  if (parent) {
    parents.push(parent?.key);
    if (parent?.parentKey)
      parents = [...parents, ...findAllParent(menuItems, parent)];
  }

  return parents;
};

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes["key"] | undefined
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      var found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

const MenuItem = ({ item }: { item: MenuItemTypes }) => (
  <NavLink
    end
    to={item?.url!}
    className="flex items-center gap-2 hover:text-gray-800 dark:hover:text-white"
  >
    {item?.icon} {item?.label}
  </NavLink>
);

const MenuItemWithChildren = ({
  item,
  direction = "down",
}: {
  item: MenuItemTypes;
  direction?: "end" | "down";
}) => {
  return (
    <Dropdown
      caret
      placement={direction === "down" ? "bottom-start" : "right-start"}
    >
      <Dropdown.Button
        className={classNames({
          "bg-transparent hover:bg-transparent hover:text-gray-800 dark:hover:text-white":
            direction === "down",
        })}
      >
        {item?.icon} {item?.label}
      </Dropdown.Button>
      <Dropdown.Menu>
        {item?.children?.map((subItem, key) =>
          subItem?.children ? (
            <MenuItemWithChildren key={key} item={subItem} direction="end" />
          ) : (
            <Dropdown.Item key={key} as={NavLink} to={subItem?.url}>
              {subItem?.icon} {subItem?.label}
              {/* <MenuItem key={key} item={subItem} isNavbar={false} /> */}
            </Dropdown.Item>
          )
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Horizontalbar = ({ menuItems }: { menuItems: MenuItemTypes[] }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  //   const theme = useSelector((state: RootState) => state.auth.theme);
  //   const { companyName } = useSelector((state: RootState) => state.auth.user)!;

  return (
    <>
      {menuItems.map((item, key) => (
        <React.Fragment key={key}>
          {!item.isTitle &&
            (item.children ? (
              <MenuItemWithChildren item={item} />
            ) : (
              <MenuItem item={item} />
            ))}
        </React.Fragment>
      ))}
    </>
  );
};
export default Horizontalbar;
