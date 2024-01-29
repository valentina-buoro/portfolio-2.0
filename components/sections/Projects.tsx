import React from 'react'
import TrustBallot from "../../public/trustballot.png"
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='bg-[#18151B] px-20 h-screen pt-10'>
        <div className='flex'>
            <div className='bg-[#231F29]'>
                <div>
                <p className='text-white'>Trust Ballot</p>
                <p className='text-white'>Visualize your entire blockchain paragliding pilots.</p>
                </div>
                <div>

                </div>
                <div>
                    <a href='https://trust-ballot.vercel.app/' className='text-white'/>

                    <a href='https://trust-ballot.vercel.app/' className='text-white'/>
                </div>
            </div>
            <div className='w-[34rem] h-[32rem]'>
                <Image  src={TrustBallot} alt="Trust Ballot" className='w-full h-full' />
            </div>
        </div>
    </div>
  )
}

export default Projects