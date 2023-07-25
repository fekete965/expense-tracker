## React Router v6 :
### Functionalities used are :
    - Loaders, ErrorElements, action
    - localStorage to store data
    - useRouterError() hook to display error
    - toastify to add a toast to the application on success of an action
    - Form component is used to write forms 
    - useFetcher() hook to manage state. Best suitable submitting data WITHOUT navigation. 
    
##Errors:
    - error object returns undefined for useRouterError
    -

## Challenges :
    - painstakingly difficult to establish the same design for elements throughout the application. In dire need of UI library


## Local Storage :
    - Save username, budget, expense


## Handling multiple form submission :
    - As this application has single page, all forms are submitted to the dashboard. To differentiate forms, we use _action & values field to the input type hidden.
    - formData() has _action field, so spread out _action and use try,catch to figure out which forms it is representing.