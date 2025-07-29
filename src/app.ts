import express, { json } from "express";
import playRoutes from "./routes/players-route";
import cors from 'cors';

function createApp(){
    const app = express();
    app.use(cors())
    app.use(json());
    
    app.use('/api', playRoutes)
    return app;

}

export default createApp;

    