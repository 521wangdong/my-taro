import Taro, { } from '@tarojs/taro'
import { useState } from "react";
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'

import './index.scss'

function Index() {
  const [current, setCurrent] = useState(0)

  const handleClick = (value) => {
    console.log('点击了按钮', value)
    setCurrent(value)
  }

  return (
    <View className='index'>
      <AtTabBar
        fixed
        tabList={[
          { title: '待办事项', iconType: 'bullet-list', text: 'new' },
          { title: '拍照', iconType: 'camera' },
          { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
        ]}
        onClick={handleClick}
        current={current}
      />
    </View>
  )
}

export default Index