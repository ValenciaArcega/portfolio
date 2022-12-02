// author: Valencia Arcega Luis Angel, 2022
class PortfolioTemplate extends HTMLElement {
  constructor() {
      super();
  }
  connectedCallback() {
      this.innerHTML =
  `
  <!-- Navegation Bar -->
  <div class="container-btnsNavBar">
    <a class="btnDark">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="iconDark">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </a>
    <a class="btnLight">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="iconLight">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    </a>

    <a class="ankerPage" href="#sk">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="icon-nav">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    </a>

    <a class="ankerPage" href="#sp">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="icon-nav">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    </a>

    <a class="ankerPage" href="#ss">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="icon-nav">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    </a>
  </div>

  <!-- Welcome -->
  <div class="section-welcome">
    <div class="wrapper-section-welcome">
      <img src="assets/img/user02.webp" alt="Image-user" />
      <!-- <div class="section-welcome-image"></div> -->
      <div class="section-welcome-text-container">
        <h1>I<span class="textBlue">'</span>m <span class="textBlue">Angel</span></h1>
        <p>A software <span class="textBlue">developer</span> & web designer, that loves to learn and work
          hard, to
          build gorgeous <span class="textBlue">software</span> experiences.</p>
      </div>
    </div>
  </div>

  <!-- Knowledges -->
  <div class="section-knowledges" id="sk">
    <h1><span class="textBlue">Knowledges</span> and skills</h1>
    <div class="wrapper-section-knowledges">
      <button class="card-knowledges kn1" type="button">
        <h1>English</h1>
      </button>
      <button class="card-knowledges kn2" type="button">
        <h1>JavaScript</h1>
      </button>
      <button class="card-knowledges kn3" type="button">
        <h1>CSS</h1>
      </button>
      <button class="card-knowledges kn4" type="button">
        <h1>HTML</h1>
      </button>
      <button class="card-knowledges kn5" type="button">
        <h1>Git</h1>
      </button>
      <button class="card-knowledges kn6" type="button">
        <h1>UX Design</h1>
      </button>
      <button class="card-knowledges kn7" type="button">
        <h1>Java</h1>
      </button>
      <button class="card-knowledges kn8" type="button">
        <h1>UI Design</h1>
      </button>
    </div>
  </div>

  <!-- Projects -->
  <div class="section-projects" id="sp">
    <h1>Personal <span class="textBlue">projects</span></h1>

    <div class="container-tolescro">
      <h1 class="tolescro-heading"><span class="textBlue">Tolescro</span>.</h1>
      <a target="_blank" class="anker-tolescro" href="">Go Learn English</a>
      <img src="/assets/img/tolescro/github-process.png">
      <img src="/assets/img/tolescro/Lighthouse.png">
    </div>
    <h2>The <span class="textBlue-onBlack">big ones</span>.</h2>
    <p>UI's built in Java</p>
    <div class="wrapper-project-UI">
      <img src="assets/img/UI projects/UI_space.webp" alt="UI Space explorer in Java" />
      <img src="assets/img/UI projects/UI_dentist.webp" alt="UI Dentist booking in Java" />
      <img src="assets/img/UI projects/UI_weather.webp" alt="UI Weather in Java" />
      <img src="assets/img/UI projects/UI_games.webp" alt="UI Games store in Java" />
      <img src="assets/img/UI projects/UI_home.webp" alt="UI Home control in Java" />
      <img src="assets/img/UI projects/UI_weather_home.webp" alt="UI Weather in Java" />
      <img src="assets/img/UI projects/UI_sneakers.webp" alt="UI Sneakers store in Java" />
      <img src="assets/img/UI projects/UI_airport.webp" alt="UI Airport ticket in Java" />
    </div>

    <h3>The <span class="textBlue-onBlack">schedule</span>.</h3>
    <div class="wrapper-project-schedule">
      <img src="assets/img/UI projects/schedule_dark.webp" alt="UI Schedule(dark mode) app in Java" />
      <img src="assets/img/UI projects/schedule_colors.webp" alt="UI Schedule(a functionality) app in Java" />
    </div>

    <h4>A <span class="textBlue-onBlack">compiler</span>.</h4>
    <div class="wrapper-project-compiler">
      <img src="assets/img/UI projects/compiler_light.webp" alt="UI Compiler app in Java" />
      <img src="assets/img/UI projects/compiler_dark.webp" alt="UI Compiler(dark mode) app in Java" />
    </div>

    <div class="wrapper-project-coming-soon">
      <div class="coming-soon-header-container">
        <h5>Coming <span class="textBlue">soon</span>.</h5>
        <p>A project is <span class="textBlue">coming</span>!</p>
      </div>
      <div class="coming-soon-project-blur">
        <h1>Building</h1>
        <img src="assets/icons/icon_HAMMER.png" />
      </div>
      <div class="blur-card-inside"></div>
    </div>
  </div>

  <!-- Education  -->
  <div class="section-education">
    <h1>University and <span class="textBlue">extra</span> education</h1>
    <div class="wrapper-section-education">
      <a-education url="http://www.tecnologicodecoacalco.edu.mx/TESCO/INICIO/INICIO.php" color="ceWhite"
        src="assets/icons/brands/logo-TESCo.webp" alt="TESCo-logo"></a-education>

      <a-education url="https://www.udemy.com/" color="ceBlue" src="assets/icons/brands/logo-udemy.svg"
        alt="Udemy-logo">
      </a-education>

      <a-education url="https://platzi.com/" color="ceWhite" src="assets/icons/brands/logo-platzi.webp"
        alt="Platzi-logo">
      </a-education>

      <a-education url="https://ed.team/" color="ceBlue" src="assets/icons/brands/logo-EDteam.svg" alt="EDteam-logo">
      </a-education>

      <a-education url="https://developer.mozilla.org/es/" color="ceWhite" src="assets/icons/brands/logo-mdn.svg"
        alt="MDN-logo"></a-education>
    </div>
  </div>

  <!-- Social -->
  <div class="section-contact" id="ss">
    <h1>Contact <span class="textBlue"> me</span>.</h1>
    <div class="wrapper-contact-cards">

      <div class="card-contact">
        <div class="title-contact-container">
          <h2>Mail</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon-social-card">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <p id="myEmail" class="hidden">valencia.arcega@gmail.com</p>
        <button type="button" class="btnShowMail">Show Mail</button>
      </div>

      <div class="card-contact">
        <div class="title-contact-container">
          <h2>Whatsapp</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon-social-card">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        </div>
        <a target="_blank" href="http://wa.me/+525525448735">Send Message</a>
      </div>

      <div class="card-contact">
        <div class="title-contact-container">
          <h2>Instagram</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon-social-card">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        </div>
        <a target="_blank" href="https://www.instagram.com/valencia.arcega/">Go Profile</a>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <div class="wrapper-icons-social">
      <a target="_blank" href="https://www.linkedin.com/in/luis-angel-valencia-arcega-4827b9239/">
        <img src="assets/icons/footer/icon_footer_linkedin.svg" />
      </a>
      <a target="_blank" href="https://github.com/ValenciaArcega">
        <img src="assets/icons/footer/icon_footer_github.svg" />
      </a>
      <a target="_blank" href="https://www.facebook.com/valencia.arcega">
        <img src="assets/icons/footer/icon_footer_facebook.svg" />
      </a>
    </div>
    <p>&copy; 2022, Valencia Arcega</p>
  </footer>


  <!-- Modals -->
  <modal-skill color="kn1" title="English skills" s1="Semi technical conversation B1" s2="Speaking and listening"
    s3="Writing and documentation" s4="Reading and understanding"></modal-skill>

  <modal-skill color="kn2" title="JavaScript skills" s1="DOM manipulation and custom elements"
    s2="Functions, arrays, objects and variables" s3="Loops & conditionals" s4="Events & object oriented programming">
  </modal-skill>

  <modal-skill color="kn3" title="CSS skills" s1="CSS Grid for responsive design" s2="Flexbox and Box model"
    s3="Variables and functions" s4="General best practices"></modal-skill>

  <modal-skill color="kn4" title="HTML skills" s1="Tagging and structuring" s2="Lists and containers"
    s3="Inheritance; parents and childs" s4="Best practices and general knowledges"></modal-skill>

  <modal-skill color="kn5" title="Git knowledges" s1="Project tracking" s2="Github and implementation with VSCode"
    s3="Branching and merging" s4="Essential terminal commands"></modal-skill>

  <modal-skill color="kn6" title="UX knowledges" s1="Guide lines and design rules"
    s2="Design thinking and look and feel" s3="Usability and Accessibility" s4="Design semantics"></modal-skill>

  <modal-skill color="kn7" title="Java skills" s1="OOP and fundamentals." s2="AWT library" s3="Swing library"
    s4="Manipulate abstract classes to deep customize JElements"></modal-skill>

  <modal-skill color="kn8" title="UI knowledges" s1="Typography" s2="Colors, shadows and whitespace"
    s3="Images, illustrations and icons" s4="Visual hierarchy, elements and layout"></modal-skill>
  <div class="below-modal hidden"></div>
  `;
  } // callback inner
} // class

window.customElements.define("portfolio-template", PortfolioTemplate);