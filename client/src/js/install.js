let deferredPrompt; // Holds on to the event

// This event fires when the app can be added to the home screen
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // Prevent the mini-infobar from appearing on mobile
  deferredPrompt = e; // Stash the event so it can be triggered later.
  console.log("beforeinstallprompt event was received.");

  // Show the install button directly in the event listener.
  const installButton = document.getElementById("buttonInstall");
  if (installButton) {
    installButton.style.display = "block";
    installButton.addEventListener("click", () => {
      // Show the install prompt immediately on user interaction
      if (deferredPrompt) {
        deferredPrompt.prompt(); // Show the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
          deferredPrompt = null; // Reset the deferred prompt variable
          installButton.style.display = "none"; // Hide the button after interaction
        });
      } else {
        console.log("Deferred prompt is not available.");
      }
    });
  } else {
    console.error("Install button not found.");
  }
});
