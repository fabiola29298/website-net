const routes = [
  {
    path: '/',
    template: `
    <div id="home" class="home-presentation">
        <div class="wrapper">
          <div class="home-group-text">
          <!-- <div class="image"><img src="./img/casa-01.png" width="150px" alt="Imagen de una casa con paneles solares"></div> -->
          <div class="group-column">
            <p id="siteContent">
              Are you passionate about sustainable development? <br>
              Are you a company, an association, an expert or an individual and do you want
              to contribute to the construction of a
              better world? <br>
              Do you fight for values on a daily basis?
            </p>
            <h3 class="h3" id="text2">Then you deserve to be known! </h3>
            <!-- <h1 class="h1">Netikoo</h1> -->
            <p id="text3"><b>Our project:</b> build a network to support ethical projects in all types of industries. </p>
            <p id="text4">Please help us to better understand your needs by filling in the following questionnaire, this will allow us to build
            the perfect solution for you!</p>
            <div class="group-horizontal">
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=af3385bbc5"><button class="home-bottom">  French </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=6bc967be47"><button class="home-bottom">  Spanish </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=2575bd0706"><button class="home-bottom">  English </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=32142e30b2"><button class="home-bottom">  German </button></a>


            </div>
          </div>
        </div>
      </div>

    </div><div class="description">
      <div class="wrapper">
        <div class="group-column">
          <h3 class="subtitle" id="titleForm">I want to be a Netikoo member! </h3>
          <!-- <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, provident facere quaerat explicabo libero saepe harum delectus debitis ex molestiae suscipit similique alias aliquid hic sit minus, nemo optio tenetur.</p> -->
            <!-- Begin Mailchimp Signup Form -->
            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
              <form action="https://gmail.us6.list-manage.com/subscribe/post?u=2b5a8959555ecbcebd4bfb52e&amp;id=77122ce9ea"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
                novalidate>
                <div id="mc_embed_signup_scroll">
                  <!-- <h2>Become part of the Netikoo family!</h2> -->
                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
                    </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                  </div>
                  <div class="mc-field-group size1of2">
                    <label for="mce-BIRTHDAY-month">Birthday </label>
                    <div class="datefield">
                      <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> /
                      <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span>
                      <span class="small-meta nowrap">( mm / dd )</span>
                    </div>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                      name="b_2b5a8959555ecbcebd4bfb52e_77122ce9ea" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                  class="home-bottom"></div>
                </div>
              </form>
            </div>
        </div>

          <!--End mc_embed_signup-->
        </div>
    </div>`
  },
  {
    path: '/contacto',
    template: `
    <div id="home" class="home-presentation">
        <div class="wrapper">
          <div class="home-group-text">
          <!-- <div class="image"><img src="./img/casa-01.png" width="150px" alt="Imagen de una casa con paneles solares"></div> -->
          <div class="group-column">
            <p id="siteContent">
            ¿Te apasiona el desarrollo sostenible? \n
            ¿Eres una empresa, una asociación, un experto o un particular y quieres contribuir a la construcción de un mundo mejor? \n
            ¿Luchas a diario por los valores?</p>
            <h3 class="h3" id="text2">¡Entonces mereces conocernos! </h3>
            <!-- <h1 class="h1">Netikoo</h1> -->
            <p id="text3">Nuestro proyecto: construir una red de apoyo a proyectos éticos en todo tipo de industrias. \n
            Por favor, ayúdanos a entender mejor tus necesidades rellenando el siguiente cuestionario, esto nos permitirá construir
            la solución perfecta para usted.</p>
            <p id="text4">Por favor, ayúdenos a entender mejor sus necesidades rellenando el siguiente cuestionario, esto nos permitirá construir
            la solución perfecta para usted.</p>
            <div class="group-horizontal">
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=af3385bbc5"><button class="home-bottom">  French </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=6bc967be47"><button class="home-bottom">  Spanish </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=2575bd0706"><button class="home-bottom">  English </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=32142e30b2"><button class="home-bottom">  German </button></a>


            </div>
          </div>
        </div>
      </div>

    </div><div class="description">
      <div class="wrapper">
        <div class="group-column">
          <h3 class="subtitle" id="titleForm">¡Forma parte de los miembros de Netikoo! </h3>

            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
              <form action="https://gmail.us6.list-manage.com/subscribe/post?u=2b5a8959555ecbcebd4bfb52e&amp;id=77122ce9ea"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
                novalidate>
                <div id="mc_embed_signup_scroll">
                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">Correo electrónico <span class="asterisk">*</span>
                    </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">Nombre </label>
                    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Apellido </label>
                    <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                  </div>
                  <div class="mc-field-group size1of2">
                    <label for="mce-BIRTHDAY-month">Fecha de cumpleaños </label>
                    <div class="datefield">
                      <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> /
                      <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span>
                      <span class="small-meta nowrap">( mm / dd )</span>
                    </div>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                      name="b_2b5a8959555ecbcebd4bfb52e_77122ce9ea" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Suscribirme" name="subscribe" id="mc-embedded-subscribe"
                  class="home-bottom"></div>
                </div>
              </form>
            </div>
        </div>

          <!--End mc_embed_signup-->
        </div>
    </div>`
  },
  {
    path: '/about',
    template: `
    <div id="home" class="home-presentation">
        <div class="wrapper">
          <div class="home-group-text">
          <!-- <div class="image"><img src="./img/casa-01.png" width="150px" alt="Imagen de una casa con paneles solares"></div> -->
          <div class="group-column">
            <p id="siteContent">
              Vous êtes passionné par le développement durable ? \n
              Vous êtes une entreprise, une association, un expert ou un particulier et vous souhaitez contribuer à la construction d'un monde meilleur ? \n
              Vous vous battez au quotidien pour des valeurs ?
            </p>
            <h3 class="h3" id="text2">Alors vous méritez d'être connu !</h3>

            <!-- <h1 class="h1">Netikoo</h1> -->
            <p id="text3">Notre projet : construire un réseau pour soutenir des projets éthiques dans tous types d'industries. \n
            Aidez-nous à mieux comprendre vos besoins en remplissant le questionnaire ci-dessous, cela nous permettra de construire
            la solution parfaite pour vous !</p>
            <p id="text4">Veuillez nous aider à mieux comprendre vos besoins en remplissant le questionnaire suivant, cela nous permettra de construire
            la solution parfaite pour vous !</p>
            <div class="group-horizontal">
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=af3385bbc5"><button class="home-bottom">  French </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=6bc967be47"><button class="home-bottom">  Spanish </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=2575bd0706"><button class="home-bottom">  English </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=32142e30b2"><button class="home-bottom">  German </button></a>


            </div>
          </div>
        </div>
      </div>

    </div><div class="description">
      <div class="wrapper">
        <div class="group-column">
          <h3 class="subtitle" id="titleForm">Faites partie des membres de Netikoo ! </h3>
          <!-- <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, provident facere quaerat explicabo libero saepe harum delectus debitis ex molestiae suscipit similique alias aliquid hic sit minus, nemo optio tenetur.</p> -->
            <!-- Begin Mailchimp Signup Form -->
            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
              <form action="https://gmail.us6.list-manage.com/subscribe/post?u=2b5a8959555ecbcebd4bfb52e&amp;id=77122ce9ea"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
                novalidate>
                <div id="mc_embed_signup_scroll">
                  <!-- <h2>Become part of the Netikoo family!</h2> -->
                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">E-Mail <span class="asterisk">*</span>
                    </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">Prénom </label>
                    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Nom de famille </label>
                    <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                  </div>
                  <div class="mc-field-group size1of2">
                    <label for="mce-BIRTHDAY-month">Anniversaire </label>
                    <div class="datefield">
                      <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> /
                      <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span>
                      <span class="small-meta nowrap">( mm / dd )</span>
                    </div>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                      name="b_2b5a8959555ecbcebd4bfb52e_77122ce9ea" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                  class="home-bottom"></div>
                </div>
              </form>
            </div>
        </div>

          <!--End mc_embed_signup-->
        </div>
    </div>`
  },
  {
    path: '/gr',
    template: `
    <div id="home" class="home-presentation">
        <div class="wrapper">
          <div class="home-group-text">
          <!-- <div class="image"><img src="./img/casa-01.png" width="150px" alt="Imagen de una casa con paneles solares"></div> -->
          <div class="group-column">
            <p id="siteContent">
              Haben Sie eine Leidenschaft für nachhaltige Entwicklung? \n
              Sie sind ein Unternehmen, ein Verband, ein Experte oder eine Einzelperson und wollen einen Beitrag zum Aufbau einer besseren Welt leisten? \n
              Kämpfen Sie täglich für Werte?
            </p>
            <h3 class="h3" id="text2">Dann haben Sie es verdient, bekannt zu werden!</h3>

            <!-- <h1 class="h1">Netikoo</h1> -->
            <p id="text3">Unser Projekt: Aufbau eines Netzwerks zur Unterstützung ethischer Projekte in allen Arten von Branchen. \n
            Bitte helfen Sie uns, Ihre Bedürfnisse besser zu verstehen, indem Sie den folgenden Fragebogen ausfüllen, damit wir die
            die perfekte Lösung für Sie zu finden!</p>
            <p id="text4">Bitte helfen Sie uns, Ihre Bedürfnisse besser zu verstehen, indem Sie den folgenden Fragebogen ausfüllen, so können wir
            die perfekte Lösung für Sie!</p>
            <div class="group-horizontal">
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=af3385bbc5"><button class="home-bottom">  French </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=6bc967be47"><button class="home-bottom">  Spanish </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=2575bd0706"><button class="home-bottom">  English </button></a>
              <a href="https://us6.list-manage.com/survey?u=2b5a8959555ecbcebd4bfb52e&id=32142e30b2"><button class="home-bottom">  German </button></a>


            </div>
          </div>
        </div>
      </div>

    </div><div class="description">
      <div class="wrapper">
        <div class="group-column">
          <h3 class="subtitle" id="titleForm">Werden Sie Teil des Netikoo-Mitglieds! </h3>
            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
              <form action="https://gmail.us6.list-manage.com/subscribe/post?u=2b5a8959555ecbcebd4bfb52e&amp;id=77122ce9ea"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
                novalidate>
                <div id="mc_embed_signup_scroll">
                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">E-Mail <span class="asterisk">*</span>
                    </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">Vornamen </label>
                    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Nachname</label>
                    <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                  </div>
                  <div class="mc-field-group size1of2">
                    <label for="mce-BIRTHDAY-month">Geburtstag </label>
                    <div class="datefield">
                      <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> /
                      <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value=""
                          placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span>
                      <span class="small-meta nowrap">( mm / dd )</span>
                    </div>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                      name="b_2b5a8959555ecbcebd4bfb52e_77122ce9ea" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                  class="home-bottom"></div>
                </div>
              </form>
            </div>
        </div>

          <!--End mc_embed_signup-->
        </div>
    </div>`
  },
];