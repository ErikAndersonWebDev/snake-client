const net = require("net");
const connect = function (data) {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    conn.write("Name: ESA")
  })

  conn.on("connect", () => {
    conn.write("Move: up");
  })

  
  conn.on("connect", () => {
    setInterval(() => {
    conn.write("Move: up");
    }, 50);
  })

  conn.on("data", (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = {
  connect
}