export type Region = "Aceh" | "North Sumatra" | "West Sumatra";
export type MediaType = "Online News" | "Social Media" | "Press Release";
export type Sentiment = "Positive" | "Negative" | "Neutral";

export interface Article {
  id: string;
  title_en: string;
  title_id: string;
  source: string;
  date: string; // ISO 8601 format
  content_en: string;
  content_id: string;
  imageUrl: string;
  imageHint: string;
  videoUrl: string;
  region: Region;
  mediaType: MediaType;
  sentiment: Sentiment;
  sentimentReason_en: string;
  sentimentReason_id: string;
}

export interface GovernmentResponse {
  id: string;
  title_en: string;
  title_id: string;
  source: string; // e.g., BNPB, Ministry of Social Affairs
  date: string; // ISO 8601 format
  content_en: string;
  content_id: string;
}

export type TimelineEvent = (Article | GovernmentResponse) & { type: 'article' | 'response' };

export interface FilterOptions {
  regions: Region[];
  mediaTypes: MediaType[];
  sources: string[];
}
