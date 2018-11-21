const countReducer = (state = {counter: 0}, action) => {

  switch(action.type){
    case "Increase":{
      let val = state.counter + 1;
      state = {...state, counter: val};
      break;
    }
    case "Reduce":{
      let val = 0;
      if(state.counter > 0){
        val = state.counter - 1;
      }
      state = {...state, counter: val};
      break;
    }
  }
  return state;
}

export default countReducer;