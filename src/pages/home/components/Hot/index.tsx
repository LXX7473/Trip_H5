import React, { FC, useState, useEffect } from 'react'
import HotItem from './HotItem';
import classNames from 'classnames/bind';
import Style from './index.less'
const cx = classNames.bind(Style);
interface IProps {

}
const Hot: FC<IProps> = (props) => {

    const [data, setData] = useState<object[]>([]);

    useEffect(() => {
        setData([
            {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftupian.qqjay.com%2Fu%2F2018%2F0222%2F2_163119_13.jpg&refer=http%3A%2F%2Ftupian.qqjay.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638436712&t=7d5e6e398911464547c31c23f2b707bb',
                title: '东城民宿',
                content: '交通方遍，景色优美',
                price: 100

            },
            {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F945cad7c7105d352aa3c513c94846bb0c2f1a61342067-OWFZcE_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638436841&t=eb1d23d1b66c858f3996dee8327aef0b',
                title: '西城民宿',
                content: '风景嘎嘎嘎的',
                price: 100

            },
            {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic7.nipic.com%2F20100520%2F2431632_001458008911_2.jpg&refer=http%3A%2F%2Fpic7.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638436841&t=1b74d4cfba5685b3791a8be13f34f7b4',
                title: '北京民宿',
                content: '景色优美',
                price: 100

            },
            {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic13.nipic.com%2F20110420%2F2531170_133355088479_2.jpg&refer=http%3A%2F%2Fpic13.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638436841&t=bb6abcf1edb06f92d670d9be825de34f',
                title: '梨仔民宿',
                content: '啦啦啦啦啦啦',
                price: 100
            },
        ])
    }, []);

    return (
        <div className={cx('container1')}>

            {
                data.map(v => {
                    console.log('v--', v)
                    const { img, title, content, price } = v
                    return (
                        <HotItem
                            img={img}
                            title={title}
                            content={content}
                            price={price}
                        />
                    )
                })
            }
        </div>
    )
}
export default Hot