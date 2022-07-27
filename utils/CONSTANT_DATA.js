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
  SiWoo,
} from "react-icons/si";
import stylesHT from "@/styles/components/HorizontalTabService.module.css";
import { RiVuejsLine } from "react-icons/ri";
import { GiZeppelin } from "react-icons/gi";
import { DiAndroid } from "react-icons/di";
import { IoLogoAngular } from "react-icons/io";
import {
  FaAngular,
  FaFacebookF,
  FaHtml5,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaReacteurope,
  FaTwitter,
  FaVuejs,
} from "react-icons/fa";
import { Image } from "react-bootstrap";
import styles from "@/styles/components/HorizontalTab.module.css";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export const API_URL = "https://ultroneous.com:8000/";
// export const API_URL = "http://192.168.1.28:8000/";
export const CounterComponentData = [
  {
    start: 25,
    end: 50,
    sign: "+",
    title: "Projects Completed",
  },
  {
    start: 45,
    end: 97,
    sign: "%",
    title: "Positive Feedback",
  },
  {
    start: 0,
    end: 15,
    sign: "+",
    title: "Countries Served",
  },
  {
    start: 0,
    sign: "+",
    end: 32,
    title: "Clientele",
  },
  {
    start: 0,
    end: 30,
    sign: "+",
    title: "Experts",
  },
];
export const CounterPersonalPage = [
  // {
  //   start: 25,
  //   end: 80,
  //   sign: "+",
  //   title: "Projects Completed",
  // },
  // {
  //   start: 25,
  //   end: 99,
  //   sign: "%",
  //   title: "Positive Feedback",
  // },
  // {
  //   start: 0,
  //   end: 15,
  //   sign: "+",
  //   title: "Countries Served",
  // },
  // {
  //   start: 0,
  //   end: 40,
  //   sign: "+",
  //   title: "Clientele",
  // },
  {
    start: 25,
    end: 50,
    sign: "+",
    title: "Projects Completed",
  },
  {
    start: 45,
    end: 97,
    sign: "%",
    title: "Positive Feedback",
  },
  {
    start: 0,
    end: 15,
    sign: "+",
    title: "Countries Served",
  },
  {
    start: 0,
    sign: "+",
    end: 32,
    title: "Clientele",
  },
];
export const WeExcelAtData = [
  {
    title: "Front End ",
    techs: [
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/web1.png"
        alt="reactjs"
        onMouseEnter={(e) => (e.target.src = "/assets/webhover1.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/web1.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={2}
        src="/assets/web3.png"
        alt="angular"
        onMouseEnter={(e) => (e.target.src = "/assets/webhover3.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/web3.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={3}
        src="/assets/web4.png"
        alt="angular"
        onMouseEnter={(e) => (e.target.src = "/assets/webhover4.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/web4.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={4}
        src="/assets/web2.png"
        alt="html5"
        onMouseEnter={(e) => (e.target.src = "/assets/webhover2.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/web2.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={5}
        src="/assets/web5.png"
        alt="nextjs"
        onMouseEnter={(e) => (e.target.src = "/assets/webhover5.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/web5.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={6}
        src="/assets/web6.png"
        alt="gatsby"
        onMouseEnter={(e) => (e.target.src = "/assets/webhover6.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/web6.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={7}
        src="/assets/web7.png"
        alt="nuxtjs"
        onMouseEnter={(e) => (e.target.src = "/assets/webhover7.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/web7.png")}
      />,
    ],
    techsname: [
      { name: "React", link: "/reactjs-development" },
      { name: "Angular", link: "/angular-development" },
      { name: "Vue", link: "vuejs-development" },
      { name: "HTML5", link: "#" },
      { name: "Next", link: "#" },
      { name: "Gatsby", link: "#" },
      { name: "Nuxtjs", link: "#" },
    ],
  },
  {
    title: "Back End ",
    techs: [
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/backend1.png"
        alt="reactjs"
        onMouseEnter={(e) => (e.target.src = "/assets/backendhover1.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/backend1.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={2}
        src="/assets/backend2.png"
        alt="angular"
        onMouseEnter={(e) => (e.target.src = "/assets/backendhover2.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/backend2.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={3}
        src="/assets/backend3.png"
        alt="angular"
        onMouseEnter={(e) => (e.target.src = "/assets/backendhover3.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/backend3.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={4}
        src="/assets/backend4.png"
        alt="html5"
        onMouseEnter={(e) => (e.target.src = "/assets/backendhover4.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/backend4.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={5}
        src="/assets/backend5.png"
        alt="nextjs"
        onMouseEnter={(e) => (e.target.src = "/assets/backendhover5.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/backend5.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={6}
        src="/assets/backend6.png"
        alt="gatsby"
        onMouseEnter={(e) => (e.target.src = "/assets/backendhover6.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/backend6.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={7}
        src="/assets/backend7.png"
        alt="nuxtjs"
        onMouseEnter={(e) => (e.target.src = "/assets/backendhover7.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/backend7.png")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={8}
        src="/assets/golang-icon.svg"
        alt="Golang"
        height="35"
        onMouseEnter={(e) => (e.target.src = "/assets/golang-original.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/golang-icon.svg")}
      />,
    ],
    techsname: [
      { name: "Node", link: "nodejs-development" },
      { name: "Laravel", link: "laravel-development" },
      { name: "Php", link: "php-development" },
      { name: "Codeigniter", link: "codeigniter-development" },
      { name: "Magento", link: "magento-development" },
      { name: "Wordpress", link: "wordpress-development" },
      { name: "Shopify", link: "shopify-development" },
      { name: "Golang", link: "golang-development" },
    ],
  },
  {
    title: "Mobile App",
    techs: [
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/mad1.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh1.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad1.svg")}
      />,

      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/mad2.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh2.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad2.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/mad3.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh3.png")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad3.svg")}
      />,
      <SiReact className={`${styles.React} ${styles.WeExcelIcons}`} key={1} />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        style={{ width: "50%" }}
        src="/assets/whitejava.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/colorjava.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/whitejava.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        style={{ width: "90%" }}
        src="/assets/mad6.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh6.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad6.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        style={{ width: "90%" }}
        src="/assets/mad7.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/madh7.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/mad7.svg")}
      />,
    ],
    techsname: [
      { name: "Kotlin", link: "android-development" },
      { name: "Swift", link: "ios-development" },
      { name: "Flutter", link: "flutter-development" },
      { name: "React Native", link: "react-native-development" },
      { name: "Java", link: "android-development" },
      { name: "Objective-C", link: "ios-development" },
      { name: "Xamarin", link: "xamarin-development" },
    ],
  },
  {
    title: "UX/ UI",
    techs: [
      <Image
        className="WeExcelAtIconsData"
        key={1}
        style={{ width: "45%" }}
        src="/assets/uiux1.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh1.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux1.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/uiux2.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh2.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux2.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/uiux3.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh3.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux3.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/uiux4.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh4.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux4.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/uiux5.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh5.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux5.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/uiux6.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh6.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux6.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/uiux7.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/uiuxh7.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/uiux7.svg")}
      />,
    ],
    techsname: [
      { name: "Figma", link: "#" },
      { name: "XD", link: "#" },
      { name: "Zeplin", link: "#" },
      { name: "Adobe Illustrator", link: "#" },
      { name: "Adobe Photoshop", link: "#" },
      { name: "InVision", link: "#" },
      { name: "Mockingbot", link: "#" },
    ],
  },
  {
    title: "Digital Marketing",
    techs: [
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/dm1.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh1.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm1.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/dm2.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh2.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm2.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/dm3.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh3.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm3.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/dm4.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh4.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm4.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/dm5.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh5.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm5.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/dm6.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh6.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm6.svg")}
      />,
      <Image
        className="WeExcelAtIconsData"
        key={1}
        src="/assets/dm7.svg"
        alt="digital marketing"
        onMouseEnter={(e) => (e.target.src = "/assets/dmh7.svg")}
        onMouseLeave={(e) => (e.target.src = "/assets/dm7.svg")}
      />,
    ],
    techsname: [
      { name: "Semrush", link: "#" },
      { name: "Hootsuite", link: "#" },
      { name: "Keyhole", link: "#" },
      { name: "Google Analytics", link: "#" },
      { name: "Yoast", link: "#" },
      { name: "Buzzsumo", link: "#" },
      { name: "Buffer", link: "#" },
    ],
  },
];

export const PortfolioSliderData = [
  {
    image: "/assets/sneakers.webp",
    title: "Sneakers Marketplace ",
    details:
      "Sneakers industry is booming and we took a chance to dive into the market with this fully custom sneakers marketplace app. Buyers are literally loving this UX more than their sneakers.",
  },
  {
    image: "/assets/doctor.webp",
    title: "Clinic on Palm",
    details: `We repeat the ancient history of diagnosing health by palm reading. Have a look at our handy application "Clinic on Palm" where patients can get easy consultation from their doctors.`,
  },
  {
    image: "/assets/fintech.webp",
    title: "FinTech Mobile App ",
    details:
      "This app is designed with the purpose of simplifying the chaos of money management. With this, users can closely monitor their expenses along with transferring money with their contacts. ",
  },
  {
    image: "/assets/food.webp",
    title: "Food Ordering App  ",
    details:
      "This Food Ordering Website allows restaurant to directly serve delicious food to their customers. Customers can easily navigate through website, check menu and order their favourite food. ",
  },
];

export const TestimonialsSliderData = [
  {
    image: "/assets/CF3.png",
    name: "Sadie Skelland (SoFi, Director of Operations) ",
    details:
      "We had a complicated finance business app idea and tried a number of developers before finding ultroNeous Technologies, whose expert staff simplified the concept. I have to say, without them, our app would not have been possible.",
  },
  {
    image: "/assets/CF2.png",
    name: "Loren McClure (Cosade Labs, Co-Founder) ",
    details:
      "This was my first app, and they were really helpful at every stage, answering questions, writing recommendations, and providing tips. ultroNeous is a highly professional firm with a team that is skilled in creating high-quality apps. ",
  },
  {
    image: "/assets/CF1.png",
    name: "Jerry Walters (Mirato, Owner)",
    details: `It was a pleasure to work with the ultroNeous team!! I had hired them to develop my mobile app, and I was really concerned about the app's launch date. However, they have a highly skilled workforce that can easily handle duties and complete projects on time.`,
  },
  {
    image: "/assets/CF4.png",
    name: "Kina Bayra (AIC ,Project coordinator)  ",
    details:
      "I am incredibly impressed with the quality and performance of the mobile app developed by ultroNeous Technologies. Their entire team is organized and dedicated to various technologies, and I must state that they perform brilliantly in all areas.",
  },
];

export const ChooseAsPerYourNeedData = [
  {
    title: "Hire a reasource",
    mainTitle: "HIRE A RESOURCE",
    details: "Hire any Developer or Build your own team with ultroNeous.",
    image: "/assets/cayn-1.svg",
    image2: "/assets/cayn-1-res.svg",
  },
  {
    title: "Project Basis",
    mainTitle: "PROJECT BASIS",
    details:
      "Have a fixed project scope in mind? Discuss now to get a fixed price.",
    image: "/assets/cayn-2.svg",
    image2: "/assets/cayn-2-res.svg",
  },
  {
    title: "Technology Partner",
    mainTitle: "TECHNOLOGY PARTNER",
    details:
      "Have a project where you need a team on a periodic basis, we got you.",
    image: "/assets/cayn-3.svg",
    image2: "/assets/cayn-3-res.svg",
  },
];

export const WebTechnologyExpertise = [
  {
    title: "Open Source",
    techIcons: [
      <Link href={"/wordpress-development"}>
        <SiWordpress className={stylesHT.TechImagesWeb0} />
      </Link>,
      <Link href={"/shopify-development"}>
        <SiShopify className={stylesHT.TechImagesWeb1} />
      </Link>,
      <Link href={"/magento-development"}>
        <SiMagento className={stylesHT.TechImagesWeb2} />
      </Link>,
    ],
    detail:
      "Web developers of ultroNeous Technologies have sharp skills in developing web applications utilizing open-source libraries and frameworks. We create innovative, responsive, and stunning web apps with top-level security. Our team has extensive expertise in designing and developing custom web apps with open-source development platforms like WordPress, Shopify, and Magento.",
  },
  {
    title: "LAMP Stack",
    techIcons: [
      <Link href={"/php-development"}>
        <SiPhp className={stylesHT.TechImagesWeb3} />
      </Link>,
      <Link href={"/laravel-development"}>
        <SiLaravel className={stylesHT.TechImagesWeb4} />
      </Link>,
      <Link href={"/codeigniter-development"}>
        <SiCodeigniter className={stylesHT.TechImagesWeb5} />
      </Link>,
    ],
    detail:
      "We provide web application development services that encompass a wide range of technologies. Being a web development company, our main focus is to build apps that conveys your brand values to your targeted customers and create a transformational experience. Our adept LAMP stack developers are conversant with the PHP, Laravel, and Codeigniter frameworks and have the expertise to follow agile methodologies. What matters the most to us is to build bespoke end-to-end, regardless of the business size.",
  },
  {
    title: "MEAN Stack",
    techIcons: [
      <SiMongodb className={stylesHT.TechImagesWeb6} />,
      <SiExpress className={stylesHT.TechImagesWeb7} />,
      <Link href={"/angular-development"}>
        <IoLogoAngular className={stylesHT.TechImagesWeb8} />
      </Link>,
      <Link href={"/nodejs-development"}>
        <FaNodeJs className={stylesHT.TechImagesWeb9} />
      </Link>,
    ],
    detail: (
      <>
        Having a distinguished team of{" "}
        <a href="/mean-stack-development" className="uniqueLink">
          MEAN stack developers
        </a>
        , we provide tailor-made services as per your specific business needs.
        MEAN stack's winning advantages include easy-to-build, test, maintain,
        and reliability. The four frameworks on which MEAN stack is based/works
        are MongoDB, Express, Angular, and Node. Leverage the web development
        services of ultroNeous to design futuristic web apps and websites that
        make powerful impressions about your business.
      </>
    ),
  },
  {
    title: "MERN Stack",
    techIcons: [
      <SiMongodb className={stylesHT.TechImagesWeb10} />,
      <SiExpress className={stylesHT.TechImagesWeb11} />,
      <Link href={"/reactjs-development"}>
        <FaReact className={stylesHT.TechImagesWeb12} />
      </Link>,
      <Link href={"/nodejs-development"}>
        <FaNodeJs className={stylesHT.TechImagesWeb13} />
      </Link>,
    ],
    detail: (
      <>
        MERN stack has attractive features including flexibility and
        high-performing web apps that give a native experience to end-users.
        MongoDB, ExpressJS, ReactJS, and NodeJS—which also validates the
        name—are the four key technologies used in this development process. All
        four work together to develop reliable, efficient, and scalable web
        applications. Our{" "}
        <a href="/mern-stack-development" className="uniqueLink">
          MERN stack developers
        </a>{" "}
        provide web application development services to give you a clear way to
        digitize your business.
      </>
    ),
  },
];
export const MobileTechnologyExpertise = [
  {
    title: "Native",
    collist: {
      f1: "red",
    },

    techIcons: [
      <Link href={"/ios-development"}>
        <SiApple className={stylesHT.TechImagesMT0} />
      </Link>,
      <Link href={"/android-development"}>
        <DiAndroid className={stylesHT.TechImagesMT1} />
      </Link>,
    ],
    detail:
      "Native apps give the users a superior experience and eminent performance by accessing the services offered by the specific device and operating system be it iOS, Android, or Windows. We strategize the right tech stack and choice of platform to deliver the result you are looking for. Being a mobile app development company, our team tends to deliver solutions which use the inherent power of iOS and Android to improve your sales potential.",
  },
  {
    title: "Hybrid",
    techIcons: [
      <Link href={"/flutter-development"}>
        <SiFlutter className={stylesHT.TechImagesMT2} />
      </Link>,
      <Link href={"/xamarin-development"}>
        <SiXamarin className={stylesHT.TechImagesMT3} />
      </Link>,
      <Link href={"/react-native-development"}>
        <SiReact className={stylesHT.TechImagesMT4} />
      </Link>,
    ],
    detail:
      "Hybrid mobile apps don't depend on a specific platform, so you don't have to create separate development teams for apps compatible with multiple platforms. Due to a single framework, hybrid app development demands less maintenance and provides faster time-to-launch. Our team of mobile app developers digs deep into every project and delivers high-performing and elegant results that run across various platforms.",
  },
];
export const DigitalMarketingExpertise = [
  {
    title: "Search Engine Optimization    ",
    techIcons: [
      <Image
        src="/assets/seo-digital-marketing.svg"
        className={stylesHT.TechImagesDM0}
        alt="Search Engine Optimization (SEO) Services"
      />,
    ],
    detail:
      "The search engine environment is constantly changing, and the competition is fierce. You need a digital marketing company that offers customized SEO services to rank your website higher on search engines. We provide a more holistic approach to your business so you can grow at a faster pace. Get leverage of the ultroNeous team in optimizing a website for organic results on Google, Bing, Yahoo & other search engines and boost business revenue.      ",
  },
  {
    title: "Google Ads",
    techIcons: [<SiGoogleadsense className={stylesHT.TechImagesDM1} />],
    detail:
      "Using Google Ads-a versatile tool for brand awareness, we will boost traffic to your website by analyzing competitor campaigns, determining keywords, and using ad copy on your website. We take this data-driven approach to get yourself the desirable Return on Investment (ROI). All you need is ultroNeous Technologies- a digital marketing company that provides the best practices to help you reach out to the right customers.      ",
  },
  {
    title: "Social Media Marketing",
    techIcons: [
      <Image
        src="/assets/like-digital.svg"
        className={stylesHT.TechImagesDM2}
        alt="Social Media Marketing Services"
      />,
    ],
    detail:
      "Social media marketing is a key to driving more customers, nurturing them, and growing steadily. We help you increase your brand's awareness and improve communication with your targeted customers with excellent social media marketing strategies. As a result, you can achieve higher traffic on the website and drive up sales. Our wide range of digital marketing services can guide you to overcome all the challenges and make your audience fall in love with you.",
  },
  {
    title: "Facebook Paid Advertising",
    techIcons: [<SiFacebook className={stylesHT.TechImagesDM3} />],
    detail:
      "Facebook is one of the most popular social media platforms with roughly 2.93 billion active users. And running paid ads on Facebook can be incredibly beneficial for a business as it provides robust analytics, high customization, and easy setup for faster results. We are an internet marketing agency adept at running Facebook ad campaigns to increase clients' business revenue. Grow with Facebook's massive reach with our digital marketing services and optimized solutions to generate ROI.      ",
  },
];
export const FrontEndExpertise = [
  {
    title: "ReactJS",
    techIcons: [
      <Link href={"/reactjs-development"}>
        <FaReact className={stylesHT.TechImagesFE0} />
      </Link>,
    ],
    detail:
      " ReactJS is a popular front-end development framework with an open-source Javascript library that allows developers to build scalable applications with well-structured code. As a front-end web development company, our developers use ReactJS features to build powerful front-end and deliver robust and interactive solutions as per your specific business needs. Make use of front-end web development services to get yourself efficient applications.      ",
  },
  {
    title: "Angular",
    techIcons: [
      <Link href={"/angular-development"}>
        <FaAngular className={stylesHT.TechImagesFE1} />
      </Link>,
    ],
    detail:
      "Angular is an open-source web framework for designing and developing ultra-modern applications. The platform is capable of supporting the development of a wide range of high-quality applications for distinct industries. Our team will blend the Angular framework's features with their expertise to craft premium and intuitive web solutions. Take advantage of our app development services to achieve more rapid ROI.      ",
  },
  {
    title: "VueJS",
    techIcons: [
      <Link href={"/vuejs-development"}>
        <FaVuejs className={stylesHT.TechImagesFE2} />
      </Link>,
    ],
    detail:
      "Vue is a versatile and most performant mainstream JavaScript framework for developing applications with stunning user interface components. It offers remarkable features including an adaptable ecosystem and being perfectly capable of handling large-scale applications. For the best results and performance of the app, hire our dedicated front-end developers with Vue framework expertise.       ",
  },
  {
    title: "HTML 5 ",
    techIcons: [<FaHtml5 className={stylesHT.TechImagesFE3} />],
    detail:
      "HTML5 is the most recent version of the hypertext markup language, and it has the potential to revolutionize web app development. ultroNeous' front-end developers can develop complex browser-based apps and websites using an HTML5 markup language. Through our app development services, we offer devoted front-end developers with HTML5 working knowledge and experience for hire to develop your business web app with rich visual elements, strong security norms, and a fantastic user experience.       ",
  },
];
export const EcommerceExpertise = [
  {
    title: "WordPress",
    techIcons: [
      <Link href={"/wordpress-development"}>
        <SiWordpress className={stylesHT.TechImagesWeb0} />
      </Link>,
    ],
    detail:
      "WordPress stands on its own when in terms of providing flexible, SEO-optimized, and enterprise-class websites. Our team does eCommerce development in a way where you can have the edge over your competitors by using world-disruptive technologies. We have experience in developing custom WordPress plug-ins and themes to satisfy all your requirements of an interactive user journey, exceptional functionality, and secured payment methods.   ",
  },
  {
    title: "Shopify",
    techIcons: [
      <Link href={"/shopify-development"}>
        <SiShopify className={stylesHT.TechImagesWeb1} />
      </Link>,
    ],
    detail:
      "ultroNeous' eCommerce development services have satisfied clients from all around the world with vibrant and sustainable eCommerce solutions. We incorporate the latest technology and trends to develop your Shopify storefront. Our developers are experts in crafting websites and applications with the right architecture, superior performance, excellent visual designs, and many attractive features necessary for a successful online store.      ",
  },
  {
    title: "Magento",
    techIcons: [
      <Link href={"/magento-development"}>
        <SiMagento className={stylesHT.TechImagesWeb2} />
      </Link>,
    ],
    detail:
      "ultroNeous Technologies provides eCommerce development services with Magento's features like SEO friendliness, multiple currencies, language support, and a multitude of hosting options to deliver the finest eCommerce websites and apps. Our dedicated and certified Magento development team has the expertise and provides Magento services including customized development, designing, migration, up-gradation, support, and consultation to help your brand emerge as a leading example.      ",
  },
  {
    title: "Woocommerce",
    techIcons: [<SiWoo className={stylesHT.TechImagesWOO} />],
    detail:
      " We are one of the top eCommerce development companies that deliver one-of-a-kind eCommerce solutions to clients. WooCommerce is the leading platform for powering up your eCommerce business. Its amazing features include seamless integration with content, countless themes, unrestricted customization, extensions, and more. Our team of developers builds eCommerce websites and applications that help your business soar with profit and popularity.      ",
  },
];
export const CloudandDevopsExpertise = [
  {
    title: "Amazon AWS",
    techIcons: [
      <Image
        src="/assets/aws.svg"
        className={stylesHT.TechImagesCD0}
        alt="AWS cloud development services from ultroNeous"
      />,
    ],
    detail:
      "AWS is a cloud computing infrastructure with numerous products and services including data storage, analytics, business application development, and more. We have one of the best tech problem solvers who brings you solutions for cloud-native applications with enhanced mobility. They are proficient in IaaS, PaaS, and SaaS cloud computing models and deliver end-to-end cloud solutions.      ",
  },
  {
    title: "Microsoft Azure",
    techIcons: [
      <Image
        src="/assets/azure.svg"
        className={stylesHT.TechImagesCD1}
        alt="Microsoft Azure Development Services"
      />,
    ],
    detail:
      " Microsoft Azure has all the perks you need to get started with cloud services. Speed of service, enhanced flexibility, and disaster recovery are features that make it stand out. With its automated solutions and robust templates, you can quickly see improvement. Get an international edge and elevate your business value with ultroNeous Technologies- a cloud computing company.      ",
  },
  {
    title: "Google Cloud",
    techIcons: [
      <Image
        src="/assets/googlecloud.svg"
        className={stylesHT.TechImagesCD2}
        alt="Google cloud development from ultroNeous"
      />,
    ],
    detail:
      " Our team of experts efficiently manages the workload and provides cloud computing services using various platforms including Google Cloud. Some of the exciting attributes are unmatched security, a reliable framework, and highly durable storage. This supports us to deliver software faster while improving operational security and governance to quicken your business with innovation.",
  },
];
export const AboutUsCounter = [
  {
    start: 2000,
    end: 2020,
    sign: "",
    title: (
      <>
        <p className="m-0 ">Year</p> <p className="m-0"> Founded </p>
      </>
    ),
  },
  {
    start: 0,
    end: 2,
    sign: "+",
    title: (
      <>
        <p className="m-0 ">Global</p> <p className="m-0"> Branches </p>
      </>
    ),
  },
  {
    start: 0,
    end: 10,
    sign: "+",
    title: (
      <>
        <p className="m-0 ">Industries</p> <p className="m-0"> Served </p>
      </>
    ),
  },
  {
    start: 0,
    end: 20,
    sign: "+",
    title: (
      <>
        <p className="m-0 ">Technology</p> <p className="m-0"> Verticles </p>
      </>
    ),
  },
  {
    start: 74,
    end: 99,
    sign: "%",
    title: (
      <>
        <p className="m-0 ">Employee</p> <p className="m-0"> Retention </p>
      </>
    ),
  },
];

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
    vacancy: "(2)",
    jobs: [
      {
        job: "Digital Marketing Executive",
        jobNumber: "1",
      },
      {
        job: "SEO Intern",
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
  {
    title: "Designing",
    vacancy: "(2)",
    jobs: [
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
];

export const FeelTheCultureData = [
  {
    image: "/assets/Shiv.png",
    name: "Shiv Desai (Digital Marketing Manager | India) ",
    details:
      "Changing my job from a sales marketing field to Online marketing was a tough call but I took the step. As I was a fresher in the field it was difficult to get a job. Then I got an opportunity at ultroNeous to prove myself. My first  3 months were struggling but everyone here believed in me and over time I proved myself.",
  },
  {
    image: "/assets/Malav.png",
    name: "Malav Kargathra (Business Development Consultant | India) ",
    details:
      "Probably the best place to spark off your career. I changed my field from SEO to Sales but got an overwhelming response from the organisation. Management finds credence in me and I got opportunity to demonstrate my skills. The company culture is the perfect representative of  Do things that makes you happy. ",
  },
  {
    image: "/assets/Vibha.png",
    name: "Vibha Ojha (UX/UI Designer | India)",
    details: `What I really appreciate about working at ultroNeous is how the entire team is wholeheartedly interested and passionate about their work & skills. The authenticity & values of the company is what making it succeeding everyday. I am really grateful for becoming an ultroNeour!!`,
  },

  {
    image: "/assets/Sachin.png",
    name: "Sachin Padhiyar (Project Manager | India)  ",
    details:
      "I'm thrilled to be part of a growing organization. I have a background in engineering and have experienced sales and marketing. However, this role gave some success but it wasn't my cup of tea. But,  my mentor & CEO of ultroNeous Technologies, Mr. Pathik Shah guided me, believed in me and offered a role of Project Manager that is perfect fit for me and I grateful by doing things that I exactly wanted to do!!",
  },

  {
    image: "/assets/Akshay.png",
    name: "Akshay Mungalpara (Mobile Developer | India)  ",
    details:
      "I started my journey with ultroNeous Technologies as mobile developer intern. I got many challenging tasks that took my skill levels to the whole different level and that level was appreciated by the organisation and I was promoted as full-time employee in just 1 month of short time. Environment, culture & work-ethics are so good that I will not have any thought of changing the organisation.",
  },
  {
    image: "/assets/Sandeep.png",
    name: "Sandeep Modi (Full Stack Developer | India)  ",
    details:
      "I started my career as a React.js Frontend Developer and after having some experience, I wanted to explore backend part. ultroNeous Technologies provided that opportunity and I joined as full-stack developer. I learned MERN stack development and got really good support and guidance from each and every team members. ",
  },
];

export const ContactUsFormCheckboxData = {
  developersData: [
    "Wordpress Developer",
    "Woocommerce Developer",
    "Shopify Developer",
    "Magento Developer",
    "PHP Developer",
    "Laravel Developer",
    "Codeigniter Developer",
    "Nodejs Developer",
    "Angular Developer",
    "Reactjs Developer",
    "Vuejs Developer",
    "Front end Developer",
    "iOS Developer",
    "Android Developer",
    "React Native Developer",
    "Xamarin Developer",
    "Flutter Developer",
    "Python Developer",
    // "Ruby on Rails",
    "Web App Developer",
  ],
  othersData: ["UI/UX Designer", "Quality Analyst", "Digital Marketing"],
};

export const OurTeamSliderData = [
  {
    name: "Pathik Shah",
    title: "Founder & CEO",
    image: "/assets/pathikshah.png",
    quote: "Set the unrealistic goals, you always will be ahead!",
  },
  {
    name: "Jinesh Shah",
    title: "Executive Director",
    image: "/assets/jineshshah.png",
    quote: "Getting satisfied kills the Growth of person!",
  },
  {
    name: (
      <>
        Deep
        <br />
        Shah
      </>
    ),
    title: "Executive Director",
    image: "/assets/meet_deep.png",
    quote: "Believe you can and you’re halfway there!",
  },
];
export const uniqueDrop = [
  {
    name: "Shopify Development",
    link: "/hire-shopify-developer",
  },
  {
    name: "WordPress Development",
    link: "/hire-wordpress-developer",
  },
  {
    name: "Woo-commerce Development",
    link: "/hire-woocommerce-developer",
  },
  {
    name: "Magento Development",
    link: "/hire-magento-developer",
  },
  {
    name: "PHP Development",
    link: "/hire-php-developer",
  },
  {
    name: "Laravel Development",
    link: "/hire-laravel-developer",
  },
  {
    name: "Codeigniter Development",
    link: "/hire-codeigniter-developer",
  },
  {
    name: "NodeJS Development",
    link: "/hire-nodejs-developer",
  },
  {
    name: "Angular Development",
    link: "/hire-angular-developer",
  },
  {
    name: "ReactJS Development",
    link: "/hire-reactjs-developer",
  },
  {
    name: "VueJS Development",
    link: "/hire-vuejs-developer",
  },
  {
    name: "Front End Development",
    link: "/hire-front-end-developer",
  },
  {
    name: "iOS Development",
    link: "/hire-ios-developer",
  },
  {
    name: "Android Development",
    link: "/hire-android-developer",
  },
  {
    name: "React Native Development",
    link: "/hire-react-native-developer",
  },
  {
    name: "Xamarin Development",
    link: "/hire-xamarin-developer",
  },
  {
    name: "Flutter Development",
    link: "/hire-flutter-developer",
  },
  {
    name: "Python Development",
    link: "/hire-python-developer",
  },
  {
    name: "Web App Development",
    link: "/hire-web-app-developer",
  },
];

export const uniqueLink = [
  "/angular-development",
  "/codeigniter-development",
  "/laravel-development",
  "/magento-development",
  "/nodejs-development",
  "/php-development",
  "/reactjs-development",
  "/shopify-development",
  "/vuejs-development",
  "/wordpress-development",
  "/android-development",
  "/flutter-development",
  "/ios-development",
  "/python-development",
  "/xamarin-development",
  "/react-native-development",
  "/mern-stack-development",
  "/mean-stack-development",
  "/golang-development",
  "/privacy-policy",
];

export const LinksOfAllpages = {
  mainPages: {
    aboutUltroneous: "/about-ultroneous",
    careers: "/careers",
    contactUs: "/contact-us",
    home: "/",
    expertise: "/expertise",
    meetOurTeam: "/meet-our-team",
  },
  services: {
    servicesMain: "/services",
    frontendDevelopment: "/front-end-development",
    webAappDevelopment: "/web-application-development",
    mobileAppDevelopment: "/mobile-application-development",
    cloudAndDevops: "/cloud-and-devops",
    uxUiDesign: "/ux-ui-design",
    digitalMarketing: "/digital-marketing",
    ecommerceDevelopment: "/ecommerce-development",
    enterpriseSoftwareSolutions: "/enterprise-software-solutions",
    // 19 pages links
    // web
    hireAngularDeveloper: "/angular-development",
    hireCodeigniterDeveloper: "/codeigniter-development",
    hireLaravelDeveloper: "/laravel-development",
    hireMagentoDeveloper: "/magento-development",
    hireNodeJSDeveloper: "/nodejs-development",
    hirePhpDeveloper: "/php-development",
    hireReactJSDeveloper: "/reactjs-development",
    hireShopifyDeveloper: "/shopify-development",
    hireVueJSDeveloper: "/vuejs-development",
    hireWordPressDeveloper: "/wordpress-development",
    // mobile
    hireAndroidDeveloper: "/android-development",
    hireFlutterDeveloper: "/flutter-development",
    hireiOSDeveloper: "/ios-development",
    hirePythonDeveloper: "/python-development",
    hireXamarinDeveloper: "/xamarin-development",
    hireReactNativeDeveloper: "/react-native-development",
    // fullstack
    hireMernDevloper: "/mern-stack-development",
    hireMeanDeveloper: "/mean-stack-development",
    hireGolangDeveloper: "/golang-development",
  },
  socialMedia: [
    {
      link: "https://www.facebook.com/ultroneous.technologies",
      icon: <FaFacebookF className="SocialMediaIcons" />,
    },
    {
      link: "https://twitter.com/ultroneousTech",
      icon: <FaTwitter className="SocialMediaIcons" />,
    },
    {
      link: "https://www.instagram.com/ultroneous.technologies/",
      icon: <AiFillInstagram className="SocialMediaIcons" />,
    },
    {
      link: "https://www.linkedin.com/company/ultroneous",
      icon: <FaLinkedinIn className="SocialMediaIcons" />,
    },
  ],
};

export const NavbarMenuList = [
  {
    Company: [
      { name: "About Us", link: LinksOfAllpages.mainPages.aboutUltroneous },
      { name: "Careers", link: LinksOfAllpages.mainPages.careers },
      { name: "Meet our team", link: LinksOfAllpages.mainPages.meetOurTeam },
    ],
  },
  {
    Services: [
      {
        name: "Web Application Development",
        link: LinksOfAllpages.services.webAappDevelopment,
      },
      {
        name: "Mobile Application Development",
        link: LinksOfAllpages.services.mobileAppDevelopment,
      },
      {
        name: "UX/UI Design",
        link: LinksOfAllpages.services.uxUiDesign,
      },
      {
        name: "Digital Marketing",
        link: LinksOfAllpages.services.digitalMarketing,
      },
      {
        name: "Cloud & Devops",
        link: LinksOfAllpages.services.cloudAndDevops,
      },
      {
        name: "Front End Development",
        link: LinksOfAllpages.services.frontendDevelopment,
      },
      {
        name: "eCommerce Development",
        link: "/ecommerce-development",
      },
      {
        name: "Enterprise Software Solutions",
        link: "/enterprise-software-solutions",
      },
    ],
  },
];

export const NavbarMenuFirstColImageList = [
  // {
  //   image: "/assets/navbar3.jpg",
  //   name: "Portfolio",
  //   link: "",
  //   new: false,
  // },
  {
    image: "/assets/navbar02.jpg",
    name: "Blog",
    link: "https://blog.ultroneous.com/",
    new: false,
  },
  {
    image: "/assets/navbarcon.jpg",
    name: "Contact Us",
    link: LinksOfAllpages.mainPages.contactUs,
    new: false,
  },
];

export const TechnologiesAllData = {
  frontend: [
    {
      name: "React",
      link: LinksOfAllpages.services.hireReactJSDeveloper,
    },
    {
      name: "Angular",
      link: LinksOfAllpages.services.hireAngularDeveloper,
    },
    {
      name: "Vue",
      link: LinksOfAllpages.services.hireVueJSDeveloper,
    },
    // {
    //   name: "HTML5",
    //   link: "/",
    // },
    // {
    //   name: "Nextjs",
    //   link: "/",
    // },
    // {
    //   name: "Gatsby",
    //   link: "/",
    // },
    // {
    //   name: "Nuxtjs",
    //   link: "/",
    // },
  ],
  backend: [
    {
      name: "Golang",
      link: LinksOfAllpages.services.hireGolangDeveloper,
    },
    {
      name: "Node",
      link: LinksOfAllpages.services.hireNodeJSDeveloper,
    },
    {
      name: "Laravel",
      link: LinksOfAllpages.services.hireLaravelDeveloper,
    },
    {
      name: "Php",
      link: LinksOfAllpages.services.hirePhpDeveloper,
    },
    {
      name: "Codeigniter",
      link: LinksOfAllpages.services.hireCodeigniterDeveloper,
    },
    {
      name: "Magento",
      link: LinksOfAllpages.services.hireMagentoDeveloper,
    },
    {
      name: "Wordpress",
      link: LinksOfAllpages.services.hireWordPressDeveloper,
    },
    {
      name: "Shopify",
      link: LinksOfAllpages.services.hireShopifyDeveloper,
    },
  ],
  mobile: [
    {
      name: "Kotlin",
      link: LinksOfAllpages.services.hireAndroidDeveloper,
    },
    {
      name: "Swift",
      link: LinksOfAllpages.services.hireiOSDeveloper,
    },
    {
      name: "Flutter",
      link: LinksOfAllpages.services.hireFlutterDeveloper,
    },
    {
      name: "React Native",
      link: LinksOfAllpages.services.hireReactNativeDeveloper,
    },
    // {
    //   name: "Java",
    //   link: "",
    // },
    {
      name: "Objective-C",
      link: LinksOfAllpages.services.hireiOSDeveloper,
    },
    {
      name: "Xamarin",
      link: LinksOfAllpages.services.hireXamarinDeveloper,
    },
  ],
  fullstack: [
    {
      name: "MERN",
      link: LinksOfAllpages.services.hireMernDevloper,
    },
    {
      name: "MEAN",
      link: LinksOfAllpages.services.hireMeanDeveloper,
    },
  ],
};
