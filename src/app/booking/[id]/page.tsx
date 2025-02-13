'use client';

import { movies } from '@/data/movies';
import { UserDetails } from '@/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { notFound } from 'next/navigation';

export default function BookingForm({ params }: { params: { id: string } }) {
  const router = useRouter();
  const movie = movies.find((m) => m.id === parseInt(params.id));
  const [formData, setFormData] = useState<UserDetails>({
    name: '',
    email: '',
    mobile: ''
  });
  const [errors, setErrors] = useState<Partial<UserDetails>>({});

  if (!movie) {
    notFound();
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<UserDetails> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/[- ]/g, ''))) {
      newErrors.mobile = 'Invalid mobile number (10 digits required)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const bookingData = {
        ...formData,
        movieId: movie.id,
        movieTitle: movie.title,
        price: movie.price,
        bookingId: Math.random().toString(36).substring(2, 10).toUpperCase(),
        timestamp: new Date().toISOString()
      };
      
      localStorage.setItem('bookingDetails', JSON.stringify(bookingData));
      router.push('/confirmation');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof UserDetails]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Book Tickets for {movie.title}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            />
            {errors.mobile && (
              <p id="mobile-error" className="mt-1 text-sm text-red-600">
                {errors.mobile}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </main>
  );
} 