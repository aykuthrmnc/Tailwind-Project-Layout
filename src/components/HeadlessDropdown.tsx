import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";

const HeadlessDropdown = ({ items = [], name }: any) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex w-full cursor-pointer items-center rounded text-gray-700 transition-colors hover:text-gray-600 dark:text-white">
        {name}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {items.map((item: any, key: number) => (
              <Menu.Item key={key}>
                {({ active }) => {
                  const {
                    icon,
                    name,
                    as: As = "button",
                    className = "",
                    items,
                    ...props
                  } = item;
                  return (
                    <Fragment>
                      <As
                        {...props}
                        className={classNames(
                          className,
                          "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                          {
                            "bg-gray-700 text-white": active,
                            "text-gray-900": !active,
                          }
                        )}
                      >
                        {icon} {name}
                      </As>
                    </Fragment>
                  );
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeadlessDropdown;
