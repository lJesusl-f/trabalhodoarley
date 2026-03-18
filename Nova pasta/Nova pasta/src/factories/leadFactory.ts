import { Lead } from "../models/Lead";

export class LeadFactory {
  static create(data: any) {
    return new Lead({
      ...data,
      stage: "CONTATO_INICIAL",
      status: "ABERTO",
    });
  }
}