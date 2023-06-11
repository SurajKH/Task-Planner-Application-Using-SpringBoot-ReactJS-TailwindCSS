# Task-Planner-Application using SpringBoot,ReactJS and TailwindCSS
Task Planner Application using SpringBoot,ReactJS and TailwindCSS.

Different Views:

Admin,Adding a New Task,About Us Views,Error Page,Tasks Visualization.

If User Exists and Password is incorrect generate a new Password using random and give it to User.

Initial Frontend Prototype Setup:

(ReactJS,TailwindCSS)

1.Admin Page:

Basically Considering the concept of Creation of view , in such a way that only Users with Admin Privileges have access to the respective
Applications.

2.About Us Page:Generates an About Us Page breifing about the Application.


<img width="1435" alt="Screenshot 2023-06-04 at 1 44 58 PM" src="https://github.com/SurajKH/Task-Planner-Application-Using-SpringBoot-ReactJS-TailwindCSS/assets/90398336/c07b1009-835a-4d8d-a42c-5c663a7ea708">

3.Add a New Task Page:

We basically consider adding a new task,wherein the tasks are basically stored in the Mysql Database as a new tuple entry and it adheres to the schema defined in the backend part of the Application.

<img width="915" alt="Screenshot 2023-06-04 at 1 49 21 PM" src="https://github.com/SurajKH/Task-Planner-Application-Using-SpringBoot-ReactJS-TailwindCSS/assets/90398336/8f4b1c79-f757-493a-898f-fafdd6753ee7">


Displaying All the Tasks in the Table Format:

Here the focus is to display all the entries that is being rendered from the table present in the MySQL Database.

<img width="863" alt="Screenshot 2023-06-04 at 1 51 55 PM" src="https://github.com/SurajKH/Task-Planner-Application-Using-SpringBoot-ReactJS-TailwindCSS/assets/90398336/d095a57f-8b70-4ce6-a0fc-7c6b91d73ccc">


Error Page:

When ever the User tries to sign-in without Admin Priveleges then we are trying to redirect to an Error 404 Page.

Task Visualization with respect to Task Priority: Utilization of Chart.js


Advanced Task Visualization with respect to Task Priority: Utilization of Chart.js

<img width="1440" alt="Screenshot 2023-06-04 at 1 54 16 PM" src="https://github.com/SurajKH/Task-Planner-Application-Using-SpringBoot-ReactJS-TailwindCSS/assets/90398336/a3a3e29e-7823-4ae0-a93d-a19e78dfd26b">



Future Scopes:
More Backend Functionality:Such as SubTasks and Daily Tracking,Task Completed Status,Yet to Completed Tasks.
(Need to consider one more Entity:TaskManagerEntity(Consider all the Tasks inside the Task Manager(One to Many Relationships).


Realtime Progress Analyser:

(As in whether we were able to complete the task within the Due Date).

Implementation of Demerits Points and Suggestions Pages.(Redirect to the Suggestion Page).



Tech Stack:

Backend:

SpringBoot,MySQL

Frontend:

ReactJS,TailwindCSS,Chart.js(Data Visualization).

API Testing:

PostmanAPI
