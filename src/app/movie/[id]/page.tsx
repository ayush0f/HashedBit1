'use client';

import { movies } from '@/data/movies';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function MovieDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const movie = movies.find((m) => m.id === parseInt(params.id));

  if (!movie) {
    notFound();
  }

  const handleBooking = () => {
    router.push(`/booking/${movie.id}`);
  };

  const similarMovies = movies
    .filter((m) => m.id !== movie.id && m.genre === movie.genre)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={movie.imageUrl}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-4xl">
            <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {movie.genre}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-300">
              <span>{movie.duration}</span>
              <span>•</span>
              <span>PG-13</span>
              <span>•</span>
              <span>Starting from ${movie.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white -mt-10 relative z-10 rounded-t-3xl">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Movie</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {movie.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="block text-sm text-gray-500 mb-1">Duration</span>
                    <span className="text-gray-900 font-medium">{movie.duration}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="block text-sm text-gray-500 mb-1">Genre</span>
                    <span className="text-gray-900 font-medium">{movie.genre}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="block text-sm text-gray-500 mb-1">Release Date</span>
                    <span className="text-gray-900 font-medium">March 15, 2024</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="block text-sm text-gray-500 mb-1">Language</span>
                    <span className="text-gray-900 font-medium">English</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Show Time</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Today, March 15</h3>
                    <div className="flex flex-wrap gap-3">
                      {['10:00 AM', '1:30 PM', '4:45 PM', '8:00 PM', '10:30 PM'].map((time) => (
                        <button
                          key={time}
                          className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:border-primary hover:text-primary transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Tomorrow, March 16</h3>
                    <div className="flex flex-wrap gap-3">
                      {['10:00 AM', '1:30 PM', '4:45 PM', '8:00 PM', '10:30 PM'].map((time) => (
                        <button
                          key={time}
                          className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:border-primary hover:text-primary transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Book Tickets</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Number of Tickets</label>
                      <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                        <option>1 Ticket</option>
                        <option>2 Tickets</option>
                        <option>3 Tickets</option>
                        <option>4 Tickets</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Seat Type</label>
                      <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                        <option>Standard - ${movie.price}</option>
                        <option>Premium - ${(movie.price * 1.5).toFixed(2)}</option>
                        <option>VIP - ${(movie.price * 2).toFixed(2)}</option>
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={handleBooking}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                    Continue to Seats
                  </button>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By booking, you agree to our terms and conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Movies */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {similarMovies.map((similarMovie) => (
              <div
                key={similarMovie.id}
                onClick={() => router.push(`/movie/${similarMovie.id}`)}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer movie-card-hover"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={similarMovie.imageUrl}
                    alt={similarMovie.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{similarMovie.title}</h3>
                  <p className="text-sm text-gray-600">{similarMovie.genre}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{similarMovie.duration}</span>
                    <span className="text-accent font-medium">${similarMovie.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 