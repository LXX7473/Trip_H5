import React from 'react'
import Header from './components/Header';
import Style from './index.less';
import Search from './components/Search';
import Hot from './components/Hot'
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
