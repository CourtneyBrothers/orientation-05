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


  //1.
  employeeArray.forEach((obj) => {
    
    db.run(`INSERT INTO employees VALUES (${obj.id}, '${obj.firstName}', '${obj.lastName}','${obj.jobTitle}','${obj.address}')`);
  });


//with destructuring
 // employeeArray.forEach(({id},{firstName},{lastName},{jobTitle},{address}) => {
    
    //db.run(`INSERT INTO employees VALUES (${id}, '${firstName}', '${lastName}','${jobTitle}','${address}')`);
  //});


//2. Write a statement to query the database and console.log() all employee records.
db.all("SELECT * FROM employees", (err, allRows) => {
  
  (err,data) =>{
    if(err){
      return console.log('Dang',err.toString());
    }
    console.log('no error');
  }

    // allRows is an array containing each row from the query
    allRows.forEach(each => {
      console.log(each.id, each.first + ' ' + each.last, each.jobTitle, each.address);
    });
  });

//3.
db.all("SELECT * FROM employees", (err, allRows) => {
    // allRows is an array containing each row from the query
    allRows.forEach(each => {
      console.log(each.jobTitle);
    });
  });

  //4
  db.all("SELECT * FROM employees", (err, allRows) => {
    // allRows is an array containing each row from the query
    allRows.forEach(each => {
      console.log(each.first + ' ' + each.last, each.jobTitle);
    });
  });

  //db.all db.each 