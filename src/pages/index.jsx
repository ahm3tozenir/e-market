import React from 'react'
import Hero from '../components/hero'
import Card from '../components/card'



function Index() {
  



  return (
    <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
      <Hero />

      <div className='columns-1 md:columns-2 lg:columns-3 p-5 bg-gradient-to-r from-slate-300 to-slate-500'>
          <Card/>
 

      </div>
    </div>


  )
}
export default Index
