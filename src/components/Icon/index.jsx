import React from 'react';
import CustomIcon from "./CustomIcon";

/**
 * 应用icon
 * 说明：
 *  appType="antd" 是加载的antd中的icon
 *  appType="custom" 是加载的自定义icon
 *  iconType 是指icon的标识
 */
const Icon = ({ iconType, type, ...rest}) => {
    
    return <CustomIcon type={type} {...rest} />;
};

export default Icon;
