//Main Text Rotate
const textrotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  textrotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new textrotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #f47731 }";
    document.body.appendChild(css);
  };
  
  
  
  //MouseCursor
  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".nav .nav-link");
  let featured = document.querySelectorAll(".featured-card .featured");
  
  
  
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  
  
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY + "px";
  }
  
  
  
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      mouseCursor.style.zIndex = "-1";
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      mouseCursor.style.zIndex = "1000";
    });
  });
  
  
  featured.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow-2");
      mouseCursor.style.zIndex = "1";
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow-2");
      mouseCursor.style.zIndex = "1000";
    });
  });
  
  

  
  //loading page
  
  
  let navbarhid = function(){
    document.getElementById("mb-auto").className += "navloading";
  }
  
  let navbarshw = setTimeout(function(){
    document.getElementById("mb-auto").className -= "navloading";
  },2500);
  
  let loading = setTimeout(function() { 
    document.getElementById("loading-page").className += "loaded";
    document.getElementById("loader").className += "opzero";
    document.getElementById("lastray").className += " finalray";
    document.body.className += "whitebk";
    navbarshw();
  },2000);
  
    navbarhid();
    loading();
  
  
  
  
  
  