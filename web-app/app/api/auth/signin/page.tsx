import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

const SignIn = ({searchParams}:{searchParams:{callbackUrl:string}}) => {
  return (
    <EmptyFilter
    title='You need to sign in to see this page'
    subtitle='Sign in to see your profile and auctions'
    showLogin
    callbackUrl={searchParams.callbackUrl}
    />
  )
}

export default SignIn