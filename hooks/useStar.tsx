"use client"

import React, { useState } from 'react'
import { ProductType } from './useFetch'

const useStar = (product: ProductType) => {

    const star = Math.floor(product.rating.rate)
    const arraySatr = Array(5).fill(0).map((item, index) => {
        return (index + 1 > star) ? 0 : 1
    })
    return (
         arraySatr 
    )
}

export default useStar