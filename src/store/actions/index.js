import {FEATCH_CARS_START, FEATCH_CARS_SUCCESS, FEATCH_CARS_FAILURE,
        FEATCH_TYPES_START, FEATCH_TYPES_SUCCESS, FEATCH_TYPES_FAILURE,
        FEATCH_TASKS_START, FEATCH_TASKS_SUCCESS, FEATCH_TASKS_FAILURE,
        CREATE_TASKS} from './actionTypes'
import {fetchCarsApi, fetchPhysicalStatusApi, fetchTasksApi, createTasksApi} from '../api'

export const fetchCars = () => async dispatch => {
    dispatch({type: FEATCH_CARS_START})

    try {
        const cars = await fetchCarsApi()
        dispatch({type: FEATCH_CARS_SUCCESS, payload: cars})
    } catch (err) {
        dispatch({type: FEATCH_CARS_FAILURE, payload: err, error: true})
    }
}

export const fetchTypes = () => async dispatch => {
    dispatch({type: FEATCH_TYPES_START})

    try {
        const types = await fetchPhysicalStatusApi()
        dispatch({type: FEATCH_TYPES_SUCCESS, payload: types})
    } catch (err) {
        dispatch({type: FEATCH_TYPES_FAILURE, payload: err, error: true})
    }
}

export const fetchTasks = () => async dispatch => {
    dispatch({type: FEATCH_TASKS_START})

    try {
        const types = await fetchTasksApi()
        dispatch({type: FEATCH_TASKS_SUCCESS, payload: types})
    } catch (err) {
        dispatch({type: FEATCH_TASKS_FAILURE, payload: err, error: true})
    }
}

export const createTasks = (comment) => async dispatch => {
    const created = await createTasksApi(comment)
    dispatch({type: CREATE_TASKS, payload: created})
}