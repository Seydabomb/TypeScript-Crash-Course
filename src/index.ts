/* This course is based on the playlist on Youtube by Net Ninja. 
https://youtube.com/playlist?list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&si=xOG5XnktpzbA-vTR
*/

/* ======================== Installing & Compiling ========================= */

// let age: number = 30;
// let firstName: string = "Mario";
// let isFictional: boolean;

// age = 31;

// firstName = "Luigi";

// isFictional = true;

// let planet = "Earth";
// let moons = 1;
// let isLarge = false;

// planet = "Saturn";
// moons = 145;
// isLarge = true;

// let something: null;
// let anotherThing: undefined;

// something = null;
// anotherThing = undefined;

/* ======================== Using tsconfig ========================= */
// console.log("hello, ninjas!!!");

/* ======================== Arrays & Object Literals ========================= */
// Now names can only a string array
// const names: string[] = ["Mario", "Luigi", "Peach"];
// const ages: number[] = [25, 28, 24];

// names.push("Bowser");
// ages.push(35);

// const fruits = ["apples", "pears", "bananas", "mangos"];

// fruits.push("peaches");

// const f = fruits[3];

// const things = [1, true, "hello"];

// const t = things[0];

// ---- Object Literals
// user must have the properties of firstName, age, and id with their respective types
// const user: { firstName: string; age: number; id: number } = {
// 	firstName: "Mario",
// 	age: 30,
// 	id: 1,
// };

// user.firstName = "Peach";
// user.id = 2;
// console.log(user);

// const person = {
// 	name: "Luigi",
// 	score: 35,
// };

// person.name = "Bowser";
// person.score = 40;
// console.log(person);

/* ======================== Functions ========================= */
// // a must be a number, b must be a number, and our function must output a number
// function addTwoNumbers(a: number, b: number): number {
// 	return a + b;
// }

// // a must be a number, b must be a number, and our function must output a number
// const subtractTwoNumbers = (a: number, b: number): number => {
// 	return a - b;
// };

// console.log(addTwoNumbers(3, 9));
// console.log(subtractTwoNumbers(3, 9));

// // items is a number array so now we can attach methods to an array method
// function addAllNumbers(items: number[]) {
// 	// attaching the .reduce() method, adds them all up and starts at position zero
// 	const total = items.reduce((a, c) => a + c, 0);
// 	console.log(total);
// }
// addAllNumbers([5, 7, 9, 11, 3, 2, 1]);

// function formatGreeting(name: string, greeting: string): string {
// 	return `${greeting}, ${name}`;
// }

// const result = formatGreeting("Mario", "Hello");
// console.log(result);

/* ======================== Any Type ========================= */
// let title;

// title = 25;
// title = {
// 	hello: "world",
// };

// let things: any[] = ["hello", true, 30, null];

// things.push({ id: 123 });
// console.log(things);

// function addTogether(value: any): any {
// 	return value + value;
// }

// const resultOne = addTogether("hello");
// const resultTwo = addTogether(3);
// console.log(resultOne, resultTwo);

/* ======================== Tuples ========================= */
// const person: [string, number, boolean] = ["mario", 30, true];
// let hsla: [number, string, string, number];
// hsla = [200, "100%", "50%", 1];

// let xy: [number, number];
// xy = [94.7, 20.1];

// function useCoords(): [number, number] {
// 	// get coords
// 	const lat = 100;
// 	const long = 50;

// 	return [lat, long];
// }

// const [lat, long] = useCoords();

// // named tuples
// let user: [name: string, age: number];

// user = ["peach", 25];
// console.log(user[0]);

/* ======================== Interfaces ========================= */
// interface Author {
// 	name: string;
// 	avatar: string;
// }

// const authorOne: Author = { name: "mario", avatar: "/img/mario.png" };

// interface Post {
// 	title: string;
// 	body: string;
// 	tags: string[];
// 	create_at: Date;
// 	author: Author;
// }

// const newPost: Post = {
// 	title: "My first post",
// 	body: "something interesting",
// 	tags: ["gaming", "tech"],
// 	create_at: new Date(),
// 	author: authorOne,
// };

// console.log(newPost);

// function createPost(post: Post) {
// 	console.log(`Created post ${post.title} by ${post.author.name}`);
// }

// createPost(newPost);

// // with arrays

// let posts: Post[] = [];
// posts.push(newPost);

/* ======================== Type Alias ========================= */
// type Rgb = [number, number, number];

// function getRandomColor(): Rgb {
// 	// Returns a number between 0 and 255
// 	const r = Math.floor(Math.random() * 255);
// 	const g = Math.floor(Math.random() * 255);
// 	const b = Math.floor(Math.random() * 255);

// 	return [r, g, b];
// }

// const colorOne = getRandomColor();
// const colorTwo = getRandomColor();
// console.log(colorOne, colorTwo);

// // Object literal
// type User = {
// 	name: string;
// 	score: number;
// };

// const userOne: User = { name: "Mario", score: 75 };

// function formatUser(user: User): void {
// 	console.log(`${user.name} has a score of ${user.score}`);
// }

// formatUser(userOne);
// formatUser({ name: "Yoshi", score: 100 });

/* ======================== Union Types ========================= */
// // EX 1
// let someID: number | string;

// someID = 1;
// someID = "2";

// // EX 2
// let email: string | null = null;
// email = "mario@netninja.dev";
// email = null;

// // EX 3
// type ID = number | string;
// let anotherID: ID;

// anotherID = "1koo3k2o3k42";
// anotherID = 5;

// EX 4
// function swapIDType(id: ID): ID {
// 	// can only use properties and methods common to both number and string types
// 	// parseInt(ID) --> not allowed
// 	parseInt(ID);

// 	return ID;
// }

// swapIDType("5");

/* ======================== Type Guards ========================= */
// type ID = number | string;

// function swapIDType(id: ID) {
// 	if (typeof id === "string") {
// 		// can use string methods
// 		return parseInt(id);
// 	} else {
// 		// can use number methods and properties
// 		return id.toString();
// 	}
// }

// const ID_1 = swapIDType(1);
// const ID_2 = swapIDType("2");
// console.log(ID_1, ID_2);

// // tagged interfaces

// interface User {
// 	type: "user";
// 	username: string;
// 	email: string;
// 	id: ID;
// }

// interface Person {
// 	type: "person";
// 	firstName: string;
// 	age: number;
// 	id: ID;
// }

// function logDetails(value: User | Person) {
// 	if (value.type === "user") {
// 		console.log(value.email, value.username);
// 	}
// 	if (value.type === "person") {
// 		console.log(value.firstName, value.age);
// 	}
// }
