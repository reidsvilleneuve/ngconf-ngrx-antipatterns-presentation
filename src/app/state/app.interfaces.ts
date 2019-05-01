import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './state-utils';
import { NameState } from './name/name.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  name: NameState;
}

export type State = AppState;
