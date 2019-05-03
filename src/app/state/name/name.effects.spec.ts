import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
  CreateName,
  CreateNameSuccess,
  CreateNameFail,
  SearchAllNameEntities,
  SearchAllNameEntitiesSuccess,
  SearchAllNameEntitiesFail,
  LoadNameById,
  LoadNameByIdSuccess,
  LoadNameByIdFail,
  UpdateName,
  UpdateNameSuccess,
  UpdateNameFail,
  DeleteNameById,
  DeleteNameByIdSuccess,
  DeleteNameByIdFail
} from './name.actions';
import { generateName, generateNameArray } from './name.model';
// TODO: Change this path when you move your service file:
import { NameService } from './name.service';
import { NameEffects } from './name.effects';

describe('NameEffects', () => {
  let actions: Observable<any>;
  let effects: NameEffects;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NameEffects,
        provideMockActions(() => actions),
        {
          provide: NameService,
          useValue: jasmine.createSpyObj('service', [
            'create',
            'search',
            'getById',
            'update',
            'deleteById'
          ])
        }
      ]
    });

    effects = TestBed.get(NameEffects);
    service = TestBed.get(NameService);
  });

  it('should be constructed', () => {
    expect(effects).toBeTruthy();
  });

  describe('search', () => {
    it('should return SearchAllNameEntitiesSuccess action with entities on success', () => {
      const entities = generateNameArray();
      const searchAction = new SearchAllNameEntities();
      const successAction = new SearchAllNameEntitiesSuccess({ result: entities });

      actions = hot('a-', { a: searchAction });
      service.search.and.returnValue(cold('-e|', { e: entities }));
      const expected = cold('-s', { s: successAction });

      expect(effects.search).toBeObservable(expected);
    });

    it('should return SearchAllNameEntitiesFail with error object on failure', () => {
      const searchAction = new SearchAllNameEntities();
      const failAction = new SearchAllNameEntitiesFail({ error: 'fail' });

      actions = hot('a-', { a: searchAction });
      service.search.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.search).toBeObservable(expected);
    });
  });
});
