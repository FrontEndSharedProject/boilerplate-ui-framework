export {};

declare global {
  //  添加 window 上的全局变量
  interface Window {}
  //  添加 JQuery 实例方法
  interface JQuery {}
  //  添加 JQuery 工具方法
  interface JQueryStatic {}
}
