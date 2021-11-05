import { GET } from '../common/api';

const getCitys = (params) => {
  return GET('/api/commons/citys',params)
}

const getHotList = (params) => {
  return GET('/api/home/hotList',params)
}

export {
  getCitys,
  getHotList
}