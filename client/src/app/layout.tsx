import { Toaster } from "@/components/ui/sonner"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 px-2 py-1 overflow-auto bg-gray-100">
        <SidebarTrigger />
        {children}
        <Toaster />
      </main>
    </SidebarProvider>
  )
}