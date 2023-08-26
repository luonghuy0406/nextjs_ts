"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@mui/material'


export default function About() {
    const router = useRouter()

  return (
    <div>About

            <Button variant="contained" onClick={() => router.push('/products')}>Products</Button>
    </div>
  )
}
