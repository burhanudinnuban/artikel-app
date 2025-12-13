import type { Article, GovernmentResponse, FilterOptions, Region, MediaType } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) return { imageUrl: "https://picsum.photos/seed/error/600/400", imageHint: "placeholder image" };
    return { imageUrl: img.imageUrl, imageHint: img.imageHint };
}

export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Flash Floods Inundate Hundreds of Homes in Aceh',
    source: 'National News Agency',
    date: '2024-10-26T10:00:00Z',
    content: 'Hundreds of homes in several districts of Aceh have been submerged by flash floods following hours of heavy rainfall. Rescue teams have been deployed to evacuate residents trapped in their homes.',
    ...getImage('flood-aerial-1'),
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    region: 'Aceh',
    mediaType: 'Online News',
    sentiment: 'Negative',
    sentimentReason: 'The article reports on a natural disaster causing significant property damage and requiring emergency evacuations, which are negative events.',
  },
  {
    id: 'article-2',
    title: 'North Sumatra Declares State of Emergency Amidst Worsening Floods',
    source: 'Regional Gazette',
    date: '2024-10-27T14:30:00Z',
    content: 'The North Sumatra provincial government has officially declared a state of emergency as floodwaters continue to rise, displacing thousands of families and disrupting major transportation routes.',
    ...getImage('damaged-homes-6'),
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4',
    region: 'North Sumatra',
    mediaType: 'Online News',
    sentiment: 'Negative',
    sentimentReason: 'Describes a worsening crisis, displacement of people, and disruption of infrastructure, indicating a severe negative situation.',
  },
  {
    id: 'article-3',
    title: 'Volunteers Mobilize to Provide Aid in West Sumatra',
    source: 'Community Voice Portal',
    date: '2024-10-28T09:00:00Z',
    content: 'Following the devastating floods, communities across West Sumatra have come together. Volunteers are mobilizing to distribute food, water, and medical supplies to affected areas, showcasing incredible community spirit.',
    ...getImage('aid-distribution-3'),
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    region: 'West Sumatra',
    mediaType: 'Social Media',
    sentiment: 'Positive',
    sentimentReason: 'Focuses on the positive community response, solidarity, and volunteer efforts to help victims, which is an uplifting aspect of the situation.',
  },
  {
    id: 'article-4',
    title: 'Government Pledges Swift Action and Aid for Flood Victims',
    source: 'Presidential Office',
    date: '2024-10-28T16:00:00Z',
    content: 'In a press conference today, the central government pledged to take swift action to address the flood crisis. An initial aid package has been approved for immediate distribution to Aceh, North, and West Sumatra.',
    ...getImage('government-press-conference-4'),
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    region: 'Aceh',
    mediaType: 'Press Release',
    sentiment: 'Positive',
    sentimentReason: 'The government is making a commitment to provide aid and take action, which is a positive step towards resolving the crisis.',
  },
  {
    id: 'article-5',
    title: 'Citizens take to social media to share flood updates #AcehFlood',
    source: 'Social Media Aggregator',
    date: '2024-10-27T18:00:00Z',
    content: 'Thousands of posts with the hashtag #AcehFlood are circulating on social media, showing real-time images and videos of the situation on the ground. Many are calling for more urgent government intervention.',
    ...getImage('social-media-feed-5'),
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    region: 'Aceh',
    mediaType: 'Social Media',
    sentiment: 'Neutral',
    sentimentReason: 'The article reports on the use of social media for information dissemination. While the content shared may be negative, the act of sharing itself is reported neutrally. It also contains a mix of reporting and calls for action.',
  },
  {
    id: 'article-6',
    title: 'Rescue Efforts Hampered by Difficult Terrain in North Sumatra',
    source: 'International Reporter',
    date: '2024-10-29T11:00:00Z',
    content: 'Rescue operations in the remote areas of North Sumatra are facing significant challenges due to landslides and damaged roads. Aid workers are struggling to reach some of the worst-hit villages.',
    ...getImage('rescue-operation-2'),
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    region: 'North Sumatra',
    mediaType: 'Online News',
    sentiment: 'Negative',
    sentimentReason: 'Highlights obstacles and difficulties in the rescue operations, which is a negative development in the disaster response.',
  },
];

export const governmentResponses: GovernmentResponse[] = [
  {
    id: 'response-1',
    title: 'BNPB Dispatches Emergency Response Teams',
    source: 'BNPB (National Disaster Management Agency)',
    date: '2024-10-26T12:00:00Z',
    content: 'The National Disaster Management Agency (BNPB) has dispatched three emergency response teams to Aceh to assist with evacuation and initial damage assessment.',
  },
  {
    id: 'response-2',
    title: 'Ministry of Social Affairs Sets Up Public Kitchens',
    source: 'Ministry of Social Affairs',
    date: '2024-10-28T11:00:00Z',
    content: 'The Ministry of Social Affairs has established several public kitchens in West Sumatra to provide hot meals for evacuees. The kitchens are expected to serve thousands of people daily.',
  },
  {
    id: 'response-3',
    title: 'Infrastructure Repair to Begin Immediately',
    source: 'Ministry of Public Works',
    date: '2024-10-29T15:00:00Z',
    content: 'The Ministry of Public Works and Public Housing has announced that emergency repairs on critical infrastructure, including bridges and roads in North Sumatra, will commence as soon as conditions permit.',
  },
];

export const filterOptions: FilterOptions = {
  regions: ['Aceh', 'North Sumatra', 'West Sumatra'],
  mediaTypes: ['Online News', 'Social Media', 'Press Release'],
  sources: [
    'National News Agency',
    'Regional Gazette',
    'Community Voice Portal',
    'Presidential Office',
    'Social Media Aggregator',
    'International Reporter',
  ],
};
