//More info about how to mock @b2b/fetch at https://bit.ly/b2bfetch
process.env.NODE_ENV = 'test';
const { fetch } = require('@b2b/fetch/mock');
const sample = require('./sample');

describe('sample provider', () => {
  //IMPORTANT: do not forget to add this afterEach
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('list function', async () => {
    const expected = require('../__mocks__/fetch/list.json');
    fetch.response = { response: expected };

    const output = await sample.list();
    expect(output).toMatchObject(expected);
  });

  it('get function', async () => {
    const expected = require('../__mocks__/fetch/luz_tag.json');
    fetch.response = { response: expected };
    const output = await sample.get('luz');

    expect(output).toMatchObject(expected);
  });

  it('get function: tag not found', async () => {
    const expected = { message: 'not found' };
    fetch.response = { status: 404, statusText: 'not found', response: expected };

    await expect(sample.get('pepe')).rejects.toThrowError('not found');
  });
});
