class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getInfo(){
        return `${this.name}의 나이는 ${this.age}세 입니다`
    }

}

export default Student;