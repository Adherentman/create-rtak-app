import * as React from 'react';
import { Card } from 'antd';


const { Meta } = Card;
const cardStyle = {
  width: '400px',
  margin: '0 auto'
}
const gridStyle = {
  width: '300px',
};

interface CardsProps {

}
// http://pic2.zhimg.com/50/f9e31e4f02fb06e20ba031ab1e351d55_hd.jpg
export default class Cards extends React.Component<CardsProps, any> {
  render() {
    return <div style={cardStyle}>
      <Card
        hoverable
        cover={<img alt="example" src={require("../images/pi.jpg")} />}
        style={gridStyle}>
        <Meta
          title="Thank you for using!"
          description="if you don't like ant desgin, you can use:"
        />
        <code>yarn remove antd</code>
      </Card>
    </div>
  }
}
