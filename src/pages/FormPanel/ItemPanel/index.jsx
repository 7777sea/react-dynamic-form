import React from 'react';
import { EnumItemList, EnumItemConfMap } from './constants';
import Icon from '@/components/Icon';

const ItemPanel = () => {

    return <div className='item_panel_list'>
        {
            EnumItemList.map(i => (
                <div key={i}>{ EnumItemConfMap[i] ? <ItemButton {...EnumItemConfMap[i]}/> : i }</div>
            ))
        }
        {/*language=SCSS*/}
        <style jsx>{`
            .item_panel_list{
                padding: 10px
            }
        `}</style>
    </div>
}

export default ItemPanel;

const ItemButton = ({icon, label}) => {

    return <div className='item_button'>
        <Icon type={icon}/>
        <span className='label'>{label}</span>
        {/*language=SCSS*/}
        <style jsx>{`
            .item_button{
                text-indent: 10px;
                padding: 10px;
                border-radius: 4px;
                line-height: 25px;
                cursor: move;
                box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 4px 0px;
                &:hover{
                    box-shadow: rgba(0, 0, 0, 0.12) 6px 6px 5px;
                    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                };
                .label{
                    margin-left: 10px;
                    user-select: none
                }
            }
        `}</style>
    </div>
}