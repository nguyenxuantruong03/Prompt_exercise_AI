"use client";

import React from "react";
import { usePathname } from "next/navigation";
import GrammarNavbar from "./GrammarNavbar";
import GrammarSidebar from "./GrammarSidebar";
import { cn } from "@/lib/utils";

interface GrammarLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  className?: string;
}

const GrammarLayout: React.FC<GrammarLayoutProps> = ({
  children,
  showSidebar = true,
  className = "",
}) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <GrammarNavbar currentPath={pathname!} />

      <div className="flex">
        {/* Sidebar Navigation */}
        {showSidebar && (
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-16 h-screen overflow-y-auto">
              <GrammarSidebar currentPath={pathname!} />
            </div>
          </div>
        )}

        {/* Mobile Sidebar (overlay) */}
        {showSidebar && (
          <div className="lg:hidden">
            <GrammarSidebar currentPath={pathname!} />
          </div>
        )}

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 min-w-0",
            showSidebar ? "lg:pl-0" : "",
            className
          )}
        >
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default GrammarLayout;
