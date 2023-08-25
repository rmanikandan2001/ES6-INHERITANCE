class Bike {
	constructor(brand) {
		this.bikeName = brand;
	}
	
	present() {
		return this.bikeName;
	}
	
}

class Model extends Bike {
	constructor(brand, model) {
		super(brand);
		this.model = model;
	}
	
	now(){
		return this.present() + this.model;
	}
}

let bike = new Model("Bajaj ", "Pulser 200");

console.log(bike.now())