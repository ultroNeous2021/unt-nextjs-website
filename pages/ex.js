import { useEffect } from "react";
import styles from "@/styles/ex.module.css";
import { useState } from "react";
import { BackEnd, FrontEnd, MobileApp } from "./technologies";
const checkDataAvailability = (status) => {
  return status === "success";
};

function App() {
  const data = [
    {
      _id: "626fc377bc93698da01bad02",
      departmentName: "Engineering",
      departmentId: "626fc2f4bc93698da01bacea",
      fieldCount: "3",
      technology: [
        {
          technologyName: "java",
          count: 2,
          _id: "626fe882082bc6a6b7955e8b",
        },
        {
          technologyName: "Android Developer",
          count: 1,
          _id: "626fe8aa082bc6a6b7955e95",
        },
        {
          technologyName: "iOS Developer",
          count: 1,
          _id: "626fe8af082bc6a6b7955e9d",
        },
      ],
      createdAt: "2022-05-02T11:41:43.747Z",
      updatedAt: "2022-05-02T14:20:31.434Z",
      __v: 0,
    },
    {
      _id: "626fc3d6bc93698da01bad24",
      departmentName: "Project Management",
      departmentId: "626fc303bc93698da01bacee",
      fieldCount: "2",
      technology: [
        {
          technologyName: "Project Manager",
          count: 1,
          _id: "626fc3d6bc93698da01bad25",
        },
        {
          technologyName: "Technical Project Coordinator",
          count: 1,
          _id: "626fc3e3bc93698da01bad2b",
        },
      ],
      createdAt: "2022-05-02T11:43:18.361Z",
      updatedAt: "2022-05-02T11:43:31.128Z",
      __v: 0,
    },
  ];

  return (
    <>
      {data.map((el, ind) => (
        <div>
          <p> {el.departmentName} </p> <span> {el.fieldCount} </span>
          <div>
            {data[ind].technology.map((ele) => (
              <div>
                <p> {ele.technologyName} </p> <span> {ele.count} </span>
              </div>
            ))}
          </div>
        </div>
      ))}
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
