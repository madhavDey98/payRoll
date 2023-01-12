$(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".singleTrans").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $("#Invest").click(function () {
    $("#first_stamp").removeClass("d-none");
    $("#sec_stamp").removeClass("d-none");
  });
  $("#Saving").click(function () {
    $("#first_stamp").removeClass("d-none");
    $("#sec_stamp").addClass("d-none");
  });
  $("#Stack").click(function () {
    $("#first_stamp").addClass("d-none");
    $("#sec_stamp").removeClass("d-none");
  });

  var planBtn = $(".pricing-plan");
  var pricingCol = $(".col-pricing");

  planBtn.click(function () {
    var planId = $(this).data("plan");
    var activePlan = $("#" + planId);

    planBtn.removeClass("active-btn");
    $(this).addClass("active-btn");
    pricingCol.removeClass("active-plan");
    activePlan.addClass("active-plan");
  });

  setTimeout(function () {
    Swal.fire({
      title: "Please Enter Your Email To get Free 2 months Subscription",
      input: "email",
      inputPlaceholder: "johnsmith@xyz.com",
      imageUrl: "./img/main_logo.svg",
      imageWidth: 250,
      imageHeight: 80,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonColor: "#704b9e",
      cancelButtonColor: "#f26765",
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        $("#sub_form").addClass("d-none");
        $("#main_form").removeClass("d-none");
      }
    });
  }, 1500);
});
