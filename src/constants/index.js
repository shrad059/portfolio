import ecommerce from '../assets/img/4.png';
import music from '../assets/img/1.png';
import groove from '../assets/img/groovy.png';
import imissmyhome from '../assets/img/imissmyhome.png';
import algorithm from '../assets/img/6.gif';
import start from '../assets/img/start.png';
import map from '../assets/img/map.png';
import resume from '../assets/img/resume.png';
import Pandemic from '../assets/img/pandemic.png';
import Construction from '../assets/img/construction.jpg';



const projects = [
  {
    name: "Trend Insight",
    description:"Developed a machine learning model to predict fashion trends by analyzing 10,000+ Instagram posts, leveraging YOLO and SAM for clothing segmentation, RoBERTa for sentiment analysis of post captions, enhancing sentimental precision to 91%.",
    //  image: tic,
    image: Construction,
    // github_link: "https://github.com/shrad059/pandemic",
    // source_code_link:"https://shrad059.github.io/pandemic/",

  },
  {
    name: "COVID-19 Pandemic Visualizer",
    description:"[Weekend project] inspired by Github's homepage's globe which displayes real time github activity on a globe map. Constructed using three-globe, and dataset from ourworldindata.org, it simulates the confirmed covid cases from 2020-2024 on the globe .",
    //  image: tic,
    image: Pandemic,
    github_link: "https://github.com/shrad059/pandemic",
    source_code_link:"https://shrad059.github.io/pandemic/",

  },
  {
    name: "AUDly: Music Social App",
    description:"A full-stack music-sharing platform built using React Native, enabling users to connect, share, and discover music within a vibrant social community. Features include real-time sharing, and a seamless, user-friendly interface.",
    //  image: tic,
    image: groove,
    github_link: "https://github.com/shrad059/groovy",
  },
  {
    name: "Multilingual Speech Chrome Extension",
    description:"This is a Chrome extension that allows users to capture any audio playing on the current tab, and translate it to the user's desired language. The Whisper model was finetuned on the given language for better speech transcription accuracy.",
    image: start,
    github_link: "https://github.com/shrad059/speech-translation",
  },
  {
    name: " Music Recommender",
    description:"Built an end to end React App that generates playlists and recommends ten music tracks based on the user's listening history. Integrated with the Spotify API, the app prompts users to select their preferred playlist, then generates a new playlist featuring songs similar to the selected one. The recommendation algorithm employs cosine similarity to calculate playlist vectors for accurate playlist generation.",
  
    image: music,
    github_link: "https://github.com/shrad059/Spotify_recommendation_system",
  },
  {
    name: "Shortest Path Calculator",
    description:"This project utilizes the brute force algorithm to solve the TSP, aiming to find an optimal path for visiting multiple provinces in Canada.",
    image: map,
    github_link: "https://github.com/shrad059/shortest-path",
  },
  {
    name: "Resume Builder",
    description:" A free resume builder that generate a beautiful, formatted cv instantly from the plaintext builder. customize in a few clicks with live preview! Built using React and Next JS.",
    image: resume,
    github_link: "https://github.com/shrad059/CV-Maker",
    source_code_link:"https://cv-maker-olive.vercel.app/",
  },
  {
    name: "I Miss My Home",
    description:" A simple react app created to simulate the ambient sounds of India, or atleast my favorties 😌.",
    image: imissmyhome,
    github_link: "https://github.com/shrad059/imisshome",
    source_code_link:"https://shrad059.github.io/imisshome/",
  },
  {
    name: "Path Finding Algorithm",
    description:"Utilized the Pygame library to implement the A* algorithm for finding optimal paths between two points on a grid. The interface enables user interaction, allowing users to visualize the pathfinding process. Incorporated obstacles like walls to demonstrate their impact on the pathfinding algorithm.",
    image: algorithm,
    github_link: "https://github.com/shrad059/A-Path-Finding-Algorithm",
  },
];

export {projects };