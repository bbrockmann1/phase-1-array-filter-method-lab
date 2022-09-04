function findMatching(array, string){
    return array.filter(
        possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase()
    )
};

function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }

function matchName(array, string){
    return array.filter((record) => record.name === string)
};