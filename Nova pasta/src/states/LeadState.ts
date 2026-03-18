import { Lead } from "../models/Lead";

export interface LeadState {
  avancar(lead: Lead): void;
}