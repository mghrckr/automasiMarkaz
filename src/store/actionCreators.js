const BASE_URL = `http://192.168.127.112:2810`




export const fetchUsers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/datakaryawan`, {
                method: "GET"
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'users/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const addUser = (userData) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${BASE_URL}/datakaryawanbaru`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add user');
        }
  
        const data = await response.json();
        dispatch({ type: 'user/add', payload: data });
      } catch (error) {
        console.log(error.message);
      }
    };
  };
  

export const loginUser = (DB_USER, DB_PASS) => {
  return async dispatch => {
    try {
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          DB_USER,
          DB_PASS,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }
      dispatch({
        type: 'user/login',
        payload: {
          DB_USER,
          DB_PASS,
        },
      });
      const data = await response.json();
      localStorage.setItem('access_token', data.msg.access_token)
      localStorage.setItem('access_user', data.msg.access_user)
      console.log('syifa 70kg');
    } catch (error) {
      // console.log('syifa 70kg');
      console.log(error.message);
    }
  };
};
