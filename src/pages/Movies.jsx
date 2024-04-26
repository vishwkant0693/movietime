import React from 'react'
import data from './data'

const Movies = () => {
    const movies = data;


    return (
        <>
            <div className="container mx-auto py-10 max-md:px-5">
                <div className="flex justify-between">
                    <h1 className='text-xl my-5 font-bold'>All Movies</h1>
                    <select name="filter" id="filter" className='border px-4'>
                        <option value="">--- Select ---</option>
                        <option value="language">Language</option>
                        <option value="genre">Genre</option>
                        <option value="country">Country</option>
                    </select>
                </div>
                <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
                    {
                        movies.map((movie, index) => (
                            <div className="flex flex-col border rounded-xl p-4" key={index}>
                                <img src={movie.moviemainphotos} alt="" className='object-cover overflow-hidden rounded' />
                                <div className="overflow-hidden pt-5">
                                    <h1 className='text-lg font-semibold'>{movie.movietitle}</h1>
                                    <p className='text-lg font-normal mb-2'>Language : {""}
                                    {
                                        movie.movielanguages.map((language,index)=>(
                                            <span key={index} className='text-md font-light'>{language}, </span>
                                        ))
                                    }
                                    </p>
                                    <p className='text-lg font-normal mb-2'>Country : {""}
                                    {
                                        movie.moviecountries.map((country, index)=>(
                                            <span key={index} className='text-md font-light'>{country}, </span>
                                        ))
                                    }
                                    </p>
                                    <p className='text-lg font-normal mb-2'>Genre : {""}
                                    {
                                        movie.moviegenres.map((genre, index)=>(
                                            <span key={index} className='text-md font-light'>{genre}, </span>
                                        ))
                                    }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Movies