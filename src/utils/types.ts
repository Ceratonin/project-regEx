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

export interface IMatchesGroups {
  [key: string | number]: string | number;
}

export interface IGetMatchesInfo {
  indexes: Array<IMatchesIndexes>;
  captures: Array<Array<string>>;
  groups: Array<IMatchesGroups>;
}

export interface IRegExpContext extends IGetMatchesInfo, ICaptures {}

export interface ISidebarState {
  sidebarCheck: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export interface IIsHover {
  isHovered: { hover: boolean; index: number };
}

export interface IIsClicked {
  isClicked: {
    clicked: boolean;
    index: number;
  };
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
    IMouseClick,
    IIsClicked {
  Ref: React.MutableRefObject<HTMLSpanElement | null>;
}
