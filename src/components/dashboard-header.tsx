import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';
import Filters from '@/components/filters';
import { filterOptions } from '@/lib/data';
import { Logo } from '@/components/icons';

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Logo className="h-8 w-8 text-primary" />
        <span className="text-lg">Aceh Flood Insight</span>
      </Link>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground hidden md:block">
          Analysis of Mass Media Communication on Government Response to Floods
        </p>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <Filters options={filterOptions} isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
