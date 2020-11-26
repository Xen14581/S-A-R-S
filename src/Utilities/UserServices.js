export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}
 
export const getToken = () => {
  return sessionStorage.getItem('jwt') || null;
}
export const getSpecialization=()=>{
  return sessionStorage.getItem('specialization')
}
 
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}
export const setUserSession = (jwt, user) => {
  sessionStorage.setItem('token', jwt);
  sessionStorage.setItem('user', JSON.stringify(user))
}

