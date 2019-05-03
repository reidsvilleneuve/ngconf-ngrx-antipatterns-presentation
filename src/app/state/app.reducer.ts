import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { storeFreeze } from 'ngrx-store-freeze';

import { AppState } from './app.interfaces';
import { environment } from '../../environments/environment';
import { nameReducer } from './name/name.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  name: nameReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
