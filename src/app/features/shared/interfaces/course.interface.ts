export interface Course {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
  isEditable: boolean;
}
