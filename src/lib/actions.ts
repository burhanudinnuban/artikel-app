
'use server';

import type { Article } from './types';
import { generateSummaryReport, type GenerateSummaryReportInput } from '@/ai/flows/generate-summary-reports';

interface ActionResult {
  success: boolean;
  summary?: string;
  error?: string;
}

export async function generateReportAction(articles: Article[]): Promise<ActionResult> {
  if (articles.length === 0) {
    return { success: false, error: "No articles to summarize." };
  }

  try {
    const articleContent = articles.map(
      (article) => `Title: ${article.title}\nSource: ${article.source}\nDate: ${article.date}\n\n${article.content}`
    );
    
    const input: GenerateSummaryReportInput = { articles: articleContent };
    const result = await generateSummaryReport(input);
    
    if (result.summary) {
      return { success: true, summary: result.summary };
    } else {
      return { success: false, error: "The AI model did not return a summary." };
    }
  } catch (error) {
    console.error("Error generating report:", error);
    return { success: false, error: "An unexpected error occurred while generating the report. Please try again later." };
  }
}
