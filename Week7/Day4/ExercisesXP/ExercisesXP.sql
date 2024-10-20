-- Exercise 1

-- 1.1 Get a list of all the languages, from the language table
SELECT * FROM language;

SELECT name FROM language; 

--1.2 Get a list of all films joined with their languages – select the following details : film title, description, and language name
SELECT * FROM film;

SELECT film.title, film.description, language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

--1.3 Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name
SELECT film.title, film.description, language.name
FROM film
RIGHT OUTER JOIN language
ON film.language_id = language.language_id;

--1.4 Create a new table called new_film with the following columns : id, name. Add some new films to the table
CREATE TABLE new_film(
 id SERIAL PRIMARY KEY,
 name VARCHAR (50) NOT NULL
);

INSERT INTO new_film (name)
VALUES
    ('Happy Pot'),
	('Cookie Scream'),
	('Que bom que Andre Marques fez o Mocoto');
	
--1.5 Create a new table called customer_review, which will contain film reviews that customers will make.Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.It should have the following columns:
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(100), 
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT, 
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

--1.6 Add 2 movie reviews. Make sure you link them to valid objects in the other tables
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (1, 1, 'Great Movie! Like Cheech & Chong', 9, 'I really enjoyed the movie, the plot was captivating!'),
    (2, 2, 'Bad', 2, 'It was a decent film, but I had too wait 3h after eating meat to watch it.');
	
--1.7 Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1;

SELECT * FROM customer_review;
-- The movie was also deleted from the customer_review table because I have delete cascade on the film_id


-- Exercise 2

--2.1 Use UPDATE to change the language of some films. Make sure that you use valid languages
UPDATE film
SET language_id = 2
WHERE film_id IN (133); 

UPDATE film
SET language_id = 3
WHERE film_id IN (8); 

UPDATE film
SET language_id = 4
WHERE film_id IN (6); 

UPDATE film
SET language_id = 5
WHERE film_id IN (213); 

UPDATE film
SET language_id = 6
WHERE film_id IN (13); 

--2.2 Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
SELECT * FROM customer;
--Not sure about what was asked...

--2.3 We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review; -- It is an easy step

--2.4 Find out how many rentals are still outstanding (ie. have not been returned to the store yet)
SELECT * FROM rental;

SELECT COUNT(*) AS outstanding
FROM rental
WHERE return_date IS NULL;

--2.5 Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.film_id, film.replacement_cost FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL 
ORDER BY film.replacement_cost DESC
LIMIT 30; 

--2.6 Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?

--2.6 The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT * FROM film
WHERE description ILIKE '%sumo wrestler%' 
AND film_id IN 
(SELECT film_id FROM film_actor 
 WHERE actor_id IN 
(SELECT actor_id FROM actor 
 WHERE first_name = 'Penelope' AND last_name = 'Monroe')
);
--Park Citizen

--2.6 The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM film_category;
SELECT * FROM category;  --saw that documentary is 6

SELECT * FROM film
JOIN film_category ON film.film_id = film_category.film_id
WHERE film.length < 60
  AND film.rating = 'R'
  AND film_category.category_id = 6;
--Cupboard Sinners

--2.6 The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT * FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
  AND rental.rental_id IN (
      SELECT rental_id
      FROM rental
      WHERE customer_id = (
          SELECT customer_id 
          FROM customer 
          WHERE first_name = 'Matthew' AND last_name = 'Mahan'
      )
      AND rental_rate > 4.00
  );
--Sugar Wonka

--2.6 The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT * FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.customer_id = (
          SELECT customer_id 
          FROM customer 
          WHERE first_name = 'Matthew' AND last_name = 'Mahan'
      )
  AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
  AND film.replacement_cost > (SELECT AVG(replacement_cost) FROM film);
--Stone Fire
