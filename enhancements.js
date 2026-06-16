document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".navi").forEach(function (nav) {
    var toggle = nav.querySelector(".nav-toggle");
    var menu = nav.querySelector(".menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  });

  var revealSelectors = [
    ".Since",
    ".textSince",
    ".bestTag",
    ".brandCon",
    ".partnerTag",
    ".grup",
    ".filter",
    ".headlineContainer",
    ".bigBoxHall",
    ".memoryContainer",
    ".memoryContainer2",
    ".categoryLine > div",
    ".searchLine",
    ".productContainer",
    ".loadContainer",
    ".headline",
    ".eventCat",
    ".smallContainer1",
    ".smallContainer2",
    ".smallContainer3",
    ".smallContainer4",
    ".schedule",
    ".event1",
    ".promoContainer",
    ".registerPageContainer",
    ".formContainer",
    "footer"
  ];

  var revealItems = document.querySelectorAll(revealSelectors.join(","));

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  revealItems.forEach(function (item) {
    item.classList.add("reveal");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
});
