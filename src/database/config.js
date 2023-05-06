import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNX)
    console.log('✅ Database online')
  } catch (error) {
    throw new Error('❌ Error starting database')
  }
}
export default dbConnection
