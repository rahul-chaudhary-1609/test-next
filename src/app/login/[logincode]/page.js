"use client"

import { useRouter } from "next/navigation"

export default function LoginCode({params:{logincode}}){
    let router = useRouter();
   if(logincode == 401){
    alert("Login fist");
    router.push("/login")
   }else{
    alert("session timeout")
    router.push("/login")
   }
}