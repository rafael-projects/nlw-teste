import { ExperienceBar } from '../components/ExperienceBar'
import React from 'react'
import { Profile } from '../components/Perfil'
import styles from '../styles/pages/Home.module.css'
import { CompleteChallenges } from '../components/CompleteChallenges'
import { CountDown } from '../components/CountDown'
import Head from 'next/head'

export default function Home() {
  return (


    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>

    </div>
  );
}
