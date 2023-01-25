export interface Category{
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryInBooks{
  category: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }
}
