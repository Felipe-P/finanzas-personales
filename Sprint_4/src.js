const express = require("express");
const app = express();
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

app.post("/api/personal-finance/operations", (req, res) => {
  let operacion = req.body;
  operations.push(operacion);
  res.status(200).json(operations);
});

app.get("/api/personal-finance/is-my-goal-achieved/:amount", (req, res) => {
  let { amount } = req.params;
  amount = parseInt(amount);

  let result = amount > balance ? "no cumple" : "cumple";
  return res.json(result);
});

module.exports = app;
