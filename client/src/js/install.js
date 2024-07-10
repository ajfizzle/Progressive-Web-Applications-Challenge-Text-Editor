const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the event
  window.deferredPrompt = event;

  // Show the install button
  butInstall.classList.remove("hidden");
});

// Event handler for the install button click
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  try {
    // Show the install prompt
    await promptEvent.prompt();

    // Wait for the user to respond to the prompt
    const userChoice = await promptEvent.userChoice;

    if (userChoice.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
  } catch (err) {
    console.error("Failed to prompt the user for installation:", err);
  } finally {
    // Reset the deferred prompt variable
    window.deferredPrompt = null;

    // Hide the install button
    butInstall.classList.add("hidden");
  }
});

// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear the deferred prompt
  window.deferredPrompt = null;

  // Optionally, update your UI or analytics here
  console.log("App was installed");
});
