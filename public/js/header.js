$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll('#header');
        }
    })
    $.ajax({
        url:"footer.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll('#footer');
        }
    })
})
