export type LeadStatus =
  | "ABERTO"
  | "EM_NEGOCIACAO"
  | "FINALIZADO_COM_VENDA"
  | "FINALIZADO_SEM_VENDA";

export type LeadStage =
  | "CONTATO_INICIAL"
  | "ENVIOU_PROPOSTA"
  | "AGUARDANDO_RESPOSTA"
  | "AGUARDANDO_PAGAMENTO";

export type LeadSource =
  | "VISITA"
  | "TELEFONE"
  | "WHATSAPP"
  | "INSTAGRAM";

export class Lead {
  id: string;
  nome!: string;
  telefone!: string;
  origem!: LeadSource;
  veiculo!: string;
  status!: LeadStatus;
  stage!: LeadStage;

  constructor(data: Omit<Lead, "id">) {
    this.id = crypto.randomUUID();
    Object.assign(this, data);
  }
}