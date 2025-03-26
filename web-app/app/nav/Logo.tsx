"use client"
import { useParamsStore } from '@/hooks/useParamsStore'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
const Logo = () => {
    const router=useRouter()
    const pathname= usePathname()
    const doReset=()=>{
      if(pathname!=='/'){
        router.push('/')
      } 
      reset()
    }
    const reset= useParamsStore(state=>state.reset)

  return (
    <div onClick={doReset} className='flex cursor-pointer items-center gap-2 text-3xl font-semibold text-red-400'>
    <AiOutlineMenu size={34}/>
    <div>Auctions</div>
</div>
  )
}

export default Logo