export function increaseCounter(payload = null){
	return function (dispatch){
		dispatch(
		{
			type: "Increase",
			//payload : number
		})
	}
}


export function reduceCounter(payload = null){
	return function (dispatch){
		dispatch(
		{
			type: "Reduce",
			//payload : number
		})
	}
}
