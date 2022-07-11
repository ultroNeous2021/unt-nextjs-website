import Layout from "@/components/Layout";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import BlogSliderComponent from "@/components/Slider/BlogSliderComponent";
import axios from "axios";
import { Image, Row } from "react-bootstrap";
import { API_URL } from "utils/CONSTANT_DATA";
import styles from "@/styles/Thankyou.module.css";
export default function Thankyou({ data }) {
  return (
    <Layout
      title={"Thank you | ultroNeous"}
      uniqueMeta={<meta name="robots" content="noindex, nofollow" />}
    >
      <div>
        <Row className={styles.PagesHeader}>
          <div className={styles.PageHeaderImgContainer}>
            <Image src="/assets/thanks.gif" className={styles.PagesHeaderImg} />
          </div>
        </Row>
      </div>
      <div className={styles.ParagraphSection}>
        <p className={styles.Paragraph}>
          You are awesome! You have cleared the first step- showing interest in
          our company. You will hear shortly from our team, who is busy finding
          and developing outstanding solutions for you. While waiting, you can
          check out our blogs.
        </p>
      </div>
      {data && <BlogSliderComponent list={data.blog.data} />}
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await axios
    .get(`${API_URL}admin/getclientfeedback`, {
      params: { page: 1, limit: 8 },
    })
    .catch((e) => console.log(e));

  let res2;

  await axios
    .get(`${API_URL}admin/getlookatourdesign`)
    .then((res) => (res2 = res))
    .catch((e) => console.log(e));

  let res3;

  await axios
    // .get(`${API_URL}admin/getblog`)
    .get(`${API_URL}admin/getblog`)
    .then((res) => (res3 = res))
    .catch((e) => console.log(e));

  return {
    props: {
      data: {
        data1: res ? res.data : TestimonialsSliderData,
        data2: res2 ? res2.data : null,
        blog: res3 ? res3.data : null,
      },
    },
  };
}
