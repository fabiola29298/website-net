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
    welcome: `Are you passionate about sustainable development? \n
    Are you a company, an association, an expert or an individual and do you want
    to contribute to the construction of a
    better world? \n
    Do you fight for values on a daily basis?`,
    text2:`Then you deserve to be known!`,
    text3:`Our project: build a network to support ethical projects in all types of industries. \n
    Please help us to better understand your needs by filling in the following questionnaire, this will allow us to build
    the perfect solution for you!`,
    text4:`Please help us to better understand your needs by filling in the following questionnaire, this will allow us to build
    the perfect solution for you!`,
    titleForm: `Become part of the Netikoo membership!`,
    email: `E-mail`,
    firstName: `First Name`,
    lastName: `Last Name`,
    birthday: `Birthday`,

  },
  es: {
    welcome: `¿Te apasiona el desarrollo sostenible? \n
    ¿Eres una empresa, una asociación, un experto o un particular y quieres contribuir a la construcción de un mundo mejor? \n
    ¿Luchas a diario por los valores?`,
    text2: `¡Entonces mereces conocer a ...!`,
    text3: `Nuestro proyecto: construir una red de apoyo a proyectos éticos en todo tipo de industrias. \n
    Por favor, ayúdanos a entender mejor tus necesidades rellenando el siguiente cuestionario, esto nos permitirá construir
    la solución perfecta para usted.`,
    text4:`Por favor, ayúdenos a entender mejor sus necesidades rellenando el siguiente cuestionario, esto nos permitirá construir
    la solución perfecta para usted.`,
    titleForm: `¡Forma parte de los miembros de Netikoo!`,
    email: `Correo electrónico`,
    firstName: `Nombre`,
    lastName: `Apellido`,
    birthday: `Fecha de cumpleaños`,
  },
  fr: {
    welcome: `Vous êtes passionné par le développement durable ? \n
    Vous êtes une entreprise, une association, un expert ou un particulier et vous souhaitez contribuer à la construction d'un monde meilleur ? \n
    Vous vous battez au quotidien pour des valeurs ?`,
    text2: `Alors vous méritez d'être connu !`,
    text3: `Notre projet : construire un réseau pour soutenir des projets éthiques dans tous types d'industries. \n
    Aidez-nous à mieux comprendre vos besoins en remplissant le questionnaire ci-dessous, cela nous permettra de construire
    la solution parfaite pour vous !`,
    text4:`Veuillez nous aider à mieux comprendre vos besoins en remplissant le questionnaire suivant, cela nous permettra de construire
    la solution parfaite pour vous !`,
    titleForm: `Faites partie des membres de Netikoo !`,
    email: `E-Mail`,
    firstName: `Prénom`,
    lastName: `Nom de famille`,
    birthday: `Anniversaire`,
  },
  gr: {
    welcome: `Haben Sie eine Leidenschaft für nachhaltige Entwicklung? \n
    Sie sind ein Unternehmen, ein Verband, ein Experte oder eine Einzelperson und wollen einen Beitrag zum Aufbau einer besseren Welt leisten? \n
    Kämpfen Sie täglich für Werte?`,
    text2: `Dann haben Sie es verdient, bekannt zu werden!`,
    text3: `Unser Projekt: Aufbau eines Netzwerks zur Unterstützung ethischer Projekte in allen Arten von Branchen. \n
    Bitte helfen Sie uns, Ihre Bedürfnisse besser zu verstehen, indem Sie den folgenden Fragebogen ausfüllen, damit wir die
    die perfekte Lösung für Sie zu finden!`,
    text4:`Bitte helfen Sie uns, Ihre Bedürfnisse besser zu verstehen, indem Sie den folgenden Fragebogen ausfüllen, so können wir
    die perfekte Lösung für Sie!`,
    titleForm: `Werden Sie Teil des Netikoo-Mitglieds!`,
    email: `E-Mail`,
    firstName: `Vornamen`,
    lastName: `Nachname`,
    birthday: `Geburtstag`,
  }
};

// Check if a hash value exists in the URL
if (window.location.hash) {

  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#es") {
    siteContent.textContent = language.es.welcome;
    text2.textContent = language.es.text2;
    text3.textContent = language.es.text3;
    text4.textContent = language.es.text4;
    titleForm.textContent = language.es.titleForm;
  }
  else if (window.location.hash == "#fr") {
    siteContent.textContent =  language.fr.welcome;
    text2.textContent = language.fr.text2;
    text3.textContent = language.fr.text3;
    text4.textContent = language.fr.text4;
    titleForm.textContent = language.fr.titleForm;
  }
  else if (window.location.hash == "#gr") {
    siteContent.textContent =  language.gr.welcome;
    text2.textContent = language.gr.text2;
    text3.textContent = language.gr.text3;
    text4.textContent = language.gr.text4;
    titleForm.textContent = language.gr.titleForm;
  }
  else if (window.location.hash == "#en") {
    siteContent.textContent = language.en.welcome;
    text2.textContent = language.en.text2;
    text3.textContent = language.en.text3;
    text4.textContent = language.en.text4;
    titleForm.textContent = language.en.titleForm;
  }
}