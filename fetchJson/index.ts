import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
   id: number;
   title: string;
   completed: boolean;
}

axios.get(url).then(r => {
   const todo = r.data as Todo;
   const id = todo.id;
   const title = todo.title;
   const finished = todo.completed;

   logToDo(id,title,finished);
});

const logToDo: (id:number, title:string, completed:boolean) => void //annotation
    = (id1, title, completed) =>
{ //implementation
   console.log(`
   The Todo with Id: ${id1}
   Title = ${title} is finished ${completed}
   `)
};

const log2 = (id:number, title:string, com : boolean): void => { //short annotation

}

let point: {x:number;}
const json = '{"x" :10, "y":20}'
const c:{x:number;y:number} = JSON.parse(json);
console.log(c.y);

const add = (a:number,b:number) => { //function with arrow
   return a+b;
};

function d(a:number,b:number):number { //named function
   return a/b;
}

const mul = function (a:number, b:number):number{return a*b;}; //anon function assigned to variable

const w =  {
   date: new Date(),
  weather: 'sunny'
};
const logW = (t : {date:Date, weather: string}):void =>{
   console.log(t.date);
};
logW(w);

//destructuring
const logD = ({date,weather} : {date:Date, weather: string}):void =>{
   console.log(date);
};

const drink = {
   color: 'brown',
   carb: true,
   sugar : 40
};

const pepsi = ['brown', true, 40]; //array
const pepsi2 : [string, boolean, number] = ['brown', true, 40]; //tuple
pepsi[0] = 1;
pepsi2[0] = 1;
pepsi2[9] = 1;

type Drink = [string, boolean, number];
const pepsi3:Drink= ['brown', true, 40];

interface testI  {
   name: string;
   year: number;
}
const testO = { name : ' abc', year : 200}
const test2 = { name : ' abc', year : 200, qq:false}
const test3 = {  year : 200, qq:false, name : 'aa'}

const print = (v:testI) : void =>{
   console.log(v.year);
}
print(testO); // objects do not implement interfaces directly, but ts can look up if object has needed fields/functions
print(test2);
print(test3);