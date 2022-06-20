const PERHOUR = 1200;
const HOUR = 8;

const myDaySalary = () => {
    return HOUR * PERHOUR
};

const monthSalary = (days) => {
    return myDaySalary() * days
}

console.log(monthSalary(20))

//вернет 192000

