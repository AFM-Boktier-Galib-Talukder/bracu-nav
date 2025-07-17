require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const PORT = process.env.PORT || 3001

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas')
    console.log('📊 Database:', mongoose.connection.db.databaseName)

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`📡 Health check: http://localhost:${PORT}/health`)
    })
  })
  .catch(error => {
    console.error('❌ MongoDB connection error:', error.message)
    console.error('💡 Make sure your connection string is correct and IP is whitelisted')
    process.exit(1)
  })

// Handle MongoDB connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected')
})

mongoose.connection.on('reconnected', () => {
  console.log('🔄 MongoDB reconnected')
})

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n🛑 Server shutting down...')
  await mongoose.connection.close()
  console.log('✅ MongoDB connection closed')
  process.exit(0)
})
