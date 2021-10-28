class Student{
    constructor(fullName , direction){
        this.fullName = fullName;
        this._direction = direction;
    }
    showFullName(){
        return this.fullName
    }
    nameIncludes(data){
        return this.showFullName().includes(data);
    }
    static studentBuilder(){
        return new this('Ivan' , 'qc');
    }
    get direction(){
        return this._direction;
    }
    set direction(newDirection){
        this._direction = newDirection;
    }
}
/* Usage example: */
const stud1 = new Student('Ivan Petrenko', 'web');
const stud1 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();