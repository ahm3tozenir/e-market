import React from 'react'
import { Link } from 'react-router-dom'

function Index404() {
  return (
    <main className="grid min-h-screen place-content-center place-items-center overflow-hidden bg-gradient-to-b from-slate-900 to-black">
        <div id="main_container" 
        className="relative grid place-content-center place-items-center gap-2 before:bg-gradient-to-t before:from-teal-500/70 before:via-fuchsia-600 before:to-transparent before:blur-xl before:filter">
            <h1 className="title text-6xl font-black text-teal-500 tracking-widest">404</h1>
            <Link to={'/'} className="cursive text-6xl font-thin text-fuchsia-600 cursor-pointer transition-all hover:text-fuchsia-400">Anasayfaya Git</Link>
        </div>
    </main>
  )
}

export default Index404