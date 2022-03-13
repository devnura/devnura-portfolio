import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Button from '../components/Button'

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex bg-blue-500 items-center">
          <div className="w-3/12">
            <Logo/>
          </div>
          <div className="w-6/12">
            <Nav/>
          </div>
          <div className="w-3/12 text-right">
            <Button>Contact </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
