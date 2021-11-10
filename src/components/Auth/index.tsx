import React, { FC } from 'react'
import { Form, Button, Input, Toast } from 'antd-mobile-v5';
import classNames from 'classnames/bind';
import Style from './index.less'
const cx = classNames.bind(Style);

interface IProps {
  pathname: string;
  form: any;
  onSubmit: () => void;
}

const Login: FC<IProps> = ({ pathname, form, onSubmit }) => {


  const isLogin = !(pathname === '/register');
  const renderTxt=()=>(isLogin ? '登录' : "注册")
  return (
    <div className={cx('container')}>
      <h2 className={cx('container-title')}>用户{renderTxt()}</h2>
      <Form
        form={form}
        footer={
          <Button block color='primary' onClick={onSubmit}>
            {renderTxt()}
          </Button>
        }
      >
        <Form.Item name='username' label='用户名' rules={[
          {
            required: true,
            message: '用户名为必填项'
          }
        ]}>
          <Input placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item name='password' label='密码'>
          <Input placeholder='请输入密码' />
        </Form.Item>
        {
          !isLogin && <Form.Item name='curpassword' label='确认密码' >
            <Input placeholder='请输入密码' />
          </Form.Item>
        }

      </Form>
    </div>
  )
}


export default Login;
