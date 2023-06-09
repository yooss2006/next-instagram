"use client";

import Link from "next/link";
import React from "react";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./ui/Avatar";

const MENU = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>
      <nav className="flex gap-4 items-center p-4">
        <ul className="flex items-center gap-2">
          {MENU.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{pathName === href ? clickedIcon : icon}</Link>
            </li>
          ))}
        </ul>
        {user && (
          <li>
            <Link href={`/user/${user.username}`}>
              <Avatar image={user.image} size="small" highLight />
            </Link>
          </li>
        )}
        <li>
          {session ? (
            <ColorButton text="로그아웃" onClick={() => signOut()} />
          ) : (
            <ColorButton text="로그인" onClick={() => signIn()} />
          )}
        </li>
      </nav>
    </div>
  );
}
