import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="flex justify-between px-10 py-4">
            <div className=" text-2xl">
                Movie<b>Time</b>
            </div>
            <div className="flex gap-x-4 text-xl">
                <Link to={'/'}>Home</Link>
                <Link to={'/movies'}>Movies</Link>
            </div>
        </div>
    </>
  )
}

export default Header