const net = require("net");
const { IP, PORT } = require('./constants')
const connect = function (data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    conn.write("Name: ESA")
  })


  conn.on("data", (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = {
  connect
}