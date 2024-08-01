import io from "socket.io-client"

const serverPath = import.meta.env.SERVER_URL

export async function initSocket() {

    options = {
        forceNew: true,
        reconnectionAttempt:"Infinity",
        timeout:10000,
        transports: ['websocket']
    }

    return io(serverPath, options)
}
