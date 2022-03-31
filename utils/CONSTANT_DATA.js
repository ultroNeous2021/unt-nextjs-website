import {
  SiWordpress,
  SiShopify,
  SiMagento,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMongodb,
  SiExpress,
  SiApple,
  SiFlutter,
  SiXamarin,
  SiReact,
  SiFacebook,
  SiGoogleadsense,
  SiHtml5,
  SiNextdotjs,
  SiGatsby,
  SiNuxtdotjs,
  SiKotlin,
  SiSwift,
  SiJava,
} from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";
import { GiZeppelin } from "react-icons/gi";
import { DiAndroid } from "react-icons/di";
import { IoLogoAngular } from "react-icons/io";
import { FaNodeJs, FaReact, FaReacteurope } from "react-icons/fa";
import { Image } from "react-bootstrap";
import styles from "@/styles/components/HorizontalTab.module.css";

export const CounterComponentData = [
  {
    end: 50,
    sign: "+",
    title: "Projects Completed",
  },
  {
    end: 97,
    sign: "%",
    title: "Positive Feedback",
  },
  {
    end: 15,
    sign: "+",
    title: "Countries Served",
  },
  {
    sign: "+",
    end: 32,
    title: "Clientele",
  },
  {
    end: 25,
    sign: "+",
    title: "Experts",
  },
];

export const WeExcelAtData = [
  {
    title: "Front End ",
    techs: [
      <SiReact className={`${styles.React} ${styles.WeExcelIcons}`} key={1} />,
      <IoLogoAngular
        className={`${styles.Angular} ${styles.WeExcelIcons}`}
        key={2}
      />,
      <RiVuejsLine
        className={`${styles.Vue} ${styles.WeExcelIcons}`}
        key={3}
      />,
      <SiHtml5 className={`${styles.Html} ${styles.WeExcelIcons}`} key={4} />,
      <SiNextdotjs
        className={`${styles.Next} ${styles.WeExcelIcons}`}
        key={5}
      />,
      <SiGatsby
        className={`${styles.Gatsby} ${styles.WeExcelIcons}`}
        key={6}
      />,
      <SiNuxtdotjs
        className={`${styles.Nuxt} ${styles.WeExcelIcons}`}
        key={7}
      />,
    ],
    techsname: ["React", "Angular", "Vue", "HTML5", "Next", "Gatsby", "Nuxt"],
  },
  {
    title: "Back End ",
    techs: [
      <FaNodeJs className={`${styles.Node} ${styles.WeExcelIcons}`} key={1} />,
      <SiLaravel
        className={`${styles.Laravel} ${styles.WeExcelIcons}`}
        key={2}
      />,
      <SiPhp className={`${styles.Php} ${styles.WeExcelIcons}`} key={3} />,
      <SiCodeigniter
        className={`${styles.Codeigniter} ${styles.WeExcelIcons}`}
        key={4}
      />,
      <SiMagento
        className={`${styles.Magento} ${styles.WeExcelIcons}`}
        key={5}
      />,
      <SiWordpress
        className={`${styles.Wordpress} ${styles.WeExcelIcons}`}
        key={6}
      />,
      <SiShopify
        className={`${styles.Shopify} ${styles.WeExcelIcons}`}
        key={7}
      />,
    ],
    techsname: [
      "Node",
      "Laravel",
      "Php",
      "Codeigniter",
      "Magento",
      "Wordpress",
      "Shopify",
    ],
  },
  {
    title: "Mobile App",
    techs: [
      <Image
        key={1}
        width={70}
        src="/assets/mad1.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh1.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad1.svg")}
      />,

      <Image
        key={1}
        width={70}
        src="/assets/mad2.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh2.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad2.svg")}
      />,
      <Image
        key={1}
        src="/assets/mad3.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh3.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad3.svg")}
      />,
      <SiReact className={`${styles.React} ${styles.WeExcelIcons}`} key={1} />,
      <FaNodeJs className={`${styles.Node} ${styles.WeExcelIcons}`} key={1} />,
      <Image
        key={1}
        width={90}
        src="/assets/mad6.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh6.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad6.svg")}
      />,
      <Image
        key={1}
        src="/assets/mad7.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh7.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad7.svg")}
      />,
    ],
    techsname: [
      "Kotlin",
      "Swift",
      "Flutter",
      "React Native",
      "Java",
      "Objective C",
      "Xamarin",
    ],
  },
  {
    title: "UX/ UI",
    techs: [
      <Image
        key={1}
        src="/assets/uiux1.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh1.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux1.svg")}
      />,
      <Image
        key={1}
        src="/assets/uiux2.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh2.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux2.svg")}
      />,
      <Image
        key={1}
        src="/assets/uiux3.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh3.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux3.svg")}
      />,
      <Image
        key={1}
        src="/assets/uiux4.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh4.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux4.svg")}
      />,
      <Image
        key={1}
        src="/assets/uiux5.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh5.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux5.svg")}
      />,
      <Image
        key={1}
        src="/assets/uiux6.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh6.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux6.svg")}
      />,
      <Image
        key={1}
        src="/assets/uiux7.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh7.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux7.svg")}
      />,
    ],
    techsname: [
      "Figma",
      "Zeplin",
      "Adobe Photoshop",
      "Adobe illustrator",
      "XD",
      "Mackingbot",
      "nVision",
    ],
  },
  {
    title: "Digital Marketing",
    techs: [
      <Image
        key={1}
        src="/assets/dm1.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh1.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm1.svg")}
      />,
      <Image
        key={1}
        src="/assets/dm2.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh2.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm2.svg")}
      />,
      <Image
        key={1}
        src="/assets/dm3.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh3.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm3.svg")}
      />,
      <Image
        key={1}
        src="/assets/dm4.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh4.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm4.svg")}
      />,
      <Image
        key={1}
        src="/assets/dm5.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh5.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm5.svg")}
      />,
      <Image
        key={1}
        src="/assets/dm6.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh6.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm6.svg")}
      />,
      <Image
        key={1}
        src="/assets/dm7.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh7.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm7.svg")}
      />,
    ],
    techsname: [
      "Semrush",
      "Hootsuite",
      "Keyhole",
      "Google Analytics",
      "Yoast",
      "Buzzsumo",
      "Buffer",
    ],
  },
];

export const PortfolioSliderData = [
  {
    image: "/assets/sneakers.png",
    title: "Sneakers Marketplace ",
    details:
      "Sneakers industry is booming and we took a chance to dive into the market with this fully custom sneakers marketplace app. Buyers are literally loving this UX more than their sneakers.",
  },
  {
    image: "/assets/doctor.jpg",
    title: "FinTech Mobile App ",
    details:
      "This app is designed with the purpose of simplifying the chaos of money management. With this, users can closely monitor their expenses along with transferring money with their contacts. ",
  },
  {
    image: "/assets/fintech.jpg",
    title: "Clinic on Palm",
    details: `We repeat the ancient history of diagnosing health by palm reading. Have a look at our handy application "Clinic on Palm" where patients can get easy consultation from their doctors.`,
  },
  {
    image: "/assets/food.jpg",
    title: "Food Ordering App  ",
    details:
      "This Food Ordering Website allows restaurant to directly serve delicious food to their customers. Customers can easily navigate through website, check menu and order their favourite food. ",
  },
];

export const TestimonialsSliderData = [
  {
    image: "/assets/sadie.png",
    name: "Sadie Skelland (SoFi, Director of Operations) ",
    details:
      "We had a complicated finance business app idea and tried a number of developers before finding ultroNeous Technologies, whose expert staff simplified the concept. I have to say, without them, our app would not have been possible.",
  },
  {
    image: "/assets/loren.png",
    name: "Loren McClure (Cosade Labs, Co-Founder) ",
    details:
      "This was my first app, and they were really helpful at every stage, answering questions, writing recommendations, and providing tips. ultroNeous is a highly professional firm with a team that is skilled in creating high-quality apps. ",
  },
  {
    image: "/assets/jerry.png",
    name: "Jerry Walters (Mirato, Owner)",
    details: `It was a pleasure to work with the ultroNeous team!! I had hired them to develop my mobile app, and I was really concerned about the app's launch date. However, they have a highly skilled workforce that can easily handle duties and complete projects on time.`,
  },
  {
    image: "/assets/kina.png",
    name: "Kina Bayra (AIC ,Project coordinator)  ",
    details:
      "I am incredibly impressed with the quality and performance of the mobile app developed by ultroNeous Technologies. Their entire team is organized and dedicated to various technologies, and I must state that they perform brilliantly in all areas.",
  },
];

// export const ChooseAsPerYourNeedData = [
//   {
//     title: "Hire a Team",
//     mainTitle: "HIRE A TEAM",
//     details: "Hire any Developer or Build your own team with ultroNeous.",
//     image: HireATeam,
//   },
//   {
//     title: "Project Basis",
//     mainTitle: "PROJECT BASIS",
//     details:
//       "Have a fixed project scope in mind? Discuss now to get a fixed price.",
//     image: GiveUsProject,
//   },
//   {
//     title: "T & M",
//     mainTitle: "TIME & MATERIAL",
//     details:
//       "Have a project where you need a team on a periodic basis, we got you.",
//     image: TAndM,
//   },
// ];

// export const WebTechnologyExpertise = [
//   {
//     title: "Open Source",
//     techIcons: [
//       <SiWordpress className="Tech-Images" />,
//       <SiShopify className="Tech-Images" />,
//       <SiMagento className="Tech-Images" />,
//     ],
//     detail:
//       "ultroNeous' web developers have sharpened their skill sets in developing web applications utilizing open-source libraries and frameworks to create innovative, responsive, and stunning designs along with top-level security for the web app. We have extensive expertise in designing and developing custom web applications with open-source development platforms like WordPress, Shopify, and Magento.",
//   },
//   {
//     title: "LAMP Stack",
//     techIcons: [
//       <SiPhp className="Tech-Images" />,
//       <SiLaravel className="Tech-Images" />,
//       <SiCodeigniter className="Tech-Images" />,
//     ],
//     detail:
//       " In recent years, ultroNeous has amassed a significant amount of experience in producing responsive, dynamic, and highly secure web apps using the LAMP stack development process. It is a flexible and powerful foundation for developing custom web applications that improve the user experience. Our proficient LAMP stack developers are conversant with the PHP, Laravel, and Codeigniter frameworks and have an excellent track record of developing web applications that meet all of a client's business requirements.",
//   },
//   {
//     title: "MEAN Stack",
//     techIcons: [
//       <SiMongodb className="Tech-Images" />,
//       <SiExpress className="Tech-Images" />,
//       <IoLogoAngular className="Tech-Images" />,
//       <FaNodeJs className="Tech-Images" />,
//     ],
//     detail:
//       "We are a preeminent web development company that develops bespoke and interactive web apps and websites using MEAN stack development platforms. The four frameworks on which MEAN stack is based/works are MongoDB, Express, Angular, and Node. ultroNeous' MEAN Stack Developers are masters at developing custom web applications, e-commerce solutions, and stack website development with perfection. Our completed project elevated the client's overall revenue, and we are ready to onboard more projects.",
//   },
//   {
//     title: "MERN Stack",
//     techIcons: [
//       <SiMongodb className="Tech-Images" />,
//       <SiExpress className="Tech-Images" />,
//       <FaReact className="Tech-Images" />,
//       <FaNodeJs className="Tech-Images" />,
//     ],
//     detail:
//       "ultroNeous’ web app development services have achieved milestones in MERN stack development for distinguished web apps for businesses. Our MERN stack developers have an unrivaled ability to design and develop exceptional web apps in a brief period. MongoDB, ExpressJS, ReactJS, and NodeJS—which also validates the name—are the four frameworks or databases used in this development process. All four frameworks work together to develop reliable, efficient, and scalable web applications.",
//   },
// ];
// export const MobileTechnologyExpertise = [
//   {
//     title: "Native",
//     techIcons: [
//       <SiApple className="Tech-Images" />,
//       <DiAndroid className="Tech-Images" />,
//     ],
//     detail:
//       "Native app development is a distinct approach for developing mobile apps for operating systems such as Android and iOS. At ultroNeous, we have an in-house dedicated native app developers team who is always up for developing an app that meets the client's requirements. Our native mobile applications development services are extremely conscientious about the app's quality and have completed countless projects on time.",
//   },
//   {
//     title: "Hybrid",
//     techIcons: [
//       <SiFlutter className="Tech-Images" />,
//       <SiXamarin className="Tech-Images" />,
//       <SiReact className="Tech-Images" />,
//     ],
//     detail:
//       "With hybrid mobile apps, you can take your business app on multiple platforms. It is a cost-efficient mobile app development service that delivers stable and compatible results. ultroNeous offers a comprehensive hybrid mobile application development service to clients. With over 50+ projects working experience, our developers are proficient in writing codes in HTML5, CSS, and JavaScript.",
//   },
// ];
// export const DigitalMarketingExpertise = [
//   {
//     title: "SEO",
//     techIcons: [<Image src={seo_icon} className="Tech-Images" />],
//     detail:
//       "The process of optimizing a website for search engine results is referred to as SEO(Search Engine Optimization). Its purpose is to improve a website's search engine ranking and increase web traffic from organic search results. As an internet marketing company, ultroNeous have a wealth of real-world expertise in optimizing a website for organic results on Google, Bing, Yahoo & other search engines. Our professionals have tried-and-true SEO strategies that have resulted in considerable traffic increment for our clients' websites to boost their business revenue.",
//   },
//   {
//     title: "Google Ads",
//     techIcons: [<SiGoogleadsense className="Tech-Images" />],
//     detail:
//       "Google Paid Ads is a service offered by Google that allows you to create and run online ads targeting individuals who are searching (on Google) for the products and services you're providing. Hire an experienced digital marketing agency that has extensive working knowledge and practical skills in running Google paid ads. ultroNeous has provided this service to several clients with tremendous success and positive results.",
//   },
//   {
//     title: "SMM",
//     techIcons: [<Image src={like_icon} className="Tech-Images" />],
//     detail:
//       "The best way to describe social media marketing is “the use of social media platforms to promote products and services”. If any company is facing trouble finding buyers and visitors, then social media networks are a great place to start with. With the help of professional digital marketing services providers like ultroNeous, your business can utilize social media to reach people, improve brand awareness, generate leads, and build a relationship with users. Connect with us to know how we can take your business to the next level with social media.",
//   },
//   {
//     title: "Facebook Ads ",
//     techIcons: [<SiFacebook className="Tech-Images" />],
//     detail:
//       "Facebook is the most popular social media platform, with over 1.9 million daily unique users. Running paid ads on Facebook can be incredibly beneficial for a business. ultroNeous, a digital marketing agency, is adept at running Facebook ad campaigns to increase clients' business revenue. Our paid ad experts are masters at scaling, optimizing, and testing various ad copy variants to deliver great ROI. If your company has overlooked Facebook's massive reach and commercial opportunities, connect now with ultroNeous",
//   },
// ];

// export const AboutUsCounter = {
//   end1: 2020,
//   sign1: "",
//   title1: "Year Founded",
//   end2: 2,
//   sign2: "+",
//   title2: "Global Branches",
//   end3: 10,
//   sign3: "+",
//   title3: "Industries Served",
//   end4: 20,
//   sign4: "+",
//   title4: "Technology Verticles",
//   end5: 99,
//   sign5: "%",
//   title5: "Employee Retention",
// };

export const CareersData = [
  {
    title: "Engineering",
    vacancy: "(4)",
    jobs: [
      {
        job: "iOS Developer",
        jobNumber: "1",
      },
      {
        job: "Android Developer ",
        jobNumber: "1",
      },
      {
        job: "React Native Developer",
        jobNumber: "2",
      },
      {
        job: "Flutter Developer",
        jobNumber: "2",
      },
    ],
  },
  {
    title: "Project Management",
    vacancy: "(2)",
    jobs: [
      {
        job: "Project Manager ",
        jobNumber: "1",
      },
      {
        job: "Technical Project Coordinator",
        jobNumber: "1",
      },
    ],
  },
  {
    title: "Marketing",
    vacancy: "(4)",
    jobs: [
      {
        job: "Digital Marketing Executive",
        jobNumber: "1",
      },
      {
        job: "SEO Intern",
        jobNumber: "1",
      },
      {
        job: "Graphic Designer",
        jobNumber: "1",
      },

      {
        job: "UX/UI Designer",
        jobNumber: "1",
      },
    ],
  },
  {
    title: "Sales",
    vacancy: "(3)",
    jobs: [
      {
        job: "Business Development Manager",
        jobNumber: "2",
      },
      {
        job: "Business Development Executive",
        jobNumber: "2",
      },
      {
        job: "Bidding Expert",
        jobNumber: "1",
      },
    ],
  },
];

// export const FeelTheCultureData = [
//   {
//     image: Shiv1,
//     name: "Shiv Desai (Digital Marketing Manager | India) ",
//     details:
//       "Changing my job from a sales marketing field to Online marketing was a tough  call for me but  I prepared myself as I was a fresher in the field there were no good  responses for me. Then I was  interviewed at ultroNeous  and they gave me an opportunity to prove  myself. My first  3 months  were struggling  as I was not able to cope-up but everyone here believed in me and over the time I am improving and also  proving myself  ",
//   },
//   {
//     image: Malav1,
//     name: "Malav Kargathra (Business Development Consultant | India) ",
//     details:
//       "Probably the best place to spark off your career. I changed my field from SEO to Sales but got an overwhelming response from the organisation. Management finds credence in me and I got opportunity to demonstrate my skills. The company culture is the perfect representative of  Do things that makes you happy. ",
//   },
//   {
//     image: Vibha1,
//     name: "Vibha Ojha (UX/UI Designer | India)",
//     details: `What I really appreciate about working at ultroNeous is how the entire team is wholeheartedly interested and passionate about their work & skills. The authenticity & values of the company is what making it succeeding everyday. I am really grateful for becoming an ultroNeour!!`,
//   },

//   {
//     image: Sachin1,
//     name: "Sachin Padhiyar (Project Manager | India)  ",
//     details:
//       "I'm thrilled to be part of a growing organization. I have a background in engineering and have experienced sales and marketing. However, this role gave some success but it wasn't my cup of tea. But,  my mentor & CEO of ultroNeous Technologies, Mr. Pathik Shah guided me, believed in me and offered a role of Project Manager that is perfect fit for me and I grateful by doing things that I exactly wanted to do!!",
//   },

//   {
//     image: Akshay1,
//     name: "Akshay Mungalpara (Mobile Developer | India)  ",
//     details:
//       "I started my journey with ultroNeous Technologies as mobile developer intern. I got many challenging tasks that took my skill levels to the whole different level and that level was appreciated by the organisation and I was promoted as full-time employee in just 1 month of short time. Environment, culture & work-ethics are so good that I will not have any thought of changing the organisation.",
//   },
//   {
//     image: Sandeep1,
//     name: "Sandeep Modi (Full Stack Developer | India)  ",
//     details:
//       "I started my career as a React.js Frontend Developer and after having some experience, I wanted to explore backend part. ultroNeous Technologies provided that opportunity and I joined as full-stack developer. I learned MERN stack development and got really good support and guidance from each and every team members. ",
//   },
// ];

export const ContactUsFormCheckboxData = {
  developersData: [
    "Hire Wordpress Developer",
    "Hire Woocommerce Developer",
    "Hire Shopify Developer",
    "Hire Magento Developer",
    "Hire PHP Developer",
    "Hire Laravel Developer",
    "Hire Codeigniter Developer",
    "Hire Nodejs Developer",
    "Hire Angular Developer",
    "Hire Reactjs Developer",
    "Hire Vuejs Developer",
    "Hire Front end Developer",
    "Hire iOS Developer",
    "Hire Android Developer",
    "Hire React Native Developer",
    "Hire Xamarin Developer",
    "Hire Flutter Developer",
    "Hire Python Developer",
    "Ruby on Rails",
    "Hire Web App Developer",
  ],
  othersData: ["UI/UX Designer", "Quality Analyst", "Digital Marketing"],
};
