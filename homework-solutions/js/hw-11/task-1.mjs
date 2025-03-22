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
    if (typeof value !== 'string' || !value) {
      throw new Error('Incorrect data type');
    } else {
      this._firstName = value;
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || !value) {
      throw new Error('Incorrect data type');
    } else {
      this._lastName = value;
    }
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || !value) {
      throw new Error('Incorrect data type');
    } else {
      this._profession = value;
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Incorrect data type');
    } else {
      this.#salary = value;
    }
  }
}

class Company {
  #employees;
  constructor(title, phone, address) {
    if (typeof title !== 'string' || typeof phone !== 'number' || typeof address !== 'string') {
      throw new Error('Incorrect data types');
    }
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
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
