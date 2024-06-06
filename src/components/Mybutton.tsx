import React from 'react'

const Mybutton = ({title}:{title:string}) => {
  return (

        <div className='group relative h-fit flex px-10 py-2 rounded-md text-xl text-myblack bg-amber-400 transition duration-300 ease-in-out hover:text-mywhite hover:shadow-lg hover:shadow-amber-400'>
          <span className='relative z-10'>{title}</span>
          <span className='absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'></span>
        </div>
     
  )
}

export default Mybutton