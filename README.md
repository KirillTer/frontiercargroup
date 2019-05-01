This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `GraphQL queries`

mutation {
  createTask(carId: "fd6b3de0-2abc-4377-98bd-1e945d464027", task: {
    taskType: ADD_DOCUMENT
		comment: "2345"
  })
}

{
  tasks(carId: "fd6b3de0-2abc-4377-98bd-1e945d464027") {
    id
    taskType
    comment
    completed
  }
}

{
  __schema {
    types {
      name
      enumValues {
        name
      }
    }
  }
}

{
  car(id: "fd6b3de0-2abc-4377-98bd-1e945d464027") {
    id
    make
    model
    trim
    engineType
    physicalStatus
    legalStatus
    sellingStatus
    financialDetails {
      purchasePrice
      purchaseDate
      purchaseLocation
      paymentDonePercentage
      sellingPrice
      sellingDate
      sellingLocation
      sellingDonePercentage
      margin
    }
  }
  __type(name: "PhysicalStatus") {
    name
    enumValues {
      name
    }
  }
}

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
