import {
  ArrowDownTrayIcon,
  CheckBadgeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  HandThumbUpIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import client1 from '../images/clients/1.png';
import client2 from '../images/clients/2.jpg';
import client3 from '../images/clients/3.jpg';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/1.png';
import porfolioImage2 from '../images/portfolio/2.jpg';
import porfolioImage3 from '../images/portfolio/3.png';
import porfolioImage4 from '../images/portfolio/4.jpg';
import porfolioImage5 from '../images/portfolio/5.jpg';
import porfolioImage6 from '../images/portfolio/6.jpg';
import porfolioImage7 from '../images/portfolio/7.jpg';
import porfolioImage8 from '../images/portfolio/8.png';
import porfolioImage9 from '../images/portfolio/9.png';
import porfolioImage10 from '../images/portfolio/10.jpg';
import porfolioImage11 from '../images/portfolio/11.jpg';
import porfolioImage12 from '../images/portfolio/12.png';
import porfolioImage13 from '../images/portfolio/13.jpg';
import porfolioImage14 from '../images/portfolio/14.png';
import porfolioImage15 from '../images/portfolio/15.jpg';
import porfolioImage16 from '../images/portfolio/16.jpg';
import porfolioImage17 from '../images/portfolio/17.png';
import porfolioImage18 from '../images/portfolio/18.png';
import porfolioImage19 from '../images/portfolio/19.png';
import porfolioImage20 from '../images/portfolio/20.jpg';
// import profilepic from '../images/profilepic1.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';



/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'MANUEL RIVERA',
  description: "Portfolio site built with Next.js by Manuel Rivera",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yurii Komyshan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior MERN Stack Developer</strong>, with <strong className="text-stone-100"> 13+ years experience</strong> in building <strong className="text-stone-100">Web Applications</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Based in <strong className="text-stone-100">Sarata, Ukraine</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://app.enhancv.com/share/7b288d03/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  // profileImageSrc: profilepic,
  description: `Highly skilled MERN Stack Developer with 13 years of experience designing and implementing dynamic web applications, game interfaces, e-commerce platforms, and interactive job sites. Proficient in creating visually engaging and responsive user experiences using Three.js and modern front-end frameworks. Adept at collaborating with cross-functional teams to deliver scalable, efficient, and innovative solutions. Passionate about staying ahead of technological trends and delivering excellence in every project.`,
  aboutItems: [
    {label: '25+', text: 'Project completed', Icon: CheckBadgeIcon},
    {label: '96%', text: 'Satisfaction of customers', Icon: HandThumbUpIcon},
    {label: '21000+', text: 'Development Hours', Icon: ClockIcon},
    {label: '750k+', text: 'Total Earning', Icon: CurrencyDollarIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Ukraine',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React/Next',
        level: 8,
      },
      {
        name: 'JS/TS',
        level: 10,
      },
      {
        name: 'Three.js / Web3',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 8,
      },
    ],
  },
  {
    name: 'Database development',
    skills: [
      {
        name: 'Mongo DB',
        level: 9,
      },
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'Postgre SQL',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Seller Crowd',
    description: 'React, Next.js, Amazon Web Services, Stripe, ...',
    url: 'https://sellercrowd.com',
    image: porfolioImage1,
  },
  {
    title: 'Live Sessions',
    description: 'React, Express, Node.js, Heroku, ...',
    url: 'https://livesessions.npr.org/',
    image: porfolioImage2,
  },
  {
    title: 'Ecommerce ex',
    description: 'React, Next.js, reCAPTCHA, Firebase, Vercel, ...',
    url: 'https://next-e-commerce-example.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Forest',
    description: 'Next.js, Firebase, jQuery, Bootstrap, Animate.css, ...',
    url: 'https://forestapp.cc/',
    image: porfolioImage4,
  },
  {
    title: 'LAS',
    description: 'Laravel, jQueryUI,  Yoast SEO, Backbone.js, Bootstrap, MySQL, ...',
    url: 'http://las.pp.ua/',
    image: porfolioImage5,
  },
  {
    title: 'FitSat 6',
    description: 'HTML5, CSS3, Animate.css, Bootstrap, LiteSpeed, jQuery, ...',
    url: 'http://fitsat6.websolutions.pp.ua/',
    image: porfolioImage6,
  },
  {
    title: 'LBS Education',
    description: 'PHP, MySQL, jQuery, Facebook Login, ...',
    url: 'https://www.lbs.edu.ng/',
    image: porfolioImage7,
  },
  {
    title: 'VISIT',
    description: 'E-commerce, Next.js, Payment processors, ...',
    url: 'https://ivisitdoc.com/',
    image: porfolioImage8,
  },
  {
    title: 'Popular',
    description: 'React.js, Bootstrap, Node.js, Mongo DB, ...',
    url: 'https://popl.co/pages/popl-teams',
    image: porfolioImage9,
  },
  {
    title: 'LOOPJEWELRY',
    description: 'Google Map API, Stripe, Chatbot',
    url: 'https://loopjewelry.com/',
    image: porfolioImage10,
  },
  {
    title: 'Divayd',
    description: 'HTML5, CSS3, JavaScript, MySQL, Laravel, ...',
    url: 'http://divayd.com/',
    image: porfolioImage11,
  },
  {
    title: 'Best Find',
    description: 'React, Tailwind CSS, Express, Node.js, Git, ...',
    url: 'https://www.bestfind.com.au/',
    image: porfolioImage12,
  },
  {
    title: 'EDX',
    description: 'React, MySQL, Next.js, AWS, ASP.NET, Tailwind CSS, HubSpot, ...',
    url: 'https://www.edx.org/',
    image: porfolioImage13,
  },
  {
    title: 'FP 2030',
    description: 'React, Next.js, PWA, Vercel, Tailwind CSS, TypeScript, Django, GraphQL, ...',
    url: 'https://www.fp2030.org/',
    image: porfolioImage14,
  },
  {
    title: 'UBAC_STORE',
    description: 'Vue.js, Nuxt.js, Django, Postgre, Heroku, ...',
    url: 'https://ubac-store.com/en/',
    image: porfolioImage15,
  },
  {
    title: 'Shop BMWUSA',
    description: 'Next.js Tailwind CSS, Stripe, Django, ...',
    url: 'https://shop.bmwusa.com/',
    image: porfolioImage16,
  },
  {
    title: 'Locoslouis Ville',
    description: 'PHP, MySQL, jQuery, Nginx, ...',
    url: 'https://www.locoslouisville.com/',
    image: porfolioImage17,
  },
  {
    title: 'Casino',
    description: 'Next.js, Payment processors, Tailwind CSS, Web3, ...',
    url: 'https://casino-react.netlify.app/',
    image: porfolioImage18,
  },
  {
    title: 'Ecommerce 1101',
    description: 'React, PWA, Tailwind CSS, Django, Netlify, ...',
    url: 'https://ecommerce1101.netlify.app/',
    image: porfolioImage19,
  },
  {
    title: 'Sub Culture',
    description: 'Three.js, Vercel, ASP.NET, Python, ...',
    url: 'https://subculture.makery.co.jp/',
    image: porfolioImage20,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2008 -2012',
    location: 'South Ukrainian National Pedagogical University',
    title: 'Bachelor’s Degree in Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2021 - Nov 2024',
    location: 'SureSwift Capital',
    title: 'Senior MERN Stack Developer',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Designed and implemented immersive and interactive 3D blockchain-based game interfaces for a decentralized online gaming platform.        </li>
        <li style={{listStyleType:"disc"}}>Utilized Three.js for real-time 3D rendering and implemented smart contracts on the Ethereum blockchain to enable secure in-game transactions and asset ownership.</li>
        <li style={{listStyleType:"disc"}}>Engineered a modular architecture integrating React.js with Web3.js to interact seamlessly with blockchain networks.</li>
        <li style={{listStyleType:"disc"}}>Developed secure WebSocket-based multiplayer functionality for real-time player interactions.</li>
        <li style={{listStyleType:"disc"}}>Improved game performance by optimizing asset loading and reducing rendering lag by 35%.</li>
        <li style={{listStyleType:"disc"}}>Led a team of developers to launch the platform, increasing daily active users by 50% within the first three months.</li>
      </ul>
    ),
  },
  {
    date: 'Jul 2017 - Jun 2021',
    location: 'Softwared Solutions',
    title: 'MERN Stack Developer',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Spearheaded the development of a B2C e-commerce platform, facilitating seamless shopping experiences for over 50,000 active users.</li>
        <li style={{listStyleType:"disc"}}>Built and deployed dynamic dashboards for store owners to manage products, inventory, and sales in real-time.</li>
        <li style={{listStyleType:"disc"}}>Developed an advanced search and filter system using MongoDB Aggregation Framework, improving search efficiency by 40%.</li>
        <li style={{listStyleType:"disc"}}>Integrated third-party APIs for shipping and payment gateways, ensuring secure transactions.</li>
        <li style={{listStyleType:"disc"}}>Conducted unit and integration testing, achieving 95% test coverage.</li>
      </ul>
    ),
  },
  {
    date: 'Aug 2015 - Jun 2017',
    location: 'Avezor Soft',
    title: 'Front-End Developer',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Collaborated with UI/UX designers to create a modern job portal, incorporating responsive design and intuitive navigation.</li>
        <li style={{listStyleType:"disc"}}>Engineered reusable React components for dynamic job listings, profile management, and application tracking.</li>
        <li style={{listStyleType:"disc"}}>Integrated Google Maps API for precise location-based job searches.</li>
        <li style={{listStyleType:"disc"}}>Worked with the back-end team to implement RESTful APIs for secure and efficient data retrieval.</li>
        <li style={{listStyleType:"disc"}}>Conducted A/B testing, resulting in a 15% improvement in user retention.</li>
      </ul>
    ),
  },
  {
    date: 'Nov 2013 - Jul 2015',
    location: 'Steelkiwi',
    title: 'Junior Web Developer',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Assisted in developing custom CMS solutions for small and medium-sized businesses, providing tailored web interfaces.</li>
        <li style={{listStyleType:"disc"}}>Enhanced website responsiveness and accessibility, improving mobile traffic by 20%.</li>
        <li style={{listStyleType:"disc"}}>Debugged and resolved critical front-end issues, ensuring seamless user experiences.</li>
        <li style={{listStyleType:"disc"}}>Supported the senior development team in integrating back-end APIs with front-end interfaces.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'William Brown (PM of Avezor Soft)',
      text: 'Yura consistently delivers high-quality, scalable solutions across the stack, demonstrating exceptional technical expertise and attention to detail. Their proactive communication and ability to mentor team members significantly enhance collaboration and overall project outcomes. They are a dependable leader who drives innovation and consistently exceeds expectations, making them an invaluable asset to the team.',
      image: client1,
    },
    {
      name: 'Cindy Evelin (Old Client)',
      text: 'He has been an invaluable partner over the long term, consistently delivering high-quality, scalable solutions that align with our evolving business needs. Their deep technical expertise, proactive communication, and unwavering commitment to excellence have built a strong foundation of trust and reliability. We greatly appreciate their ability to adapt, innovate, and provide ongoing support, making them an integral part of our success.',
      image: client2,
    },
    {
      name: 'Louis Dupont (CTO of SureSwift Capital)',
      text: 'Yurii is an outstanding team player who consistently delivers on project timelines while maintaining exceptional code quality. Their ability to break down complex tasks, communicate effectively with both technical and non-technical stakeholders, and adapt to evolving requirements has been instrumental in project success. They are a reliable and proactive contributor, ensuring seamless collaboration and driving projects forward efficiently.',
      image: client3,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'kym21022001@gmail.com',
      href: 'mailto:kym21022001@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Sarata, Ukraine',
      href: 'https://www.google.ca/maps/place/Sarata, Odessa, Ukraine/@46.0190446,29.6534513,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'yuriikomyshan21021991',
      href: 'https://www.linkedin.com/in/yuriikomyshan21021991',
    },
    {
      type: ContactType.Github,
      text: 'Yurii',
      href: 'https://github.com/appleseed423',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/appleseed423'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yuriikomyshan21021991'},
  {label: 'Mail', Icon: EnvelopeIcon, href: 'mailto:kym21022001@gmail.com'},
  {label: 'Phone', Icon: PhoneIcon, href: 'tel:+380689260931'},
];
