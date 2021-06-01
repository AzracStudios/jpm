Create web app is a powerfull CLI tool that helps you in creating web projects quickly. The available project templates are:
* **JavasScript**
* **TypeScript**
* **Web** (Simple Html Css project)
* **Web Scss** (Simple Html project with scss for styling)
* **React App** (Fresh react app with all the broilerplate code removed)
* **Next App** (Fresh next app with all the broilerplate code removed)

Installation:
* In an empty directory, clone this repository with the command
* ```$ git clone https://github.com/AzracStudios/create-web-app ```
* Then run **npm install** to install all dependencies and **npm link** to make the command **cwp** available globally
* With that, you are all good to go! 

Creating a project:
* In an empty direactory, run the command ```$ cwp```
* Next, select a project template
* And then, choose wether you want to initialize a git repository

Adding custom templates:
* In the [cli.js](https://github.com/AzracStudios/create-web-app/blob/master/src/cli.js) file, add the name of the template to the choices array.
* ```Javasript let choices = ["Web", "Web - Scss", "JavaScript", "TypeScript", "React App", "Next App", "Strapi"] ```
* Inside the templates directory, create a new folder and give it the same name as the template that you added to the choices array, but make sure that the name is in lower case.
* ```$ mkdir templates/strapi```
* In the new template folder that you created, add all the template files. Delete any **node_modules** or **.git** folders. They will be installed automatically when the template is initialized. 
* ```$ rm -d node_modules; rm -rf .git/; rm -d .git```
* Make changes to the code if needed
* And that's it!



**Happy Coding!**
