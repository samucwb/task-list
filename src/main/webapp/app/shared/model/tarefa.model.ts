export interface ITarefa {
  id?: number;
  dsTarefa?: string;
  dsObservacao?: string;
  boConcluido?: boolean;
}

export class Tarefa implements ITarefa {
  constructor(public id?: number, public dsTarefa?: string, public dsObservacao?: string, public boConcluido?: boolean) {
    this.boConcluido = this.boConcluido || false;
  }
}
