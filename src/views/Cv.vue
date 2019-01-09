<template>
  <div>
    <navigation/>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <section>
            <h1>Alexander Mospan</h1>
            <h3 class="subtitle">31 y.o, Moscow, Russia</h3>
          </section>

          <section>
          <p>6 years in frontend development.</p>
          <p>In spare time I upgrade my professional skills by learning at Coursera, freeCodeCamp, CodeWars, KhanAcademy.</p>
          <p>I use <a href="https://en.wikipedia.org/wiki/Getting_Things_Done" target="_blank">GTD</a> as a main life management system.
          </p>
          </section>

          <section>
            <h2>Technology I use in production</h2>
            <p>
              I create client web applications with VueJS (EmberJS and AngularJS in the past).<br>
              Although a have strong HTML and CSS skills, sometimes I use component libraries such as Vuetify or Bootstrap.<br>
              Usually, I utilize REST of WebSocket API.<br>
              I work on macOS with WebStorm.
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
                <h3>Frontend Developer at Media Target</h3>
                <p><em>April 2018 – Present day</em></p>
                <p>Creating SPA with VueJS for various web-projects;</p>
                <p>Dynamic charts with realtime data updating;</p>
                <p>Websocket usage for communicating with server.</p>
              </li>

              <li>
                <h3>
                  Frontend Developer at
                  <a href="http://exactfarming.com" target="_blank">
                    ExactFarming
                  </a>
                </h3>
                <p><em>April 2017 – April 2018</em></p>
                <p>Development complex web-application for farm business using EmberJS;</p>
                <p>Numerous tasks related to geolocation and LeafletJS;</p>
                <p>Unit and integration testing.</p>
              </li>

              <li>
                <h3>
                  Frontend Developer at
                  <a href="http://breffi.ru" target="_blank">
                    Breffi
                  </a>
                </h3>
                <p><em>March 2016 – February 2017</em></p>
                <p>Creating b2b-application for meds supply accounting system and launching marketing campaigns.</p>
                <p>coordination of frontend department process.</p>
              </li>

              <li>
                <h3>
                  Frontend Developer at
                  <a href="http://emias.info" target="_blank">
                    Emias.info
                  </a>
                </h3>
                <p><em>January 2015 – December 2015</em></p>
                <p>Development of application for appointments in public hospitals used by more than 400 000 patients
                  monthly;</p>
                <p>Creating AngularJS modules, developing of business logic using VanillaJS and HTML-based tasks.</p>
              </li>

              <li>
                <h3>
                  jr. Frontend Developer at
                  <a href="http://sijeko.ru" target="_blank">
                    Sijeko
                  </a>
                </h3>
                <p><em>March 2013 – May 2014</em></p>
                <p>Creating diverse websites with HTML, CSS and jQuery;</p>
                <p>Support and improvement of sites on various platforms such as Drupal, ModX, Symphony etc.</p>
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
                Mechanical engenering graduate (2004 – 2009)
              </li>
              <li>
                Translator for professional interaction graduate (2004 – 2009)
              </li>
              <li>
                Architectural and Building Sciences PhD (2009 – 2012)
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
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'cv',
  components: {
    Navigation
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.row
  margin-top 30px
  margin-bottom 30px
  padding-bottom 20px
  background-color white
  border 3px solid rgb(170, 170, 170)

  section
    padding 10px 15px

  .subtitle
    margin-top 0

  p
    margin-bottom 0
    line-height 1.5
    font-size 20px

  ul
    padding-left 1.75em
    list-style none

    li
      font-size 20px

      &:before
        position absolute
        display inline-block
        margin 0 .3em 0 -1em
        content "–"

  .companies
    margin 0

    li
      margin-bottom 30px

      &:last-child
        margin-bottom 0

  table
    width 100%
    font-size 20px
</style>
