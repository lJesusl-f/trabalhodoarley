import { Lead } from "../models/Lead";
import { LeadState } from "./LeadState";

export class FinalizadoState implements LeadState {
  avancar() {
    throw new Error("Lead já finalizada");
  }
}