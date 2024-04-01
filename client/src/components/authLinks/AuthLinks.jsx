"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useContext, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { AuthContext } from "@/context/AuthContext";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);


  const { status,setStatus } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    // Update status in localStorage
    localStorage.setItem("status", "unauthenticated");
    // Update status in component state
    setStatus("unauthenticated");
  }

  useEffect(() => {
    // Check if status is null or undefined
    if (status === null || status === undefined) {
      // Set default status in localStorage and component state
      localStorage.setItem("status", "unauthenticated");
      setStatus("unauthenticated");
    } else {
      // Retrieve status from localStorage and update component state
      setStatus(localStorage.getItem("status"));
    }
  }, [status]); 

  return (
    <>
      {status === "unauthenticated"  ? (
            <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>          
          </>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={handleLogout}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/post">Posts</Link>
          {status === "unauthenticated" ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>          
            </>

          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={handleLogout}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;