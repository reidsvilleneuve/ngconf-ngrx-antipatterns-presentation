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

  describe('create', () => {
    it('should return CreateNameSuccess action with entity on success', () => {
      const entity = generateName();
      const insertAction = new CreateName({ name: entity });
      const successAction = new CreateNameSuccess({ result: entity });

      actions = hot('a-', { a: insertAction });
      service.create.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.create).toBeObservable(expected);
    });

    it('should return CreateNameFail with error object on failure', () => {
      const entity = generateName();
      const insertAction = new CreateName({ name: entity });
      const failAction = new CreateNameFail({ error: 'fail' });

      actions = hot('i-', { i: insertAction });
      service.create.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.create).toBeObservable(expected);
    });
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

  describe('loadById', () => {
    it('should return LoadNameByIdSuccess action with entity on success', () => {
      const entity = generateName();
      const loadAction = new LoadNameById({ id: entity.id });
      const successAction = new LoadNameByIdSuccess({ result: entity});

      actions = hot('a-', { a: loadAction });
      service.getById.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.loadById).toBeObservable(expected);
    });

    it('should return LoadNameByIdFail with error object on failure', () => {
      const entity = generateName();
      const loadAction = new LoadNameById({ id: entity.id });
      const failAction = new LoadNameByIdFail({ error: 'fail' });

      actions = hot('a-', { a: loadAction });
      service.getById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.loadById).toBeObservable(expected);
    });
  });

  describe('update', () => {
    it('should return UpdateNameSuccess action with entity on success', () => {
      const entity = generateName();
      const updateAction = new UpdateName({ name: entity });
      const successAction = new UpdateNameSuccess({ update: {
        id: entity.id,
        changes: entity
      }});

      actions = hot('a-', { a: updateAction });
      service.update.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.update).toBeObservable(expected);
    });

    it('should return UpdateNameFail with error object on failure', () => {
      const entity = generateName();
      const updateAction = new UpdateName({ name: entity });
      const failAction = new UpdateNameFail({ error: 'fail' });

      actions = hot('a-', { a: updateAction });
      service.update.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.update).toBeObservable(expected);
    });
  });

  describe('delete', () => {
    it('should return DeleteNameByIdSuccess action with entity ID on success', () => {
      const entity = generateName();
      const deleteAction = new DeleteNameById({ id: entity.id });
      const successAction = new DeleteNameByIdSuccess({ id: entity.id });

      actions = hot('a-', { a: deleteAction });
      service.deleteById.and.returnValue(cold('-e|', { e: entity.id }));
      const expected = cold('-s', { s: successAction });

      expect(effects.delete).toBeObservable(expected);
    });

    it('should return DeleteNameByIdFail with error object on failure', () => {
      const entity = generateName();
      const deleteAction = new DeleteNameById({ id: entity.id });
      const failAction = new DeleteNameByIdFail({ error: 'fail' });

      actions = hot('a-', { a: deleteAction });
      service.deleteById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.delete).toBeObservable(expected);
    });
  });

});
