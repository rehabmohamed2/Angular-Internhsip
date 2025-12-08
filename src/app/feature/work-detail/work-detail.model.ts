export interface WorkDetail {
  id: number;
  title: string;
  year: number;
  category: string;
  description: string;
  sections: ContentSection[];
}

export interface ContentSection {
  id: number;
  type: 'image' | 'heading1' | 'heading2' | 'text';
  content: string;
  alt?: string;
}
