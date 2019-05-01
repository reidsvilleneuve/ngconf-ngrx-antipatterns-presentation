export interface Name {
  id: number;
  name: string;
  description: string;
}

// for testing

export const generateName = (idOverride?: number): Name => ({
  id: idOverride || (Math.floor(Math.random() * 100) + 1),
  name: 'Test name',
  description: 'Test description'
});

export const generateNameArray = (count = 10): Name[] =>
  // Overwrite random id generation to prevent duplicate IDs:
  Array.apply(null, Array(count)).map((value, index) => generateName(index + 1));

export const generateNameMap = (
  nameArray: Array<Name> = generateNameArray()
): { ids: Array<number>, entities: any } => ({
  entities: nameArray.reduce(
    (nameMap, name) => ({ ...nameMap, [name.id]: name }),
    {}
  ),
  ids: nameArray.map(name => name.id)
});

