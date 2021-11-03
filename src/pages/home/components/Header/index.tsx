import React from 'react'
import Style from './index.less'
export default function Header() {
    return (
        <div className={Style.container}>
            <span className={Style.title}>民宿</span>
            <div >
                <span>登录</span>
                |
                <span>注册</span>
            </div>
        </div>
    )
}
