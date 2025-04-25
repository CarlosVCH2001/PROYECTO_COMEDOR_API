import {
    applications,
  } from "@/data/menuData";

  import {
    ChevronRight,
    HomeIcon,
  } from "lucide-react";
  
  import { ScrollArea } from "@/components/ui/scroll-area";
  
  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
  } from "@/components/ui/sidebar";
  
  import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
  
  export function AppSidebar() {
    return (
      <Sidebar className="bg-teal-700">
        <SidebarHeader className="bg-teal-900">
          <SidebarMenu className="text-white">
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Comedor Universitario UNPRG
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="bg-teal-700">
          <ScrollArea className="">
            <SidebarGroup className="text-white">
              <SidebarGroupLabel className="text-white">
                Application
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {/* Elemento independiente Home */}
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/">
                        <HomeIcon />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* Elementos dinámicos (recorriendo el array applications) */}
                  {applications.map((item) => (
                    <Collapsible className="group/collapsible" key={item.title}>
                      <SidebarMenuItem key={item.title}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                            </a>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        {item.subItems && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.subItems.map((subItem, subIndex) => (
                                <SidebarMenuSubItem key={subItem.title || subIndex}>
                                  <SidebarMenuButton asChild>
                                    <a href={subItem.url}>{subItem.title}</a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </ScrollArea>
        </SidebarContent>
      </Sidebar>
    );
  }