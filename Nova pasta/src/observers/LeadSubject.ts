import { Observer } from "./Observer";
import { Lead } from "../models/Lead";

export class LeadSubject {
  private observers: Observer[] = [];

  addObserver(obs: Observer) {
    this.observers.push(obs);
  }

  notify(lead: Lead) {
    this.observers.forEach(o => o.update(lead));
  }
}