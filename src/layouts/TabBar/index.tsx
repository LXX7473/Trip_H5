import { FC, useState } from 'react'
import { TabBar } from 'antd-mobile';
import {
    BsHouseFill,
    BsChatSquareTextFill,
    BsPersonFill,
    BsChatSquareText,
    BsHouse,
    BsPerson
} from 'react-icons/bs'
import { ReactElement } from '@umijs/renderer-react/node_modules/@types/react';
import { history } from 'umi'
interface IProps {
    pathname: string;
    show: boolean;
}
const BottomTabBar: FC<IProps> = (props): ReactElement => {
    const { pathname, show } = props;
    const tabs = [
        {
            title: '首页',
            icon: <BsHouse />,
            selectedIcon: <BsHouseFill />,
            link: '/'
        }, {
            title: '详情',
            icon: <BsChatSquareText />,
            selectedIcon: <BsChatSquareTextFill />,
            link: '/detail'
        }, {
            title: '用户',
            icon: <BsPerson />,
            selectedIcon: <BsPersonFill />,
            link: '/user'
        },
    ]
    const changeTab = (link: string): void => {
        history.push(link)
    }
    return (
        <div>
            {
                show ? (<TabBar >
                    {
                        tabs.map(item => (
                            <TabBar.Item
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                selectedIcon={item.selectedIcon}
                                selected={item.link === pathname}
                                onPress={changeTab.bind(this, item.link)}
                            />
                        ))
                    }
                </TabBar >) : null
            }
        </div >

    )
}
export default BottomTabBar;