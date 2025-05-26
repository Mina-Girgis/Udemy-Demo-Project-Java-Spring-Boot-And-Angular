
import { Injectable } from "@angular/core";

import { ItemModel } from "../intercace/item-model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
    data:{title:string,courses:ItemModel[]}[]=[
    {
      title:"Recommended For You...",
       courses: [
   {
    id: '1',
    title: 'Angular - The Complete Guide (2024 Edition)',
    subTitle: 'Master Angular from scratch and build reactive web apps',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.7',
    ratingCount: '89,321',
    numberOfStudents: '230,000+',
    price: '19.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg',
    videoLink: 'https://www.youtube.com/watch?v=3qBXWUpoPHo',
    content: [
      {
        title: 'Getting Started',
        lessons: ['Introduction', 'Installation', 'First Angular App']
      },
      {
        title: 'Components & Data Binding',
        lessons: ['What are Components?', 'Property & Event Binding', 'Two-Way Binding']
      }
    ]
  },
  {
    id: '2',
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    instructor: 'Academind by Maximilian Schwarzmüller',
    rating: '4.8',
    ratingCount: '112,334',
    numberOfStudents: '300,000+',
    price: '19.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    videoLink: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
    content: [
      {
        title: 'React Basics',
        lessons: ['React Overview', 'JSX', 'Components & Props']
      },
      {
        title: 'State & Effects',
        lessons: ['useState', 'useEffect', 'Custom Hooks']
      }
    ]
  },
  {
    id: '3',
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    instructor: 'Jonas Schmedtmann',
    rating: '4.7',
    ratingCount: '75,241',
    numberOfStudents: '180,000+',
    price: '19.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg',
    videoLink: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
    content: [
      {
        title: 'Intro to Node.js',
        lessons: ['What is Node.js?', 'Installing Node', 'Creating Server']
      },
      {
        title: 'Express Framework',
        lessons: ['Routing', 'Middleware', 'Error Handling']
      }
    ]
  },
  {
    id: '4',
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    instructor: 'Jonas Schmedtmann',
    rating: '4.8',
    ratingCount: '210,412',
    numberOfStudents: '600,000+',
    price: '18.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
    videoLink: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
    content: [
      {
        title: 'JavaScript Basics',
        lessons: ['Variables', 'Operators', 'Control Structures']
      },
      {
        title: 'DOM Manipulation',
        lessons: ['Selectors', 'Events', 'Timers']
      }
    ]
  },
  {
    id: '5',
    title: 'Python for Data Science and Machine Learning Bootcamp',
    instructor: 'Jose Portilla',
    rating: '4.7',
    ratingCount: '110,000',
    numberOfStudents: '400,000+',
    price: '14.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg',
    videoLink: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI',
    content: [
      {
        title: 'Python Basics',
        lessons: ['Data Types', 'Functions', 'Loops']
      },
      {
        title: 'Pandas & Matplotlib',
        lessons: ['DataFrames', 'Plotting', 'Seaborn Intro']
      }
    ]
  },
  {
    id: '6',
    title: 'Java Programming Masterclass updated for Java 17',
    instructor: 'Tim Buchalka',
    rating: '4.6',
    ratingCount: '130,000',
    numberOfStudents: '500,000+',
    price: '17.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/533682_c10c_4.jpg',
    videoLink: 'https://www.youtube.com/watch?v=eIrMbAQSU34',
    content: [
      {
        title: 'Java Fundamentals',
        lessons: ['Installing JDK', 'First Java App', 'OOP Basics']
      },
      {
        title: 'Advanced Java',
        lessons: ['Collections', 'Streams', 'Concurrency']
      }
    ]
  },
  {
    id: '7',
    title: 'The Web Developer Bootcamp 2024',
    instructor: 'Colt Steele',
    rating: '4.7',
    ratingCount: '198,000',
    numberOfStudents: '650,000+',
    price: '15.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg',
    videoLink: 'https://www.youtube.com/watch?v=3JluqTojuME',
    content: [
      {
        title: 'HTML & CSS',
        lessons: ['HTML Elements', 'CSS Flexbox', 'Media Queries']
      },
      {
        title: 'JS & DOM',
        lessons: ['JS Basics', 'Events', 'Interactive Projects']
      }
    ]
  },
  {
    id: '8',
    title: 'Docker and Kubernetes: The Complete Guide',
    instructor: 'Stephen Grider',
    rating: '4.8',
    ratingCount: '77,000',
    numberOfStudents: '220,000+',
    price: '16.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg',
    videoLink: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
    content: [
      {
        title: 'Docker Basics',
        lessons: ['Containers', 'Images', 'Volumes']
      },
      {
        title: 'Kubernetes Intro',
        lessons: ['Pods', 'Deployments', 'Services']
      }
    ]
  },
  {
    id: '9',
    title: 'C# Basics for Beginners: Learn C# Fundamentals by Coding',
    instructor: 'Mosh Hamedani',
    rating: '4.6',
    ratingCount: '88,000',
    numberOfStudents: '290,000+',
    price: '13.99',
    imageUrl: 'https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg',
    videoLink: 'https://www.youtube.com/watch?v=GhQdlIFylQ8',
    content: [
      {
        title: 'Getting Started with C#',
        lessons: ['Installing Visual Studio', 'Variables', 'Loops']
      },
      {
        title: 'Object-Oriented Programming',
        lessons: ['Classes', 'Inheritance', 'Polymorphism']
      }
    ]
  }
       ]
    },
    {
      title:"Personalized course recommendations",
      courses:[
          {
            id: '10',
            title: 'Mastering TypeScript with Modern Projects',
            instructor: 'Marius Espejo',
            rating: '4.7',
            ratingCount: '34,000',
            numberOfStudents: '95,000+',
            price: '14.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1501104_967d_13.jpg',
            content: [
              {
                title: 'TypeScript Basics',
                lessons: ['Types & Interfaces', 'Functions', 'Generics']
              },
              {
                title: 'Advanced Projects',
                lessons: ['Building a Todo App', 'Type-Safe APIs']
              }
            ]
          },
          {
            id: '11',
            title: 'Next.js & React - Build Full Stack Apps',
            instructor: 'Andrew Mead',
            rating: '4.8',
            ratingCount: '22,500',
            numberOfStudents: '70,000+',
            price: '17.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1501104_967d_13.jpg',
            content: [
              {
                title: 'Intro to Next.js',
                lessons: ['Pages & Routing', 'API Routes']
              },
              {
                title: 'Full Stack Integration',
                lessons: ['MongoDB', 'Authentication']
              }
            ]
          },
          {
            id: '12',
            title: 'SwiftUI for iOS 16 Apps',
            instructor: 'Angela Yu',
            rating: '4.7',
            ratingCount: '19,800',
            numberOfStudents: '60,000+',
            price: '13.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1708340_7108_4.jpg',
            content: [
              {
                title: 'SwiftUI Basics',
                lessons: ['Views & Modifiers', 'Bindings']
              },
              {
                title: 'iOS App Projects',
                lessons: ['Weather App', 'Expense Tracker']
              }
            ]
          },
          {
            id: '13',
            title: 'The Ultimate Blender Guide: 3D Modeling & Animation',
            instructor: 'Darrin Lile',
            rating: '4.6',
            ratingCount: '45,000',
            numberOfStudents: '140,000+',
            price: '11.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1708340_7108_4.jpg',
            content: [
              {
                title: 'Blender Interface',
                lessons: ['Navigation', 'Viewports', 'Shortcuts']
              },
              {
                title: 'Modeling & Rigging',
                lessons: ['Mesh Editing', 'Armatures']
              }
            ]
          },
          {
            id: '14',
            title: 'Unity 2D & 3D Game Development',
            instructor: 'Ben Tristem',
            rating: '4.7',
            ratingCount: '75,000',
            numberOfStudents: '210,000+',
            price: '15.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1708340_7108_4.jpg',
            content: [
              {
                title: 'Unity Setup',
                lessons: ['Installing Unity Hub', 'Basic Controls']
              },
              {
                title: 'Game Development',
                lessons: ['Player Movement', 'Collisions', 'Enemy AI']
              }
            ]
          },
          {
            id: '15',
            title: 'Photoshop CC: From Beginner to Advanced',
            instructor: 'Chris Parker',
            rating: '4.5',
            ratingCount: '38,000',
            numberOfStudents: '120,000+',
            price: '12.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1708340_7108_4.jpg',
            content: [
              {
                title: 'Photoshop Interface',
                lessons: ['Tools Overview', 'Workspaces']
              },
              {
                title: 'Image Editing',
                lessons: ['Layers', 'Masks', 'Retouching']
              }
            ]
          },
          {
            id: '16',
            title: 'SQL Bootcamp: Learn SQL by Building Projects',
            instructor: 'Jose Portilla',
            rating: '4.8',
            ratingCount: '95,000',
            numberOfStudents: '300,000+',
            price: '14.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/762616_7693_3.jpg',
            content: [
              {
                title: 'SQL Basics',
                lessons: ['SELECT Queries', 'WHERE Clause']
              },
              {
                title: 'Advanced SQL',
                lessons: ['JOINs', 'GROUP BY', 'Subqueries']
              }
            ]
          },
          {
            id: '17',
            title: 'Cybersecurity for Beginners',
            instructor: 'Nathan House',
            rating: '4.6',
            ratingCount: '29,000',
            numberOfStudents: '90,000+',
            price: '18.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/648826_f0e5_4.jpg',
            content: [
              {
                title: 'Cybersecurity Basics',
                lessons: ['Threats & Vulnerabilities', 'Malware Types']
              },
              {
                title: 'Real-World Scenarios',
                lessons: ['Phishing Simulations', 'Password Cracking']
              }
            ]
          },
          {
            id: '18',
            title: 'Financial Analysis for Business Decisions',
            instructor: '365 Careers',
            rating: '4.7',
            ratingCount: '44,000',
            numberOfStudents: '150,000+',
            price: '16.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/648826_f0e5_4.jpg',
            content: [
              {
                title: 'Financial Statements',
                lessons: ['Balance Sheet', 'Income Statement']
              },
              {
                title: 'Key Metrics',
                lessons: ['ROI', 'Net Profit Margin', 'Cash Flow']
              }
            ]
          }
      ]
    },
    {
      title:"New and noteworthy in IT Certifications",
      courses:[
        {
          id: '19',
          title: 'Docker & Kubernetes: The Complete Guide',
          instructor: 'Stephen Grider',
          rating: '4.7',
          ratingCount: '85,000',
          numberOfStudents: '230,000+',
          price: '15.99',
          imageUrl: 'https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg',
          content: [
            {
              title: 'Containers & Images',
              lessons: ['Dockerfile', 'Image Creation']
            },
            {
              title: 'Kubernetes Basics',
              lessons: ['Pods & Deployments', 'Services']
            }
          ]
        },
        {
          id: '20',
          title: 'The Data Science Course: Complete Bootcamp',
          instructor: '365 Careers',
          rating: '4.6',
          ratingCount: '115,000',
          numberOfStudents: '300,000+',
          price: '13.99',
          imageUrl: 'https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg',
          content: [
            {
              title: 'Python & Math',
              lessons: ['Descriptive Stats', 'Numpy Basics']
            },
            {
              title: 'ML Foundations',
              lessons: ['Linear Regression', 'Logistic Regression']
            }
          ]
        },
        {
          id: '21',
          title: 'AWS Certified Solutions Architect – Associate',
          instructor: 'DolfinEd',
          rating: '4.8',
          ratingCount: '92,000',
          numberOfStudents: '350,000+',
          price: '17.99',
          imageUrl: 'https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg',
          content: [
            {
              title: 'AWS Core Services',
              lessons: ['EC2', 'S3', 'RDS']
            },
            {
              title: 'Architecture Best Practices',
              lessons: ['Scalability', 'Fault Tolerance']
            }
          ]
        },
        {
          id: '22',
          title: 'Figma UI/UX Design Essentials',
          instructor: 'Daniel Walter Scott',
          rating: '4.7',
          ratingCount: '40,000',
          numberOfStudents: '120,000+',
          price: '11.99',
          imageUrl: 'https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg',
          content: [
            {
              title: 'Figma Basics',
              lessons: ['Frames', 'Prototyping']
            },
            {
              title: 'UI/UX Projects',
              lessons: ['Mobile App UI', 'Dashboard Design']
            }
          ]
        },
        {
          id: '23',
          title: 'Machine Learning A-Z: Hands-On Python & R',
          instructor: 'Kirill Eremenko',
          rating: '4.5',
          ratingCount: '140,000',
          numberOfStudents: '550,000+',
          price: '13.99',
          imageUrl: 'https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg',
          content: [
            {
              title: 'Supervised Learning',
              lessons: ['Regression', 'Classification']
            },
            {
              title: 'Unsupervised Learning',
              lessons: ['Clustering', 'Dimensionality Reduction']
            }
          ]
        },
        {
          id: '24',
          title: 'The Complete Ethical Hacking Course',
          instructor: 'Ermin Kreponic',
          rating: '4.6',
          ratingCount: '55,000',
          numberOfStudents: '180,000+',
          price: '12.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1501104_967d_13.jpg',
          content: [
            {
              title: 'Hacking Basics',
              lessons: ['Reconnaissance', 'Scanning']
            },
            {
              title: 'Real Attacks',
              lessons: ['MITM', 'SQL Injection']
            }
          ]
        },
        {
          id: '25',
          title: 'Complete Python Developer in 2024',
          instructor: 'Andrei Neagoie',
          rating: '4.8',
          ratingCount: '123,000',
          numberOfStudents: '500,000+',
          price: '14.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1501104_967d_13.jpg',
          content: [
            {
              title: 'Python Basics',
              lessons: ['Syntax', 'Loops', 'Functions']
            },
            {
              title: 'Real-World Apps',
              lessons: ['Web Scraper', 'CLI App']
            }
          ]
        },
        {
          id: '26',
          title: 'The Ultimate MySQL Bootcamp',
          instructor: 'Colt Steele',
          rating: '4.7',
          ratingCount: '95,000',
          numberOfStudents: '280,000+',
          price: '13.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1708340_7108_4.jpg',
          content: [
            {
              title: 'SQL Basics',
              lessons: ['SELECT', 'INSERT', 'UPDATE']
            },
            {
              title: 'Projects',
              lessons: ['Blog Database', 'User Analytics']
            }
          ]
        },
        {
          id: '27',
          title: 'Zero to Hero in Node.js',
          instructor: 'Azat Mardan',
          rating: '4.6',
          ratingCount: '60,000',
          numberOfStudents: '200,000+',
          price: '16.99',
            imageUrl: 'https://img-c.udemycdn.com/course/240x135/1708340_7108_4.jpg',
          content: [
            {
              title: 'Node.js Core',
              lessons: ['Modules', 'File System']
            },
            {
              title: 'Web APIs',
              lessons: ['Express', 'Middleware', 'Routing']
            }
          ]
        }
      ],
    }

        ];

    getAllCourses(){
        return this.data;
    }


    getCourseById(id:string){
        for (const category of this.data) {
            const course = category.courses.find(c => c.id === id);
            if (course) return course;
        }
        return undefined;
    }



}