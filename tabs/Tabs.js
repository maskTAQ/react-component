import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
class TabNav extends Component{
	getTabNav(){
		let {panels,activeIndex} = this.props;
		return React.Children.map(panels,(item,i)=>{
			let {order,tabName} = item.props;
			let classes = classnames({
				active:activeIndex === i
			});
			return <li key={order} data-id={order} className={classes} onClick={this.props.clickTabNav.bind(null,i)}>{tabName}</li>
		})
	}
	
	render(){
		return(<div className="tab-nav-contain">
			<ul className="tab-nav">
			{this.getTabNav()}
			</ul>
			</div>)
	}
}
class TabContent extends Component{
	getContent(){
		let {panels,activeIndex} = this.props;
		return React.Children.map(panels,(item,i)=>{
			let {children} = item.props;
			let classes = classnames({
				active:activeIndex === i
			});
			return <div className="tab-content" className={classes}>{children}</div>
		})
	}
	render(){
		return(<div className="tab-content-contain">
			{this.getContent()}
			</div>)
	}
}
export default class Tabs extends Component{
	constructor(props){
		super(props);
		this.state={
			activeIndex:this.props.active || 0
		}
	}
	clickTabNav(i){
		this.setState({
			activeIndex:i
		});
		this.props.callBack(i);
	}
	render(){
		let {children,className} = this.props;
		return(<div className={className}>
			<TabNav panels={children} activeIndex={this.state.activeIndex} clickTabNav={this.clickTabNav.bind(this)}></TabNav>
			<TabContent panels={children}  activeIndex={this.state.activeIndex}></TabContent>
			</div>)
	}
}