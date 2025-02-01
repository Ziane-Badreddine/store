
import React from 'react'
import Link from 'next/link'

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Skeleton } from '@/components/ui/skeleton'

const HeroSkeleton = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 w-full">
                <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
                    <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02] w-full">
                        <CardContent className="p-0 h-full flex flex-col">
                            <div className="relative flex items-center justify-center">
                                <Skeleton className='w-full h-[460px]' />
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800">
                            <Skeleton className='w-full h-full' />
                            <Skeleton className='w-full h-full' />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col lg:w-[30%] h-full gap-6">
                        <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                            <CardContent className="p-0 h-full flex flex-col">
                                <div className="relative flex-grow">
                                    <Skeleton className='w-[400px] h-[160px]' />
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-800">
                                    <Skeleton className='w-full h-full' />
                                    <Skeleton className='w-full h-full' />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                            <CardContent className="p-0 h-full flex flex-col">
                                <div className="relative flex-grow">
                                    <Skeleton className='w-[400px] h-[160px]' />
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-800">
                                <Skeleton className='w-full h-full' />
                                <Skeleton className='w-full h-full' />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSkeleton