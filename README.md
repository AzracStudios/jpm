CWP is a CLI tool that helps you in creating web projects quickly. This project was built to understand how CLIs work. The available project templates are:
* **Web CSS** (Simple Html project with css for styling)
* **Web SCSS** (Simple Html project with scss for styling)
* **Web SASS** (Simple Html project with sass for styling)
* **Web Bootstrap** (Simple Html project with bootstrap for styling)
* **Web PWA** (Simple Html project with PWA setup)
* **Express App** (Simple HTML project with express server setup)
* **React App** (Fresh react app with all the broilerplate code removed)
* **Next App** (Fresh next app with all the broilerplate code removed)

Installation:
* In an empty directory, clone this repository with the command
* ```$ git clone https://github.com/AzracStudios/cwp ```
* Then run ```$ npm i; mv ./cwp .cwp; sudo npm link``` to install and setup **cwp**
* With that, you are all good to go! 

Creating a project:
* In an empty direactory, run the command ```$ cwp```
* Next, select a project template
* And then, choose wether you want to initialize a git repository

Adding custom templates:
* In the [cli.js](https://github.com/AzracStudios/create-web-app/blob/master/src/cli.js) file, add the name of the template to the template array.
* ```Javasript let template = ["Web", "Web - Scss", "Web - Bootstrap", "TypeScript", "React App", "Next App", "Strapi"] ```
* Inside the templates directory, create a new folder and give it the same name as the template that you added to the choices array, but make sure that the name is in lower case.
* ```$ mkdir templates/strapi```
* In the new template folder that you created, add all the template files. Delete any **node_modules** or **.git** folders. They will be installed automatically when the template is initialized. 
* ```$ rm -rf node_modules .git```
* Make changes to the template code if needed
* And that's it!


**Happy Coding!**
