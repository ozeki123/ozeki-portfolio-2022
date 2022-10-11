import holo from "./assets/holo-full-screen.jpg";
import bolt from "./assets/playground-final.jpg";
import mfm from "./assets/mfm-full-screen.jpg";
import mfw from "./assets/mfw-full-screen.jpg";
import holoParallax from "./assets/holo-parallax.jpg";
import holoHome from "./assets/holo-desktop.png";
import holoPage from "./assets/holo-group-page.png";
import holoscreen1 from "./assets/holo-screen-1.jpg";
import holoscreen3 from "./assets/holo-screen-3.jpg";

export default [
  {
    id: 1,
    date: "Japan ・ 2022",
    name: "Sportify",
    title: "Sportify",
    subtitle: "Booking",
    category: "Web Development",
    role: ["Front End Development", "Back End Development", "UI/UX Design"],
    type: "image/jpeg",
    description: "A web app concept that allows people to book sports related spaces.",
    description1: "A web app concept that allows people to",
    description2: "book sports related spaces.",
    full_description: "Sportify (creative name I know) is the first full project that I've tried creating as a developer. It has been recreated over and over again as part of my learning process a few years ago, and I recently decided to finish it in my spare time. Most of the development was done as when I was just starting out, so there is a lot of spaghetti code (currently refactoring). The app is built in the MERN stack (super original idea). As this project was for my learning, I've tried to use as little libraries and packages as possible, and built everything I could from scratch.",
    feature_text1: "The apps main functionality is to allow users to browse sports related spaces and book them. Alternatively, partners of the app can host experiences, where an activity is offered as a service instead of renting a space. Users also have the group finder functionality available, allowing users to form groups to organize events and play together. The goal of holo was to conceptualize a sports platform that not only allows users the opportunity to play sports, but to connect with people and make friends along the way.",
    feature_text2: "The app leverages a MongoDB/Express back end that uses JWT for authentication. React is used for the front end, together with the Context API  to persist login state. The app uses the stripe API to handle payment.",
    // size: 5485,
    width: "100%",
    height: "70%",
    src: holo,
    bg1: holoParallax,
    images: [holoHome, holoPage],
    screen1: holoHome,
    screens: [holoscreen1, holoscreen3],
    website: "Sportify.com"
  },
  
  {
    id: 2,
    name: "Morph for Men",
    date: "Japan ・ 2021",
    title: "Morph for Men",
    subtitle: "Insurance",
    category: "Web Development",
    role: ["Front End Development", "Back End Development"],
    type: "image/jpeg",
    description: "A website that allows users to purchase insurance policies tailored to men.",
    description1: "A website that allows users to purchase",
    description2: "insurance policies tailored to men.",
    full_description: "Sportify (creative name I know) is the first full project that I've tried creating as a developer. It has been recreated over and over again as part of my learning process a few years ago, and I recently decided to finish it in my spare time. Most of the development was done as when I was just starting out, so there is a lot of spaghetti code (currently refactoring). The app is built in the MERN stack (super original idea). As this project was for my learning, I've tried to use as little libraries and packages as possible, and built everything I could from scratch.",
    // size: 82091,
    width: "100%",
    height: "70%",
    src: mfm,
    screen1: holoHome,
    screens: [holoscreen1, holoscreen3],
    website: "Americanhome.com"
  },
  {
    id: 3,
    name: "Morph for Women",
    date: "Japan ・ 2021",
    title: "Morph for Women",
    subtitle: "Insurance",
    category: "Web Development",
    role: ["Front End Development", "Back End Development"],
    type: "image/png",
    description: "A website that allows users to purchase insurance policies tailored to women.",
    description1: "A website that allows users to purchase",
    description2: "insurance policies tailored to women.",
    full_description: "Sportify (creative name I know) is the first full project that I've tried creating as a developer. It has been recreated over and over again as part of my learning process a few years ago, and I recently decided to finish it in my spare time. Most of the development was done as when I was just starting out, so there is a lot of spaghetti code (currently refactoring). The app is built in the MERN stack (super original idea). As this project was for my learning, I've tried to use as little libraries and packages as possible, and built everything I could from scratch.",
    // size: 230752,
    width: "100%",
    height: "70%",
    src: mfw,
    screen1: holoHome,
    screens: [holoscreen1, holoscreen3],
    website: "Americanhome.com"
  },
  {
    id: 4,
    date: "Japan ・ 2022",
    name: "Playground",
    title: "Playground",
    subtitle: "Projects",
    category: "Web Development",
    role: ["Front End Development", "Back End Development", "UI/UX Design"],
    type: "image/jpeg",
    description: "Some projects that I've never finished but thought ",
    description1: "Some projects that I've never finished but",
    description2: "thought were worth sharing.",
    full_description: "Sportify (creative name I know) is the first full project that I've tried creating as a developer. It has been recreated over and over again as part of my learning process a few years ago, and I recently decided to finish it in my spare time. Most of the development was done as when I was just starting out, so there is a lot of spaghetti code (currently refactoring). The app is built in the MERN stack (super original idea). As this project was for my learning, I've tried to use as little libraries and packages as possible, and built everything I could from scratch.",
    feature_text1: "The apps main functionality is to allow users to browse sports related spaces and book them. Alternatively, partners of the app can host experiences, where an activity is offered as a service instead of renting a space. Users also have the group finder functionality available, allowing users to form groups to organize events and play together. The goal of holo was to conceptualize a sports platform that not only allows users the opportunity to play sports, but to connect with people and make friends along the way.",
    feature_text2: "The app leverages a MongoDB/Express back end that uses JWT for authentication. React is used for the front end, together with the Context API  to persist login state. The app uses the stripe API to handle payment.",
    // size: 5485,
    width: "100%",
    height: "70%",
    src: bolt,
    bg1: holoParallax,
    images: [holoHome, holoPage],
    screen1: holoHome,
    screens: [holoscreen1, holoscreen3],
    website: "Sportify.com"
  },
];
