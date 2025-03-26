"use client"
import { Pagination } from 'flowbite-react'
import React, { useState } from 'react'

type Props={
    currentPage:number;
    pageCount:number;
    pageChange:(page:number)=>void;
}

const AppPagination = ({currentPage,pageCount,pageChange}:Props) => {
    
  return (
    <div>
        <Pagination
        currentPage={currentPage}
        totalPages={pageCount}
        onPageChange={e=>pageChange(e)}
        layout='pagination'
        showIcons={true}
        className='text-blue-500 mb-5'
        />
    </div>
  )
}

export default AppPagination