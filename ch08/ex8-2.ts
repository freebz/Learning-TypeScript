// 8.2 클래스 속성

class FieldTrip {
    destination: string;

    constructor(destination: string) {
	this.destination = destination; // Ok
	console.log(`We're going to ${this.destination}!`);

	this.nonexistent = destination;
	//   ~~~~~~~~~~~
	// Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
    }
}



const trip = new FieldTrip("planetarium");

trip.destination; // Ok

trip.nonexistent;
//   ~~~~~~~~~~~
// Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
