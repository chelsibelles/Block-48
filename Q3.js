function heightChecker(heights) {
    // Create a sorted version of the heights array
    const sortedHeights = [...heights].sort((a, b) => a - b);
  
    // Count the number of students in the wrong positions
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sortedHeights[i]) {
        count++;
      }
    }
    
    return count;
  }
  
  // Example:
  const heights1 = [1, 1, 4, 2, 1, 3];
  console.log(heightChecker(heights1));  // Output: 3
  
  const heights2 = [2, 7, 4, 2, 1, 3];
  console.log(heightChecker(heights2));  // Output: 6
  