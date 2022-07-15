const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const pool = require("./modules/pool");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));
app.use("/feedback", router);

/** ---------- EXPRESS ROUTES ---------- **/
router.post("/", (req, res) => {
  console.log("/feedback POST", req.body);
  const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
  const values = [
    req.body.feeling,
    req.body.understanding,
    req.body.supported,
    req.body.comment,
  ];

  pool
    .query(queryString, values)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
