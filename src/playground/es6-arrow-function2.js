const add =  (a, b) => {
    return a + b;
};

console.log(add(55, 1001));

const user = {
    name: 'Dave',
    cities: ['Perth', 'Aberdeen', 'Bogota'],
    
    printPlacesLived(){  
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
           
        
    }
};

console.log (user.printPlacesLived());


const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 8,

   multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);

}
};

console.log(multiplier.multiply());