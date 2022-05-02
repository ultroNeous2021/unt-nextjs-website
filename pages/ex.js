import { useEffect } from "react";
import styles from "@/styles/ex.module.css";
import { useState } from "react";
import { BackEnd, FrontEnd, MobileApp } from "./technologies";
const checkDataAvailability = (status) => {
  return status === "success";
};

function App({ data, title = "jsdh" }) {
  return (
    <>
      {checkDataAvailability(data.status) ? (
        <>
          <>{title}</>
          {data.data.map((v, i) => (
            <h1>{i}</h1>
          ))}
        </>
      ) : (
        "sorry"
      )}
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `http://192.168.1.28:8000/admin/getclientfeedback?page=1&limit=8`
  );
  const data = await res.json();
  console.log(data);

  // Pass data to the page via
  return { props: { data } };
}

export default App;
