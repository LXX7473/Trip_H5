import React from 'react'
import { List } from 'antd-mobile'

const { Item } = List;
function Lists() {
  return (
    <div>
      <List >
        <Item>用户协议</Item>
        <Item>常见问题 </Item>
        <Item>联系客服</Item>

      </List>
    </div>
  )
}

export default Lists
