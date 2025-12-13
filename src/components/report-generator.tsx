'use client';

import { useState, useTransition } from 'react';
import { generateReportAction } from '@/lib/actions';
import type { Article } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, FileText, Loader2, TriangleAlert } from 'lucide-react';

interface ReportGeneratorProps {
  articles: Article[];
}

export default function ReportGenerator({ articles }: ReportGeneratorProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleGenerateReport = () => {
    startTransition(async () => {
      setError(null);
      setSummary(null);
      const result = await generateReportAction(articles);
      if (result.success) {
        setSummary(result.summary ?? null);
      } else {
        setError(result.error ?? 'An unknown error occurred.');
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                 <Bot className="h-8 w-8" />
            </div>
            <div>
                <CardTitle>Generate AI Summary Report</CardTitle>
                <CardDescription>
                Analyze the filtered articles to generate a concise summary of media trends and key insights.
                </CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center space-y-4">
          <FileText className="h-12 w-12 text-muted-foreground" />
          <p className="font-semibold">
            {articles.length} article(s) selected for analysis.
          </p>
          <Button onClick={handleGenerateReport} disabled={isPending || articles.length === 0}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Report'
            )}
          </Button>
        </div>

        {error && (
           <Alert variant="destructive" className="mt-6">
             <TriangleAlert className="h-4 w-4" />
             <AlertTitle>Error</AlertTitle>
             <AlertDescription>{error}</AlertDescription>
           </Alert>
        )}

        {summary && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Generated Summary</h3>
            <div className="prose prose-sm max-w-none p-4 bg-muted/50 rounded-lg border">
                <p className="whitespace-pre-wrap font-sans">{summary}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
