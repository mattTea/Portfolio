SQL Zoo Challenges
==================

## Part 2. [SELECT FROM world](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial) challenges

[Details about the `world` table](https://sqlzoo.net/wiki/Read_the_notes_about_this_table.)


3. Give the name and the per capita GDP for those countries with a population of at least 200 million.
```sql
SELECT name, gdp / population
FROM world
WHERE population >= 200000000
```

4. Show the name and population in millions for the countries of the continent 'South America'.
```sql
SELECT name, population / 1000000
FROM world
WHERE continent = 'South America'
```

5. Show the name and population for France, Germany, Italy
```sql
SELECT name, population
FROM world
WHERE name IN ('France', 'Germany', 'Italy')
```

6. Show the countries which have a name that includes the word 'United'
```sql
SELECT name
FROM world
WHERE name LIKE '%United%'
```

7. Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million. Show the countries that are big by area or big by population. Show name, population and area.
```sql
SELECT name, population, area
FROM world
WHERE area > 3000000
OR population > 250000000
```

8. Exclusive OR (XOR). Show the countries that are big by area or big by population but not both. Show name, population and area.
```sql
SELECT name, population, area
FROM world
WHERE area > 3000000
XOR population > 250000000
```

9. Show the name and population in millions and the GDP in billions for the countries of the continent 'South America', using the ROUND function to show values to two decimal places
```sql
SELECT name, ROUND(population / 1000000, 2), ROUND(gdp / 1000000000, 2)
FROM world
WHERE continent = 'South America'
```

10. Show the name and per-capita GDP for those countries with a GDP of at least one trillion. Round value to the nearest 1000
```sql
SELECT name, ROUND(gdp / population, -3)
FROM world
WHERE gdp >= 1000000000000
```

11. Show the name and capital where the name and the capital have the same number of characters
```sql
SELECT name, capital
FROM world
WHERE LENGTH(name) = LENGTH(capital)
```

12. Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word
```sql
SELECT name, capital
FROM world
WHERE LEFT(name, 1) = LEFT(capital, 1)
AND name <> capital
```

13. Find the country that has all the vowels and no spaces in its name
```sql
SELECT name
FROM world
WHERE name LIKE '%a%'
AND name LIKE '%e%'
AND name LIKE '%i%'
AND name LIKE '%o%'
AND name LIKE '%u%'
AND name NOT LIKE '% %'
```


## Part 3. [SELECT FROM nobel](https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial) challenges

Table of Nobel prize winners: `nobel(yr, subject, winner)`


1. Change the query shown so that it displays Nobel prizes for 1950
```sql
SELECT yr, subject, winner
FROM nobel
WHERE yr = 1950
```

2. Show who won the 1962 prize for Literature
```sql
SELECT winner
FROM nobel
WHERE yr = 1962
AND subject = 'Literature'
```

3. Show the year and subject that 'Albert Einstein' won his prize
```sql
SELECT yr, subject
FROM nobel
WHERE winner = 'Albert Einstein'

(1961 -> Physics)
```

4. Give the name of the 'Peace' winners since the year 2000, including 2000
```sql
SELECT winner
FROM nobel
WHERE yr >= 2000
AND subject = 'Peace'
```

5. Show all details (yr, subject, winner) of the Literature prize winners for 1980 to 1989 inclusive
```sql
SELECT yr, subject, winner
FROM nobel
WHERE subject = 'Literature'
AND yr >= 1980
AND yr <= 1989
```

6. Show all details of the presidential winners
```sql
SELECT * FROM nobel
WHERE winner = 'Theodore Roosevelt'
OR winner = 'Woodrow Wilson'
OR winner = 'Jimmy Carter'
OR winner = 'Barack Obama'
```

7. Show the winners with first name John
```sql
SELECT winner
FROM nobel
WHERE winner LIKE 'John%'
```

8. Show the year, subject, and name of Physics winners for 1980 together with the Chemistry winners for 1984
```sql
SELECT * FROM nobel
WHERE yr = '1980'
AND subject = 'Physics'
OR yr = '1984'
AND subject = 'Chemistry'
```

9. Show the year, subject, and name of winners for 1980 excluding Chemistry and Medicine
```sql
SELECT * FROM nobel
WHERE yr = '1980'
AND subject <> 'Chemistry'
AND subject <> 'Medicine'
```

10. Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)
```sql
SELECT * FROM nobel
WHERE yr < 1910
AND subject = 'Medicine'
OR yr >= 2004
AND subject = 'Literature'
```

11. Find all details of the prize won by PETER GRÜNBERG
```sql
SELECT * FROM nobel
WHERE winner = 'Peter Grünberg'
```

12. Find all details of the prize won by EUGENE O'NEILL
```sql
SELECT * FROM nobel
WHERE winner = 'Eugene O''Neill'

(Needed to use 2 single quotes in surname)
```

13. List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order
```sql
SELECT winner, yr, subject FROM nobel
WHERE winner LIKE 'Sir%'
ORDER BY yr DESC, winner ASC
```

14. The expression subject IN ('Chemistry','Physics') can be used as a value - it will be 0 or 1. Show the 1984 winners and subject ordered by subject and winner name; but list Chemistry and Physics last.
```sql
SELECT winner, subject
FROM nobel
WHERE yr = '1984'
ORDER BY subject IN ('Physics', 'Chemistry'), subject, winner
```


## Part 4 [SELECT within SELECT](https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial)

[Using the `world` table](https://sqlzoo.net/wiki/Read_the_notes_about_this_table.)


1. List each country name where the population is larger than that of 'Russia'.
```sql
SELECT name FROM world
  WHERE population >
    (SELECT population FROM world
    WHERE name='Russia')
```

2. Show the countries in Europe with a per capita GDP greater than 'United Kingdom'.
```sql
SELECT name FROM world
WHERE continent = 'Europe'
AND gdp / population >(
  SELECT gdp / population FROM world
  WHERE name = 'United Kingdom'
)
```

3. List the name and continent of countries in the continents containing either Argentina or Australia. Order by name of the country.
```sql
SELECT name, continent FROM world
WHERE continent = (
  SELECT continent FROM world
    WHERE name = 'Argentina'
)
OR continent = (
  SELECT continent FROM world
    WHERE name = 'Australia'
)
ORDER BY name
```
