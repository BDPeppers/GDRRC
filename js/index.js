// Mobile Navigation/////////////////////////////
$('#menu-toggle-btn').click(function(){
    $('#menu-toggle').toggleClass('fa-bars, fa-times');
    //close everything on level 2 is level one is closed
    if($('#menu-toggle').hasClass('fa-bars')){
        $('.mobile-dropdown-L2').css('display', 'none');
    }
    // function closeIt(openMenu, menu2, menu3){
    //     //only one menu opened at a time for the second level
    //     if(!($(this.openMenu).css('display') == 'none')){
    //         $(this.menu2).hide();
    //         $(this.menu3).hide(); 
    //     }
    // };

    //dropdown
    $('.mobile-dropdown').toggle(100);
    //level two
    $('#DD-L2-Community').click(function(){
        $('#Community').toggle(100);
        // closeIt('#Community', '#ADR', '#ER');
    });
    $('#DD-L2-ADR').click(function(){
        $('#ADR').toggle(100);
        // closeIt('#ADR','#Community','#ER');
    });
    $('#DD-L2-ER').click(function(){
        $('#ER').toggle(100);
        // closeIt('#ER','#ADR','#Community');
    });
    
});

