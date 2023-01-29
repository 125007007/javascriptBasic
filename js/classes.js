class Animal{
    constructor(type, size, numLegs){
        this.type = type;
        this.size = size;
        this.numLegs = numLegs;

    }
    basicInfo(){
        console.log('Type of animal: ' + this.type);
        console.log('Size: ' + this.size);
        console.log('Number of legs: ' + this.numLegs);
    }


}

class Dog extends Animal{
    constructor(type, size, numLegs, loyalty){
        super(type, size, numLegs);
        this.loyalty = loyalty;

    }

    getInfo(){
        super.basicInfo();
        console.log('Loyalty: ' + this.loyalty);
    }

}

class Cat extends Animal{
    constructor(type, size, numLegs){
        super(type, size, numLegs);
    }
    getInfo(){
        super.basicInfo();
    }
}
var dog1 = new Dog('Dog', 'Large', 4, 'Strong');
var cat1 = new Cat('Cat', 'Small', 4);
dog1.getInfo();
cat1.getInfo();

