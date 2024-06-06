$(document).ready(function () {

    const arraySections = [
        { 
             id: "home-section-container",
            idUsed: "home-section-container"
        },
        {
            id: "aboutus-section-container",
            idUsed: "track_records"
        }, {
            id: "services-section-container",
            idUsed: "services-section-container"
        }, {
            id: "TeamCredentials-section-container",
            idUsed: "team_credentials"
        }, {
            id: "ContactUs-section-container",
            idUsed: "contact"
        } 
    ];
    
    $(window).scroll(function () {
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        let maxVisiblePercentage = 0;
        let sectionToActivate = null;
    
        arraySections.forEach(section => {
            let sectionName = section.id.split("-")[0];
            let sectionNavId = `frontier-${sectionName}`;
            let navItem = document.getElementById(sectionNavId);
    
            let $section = $(`#${section.idUsed}`);
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

    // const mainServicesCards= [
    //     `<div class="card-body">
    //         <i class="fas fa-lock fa-chart-line icon-card"></i>
    //         <h5 class="card-title">Debt Markets</h5>
    //         <p class="card-text">Access a wide range of financing options to fuel your growth.</p>
    //         <button class="btn btn-primary view-more-services-btn" card-service-id="0" >View more</button>
    //     </div>`,

    //     ` <div class="card-body">
    //     <i class="fas fa-chart-bar fa-trend-up icon-card"></i>
    //     <h5 class="card-title">Equity Markets</h5>
    //     <p class="card-text">Elevate your company's potential with expert equity transactions.</p>
    //     <button class="btn btn-primary view-more-services-btn "  card-service-id="1" >View more</button>
    //     </div>`,

    //     ` <div class="card-body">
    //     <i class="fas fa-lightbulb icon-card"></i>
    //     <h5 class="card-title">Advisory</h5>
    //     <p class="card-text">Let our team illuminate the path to your financial success.</p>
    //     <button class="btn btn-primary view-more-services-btn" card-service-id="2">View more</button>
    //  </div>`
    // ]

    // const subservices = {

    //     "0":[
    //         {
    //             service:"Securitizations",
    //             description:"",
    //         },
    //         {
    //             service:"Debentures",
    //             description:"",
    //         },
    //         {
    //             service:"Commercial Papers",
    //             description:"",
    //         },
    //         {
    //             service:"Loan Syndications",
    //             description:"",
    //         },
    //         {
    //             service:"Project Financing",
    //             description:"",
    //         },
    //         {
    //             service:"Off -shore Foreign Currency Loans",
    //             description:"",
    //         }
    //     ],
    //     "1":[
    //         {
    //             service:"Private Equity",
    //             description:"",
    //         },
    //         {
    //             service:"Venture Capital",
    //             description:"",
    //         },
    //         {
    //             service:"Start Up Capital",
    //             description:"",
    //         },
    //         {
    //             service:"IPO Advisory",
    //             description:"",
    //         }
    //     ],

    //     "2":[
    //         {
    //             service:"Equity Valuations",
    //             description:"",
    //         },
    //         {
    //             service:"Mergers and Acquisitions",
    //             description:"",
    //         },
    //         {
    //             service:"Financial Restructuring",
    //             description:"",
    //         },
    //         {
    //             service:"Financial Feasibility Studies",
    //             description:"",
    //         },
    //     ],
    // }


    // $(".services-layout").on("click", ".view-more-services-btn", function() {

    //     let cardClicked = $(this).attr("card-service-id");
    //     let firstChild =  $(".services-layout").children().first();


    //     if($(".card-bg-container").hasClass("show-board")){

    //         $(this).text("Show more");
    //         $(this).removeClass("btn-danger");
    //         $(this).addClass("btn-primary");

    //         firstChild.find(".card-body").remove();
    //         firstChild.append(mainServicesCards[0]);

    //     }else{
    //         $(this).text("Show less");
    //         $(this).removeClass("btn-primary");
    //         $(this).addClass("btn-danger");

    //         let $card = $(this).closest(".card");

    //         let $body_of_card= $card.find(".card-body");

    //         firstChild.find(".card-body").remove();
    //         firstChild.append($body_of_card);

    //         if(parseInt(cardClicked)!==0){
    //             $card.append(mainServicesCards[cardClicked])
    //         }

           
           
    //     }
    
    //     $(".card-bg-container").toggleClass("show-board");

    //    let $subServicelayout  = $(".subservice-layout")
    //    $subServicelayout.find(".card").remove();

    //    subservices[cardClicked].forEach(serviceObj=>{
    //         $subServicelayout.append(
    //             `
    //             <div class="card">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${serviceObj.service}</h5>
    //                     <p class="card-text">${serviceObj.description}</p>
    //                 </div>
    //             </div>
    //             `
    //         )
    //    })


       

    // });


});
