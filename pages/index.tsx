import Link from "next/link";
import { client } from "libs/micro-cms/client";

const Home = ({ blog }) => (
  <div>
    <ul>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`/entry/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Home;