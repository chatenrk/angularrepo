# Angular 5 Development Guide

##  Integrating Angular and Bootstrap
Follow the below steps to integrate Angular with Bootstrap 4
 1. After creating a new Angular application, install the bootstrap, jquery and popper.js using the following piece of code
	 ```
	 npm install --save bootstrap jquery popper.js fontawesome
	```
 2. Next add the dependencies into the angular.json(angular-cli.json in case of previous versions of Angular) file in the generated Angular application as shown below
	 ```
	 "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.css",
              "./node_modules/font-awesome/css/font-awesome.css"
            ],
            "scripts": ["./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/popper.js/dist/umd/popper.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
	 ```
 4. Use any bootstrap 4 code and test the application 


## References
Use the following **blogs** as reference to practice Angular 5 

 1. [Angular 5 Docs](https://angular.io/)
 2. [Coursetro Angular5 from Scratch](https://coursetro.com/courses/19/Learn-Angular-5-from-Scratch---Angular-5-Tutorial)
 3. [Toptal Angular 5 tutorial](https://www.toptal.com/angular/angular-5-tutorial)
 4. [Appdividend Angular 5 CRUD Tutorial](https://appdividend.com/2018/01/21/angular-5-crud-tutorial-example-scratch/)
 5. [Angular NGRX Material Starter](https://github.com/tomastrajan/angular-ngrx-material-starter)

### Angular CLI Related
[Getting Started with Angular CLI](https://www.intertech.com/Blog/angular-tutorial-getting-started-with-the-angular-cli/)

### Angular and Bootstrap related
1. [Building responsive apps using Angular and Bootstrap 4](https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b)
2. [Application loading animation for Angular](https://medium.com/@tomastrajan/how-to-style-angular-application-loading-with-angular-cli-like-a-boss-cdd4f5358554)


## VSCode extensions for Angular
1. Bracket Pair Colorizer
2. Angular 2 TypeScript Emmet
3. TSLint
4. TypeScript Hero
5. Path Intellisense
