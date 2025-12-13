'use client';

import Image from 'next/image';
import { articles as allArticles, governmentResponses as allGovernmentResponses, filterOptions as allFilterOptions } from '@/lib/data';
import type { Article, GovernmentResponse, TimelineEvent } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Newspaper, Landmark, Clock, Mountain, MessageCircle, Globe } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

import DashboardHeader from '@/components/dashboard-header';
import Filters from '@/components/filters';
import ReportGenerator from '@/components/report-generator';

function getSentimentClasses(sentiment: Article['sentiment']) {
  switch (sentiment) {
    case 'Positive':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Negative':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Neutral':
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

function TimelineItem({ event }: { event: TimelineEvent }) {
  const isArticle = event.type === 'article';
  const Icon = isArticle ? Newspaper : Landmark;
  const { t, language } = useI18n();

  const title = language === 'id' ? event.title_id : event.title_en;
  const content = language === 'id' ? event.content_id : event.content_en;
  const sentimentReason = isArticle ? (language === 'id' ? (event as Article).sentimentReason_id : (event as Article).sentimentReason_en) : '';

  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-card border shadow-sm">
          <Icon className="h-6 w-6 text-primary" />
        </span>
        <div className="w-px flex-grow bg-border"></div>
      </div>
      <Card className="flex-1 -mt-2">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="flex items-center gap-4 pt-1 text-sm">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {new Date(event.date).toLocaleDateString()}</span>
            <span className="flex items-center gap-1.5"><Globe className="h-4 w-4" /> {event.source}</span>
            {isArticle && (
              <span className="flex items-center gap-1.5"><Mountain className="h-4 w-4" /> {(event as Article).region}</span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isArticle && (
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-video">
                <Image
                  src={(event as Article).imageUrl}
                  alt={title}
                  fill
                  className="object-cover rounded-md border"
                  data-ai-hint={(event as Article).imageHint}
                />
              </div>
              <div className="relative aspect-video">
                <video controls className="w-full h-full object-cover rounded-md border">
                    <source src={(event as Article).videoUrl} type="video/mp4" />
                    {t('videoNotSupported')}
                </video>
              </div>
            </div>
          )}
          <p className="text-muted-foreground">{content}</p>
          {isArticle && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2"><MessageCircle className="h-4 w-4" /> {t('sentimentAnalysis')}</h4>
              <p className={cn("text-sm p-3 rounded-md border", getSentimentClasses((event as Article).sentiment))}>
                <strong>{t((event as Article).sentiment.toLowerCase() as 'positive' | 'negative' | 'neutral')}:</strong> {sentimentReason}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function TimelineView({ events }: { events: TimelineEvent[] }) {
  const { t } = useI18n();
  if (events.length === 0) {
    return <p className="text-center text-muted-foreground mt-8">{t('noEvents')}</p>;
  }
  return (
    <div className="space-y-8">
      {events.map((event) => (
        <TimelineItem key={`${event.type}-${event.id}`} event={event} />
      ))}
    </div>
  );
}

interface PageProps {
  searchParams: {
    region?: string;
    mediaType?: string;
    source?: string;
    q?: string;
  };
}

export default function Home({ searchParams }: PageProps) {
  const { region, mediaType, source, q } = searchParams;
  const { t, language } = useI18n();

  const filterOptions = {
    ...allFilterOptions,
    regions: allFilterOptions.regions,
    mediaTypes: allFilterOptions.mediaTypes,
    sources: allFilterOptions.sources,
  };


  const filteredArticles = allArticles.filter((article) => {
    const title = language === 'id' ? article.title_id : article.title_en;
    const content = language === 'id' ? article.content_id : article.content_en;

    return (
      (!region || article.region === region) &&
      (!mediaType || article.mediaType === mediaType) &&
      (!source || article.source === source) &&
      (!q || title.toLowerCase().includes(q.toLowerCase()) || content.toLowerCase().includes(q.toLowerCase()))
    );
  });

  const filteredResponses = allGovernmentResponses.filter((response) => {
    const title = language === 'id' ? response.title_id : response.title_en;
    const content = language === 'id' ? response.content_id : response.content_en;
    return (
      (!q || title.toLowerCase().includes(q.toLowerCase()) || content.toLowerCase().includes(q.toLowerCase()))
    );
  });

  const timelineEvents: TimelineEvent[] = [
    ...filteredArticles.map(a => ({ ...a, type: 'article' as const })),
    ...filteredResponses.map(r => ({ ...r, type: 'response' as const }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-1 grid md:grid-cols-[280px_1fr] gap-8 p-4 md:p-8">
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">{t('filters')}</h2>
            <Filters options={filterOptions} />
          </div>
        </aside>
        <section>
           <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="timeline">{t('eventTimeline')}</TabsTrigger>
              <TabsTrigger value="report">{t('aiSummaryReport')}</TabsTrigger>
            </TabsList>
            <TabsContent value="timeline">
              <TimelineView events={timelineEvents} />
            </TabsContent>
            <TabsContent value="report">
              <ReportGenerator articles={filteredArticles} />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
