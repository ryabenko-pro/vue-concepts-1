export const TASK_STATUSES = {
  NEW: 'new',
  WIP: 'wip',
  READY: 'ready for test',
  DONE: 'done',
};

export class Task {

  constructor({id, title, description, status, createdAt = null} = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt || new Date();
  }

}

const {a, b} = {a: 1, b: 2};
