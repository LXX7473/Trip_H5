import { GET, POST } from '../common/api';


const register = (params) => {
  return POST('/api/user/register', params)
}
const login=(params)=>{
  return POST('/api/user/login', params)
}

export {
  register,
  login
}