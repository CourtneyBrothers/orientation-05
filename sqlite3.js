const { Database } = require('sqlite3').verbose();

// Returns a new database object and automatically opens the database
// Changes will persist once connection closes
// Database method accepts a callback function for successful connection
const db = new Database('example.sqlite', () => console.log('Connected!'));

db.run("CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, jobTitle TEXT, address TEXT)");

let employeeArray = [
    { id: 0, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Casr', address: '100 Somewhere Lane' },
    { id: 1, firstName: 'jed', lastName: 'Smit', jobTitle: 'Cashr', address: '200 Somewhere Lane' },
    { id: 2, firstName: 'jim', lastName: 'Smi', jobTitle: 'Cashir', address: '300 Somewhere Lane' },
    { id: 3, firstName: 'kevin', lastName: 'Sm', jobTitle: 'ier', address: '400 Somewhere Lane' },
    { id: 4, firstName: 'Fran', lastName: 'mith', jobTitle: 'shier', address: '500 Somewhere Lane' },
    { id: 5, firstName: 'DLK', lastName: 'ith', jobTitle: 'ashier', address: '600 Somewhere Lane' }
  ]

  employeeArray.forEach((obj) => {
    // Using ES6 string templating, we can create an insert statement for each object
    db.run(`INSERT INTO employees VALUES (${obj.id}, '${obj.firstName}', '${obj.lastName}','${obj.jobTitle}','${obj.address}')`);
  });