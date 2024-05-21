"use client";

import { Button, Navbar, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

export function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex md:order-1">
          <TextInput placeholder="Search..." icon={HiSearch} />
        </div>
      </Navbar.Collapse>

      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/popular">Popular</Navbar.Link>
        <Navbar.Link href="/top-rated">Top Rated</Navbar.Link>
        <Navbar.Link href="/upcoming">Upcoming</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
