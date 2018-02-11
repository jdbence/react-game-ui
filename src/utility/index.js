// @flow

export function isFunction(value: any) : boolean {
  return value instanceof Function;
  //return typeof value === 'function';
}