import React from 'react'
import Image from 'next/image'
import { movieDescription } from '../helper'

const vote = (str) => {
  if (str >= 8) {
      return 'bg-lime-500'
  } else if (str >= 5) {
      return 'bg-amber-300'
  } else {
      return 'bg-red-500'
  }
}


const CardMovie = ({ title, poster_path, overview, vote_average}) => {
  const image = () => `https://image.tmdb.org/t/p/w500${poster_path}`
  return (
    <div className='pb-2 px-3 flex my-4 '>
      <div className=' bg-slate-300 rounded-xl p-2 group'>
        <div className='relative'>
          <Image
            className='rounded-2xl group-hover:blur-3xl  transition-all delay-100'
            loader={image}
            src="me.png"
            alt={title}
            width={400}
            height={500}
          />
          <div className='absolute top-0 opacity-0 group-hover:opacity-100 p-4 sm:text-xl font-bold text-white transition-all delay-100 '>
            {movieDescription(overview)}
          </div>
        </div>
        <div className='text-xl flex justify-center'> {title} </div>
        <div className='flex justify-center '>
          <span className={`${vote(vote_average)} p-1 px-2 rounded-full`}> {vote_average} </span>
        </div>

      </div>
    </div>
  )
}

export default CardMovie