(() => {
  // <stdin>
  var details = document.querySelectorAll("details");
  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open)
        closeDetailsExcept(detail);
    });
  });
  function closeDetailsExcept(targetDetail) {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.open = false;
      }
    });
  }
  window.onscroll = function() {
    headerControl();
    imageMove();
  };
  function headerControl() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("brandlogo").style.height = "80px";
      document.getElementById("brandlogo").style.width = "80px";
      document.getElementById("header").style.paddingBottom = "2rem";
      document.getElementById("header").style.backgroundColor = "#ffffff";
    } else {
      document.getElementById("brandlogo").style.height = "";
      document.getElementById("brandlogo").style.width = "";
      document.getElementById("header").style.paddingBottom = "4rem";
      document.getElementById("header").style.backgroundColor = "";
    }
  }
  function imageMove() {
    return;
    if (document.getElementById("am_pc").getBoundingClientRect().top > 300) {
      img = document.getElementById("am_pc").style.marginLeft = "0";
    } else {
      img = document.getElementById("am_pc").style.marginLeft = "50px";
    }
  }
})();
