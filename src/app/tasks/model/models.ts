import * as uuid from 'uuid/v4';

export class Task {
  public readonly id: string = uuid.default();

  constructor(public title: string, public status: Status) {

  }
}

export enum Status {
  TODO = 'todo',
  WIP = 'wip',
  DONE = 'done',
  ALL = 'all'

}
