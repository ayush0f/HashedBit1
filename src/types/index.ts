export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  duration: string;
  genre: string;
  price: number;
}

export interface UserDetails {
  name: string;
  email: string;
  mobile: string;
}

export interface BookingDetails extends UserDetails {
  bookingId: string;
  movieId: number;
  movieTitle: string;
  price: number;
  timestamp: string;
} 