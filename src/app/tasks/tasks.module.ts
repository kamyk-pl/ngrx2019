import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { MaterialModule } from '../material/material.module';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducersMap } from './store';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './store/effects';
import { CustomSerializer } from './store/router-store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

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
      StoreModule.forRoot(reducersMap),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      EffectsModule.forRoot([TasksEffects]),
      StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
  ],

})
export class TasksModule { }
