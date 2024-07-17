import ecommerce from '../assets/img/4.png';
import music from '../assets/img/1.png';
import chat from '../assets/img/6.png';
import imissmyhome from '../assets/img/imissmyhome.png';
import algorithm from '../assets/img/6.gif';
import start from '../assets/img/start.png';




const projects = [
  // {
  //   name: "Tic-Tac Toe",
  //   description:"",
  //    image: tic,
  //   source_code_link: "https://github.com/shrad059/portfolio",
  // },
  {
    name: "Multilingual Speech Chrome Extension",
    description:"This is a Chrome extension that allows users to capture any audio playing on the current tab, and translate it to the user's desired language. The Whisper model was finetuned on the given language for better speech transcription accuracy.",

       tags: [
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "coreML",
        color: "green-text-gradient",
      },
      {
        name: "openAI api",
        color: "pink-text-gradient",
      },
      {
        name: "mapKit",
        color: "blue-text-gradient",
      },
    ],
    image: start,
    source_code_link: "https://github.com/shrad059/speech-translation",
  },
  {
    name: "Path Finding Algorithm",
    description:"Utilized the Pygame library to implement the A* algorithm for finding optimal paths between two points on a grid. The interface enables user interaction, allowing users to visualize the pathfinding process. Incorporated obstacles like walls to demonstrate their impact on the pathfinding algorithm.",

      tags: [
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "coreML",
        color: "green-text-gradient",
      },
      {
        name: "openAI api",
        color: "pink-text-gradient",
      },
      {
        name: "mapKit",
        color: "blue-text-gradient",
      },
    ],
    image: algorithm,
    source_code_link: "https://github.com/shrad059/A-Path-Finding-Algorithm",
  },
  {
    name: " Music Recommender",
    description:"Built an end to end React App that generates playlists and recommends ten music tracks based on the user's listening history. Integrated with the Spotify API, the app prompts users to select their preferred playlist, then generates a new playlist featuring songs similar to the selected one. The recommendation algorithm employs cosine similarity to calculate playlist vectors for accurate playlist generation.",
    tags: [
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "coreML",
        color: "green-text-gradient",
      },
      {
        name: "openAI api",
        color: "pink-text-gradient",
      },
      {
        name: "mapKit",
        color: "blue-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/shrad059/Spotify_recommendation_system",
  },
  {
    name: "I Miss My Home",
    description:" A simple react app created to simulate the ambient sounds of India, or atleast my favorties 😌.",

        tags: [
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "coreML",
        color: "green-text-gradient",
      },
      {
        name: "openAI api",
        color: "pink-text-gradient",
      },
      {
        name: "mapKit",
        color: "blue-text-gradient",
      },
    ],
    image: imissmyhome,
    source_code_link: "https://github.com/shrad059/imisshome",
  },
  {
    name: "Shortest Path Calculator",
    description:"This project utilizes the brute force algorithm to solve the TSP, aiming to find an optimal path for visiting multiple provinces in Canada.",
    image: chat,
    source_code_link: "https://github.com/shrad059/shortest-path",
  },
];

export {projects };