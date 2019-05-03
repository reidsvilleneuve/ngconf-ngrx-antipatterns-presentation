import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  exhaustMap
} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {
  NameActionTypes,
  SearchAllNameEntities,
  SearchAllNameEntitiesSuccess,
  SearchAllNameEntitiesFail
} from './name.actions';
import { Name } from './name.model';
import { NameService } from '../../shared/name.service';

@Injectable()
export class NameEffects {

  constructor(private actions$: Actions, private service: NameService) {}

  @Effect()
  search: Observable<Action> = this.actions$
  .pipe(
      ofType<SearchAllNameEntities>(NameActionTypes.SearchAllNameEntities),
      switchMap((action) =>
        this.service.search(action.payload.query).pipe(
          map((entities: Array<Name>) =>
            new SearchAllNameEntitiesSuccess({ result: entities })
          ),
          catchError(({ message }) =>
            of(new SearchAllNameEntitiesFail({ error: message }))
          )
        )
      )
    );
}
