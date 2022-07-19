function Robot() {
    let self = this;
    self.work = function () {
        return "Я Robot – я просто працюю";
    }
}

function CoffeRobot() {
    let self = this;

    CoffeRobot.prototype = Object.create(Robot.prototype);
    CoffeRobot.prototype.constructor = Robot;

    self.work = function () {
        return "Я CoffeRobot – я варю каву";
    };
}

function RobotDancer() {
    let self = this;
    Robot.call(self);

    self.work = function () {
        return "Я RobotDancer – я просто танцюю";
    }
}

function RobotCoocker() {
    let self = this;
    Robot.call(self);

    self.work = function () {
        return "Я RobotCoocker – я просто готую";
    }
}


let rd = new RobotDancer();
let rc = new RobotCoocker();
let cr = new CoffeRobot();
let r = new Robot();

console.log(rd.work());
console.log(rc.work());
console.log(cr.work());
console.log(r.work());

function loop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].work());
    }
}

console.log("==============================================")

let array = [];
array.push(rd, rc, cr, r);

loop(array);