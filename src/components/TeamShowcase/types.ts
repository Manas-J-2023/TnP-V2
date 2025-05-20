export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  type: 'technical' | 'non-technical';
  yearJoined: number;
  social?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}