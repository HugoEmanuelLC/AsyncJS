

// BIBLIOTHEQUE JQUERY
$(function(){

    // SIBLES
    let html_body = $('html, body');
    let bloc_starship_1 = $('#bloc_starship_1');
    // let bloc_planet = $('#bloc_planet');
    let bloc_meteors = $('#bloc_meteors');



    // BTS
    let a_scroll_up = $(".a_scroll_up");

    let a_scroll_starship_1 = $(".a_scroll_starship_1");
    let a_scroll_deat_star = $(".a_scroll_deat_star");
    let a_scroll_planet = $(".a_scroll_planet");
    let a_scroll_characters = $(".a_scroll_characters");



    //FUNCTIONs
    a_scroll_up.click(function(){
        html_body.animate({
            scrollTop: html_body.offset().top
        }, 2000);
    })
    
    a_scroll_starship_1.click(function(){
        html_body.animate({
            scrollTop: bloc_starship_1.offset().top - 100
        }, 2000);
    })
    
    a_scroll_deat_star.click(function(){
        html_body.animate({
            scrollTop: bloc_starship_1.offset().top + 130
        }, 2000);
    })
    
    a_scroll_planet.click(function(){
        html_body.animate({
            scrollTop: bloc_starship_1.offset().top + 800
        }, 2000);
    })

    a_scroll_characters.click(function(){
        html_body.animate({
            scrollTop: bloc_meteors.offset().top + 400
        }, 2000);
    })
})