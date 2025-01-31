import Categorie from '@/app/_components/Categorie'
import Hero from '@/app/_components/Hero'
import React from 'react'

const page = async (props: { params: Promise<{ categoryId: string }> }) => {

  const {categoryId} = await props.params
  
  return (
    <div>
      
      <Categorie category={categoryId} />
    </div>
  )
}

export default page