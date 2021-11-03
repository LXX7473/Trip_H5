import React, { useState, useEffect } from 'react'
import { Button, Picker, List,DatePicker } from 'antd-mobile';
import SearchItem from './SearchItem';
import Style from './index.less'
import classNames from 'classnames/bind'

const cx = classNames.bind(Style);

const Item = List.Item;
interface cityItem {
    value: number,
    label: string
}
export default function Search() {

    const [visible, setVisible] = useState(false);
    const [citys, setCitys] = useState<null | cityItem[]>(null);
    const [city, setCity] = useState<(number | null)[]>([])
    // 时间
    const [date, setDate] = useState(1)
    useEffect(() => {
        setCitys([
            { value: 1001, label: '杭州' },
            { value: 1002, label: '深圳' },
            { value: 1003, label: '江苏' },
            { value: 1004, label: '黑龙江' },
        ])

    }, [])
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
                    onChange={date =>{console.log('date',date)}}
                >
                    <List.Item arrow="horizontal">出租时间</List.Item>
                </DatePicker>
            <Button type='warning' className={cx('container_btn')}>搜索民宿</Button>
        </div>
    )
}
