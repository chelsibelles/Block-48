class TicketQueue {
    constructor (tockets, position) {
        this.tickets = tickets; //Array of tocket demands
        this.k = position; //Position of the person in queue
    }

    calculateTime() {
        let time = 0;

        //While Loop
        while(this.tickets[this.k] > 0) {
            for (let i=0; i < this.tickets.length; i++) {
                if (this.tickets [i] > 0) {
                    this.tickets[i] -= 1;
                    time += 1;

                    if (this.tickets[this.k] === 0) {
                        return time;
                    }
                }
            }
        }
    }
}

//Example:
const tickets = [7, 1, 1, 1];  
const queue1 = new TicketQueue(tickets, 0);  
console.log(queue1.calculateTime()); // Output: 10

const tickets2 = [2, 3, 2]; 
const queue2 = new TicketQueue(tickets2, 2); 
console.log(queue2.calculateTime()); // Output: 6