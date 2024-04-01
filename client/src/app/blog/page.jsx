
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";
import { recent } from "../../../url";
import Card from "@/components/card/Card";

const getData = async (cat) => {
  const res = await fetch(recent + `?slug=${cat}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const BlogPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  const data = await getData(cat);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title1}>Recent Posts</h1>
          {
            <div className={styles.posts}>
              {data?.map((item) => (
                <Card item={item} key={item._id} />
              ))}
            </div>
          }
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
