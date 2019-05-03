import { createFeatureSelector } from '@ngrx/store';

import { nameAdapter, } from './name.reducer';
import { NameState } from './name.reducer';

export const getNameState = createFeatureSelector<NameState>('name');
export const { selectAll: names } = nameAdapter.getSelectors(getNameState);
