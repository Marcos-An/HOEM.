import React from 'react';
import { Tabs } from 'antd';
import StreetView from '../../Components/Maps/StreetView'
import Maps from '../../Components/Maps/Maps'
const { TabPane } = Tabs;
 
export default function Mapas(props){
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Street View" key="1">
                <div style={{height: 430}}>
                    <StreetView Lan={props.Lan} Lon={props.Lon}/>
                </div>
            </TabPane>
            <TabPane tab="Mapa" key="2">
                <div style={{height: 430}}>
                    <Maps Lan={props.Lan} Lon={props.Lon}/>
                </div>
            </TabPane>
        </Tabs>
    );
}
