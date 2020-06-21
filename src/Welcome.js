import React from "react";


//class Welcome extends React.Component{
//		render(){
//			return( <h1> Welcome </h1> );
//		}

//}

let Welcome = (props)=>{
	//props cant change its inmutable
	//this.props={
	//	name:"HARRY POTTER..."
	//}
	return(<h1>Welcome {props.name} </h1>)
}


export default Welcome;