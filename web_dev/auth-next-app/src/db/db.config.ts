import mongoose from 'mongoose';

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.log('MongoDB connection failed!');
      console.log(err);
      process.exit();
    });
  } catch (error) {
    console.log('Something went wrong with DB connection');
    console.log(error);
  }
};
