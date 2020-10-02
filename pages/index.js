import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'



//fetch external API or query data base
export async function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint:
  // const res = await fetch('..')
  // return res.json()
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title> Example Next.js page</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
        <li ><Link href={`/static-generation`}>
                <a style={{color: "magenta"}}>Simple Static Page</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                October 2, 2020
              </small>
              
            </li>
            <br />
          <li ><Link href={`/server-side-rendering`}>
                <a style={{color: "magenta", fontWeight: "800"}}>Server Side Rendering + Dynamic Routing</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                October 1, 2020
              </small>
              
            </li>
            <br />
            <h2>Examples of pages with dynamic routes (static generation):</h2>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}