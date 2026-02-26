import React from 'react'
import VerifyEmail from '@/features/Auth/VerifyEmail'
import { connection } from 'next/server'

const page = async () => {
  await connection()
  return (
    <div>
        <VerifyEmail />
    </div>
  )
}

export default page