//为元素添加||移除class
var mvc=function($eles,mv,cla){
    if(mv.toLowerCase()=='rem'){
        $eles.removeClass(cla);
    }else if(mv.toLowerCase()=='add'){
        $eles.addClass(cla);
    }
}
$(function(){
    var bigh = $('#bimg .carousel-inner img').height();
    $('#bimg .carousel-inner').height(bigh-5);
    var sigh = $('#simg .carousel-inner img').height();
    $('#simg .carousel-inner').height(sigh-20);
    var $eles = $('ul.list-unstyled li');
    var $flw = $('.laprli').children();
    if($flw.length>2){
    $eles.on('click',function(){
        var $ele = $(this);
        mvc($ele.siblings().children(),'rem','active');
        mvc($ele.children(),'add','active');
    });
    $(window).on('scroll',function(){
        var $eles = $('ul.list-unstyled li');
        var $sTop=document.body.scrollTop||document.documentElement.scrollTop;
        var $bah = parseInt($('.banner').css('height'));
        var hfs = $('div.laprli>div');
        var obj={};
        var prev=$bah;
        var num = 0;
        for(var i =0;i<hfs.length;i++){
            prev += parseInt(hfs.eq(i).css('height'));
            obj[i] = prev;
        }
        if($sTop<$bah){
            mvc($eles.children(),'rem','active');
        }else if($sTop<obj[0]-num&&$sTop>$bah){
            mvc($eles.children(),'rem','active');
            mvc($eles.eq(0).children(),'add','active');
        }else if($sTop<obj[1]){
            mvc($eles.children(),'rem','active');
            mvc($eles.eq(1).children(),'add','active');
        }else if($sTop<obj[2]){
            mvc($eles.children(),'rem','active');
            mvc($eles.eq(2).children(),'add','active');
        }else if($sTop<obj[3]){
            mvc($eles.children(),'rem','active');
            mvc($eles.eq(3).children(),'add','active');
        }else{
            mvc($eles.children(),'rem','active');
            mvc($eles.eq(4).children(),'add','active');
        }
    })
}else{
    $eles.parent().parent().hide();
}
    var $vbtn = $('.video>.icon');
    var $vid = $vbtn.parent().children().eq(2);
    var $img = $vbtn.parent().children().eq(1);
    $vbtn.on('click',function(){
        $img.hide();
        $vbtn.hide();
        //alert( $vid.attr('class'));
        $vid[0].play();
        $vid.attr('controls','controls');
    })
    $vid.on('pause',function(){
        $vbtn.show();
    })

    //查找触发事件的元素
    var $chbAll = $(
        "table>thead th:first-child>input"
    );
    //绑定元素
    $chbAll.on('click',function(){
        //查找要修改的元素
        var $chbs = $('table>tbody>tr>td:first-child>input');
        //修改元素
        for(var chb of $chbs){
            chb.checked=this.checked;
        }
    })
})

$(window).on('resize',function(){
    var bigh = $('#bimg .carousel-inner img').height()
    $('#bimg .carousel-inner').height(bigh);
    var father = $('#bimg .carousel-inner').height();
    if(bigh!=father){
        $('#bimg .carousel-inner').height(bigh);
    }
    var sigh = $('#simg .carousel-inner img').height()
    $('#simg .carousel-inner').height(sigh);
    var sfather = $('#simg .carousel-inner').height();
    if(sigh!=sfather){
        $('#simg .carousel-inner').height(sigh);
    }
})

/*
//1.查找触发事件的元素
var chbs = document.querySelectorAll(
    'table>tbody>tr>td:first-child>input'
);
//2.绑定事件处理函数
//for(var chb of chbs){
    var table = document.querySelector('table');
    table.tBodies[0].onclick=function(e){
        var chb = e.target;
        var unchecked=document.querySelector('table>tbody>tr>td:first-child>input:not(:checked)');
        //console.log(unchecked);
        chbAll.checked=unchecked==null;
    }
//     //chb.onclick=function(){
//         //var chb = this;
//         //3,查找要修改的元素
//         //4,修改元素
//         var unchecked=document.querySelector('table>tbody>tr>td:first-child>input:not(:checked)');
//         //console.log(unchecked);
//         chbAll.checked=unchecked==null;
//     }
// }

*/