function openWindow(url, width, height) {
  const windowFeatures = `width=${width},height=${height},resizable=yes,scrollbars=yes`;
  const newWindow = window.open(url, "_blank", windowFeatures);
  if (newWindow) {
    newWindow.focus();
  } else {
    console.log(
      "Failed to open the new window. Please check your browser settings."
    );
  }
}

const url = "https://www.example.com";
const width = 800;
const height = 600;
openWindow(url, width, height);
