'use client'

import Layout from '@/components/user/Layout/Layout'
import React from 'react'
import BookRide from './BookRide'

const page = () => {
  return (
    <div>
      <Layout Children={<BookRide/>}></Layout>   {/* Corrected usage */}
    </div>
  )
}

export default page
