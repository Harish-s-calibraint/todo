import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  task: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { task: [...state.task, action.payload] };

    case ActionTypes.DELETE_TASK:

        let data = [...state.task];
        let index_;
        data.map((item, index) => {
          console.log(item.actions);
          console.log(action.payload);
          if (item.actions === action.payload) {
            index_ = index;
          }
        });

          data.splice(index_,1);

      return { task: data };
      

    // case ActionTypes.COMPLETE_TASK:
    //     console.log("complete");
    //   let dataC = [...state.task];
    //   let indexC;
    //   dataC.map((item, index) => {
    //     if (item.actions === action.payload) {
    //       indexC = index;
    //     }
    //   });
    //   if (indexC) {
    //     dataC[indexC].status = true;
    //   }
    //   console.log(dataC);
    //   console.log(indexC,"index")

    //   return {
    //     task: dataC,
    //   };

        case ActionTypes.EDIT_TASK:
          console.log("complete");
             let dataE=[...state.task]
            let indexE;

            dataE.map((item,index)=>{
              if(item.actions ===action.payload){
                indexE=index;
              }
            });
            console.log(dataE[indexE]);
        return 
            
    default:
      return state;
  }
};
