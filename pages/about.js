import Nav from '../components/Nav'
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import Layout from '../components/layout'
import { useRouter } from 'next/router'

const AboutPage = () => {
  const { asPath } = useRouter()
  return (
    <Layout about>
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <h2>About page</h2>
        <p>Hello, I'm the {asPath} page</p>
      </>
    </Layout>
  )
}

export default AboutPage
