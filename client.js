let socket = new WebSocket("ws://localhost:3000");
const editor = document.getElementById("editor");

socket.onopen = () => {
  console.log("Connected");
};
socket.onclose = (e) => {
  console.log("Disconnected");
};
socket.onmessage = (e) => {
  editor.value = e.data.toString();
};
socket.onerror = (error) => {
  console.log(error.message);
};
editor.addEventListener("keyup", (e) => {
  const text = editor.value;
  socket.send(text.toString());
});
