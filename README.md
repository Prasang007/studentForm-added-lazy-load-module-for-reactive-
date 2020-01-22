Reactive and Template Driven Forms 
Basic 
Student Form that takes five Input forms from user including a checkbox, radio button and a select dropdown.

Validation:
All fields are mandatory(required)

Roll No: Allow only numbers 
Name: Allow only Alphabets
Email: Should follow email format
Mobile No: Allow numbers only
Mobile No: Not more than 10 digits

Use ng serve to use the application at http://localhost:4200

and npm run build:ssr && npm run serve:ssr
to pre render the application on express server at http://localhost:4000 


lazy load module was imported by writing 
ng g module module-name --route route-path --module app.module


route-path is path that should be in the url to for this component to be displayed 
--module add this path in app routing module

