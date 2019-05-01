import * as R from 'ramda'

export const getSchemaByNameSelector = (state, name) => R.prop(name, state.cars.__schema)

export const getCarsSelector = (state) => {
  return state.cars.car
}

export const getTypesSelector = (state) => {
  return state.types
}

export const getTasksSelector = (state) => {
  return state.tasks
}