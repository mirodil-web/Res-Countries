import React from 'react'
import SearchImg from '../assets/search.svg'

const Main = () => {
    return (
        <main className='bg-[#fafafa]'>

            <section className='py-12'>
                <div className="container flex justify-between">
                    <div className='relative'>
                        <img src={SearchImg} className='absolute left-8 top-5' alt="search" />
                        <input placeholder='Search for a country…' type="search" className='py-4 shadow-xl pl-16 rounded-md w-[480px] pr-5' />
                    </div>


                    {/* Input & Select */}
                    <div className="flex flex-col items-end sm:flex-row sm:justify-between">

                        {/* Select */}
                        <select className='px-4 py-5 shadow-input w-52 text-sm text-textColor rounded-md shadow-lg space-y-2'>
                            <option value='' disabled>Filter by region</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>

                </div>
            </section>

            <section>
                <div className="container">
                    <ul>
                        
                    </ul>
                </div>
            </section>

        </main>
    )
}

export default Main