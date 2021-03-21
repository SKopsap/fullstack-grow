/**
 * Data library for Notes
 * @packageDocumentation
 */

/**
 * @ignore
 */
const list = `
[
  {"id":"1","datetime":"2020-03-01T10:10Z","title":"My First Note"},
  {"id":"2","datetime":"2020-03-02T10:10Z","title":"My First Note"},
  {"id":"3","datetime":"2020-03-03T10:10Z","title":"My First Note"},
  {"id":"4","datetime":"2020-03-04T10:10Z","title":"My First Note"}
]
`;
/**
 *
 * @returns list of all notes
 */
export function getList() {
  return JSON.parse(list);
}
