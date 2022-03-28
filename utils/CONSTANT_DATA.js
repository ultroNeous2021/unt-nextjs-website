

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
      <IoLogoAngular className={`${styles.Angular} ${styles.WeExcelIcons}`} key={2} />,
      <RiVuejsLine className={`${styles.Vue} ${styles.WeExcelIcons}`} key={3} />,
      <SiHtml5 className={`${styles.Html} ${styles.WeExcelIcons}`} key={4} />,
      <SiNextdotjs className={`${styles.Next} ${styles.WeExcelIcons}`} key={5} />,
      <SiGatsby className={`${styles.Gatsby} ${styles.WeExcelIcons}`} key={6} />,
      <SiNuxtdotjs className={`${styles.Nuxt} ${styles.WeExcelIcons}`} key={7} />,
    ],
  },
  {
    title: "Back End ",
    techs: [
      <FaNodeJs className={`${styles.Node} ${styles.WeExcelIcons}`} key={1} />,
      <SiLaravel className={`${styles.Laravel} ${styles.WeExcelIcons}`} key={2} />,
      <SiPhp className={`${styles.Php} ${styles.WeExcelIcons}`} key={3} />,
      <SiCodeigniter
        className={`${styles.Codeigniter} ${styles.WeExcelIcons}`}
        key={4}
      />,
      <SiMagento className={`${styles.Magento} ${styles.WeExcelIcons}`} key={5} />,
      <SiWordpress className={`${styles.Wordpress} ${styles.WeExcelIcons}`} key={6} />,
      <SiShopify className={`${styles.Shopify} ${styles.WeExcelIcons}`} key={7} />,
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
      />
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
      />
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
