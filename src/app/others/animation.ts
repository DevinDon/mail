import { animate, animation, style } from '@angular/animations';

/** 预设的时间线. */
export const TimeLine = {
  default: '0.5s ease-in-out',
  delay: '0.5s 1s ease-in-out',
  delayIn: '0.5s 1s ease-out',
  delayOut: '0.5s 1s ease-in',
  in: '0.5s ease-out',
  out: '0.5s ease-in'
};

/** 透明 => 不透明, 上 => 下, 入场. */
export const fromTransFromTopToBottomIn = animation([
  style({
    transform: 'translateY(-25%)',
    opacity: 0
  }),
  animate('{{ time }}', style({
    transform: 'translateY(0)',
    opacity: 1
  }))
]);

/** 不透明 => 透明, 上 => 下, 出场. */
export const fromOpaqueFromTopToBottomOut = animation([
  style({
    transform: 'translateY(0)',
    opacity: 1
  }),
  animate('{{ time }}', style({
    transform: 'translateY(25%)',
    opacity: 0
  }))
]);

/** 透明 => 不透明, 下 => 上, 入场. */
export const fromTransFromBottomToTopIn = animation([
  style({
    transform: 'translateY(25%)',
    opacity: 0
  }),
  animate('{{ time }}', style({
    transform: 'translateY(0)',
    opacity: 1
  }))
]);

/** 不透明 => 透明, 下 => 上, 出场. */
export const fromOpaqueFromBottomToTopOut = animation([
  style({
    transform: 'translateY(0)',
    opacity: 1
  }),
  animate('{{ time }}', style({
    transform: 'translateY(-25%)',
    opacity: 0
  }))
]);

/** 透明 => 不透明, 左 => 右, 入场. */
export const fromTransFromLeftToRightIn = animation([
  style({
    transform: 'translateX(-25%)',
    opacity: 0
  }),
  animate('{{ time }}', style({
    transform: 'translateX(0)',
    opacity: 1
  }))
]);

/** 不透明 => 透明, 左 => 右, 出场. */
export const fromOpaqueFromLeftToRightOut = animation([
  style({
    transform: 'translateX(0)',
    opacity: 1
  }),
  animate('{{ time }}', style({
    transform: 'translateX(25%)',
    opacity: 0
  }))
]);

/** 透明 => 不透明, 右 => 左, 入场. */
export const fromTransFromRightToLeftIn = animation([
  style({
    transform: 'translateX(25%)',
    opacity: 0
  }),
  animate('{{ time }}', style({
    transform: 'translateX(0)',
    opacity: 1
  }))
]);

/** 不透明 => 透明, 右 => 左, 出场. */
export const fromOpaqueFromRightToLeftOut = animation([
  style({
    transform: 'translateX(0)',
    opacity: 1
  }),
  animate('{{ time }}', style({
    transform: 'translateX(-25%)',
    opacity: 0
  }))
]);
