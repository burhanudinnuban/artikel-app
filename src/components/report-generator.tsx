'use client';

import { useState, useTransition } from 'react';
import { generateReportAction } from '@/lib/actions';
import type { Article } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, FileText, Loader2, TriangleAlert, Download } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

interface ReportGeneratorProps {
  articles: Article[];
}

export default function ReportGenerator({ articles }: ReportGeneratorProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { t, language } = useI18n();

  const handleGenerateReport = () => {
    startTransition(async () => {
      setError(null);
      setSummary(null);
      const result = await generateReportAction(articles, language);
      if (result.success) {
        setSummary(result.summary ?? null);
      } else {
        setError(result.error ?? t('unknownError'));
      }
    });
  };

  const handleDownloadWord = () => {
    if (!summary) return;

    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: t('generatedSummary'),
                bold: true,
                size: 28,
              }),
            ],
            spacing: {
              after: 240,
            }
          }),
          ...summary.split('\n').map(text => new Paragraph({
            children: [new TextRun(text)],
            spacing: {
              after: 120,
            }
          })),
        ],
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "ai-summary-report.docx");
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
                <CardTitle>{t('generateAiReport')}</CardTitle>
                <CardDescription>
                {t('generateAiReportDescription')}
                </CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center space-y-4">
          <FileText className="h-12 w-12 text-muted-foreground" />
          <p className="font-semibold">
            {t('articlesSelected', { count: articles.length })}
          </p>
          <Button onClick={handleGenerateReport} disabled={isPending || articles.length === 0}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('generating')}
              </>
            ) : (
              t('generateReport')
            )}
          </Button>
        </div>

        {error && (
           <Alert variant="destructive" className="mt-6">
             <TriangleAlert className="h-4 w-4" />
             <AlertTitle>{t('error')}</AlertTitle>
             <AlertDescription>{error}</AlertDescription>
           </Alert>
        )}

        {summary && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{t('generatedSummary')}</h3>
              <Button variant="outline" size="sm" onClick={handleDownloadWord}>
                <Download className="mr-2 h-4 w-4" />
                {t('downloadWord')}
              </Button>
            </div>
            <div className="prose prose-sm max-w-none p-4 bg-muted/50 rounded-lg border">
                <p className="whitespace-pre-wrap font-sans">{summary}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
