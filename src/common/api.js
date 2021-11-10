// 代理模式
const queryString = require('querystring');

let interceptors_req = [], interceptors_res = [];

const request = (url, init = {}) => {

  if (!init.method) {
    init.method = 'GET'
  }
  interceptors_req.forEach(interceptors => {
    init = interceptors(init);
  })
  return new Promise((resolve, reject) => {
    fetch(url, init).then((res) => {
      return res.json()
    })
      .then(ret => {
        interceptors_res.forEach(interceptors => {
          //拦截器对响应结果做处理，把处理后的结果返回给响应结果。
          ret = interceptors(ret);
        })

        resolve(ret)
      })
      .catch(err => {
        reject(err)
      })
  })
}

request.interceptors = {
  request: {
    use: function (callback) {
      interceptors_req.push(callback);
    }
  },
  response: {
    use: function (callback) {
      interceptors_res.push(callback);
    }
  }
}

// 处理get参数

function genUrl(url, params) {
  let paramStr = queryString.stringify(params);
  if (paramStr.length > 0) {
    let splitChar = url.indexOf('?') === -1 ? '?' : '&';
    return url + splitChar + paramStr;
  }
  return url;
}

function GET(url, params, options) {
  return request(genUrl(url, params), {
    method: 'GET',
    ...options,
  });
}
function POST(url, data, options) {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}
export {
  request,
  POST,
  GET
}
