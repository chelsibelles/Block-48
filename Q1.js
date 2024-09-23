class Queue {
    constructor () {
        this.queue = [];  
    }

    
    enqueue(item) {
        this.queue.push(item);
    }

    
    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.pop(); 
        } else {
            return null;
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.queue.length;
    }

    // Peek at the last item without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.queue[this.queue.length - 1];  // Last item in the array
        } else {
            return null;
        }
    }
}

// Function to determine if the brackets in the string are valid
function isValid(s) {
    const openingQueue = new Queue();  

    const bracketMap = { ')' : '(', '}' : '{', ']' : '['};  // Closing to opening bracket mapping

    // For Loop
    for (let char of s) {
        if (char === '(' || char === '{' || char ==='[') {
            openingQueue.enqueue(char);  // Push opening bracket into the stack
        } else if (char === ')' || char ==='}' || char === ']') {
            if (openingQueue.isEmpty()) {
                return false;  // No matching opening bracket
            }
            const openBracket = openingQueue.dequeue();  // Pop the last opening bracket

            if (openBracket !== bracketMap[char]) {
                return false;  // Mismatched bracket
            }
        }
    }

    // If the stack is empty after processing, all brackets were matched
    return openingQueue.isEmpty();
}

// Example:
console.log(isValid("()"));        // Output: true
console.log(isValid("[]({})"));    // Output: true
console.log(isValid("{]}"));       // Output: false