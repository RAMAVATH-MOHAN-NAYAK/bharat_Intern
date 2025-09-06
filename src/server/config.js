import dotenv from 'dotenv';
dotenv.config();

export const config = {
  mongoURI: process.env.MONGODB_URI,
  dbName: "PosterDesign",  // <-- DB name you want
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 3000,
};
