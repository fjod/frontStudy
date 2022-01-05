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