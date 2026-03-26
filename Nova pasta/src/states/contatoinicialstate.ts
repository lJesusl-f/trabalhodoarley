export class ContatoInicialState implements LeadState {
  avancar(lead: Lead) {
    lead.stage = "ENVIOU_PROPOSTA";
    lead.status = "EM_NEGOCIACAO";
  }

  desistir(lead: Lead) {
    lead.status = "PERDIDO";
  }
}
