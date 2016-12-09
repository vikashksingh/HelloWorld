(function(){
angular.module("app",[])
.controller("myContrl",printHello);
function printHello(){
var vm=this;
vm.greeting="Hello! World";
}
}())
