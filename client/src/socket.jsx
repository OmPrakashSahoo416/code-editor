import io from "socket.io-client"


export async function initSocket() {

    

    return io(import.meta.env.VITE_SERVER_URL,
        {
        forceNew: true,
        reconnectionAttempt:"Infinity",
        timeout:10000,
        transports: ['websocket']
    })
}
