import * as React from 'react';
import { Card } from 'antd';
import './style.scss';

const { Meta } = Card;
const cardStyle = {
  width: '400px',
  margin: '0 auto'
}
const gridStyle = {
  width: '300px',
};

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={cardStyle}>
          <Card
            hoverable
            cover={<img alt="example" src="http://pic2.zhimg.com/50/f9e31e4f02fb06e20ba031ab1e351d55_hd.jpg" />}
            style={gridStyle}>
            <Meta
              title="Thank you for using!"
              description="if you don't like ant desgin, you can use:"
            />
            <code>yarn remove antd</code>
          </Card>
        </div>
      </div>
    );
  }
}