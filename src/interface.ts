interface Person{
    name : string;
    age? : number;
}

interface Developer {
    name : string;
    age? : number;
    skills : string[];
}

//위와 같은뜻임 

interface Developer extends Person{
    skills : string[];
}



const person: Person ={ // = 붙여주기!!
    name : 'kyilee',
    age :20
};

const expert : Developer = {
    name : "seunghyun",
    skills :[ "python","typescript"]
};


const people : Person[] = [person,expert];