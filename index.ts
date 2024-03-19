import express, { Application } from 'express';
import mongoose from 'mongoose';
import router from './src/routes/index';

const app: Application = express();

app.use(express.json());

const mongoURI = 'mongodb://127.0.0.1:27017/wishdo-home1';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

} as any)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB", error);
    });

app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
