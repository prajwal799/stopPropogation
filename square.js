class Rectangle {
    constructor(a,b){
        this.a = a,
        this.b = b;
    }  
    getName(){
        if(this.a == this.b){
            return `square of rectangle ${this.a * this.b}`;
        }
        else {
            return `area of rectangle ${this.a * this.b}`;
        }
    }
}

const rect = new Rectangle(10,5);
console.log(rect.getName());

const square = new  Rectangle(10,10);
console.log(square.getName());