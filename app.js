(function(){
        var app=angular.module("Exchange",[]);
        
        app.controller("Money",function(){
                this.value=curren;
            });
        
        var curren={
            dollars:27,
            euros:29
            };
})();