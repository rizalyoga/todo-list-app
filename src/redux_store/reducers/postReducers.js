const initialState = [] //paling pertama dipanggil

const postReducers = ( state = initialState, action ) => { //default value
  if(action.type === 'SET_POST') {
    return action.payload;
  }

  return state
}

export default postReducers
