const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Contenty-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Greeting Page </title> </head>");
    res.write(`<body> <h2> Welcome to my Page </h2> 
    <form action = "/create-user" method = "POST"> <input type  = 'text' name = 'username' /> <button type = 'submit'> Send </button>  </form>
    </body>`);
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> User's Page </title> </head>");
    res.write(
      "<body> <ul> <li> Salimza3a </li> <li> Jack Dorsey </li> </ul> </body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
      console.log(data);
    });
    return req.on("end", () => {
      const bodyDatas = Buffer.concat(data).toString();
      const username = bodyDatas.split("=")[1];
      console.log(username);
      fs.writeFile("something.txt", username, (err) => {
        res.setHeader("Location", "/users");
        res.statusCode = 302;

        res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Hello </title> </head>");
  res.write("<body> <h2> hi there </h2> </body>");

  res.write("</html>");

  res.end();
});

server.listen(3000);
