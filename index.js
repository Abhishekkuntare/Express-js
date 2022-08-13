const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routes/UserRoutes")
const router1 = require("./routes/ProdcutRoutes")

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1",router)
app.use("/api/v1",router1)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
// app.get("/api/v1/userdata", (req, res) => {
//   res.json({
//     name: "Abhishek",
//     passion: "Web Developer",
//     favLang: "HTML",
//   });
// });


// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });
// app.post("/api/v1/login", (req, res) => {
//   res.send(
//     `<h1>Your name is ${req.body.name}</h1 ><h2>Your email is ${req.body.email}</h2><h3>Your password is ${req.body.password}</h3>`
//   );
//   console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
