/** 文件夹. */
export interface Folder {
  path: string[];
  name: string;
  icon: string;
}

/** 联系人. */
export interface Contact {
  name: string;
  mail: string;
  head?: string;
}

/** 待办事件. */
export interface ToDoEvents {
  name: string;
  time: Date;
  done: boolean;
}
