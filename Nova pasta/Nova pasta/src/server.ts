import express from "express";
import { LeadFacade } from "./services/LeadFacade";

const app = express();
app.use(express.json());

const facade = new LeadFacade();

app.post("/leads", (req, res) => {
  const lead = facade.create(req.body);
  res.json(lead);
});

app.get("/leads", (req, res) => {
  res.json(facade.list());
});

app.get("/leads/:id", (req, res) => {
  res.json(facade.get(req.params.id));
});

app.patch("/leads/:id/avancar", (req, res) => {
  try {
    const lead = facade.avancar(req.params.id);
    res.json(lead);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("Rodando em http://localhost:3000");
});