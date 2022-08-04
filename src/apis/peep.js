// API interface for loading peeps
export const fetchPeeps = async () => {
    try {
      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
      if(response.ok) {
        const data = await response.json();
        return data;
      } throw new Error('Request failed');
    } catch (error) {
      console.log(error);
    }
  };
  
  // API interface for loading a peep by peepId
  export const fetchPeep = async (peepId) => {
    try {
      const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`);
      if(response.ok) {
        const data = await response.json();
        return data;
      } throw new Error ('Request failed');
    } catch (error) {
      console.log(error);
    }
  };
  
  // API interface for posting a peep
  export const postPeep = async ({message, sessionKey, userId}) => {
    try {
      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token token=${sessionKey.value}`
        },
        method: "POST",
        body: JSON.stringify({
          peep: {
            user_id: userId.value,
            body: message.value
          }
        })
      });
      if(response.ok) {
        const data = await response.json();
        data.session_key = sessionKey.value;
        return data;
      } throw new Error('Request failed');
    } catch (error) {
      console.log(error);
    }
  };
  
  // API interface for deleting a peep
  export const deletePeep = async (sessionKey, peepId) => {
    try {
      const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`, {
        headers: {
          'Authorization': `Token token=${sessionKey}`
        },
        method: "DELETE"
      });
      if(response.ok) {
        console.log(response.status);
        return response.status;
      } throw new Error('Request failed');
    } catch (error) {
      console.log(error);
    }
  };