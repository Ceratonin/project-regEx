export interface IRenderII {
  renderInputText: JSX.Element;
  inputText: string;
}

export interface IRenderE {
  renderExpression: JSX.Element;
  flag: string;
  inputReg: string;
}

export interface ICaptures {
  captures: Array<Array<string>>;
}

export interface IMatchesIndexes {
  start: number;
  end: number;
  highlight: boolean;
}

export interface IGetMatchesInfo {
  indexes: Array<IMatchesIndexes>;
  captures: Array<Array<string>>;
}

export interface IRegExpContext extends IGetMatchesInfo, ICaptures {}

export interface ISidebarState {
  setSidebarState: Function;
  sidebarState: boolean;
}

export interface IIsHoverObject {
  onMouseHover: boolean;
  index: any;
  clicked: boolean;
}

export interface IIsHover {
  isHover: IIsHoverObject;
}

export interface ISetIsHover {
  setIsHover: React.Dispatch<
    React.SetStateAction<{
      onMouseHover: boolean;
      index: number;
      clicked: boolean;
    }>
  >;
}

export interface IHoverState extends IIsHover, ISetIsHover {}
