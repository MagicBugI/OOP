/* Create a Person class that has a constructor that takes name and surname parameters and contains a showFullName()
 method that displays the person's first and last names.

 From the Person class, the Student class is inherited, the constructor of which, in addition to name and surname,
 takes the parameter year(the year of entering the university).

 In the Student class, you need to override the showFullName(midleName) method to display not only the first and last
 name, but also the middle name(midleName) of the student.

 Also, in the Student class, you need to implement the showCourse() method, which will display the student's 
current course (from 1 to 6). The value of the course will be determined as the difference between the current 
year (to determine independently) and the year of admission to the university year.

Result example:
const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
 */

class Person {
    constructor(name, surename) {
        this.name = name;
        this.surename = surename;
    }
    showFullName() {
        return `${this.name} ${this.surename}`;
    }
}

class Student extends Person {
    constructor(name, surename, year) {
        super(name, surename);
        this.year = year;
    }
    showFullName(midleName) {
        return `${this.name} ${this.surename} ${midleName}`;
    }
    showCourse() {
        const curYear = new Date().getFullYear();
        if(curYear - this.year === 0){
            return 1;
        }else if(curYear - this.year > 0 && curYear - this.year < 7 ){
            return curYear - this.year ;
        }else if(curYear - this.year < 0){
            return ` Coming soon`;
        }else{
            return ` Graduated`; 
        }
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
