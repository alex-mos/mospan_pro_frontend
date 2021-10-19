<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <section>
          <h1>Alexander Mospan</h1>
          <h3 class="subtitle">34 y.o, Moscow, Russia</h3>
        </section>

        <section>
        <p>Eight years in front-end development.</p>
        <p>In my spare time, I upgrade my professional skills by learning at Coursera, freeCodeCamp, CodeWars, KhanAcademy.</p>
        <p>I use <a href="https://en.wikipedia.org/wiki/Getting_Things_Done" target="_blank">GTD</a> as a main life management system.</p>
        </section>

        <section>
          <h2>Technology I use in production</h2>
          <p>
            I'm proficient with Vue.js and its ecosystem.<br>
            I've developed applications with Vuetify and Tailwind UI frameworks. I've also had experience in building UI-kit from scratch using Storybook.<br>
            In 2013-2017 I worked with jQuery and Ember.js.
          </p>
        </section>

        <section>
          <h2>Technology I learn and use for hobby projects</h2>
          <p>Golang, MySQL, Docker, Electron</p>
        </section>

        <section>
          <h2>Code Examples</h2>
          <ul>
            <li>
              <a href="https://github.com/alex-mos/exp/blob/master/examples/geotiff-upload.js" target="_blank">
                Ember service for large file uploading with sha-256 checksum and resuming after network error
              </a>
            </li>
            <li>
              This site:
              <a href="https://github.com/alex-mos/mospan_pro_frontend" target="_blank">frontend</a>,
              <a href="https://github.com/alex-mos/mospan_pro_backend" target="_blank">backend</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Experience</h2>
          <p>(many freelance projects in between working as an employee.)</p>

          <ul class="companies">
            <li>
              <h3>
                Front-end Developer at
                <a href="https://urbamatica.com/" target="_blank">
                  Urbamatica
                </a>
              </h3>
              <p><em>October 2021 – Present day</em></p>
            </li>

            <li>
              <h3>
                Front-end Developer at
                <a href="https://ozon.ru" target="_blank">
                  Ozon
                </a>
              </h3>
              <p><em>July 2019 – September 2021</em></p>
              <p>Ozon is one of the largest marketplaces in Russia. As a part of its team, I've developed a page for postings control and made an interface for monitoring every aspect of sales flow in real-time.
              <p>After that, I improved the user experience by separating reusable controls into the independent UI kit and polishing each component.</p>
              <p>Besides that, I've made a recommendation system for sellers, a commissions calculation page, and much more.</p>
            </li>

            <li>
              <h3>Front-end Developer at Media Target</h3>
              <p><em>April 2018 – July 2019</em></p>
              <p>Media Target is a company that develops many not big yet useful applications, for example, VPN browser extension that allows redirecting web traffic over other countries to avoid site blocking. The development process wasn't especially challenging, but I had had a good opportunity to get used to working with extensions and service workers.</p>
            </li>

            <li>
              <h3>
                Front-end Developer at
                <a href="http://exactfarming.com" target="_blank">
                  ExactFarming
                </a>
              </h3>
              <p><em>April 2017 – April 2018</em></p>
              <p>ExactFarming is a quite advanced web application using by farmers to manage their fields and crops with the help of regularly updated satellite or drone photos.</p>
              <p>I've done some layers on the map — for example, photos with descriptions bound to geolocation data received by the Geolocation API. I've also made field editing and interactive manuals, showing app features with series of tooltips.</p>
            </li>

            <li>
              <h3>
                Front-end Developer at
                <a href="http://breffi.ru" target="_blank">
                  Breffi
                </a>
              </h3>
              <p><em>March 2016 – February 2017</em></p>
              <p>Creating b2b-application for meds supply accounting system and launching marketing campaigns.</p>
              <p>Coordination of front-end department process.</p>
            </li>

            <li>
              <h3>
                Front-end Developer at
                <a href="http://emias.info" target="_blank">
                  Emias.info
                </a>
              </h3>
              <p><em>January 2015 – December 2015</em></p>
              <p>Development of an application for appointments in public hospitals used by more than 400 000 patients
                monthly;</p>
              <p>AngularJS modules creation, developing business logic using VanillaJS and HTML-based tasks.</p>
            </li>

            <li>
              <h3>
                jr. Front-end Developer at
                <a href="http://sijeko.ru" target="_blank">
                  Sijeko
                </a>
              </h3>
              <p><em>March 2013 – May 2014</em></p>
              <p>Creating diverse websites with HTML, CSS, and jQuery;</p>
              <p>Support and improvement of sites on various platforms such as Drupal, ModX, Symphony, etc.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <h3>
            <a
              href="https://www.linkedin.com/school/белгородский-государственный-технологический-университет-им.-в.г.-шухова/">
              Belgorod Shukhov State Technology University
            </a>
          </h3>

          <ul>
            <li>
              Mechanical engineering graduate (2004 – 2009)
            </li>
            <li>
              Translator for professional interaction graduate (2004 – 2009)
            </li>
            <li>
              Architectural and Building Sciences postgraduate (2009 – 2012)
            </li>
          </ul>
        </section>

        <section>
          <h2>Languages</h2>
          <ul>
            <li>
              Russian: native
            </li>
            <li>
              English: intermediate
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cv',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.row {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  background-color: #fff;
  border: 3px solid #aaa;
}
@media (max-width: 768px) {
  .row {
    margin: 0;
    border: none;
  }
}
.row section {
  padding: 10px 15px;
}
.row .subtitle {
  margin-top: 0;
}
.row p {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 20px;
}
.row ul {
  padding-left: 1.75em;
  list-style: none;
}
.row ul li {
  font-size: 20px;
}
.row ul li:before {
  position: absolute;
  display: inline-block;
  margin: 0 0.3em 0 -1em;
  content: "–";
}
.row .companies {
  margin: 0;
}
.row .companies li {
  margin-bottom: 30px;
}
.row .companies li:last-child {
  margin-bottom: 0;
}
.row table {
  width: 100%;
  font-size: 20px;
}
</style>
