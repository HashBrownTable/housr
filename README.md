# ![Housr](https://raw.githubusercontent.com/HashBrownTable/housr/master/etc/banner.png)


Housr (pronounced House-er) is a roommate finding service targeted towards anyone who would prefer to save some money by pooling money with a group of people.

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
