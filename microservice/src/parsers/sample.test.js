const parsers = require('./sample');

describe('sample parsers module', () => {
  it('get parser should return valid properties', () => {
    const input = [
      {
        _id: 1,
        owner: 'Pepe',
        createdAt: 'yesterday',
        updatedAt: 'today',
        fieldOne: 1,
        fieldTwo: 2,
      },
      {
        _id: 2,
        owner: 'null',
        fieldFour: 4,
      },
    ];
    const result = parsers.get(input);

    expect(result).toEqual([
      {
        id: 1,
        owner: 'Pepe',
        metadata: { createdAt: 'yesterday', updatedAt: 'today' },
        fieldOne: 1,
        fieldTwo: 2,
      },
      {
        id: 2,
        owner: 'unknown',
        metadata: {},
        fieldFour: 4,
      },
    ]);
  });

  it('list parser should filter empty items', () => {
    const input = ['a', 'b', '', 'c', 'd', '', '', 'e'];

    expect(parsers.list(input)).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('get parser should return empty array if empty input', () => {
    expect(parsers.get()).toEqual([]);
  });

  it('list parser should return empty array if empty input', () => {
    expect(parsers.list()).toEqual([]);
  });
});
