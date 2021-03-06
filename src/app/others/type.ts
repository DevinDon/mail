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
  time: number;
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

/** 设备类型. */
export interface Device {
  type: 'desktop' | 'table' | 'mobile';
  size: 's' | 'm' | 'l';
}

/** 根据不同的设备选择不同的设置. */
export interface DeviceConfig<T> {
  desktop?: {
    s?: T;
    m?: T;
    l?: T;
    default: T;
  };
  table?: {
    s?: T;
    m?: T;
    l?: T;
    default: T;
  };
  mobile?: {
    s?: T;
    m?: T;
    l?: T;
    default: T;
  };
}

/** 用户信息. */
export interface UserInfo {
  /** 用户 ID. */
  id?: number;
  /** 用户邮箱地址. */
  email?: string;
  /** 用户名. */
  name?: string;
  /** 密码. */
  password?: string;
}

/** 服务器信息. */
export interface Server {
  /** 通讯协议. */
  PROTOCOL: string;
  /** 主机名. */
  HOST: string;
  /** 主机端口. */
  PORT?: number;
  /** API 版本. */
  VERSION: string;
  /**
   * URL 地址.
   * @param path API 路径, 带斜杠 / .
   */
  toURL(path: string): string;
}

/** API 返回数据的格式. */
export interface Response<T = string> {
  code: number;
  status: boolean;
  data: T;
}
