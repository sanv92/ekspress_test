$(document).ready(function() {

//search animate
   //$("input[type=search]").focus(function () { $(this).animate({ width : '200px' }, 300); });
   //$("input[type=search]").focusout(function () { $(this).animate({ width : '130px' }, 300); });  
//search animate


//caruser
$('#carusel ul').append($('#carusel ul li').clone().children('li').end());
        $('#carusel li:first').before($('#carusel li:last'));
    
        $('#cright').click(function(){
            var item_width = $('#carusel li').outerWidth() + 10;
            var left_indent = parseInt($('#carusel ul').css('left')) - item_width;

            $('#carusel ul:not(:animated)').animate({'left' : left_indent},500,function(){
                $('#carusel ul li:last').after($('#carusel ul li:first'));
                $('#carusel ul').css({'left' : '-285px'});
            });
        });

function doStuff() { $('#cright').trigger('click'); } setInterval(doStuff, 5000);

        $('#cleft').click(function(){
            var item_width = $('#carusel ul li').outerWidth() + 10;
            var left_indent = parseInt($('#carusel ul').css('left')) + item_width;

            $('#carusel ul:not(:animated)').animate({'left' : left_indent},500,function(){
        $('#carusel ul li:first').before($('#carusel ul li:last'));
        $('#carusel ul').css({'left' : '-285px'});
            });


        });
//caruser


});
