// Create a stack
var Stack=function(){
    this.count=0;
    this.storage={};

    //adds a value into the end of the stack

    this.push=function(value){
        this.storage[this.count]=value;
        this.count++;
    }

    //Remove and returns the value at the end of the stack
    this.pop=function(){
        if(this.count===0){
            return undefined;
        }

        this.count--;
        var result=this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size=function(){
        return this.count;
    }

    //Returns the value at the end of the stack
    this.peek=function(){
        return this.storage[this.count-1]
    }
}

var myStack=new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log("peek "+myStack.peek());
console.log("pop "+myStack.pop());
console.log("peek "+myStack.peek());



