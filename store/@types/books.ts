export interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  price: number;
  cover: string;
  isFavorite: boolean;
  isInTreeding: boolean;
  createdAt: Date;
  updatedAt: Date;
}
