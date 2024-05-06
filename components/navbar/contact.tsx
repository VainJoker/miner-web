"use client";

import { FC } from "react";
import clsx from "clsx";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { ContactIcon } from "../icons/contacticon";

export interface ContactProps {
  className?: string;
}

export const Contact: FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        "w-auto h-auto",
        "bg-transparent",
        "rounded-lg",
        "flex items-center justify-center",
        "group-data-[selected=true]:bg-transparent",
        "!text-default-500",
        "pt-px",
        "px-0",
        "mx-0",
        className
      )}
    >
      <Dropdown className="max-w-80">
        <DropdownTrigger>
          <div>
            <ContactIcon size={22} />
          </div>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownSection showDivider>
            <DropdownItem
              key="1"
              description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            >
              📣 Edit your information
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem key="1">📣 Clear All Notificacions</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
