import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'tarefa',
        loadChildren: () => import('./tarefa/tarefa.module').then(m => m.TasklistTarefaModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class TasklistEntityModule {}
