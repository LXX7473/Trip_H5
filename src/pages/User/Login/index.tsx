import React from 'react'
import { Form, Button, Input, Toast } from 'antd-mobile-v5';
import classNames from 'classnames/bind';
import Style from './index.less';
import Auth from '@/components/Auth'
import { useLocation, history } from 'umi';
import { login } from '@/service/user';
import { urlGet } from '@/utils'
const cx = classNames.bind(Style)
function Login({ }) {
  const { pathname } = useLocation()
  const [form] = Form.useForm();
  const before = function (fn: () => any, beforeFn: () => isLogin) {
    return (...args: any) => {
      if (fn.apply(this, args) === false) {
        return;
      }
      return beforeFn.apply(this, args)
    }
  }
  const onSubmit = () => {
    form.validateFields().then(res => {
      const submit = before(validata, save);
      submit(res)
    })
  };

  const save = async (params: object) => {
    let res = await login({
      ...params
    })
    if (res.status !== 200) {
      Toast.show({
        content: res.message,
        icon: 'fail'
      })
    } else {
      const { token } = res;
      localStorage.setItem('token', token);
      history.push(urlGet('from'));
      Toast.show({
        content: '登录成功',
        icon: 'success'
      })
    }
  }

  const validata = (params: object): any => {
    console.log('args', params);
  }
  return (
    <>
      <Auth
        pathname={pathname}
        form={form}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default Login;
