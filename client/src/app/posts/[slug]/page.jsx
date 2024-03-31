import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comment";
import {single} from "../../../../url"

const getData = async (slug) => {
  const res = await fetch(single+`${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;


  const data = await getData(slug);
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {/* {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
            )} */}
                <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.title}</span>
              <span className={styles.date}>{data.createdAt.substring(0, 10)} </span>
            </div>
          </div>
        </div>
        {/* {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )} */}
                  <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments slug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;