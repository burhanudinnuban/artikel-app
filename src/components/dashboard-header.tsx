'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PanelLeft, Globe } from 'lucide-react';
import Filters from '@/components/filters';
import { filterOptions } from '@/lib/data';
import { Logo } from '@/components/icons';
import { useI18n } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLanguage('en')} disabled={language === 'en'}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('id')} disabled={language === 'id'}>
          Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export default function DashboardHeader() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Logo className="h-8 w-8 text-primary" />
        <span className="text-lg">{t('appTitle')}</span>
      </Link>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground hidden md:block">
          {t('appDescription')}
        </p>
      </div>
      <LanguageSwitcher />
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
              <h2 className="text-xl font-semibold mb-4">{t('filters')}</h2>
              <Filters options={filterOptions} isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
