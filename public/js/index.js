$(function(){
    $.ajax({
      url:"http://localhost:3000/index",
      type:"get",
      dataType:"json",
      success:function(res){
       var vm = new Vue({
         el:".mymt>.bg-dark",
         data:{
           res
         }
       })
      }
    })
    .then(res=>{ 
      
    })
    //http://localhost:3000
  })