import {
  currentNameId,
  currentName,
  nameLoading,
  nameError,
  nameQuery
} from './index';
import { Name } from './name.model';

const createName = ({ id = 0, name = '', description = '' } = {}): Name => ({
  id: id,
  name: name || 'name',
  description: description || `description`
});

// State Factory
const createNamesState = ({
  entities = {
    '1': createName({ id: 1, name: 'Bob' }),
    '2': createName({ id: 2, name: 'Sue' }),
    '3': createName({ id: 3, name: 'Mary' })
  },
  ids = ['1', '2', '3'],
  selectedId = 1,
  loading = false,
  error = '',
  query = null
} = {}) => ({
  name: {
    ids,
    entities,
    selectedId,
    loading,
    error,
    query
  }
});

let state;

describe('nameSelectors', () => {
  beforeEach(() => {
    state = createNamesState();
  });

  it('currentNameId', () => {
    expect(currentNameId(state)).toEqual(1);
  });

  it('currentName', () => {
    expect(currentName(state)).toEqual(state.name.entities[1]);
  });

  it('nameLoading', () => {
    state.name.loading = true;
    expect(nameLoading(state)).toEqual(state.name.loading);
  });

  it('nameError', () => {
    state.name.error = 'error loading names';
    expect(nameError(state)).toEqual(state.name.error);
  });

  it('nameQuery', () => {
    state.name.query = 'page=2';
    expect(nameQuery(state)).toEqual(state.name.query);
  });
});
