import { to } from './util';

import globalRoute from './globalRoute'; 
import formPanel from './formPanel';
/**
 * 路由枚举
 */
const EnumRouter = {
    rootRoute: to(''),		        // 根路由
    ...globalRoute,        // 全局路由
    ...formPanel,         //首页
};

export default EnumRouter;
