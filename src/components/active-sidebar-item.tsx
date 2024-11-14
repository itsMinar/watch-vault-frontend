'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuButton } from './ui/sidebar';

interface ActiveSidebarItemProps {
  item: {
    title: string;
    isActive: boolean;
    url: string;
  };
}

export function ActiveSidebarItem({ item }: ActiveSidebarItemProps) {
  const pathname = usePathname();

  return (
    <SidebarMenuButton asChild isActive={pathname === item.url}>
      <Link href={item.url}>{item.title}</Link>
    </SidebarMenuButton>
  );
}
