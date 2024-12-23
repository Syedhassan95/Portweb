import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Syed',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Hassan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Chaya Nagar Amravati',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '9588634228',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'sh764998@gmail.com',
  },


  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 2,
    no: '4+',
    title: 'Medals won <br /> in Events',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaCode />,
    year: 'PRESENT',
    title: 'Web Developer <span> IN MERN </span>',
    desc: 'Skilled and proficient entry-level website designer with tremendous dedication to work and a demonstrated ability in customer administration and satisfaction.',
           
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaCode />,
    year: 'PRESENT',
    title: 'MERN STACK DEV <span> From KG Coding </span>',
    desc: 'I am a MERN Stack Developer with a passion for creating web applications that are both functional and user-friendly.',
  },

  
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'PRESENT',
    title: 'Masters in Computer Applications (MCA) <span> Sant Gadge Baba University</span>',
    desc: ' A Master of Computer Applications (MCA) is a postgraduate degree that prepares students for careers in computer science and technology',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'COMPLETED 2024',
    title: 'A Bachelor of Computer Applications (BCA) <span> Sant Gadge Baba University</span>',
    desc: 'BCA is a three-year undergraduate degree that prepares students for careers in the information technology (IT) field',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Catification',
    details: [
      {
        icon: <FiFileText />,
        title: 'certification : ',
        desc: 'English Speaking',
     },
        {
         title: 'Language : ',
         desc: 'English',
       },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Intrested in: ',
        desc: 'Web dev',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Myntra Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Myntra',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Css javascript ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Todo List',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Todo list',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Css Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img:  Work5,
    title: 'Portfolio',
    details: [
      {
        title: 'Project : ',
        desc: 'Portfolio',
      },
      {
        title: 'Language : ',
        desc: 'React JS,',
      },
      {
        title: 'Preview : ',
        desc: 'http://localhost:5173/portfolio',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Cricket Score Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Score Game',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Css Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
