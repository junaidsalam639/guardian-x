"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter, usePathname } from "next/navigation";

export function NavMain({ items }) {
  const router = useRouter();
  const pathname = usePathname();

  const routerPush = (url) => {
    router.push(url);
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items?.map((item) => {
            const isActive = item?.url === pathname;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`cursor-pointer 
                    ${isActive ? "bg-primary text-primary-foreground" : ""}
                    hover:bg-black hover:text-white 
                      min-w-8 duration-200 ease-linear`}
                  onClick={() => routerPush(item.url)}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>

              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
