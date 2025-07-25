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
import { FileCheck, FileScan, Folder, LockIcon, Logs, RadarIcon, ServerIcon, Settings, Shield, ShieldAlertIcon, Target, TargetIcon, Users, Zap } from "lucide-react";
import { useSelector } from "react-redux"

const data = {
  userNavMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: TargetIcon,
    },
    {
      title: "Cyber Security",
      url: "/user/cyber-security",
      icon: ShieldAlertIcon,
    },
    {
      title: "Physical Security",
      url: "/user/physical-security",
      icon: LockIcon,
    },
    {
      title: "GuardianY",
      url: "/user/guardian-y",
      icon: Shield,
    },
    {
      title: "Threat Intelligence",
      url: "/user/threat-intelligence",
      icon: RadarIcon,
    },
    {
      title: "Threat Response",
      url: "/user/threat-response",
      icon: Zap,
    },
    {
      title: "MITRE Framework",
      url: "/user/mitre-framework",
      icon: Target,
    },
    {
      title: "Compliance",
      url: "/user/compliance",
      icon: FileCheck,
    },
    {
      title: "Log Ingestion",
      url: "/user/log-ingestion",
      icon: ServerIcon,
    },
    // {
    //   title: "Detailed Analysis",
    //   url: "/user/detailed-analysis",
    //   icon: FileScan,
    // },
    {
      title: "Case Management",
      url: "/user/case-management",
      icon: Folder,
    },
    {
      title: "Log Management",
      url: "/user/log-management",
      icon: Logs,
    },
    {
      title: "Security Management",
      url: "/user/security-management",
      icon: Settings,
    },
  ],
  adminNavMain: [
    {
      title: "Client Management",
      url: "/admin/client-management",
      icon: Users,
    },
    {
      title: "Client Cases",
      url: "/admin/client-cases",
      icon: Folder,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const { user } = useSelector((state) => state.auth);

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
        <NavMain items={user?.role === "client" ? data?.userNavMain : data?.adminNavMain} />
      </SidebarContent>
    </Sidebar>
  );
}
