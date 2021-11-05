import React, { useEffect } from 'react'
import { Header, Search, Hot } from './components';
import Style from './index.less';

export default function Home() {


    return (
        <div className={Style.container}>
            {/* 头部 */}
            <Header />
            {/* 搜索 */}
            <Search />
            {/* 卡片 */}
            <h2>热门民宿</h2>
            <Hot />
        </div>
    )
}
