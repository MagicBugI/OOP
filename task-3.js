const instancesList = [];
class Worker{
    #experience = 1.2
    constructor(fullName , dayRate , workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        instancesList.push(this)
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.showSalary() * this.#experience;
    }
    get experience(){
        return this.#experience
    }
    set experience(newExp){
        this.#experience = newExp;
    }

}
const worker1 = new Worker("John Johnson", 20, 23);               
worker1.experience = 1.5;
const worker2 = new Worker("Tom Tomson", 48, 22);
worker2.experience = 1.5;
const worker3 = new Worker("Andy Ander", 29, 23);
worker3.experience = 1.5;

instancesList.sort((a , b) => a.showSalaryWithExperience()- b.showSalaryWithExperience())
.map(e=>console.log(e.showSalaryWithExperience()));
