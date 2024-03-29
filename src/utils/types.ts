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
  indexes: IMatchesIndexes;
  captures: Array<string>;
  groups: IMatchesGroups;
}

export interface MatchInfoArrContext extends IGetMatchesInfo {}

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

export interface ITab {
  tabtitle: string;
  children: JSX.Element;
}

export interface ITabs {
  children: JSX.Element[];
}

export interface ITabTitle {
  tabTitle: string;
  setTabTitle: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  tabTitleState: number;
}

export interface ITabItem {
  tabItem:string
}
