import {
  Name,
  generateName,
  generateNameMap,
  generateNameArray
} from './name.model';
import * as actions from './name.actions';
import {
  nameReducer,
  initialNameState,
  getSelectedId,
  getLoading,
  getError,
  getQuery
} from './name.reducer';
import { Update } from '@ngrx/entity';

const INITIAL_STATE_WITH_ERROR = {
  ...initialNameState,
  error: 'some error'
};
const BLANK_ERROR_MESSAGE = '';

describe('nameReducer', () => {
  describe('upon an undefined action', () => {
    it('should return the default state upon an undefined action', () => {
      const action = { type: 'NOT DEFINED' } as any;

      expect(nameReducer(initialNameState, action)).toEqual(initialNameState);
    });
  });

  describe('upon CreateName', () => {
    it('should set loading to true and clear any error', () => {
      const action = new actions.CreateName({ name: generateName() });

      expect(nameReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialNameState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon CreateNameSuccess', () => {
    it('should add the given Name, set loading to false, and clear any error', () => {
      const result = generateName();
      const action = new actions.CreateNameSuccess({ result });

      expect(nameReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialNameState,
        ...generateNameMap([result]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon CreateNameFail', () => {
    it('should set loading to true and echo the error', () => {
      const error = 'test create error';
      const action = new actions.CreateNameFail({ error });

      expect(nameReducer(initialNameState, action)).toEqual({
        ...initialNameState,
        loading: false,
        error: `Name create failed: ${error}`
      });
    });
  });

  describe('upon SearchAllNameEntities', () => {
    it('should remove Name entities, set loading to true, and clear any error', () => {
      const initialNameStateWithNameEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateNameMap()
      };
      const action = new actions.SearchAllNameEntities();

      expect(nameReducer(initialNameStateWithNameEntities, action)).toEqual({
        ...initialNameState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon SearchAllNameEntitiesSuccess', () => {
    it('should add Name entities, set loading to false, and clear any error', () => {
      const result = generateNameArray();
      const action = new actions.SearchAllNameEntitiesSuccess({ result });

      expect(nameReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialNameState,
        ...generateNameMap(result),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon SearchAllNameEntitiesFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test search error';
      const action = new actions.SearchAllNameEntitiesFail({ error });

      expect(nameReducer(initialNameState, action)).toEqual({
        ...initialNameState,
        loading: false,
        error: `Name search failed: ${error}`
      });
    });
  });

  describe('upon LoadNameById', () => {
    it('should remove name entities, set selected id, and clear any error', () => {
      const id = 8675309;
      const initialNameStateWithNameEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateNameMap()
      };
      const action = new actions.LoadNameById({ id });

      expect(nameReducer(initialNameStateWithNameEntities, action)).toEqual({
        ...initialNameState,
        selectedId: id,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon LoadNameByIdSuccess', () => {
    it('should add the given Name, set loading to false, and clear any error', () => {
      const result = generateName();
      const action = new actions.LoadNameByIdSuccess({ result });

      expect(nameReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialNameState,
        ...generateNameMap([result]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon LoadNameByIdFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test load by id error';
      const action = new actions.LoadNameByIdFail({ error });

      expect(nameReducer(initialNameState, action)).toEqual({
        ...initialNameState,
        loading: false,
        error: `Name load failed: ${error}`
      });
    });
  });

  describe('upon UpdateName', () => {
    it('should set loading to true and clear any errior', () => {
      const name = generateName();
      const action = new actions.UpdateName({ name });

      expect(nameReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialNameState,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon UpdateNameSuccess', () => {
    it('should add the given Name, set loading to false, and clear any error', () => {
      const name = generateName();
      const initialNameStateWithName = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateNameMap([name])
      };
      const updatedName = {
        ...name,
        name: name.name + ' EDITED',
        description: name.description + ' EDITED'
      };
      const update = {
        id: updatedName.id,
        changes: updatedName
      } as Update<Name>;
      const action = new actions.UpdateNameSuccess({ update });

      expect(nameReducer(initialNameStateWithName, action)).toEqual({
        ...initialNameStateWithName,
        ...generateNameMap([updatedName]),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon UpdateNameFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test update error';
      const action = new actions.UpdateNameFail({ error });

      expect(nameReducer(initialNameState, action)).toEqual({
        ...initialNameState,
        loading: false,
        error: `Name update failed: ${error}`
      });
    });
  });

  describe('upon DeleteNameById', () => {
    it('should set the id, set loading to true, and clear any error', () => {
      const id = 4815162342;
      const action = new actions.DeleteNameById({ id });

      expect(nameReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialNameState,
        selectedId: id,
        loading: true,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon DeleteNameByIdSuccess', () => {
    it('should remove the id-given name, set loading to false, and clear any error', () => {
      const id = 18009453669;
      const nameToBeRemoved = generateName(id);
      const expectedNameEntities = generateNameArray();
      const nameEntitiesWithNameToBeRemoved = [
        ...expectedNameEntities,
        nameToBeRemoved
      ];
      const initialNameStateWithAllNameEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateNameMap(nameEntitiesWithNameToBeRemoved)
      };
      const action = new actions.DeleteNameByIdSuccess({ id });

      expect(
        nameReducer(initialNameStateWithAllNameEntities, action)
      ).toEqual({
        ...initialNameStateWithAllNameEntities,
        ...generateNameMap(expectedNameEntities),
        loading: false,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });

  describe('upon DeleteNameByIdFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test delete error';
      const action = new actions.DeleteNameByIdFail({ error });

      expect(nameReducer(initialNameState, action)).toEqual({
        ...initialNameState,
        loading: false,
        error: `Name delete failed: ${error}`
      });
    });
  });

  describe('upon SetSearchQuery', () => {
    it('should set the query', () => {
      const query = {
        filter: 'someFilter',
        sorting: 'someSort',
        limit: 1000000000000,
        page: 888888
      };
      const action = new actions.SetSearchQuery(query);

      expect(nameReducer(initialNameState, action)).toEqual({
        ...initialNameState,
        query
      });
    });
  });

  describe('upon SelectNameById', () => {
    it('should set the id and clear any error', () => {
      const id = 73;
      const action = new actions.SelectNameById({ id });

      expect(nameReducer(INITIAL_STATE_WITH_ERROR, action)).toEqual({
        ...initialNameState,
        selectedId: id,
        error: BLANK_ERROR_MESSAGE
      });
    });
  });
});

describe('getters', () => {
  describe('getSelectedId', () => {
    it('should return the selected id', () => {
      expect(getSelectedId(initialNameState)).toEqual(initialNameState.selectedId);
    });
  });
  describe('getLoading', () => {
    it('should return the selected id', () => {
      expect(getLoading(initialNameState)).toEqual(initialNameState.loading);
    });
  });
  describe('getError', () => {
    it('should return the selected id', () => {
      expect(getError(INITIAL_STATE_WITH_ERROR))
        .toEqual(INITIAL_STATE_WITH_ERROR.error);
    });
  });
  describe('getQuery', () => {
    it('should return the selected id', () => {
      expect(getQuery(initialNameState))
        .toEqual(initialNameState.query);
    });
  });
});
