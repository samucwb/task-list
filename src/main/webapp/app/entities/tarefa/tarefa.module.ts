import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasklistSharedModule } from 'app/shared/shared.module';
import { TarefaComponent } from './tarefa.component';
import { TarefaDetailComponent } from './tarefa-detail.component';
import { TarefaUpdateComponent } from './tarefa-update.component';
import { TarefaDeleteDialogComponent } from './tarefa-delete-dialog.component';
import { tarefaRoute } from './tarefa.route';

@NgModule({
  imports: [TasklistSharedModule, RouterModule.forChild(tarefaRoute)],
  declarations: [TarefaComponent, TarefaDetailComponent, TarefaUpdateComponent, TarefaDeleteDialogComponent],
  entryComponents: [TarefaDeleteDialogComponent]
})
export class TasklistTarefaModule {}
