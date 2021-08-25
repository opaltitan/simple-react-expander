import { ExpanderParams } from './models/models';
import { ExpanderComponent } from './Expander';

export namespace Expander {
  export const Expander = ExpanderComponent;

  export interface Params extends ExpanderParams { }
};
