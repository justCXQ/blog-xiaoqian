import Head from 'next/head'
import Link from 'next/link'
import Home from '../components/Home'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Blog({ allPostsData }) {
  return (
    <Home data={allPostsData} />
  )
}
