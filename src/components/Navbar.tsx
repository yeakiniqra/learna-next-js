'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
         <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Android Development</HoveredLink>
            <HoveredLink href="/branding">SEO Optimization</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Templates">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Next.js Templates"
              href="https://postimages.org/"
              src="https://i.postimg.cc/k4Y0YTs3/next-JS-framework.png"
              description="A collection of free and premium Next.js templates."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://postimages.org/"
              src="https://i.postimg.cc/dtjzzQ4j/1-JEHLm-Wo6-Srp-HPi-P4-Aim-Iw.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="React Templates"
              href="https://postimages.org/"
              src="https://i.postimg.cc/90VLpZ55/9d0a6780-394a-11eb-9fd1-6296a684b124.jpg"
              description="A collection of free and premium React templates."
            />
            <ProductItem
              title="Expo Android Courses"
              href="https://postimages.org/"
              src="https://i.postimg.cc/zBqh2jBj/exo.jpg"
              description="Learn how to build Android apps with React Native and Expo."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Freemium</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        </Menu>
      
    </div>
  )
}
