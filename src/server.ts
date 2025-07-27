import createApp from "./app";

const server = createApp()

server.listen(process.env.PORT,()=>{
    console.log('Server is Activated')
})