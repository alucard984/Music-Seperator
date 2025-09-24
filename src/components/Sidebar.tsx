import { Scissors, Music, Mic, Search, Volume2, Link, Menu, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItem {
  icon: any;
  label: string;
  isActive?: boolean;
  hasIndicator?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Volume2, label: 'Remover', isActive: true, hasIndicator: true },
  { icon: Scissors, label: 'Splitter' },
  { icon: Music, label: 'Pitcher' },
  { icon: Search, label: 'Key BPM Finder' },
  { icon: Scissors, label: 'Cutter' },
  { icon: Link, label: 'Joiner' },
  { icon: Mic, label: 'Recorder' },
  { icon: HelpCircle, label: 'Support' },
];

export function Sidebar() {
  return (
    <div className="w-20 bg-sidebar border-r border-border flex flex-col items-center py-6 space-y-8">
      {/* Menu Button */}
      <button className="p-3 hover:bg-muted rounded-lg transition-colors">
        <Menu size={20} className="text-foreground" />
      </button>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4">
        {sidebarItems.map((item, index) => (
          <div key={index} className="relative">
            <button
              className={cn(
                "p-3 rounded-lg transition-colors relative group",
                item.isActive 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon size={20} />
              {item.hasIndicator && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
              )}
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-popover text-popover-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {item.label}
              </div>
            </button>
          </div>
        ))}
      </nav>

      {/* Language Selector */}
      <div className="mt-auto">
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <div className="w-6 h-4 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-sm" />
        </button>
      </div>
    </div>
  );
}