class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this.#validateNames(value);
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this.#validateNames(value);
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    this.#validateProfession(value);
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#validateSalary(value);
    this.#salary = value;
  }

  #validateNames(value) {
    if (typeof value !== 'string' || !/^[a-zA-Z]+$/.test(value)) {
      throw new Error('Name must be a string with Latin letters only');
    }
    if (value.length < 2 || value.length > 50) {
      throw new Error('Name length must be between 2 and 50 characters');
    }
  }

  #validateProfession(value) {
    if (typeof value !== 'string' || !/^[A-Za-a]+(?:[A-Za-z ]+)*$/.test(value)) {
      throw new Error('Profession must be a string with Latin letters only');
    }
    if (value.length < 0) {
      throw new Error('Profession length must be not empty');
    }
  }

  #validateSalary(value) {
    const MIN_SALARY = 0;
    const MAX_SALARY = 10000;

    if (typeof value !== 'number' || value <= MIN_SALARY || value >= MAX_SALARY || !value) {
      throw new Error(`Salary must be a number between ${MIN_SALARY} and ${MAX_SALARY}`);
    }
  }
}

class Company {
  #employees;
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Employee must be an instace of Employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
  findEmployeeByName(firstName) {
    if (typeof firstName !== 'string' || firstName.trim() === '') {
      throw new Error('Invalid input: firstName must be a non-empty string');
    }
    const employee = this.#employees.find((empl) => empl.firstName === firstName);

    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  removeEmployee(firstName) {
    if (typeof firstName !== 'string' || firstName.trim() === '') {
      throw new Error('Invalid input: firstName must be a non-empty string');
    }

    const indexToRemove = this.#getEmployeeIndex(firstName);
    if (indexToRemove === -1) {
      throw new Error('Employee not found');
    }

    this.#employees.splice(indexToRemove, 1);
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((employee) => employee.firstName === firstName);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, el) => sum + el.salary, 0);
  }
}

export { Employee, Company };
