# Task-Planner-Application using SpringBoot,ReactJS and TailwindCSS
Task Planner Application using SpringBoot,ReactJS and TailwindCSS.

Different Views:

Admin,Adding a New Task,About Us Views,Error Page,Tasks Visualization.

If User Exists and Password is incorrect generate a new Password using random and give it to User.


Progress:

With Respect to Frontend and Backend of Application.

Initial Frontend Prototype Setup:

(ReactJS,TailwindCSS)

1.Admin Page:

Basically Considering the concept of Creation of view , in such a way that only Users with Admin Privileges have access to the respective
Applications.


<img width="400" height="400" alt="Adminpage" src="https://github.com/SurajKH/Task-Planner-Application/assets/90398336/b23a77ad-c440-43be-b1bb-63385f228ac8">

2.About Us Page:

<img width="1435" alt="Screenshot 2023-06-04 at 1 44 58 PM" src="https://github.com/SurajKH/Task-Planner-Application/assets/90398336/9a7ffae5-ecfe-4957-9b12-9f98022b122a">


3.Add a New Task Page:

We basically consider adding a new task,wherein the tasks are basically stored in the Mysql Database as a new tuple entry and it adheres to the schema defined in the backend part of the Application.


Displaying All the Tasks in the Table Format:

Here the focus is to display all the entries that is being rendered from the table present in the MySQL Database.


<img width="1440" alt="Screenshot 2023-06-03 at 4 10 17 PM" src="https://github.com/SurajKH/Task-Planner-Application/assets/90398336/ea89f658-d812-471d-99cc-ed0a288c7f1b">

Error Page:

When ever the User tries to sign-in without Admin Priveleges then we are trying to redirect to an Error 404 Page.

<img width="1435" alt="Screenshot 2023-06-03 at 4 14 53 PM" src="https://github.com/SurajKH/Task-Planner-Application/assets/90398336/a6a1250d-bdcb-4ea3-8b47-ba81268420ac">

Task Visualization with respect to Task Priority:

Utilization of Chart.js

Advanced Task Visualization with respect to Task Category:

Utilization of Chart.js


Initial Backend Prototype Setup:

(SpringBoot)

1.Setting up of Multiple Entities.

2.Following of an MVC Architecture.

3.Establishing Connectivity between the frontend and backend application using CrossOrigin Annotation. 

4.MySQL Database Connectivity by considering updation with respect to applications.properties. 


Tech Stack:

Backend:

SpringBoot,MySQL

Frontend:

ReactJS,TailwindCSS,Chart.js(Data Visualization).

API Testing:

PostmanAPI
