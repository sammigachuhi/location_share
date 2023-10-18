export const SOCKET_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:4000'
    : 'https://location-share-p5cv.onrender.com';