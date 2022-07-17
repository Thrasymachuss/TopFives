import Product from "../../components/Product";
import ContentWrapper from "../../components/ContentWrapper";
import Intro from "../../components/Intro";
import Hero from "../../components/Hero";
import styles from "../../styles/ContentWrapper.module.css";

const URL = process.env.STRAPIBASEURL;

export async function getStaticPaths() {
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
  const paths = data.data.posts.data.map((post) => {
    return { params: { slug: post.attributes.Slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          posts(filters: {Slug: {eq: "${params.slug}"}}){
            data {
              attributes {
                Title
                Description
                LastUpdated
                TitlePicture {
                  data{
                    attributes{
                      url
                    }
                  }
                }
                Review {
                  Title
                  ImageLink
                  Description
                  Link
                  Good {
                    Content
                  }
                  Bad {
                    Content
                  }
                }
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

export default function Post(props) {
  const { Title, Description, Review, LastUpdated, TitlePicture } =
    props.data.posts.data[0].attributes;
  const titlePicUrl = TitlePicture.data.attributes.url;
  const subhead = `Last Updated ${LastUpdated.replaceAll("-", "/")}`;
  return (
    <ContentWrapper title={Title}>
      <Hero title={Title} subhead={subhead} img={titlePicUrl} />
      <Intro description={Description} />
      <section className={styles.articles}>
        {Review.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </section>
    </ContentWrapper>
  );
}
