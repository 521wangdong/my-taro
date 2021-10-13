import Taro, { FC } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

const Page: FC = () => {
    
    return (
        <View>
            <Text>测试页面</Text>
        </View>
        
    )

}

Page.config = {
  navigationBarTitleText: "登录"
};

export default Page