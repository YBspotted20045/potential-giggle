import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Replace this with your actual MongoDB URI
const mongoURI = "mongodb+srv://Ybspotted:SCa20045@growrich-cluster.cduooko.mongodb.net/?retryWrites=true&w=majority&appName=growrich-cluster";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

app.get('/', (req, res) => {
  res.send('GrowRich Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
