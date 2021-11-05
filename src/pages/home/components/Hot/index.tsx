import React, { FC, useState, useEffect } from 'react'
import HotItem from './HotItem';
import classNames from 'classnames/bind';
import Style from './index.less';
import { getHotList } from '@/service/home';
import { useObserveHook, useHttpHook } from '@/hooks'
import {Toast}from 'antd-mobile'
const cx = classNames.bind(Style);
interface Page {
    pageNum: number;
    pageSize: number;
}
interface IProps {

}
const Hot: FC<IProps> = (props) => {
    const [page, setPage] = useState<Page>({
        pageNum: 1,
        pageSize: 4
    })
    const [hotList, setHotList] = useState<null | Object[]>([])
    const { data: eachHotList, loading } = useHttpHook({
        api: getHotList,
        params: page,
        watch: [page.pageNum]
    })

    // 下拉加载
    useObserveHook({
        el: '#loading',
        callback: (entries) => {
            console.log('111111')
            console.log((entries))
            if ((entries?.[0]?.isIntersecting)) {
                Toast.loading('加载中...')
                setPage(pre => ({ ...pre, pageNum: pre.pageNum + 1 }));
            }

        },
        watch: []
    });

    console.log('loading=====>', loading)


    useEffect(() => {
        console.log('eachHotList==>', eachHotList, hotList)
        if (!loading && eachHotList?.length) {
           
            setHotList(pre => ([...pre, ...eachHotList]));
            Toast.hide()
        }
    }, [loading])
    return (<>
        {
            loading ? <div>等等</div> :
                <div className={cx('container1')}>

                    {
                        hotList?.map(v => {
                            const { img, title, content, price, id } = v
                            return (
                                <HotItem
                                    img={img}
                                    title={title}
                                    content={content}
                                    price={price}
                                    key={id}
                                />
                            )
                        })
                    }
                   <div id='loading' className={cx('loading')}>loading...</div>

                </div>
}

    </>

    )
}
export default Hot