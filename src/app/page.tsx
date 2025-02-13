'use client';

import { movies } from '@/data/movies';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Get a featured movie
  const featuredMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={featuredMovie.imageUrl}
            alt={featuredMovie.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Now Showing
            </span>
            <h1 className="text-5xl font-bold text-white mb-4">
              {featuredMovie.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {featuredMovie.description}
            </p>
            <Link
              href={`/movie/${featuredMovie.id}`}
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              Book Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Now Showing</h2>
            <div className="flex items-center space-x-4">
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                <option>All Genres</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
              </select>
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                <option>All Languages</option>
                <option>English</option>
                <option>Spanish</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                className="group bg-white rounded-lg shadow-md overflow-hidden movie-card-hover"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={movie.imageUrl}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent/90 text-white px-3 py-1 rounded-full text-sm">
                      ${movie.price}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {movie.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{movie.genre}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{movie.duration}</span>
                    <button className="text-primary hover:text-primary-dark font-medium text-sm flex items-center">
                      Book Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Book With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Booking</h3>
              <p className="text-gray-600">Book your tickets in seconds with our easy booking process</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Multiple secure payment options for your convenience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">100% secure booking with instant confirmation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
