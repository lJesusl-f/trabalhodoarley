import { Lead } from "../models/Lead";
import { LeadState } from "./LeadState";

export class ContatoInicialState implements LeadState {
  avancar(lead: Lead) {
    lead.stage = "ENVIOU_PROPOSTA";
    lead.status = "EM_NEGOCIACAO";
  }
}