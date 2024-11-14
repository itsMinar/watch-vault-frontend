import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { navLinks } from '@/data';
import { LogOut } from 'lucide-react';
import * as React from 'react';
import { ActiveSidebarItem } from './active-sidebar-item';
import { Button } from './ui/button';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex items-center justify-center">
        <div>
          <span>Minar Munshi</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        {navLinks.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <ActiveSidebarItem item={item} />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <Button className="mx-6" variant="destructive">
          Logout <LogOut />
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
