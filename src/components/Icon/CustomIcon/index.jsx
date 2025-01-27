import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const MyIcon = createFromIconfontCN({
    scriptUrl: require("./iconfont"), // 在 iconfont.cn 上生成, 下载到本地icon.js中
});

/**
 * 自定义icon
 */
const CustomIcon = ({ type, ...rest }) => {

    return <MyIcon type={`icon${type}`} {...rest}/>;
};

export default CustomIcon;
