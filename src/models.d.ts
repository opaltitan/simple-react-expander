
export interface ExpanderParams {
  header: JSX.Element;
  children: JSX.Element;
  initialState?: boolean;
}

export interface ExpanderHeaderParams {
  expanderState: boolean;
  expanderStateSetter: (val: boolean) => void,
  header: JSX.Element;
}