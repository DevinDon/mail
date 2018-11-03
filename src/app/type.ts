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

/** 邮件. */
export interface Mail {
  /** 发件人. */
  from?: string;
  /** 收件人. */
  to?: string;
  /** 抄送. */
  cc?: string;
  /** 密送. */
  bc?: string;
  /** 主题. */
  title?: string;
  /** 内容. */
  context?: string;
}

export interface DeviceType {
  type: 'desktop' | 'table' | 'mobile';
  size: 's' | 'm' | 'l';
}
