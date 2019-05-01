import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: 'https://fcg-fe-test.herokuapp.com/'
});

export const fetchCarsApi = async () => {
    const {data} = await client.query({
        query: gql`
            query CarApp {
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
            }
        `
    })
    console.log('cars-', data)
    return data
}

export const fetchPhysicalStatusApi = async () => {
    const {data} = await client.query({
        query: gql`
            query PhysicalStatus {
                __schema {
                    types {
                      name
                      enumValues {
                        name
                      }
                    }
                }
            }
        `
    })
    console.log('types-', data)
    return data
}

export const fetchTasksApi = async () => {
    const {data} = await client.query({
        query: gql`
            query PhysicalStatus {
                tasks(carId: "fd6b3de0-2abc-4377-98bd-1e945d464027") {
                    id
                    taskType
                    comment
                    completed
                }
            }
        `
    })
    console.log('tasks-', data)
    return data
}

export const createTasksApi = async () => {
    const {data} = await client.query({
        mutation: gql`
            mutation {
                createTask(carId: "fd6b3de0-2abc-4377-98bd-1e945d464027", task: {
                taskType: ADD_DOCUMENT
                    comment: "2345"
                })
            }
        `
    })
    console.log('created - ', data)
    return data
}
