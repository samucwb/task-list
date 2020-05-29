import { element, by, ElementFinder } from 'protractor';

export class TarefaComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-tarefa div table .btn-danger'));
  title = element.all(by.css('jhi-tarefa div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class TarefaUpdatePage {
  pageTitle = element(by.id('jhi-tarefa-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  dsTarefaInput = element(by.id('field_dsTarefa'));
  dsObservacaoInput = element(by.id('field_dsObservacao'));
  boConcluidoInput = element(by.id('field_boConcluido'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDsTarefaInput(dsTarefa: string): Promise<void> {
    await this.dsTarefaInput.sendKeys(dsTarefa);
  }

  async getDsTarefaInput(): Promise<string> {
    return await this.dsTarefaInput.getAttribute('value');
  }

  async setDsObservacaoInput(dsObservacao: string): Promise<void> {
    await this.dsObservacaoInput.sendKeys(dsObservacao);
  }

  async getDsObservacaoInput(): Promise<string> {
    return await this.dsObservacaoInput.getAttribute('value');
  }

  getBoConcluidoInput(): ElementFinder {
    return this.boConcluidoInput;
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class TarefaDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-tarefa-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-tarefa'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
