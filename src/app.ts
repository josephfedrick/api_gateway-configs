a text document that provides information about a project, program, or dataset.
function compact(arr: string[]) {
  if (arr.length > 10)
    return arr.slice(0, 10)
  return arr
}
