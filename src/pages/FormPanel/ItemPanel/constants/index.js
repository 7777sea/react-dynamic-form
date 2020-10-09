
/**
 *  input: "INPUT",                     // 单行文本
    textarea: "TEXTAREA",               // 多行文本
    richText: "RICH_TEXT",              // 富文本
    radio: "RADIO",                     // 单选框
    checkbox: "CHECKBOX",               // 多选框
    select: "SELECT",                   // 下拉框
    multiSelect: "MULTI_SELECT",        // 多级下拉框
    number: "NUMBER",                   // 数字
    time:"TIME",                        //时间
    date:'DATE',                        //日期
    member: 'MEMBER',                    //成员
    group: 'GROUP',                      //成员组
    upload: 'UPLOAD',                    //上传
    configurationItem: 'CONFIGURATION_ITEM',  //关联配置项
    addGroup:'ADD_GROUP',                 //添加分组
 */
export const EnumItemList = [
    'input',
    'textArea',
    'radio',
    'checkbox',
    'select',
    'multiSelect',
    'number',
    'time',
    'date',
    'upload'
]


export const EnumItemConfMap = {
    input: {
        label: '单行文本',
        icon: 'danhangwenben'
    },
    textArea: {
        label: '多行文本',
        icon: 'duohangwenben'
    },
    radio: {
        label: '单选框',
        icon: 'danxuankuang'
    },
    checkbox: {
        label: '多选框',
        icon: 'zuhedanxuan'
    },
    select: {
        label: '下拉框',
        icon: 'xialakuang'
    },
    multiSelect: {
        label: '多级下拉',
        icon: 'duojixiala'
    },
    number: {
        label: '数字',
        icon: 'shuzi'
    },
    time: {
        label: '时间',
        icon: 'shijian'
    },
    date: {
        label: '日期',
        icon: 'riqi'
    },
    upload: {
        label: '上传',
        icon: 'tupianzhanshi'
    },
}