const copyToClipboard = () => {
  const currentURL = window.location.href;

  // Create a temporary input element to copy the URL
  const tempInput = document.createElement("input");
  tempInput.value = currentURL;

  // Append the input element to the DOM
  document.body.appendChild(tempInput);

  // Select the URL in the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected URL to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);
  alert("링크가 복사되었습니다");
};

export default copyToClipboard;
