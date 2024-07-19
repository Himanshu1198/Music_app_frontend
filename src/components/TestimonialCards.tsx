import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

function TestimonialCards() {
  const items = [
    {
      quote:
        'This course has completely transformed my understanding of jazz improvisation. The techniques and tips provided are invaluable.',
      name: 'Sarah Lee',
      title: 'Jazz Enthusiast',
    },
    {
      quote:
        "I've always struggled with classical guitar, but this course broke it down into manageable steps. I'm now playing pieces I never thought possible!",
      name: 'Mark Johnson',
      title: 'Classical Guitar Student',
    },
    {
      quote:
        'The electronic music production course was a game-changer for me. I can now produce tracks that sound professional and polished.',
      name: 'Emily Davis',
      title: 'Aspiring Music Producer',
    },
    {
      quote:
        "Music theory used to be so confusing, but this course made it all make sense. It's boosted my confidence as a musician immensely.",
      name: 'James Carter',
      title: 'Budding Composer',
    },
    {
      quote:
        'The songwriting course inspired me to start writing my own songs. The guidance and techniques provided were just what I needed to get started.',
      name: 'Olivia Brown',
      title: 'New Songwriter',
    },
  ]

  return (
    <div className='h-[28rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]'>
      <h2 className='pt-16 text-3xl font-bold text-center mb-8 z-10'>
        Hear our Harmony: Voices of Success
      </h2>
      <div className='w-full max-w-6xl'>
        <InfiniteMovingCards items={items} speed='normal' direction='right' />
      </div>
    </div>
  )
}

export default TestimonialCards
