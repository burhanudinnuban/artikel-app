'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import type { FilterOptions } from '@/lib/types';
import { useI18n } from '@/lib/i18n';

interface FiltersProps {
  options: FilterOptions;
  isMobile?: boolean;
}

export default function Filters({ options, isMobile = false }: FiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { t } = useI18n();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );
  
  const handleSelectChange = (name: string, value: string) => {
    const newQuery = createQueryString(name, value === 'all' ? '' : value);
    router.push(`${pathname}?${newQuery}`);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('q') as string;
    const newQuery = createQueryString('q', searchQuery);
    router.push(`${pathname}?${newQuery}`);
  };

  const handleClear = () => {
    router.push(pathname);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="space-y-2">
        <Label htmlFor="search">{t('keywordSearch')}</Label>
        <Input 
          id="search" 
          name="q"
          placeholder={t('searchPlaceholder')}
          defaultValue={searchParams.get('q') || ''} 
        />
      </form>

      <div className="space-y-2">
        <Label htmlFor="region">{t('region')}</Label>
        <Select
          onValueChange={(value) => handleSelectChange('region', value)}
          defaultValue={searchParams.get('region') || 'all'}
        >
          <SelectTrigger id="region">
            <SelectValue placeholder={t('allRegions')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('allRegions')}</SelectItem>
            {options.regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mediaType">{t('mediaType')}</Label>
        <Select
          onValueChange={(value) => handleSelectChange('mediaType', value)}
          defaultValue={searchParams.get('mediaType') || 'all'}
        >
          <SelectTrigger id="mediaType">
            <SelectValue placeholder={t('allMediaTypes')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('allMediaTypes')}</SelectItem>
            {options.mediaTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {t(type.toLowerCase().replace(/ /g, ''))}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="source">{t('newsSource')}</Label>
        <Select
          onValueChange={(value) => handleSelectChange('source', value)}
          defaultValue={searchParams.get('source') || 'all'}
        >
          <SelectTrigger id="source">
            <SelectValue placeholder={t('allSources')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('allSources')}</SelectItem>
            {options.sources.map((source) => (
              <SelectItem key={source} value={source}>
                {source}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button variant="ghost" onClick={handleClear} className="w-full">
        {t('clearAllFilters')}
      </Button>
    </div>
  );
}
