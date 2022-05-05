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
  hover: boolean;
  index: number;
}

export interface IIsHover {
  isHovered: IIsHoverObject;
}

export interface IMemoizedListeners {
  memoizedListeners: {
    onMouseOver(event: React.MouseEvent<HTMLElement>): void;
    onMouseOut(): void;
  };
}
export interface IMouseClick {
  mouseClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface IHoverState
  extends IIsHover,
    IMemoizedListeners,
    IMouseClick {}

