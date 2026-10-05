import express from "express";
import employees from "./db/employees.js";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello Employee");
});

app.route("/employees").get((req, res) => {
  res.send(employee);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return res.status(404).send({ message: "Employee not found" });
  }

  res.send(employee);
});

export default app;
