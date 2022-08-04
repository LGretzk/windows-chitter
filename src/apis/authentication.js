// API interface for registering a user
export const register = async (formData) => {
    try {
      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify({
          user: {
            handle: formData.handle.value,
            password: formData.password.value
          }
        })
      });
      if(response.ok) {
        const data = await response.json();
        return data;
      } throw new Error('Request failed');
    } catch (error) {
      console.log(error);
    }
  };
  
  // API interface for logging a user
  export const login = async (formData) => {
    try {
      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify({
          session: {
            handle: formData.handle.value,
            password: formData.password.value
          }
        })
      });
      if(response.ok) {
        const data = await response.json();
        return data;
      } throw new Error('Request failed');
    } catch (error) {
      console.log(error);
    }
  };