$(document).ready(function () {
    console.log("jQuery is ready!");

    $("h1").css("color", "#3a6ea5");
    $("#headline").css("font-style", "italic");
    $(".intro").css("font-size", "18px");

    $("#greetBtn").click(function () {
        $("#headline").text("Thank you for visiting my page!");
        $("#welcome").html("Welcome to <b>My jQuery Portfolio</b>");
    });

    $("#lightBtn").click(function () {
        $("body").css({ "background-color": "#f2f2f2", "color": "#222" });
        $("section").css("background-color", "white");
    });

    $("#darkBtn").click(function () {
        $("body").css({ "background-color": "#1e1e1e", "color": "#eee" });
        $("section").css("background-color", "#2d2d2d");
    });

    $("#hideBtn").click(function () {
        $("#status, #facts").hide();
    });

    $("#showBtn").click(function () {
        $("#status, #facts").show();
    });

    $("#toggleBtn").click(function () {
        $("#status, #facts").toggle();
    });

    $("#fadeInBtn").click(function () {
        $(".images img").fadeIn();
    });

    $("#fadeOutBtn").click(function () {
        $(".images img").fadeOut();
    });

    $("#fadeToggleBtn").click(function () {
        $(".images img").fadeToggle();
    });

    $(".panel-title").click(function () {
        $(this).next().slideToggle();
    });

    $("#openAllBtn").click(function () {
        $(".panel").slideDown();
    });

    $("#closeAllBtn").click(function () {
        $(".panel").slideUp();
    });

    $("#addBtn").click(function () {
        let skill = $("#skillInput").val().trim();
        if (skill === "") {
            $("#skillMsg").text("Please enter a skill.");
            return;
        }
        $("#skillList").append("<li>" + skill + "</li>");
        $("#skillInput").val("");
        $("#skillMsg").text("");
    });

    $("#prependBtn").click(function () {
        let skill = $("#skillInput").val().trim();
        if (skill === "") {
            $("#skillMsg").text("Please enter a skill.");
            return;
        }
        $("#skillList").prepend("<li>" + skill + "</li>");
        $("#skillInput").val("");
        $("#skillMsg").text("");
    });

    $("#removeBtn").click(function () {
        $("#skillList li").last().remove();
    });

    $("#linkBtn").click(function () {
        $("#socialLink").attr("href", "https://github.com/Tilya1/Web1");
        $("#socialLink").text("My Web1 repository");
    });

    $("#nameInput").on("input", function () {
        $("#showName").text($(this).val());
    });

    $("#emailInput").on("input", function () {
        $("#showEmail").text($(this).val());
    });

    let barsOpen = false;

    $("#animateBtn").click(function () {
        if (barsOpen === false) {
            $("#barHtml").animate({ width: "90%" }, 1000);
            $("#barCss").animate({ width: "75%" }, 1000);
            $("#barJs").animate({ width: "50%" }, 1000);
            barsOpen = true;
        } else {
            $(".bar").animate({ width: "0%" }, 1000);
            barsOpen = false;
        }
    });
});
