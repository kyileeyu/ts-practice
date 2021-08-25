"use strict";
//interfact 객체 or class 의 타입을 지정할 때 쓰이는 문법
var Circle = /** @class */ (function () {
    //implements를 사용해서 Circle이 shape의 속성을 충족하겠다는 말임!
    // radius: number; //이거 인수임 , 매개변수 같이 필요한 수임
    // constructor(radius : number){
    //     this.radius = radius;
    // }
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(5, 10)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
