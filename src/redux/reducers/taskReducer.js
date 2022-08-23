import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  task: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { task: [...state.task, action.payload] };

    case ActionTypes.DELETE_TASK:
      state.task.splice(action.payload, 1);
      return { task: [...state.task] };

    case ActionTypes.COMPLETE_TASK:
      state.task[action.payload].status = "Completed";

      return { task: [...state.task] };

    case ActionTypes.EDIT_TASK:
      state.task[action.payload.index] = action.payload;

      return { task: [...state.task] };

    default:
      return state;
  }
};
