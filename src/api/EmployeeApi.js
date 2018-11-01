import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
  {
    id: '1',
    name: 'Diego Michel',
    identification: '40224041869',
    department: 'IT',
    jobTitle: 'Tecnico Servidores',
    monthSalary: '50000'
  },
  {
    id: '2',
    name: 'Hipolito Mejia',
    identification: '40224041869',
    department: 'IT',
    jobTitle: 'Tecnico Servidores',
    monthSalary: '50000'
  },
  {
    id: '3',
    name: 'Felix Bautista',
    identification: '40224041869',
    department: 'IT',
    jobTitle: 'Tecnico Servidores',
    monthSalary: '50000'
  },
  {
    id: '4',
    name: 'Danilo Medina',
    identification: '40224041869',
    department: 'IT',
    jobTitle: 'Tecnico Servidores',
    monthSalary: '50000'
  },
  {
    id: '5',
    name: 'Juan Loto',
    identification: '40224041869',
    department: 'IT',
    jobTitle: 'Tecnico Servidores',
    monthSalary: '50000'
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (employee) => {
  return replaceAll(employee.name, ' ', '-');
};

class EmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }

  static saveEmployee(employee) {
    employee = Object.assign({}, employee); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minemployeeTitleLength = 1;
        if (employee.name.length < minemployeeTitleLength) {
          reject(`Title must be at least ${minemployeeTitleLength} characters.`);
        }

        if (employee.id) {
          const existingemployeeIndex = employees.findIndex(a => a.id === employee.id);
          employees.splice(existingemployeeIndex, 1, employee);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new employees in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          employee.id = generateId(employee);
          employee.watchHref = `http://www.pluralsight.com/employees/${employee.id}`;
          employees.push(employee);
        }

        resolve(employee);
      }, delay);
    });
  }

  static deleteEmployee(employeeId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfemployeeToDelete = employees.findIndex(employee => employee.id === employeeId);
        employees.splice(indexOfemployeeToDelete, 1);
        resolve();
      }, delay);
    });
  }


  static getEmployee(employeeId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingemployeeIndex = employees.findIndex(employee => employee.id === employeeId);

        const employeeFound = Object.assign({}, employees[existingemployeeIndex]);

        resolve(employeeFound);

      }, delay);
    });
  }

}

export default EmployeeApi;
