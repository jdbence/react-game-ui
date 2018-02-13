// @flow

export function isFunction(value: any) : boolean {
  return value instanceof Function;
  //return typeof value === 'function';
}

//TODO: Abstract into seperate classes
export function theme(component: string,  prop:string) : string {
  const defaultTheme = {
    color: {
      primary: '#cce5ff',
      success: '#d4edda',
      danger: '#f8d7da',
      warning: '#fff3cd',
      info: '#d1ecf1'
    }
  }
  return defaultTheme[component][prop];
}

export function between(min: number, max: number) : number {
  return Math.random() * (max - min) + min;
}