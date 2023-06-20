function sendGetRequest() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.example.com/data";
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  };
  xhr.send();
}
