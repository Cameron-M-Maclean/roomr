const baseURL = 'http://localhost:3000/api/users';

export const getUsers = () => {
  return fetch(baseURL)
  .then(res=>res.json());
};