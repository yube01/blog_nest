import React from "react";
import styles from "./post.module.css";
// import Pagination from "../pagination/Pagination";
import Image from "next/image";
import {allPost} from "../../../url"
import Card from "@/components/card/Card";


const getData = async () => {
  const res = await fetch(allPost,{
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>

    </div>
  );
};

export default CardList;