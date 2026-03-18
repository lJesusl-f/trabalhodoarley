import { Lead } from "../models/Lead";
import { LeadState } from "./LeadState";

export class EnviouPropostaState implements LeadState {
  avancar(lead: Lead) {
    lead.stage = "AGUARDANDO_RESPOSTA";
  }
}