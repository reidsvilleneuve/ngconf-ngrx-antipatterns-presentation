import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Name } from './name.model';
import { NameActions, NameActionTypes } from './name.actions';

export interface NameSearchQuery {
  filter: string;
  sorting: string;
  limit: number;
  page: number;
}

export interface NameState extends EntityState<Name> {
  // additional entities state properties
  selectedId: number;
  loading: boolean;
  error: string;
  query: NameSearchQuery;
}

export const nameAdapter: EntityAdapter<Name> = createEntityAdapter<Name>();

export const initialNameState: NameState = nameAdapter.getInitialState({
  // additional name state properties
  selectedId: null,
  loading: false,
  error: '',
  query: {
    filter: '',
    sorting: '',
    limit: 999,
    page: 1
  }
});

export function nameReducer(state = initialNameState, action: NameActions): NameState {
  switch (action.type) {
    case NameActionTypes.CreateName:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case NameActionTypes.CreateNameSuccess:
      return {
        ...nameAdapter.addOne(action.payload.result, state),
        loading: false,
        error: ''
      };

    case NameActionTypes.CreateNameFail:
      return {
        ...state,
        loading: false,
        error: 'Name create failed: ' + action.payload.error
      };

    case NameActionTypes.SearchAllNameEntities:
      return {
        ...nameAdapter.removeAll(state),
        loading: true,
        error: ''
      };

    case NameActionTypes.SearchAllNameEntitiesSuccess:
      return {
        ...nameAdapter.addAll(action.payload.result, state),
        loading: false,
        error: ''
      };

    case NameActionTypes.SearchAllNameEntitiesFail:
      return {
        ...state,
        loading: false,
        error: 'Name search failed: ' + action.payload.error
      };

    case NameActionTypes.LoadNameById:
      return {
        ...nameAdapter.removeAll(state),
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case NameActionTypes.LoadNameByIdSuccess:
      return {
        ...nameAdapter.addOne(action.payload.result, state),
        loading: false,
        error: ''
      };

    case NameActionTypes.LoadNameByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Name load failed: ' + action.payload.error
      };

    case NameActionTypes.UpdateName:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case NameActionTypes.UpdateNameSuccess:
      return {
        ...nameAdapter.updateOne(action.payload.update, state),
        loading: false,
        error: ''
      };

    case NameActionTypes.UpdateNameFail:
      return {
        ...state,
        loading: false,
        error: 'Name update failed: ' + action.payload.error
      };

    case NameActionTypes.DeleteNameById:
      return {
        ...state,
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case NameActionTypes.DeleteNameByIdSuccess:
      return {
        ...nameAdapter.removeOne(action.payload.id, state),
        loading: false,
        error: ''
      };

    case NameActionTypes.DeleteNameByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Name delete failed: ' + action.payload.error
      };

    case NameActionTypes.SetSearchQuery:
      return {
        ...state,
        query: {
          ...state.query,
          ...action.payload
        }
      };

    case NameActionTypes.SelectNameById:
      return {
        ...state,
        selectedId: action.payload.id,
        error: ''
      };

    default:
      return state;
  }
}

export const getSelectedId = (state: NameState) => state.selectedId;
export const getLoading = (state: NameState) => state.loading;
export const getError = (state: NameState) => state.error;
export const getQuery = (state: NameState) => state.query;
