import React from 'react'
import { Form, Button, Input, Toast } from 'antd-mobile-v5';
import classNames from 'classnames/bind';
import Style from './index.less';
import Auth from '@/components/Auth'
import { useLocation } from 'umi';
import { register } from '@/service/user';

const cx = classNames.bind(Style)
function Login({ }) {
  const { pathname } = useLocation()
  const [form] = Form.useForm();
  const before = function (fn: () => {}, beforeFn: () => {}) {
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

  const save = async (params) => {
    console.log('args', params);

    let res = await register({
      ...params
    })
    if (res.status !== 200) {
      Toast.show({
        content: res.message,
        icon: 'fail'
      })
    }
  }

  const validata = (params) => {
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
