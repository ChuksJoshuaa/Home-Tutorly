import { FiltersProps, NavProps } from "@/interface";

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
