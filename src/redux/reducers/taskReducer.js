import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  task: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { task: [...state.task, action.payload] };

    case ActionTypes.DELETE_TASK:
      // let data = [...state.task];
      // data.splice(action.payload, 1);
      state.task.splice(action.payload, 1);
      return { task: [...state.task] };

    case ActionTypes.COMPLETE_TASK:
      let dataC = [...state.task];

      dataC[action.payload].status = "Completed";
  
      return {
        task: dataC,
      };

    case ActionTypes.EDIT_TASK:
      let dataE = [...state.task];
      dataE[action.payload.index] = action.payload;

      return { task: dataE };

    default:
      return state;
  }
};
