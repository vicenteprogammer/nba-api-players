import express, { json } from "express";

function createApp(){
    const app = express();

    app.use(json());
    
    return app;

}

export default createApp;

    