'use server';

/**
 * @fileOverview A flow to generate summary reports about the communication of mass media regarding the Aceh flood.
 *
 * - generateSummaryReport - A function that handles the generation of the summary report.
 * - GenerateSummaryReportInput - The input type for the generateSummaryReport function.
 * - GenerateSummaryReportOutput - The return type for the generateSummaryReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSummaryReportInputSchema = z.object({
  articles: z.array(z.string()).describe('A list of news articles related to the Aceh flood.'),
});
export type GenerateSummaryReportInput = z.infer<
  typeof GenerateSummaryReportInputSchema
>;

const GenerateSummaryReportOutputSchema = z.object({
  summary: z.string().describe('A summary report about the communication of mass media regarding the Aceh flood.'),
});
export type GenerateSummaryReportOutput = z.infer<
  typeof GenerateSummaryReportOutputSchema
>;

export async function generateSummaryReport(
  input: GenerateSummaryReportInput
): Promise<GenerateSummaryReportOutput> {
  return generateSummaryReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSummaryReportPrompt',
  input: {schema: GenerateSummaryReportInputSchema},
  output: {schema: GenerateSummaryReportOutputSchema},
  prompt: `You are an AI assistant tasked with generating summary reports about the communication of mass media regarding the Aceh flood.

  Please analyze the following news articles and generate a concise summary report highlighting key insights and media trends.

  News Articles:
  {{#each articles}}
  - {{{this}}}
  {{/each}}
  `,
});

const generateSummaryReportFlow = ai.defineFlow(
  {
    name: 'generateSummaryReportFlow',
    inputSchema: GenerateSummaryReportInputSchema,
    outputSchema: GenerateSummaryReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
