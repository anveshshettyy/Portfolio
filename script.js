document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  // Updated scrollerProxy setup
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: locoScroll.el.getBoundingClientRect().top,
        left: locoScroll.el.getBoundingClientRect().left,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // Reveal animation for .quote elements using GSAP and ScrollTrigger
  gsap.utils.toArray(".quote").forEach((quote) => {
    gsap.fromTo(
      quote,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: quote,
          scroller: ".main",
          start: "top 70%",
          toggleClass: "active",
          once: true,
        },
      }
    );
  });

  // Custom cursor behavior
  const main = document.querySelector(".main");
  const cursor = document.querySelector(".cursor");

  main.addEventListener("mousemove", function (event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
  });

  main.addEventListener("mouseenter", function () {
    cursor.style.backgroundColor = "white";
  });

  const head = document.querySelector(".head");

  head.addEventListener("mouseenter", function () {
    cursor.style.height = "30px";
    cursor.style.width = "30px";
    cursor.style.borderRadius = "50%";
  });
  head.addEventListener("mouseleave", function () {
    cursor.style.height = "15px";
    cursor.style.width = "15px";
    cursor.style.borderRadius = "0";
  });

  // Horizontal scroll animation with pinning
  gsap.to(".wrapper-404", {
    x: `-${(document.querySelectorAll(".cards > div").length - 1) * 100}vw`,
    scrollTrigger: {
      trigger: ".container",
      scroller: ".main",

      start: "top top",
      end: `+=${document.querySelectorAll(".cards > div").length * 1500}vw`,
      scrub: 1,
      pin: true,
    },
  });

  // Hover effect for boxes

  function setHoverEffect(containerSelector, boxSelector) {
    const container = document.querySelector(containerSelector);
    const box = document.querySelector(boxSelector);

    container.addEventListener("mouseenter", function () {
      box.style.opacity = 1;
    });

    container.addEventListener("mousemove", function (dets) {
      box.style.left = dets.x + "px";
    });

    container.addEventListener("mouseleave", function () {
      box.style.opacity = 0;
    });
  }

  setHoverEffect(".box-container1", ".box1");
  setHoverEffect(".box-container2", ".box2");
  setHoverEffect(".box-container3", ".box3");
  setHoverEffect(".box-container4", ".box4");
  setHoverEffect(".box-container5", ".box5");

  // Background color change on scroll using timeline
  var t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",

      start: "top 70%",
      end: "top top",
      scrub: 1,
    },
  });

  t1.to(".main", {
    backgroundColor: "black",
    duration: 1,
  });

  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",

      start: "top 90%",
      end: "top top",
      scrub: 1,
    },
  });

  t2.to(".main", {
    backgroundColor: "white",
    duration: 1,
  });

  //Rotate Curson On Icons
  var icons = document.querySelectorAll(".icons");
  icons.forEach(function (icons) {
    icons.addEventListener("mouseenter", function () {
      cursor.style.height = "40px";
      cursor.style.width = "40px";
      cursor.style.transform = "rotate(-90deg)";
      cursor.style.transition = "all 0.3s ease";
    });
    icons.addEventListener("mouseleave", function () {
      cursor.style.height = "20px";
      cursor.style.width = "20px";
      cursor.style.transform = "rotate(0deg)";
      cursor.style.transition = "all 0.3s ease";
    });
  });

  var page3 = document.querySelector(".page3");
  page3.addEventListener("mouseenter", function () {
    cursor.style.opacity = 0;
  });

  page3.addEventListener("mouseleave", function () {
    cursor.style.opacity = 1;
  });

  gsap.from(".project", {
    y: "20vh",
    scrollTrigger: {
      trigger: ".project",
      scroller: ".main",
      start: "top 100%",
      end: "top 50%",
      scrub: true,
    },
  });

  gsap.to(".stand", {
    scrollTrigger: {
      trigger: ".ball",
      scroller: ".main",
      start: "top 30%",
      end: "top -70%",
      pin: true,
    },
  });

  const box_containers = document.querySelectorAll(".box-container"); // Select all .box-container elements

  // Loop through each box-container and add event listeners
  box_containers.forEach((box) => {
    box.addEventListener("mouseenter", function () {
      cursor.style.height = "60px";
      cursor.style.width = "60px";
      cursor.style.borderRadius = "50%";
      cursor.style.transition = "all 0.3s ease";
    });

    box.addEventListener("mouseleave", function () {
      cursor.style.height = "15px";
      cursor.style.width = "15px";
      cursor.style.borderRadius = "0";
    });
  });


gsap.to(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    scroller: ".main",
    start: "top 0%",
    end: "top -100%",
    pin: true,
  },
});

gsap.to(".footertext", {
  y : "0%",
  duration:1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".footer",
    scroller: ".main",
    start: "top 80%",
    end: "top 60%",
    repeat : false
  }
});

});
