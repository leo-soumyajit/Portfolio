window.onload = function() {
    console.log("Window fully loaded. Starting initialization...");
  
    // Check if VANTA is accessible
    if (typeof VANTA === "undefined") {
      console.error("VANTA is undefined. Please verify that vanta.net.min.js is loaded correctly.");
    } else {
      console.log("VANTA is defined.");
    }
  
    // Check if the hero element is present
    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      console.error("Element with id 'home' not found. Please update your HTML to include id='home' in the hero section.");
    } else {
      console.log("Home element found:", heroEl);
  
      // Initialize Vanta.NET
      VANTA.NET({
        el: "#homee",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff0037,
        backgroundColor: 0x0,
        points: 12.00,
        maxDistance: 27.00
      })
      console.log("VANTA.NET initialized on #home.");
    }
  };