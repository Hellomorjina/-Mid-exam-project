
    var glide07 = new Glide('.glide-08', {
        type: 'slider',
        focusAt: 'center',
        perView: 1,
        autoplay: 3500,
        animationDuration: 400,
        gap: 0,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
    });

    glide07.mount();

// ***** endding_testimonials_section****

//********** start-career_section******
    $(document).ready(function(){
        $("#flip").click(function(){
            $("#panel").slideToggle(1500);
        });
    });
    $(document).ready(function(){
        $("#to").click(function(){
            $("#tog").slideToggle(1500);
        });
    });
    $(document).ready(function(){
        $("#tor").click(function(){
            $("#togg").slideToggle(1500);
        });
    });
//********** ending-career_section******