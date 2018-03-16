# orientation-05

This is a collection of exercises from the NSS server side development program

the requirements for each are listed below for clarity of purpose

##requirements

exercise 5:

Create a JavaScript file to act as a Node.js program named `args.js`. This program
should accept at least one number as a command-line argument. The arguments
should be [summed up][sum] into a single value.

Don't worry about [floating point][floats] rounding errors.

Expected:

```bash
$ ./args.js 1
1
$ ./args.js -.42 0 3.14
2.72
$ ./args.js .1 .2
0.30000000000000004
```

exercise 6:
## Requirements

For this exercise we are going to use a popular Node.js module: [chalk][chalk]

Create a JavaScript file to act as a Node.js program named `flag.js`. This program
print out a red, white, and blue American flag in the terminal. The stars should
be white bold text with a blue background, the red stripes should be spaces with
a red background, and the white stripes should be spaces with a white
background.

Because of the limitations of the terminal, don't worry about getting all 50
stars exactly as they are on the official flag. However, make sure all 13
stripes are on the flag. Additionally make the flag 50 characters wide and have
1 space of padding before and after the stars.

Use the following format below.

Expected:

```bash
$ ./flag.js
```

![Terminal Flag](http://i.imgur.com/DOMxrXU.png)


Exercise 7:

## Requirements

Create a JavaScript file to act as a Node.js program named `file-io.js`. This program
should accept a single argument which should be a file path. Executing the
program will print the contents of that file onto the terminal through the [stdout](http://node.readthedocs.io/en/stable/api/process/#processstdout)
stream. Executing the program without an argument should simply return without
printing anything. This functionality to be similar to the `cat` command.

Optional: create a second file named `file-io.json` for your program to read.

Example:

```json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```

```bash
$ ./file-io.js 07.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}

```
exercise 8:
## Requirements

Create a JavaScript file to act as a Node.js program named `async.js`. This program
should work exactly the same as the previous exercise. However you cannot use a
synchronous method.

Optional: create a second file named `08.json` for your program to read.

Example:

```json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```

Expected:

```bash
$ ./08.js 08.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}

```
Exercise 9:
## Requirements

Create a JavaScript file to act as a Node.js program named `streams.js`. This program
should read a file `languages.json` and output to a file `languages_caps.json`. Use the second
command-line argument to declare the destination. You will not need to make your own `Readable` for this exercise. Simply use
[`fs.createReadStream`][createreadstream] instead. In between, all letters
should be capitalized with your own `Transform` stream. Then the data should be passed to your own `Writable` stream. The [`fs.appendFile`][appendfile] will be helpful
for this task.

In addition, use some other method in the `fs` module make sure executing the
program multiple times does not continue making a larger and larger
`09.Caps.json` file.

Expected:

```bash
$ cat 09.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
$ ./09.js 09_Caps.json
$ cat 09_Caps.json
{
  "LANGUAGES": {
    "JAVASCRIPT": "AWESOME",
    "C++": "DIFFICULT",
    "BASIC": "OLD"
  }
}
```

Exercise 10:

## Requirements
1. Create an ERD for the Music History databse
  * Open in your Database Browser
  * Use one of the tools listed above to create an ERD

Exercise 11:

## Instructions

1. Open up the database file in the *DB Browser for SQLite* application to see it
1. Copy and paste the queries below into your `queries.sql` file and comment them out. Then you can write a query for each requrement and refer back to them later as a resource
1. When you have written a query, paste it into DB Browser and test it by clicking the tab labeled "Execute SQL"

For each of the following exercises, provide the appropriate query. Everything from class and the [Sqlite](http://www.sqlite.org/) documentation for SQL [keywords](https://www.sqlite.org/lang.html) and [functions](https://www.sqlite.org/lang_corefunc.html) is fair game.

1. Query all of the entries in the `Genre` table
1. Using the `INSERT` statement, add one of your favorite artists to the `Artist` table.
1. Using the `INSERT` statement, add one, or more, albums by your artist to the `Album` table.
1. Using the `INSERT` statement, add some songs that are on that album to the `Song` table.
1. Write a `SELECT` query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the [`LEFT JOIN`](https://www.tutorialspoint.com/sql/sql-using-joins.htm) keyword sequence to connect the tables, and the `WHERE` keyword to filter the results to the album and artist you added. Here is some more info on [joins](http://www.dofactory.com/sql/join) that might help.
    > **Reminder:** Direction of join matters. Try the following statements and see the difference in results.

    ```
    SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
    SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;
    ```
1. Write a `SELECT` statement to display how many songs exist for each album. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
1. Write a `SELECT` statement to display how many songs exist for each artist. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
1. Write a `SELECT` statement to display how many songs exist for each genre. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
1. Using `MAX()` function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
1. Using `MAX()` function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
1. Modify the previous query to also display the title of the album.

Exercise 13:

## Requirements

A friend of yours owns a small family business and wants to start moving all of their business records into a database. Using your NodeJS skills, they want you to create a SQLite database to store information about their employees.

1. Create a database that is saved on disk.

1. Create a table titled `employees` with the following columns:
  - id, firstName, lastName, jobTitle, address

1. Create an array of at least 6 objects. Each object should have a key value pair matching each column name in the `employees` table.
  ```js
  eg: let array = [
    { id: 0, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
    ...,
  ]
  ```  

1. Insert each of the employee objects into the database.

1. Write a statement to query the database and `console.log()` all employee records.

1. Write a statement to query the database and `console.log()` each employees `jobTitle`.

1. Write a statement to query the database and `console.log()` each employees `firstName`, `lastName` and `address` only.

## Bonus Features

1. Instead of using an array in the .js file, create a JSON file of employees to require into the js file. Use this to populate the table.

1. Your friend has decided that they want to add a salary column to the employees table. Make sure to add a salary key value pair to each of the employee objects. Then drop the existing employees table, update the schema to accept a salary column, and repopulate the table.

1. Write a statement that returns all employees of a specified `jobTitle`.

##usage

npm install chalk sqlite3