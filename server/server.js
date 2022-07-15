//---------------------Imports---------------------//

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
// POST
router.post("/", (req, res) => {
  console.log("/feedback POST", req.body);
  // query string to send to database
  const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
  // data to insert into query string
  const values = [
    req.body.feeling,
    req.body.understanding,
    req.body.supported,
    req.body.comment,
  ];

  // query database
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

// GET
router.get("/", (req, res) => {
  console.log("/feedback GET");
  const queryString = `SELECT * FROM feedback ORDER BY id ASC;`;

  pool
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  const queryString = `DELETE FROM feedback WHERE id=$1;`;
  const values = [req.params.id];

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

// PUT
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  const queryString = `UPDATE feedback SET flagged = NOT flagged WHERE id = $1;`;
  const values = [req.params.id];

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
