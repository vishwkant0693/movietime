import React, { useEffect, useState } from 'react'
import data from './data';
import notFound from '../components/image/notfound.png'

const Movies = () => {
    const movies = data;

    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    const filterLanguage = (selectedLanguage) => {
        setSelectedLanguage(selectedLanguage);
        setSelectedCountry("");
        setSelectedGenre("");
    }
    const filterCountry = (selectedCountry) => {
        setSelectedLanguage("");
        setSelectedCountry(selectedCountry);
        setSelectedGenre("");
    }
    const filterGenre = (selectedGenre) => {
        setSelectedLanguage("");
        setSelectedCountry("");
        setSelectedGenre(selectedGenre);
    }

    useEffect(() => {
    }, [selectedLanguage, selectedCountry, selectedGenre])


    return (
        <>
            <div className="py-10 flex flex-col md:flex-row gap-x-10 max-md:px-5 px-10">
                <div className="w-1/4 max-md:w-full">
                    <div className="mb-3 txt-xs">
                        <h1 className='md:text-lg font-medium'>Languages</h1>
                        {
                            <div className='flex flex-wrap gap-2 py-2'>
                                {
                                    [...new Set(movies.flatMap(movie => movie.movielanguages))].map((language, index) => (
                                        <button className='px-2 py-1 bg-gray-300' onClick={() => { filterLanguage(language) }} key={index}>{language}</button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <h1 className='md:text-lg font-medium'>Countries</h1>
                        {
                            <div className='flex flex-wrap gap-2 py-2'>
                                {
                                    [...new Set(movies.flatMap(movie => movie.moviecountries))].map((country, index) => (
                                        <button className='px-2 py-1 bg-gray-300' onClick={() => { filterCountry(country) }} key={index}>{country}</button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <h1 className='md:text-lg font-medium'>Genres</h1>
                        {
                            <div className='flex flex-wrap gap-2 py-2'>
                                {
                                    [...new Set(movies.flatMap(movie => movie.moviegenres))].map((genre, index) => (
                                        <button className='px-2 py-1 bg-gray-300' onClick={() => { filterGenre(genre) }} key={index}>{genre}</button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className="w-3/4 max-md:w-full">
                    <div className="flex justify-between">
                        <h1 className='text-xl my-5 font-bold'>All {selectedLanguage}{selectedCountry}{selectedGenre} Movies</h1>
                        {/* <div className="flex flex-wrap gap-2 px-2 py-2">
                            <button className='filters px-2 bg-gray-700 text-white hidden' id='filters'>{selectedLanguage} X</button>
                        </div> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                        {
                            movies
                                .filter(movie => !selectedLanguage || movie.movielanguages.includes(selectedLanguage))
                                .filter(movie => !selectedCountry || movie.moviecountries.includes(selectedCountry))
                                .filter(movie => !selectedGenre || movie.moviegenres.includes(selectedGenre)).map((movie, index) => (
                                    <div className="flex flex-col border rounded-xl p-4 hover:bg-gray-200 hover:shadow-xl transition" key={index}>
                                        <img src={(movie.moviemainphotos || notFound)} alt="" className='object-cover overflow-hidden rounded' />
                                        <div className="overflow-hidden pt-5">
                                            <h1 className='md:text-lg font-semibold'>{movie.movietitle}</h1>
                                            <p className='md:text-lg font-normal mb-2'>Language : {""}
                                                {movie.movielanguages.map((language, index) => (
                                                    <span key={index} className='text-md font-light'>{language}, </span>
                                                ))}
                                            </p>
                                            <p className='md:text-lg font-normal mb-2'>Country : {""}
                                                {movie.moviecountries.map((country, index) => (
                                                    <span key={index} className='text-md font-light'>{country}, </span>
                                                ))}
                                            </p>
                                            <p className='md:text-lg font-normal mb-2'>Genre : {""}
                                                {movie.moviegenres.map((genre, index) => (
                                                    <span key={index} className='text-md font-light'>{genre}, </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies