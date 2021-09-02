import { ExpanderParams } from './models/models';
import { ExpanderComponent } from './Expander';

export namespace Expander {
  export const Component = ExpanderComponent;

  export interface Params extends ExpanderParams { }
};
