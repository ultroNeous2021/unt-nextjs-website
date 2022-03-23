import Link from "next/link";
import Layout from "../components/Layout";
import styles from "@/styles/HomePage.module.css";
import { Container } from "react-bootstrap";
import HomeHero from "@/components/HomeHero";
import CounterComponent from "@/components/CounterComponent";
import { CounterComponentData, WeExcelAtData } from "utils/CONSTANT_DATA";
import HorizontalTab from "@/components/HorizontalTab";

export default function HomePage() {
  return (
    <Layout>
      <HomeHero />
      <CounterComponent data={CounterComponentData} />
      <HorizontalTab data={WeExcelAtData} title={"We Excel At"} />
    </Layout>
  );
}
