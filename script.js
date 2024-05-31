$(document).ready(function () {

    const arraySections = [
        "home-section-container",
        "aboutus-section-container",
        "services-section-container",
        "TeamCredentials-section-container",
        "ContactUs-section-container"
    ];
    
    $(window).scroll(function () {
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        let maxVisiblePercentage = 0;
        let sectionToActivate = null;
    
        arraySections.forEach(section => {
            let sectionName = section.split("-")[0];
            let sectionNavId = `frontier-${sectionName}`;
            let navItem = document.getElementById(sectionNavId);
    
            let $section = $(`#${section}`);
            let elementTop = $section.offset().top;
            let elementBottom = elementTop + $section.outerHeight();
    
            // Calculate the visible part of the section
            let visibleTop = Math.max(elementTop, viewportTop);
            let visibleBottom = Math.min(elementBottom, viewportBottom);
            let visibleHeight = visibleBottom - visibleTop;
            let visiblePercentage = (visibleHeight / $section.outerHeight()) * 100;
    
            if (visiblePercentage > maxVisiblePercentage) {
                maxVisiblePercentage = visiblePercentage;
                sectionToActivate = navItem;
            }
    
            navItem.classList.remove("active");
        });
    
        if (sectionToActivate) {
            sectionToActivate.classList.add("active");
        }
        setShadow();
    });
    
    function setShadow (){
        let viewportTop = $(window).scrollTop();
        let navBottom = $(".header").outerHeight();

        if(viewportTop>(navBottom/2)){
            $(".header").addClass("boxshadow")
        }else{
            $(".header").removeClass("boxshadow")
        }
    }
    
    // function RevealContent() {
    //     var reveals = document.querySelectorAll(".reveal");
    //     for (var i = 0; i < reveals.length; i++) {
    //         var windowHeight = window.innerHeight;
    //         var elementTop = reveals[i].getBoundingClientRect().top;
    //         // var elementVisible = 100;
    //         if ((elementTop < windowHeight)) {
    //             reveals[i].classList.add("active");
    //         } else {
    //             reveals[i].classList.remove("active");
    //         }
    //     }
    // }

    // window.addEventListener("scroll", RevealContent);
    // window.addEventListener("load", RevealContent);

})