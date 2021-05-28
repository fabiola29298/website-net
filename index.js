// let options = document.querySelector('.options');
document.querySelectorAll('.options').forEach(options =>
    options.addEventListener("click", () => {
      if(options.value != 'default'){
        console.log(options.value);
        // changeLanguage(options.value);
        // Create a function to change
        // the hash value of the page
        location.hash = options.value;
        location.reload();
      }


  }));

// Define the language reload anchors
var language = {
  en: {
    welcome: "Welcome to the Netikoo " +
    "Portal! You can choose any language " +
    "using the buttons above!"
  },
  es: {
    welcome: "¡Bienvenido al portal Netikoo! " +
    "¡Puedes elegir cualquier idioma usando " +
    "los botones de arriba!"
  },
  fr: {
    welcome: "Netikoo पोर्टल पर आपका स्वागत है! " +
    "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " +
    "भाषा को चुन सकते हैं!"
  },
  gr: {
    welcome: "¡Bienvenido al portal Netikoo! " +
      "¡Puedes elegir cualquier idioma usando " +
      "los botones de arriba!"
  }
};

// Check if a hash value exists in the URL
if (window.location.hash) {

  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#es") {
    siteContent.textContent =
      language.es.welcome;
  }
  else if (window.location.hash == "#fr") {
    siteContent.textContent =
      language.fr.welcome;
  }
  else if (window.location.hash == "#gr") {
    siteContent.textContent =
      language.fr.welcome;
  }
}