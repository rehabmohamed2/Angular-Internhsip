export interface CardDetails {
  id: number;
  image_src: string;
  title: string;
  description: string;
  date: number;
  detail_text: string;
}

export interface RecentPost {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  isActive?: boolean;
}
