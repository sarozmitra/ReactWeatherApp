//function getTempCallback (location, callback){
//	callback(undefined, 78);
//	callback('City not found')
//}
//
//getTempCallback('london', function(err, temp){
//	if(err){
//		console.log('error', err);
//	} else{
//		console.log('success', temp);
//	}
//});
//
//function getTempPromise(location){
//	return new Promise(function(resolve, reject){
//		setTimeout(function(){
//			resolve(79);
//			reject('City Not Found');
//		},1000);		
//	});
//}
//
//getTempPromise('london').then(function(temp){
//	console.log('Promise sucess'); 
//}, function(err){
//	console.log('Promise error', err);
//})

// Challenge Area

function addPromise(a ,b){
	return new Promise(function(resolve, reject){
		if( typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		}else{
			reject('Not a number');
		}
	})
}

addPromise(2, 3).then(function(sum){
	console.log('sucess', sum);
},function(err){
	console.log( 'error', err);
});

addPromise('dsds', 3).then(function(sum){
	console.log('sucess', sum);
},function(err){
	console.log( 'error', err);
});