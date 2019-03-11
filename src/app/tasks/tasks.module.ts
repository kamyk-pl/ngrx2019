import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { MaterialModule } from '../material/material.module';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [TasksFormComponent, TasksBoardComponent, TaskComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '',
        redirectTo: '/board',
        pathMatch: 'full'
      }, {
        path: 'board',
        component: TasksBoardComponent,
      }, {
        path: 'board/:status',
        component: TasksBoardComponent,
      }]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],

})
export class TasksModule { }
