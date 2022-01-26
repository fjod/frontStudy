import axios from "axios";

interface UserProps{
    name?: string; // ? makes it optional
    age?: number;
    id?: number;
}

type Callback = () => void;

export class User{
    events: {
        [key : string] : Callback[] // list of strings, each string is key to list of callbacks
    } = {};

    constructor(private data: UserProps) { }

    get(propName: string) : (number | string){
        return this.data[propName];
    }

    set(update : UserProps) : void{
        // Object.assign(this.data, update);
        this.data = update;
    }

    on(eventName:string, callback: Callback){
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void{
        const handlers = this.events[eventName];

        if (!handlers|| handlers.length === 0){
            return;
        }

        handlers.forEach(cb => cb());
    }
    fetch(){
        axios.get(`http://localhost:3000/users/${this.get('id')}`).then(response => {
            this.set(response.data);
        });
    }
    save(){
        const id = this.get('id');
        if (id){
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        }
        else{
            axios.post(`http://localhost:3000/users`, this.data);
        }
    }
}