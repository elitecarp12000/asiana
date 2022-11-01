$(document).ready(function(){
    let air =$('.airp');

    air.each(function(){
        $(this).click(function(){
            $('.airp').removeClass('air_c');
            $(this).addClass('air_c').parent().siblings().children('a')
            .removeClass('air_c');
            return false;
        })
    })

    let q_title=$('.question dt');
    q_title.click(function(){
        $(this).next().slideToggle();
        $(this).find('i.fa-angle-down').toggleClass('on');
    })
  
})