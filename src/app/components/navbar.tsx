import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/app/assets/logo.svg";
import Icon from "./logo";

const navigation = [
  { name: "Home", href: "/", index: 0 },
  { name: "Contact", href: "/contact", index: 1 },
  { name: "Leaderboards", href: "#", index: 2, disabled: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavbarProps {
  active: number;
}

export default function Navbar({ active }: NavbarProps) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Icon />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.index === active
                            ? "bg-gray-900 text-white"
                            : item.disabled
                            ? "text-gray-500 disabled cursor-not-allowed"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.index ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.index === active
                      ? "bg-gray-300 text-white"
                      : "text-white bg-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.index ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <hr />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
