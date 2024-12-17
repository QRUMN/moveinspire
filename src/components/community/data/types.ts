export interface FeaturedMember {
  name: string;
  title: string;
  image: string;
  quote: string;
  story: string;
}

export interface CommunityMetrics {
  activeMembers: string;
  monthlyClasses: string;
  successStories: string;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  image?: string;
  timestamp: Date;
  likes: number;
  comments: number;
}

export interface SuccessStory {
  id: string;
  name: string;
  image: string;
  preview: string;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
}