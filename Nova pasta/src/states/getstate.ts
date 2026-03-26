import { LeadStage } from "../models/Lead";
import { ContatoInicialState } from "./contatoinicialstate";
import { EnviouPropostaState } from "./envioupropostaState";
import { FinalizadoState } from "./FinalizadoState";

export function getState(stage: LeadStage) {
  switch (stage) {
    case "CONTATO_INICIAL":
      return new ContatoInicialState();
    case "ENVIOU_PROPOSTA":
      return new EnviouPropostaState();
    default:
      return new FinalizadoState();
  }
}
