import { ExpanderParams } from './src/models';
import { ExpanderComponent } from './src/Expander';

export namespace Expander {
  export const Expander = ExpanderComponent;

  export interface Params extends ExpanderParams { }
};
