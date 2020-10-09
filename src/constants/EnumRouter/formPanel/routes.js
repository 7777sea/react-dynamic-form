import { collectRouteUris } from "../util";
import EnumRouter from './index';

/**
 * 数据报告相关的路由
 */
export const routes = [
    {
        uri: EnumRouter.formPanel,
        component: import("@/pages/FormPanel"),
        stores: {
            formPanelStore: require("@/pages/FormPanel/store/FormPanelStore").default
        }
    }
];

export const uriList = collectRouteUris(routes);
