# Homework-3

This is the Password Generator application for homework-3 (first JS assignment ever).
Users can custom set the password criteria (e.g. upper/lower case, numeric or special characters). All four criteria are selected by default.  
The user can define the password length or have it selected at random between a range, also set by the user.  Default lengths are selected at random between 8 and 128 characters.  Obviously, there are better ways to generate random characters and if I did it again, things would be different. 

A file manifest:

index.html app.js LICENSE README.md

Deployed application site:

https://drthisguy.github.io/03-Password-Generator

Screen grabs:

https://user-images.githubusercontent.com/48693333/70163147-f29f9a80-168c-11ea-941c-b63fb5414508.png

https://user-images.githubusercontent.com/48693333/70163241-224ea280-168d-11ea-90d2-22b4e232272d.png

https://user-images.githubusercontent.com/48693333/70165106-56779280-1690-11ea-8a22-80bd9d798719.png

Contact: page.c.tyler@gmail.com

Known issues.
I am not reloading the page with non-reusable checkboxes.  Therefore, when an unchecked box (that was initially checked) is rechecked, it will not be part of the password criteria.  It will be necessary to reload the page and then reset all criteria.

template literals are used so this app is not compatible with older (pre ES6) browsers.  Beware of the innerHTML property  in use here.  

sources:

https://developer.mozilla.org, 
w3school.com 
google.com 
stackoverflow.com
bootstrap.com
http://beautifytools.com
https://validator.w3.org/nu/
