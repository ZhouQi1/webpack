import _ from 'lodash';
import './style.css';
import printMe from './print.js';
function component(){
	var element=document.createElement('div');
	element.innerHTML=_.join(['hello','webpack'],' ')
	element.classList.add('hello');
	
	var btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick =  printMe;
	element.appendChild(btn);
	return element
}
if(module.hot){
	module.hot.accept('./print.js',function(){
		console.log('Accepting the updated printMe module!');
     	printMe();
	})
}
document.body.appendChild(component())