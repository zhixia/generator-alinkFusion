import React from 'react';
import { Tab, Button, Calendar } from '@alife/next';
// import Button from '@alife/next/lib/button';

const { TabPane } = Tab;

class Hello extends React.Component {

    onTabChange(key) {
        console.log(key);
    }

    render() {
        return <div>
            <Tab type="wrapped" onChange={this.onTabChange.bind(this)}>
                <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
                <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
                <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
            </Tab>
             <Button type="normal">普通按钮</Button>
        </div>
    }
}

export default Hello;