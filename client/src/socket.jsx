import io from "socket.io-client";

export function initSocket() {
  return io(import.meta.env.VITE_SERVER_URL, {
    forceNew: true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  });
}

export function emitSocket(socket, action, data) {
    console.log("emitting")
    socket.emit(action, data)
}
