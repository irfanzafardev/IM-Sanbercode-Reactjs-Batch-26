// Tugas 7 by Irfan Zafar

// soal 1

console.log("---Soal 1---");
console.log("Release 0");
class Animal {
	constructor(name, legs = 4, cold_blooded = false) {
		this.animalName = name;
		this.animalLegs = legs;
		this.animalColdBlooded = cold_blooded;
	}

	set setName(name) {
		this.animalName = name;
	}

	get getName() {
		return this.animalName;
	}

	set setLegs(legs) {
		this.animalLegs = legs;
	}

	get getLegs() {
		return this.animalLegs;
	}

	set setColdBlooded(cold_blooded) {
		this.animalColdBlooded = cold_blooded;
	}

	get getColdBlooded() {
		return this.animalColdBlooded;
	}
}

var sheep = new Animal("Shaun");

console.log(sheep.getName);
console.log(sheep.getLegs);
console.log(sheep.getColdBlooded);
sheep.setLegs = 3;
console.log(sheep.getLegs);

console.log("Release 1");

class Ape extends Animal {
	constructor(name, legs, cold_blooded, yell = "Auooo") {
		super(name, legs, cold_blooded);
		this.animalYell = yell;
	}

	set setYell(yell) {
		this.animalYell = yell;
	}

	get getYell() {
		return this.animalYell;
	}
}

class Frog extends Animal {
	constructor(name, legs, cold_blooded, jump = "Hop Hop") {
		super(name, legs, cold_blooded);
		this.animalJump = jump;
	}

	set setJump(jump) {
		this.animalJump = jump;
	}

	get getJump() {
		return this.animalJump;
	}
}

var sungokong = new Ape("kera sakti");
// sungokong.yell();
sungokong.legs = 2;
console.log(sungokong.getYell);
console.log(sungokong.getName);
console.log(sungokong.legs);
console.log(sungokong.getColdBlooded);

var kodok = new Frog("buduk");
// kodok.jump();
console.log(kodok.getJump);
console.log(kodok.getName);
console.log(kodok.getLegs);
console.log(kodok.getColdBlooded);

// soal 2

console.log("---Soal 2---");

class Clock {
	constructor({ template }) {
		this.template = template;
	}

	render() {
		var date = new Date();

		var hours = date.getHours();
		if (hours < 10) hours = "0" + hours;

		var mins = date.getMinutes();
		if (mins < 10) mins = "0" + mins;

		var secs = date.getSeconds();
		if (secs < 10) secs = "0" + secs;

		var output = this.template
			.replace("h", hours)
			.replace("m", mins)
			.replace("s", secs);

		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		// this.timer = setInterval(render, 1000);
	}
}

var clock = new Clock({
	template: "h:m:s",
});
clock.start();
