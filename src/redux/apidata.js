export default function apiData() {
  console.log('api');
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'userdata', payload: data }));
  };
}
