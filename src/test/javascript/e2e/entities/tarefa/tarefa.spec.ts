import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { TarefaComponentsPage, TarefaDeleteDialog, TarefaUpdatePage } from './tarefa.page-object';

const expect = chai.expect;

describe('Tarefa e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tarefaComponentsPage: TarefaComponentsPage;
  let tarefaUpdatePage: TarefaUpdatePage;
  let tarefaDeleteDialog: TarefaDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Tarefas', async () => {
    await navBarPage.goToEntity('tarefa');
    tarefaComponentsPage = new TarefaComponentsPage();
    await browser.wait(ec.visibilityOf(tarefaComponentsPage.title), 5000);
    expect(await tarefaComponentsPage.getTitle()).to.eq('tasklistApp.tarefa.home.title');
    await browser.wait(ec.or(ec.visibilityOf(tarefaComponentsPage.entities), ec.visibilityOf(tarefaComponentsPage.noResult)), 1000);
  });

  it('should load create Tarefa page', async () => {
    await tarefaComponentsPage.clickOnCreateButton();
    tarefaUpdatePage = new TarefaUpdatePage();
    expect(await tarefaUpdatePage.getPageTitle()).to.eq('tasklistApp.tarefa.home.createOrEditLabel');
    await tarefaUpdatePage.cancel();
  });

  it('should create and save Tarefas', async () => {
    const nbButtonsBeforeCreate = await tarefaComponentsPage.countDeleteButtons();

    await tarefaComponentsPage.clickOnCreateButton();

    await promise.all([tarefaUpdatePage.setDsTarefaInput('dsTarefa'), tarefaUpdatePage.setDsObservacaoInput('dsObservacao')]);

    expect(await tarefaUpdatePage.getDsTarefaInput()).to.eq('dsTarefa', 'Expected DsTarefa value to be equals to dsTarefa');
    expect(await tarefaUpdatePage.getDsObservacaoInput()).to.eq('dsObservacao', 'Expected DsObservacao value to be equals to dsObservacao');
    const selectedBoConcluido = tarefaUpdatePage.getBoConcluidoInput();
    if (await selectedBoConcluido.isSelected()) {
      await tarefaUpdatePage.getBoConcluidoInput().click();
      expect(await tarefaUpdatePage.getBoConcluidoInput().isSelected(), 'Expected boConcluido not to be selected').to.be.false;
    } else {
      await tarefaUpdatePage.getBoConcluidoInput().click();
      expect(await tarefaUpdatePage.getBoConcluidoInput().isSelected(), 'Expected boConcluido to be selected').to.be.true;
    }

    await tarefaUpdatePage.save();
    expect(await tarefaUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await tarefaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Tarefa', async () => {
    const nbButtonsBeforeDelete = await tarefaComponentsPage.countDeleteButtons();
    await tarefaComponentsPage.clickOnLastDeleteButton();

    tarefaDeleteDialog = new TarefaDeleteDialog();
    expect(await tarefaDeleteDialog.getDialogTitle()).to.eq('tasklistApp.tarefa.delete.question');
    await tarefaDeleteDialog.clickOnConfirmButton();

    expect(await tarefaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
