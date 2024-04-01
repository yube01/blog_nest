'use client'

import React, { useEffect, useState } from "react";
import styles from "./post.module.css";
// import Pagination from "../pagination/Pagination";
import Image from "next/image";
import {allPost} from "../../../url"
import Card from "@/components/card/Card";
import axios from "axios";



const CardList = () => {


  const [data,setData] = useState([])
  
  useEffect(()=>{

    const getData = async () => {
      const res = await axios.get(allPost);

      setData(res.data)
    };

    getData()
  },[])

  

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