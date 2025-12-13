'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
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
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 sm:px-6">
        <div className="container mx-auto flex items-center">
            <Link href="/" className="flex items-center gap-2 font-semibold">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-lg font-headline hidden sm:inline-block">{t('appTitle')}</span>
            </Link>
            <div className="flex-1">
            </div>
            <LanguageSwitcher />
        </div>
    </header>
  );
}
