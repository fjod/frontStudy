class Boat{
    color: string = 'red';

    get formattedColor(){
        return `Color${this.color}`;
    }

    @testDec
    pilot():void {
        console.log('swish');
    }
}

function testDec(target : any, key: string):void{
console.log('Target:', target);
    console.log('key:', key);
}
