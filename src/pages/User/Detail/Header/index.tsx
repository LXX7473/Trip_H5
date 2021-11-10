import React from 'react'
import Style from './index.less';
import classNames from 'classnames/bind';

const cx=classNames.bind(Style);
const Header = (props) => {
  return (
    <div className={cx('container')}>
      <span className={cx('container-setting')}>设置</span>
      <div className={cx('container-box')}>
        <img 
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F26%2F20180126230814_uUSAk.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639032932&t=0ad83eba6e385b9ae3382a1a27c25ea8" 
        className={cx('img')}
        alt="" />
        <div>测试用户1213</div>
        <div>这是一段签名。。。。</div>
      </div>

    </div>
  )
}

export default Header
