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
      url: "/cyber-security",
      icon: ShieldAlertIcon,
    },
    {
      title: "Physical Security",
      url: "/physical-security",
      icon: LockIcon,
    },
    {
      title: "GuardianY",
      url: "/guardian-y",
      icon: Shield,
    },
    {
      title: "Threat Intelligence",
      url: "/threat-intelligence",
      icon: RadarIcon,
    },
    {
      title: "Threat Response",
      url: "/threat-response",
      icon: Zap,
    },
    {
      title: "MITRE Framework",
      url: "/mitre-framework",
      icon: Target,
    },
    {
      title: "Compliance",
      url: "/compliance",
      icon: FileCheck,
    },
    {
      title: "Log Ingestion",
      url: "/log-ingestion",
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
      url: "/security-management",
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
