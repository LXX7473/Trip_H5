import React, { FC } from 'react'
import classNames from 'classnames/bind';
import Style from './index.less';

const cx = classNames.bind(Style);

interface IProps {
    img: string;
    title: string;
    price: number;
    content: string;
}
const HotItem: FC<IProps> = (props) => {
    const { img, title, price, content } = props;

    return (
        <div className={cx('container')}>
            <img src={img} alt="" className={cx('container_img')} />

            <div className={cx('container_title')}>{title}</div>
            <div className={cx('container_content')}>{content}</div>
            <div className={cx('container_price')}>￥{price}</div>
        </div>
    )
}
export default HotItem;