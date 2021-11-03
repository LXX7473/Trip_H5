import React,{FC} from 'react'
import classNames from 'classnames/bind'
import Style from './index.less';
const cx=classNames.bind(Style)
const SearchItem:FC=(props)=> {
    return (
        <div className={cx('container')}>
          {props.children}
        </div>
    )
}
export default SearchItem