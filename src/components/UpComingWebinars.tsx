'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

function UpComingWebinars() {
  const webinars = [
    {
      title: 'The Future of Music Production',
      description:
        'Explore the latest trends and technologies shaping the future of music production.',
      link: '/',
    },
    {
      title: 'Songwriting Techniques for Beginners',
      description:
        'Learn essential songwriting techniques to kickstart your music career.',
      link: '/',
    },
    {
      title: 'Live Performance Mastery',
      description:
        'Tips and tricks for delivering unforgettable live performances.',
      link: '/',
    },
    {
      title: 'Music Marketing in the Digital Age',
      description:
        'Strategies for promoting your music in the digital landscape.',
      link: '/',
    },
    {
      title: 'Home Studio Setup Essentials',
      description:
        'Everything you need to know to set up a professional home recording studio.',
      link: '/',
    },
    {
      title: 'Understanding Music Theory',
      description:
        'A comprehensive guide to music theory for all skill levels.',
      link: '/',
    },
  ]

  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
            Featured Webinars
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl'>
            Enhance your musical journey
          </p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={webinars} />
        </div>
        <div className='mt-10 text-center'>
          <Link
            href={'/'}
            className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transistion duration-200'
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpComingWebinars
