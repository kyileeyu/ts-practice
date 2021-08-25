//interfact 객체 or class 의 타입을 지정할 때 쓰이는 문법


//Shape라는 interface 생성
interface Shape{
    getArea(): number;
    //shape 라는 interface에는 getArea라는 함수가 꼭 있어야 하며, 해당 함수의 반환값은 숫자입니다.
} 

class Circle implements Shape {
    //implements를 사용해서 Circle이 shape의 속성을 충족하겠다는 말임!
    // radius: number; //이거 인수임 , 매개변수 같이 필요한 수임
    // constructor(radius : number){
    //     this.radius = radius;
    // }

    constructor( public radius : number){
        this.radius = radius;
    }

    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}


class Rectangle implements Shape {
    // width : number;
    // height : number;
    constructor (public width : number, public height:number){ //public : 특정값이 코드 밖에서도 조회 가능
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

const shapes : Shape[] = [new Circle(5), new Rectangle(5,10)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})