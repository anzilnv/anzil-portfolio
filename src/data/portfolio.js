/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no need to touch the components.
 *
 * Items marked TODO are placeholders that only you can fill in.
 */

export const profile = {
  name: 'Anzil Muhammed',
  shortName: 'Anzil',
  role: 'Full Stack Developer',
  tagline:
    "I'm a Full Stack Developer passionate about building modern, scalable and user-friendly web applications.",
  availability: 'Available for opportunities',
  // Shown on the hero card
  stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  location: 'India',
  email: 'kuttappyanzil@gmail.com',
  // Image in /public used in the hero section
  photo: '/profile.jpg',
};

export const socials = {
  // TODO: replace with your real profile URLs
  github: 'https://github.com/anzilnv',
  linkedin: 'https://www.linkedin.com/in/anzil-muhammad',
};

export const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const about = {
  heading: 'Turning ideas into meaningful digital products.',
  paragraphs: [
    "I'm a Full Stack Developer with experience building modern web applications using React, JavaScript, Node.js and MongoDB.",
    'I enjoy solving real-world problems, developing intuitive user interfaces and creating scalable backend solutions.',
  ],
  focus: [
    {
      icon: 'frontend',
      title: 'Frontend',
      text: 'Responsive, accessible interfaces with React and Tailwind CSS.',
    },
    {
      icon: 'backend',
      title: 'Backend',
      text: 'REST APIs and server logic with Node.js and Express.',
    },
    {
      icon: 'database',
      title: 'Database',
      text: 'Data modelling and storage with MongoDB.',
    },
  ],
};

export const skillGroups = [
  {
    icon: 'frontend',
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: 'backend',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: 'database',
    title: 'Database',
    skills: ['MongoDB'],
  },
  {
    icon: 'tools',
    title: 'Tools',
    skills: ['Git & GitHub'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'Expense Tracker',
    category: 'Python Development',
    description:
      'A personal expense management application to add, track, delete and summarize expenses with data export functionality.',
    technologies: ['Python', 'CLI', 'CSV'],
    // TODO: replace with your real repository / demo links
    github: 'https://github.com/yourusername/expense-tracker',
    demo: '',
  },
  {
    number: '02',
    title: 'Roster Planner',
    category: 'Full Stack Development',
    description:
      'An employee scheduling application to manage shifts, employee assignments and roster information.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/roster-planner',
    demo: '',
  },
  {
    number: '03',
    title: 'Leave Management',
    category: 'Web Application',
    description:
      'A leave management system for submitting leave requests, tracking applications and managing approvals.',
    technologies: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/leave-management',
    demo: '',
  },
];

export const experiences = [
  {
    role: 'Full Stack Developer Intern',
    // TODO: add your company name and dates
    company: 'Smart Global Domestic Workers Services L.L.C',
    duration: 'Add your employment dates',
    description:
      'Worked on developing and maintaining web applications, building reusable UI components and integrating backend APIs.',
    responsibilities: [
      'Developed responsive interfaces using React.js and Tailwind CSS.',
      'Integrated REST APIs using RTK Query.',
      'Worked with Node.js, Express.js and MongoDB.',
      'Fixed bugs and improved application functionality.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
  },
];

export const education = [
  {
    // TODO: add your real degree, institution and dates
    degree: 'Bachelor of  Computer Science ',
    institution: 'Amal College of Advanced Studies / University of Calicut',
    duration: '2021 - 2024',
    description:
      'Built a strong foundation in computer science, programming, databases and software development.',
  },
];
