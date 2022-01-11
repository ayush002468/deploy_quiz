var express = require("express")
const { Client } = require("pg");

var app = express()

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  const port = process.env.PORT || 3400;
  app.listen(port, () => console.log("Listening on Port : ", +port));

  const client = new Client({
    user: "jcboblqolwalsv",
    password: "eeac1a6e72cf9dc126c6d5cd6bd1b42fbddef1ed631d4855c29b695ee537a00d",
    database: "daniq5ka25cn88",
    port: 5432,
    host: "ec2-3-214-190-189.compute-1.amazonaws.com",
    ssl: { rejectUnauthorized: false },
  });
  client
    .connect()
    .then(() => console.log("Succesfully Connected"))
    .catch((e) => console.log(e));

    app.get("/users", function (req, res, next) {
        console.log("Get users data");
        const query = ` SELECT * FROM quiz`;
        client.query(query, function (err, result) {
          if (err) {
            res.status(400).send(err);
          }
          res.send(result.rows);
          // client.end();
        });
      });
      app.post("/datapost", function (req, res, next) {
        console.log("Post data of user successfull");
        var values = Object.values(req.body);
        console.log(values);
        const query = `INSERT INTO quiz (name, error,date) VALUES ($1,$2,$3)`;
        client.query(query, values, function (err, result) {
          if (err) {
            console.log(err);
            res.sendStatus(404);
          }
          res.send(result);
        });
      });