## Problem Breakdown Process

1. Take user story -> extract nouns and verbs

2. Nouns are the objects, verbs are the messages (methods) to send to the objects

3. Add objects and messages into a table...

Object | Messages
-------------------- | -----------------------
controller | 
passenger | 
plane | flying?
airport | land_plane


4. Map methods to objects to see which messages can be sent to which objects

5. Draw out how they need to interact

6. How would the user expect to use the program
    - Run through an example using irb, for example

```
2.5.0 :001 > airport = Airport.new(10)
 => #<Airport:0x00007fd90a8cab00 @planes=[], @capacity=10> 

2.5.0 :002 > plane1 = Plane.new
 => #<Plane:0x00007fd90a8e2138> 

2.5.0 :003 > airport.land_plane(plane1)
 => [#<Plane:0x00007fd90a8e2138>]
  
```

7. Write down series of the simplest things to build up from (this can eventually become your tests)

_Below example from roman numeral converter_

```
return a single type (string)
```

```
converts 0 to “”
```

```
converts 1 to “I”
```

```
converts 2 to “II”
```

```
converts 5 to “V”
```

8. Each object can be a separate file
