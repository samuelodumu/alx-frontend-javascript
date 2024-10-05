import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
    ...createEmployeesObject('advertising', ['Dre', 'John', 'Jaden'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));