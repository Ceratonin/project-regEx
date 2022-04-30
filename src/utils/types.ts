export interface IRenderII {
  renderInputText: JSX.Element;
  inputText: string;
}

export interface IRenderE {
  renderExpression: JSX.Element;
  regExp: RegExp | undefined;
  inputReg: string;
}

export interface IIndexes {
  indexes: Array<Array<number>>;
}

export interface ICaptures {
  captures: Array<Array<string>>;
}

export interface IRegExpContext extends IIndexes, ICaptures {}

export interface ISidebarState {
  setSidebarState: Function;
  sidebarState: boolean;
}
