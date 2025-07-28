import express, { json } from "express";
import playRoutes from "./routes/players-route";

function createApp(){
    const app = express();

    app.use(json());
    
    app.use('/api', playRoutes)
    return app;

}

export default createApp;

    