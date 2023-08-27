"use client"

import React from 'react'
import Register from './Register'
import Layout from '@/components/user/Layout/Layout'

const page = () => {
  return (
    <div>
      <div><Layout Children={<Register />}></Layout></div>
    </div>
  )
}

export default page
