export interface LatestJob {
    id: number;
    title: string;
    company: string;
    location: string;
    logo: string;
    logoColor: string;
    type: string;
    tags: string[];
}

export interface FeaturedJob {
    id: number;
    title: string;
    company: string;
    location: string;
    logo: string;
    logoColor: string;
    type: string;
    description: string;
    tags: string[];
    tagColors: { [key: string]: string };
  }