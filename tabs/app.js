import React , {Component} from 'react';
import ReactDOM from 'react-dom';

import Tabs from './Tabs';

class App extends Component{
	render(){
		return(<Tabs className="tabs" active={3} callBack={(i)=>{alert("下标变为 "+i+" 了！")}}>
			<tabPane order={1} tabName={'第一'}>第一个的内容</tabPane>
			<tabPane order={2} tabName={'第二'}>第二个的内容</tabPane>
			<tabPane order={3} tabName={'第三'}>第三个的内容</tabPane>
			<tabPane order={4} tabName={'第四'}>第四个的内容</tabPane>
			</Tabs>)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));