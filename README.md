# Homework-3

This is the Password Generator application for homework-3.
Users can custom set the password criteria (e.g. upper/lower case, numeric or special characters). All four criteria are selected by default.  
The user can define the password length or have it selected at randomm between a range, also set by the user.  Default lengths are selected at random between 8 and 128 characters. 

A file manifest:

index.html app.js LICENSE README.md

Deployed application site:

https://drthisguy.github.io/Homework-3/index.html

Screen grabs:

https://user-images.githubusercontent.com/48693333/70163147-f29f9a80-168c-11ea-941c-b63fb5414508.png

https://user-images.githubusercontent.com/48693333/70163241-224ea280-168d-11ea-90d2-22b4e232272d.png

https://user-images.githubusercontent.com/48693333/70165106-56779280-1690-11ea-8a22-80bd9d798719.png

Contact: page.c.tyler@gmail.com

Known issues.
I am not reloading the page with checkboxes.  Therfore, when an unchecked box (that was initially checked) is rechecked, it will not be part of the password criteria.  It will be necessary to reload the page and then reset all criteria.

template literals are used therfore, this app is not compatible with older (pre ES6) browsers.  the innerHTML property is in use as well.  Here, it is done in a way so that there are no real security issues since only valid numbers can be read out from the input fields. If a valid length is not taken in the innerHTML property does not execute. 

sources:

https://developer.mozilla.org, 
w3school.com 
google.com 
stackoverflow.com
bootstrap.com
http://beautifytools.com
https://validator.w3.org/nu/