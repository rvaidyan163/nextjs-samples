import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'

const SlugPage = () => {
  const { asPath } = useRouter()
  const { link,  } = asPath;
  const { title, cats } = attributes;
  const isHome = asPath.endsWith("Home") || asPath.endsWith("/");
  return (
    <Layout home={isHome}>
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
        <Nav />
        <p>Hello, I'm the {asPath} page</p>
      </>
    </Layout>
  )
}

export default SlugPage