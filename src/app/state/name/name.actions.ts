import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Name } from './name.model';
import { NameSearchQuery } from './name.reducer';

export enum NameActionTypes {
  CreateName = '[Name] Create',
  CreateNameSuccess = '[Name] Insert Success',
  CreateNameFail = '[Name] Insert Fail',

  SearchAllNameEntities = '[Name] Search',
  SearchAllNameEntitiesSuccess = '[Name] Search Success',
  SearchAllNameEntitiesFail = '[Name] Search Fail',

  LoadNameById = '[Name] Load By ID',
  LoadNameByIdSuccess = '[Name] Load Success',
  LoadNameByIdFail = '[Name] Load Fail',

  UpdateName = '[Name] Update',
  UpdateNameSuccess = '[Name] Update Success',
  UpdateNameFail = '[Name] Update Fail',

  DeleteNameById = '[Name] Delete By ID',
  DeleteNameByIdSuccess = '[Name] Delete Success',
  DeleteNameByIdFail = '[Name] Delete Fail',

  SetSearchQuery = '[Name] Set Search Query',
  SelectNameById = '[Name] Select By ID'
}

// ========================================= CREATE

export class CreateName implements Action {
  readonly type = NameActionTypes.CreateName;
  constructor(public payload: { name: Name }) {}
}

export class CreateNameSuccess implements Action {
  readonly type = NameActionTypes.CreateNameSuccess;
  constructor(public payload: { result: Name }) {}
}

export class CreateNameFail implements Action {
  readonly type = NameActionTypes.CreateNameFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= SEARCH

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

// ========================================= LOAD BY ID

export class LoadNameById implements Action {
  readonly type = NameActionTypes.LoadNameById;
  constructor(public payload: { id: number }) {}
}

export class LoadNameByIdSuccess implements Action {
  readonly type = NameActionTypes.LoadNameByIdSuccess;
  constructor(public payload: { result: Name }) {}
}

export class LoadNameByIdFail implements Action {
  readonly type = NameActionTypes.LoadNameByIdFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= UPDATE

export class UpdateName implements Action {
  readonly type = NameActionTypes.UpdateName;
  constructor(public payload: { name: Name }) {}
}

export class UpdateNameSuccess implements Action {
  readonly type = NameActionTypes.UpdateNameSuccess;
  constructor(public payload: { update: Update<Name> }) {}
}

export class UpdateNameFail implements Action {
  readonly type = NameActionTypes.UpdateNameFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= DELETE

export class DeleteNameById implements Action {
  readonly type = NameActionTypes.DeleteNameById;
  constructor(public payload: { id: number }) {}
}

export class DeleteNameByIdSuccess implements Action {
  readonly type = NameActionTypes.DeleteNameByIdSuccess;
  constructor(public payload: { id: number }) {}
}

export class DeleteNameByIdFail implements Action {
  readonly type = NameActionTypes.DeleteNameByIdFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= QUERY

export class SetSearchQuery implements Action {
  readonly type = NameActionTypes.SetSearchQuery;
  constructor(public payload: Partial<NameSearchQuery>) {}
}

// ========================================= SELECTED ID

export class SelectNameById implements Action {
  readonly type = NameActionTypes.SelectNameById;
  constructor(public payload: { id: number }) {}
}

export type NameActions =
  | CreateName
  | CreateNameSuccess
  | CreateNameFail
  | SearchAllNameEntities
  | SearchAllNameEntitiesSuccess
  | SearchAllNameEntitiesFail
  | LoadNameById
  | LoadNameByIdSuccess
  | LoadNameByIdFail
  | UpdateName
  | UpdateNameSuccess
  | UpdateNameFail
  | DeleteNameById
  | DeleteNameByIdSuccess
  | DeleteNameByIdFail
  | SetSearchQuery
  | SelectNameById;
