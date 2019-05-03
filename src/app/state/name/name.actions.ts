import { Action } from '@ngrx/store';
import { Name } from './name.model';

export enum NameActionTypes {
  SearchAllNameEntities = '[Name] Search',
  SearchAllNameEntitiesSuccess = '[Name] Search Success',
  SearchAllNameEntitiesFail = '[Name] Search Fail',
}

export class SearchAllNameEntities implements Action {
  readonly type = NameActionTypes.SearchAllNameEntities;
  constructor(public payload: { query: string }) {}
}

export class SearchAllNameEntitiesSuccess implements Action {
  readonly type = NameActionTypes.SearchAllNameEntitiesSuccess;
  constructor(public payload: { result: Array<Name> }) {}
}

export class SearchAllNameEntitiesFail implements Action {
  readonly type = NameActionTypes.SearchAllNameEntitiesFail;
  constructor(public payload: { error: string }) {}
}

export type NameActions =
  | SearchAllNameEntities
  | SearchAllNameEntitiesSuccess
  | SearchAllNameEntitiesFail;
