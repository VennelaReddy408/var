const person={
    name:"Alice",
    age:30,
    city:"New York"
}
delete person.city;
person.country="USA";
person.age=31;
console.log(person);

const smartphone={
    brand:"Samsung",
    model:"galaxy s21",
    price:8000
}
delete smartphone.model;

console.log(smartphone);

const book={
    title:"Learn Jvascript",
    author:"John smith",
    pages:400
}
book.generation="programmig"

console.log(book)

var arr=[10,20,["apple","banana"],["cat",["dog","elephant"],"fish"],"grape"]
console.log(arr[3][2]);



var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];
console.log(items[2][2][2][0]);
