import React, { useContext } from 'react';
import { StoreCtx } from '@/store';
 
import ItemPanel from './ItemPanel';
import FlowPanel from './FlowPanel';

const FormPanel = () => {

    const { formPanelStore } = useContext(StoreCtx);

    return <div className='form_panel'>
        <div className='item_panel'>
            <ItemPanel />
        </div>
        <div className='flow_panel'>
            <FlowPanel formPanelStore={formPanelStore}/>
        </div>
        <div className='config_panel'></div>
        {/*language=SCSS*/}
        <style jsx>{`
            .form_panel{
                height: 100%;
                display: flex;
                min-width: 900px;
                .item_panel{
                    height: 100%;
                    width: 200px;
                };
                .flow_panel{
                    height: 100%;
                    width: calc(100% - 500px);
                    min-width: 300px;
                    background: yellow
                };
                .config_panel{
                    height: 100%;
                    width: 300px;
                    background: green
                }
            }
        `}</style>
    </div>
}

export default FormPanel;