import { Lead } from "../models/Lead";

export interface Observer {
  update(lead: Lead): void;
}