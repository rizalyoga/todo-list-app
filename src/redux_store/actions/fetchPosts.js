import axios from 'axios'
import allStore from '.';

export const fetchPost = () => {
  return (dispatch) => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        dispatch(allStore(data));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
//fungsi dispatch utk manggil setPost ini
//utk bikin reducersnya
export const setPost = (payload) => {
  return {
    type: 'SET_POST', //utk set ke reducers
    payload, //datanya
  };
}