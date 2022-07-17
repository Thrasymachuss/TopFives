import ContentWrapper from "../components/ContentWrapper";
import Article from "../components/Article";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import styles from "../styles/ContentWrapper.module.css";

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          posts{
            data{
              attributes{
                Title
                TitlePicture {
                  data { 
                    attributes {
                      url
                    }
                  }
                }
                Description
                Slug
              }
            }
          }
        }
      `,
    }),
  };
  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();
  return {
    props: data,
    revalidate: 100,
  };
}

export default function Home({ data }) {
  const posts = data.posts?.data;
  return (
    <ContentWrapper>
      <Hero
        title="Top Fives"
        subhead="We Help You Find the Cream of the Crop"
      />
      <Intro h2="Recent Posts" />
      <section className={styles.articles}>
        {posts
          ? posts.map((post, i) => <Article key={i} post={post.attributes} />)
          : ""}
      </section>
    </ContentWrapper>
  );
}
