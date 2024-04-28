import React, { useEffect, useState } from 'react'
import data from './data';
import notFound from '../components/image/notfound.png'
import { RxCross2 } from "react-icons/rx";


const Movies = () => {
    const movies = data;

    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [langVisible, setLangVisible] = useState(false);
    const [countryVisible, setCountryVisible] = useState(false);
    const [genreVisible, setGenreVisible] = useState(false);

    const filterLanguage = (selectedLanguage) => {
        setSelectedLanguage(selectedLanguage);
        setLangVisible(true);
    }
    const filterCountry = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
        setCountryVisible(true);
    }
    const filterGenre = (selectedGenre) => {
        setSelectedGenre(selectedGenre);
        setGenreVisible(true);
    }

    useEffect(() => {
        if (!selectedLanguage ) {
            setLangVisible(false);
        }
        if (!selectedCountry ) {
            setCountryVisible(false);
        }
        if (!selectedGenre ) {
            setGenreVisible(false);
        }
    }, [selectedLanguage, selectedCountry, selectedGenre])


    return (
        <>
            <div className="py-10 flex flex-col md:flex-row gap-x-10 max-md:px-5 px-10">
                <div className="w-1/4 max-md:w-full">
                    <div className="mb-3 txt-xs">
                        <h1 className='md:text-lg font-medium'>Languages</h1>
                        {
                            <div className='flex  sm:flex-wrap max-sm:overflow-x-scroll gap-2 py-2'>
                                {
                                    [...new Set(movies.flatMap(movie => movie.movielanguages))].map((language, index) => (
                                        <button className='px-1 sm:px-2 py-1 bg-gray-300 rounded max-sm:text-xs' onClick={() => { filterLanguage(language) }} key={index}>{language}</button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <h1 className='md:text-lg font-medium'>Countries</h1>
                        {
                            <div className='flex sm:flex-wrap max-sm:overflow-x-scroll gap-2 py-2'>
                                {
                                    [...new Set(movies.flatMap(movie => movie.moviecountries))].map((country, index) => (
                                        <button className='px-1 sm:px-2 sm:py-1 bg-gray-300 rounded max-sm:text-xs' onClick={() => { filterCountry(country) }} key={index}>{country}</button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <h1 className='md:text-lg font-medium'>Genres</h1>
                        {
                            <div className='flex  sm:flex-wrap max-sm:overflow-x-scroll gap-2 py-2'>
                                {
                                    [...new Set(movies.flatMap(movie => movie.moviegenres))].map((genre, index) => (
                                        <button className='px-1 sm:px-2 sm:py-1 bg-gray-300 rounded max-sm:text-xs' onClick={() => { filterGenre(genre) }} key={index}>{genre}</button>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className="w-3/4 max-md:w-full">
                    <div className="flex justify-between items-center sm:px-4">
                        <h1 className='text-xl my-5 font-bold max-sm:text-sm'>All {selectedLanguage} {selectedCountry} {selectedGenre} Movies</h1>
                        <div className="flex flex-wrap items-center justify-end gap-2 px-2 sm:border rounded w-2/4 sm:h-10">
                            {langVisible && (
                                <button className='flex flex-row items-center gap-1 px-2 bg-gray-500 text-white rounded max-sm:text-xs' onClick={() => setSelectedLanguage("")}>{selectedLanguage} <span><RxCross2 /></span></button>
                            )}
                            {countryVisible && (
                                <button className='flex flex-row items-center gap-1 px-2 bg-gray-500 text-white rounded max-sm:text-xs' onClick={() => setSelectedCountry("")}>{selectedCountry} <span><RxCross2 /></span></button>
                            )}
                            {genreVisible && (
                                <button className='flex flex-row items-center gap-1 px-2 bg-gray-500 text-white rounded max-sm:text-xs' onClick={() => setSelectedGenre("")}>{selectedGenre} <span><RxCross2 /></span></button>
                            )}
                        </div>
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