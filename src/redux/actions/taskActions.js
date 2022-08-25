import { ActionTypes } from "../constants/actionTypes";

export const Actions = {
  AddTask: (task) => ({
    type: ActionTypes.ADD_TASK,
    payload: task,
  }),

  DeleteTask: (task) => ({
    type: ActionTypes.DELETE_TASK,
    payload: task,
  }),

  CompleteTask: (index) => ({
    type: ActionTypes.COMPLETE_TASK,
    payload: index,
  }),
  EditTask: (task) => ({
    type: ActionTypes.EDIT_TASK,
    payload: task,
  }),
};
