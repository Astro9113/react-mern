import React, { Component } from 'react';
import { Button, Layout } from 'element-react';
import 'element-theme-default';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <Button>Hello element-react</Button>
                <Layout.Row>
                    <Layout.Col span="24"><div className="grid-content bg-purple-dark"></div></Layout.Col>
                </Layout.Row>
            </div>
        );
    }
}

export default HelloWorld;
