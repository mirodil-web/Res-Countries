import React from 'react' 
import Moon from '../assets/Moon.png'

const Header = () => {
    return (
        <header className='py-6 shadow-md sticky   top-0 left-0'>
            <div className='container flex justify-between'>
                <a href="#">
                    <h1 className=' font-extrabold text-2xl'>Where in the world?</h1>
                </a>
                <button className='flex items-center font-semibold'>
                    <img className='mr-2' src={Moon} alt="" />
                    Dark Mode
                </button>

            </div>
        </header>
    )
}

export default Header