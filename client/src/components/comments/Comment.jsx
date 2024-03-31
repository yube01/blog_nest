"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { addComment } from "../../../url";
import axios from "axios";
import { getComment } from "../../../url";



const Comments = ({ slug }) => {


  const status = localStorage.getItem("status")
  const username = localStorage.getItem("username")


  const [desc,setDesc] = useState("")
  const [data,setData] = useState([])

  const handleSubmit = async(e)=>{

    e.preventDefault();

  
    try {
      const response = await axios.post(
        addComment,
        {
          desc,
          username,
          posts:slug
        }
      );
      setDesc('')
      
    
    } catch (error) {
      console.log(error)
      
    }
    
  
  }

  useEffect(()=>{
    const getComments = async()=>{
      try {

        const res = await axios.get(getComment+`${slug}`);
        setData(res.data)
      
        
    } catch (error) {
        console.log(error)
        
    }

    }
    getComments()
  

  },[handleSubmit])



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.username}</span>
                    <span className={styles.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;