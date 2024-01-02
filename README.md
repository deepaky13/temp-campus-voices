```sh
First  created one  component named by login.jsx
Then in the app.jsx  imported the login.jsx in the app.jsx
And  import the RouterProvider and createBrowserRouter in the app.jsx

```

Then download the package

```sh
" npm i react-router-dom@6.10.0"
```

```jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
```

The First HomePage Component

```jsx
import React from "react";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;
```

For combining this we need to create a index.js page

```js
export { default as HomePage } from "./HomePage";
```

```sh
To compute the css styles we need to use the package -
 "npm i styled-components@5.3.10"

 creating a folder called Wrapper

And fileName called HomePageLayout

 import styled from "styled-components";
```

```js
import styled from "styled-components";

const Wrapper = styled.section`
  .heading {
    background-color: transparent;
  }
  h1 {
    color: var(--primary-101);
    font-size: 23px;
    text-align: center;
    padding: 20px;
    letter-spacing: 3px;
    word-spacing: 50px;
  }
`;
export default Wrapper;
`;
export default Wrapper;
```

USE IT IN THE APP.JSX

```jsx
import Wrapper from "../wrapper/HomePageLayout";

return (
  <Wrapper>
    <div className="heading">welcome to home page</div>
  </Wrapper>
);
```

Second component called Logging.jsx

```jsx
import React from "react";
import Wrapper from "../wrapper/LoggingLayout";

const Logging = () => {
  return (
    <Wrapper>
      <form className="form">
        <label htmlFor="FirstName">Name</label>
        <input type="text" name="" id="FirstName" />
        <label htmlFor="regNo">Reg-NO</label>
        <input type="text" name="" id="regNo" />
        <button>submit</button>
      </form>
    </Wrapper>
  );
};

export default Logging;
```

```js
Logging.js -- styling
import styled from "styled-components";

const Wrapper = styled.main`
  .form {
    color: teal;
    font-size: 23px;
    display: grid;
    grid-gap: 10px;
    place-items: center;
  }
`;
export default Wrapper;


```

Link component is used to navigate through the pages

```js
<Link to="/"> back home</Link>
```

```sh
--------------------react bootstrap---------------------------
for use of bootstrap in the react use React Bootstrap website

install package "npm install react-bootstrap bootstrap"

To apply css in that specifically import the package called

"import bootstrap/dist/css/bootstrap.min.css";

 this may either imported  in the same file or else in the app.jsx file.
```

```S
----------------------------WORK STARTS------------------------
```

```sh

-----------------------------FRONTEND PROCESS---------------------------
Add the file with extension  .ico
import the file in the index.html

1.Creating the landing page and their styled Components
2.After that the register and login page has been created and then its wrapper
3.Then the dashboard has been created and used the outlet for the route
4.Then the student dashboard created and in that the home about stuffs and compose page has been created
```

```sh
------------------------------BACKEND PROCESS------------------------------

1.creating the server.js
2.Using the express module for the route purpose
3.Using the Thunder Client for the testing purpose
4.Using the morgan module for logging the info about HTTP requested url and data
5.Creating the .env file for the use of const values which are used in the app but not to share.
6.import the nanoid module  for the the use of creating the unique id for the data
7.Finally time for the CURD operation in the node
8.creating the controllers and the routers
9.Then connect with MongoDB and mongoose
10.And create the Schema for the feedback
11.preventing the app from crashing due to error using package express-async-errors
12.created the own custom errors and statusCodes
13.creating the middleware for the errorHandlers and validation
14.validation layer for the students form
15.creating the constant file for the enum values for selecting the value
16.Creating the student model schema
17.controllers and login for the register and login
18.validation for the student register
19.hashing the password in the database using the bcrypt
20.Creating the jwt Web Token for the use of authorization
21.HTTP only cookie for authenticate the user
22.Authenticate the user using the middleware
23.Verifying the JWT tokens
```
  const yearMapping = (year) => {
    return (
      <div key={year._id}>
        {year._id} : {year.count} Feedbacks
      </div>
    );
  };

  //* Getting Department wise counts

  const departmentMapping = (dept) => {
    return (
      <div key={dept._id}>
        {dept._id} : {dept.count} Feedbacks
      </div>
    );
  };
