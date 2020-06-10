const express  = require('express');
const connectDB = require('./config/db')

const app = express()
// connect Database
connectDB();

// Init Middlware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'))

// Define Routs
app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/post', require('./routes/api/post'))
app.use('/api/auth', require('./routes/api/auth'))

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));