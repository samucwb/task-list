export interface ITarefa {
  id?: number;
  dsTarefa?: string;
  dsObservacao?: string;
  boConcluido?: boolean;
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class Tarefa implements ITarefa {
  constructor(
    public id?: number,
    public dsTarefa?: string,
    public dsObservacao?: string,
    public boConcluido?: boolean,
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {
    this.boConcluido = this.boConcluido || false;
  }
}
