function reconstructQueue(people) {
    // Sort the people: 
    // 1. By height in descending order (-a[0])
    // 2. By the number of people in front in ascending order (a[1])
    people.sort((a, b) => {
      if (a[0] !== b[0]) {
        return b[0] - a[0]; // Sort by height (descending)
      } else {
        return a[1] - b[1]; // Sort by the number of people in front (ascending)
      }
    });
  
    const result = [];
  
    // Insert each person into the result at the index equal to their second value
    for (const person of people) {
      result.splice(person[1], 0, person);  // Insert person at index person[1]
    }
  
    return result;
  }
  
  // Example:
  const people1 = [ [8, 0], [5, 5], [9, 0], [5, 0], [6, 2], [5, 2] ];
  console.log(reconstructQueue(people1));
  // Output: [ [ 5, 0 ], [ 8, 0 ], [ 5, 2 ], [ 9, 0 ], [ 6, 2 ], [ 5, 5 ] ]
  