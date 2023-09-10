"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Style from "./page.module.css";


export default function Home() {
  const router = useRouter();
  return (
    <main className={Style.main}>
      <h1>Home Page</h1>
      <br/>
      <Link href="/login">Login</Link>
      <br/>
      <br/>
      <button onClick={()=>router.push('/dashboard')}>Dashboard</button>
    </main>
  )
}
