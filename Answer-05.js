function detectBrowser() {
  const userAgent = navigator.userAgent;
  let browserName, browserVersion;

  // Detect Chrome
  if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1) {
    browserName = "Chrome";
    browserVersion = userAgent.substring(
      userAgent.indexOf("Chrome") + 7,
      userAgent.indexOf("Safari")
    );
  }
  // Detect Firefox
  else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    browserVersion = userAgent.substring(userAgent.indexOf("Firefox") + 8);
  }
  // Detect Safari
  else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Safari";
    browserVersion = userAgent.substring(
      userAgent.indexOf("Version") + 8,
      userAgent.indexOf("Safari")
    );
  }
  // Detect Edge (Chromium-based)
  else if (userAgent.indexOf("Edg") > -1 && userAgent.indexOf("Chrome") > -1) {
    browserName = "Microsoft Edge (Chromium-based)";
    browserVersion = userAgent.substring(
      userAgent.indexOf("Edg") + 4,
      userAgent.indexOf("Chrome")
    );
  }
  // Detect Edge (Legacy)
  else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Microsoft Edge (Legacy)";
    browserVersion = userAgent.substring(userAgent.indexOf("Edge") + 5);
  }
  // Detect Internet Explorer
  else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.substring(
      userAgent.indexOf("rv:") + 3,
      userAgent.indexOf(")")
    );
  }
  // Default case
  else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}

const browserInfo = detectBrowser();
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);
