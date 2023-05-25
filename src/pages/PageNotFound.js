import React from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

const Page404 = () => {

  const redirect = useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      redirect('/')
    },3000)
  })

  return (
    <div>
      <h1>ERROR 404</h1>
      <h2>PAGE NOT FOUND...REDIRECTING</h2>
    </div>
  )
}

export default Page404