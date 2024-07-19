'use client'
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from 'next/image'

function WhyChooseUs() {
  const content = [
    {
      title: 'Jazz Improvisation',
      description:
        'Explore the exciting world of jazz improvisation with this in-depth course. You’ll learn essential techniques to create spontaneous and expressive jazz solos, understand complex chord progressions, and develop your own unique improvisational style. This course is perfect for intermediate to advanced musicians looking to enhance their jazz performance skills.',
    },
    {
      title: 'Classical Guitar Techniques',
      description:
        "Dive into the art of classical guitar with this comprehensive course designed for aspiring classical guitarists. You'll master essential techniques such as fingerstyle, arpeggios, and advanced chord voicings while learning to play exquisite classical pieces from renowned composers. This course will help you build a solid technical foundation and interpret classical music with precision and artistry.",
    },
    {
      title: 'Electronic Music Production',
      description:
        "Unlock the secrets of electronic music production with this hands-on course. From creating catchy beats and melodies to mixing and mastering your tracks, you'll learn to use industry-standard software and tools to produce professional-quality electronic music. This course is ideal for anyone interested in producing their own music, whether you’re a beginner or looking to refine your skills.",
    },
    {
      title: 'Music Theory Essentials',
      description:
        "Gain a thorough understanding of music theory with this essential course. You’ll cover fundamental concepts such as scales, harmony, rhythm, and form, and learn how to apply these principles to your own music. By the end of the course, you'll have a solid grasp of music theory that will enhance your composition, performance, and overall musicality.",
    },
    {
      title: 'Songwriting for Beginners',
      description:
        "Discover the art of songwriting with this beginner-friendly course. You'll learn how to craft memorable melodies, write meaningful lyrics, and structure your songs effectively. The course also covers various songwriting techniques and tools to help you overcome writer's block and bring your musical ideas to life. Perfect for aspiring songwriters looking to start their creative journey in music.",
    },
  ]

  return (
    <div className=' overflow-hidden'>
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs
