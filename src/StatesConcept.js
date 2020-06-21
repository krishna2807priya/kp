import React,{Component} from 'react';
let Counter=()=>{
	const [count,changeCount]=useState(0);
	return(
		<div style={{textAlign:"center"}}>
		<h2>{count}</h2>
		<button onClick={()=>(changeCount(count+1))}>increase</button>
		</div>



		)
}
export default Counter;