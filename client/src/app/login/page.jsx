"use client";
import { useContext, useState } from "react";
// import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import {url} from "../../../url"
import { AuthContext } from "@/context/AuthContext";

const LoginPage = () => {
//   const { status } = useSession();

const { setStatus } = useContext(AuthContext);

  const router = useRouter();

const [name,setName] = useState("")
const [password, setPassword] = useState("");


const handleSubmit = async(e)=>{

  e.preventDefault();
  if (password.length === 0) {
    console.log("empty")  
  }

  try {
    const response = await axios.post(
      url+"login",
      {
        name,
        password,
      }
    );
    if(response.data.login==='ok'){
      localStorage.setItem("status", "authenticated");
      localStorage.setItem("user",response.data.id)
      localStorage.setItem("username",response.data.name)
      setStatus("authenticated");
      router.push("/")
    }
  } catch (error) {
    console.log(error)
    
  }

}
  



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
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        type="password" name="" id="" />
        <div className={styles.socialButton} onClick={handleSubmit}>
          Login
        </div>

      </div>
    </div>
  );
};

export default LoginPage;