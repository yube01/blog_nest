'use client'

import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
// import Pagination from "../pagination/Pagination";
import Image from "next/image";
import {recent} from "../../../url"
import Card from "../card/Card";
import axios from "axios";



const CardList =  () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    const getCard = async()=>{
      try {

        const res = await axios.get(recent+`?slug=initial`);
        setData(res.data)
      
        
    } catch (error) {
        console.log(error)
        
    }

    }
    getCard()
  

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