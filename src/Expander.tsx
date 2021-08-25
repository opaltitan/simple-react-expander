import { useState } from 'react';
import { ExpanderParams, ExpanderHeaderParams } from './models/models';

const ExpanderHeader = (params: ExpanderHeaderParams): JSX.Element => {
  return (
    <div className="expander-header">
      <div className="expander-header-icon-container"
          onClick={() => params.expanderStateSetter(!params.expanderState)}>
        <span className="expander-header-icon">{ params.expanderState ? '-' : '+' }</span>
      </div>
      {params.header}
    </div>
  );
};

export const ExpanderComponent = (params: ExpanderParams): JSX.Element => {
  const [expanderState, setExpanderState] = useState<boolean>(!!params.initialState);
  const expanderBody: JSX.Element | null = expanderState
    ? <div className="expander-body">{params.children}</div>
    : null;

  return (
    <div className="expander">
      <ExpanderHeader header={params.header}
                      expanderState={expanderState}
                      expanderStateSetter={setExpanderState} />
      {expanderBody}
    </div>
  );
};