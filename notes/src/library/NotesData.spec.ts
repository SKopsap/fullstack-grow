import * as notesData from './NotesData';
describe('NotesData Tests', () => {
  const expectedData = JSON.parse(
    `
    [
      {"id":"1","datetime":"2020-03-01T10:10Z","title":"My First Note"},
      {"id":"2","datetime":"2020-03-02T10:10Z","title":"My First Note"},
      {"id":"3","datetime":"2020-03-03T10:10Z","title":"My First Note"},
      {"id":"4","datetime":"2020-03-04T10:10Z","title":"My First Note"}
    ]
    `,
  );
  test('getList returns expected data', async () => {
    expect(notesData.getList()).toEqual(expectedData);
  });
});
