"use client";
import { useState } from "react";
// import { signIn, useSession } from "next-auth/react";
import styles from "./registerPage.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import {url} from "../../../url"

const LoginPage = () => {
//   const { status } = useSession();

const [name,setName] = useState("")
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async(e)=>{

  e.preventDefault();
  if (email.length === 0 && password.length === 0) {
    console.log("empty")  
  }

  try {
    const response = await axios.post(
      url+"create",
      {
        name,
        email,
        password,
      }
    );
    console.log(response)
  } catch (error) {
    console.log(error)
    
  }

}
  

//   const router = useRouter();

//   if (status === "loading") {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (status === "authenticated") {
//     router.push("/")
//   }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <input className={styles.inputBtn}
      placeholder="Username" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        type="text" name="" id="" />
        <input className={styles.inputBtn} 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        type="email" name="" id="" />
        <input className={styles.inputBtn} 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        type="password" name="" id="" />
        <div className={styles.socialButton} onClick={handleSubmit}>
          Register
        </div>

      </div>
    </div>
  );
};

export default LoginPage;