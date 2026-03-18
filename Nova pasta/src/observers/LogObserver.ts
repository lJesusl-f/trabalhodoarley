import { Observer } from "./Observer";
import { Lead } from "../models/Lead";

export class LogObserver implements Observer {
  update(lead: Lead) {
    console.log("Lead atualizada:", lead);
  }
}