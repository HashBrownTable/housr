# ![Housr](https://raw.githubusercontent.com/HashBrownTable/housr/master/etc/banner.png)

Have you ever struggled with finding roommates when you first moved into a new city? How about finding the perfect place, but can't afford it unless you share the cost with someone... Are you a single parent, struggling to find a housing partner as an  affordable option for your family? Are you a student, low income and in debt, trying to make ends meet...

To address these problems, we have envisioned a roommate finding solution -- Housr. 

#What is Housr?
Housr is a roommate finding service that help match you up with potential roommates. 


## Screenshots

![Login Page](https://raw.githubusercontent.com/HashBrownTable/housr/master/etc/pic1.png)

![Matches](https://raw.githubusercontent.com/HashBrownTable/housr/master/etc/pic2.png)

![Chats](https://raw.githubusercontent.com/HashBrownTable/housr/master/etc/pic3.png)



## Running the Code

Housr is completely written in Javascript with AngularJS on the frontend and a Node.JS backend.

It uses MongoDB as a backend and it must be separately configured. A guide can be found at:

http://docs.mongodb.org/manual/installation/


```
# Checkout the source code
git clone https://github.com/HashBrownTable/housr.git

# Install dependencies
gem install compass sass
npm install -g grunt-cli bower yo
npm install
bower install

# Launch in development mode
grunt serve
```


## License

Housr is licensed under the MIT License. See the LICENSE file for more information.
