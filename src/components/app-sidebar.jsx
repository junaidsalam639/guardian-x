"use client"

import * as React from "react"
import {
  IconInnerShadowTop,
} from "@tabler/icons-react"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { FileCheck, Folder, LockIcon, Logs, RadarIcon, ServerIcon, Settings, Shield, ShieldAlertIcon, Target, TargetIcon, Zap } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: TargetIcon,
    },
    {
      title: "Cyber Security",
      url: "#",
      icon: ShieldAlertIcon,
    },
    {
      title: "Physical Security",
      url: "#",
      icon: LockIcon,
    },
    {
      title: "GuardianY",
      url: "#",
      icon: Shield,
    },
    {
      title: "Threat Intelligence",
      url: "#",
      icon: RadarIcon,
    },
    {
      title: "Threat Response",
      url: "#",
      icon: Zap,
    },
    {
      title: "MITRE Framework",
      url: "#",
      icon: Target,
    },
    {
      title: "Compliance",
      url: "#",
      icon: FileCheck,
    },
    {
      title: "Log Ingestion",
      url: "#",
      icon: ServerIcon,
    },
    {
      title: "Case Management",
      url: "/case-management",
      icon: Folder,
    },
    {
      title: "Log Management",
      url: "/log-management",
      icon: Logs,
    },
    {
      title: "Security Management",
      url: "#",
      icon: Settings,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">GuardianX</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
