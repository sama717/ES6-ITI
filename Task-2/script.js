class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        console.log(`Position: (${this.x}, ${this.y})`);
    }

    area() {
        throw "error";
    }

    perimeter() {
        throw "error";
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Square extends Shape {
    constructor(x, y, width) {
        super(x, y);
        this.width = width;
    }

    area() {
        return this.width * this.width;
    }

    perimeter() {
        return 4 * this.width;
    }
}

class Triangle extends Shape {
    constructor(x, y, width, height, sideA, sideB, sideC) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    area() {
        return 0.5 * this.width * this.height;
    }

    perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}


let s = new Square(0, 0, 10);
console.log("Square Area:", s.area());
console.log("Square Perimeter:", s.perimeter());

let c = new Circle(0, 0, 10);
console.log("Circle Area:", c.area());
console.log("Circle Perimeter:", c.perimeter());

let t = new Triangle(0, 0, 10, 10, 6, 8, 10);
console.log("Triangle Area:", t.area());
console.log("Triangle Perimeter:", t.perimeter());
