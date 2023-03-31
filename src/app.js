const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const chunks = [];
    res.write("Hey there");
    // req.on("data", (chunk) => {
    //   const buf = Buffer.from(chunk);
    //   const str = buf.toString();
    //   chunks.push(str);
    //   const obj = JSON.parse(chunks);
    //   const value = obj.num1;

    //   // Write the code here to check if the number is odd or even
    //   console.log("Incoming: ", value);
    //   res.write("Hey there from http");
    // });
  }
});

module.exports = server;
