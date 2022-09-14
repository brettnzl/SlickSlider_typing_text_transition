    // The Typing Effect used for Home Page Hero
    let i = 0;
    let char = '';
    let index = 0
    let text = ''
    
    function typeSlider() {
        /* The speed/duration of the effect in milliseconds */
        if (i < text.length) {
            // document.getElementById("typerText").innerHTML += text.charAt(i);
            char += text.charAt(i);
            console.log(char);
            jQuery('.typeSlide[data-slick-index="'+index+'"] .lineText').html(char); 
            i++;
            setTimeout(typeSlider, 80);
        }
    }

    // function deleteCharacters() {
    //     text = jQuery('.typeSlide[data-slick-index="'+current+'"]').find('.lineText').text()
    //     if ( text.length != 0 ) {
    //         text = text.substring(0, text.length - 1);
    //         jQuery('.typeSlide[data-slick-index="'+current+'"] .lineText').html(text); 
    //         i++;
    //         setTimeout(deleteCharacters, 80);
    //     }
    // }

    //Slick Slider the multiple top text
    jQuery('.typingSlider').slick({
        infinite: true,
        arrows: false, 
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,

    });

    let slideText = '';
    // before the change find the text that needs to be typed
    // remove the text from the span
    jQuery('.typingSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log('before');
        slideText = jQuery('.typeSlide[data-slick-index="'+nextSlide+'"]').find('.lineText').text();
        
        jQuery('.typeSlide[data-slick-index="'+nextSlide+'"]').find('.lineText').text('') //Remove current text;
        // deleteCharacters();
    });

    // Retype out the text collected before change.
    jQuery('.typingSlider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        i = 0;
        char = '';
        index = currentSlide;
        text = slideText
        typeSlider();
    });
              
    
