import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


function Page({ data }) {
  return (
    <div className={styles.container}>
        <h1>Speech Text Data Here: { data }</h1>

    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/main`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page