import { Lead } from "../models/Lead";
import { LeadFactory } from "../factories/leadFactory";
import { getState } from "../states/getstate";
import { LeadSubject } from "../observers/LeadSubject";
import { LogObserver } from "../observers/LogObserver";

export class LeadFacade {
  private leads: Lead[] = [];
  private subject = new LeadSubject();

  constructor() {
    this.subject.addObserver(new LogObserver());
  }

  create(data: any) {
    const lead = LeadFactory.create(data);
    this.leads.push(lead);
    return lead;
  }

  list() {
    return this.leads;
  }

  get(id: string) {
    return this.leads.find(l => l.id === id);
  }

  avancar(id: string) {
    const lead = this.get(id);
    if (!lead) throw new Error("Lead não encontrada");

    const state = getState(lead.stage);
    state.avancar(lead);

    this.subject.notify(lead);

    return lead;
  }

  // 🚫 DESISTIR (usando State - sua versão)
  desistir(id: string) {
    const lead = this.get(id);
    if (!lead) throw new Error("Lead não encontrada");

    const state = getState(lead.stage, lead.status);
    state.desistir(lead);

    this.subject.notify(lead);
    return lead;
  }

  // 🗑️ DELETE (sua versão com boolean)
  delete(id: string): boolean {
    const index = this.leads.findIndex(l => l.id === id);
    if (index === -1) return false;

    this.leads.splice(index, 1);
    return true;
  }
}
