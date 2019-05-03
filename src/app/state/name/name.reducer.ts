import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Name } from './name.model';
import { NameActions, NameActionTypes } from './name.actions';

export interface NameState extends EntityState<Name> {
  error: string;
}

export const nameAdapter: EntityAdapter<Name> = createEntityAdapter<Name>();

export const initialNameState: NameState = nameAdapter.getInitialState({
  error: '',
});

export function nameReducer(state = initialNameState, action: NameActions): NameState {
  switch (action.type) {
    case NameActionTypes.SearchAllNameEntities:
      return {
        ...nameAdapter.removeAll(state),
        error: ''
      };

    case NameActionTypes.SearchAllNameEntitiesSuccess:
      return {
        ...nameAdapter.addAll(action.payload.result, state),
        error: ''
      };

    case NameActionTypes.SearchAllNameEntitiesFail:
      return {
        ...state,
        error: 'Name search failed: ' + action.payload.error
      };

    default:
      return state;
  }
}
