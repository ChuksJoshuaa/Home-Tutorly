import { DataProps, FiltersProps, NavProps } from "@/interface";

export const UniqueID = () => Math.floor(Math.random() * 1000000).toString();

export const navItems: NavProps[] = [
  {
    id: "about us",
    name: "About us",
    link: "/",
  },
  {
    id: "contact",
    name: "Contact",
    link: "/form",
  },
];

export const filtersData: FiltersProps[] = [
  {
    id: "verified",
    name: "Verified",
    isVerified: true,
  },
  {
    id: "male",
    name: "Male",
  },
  {
    id: "female",
    name: "Female",
  },
  {
    id: "kids expert",
    name: "Kids expert",
  },
  {
    id: "science",
    name: "Science",
  },
  {
    id: "art",
    name: "Art",
  },
  {
    id: "5",
    name: "5",
    isRating: true,
  },
  {
    id: "maths",
    name: "Maths",
  },
  {
    id: "english",
    name: "English",
  },
  {
    id: "physics",
    name: "Physics",
  },
  {
    id: "3 years of experience",
    name: "3 Years of experience",
    years: 3,
  },
];

export const tutorsData: DataProps[] = [
  {
    id: UniqueID(),
    name: "Amadi Julian",
    bio: "Julian is a patient, insightful teacher who makes learning engaging and empowering.",
    isVerified: true,
    gender: "Male",
    rating: "4.8",
    subject: "Science",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870651/Screenshot_2024-10-02_at_12.56.45_fey4um.png",
    years: 5
  },
  {
    id: UniqueID(),
    name: "Jane Smith",
    bio: "Jane is a Maths expert with over 10 years of experience, making complex problems simple.",
    isVerified: true,
    gender: "Female",
    rating: "4.9",
    subject: "Maths",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    years: 5
  },
  {
    id: UniqueID(),
    name: "Alice Johnson",
    bio: "Alice is an English tutor who loves helping students excel in their studies and beyond.",
    isVerified: false,
    gender: "Female",
    rating: "4.7",
    subject: "English",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    years: 5
  },
  {
    id: UniqueID(),
    name: "Bob Brown",
    bio: "Bob is a Physics tutor with a knack for making complex concepts simple and understandable.",
    isVerified: true,
    gender: "Male",
    rating: "4.6",
    subject: "Physics",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
    years: 3
  },
  {
    id: UniqueID(),
    name: "Charlie Davis",
    bio: "Charlie is an Art tutor with a creative approach to teaching, inspiring students to excel.",
    isVerified: false,
    gender: "Male",
    rating: "4.5",
    subject: "Art",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870651/Screenshot_2024-10-02_at_12.56.45_fey4um.png",
    years: 4
  },
  {
    id: UniqueID(),
    name: "Diana Evans",
    bio: "Diana is a Kids Expert who makes learning fun and engaging, fostering a love for learning.",
    isVerified: true,
    gender: "Female",
    rating: "4.9",
    subject: "Kids Expert",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    years: 3
  },
  {
    id: UniqueID(),
    name: "Ethan Foster",
    bio: "Ethan is a Science tutor with a focus on practical applications, making learning relevant.",
    isVerified: false,
    gender: "Male",
    rating: "4.4",
    subject: "Science",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
    years: 3
  },
  {
    id: UniqueID(),
    name: "Fiona Green",
    bio: "Fiona is a Maths tutor who helps students achieve their best through personalized teaching.",
    isVerified: true,
    gender: "Female",
    rating: "4.8",
    subject: "Maths",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    years: 10
  },
  {
    id: UniqueID(),
    name: "George Harris",
    bio: "George is an English tutor with a love for literature, inspiring students to enjoy reading.",
    isVerified: false,
    gender: "Male",
    rating: "4.7",
    subject: "English",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
    years: 1
  },
  {
    id: UniqueID(),
    name: "Hannah Ingram",
    bio: "Hannah is a Physics tutor who makes learning enjoyable and accessible for all students.",
    isVerified: true,
    gender: "Female",
    rating: "4.6",
    subject: "Physics",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
  },
  {
    id: UniqueID(),
    name: "Ian Jackson",
    bio: "Ian is an Art tutor with a passion for creativity, encouraging students to express themselves.",
    isVerified: false,
    gender: "Male",
    rating: "4.5",
    subject: "Art",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870651/Screenshot_2024-10-02_at_12.56.45_fey4um.png",
    years: 6
  },
  {
    id: UniqueID(),
    name: "Julia King",
    bio: "Julia is a Kids Expert who creates a fun learning environment, making education enjoyable.",
    isVerified: true,
    gender: "Female",
    rating: "4.9",
    subject: "Kids Expert",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    years: 9
  },
  {
    id: UniqueID(),
    name: "Kevin Lewis",
    bio: "Kevin is a Science tutor with a focus on student success, helping them achieve their goals.",
    isVerified: false,
    gender: "Male",
    rating: "4.4",
    subject: "Science",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
    years: 5
  },
  {
    id: UniqueID(),
    name: "Laura Martinez",
    bio: "Laura is a Maths tutor who simplifies complex problems, making learning easier for students.",
    isVerified: true,
    gender: "Female",
    rating: "4.8",
    subject: "Maths",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    years: 2
  },
  {
    id: UniqueID(),
    name: "Michael Nelson",
    bio: "Michael is an English tutor with a passion for teaching, helping students excel academically.",
    isVerified: false,
    gender: "Male",
    rating: "4.7",
    subject: "English",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870651/Screenshot_2024-10-02_at_12.56.45_fey4um.png",
    years: 5
  },
  {
    id: UniqueID(),
    name: "Natalie Owens",
    bio: "Natalie is a Physics tutor who inspires students to love learning and achieve their best.",
    isVerified: true,
    gender: "Female",
    rating: "4.6",
    subject: "Physics",
    img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    years: 7
  },
];