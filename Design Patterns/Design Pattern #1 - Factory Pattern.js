function Developer(name) {
  this.name = name;
  this.type = 'Developer';
}

function Tester(name) {
  this.name = name;
  this.type = 'Tester';
}

function EmployeeFactory() {
  this.create = (type, name) => {
    if (type === 1) {
      return new Developer(name);
    } else {
      return new Tester(name);
    }
  };
}
const employeeFactory=new EmployeeFactory();
const dev = employeeFactory.create(1, 'Hamza')
const qa = employeeFactory.create(2, 'Waleed')

console.log(dev);
console.log(qa);
