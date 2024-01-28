"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link href="#" key={key}>
        <MenuItem
          placeholder={""}
          className="flex items-center gap-3 rounded-lg m-3">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold">
              {title}
            </Typography>
            <Typography
              placeholder={""}
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}>
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder={""}>
            <ListItem
              placeholder={""}
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block"
          placeholder={""}>
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
      placeholder={""}>
      <Typography
        placeholder={""}
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 text-gray-950"
          placeholder={""}>
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        placeholder={""}
        as="a"
        href={"#"}
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 text-gray-950"
          placeholder={""}>
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const { data: session, status } = useSession();

  return (
    <Navbar
      className="sticky top-0 z-10 mx-auto max-w-full px-4 py-2 rounded-none shadow-sm"
      placeholder={""}>
      <div className="container mx-auto lg:px-6 flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder={""}
          as="a"
          href="#"
          variant="h6"
          color="blue-gray"
          className="mr-4 cursor-pointer py-1.5 text-gray-900">
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {status === "unauthenticated" ? (
            <>
              <Button
                className="text-gray-900"
                variant="text"
                size="sm"
                onClick={function () {
                  signIn();
                }}
                placeholder={""}>
                Log In
              </Button>
              <Button placeholder={""}>Sign Up</Button>
            </>
          ) : (
            <>
              <Button
                placeholder={""}
                onClick={function () {
                  signOut();
                }}>
                Log Out
              </Button>
            </>
          )}
        </div>
        <IconButton
          placeholder={""}
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            variant="outlined"
            size="sm"
            color="blue-gray"
            placeholder={""}
            fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" placeholder={""} fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
