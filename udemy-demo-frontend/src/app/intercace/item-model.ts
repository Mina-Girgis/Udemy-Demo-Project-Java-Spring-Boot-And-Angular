export interface ItemModel {

  id: string;
  title: string;
  subTitle?: string;
  instructor: string;
  rating: string;
  numberOfStudents?: string;
  videoLink?: string;
  ratingCount?: string;
  price: string;
  imageUrl: string;
  content?:{
    title:string;
    lessons:string[];
  }[]
}