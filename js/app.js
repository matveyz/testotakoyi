$('#first-pagination').on({
    'click': function() {
        $(".pagination1").attr('src', "img/pagination-active.png");
        $(".pagination2").attr('src', "img/pagination-noactive.png");
        $(".pagination3").attr('src', "img/pagination-noactive.png");
    }
});

$('#second-pagination').on({
    'click': function() {
        $(".pagination2").attr('src', "img/pagination-active.png");
        $(".pagination1").attr('src', "img/pagination-noactive.png");
        $(".pagination3").attr('src', "img/pagination-noactive.png");
    }
});

$('#third-pagination').on({
    'click': function() {
        $(".pagination3").attr('src', "img/pagination-active.png");
        $(".pagination1").attr('src', "img/pagination-noactive.png");
        $(".pagination2").attr('src', "img/pagination-noactive.png");
    }
});




$(".first-news").on({
    'mouseenter': function() {
        $(".button1").css("margin-top", "76px");
    },
    'mouseleave': function() {
        $(".button1").css("margin-top", "0px");
    }
});

$(".second-news").on({
    'mouseenter': function() {
        $(".button2").css("margin-top", "76px");
    },
    'mouseleave': function() {
        $(".button2").css("margin-top", "0px");
    }
});

$(".third-news").on({
    'mouseenter': function() {
        $(".button3").css("margin-top", "76px");
    },
    'mouseleave': function() {
        $(".button3").css("margin-top", "0px");
    }
});

/* HEADER STARTS */
$('.active').on({
    'mouseenter': function() {
        $(".anim").css({ visibility: "visible" }).animate({ width: "38px" }).fadeIn();
    },
    'mouseleave': function() {
        $(".anim").css({ visibility: "visible" }).animate({ width: "38px" }).fadeOut();
    }
});
$('.active1').on({
    'mouseenter': function() {
        $(".anim2").css({ visibility: "visible" }).animate({ width: "55px" }).fadeIn();
    },
    'mouseleave': function() {
        $(".anim2").css({ visibility: "visible" }).animate({ width: "55px" }).fadeOut();
    }
});
$('.active2').on({
    'mouseenter': function() {
        $(".anim3").css({ visibility: "visible" }).animate({ width: "43px" }).fadeIn();
    },
    'mouseleave': function() {
        $(".anim3").css({ visibility: "visible" }).animate({ width: "43px" }).fadeOut();
    }
});
$('.active3').on({
    'mouseenter': function() {
        $(".anim4").css({ visibility: "visible" }).animate({ width: "43px" }).fadeIn();
    },
    'mouseleave': function() {
        $(".anim4").css({ visibility: "visible" }).animate({ width: "43px" }).fadeOut();
    }
});
$('.active4').on({
    'mouseenter': function() {
        $(".anim5").css({ visibility: "visible" }).animate({ width: "51px" }).fadeIn();
    },
    'mouseleave': function() {
        $(".anim5").css({ visibility: "visible" }).animate({ width: "51px" }).fadeOut();
    }
});
$('.active5').on({
    'mouseenter': function() {
        $(".anim6").css({ visibility: "visible" }).animate({ width: "37px" }).fadeIn();
    },
    'mouseleave': function() {
        $(".anim6").css({ visibility: "visible" }).animate({ width: "37px" }).fadeOut();
    }
});
$('.active6').on({
    'mouseenter': function() {
        $(".anim7").css({ visibility: "visible" });
    },
    'mouseleave': function() {
        $(".anim7").css({ visibility: "visible" });
    }
});

/* HEADER ENDS */

/* CONTENT STARTS */

/* For first img */
$('.photos2').on({
    'mouseenter': function() {
        $(".first2").addClass("first22");
    },
    'mouseleave': function() {
        $(".first2").removeClass("first22");
    }
});
$('.photos2').on({
    'mouseenter': function() {
        $(".move2").addClass("move22");
    },
    'mouseleave': function() {
        $(".move2").removeClass("move22");
    }
});
$(document).ready(function() {
    jQuery('.photos2').hover(
        function() {
            $(this).find(".tohide").stop().fadeIn();
        },
        function() {
            $(this).find(".tohide").stop().fadeOut();
        }
    );
});

$('.opp').on({
    'mouseenter': function() {
        $(".photos2").addClass("photos22");
    },
    'mouseleave': function() {
        $(".photos2").removeClass("photos22");
    }
});
/* For second img */
$('.photos1').on({
    'mouseenter': function() {
        $(".first1").addClass("first22");
    },
    'mouseleave': function() {
        $(".first1").removeClass("first22");
    }
});
$('.photos1').on({
    'mouseenter': function() {
        $(".move3").addClass("move22");
    },
    'mouseleave': function() {
        $(".move3").removeClass("move22");
    }
});
$(document).ready(function() {
    jQuery('.photos1').hover(
        function() {
            $(this).find(".tohide").stop().fadeIn();
        },
        function() {
            $(this).find(".tohide").stop().fadeOut();
        }
    );
});
$('.opp1').on({
    'mouseenter': function() {
        $(".photos1").addClass("photos33");
    },
    'mouseleave': function() {
        $(".photos1").removeClass("photos33");
    }
});
/* For third img */
$('.photos3').on({
    'mouseenter': function() {
        $(".first3").addClass("first22");
    },
    'mouseleave': function() {
        $(".first3").removeClass("first22");
    }
});
$('.photos3').on({
    'mouseenter': function() {
        $(".move4").addClass("move22");
    },
    'mouseleave': function() {
        $(".move4").removeClass("move22");
    }
});
$(document).ready(function() {
    jQuery('.photos3').hover(
        function() {
            $(this).find(".tohide").stop().fadeIn();
        },
        function() {
            $(this).find(".tohide").stop().fadeOut();
        }
    );
});
$('.opp2').on({
    'mouseenter': function() {
        $(".photos3").addClass("photos44");
    },
    'mouseleave': function() {
        $(".photos3").removeClass("photos44");
    }
});
/* For fourth img */
$('.photos4').on({
    'mouseenter': function() {
        $(".first4").addClass("first22");
    },
    'mouseleave': function() {
        $(".first4").removeClass("first22");
    }
});
$('.photos4').on({
    'mouseenter': function() {
        $(".move5").addClass("move22");
    },
    'mouseleave': function() {
        $(".move5").removeClass("move22");
    }
});
$(document).ready(function() {
    jQuery('.photos4').hover(
        function() {
            $(this).find(".tohide").stop().fadeIn();
        },
        function() {
            $(this).find(".tohide").stop().fadeOut();
        }
    );
});
$('.opp3').on({
    'mouseenter': function() {
        $(".photos4").addClass("photos55");
    },
    'mouseleave': function() {
        $(".photos4").removeClass("photos55");
    }
});



/* CONTENT ENDS */
