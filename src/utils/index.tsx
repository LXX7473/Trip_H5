import { history } from 'umi'
const before = function () {

};

const urlGet = (key: string) => {
  const { pathname, search } = history.location

  const res = search.split(`${key}=`)[1];
  console.log('res--->', res)

  return res ? res : pathname
}

export {
  before,
  urlGet
}