export interface Lesson {
  Id: string;
  Title: string;
  Description: string;
  VideoUrl: string;
}

export interface Content {
  Id: string;
  Title: string;
  Lessons: Lesson[];
}

export interface Course {
  Id: string;
  Title: string;
  SubTitle: string;
  Instructor: string;
  Rating: string;
  NumberOfStudents: string;
  Category: string;
  VideoLink: string;
  RatingCount: string;
  Price: string;
  ImageUrl: string;
  Content: Content[];
}