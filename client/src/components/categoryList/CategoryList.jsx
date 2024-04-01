'use client'

import React, { useEffect, useState } from "react";
import styles from "./catetoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import {category} from "../../../url"
import axios from "axios";



const CategoryList = () => {


  const [data,setData] = useState([])

  useEffect(()=>{
    const getCategory = async()=>{
      try {

        const res = await axios.get(category);
        setData(res.data)
        console.log(res)
      
        
    } catch (error) {
        console.log(error)
        
    }

    }
    getCategory()
  

  },[])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.title}`}
            className={`${styles.category} ${styles[item.title]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;