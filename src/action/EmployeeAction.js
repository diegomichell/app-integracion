import * as ActionType from './ActionType';
import EmployeeApi from '../api/EmployeeApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';

export const getEmployeesResponse = courses => ({
  type: ActionType.GET_EMPLOYEES_RESPONSE,
  courses
});

export function getCoursesAction() {
  return (dispatch) => {

    dispatch(ApiCallBeginAction());

    return EmployeeApi.getAllEmployees()
      .then(employees => {
        dispatch(getEmployeesResponse(employees));
      }).catch(error => {
        throw error;
      });
  };
}

export const addNewEmployeeResponse = () => ({
  type: ActionType.ADD_NEW_EMPLOYEE_RESPONSE
});

export const updateExistingEmployeeResponse = () => ({
  type: ActionType.UPDATE_EXISTING_EMPLOYEE_RESPONSE
});

export function saveEmployeeAction(employeeBeingAddedOrEdited) {
  return function (dispatch) {

    dispatch(ApiCallBeginAction());

    return EmployeeApi.saveEmployee(employeeBeingAddedOrEdited)
      .then(() => {
        if (employeeBeingAddedOrEdited.id) {
          dispatch(updateExistingEmployeeResponse());
        } else {
          dispatch(addNewEmployeeResponse());
        }
      }).then(() => {
        dispatch(getCoursesAction());
      }).catch(error => {
        dispatch(ApiCallErrorAction());
        throw (error);
      });
  };
}


export const getEmployeeResponse = employee => ({
  type: ActionType.GET_EMPLOYEE_RESPONSE,
  employee
});


export function getEmployeeAction(employeeId) {
  return (dispatch) => {

    dispatch(ApiCallBeginAction());

    return EmployeeApi.getEmployee(employeeId)
      .then(course => {
        dispatch(getEmployeeResponse(course));
      }).catch(error => {
        throw error;
      });
  };
}


export const deleteCourseResponse = () => ({
  type: ActionType.DELETE_EMPLOYEE_RESPONSE
});


export function deleteCourseAction(courseId) {
  return (dispatch) => {

    dispatch(ApiCallBeginAction());

    return EmployeeApi.deleteEmployee(courseId)
      .then(() => {
        dispatch(deleteCourseResponse());
      }).then(() => {
        dispatch(getCoursesAction());
      }).catch(error => {
        throw error;
      });
  };
}