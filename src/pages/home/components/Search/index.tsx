import React, { useState, useEffect } from 'react'
import { Button, Picker, List, DatePicker } from 'antd-mobile';
import SearchItem from './SearchItem';
import Style from './index.less'
import classNames from 'classnames/bind'
import { getCitys } from "@/service/home";

import useHttpHook from '../../../../hooks/useHttpHook'
const cx = classNames.bind(Style);

const Item = List.Item;

export default function Search() {
    const [visible, setVisible] = useState(false);
    const [city, setCity] = useState<(number | null)[]>([])
    const { data: citys } = useHttpHook({
        api: getCitys,
    })

    const handleOK = (e: number[]): void => {
        setVisible(false)
        setCity(e)
    }
    const getTxt = (val: (number | null)) => {
        return citys?.find(v => (v.value === val))?.label
    }

    return (
        <div className={cx('container')}>
            <List>
                <Item extra={getTxt(city[0])} onClick={() => {
                    setVisible(true)
                }}>可选城市</Item>
                <Picker
                    visible={visible}
                    onDismiss={() => {
                        setVisible(false)
                    }}
                    data={citys}
                    cols={1}
                    onOk={(e) => handleOK(e)}
                />
            </List>

            <DatePicker
                mode="date"
                onChange={date => { console.log('date', date) }}
            >
                <List.Item arrow="horizontal">出租时间</List.Item>
            </DatePicker>
            <Button type='warning' className={cx('container_btn')}>搜索民宿</Button>
        </div>
    )
}
