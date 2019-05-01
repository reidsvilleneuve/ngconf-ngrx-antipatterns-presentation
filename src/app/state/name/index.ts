import { createSelector, createFeatureSelector } from '@ngrx/store';

import {
  nameAdapter,
  getSelectedId,
  getLoading,
  getError,
  getQuery
} from './name.reducer';
import { NameState } from './name.reducer';

export const getNameState = createFeatureSelector<NameState>('name');

export const {
  selectIds: nameIds,
  selectEntities: nameEntities,
  selectAll: names,
  selectTotal: nameCount
} = nameAdapter.getSelectors(getNameState);

export const currentNameId = createSelector(
  getNameState,
  getSelectedId
);

export const currentName = createSelector(
  currentNameId,
  nameEntities,
  (selectedNameId, entities) =>
    selectedNameId && entities[selectedNameId]
);

export const nameLoading = createSelector(
  getNameState,
  getLoading
);

export const nameError = createSelector(
  getNameState,
  getError
);

export const nameQuery = createSelector(
  getNameState,
  getQuery
);
