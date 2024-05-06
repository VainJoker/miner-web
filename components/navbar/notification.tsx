"use client";

import { FC, useState } from "react";
import clsx from "clsx";
import { NotificationIcon } from "../icons/notificationicon";
import { Badge } from "@nextui-org/badge";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

export interface NotificationProps {
  className?: string;
}

export const Notification: FC<NotificationProps> = ({ className }) => {
  const [messageCount, setMessageCount] = useState(4);

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
      <Dropdown backdrop="blur" className="max-w-80">
        <DropdownTrigger>
          <div className="flex items-center justify-center">
            <Badge
              color="danger"
              content={messageCount}
              shape="circle"
              size="sm"
            >
              <NotificationIcon size={22} />
            </Badge>
          </div>
          {/* <Badge color="danger" content={messageCount} shape="circle" size="sm">
            <NotificationIcon size={22} />
          </Badge> */}
        </DropdownTrigger>
        <DropdownMenu aria-label="Avatar Actions">
          <DropdownSection
            className="max-h-80 overflow-y-auto overflow-x-hidden"
            showDivider
          >
            <DropdownItem
              key="1"
              description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            >
              📣 Edit your information
            </DropdownItem>
            <DropdownItem
              key="2"
              description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
            >
              🚀 Say goodbye to paper receipts!
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
