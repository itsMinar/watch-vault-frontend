import { AppSidebar } from '@/components/app-sidebar';
import { ThemeModeToggle } from '@/components/theme-mode-toggle';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between border-b px-4">
          <div className="flex h-14 shrink-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <p className="-ml-1">Welcome to Watch Vault</p>
          </div>

          <ThemeModeToggle />
        </header>

        <Card className="bg-muted/30 m-2 p-2">{children}</Card>
      </SidebarInset>
    </SidebarProvider>
  );
}
