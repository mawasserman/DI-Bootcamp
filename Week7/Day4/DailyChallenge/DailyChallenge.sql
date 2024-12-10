-- Part I

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE REFERENCES Customer(id)
);

-- Insert those customers
INSERT INTO Customer (first_name, last_name)
VALUES 
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');

-- Insert those customer profiles, use subqueries
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES 
    (true, (SELECT id FROM Customer WHERE first_name = 'John')),
    (false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
SELECT c.first_name 
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(*)
FROM CustomerProfile
WHERE isLoggedIn = false;

-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(50) NOT NULL
);

-- Insert those books :
INSERT INTO Book (title, author)
VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To Kill a Mockingbird', 'Harper Lee');

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

-- Insert those students:
INSERT INTO Student (name, age)
VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
CREATE TABLE Library (
    book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Add 4 records in the junction table, use subqueries.
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
     (SELECT student_id FROM Student WHERE name = 'John'), 
     '2022-02-15'),
     
    ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'), 
     (SELECT student_id FROM Student WHERE name = 'Bob'), 
     '2021-03-03'),
     
    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
     (SELECT student_id FROM Student WHERE name = 'Lera'), 
     '2021-05-23'),
     
    ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
     (SELECT student_id FROM Student WHERE name = 'Bob'), 
     '2021-08-12');

-- Display the data
-- Select all the columns from the junction table
SELECT * FROM Library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(s.age)
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM Student WHERE name = 'Patrick';
-- the student will be removed from library