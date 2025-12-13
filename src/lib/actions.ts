
'use server';

import type { Article } from './types';
import { generateSummaryReport, type GenerateSummaryReportInput } from '@/ai/flows/generate-summary-reports';

interface ActionResult {
  success: boolean;
  summary?: string;
  error?: string;
}

export async function generateReportAction(articles: Article[], lang: 'en' | 'id'): Promise<ActionResult> {
  if (articles.length === 0) {
    return { success: false, error: lang === 'id' ? "Tidak ada artikel untuk diringkas." : "No articles to summarize." };
  }

  try {
    const articleContent = articles.map(
      (article) => `Title: ${lang === 'id' ? article.title_id : article.title_en}\nSource: ${article.source}\nDate: ${article.date}\n\n${lang === 'id' ? article.content_id : article.content_en}`
    );
    
    const input: GenerateSummaryReportInput = { articles: articleContent };
    const result = await generateSummaryReport(input);
    
    if (result.summary) {
      return { success: true, summary: result.summary };
    } else {
      return { success: false, error: lang === 'id' ? "Model AI tidak memberikan ringkasan." : "The AI model did not return a summary." };
    }
  } catch (error) {
    console.error("Error generating report:", error);
    return { success: false, error: lang === 'id' ? "Terjadi kesalahan tak terduga saat membuat laporan. Silakan coba lagi nanti." : "An unexpected error occurred while generating the report. Please try again later." };
  }
}
