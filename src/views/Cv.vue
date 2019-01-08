<template>
  <div>
    <navigation/>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>Alexander Mospan, frontend developer</h1>
  
          <section>
          <h2>Summary</h2>
          <p>5 years in frontend development.</p>
          <p>In spare time I upgrade my professional skills by learning at KhanAcademy, CodeSchool, Coursera,
            freeCodeCamp.</p>
          </section>
  
          <section>
            <h2>Technology I use in production</h2>
            <table>
              <tr>
                <td>OS</td>
                <td>macOS, Linux</td>
              </tr>
              <tr>
                <td>IDE</td>
                <td>WebStorm</td>
              </tr>
              <tr>
                <td>VCS</td>
                <td>git</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>Javascript (ES5-6)</td>
              </tr>
              <tr>
                <td>Frontend Frameworks</td>
                <td>VueJS, EmberJS</td>
              </tr>
              <tr>
                <td>Transport layer</td>
                <td>REST API, WebSocket</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>HTML5, varios CSS preprocessors and UI frameworks</td>
              </tr>
            </table>
          </section>
          
          <section>
            <h2>Other technology</h2>
            <p>React, NodeJS, Electron, MongoDB, Docker</p>
          </section>
  
          <section>
            <h2>Code Examples</h2>
            <ul>
              <li>
                <a href="https://github.com/alex-mos/exp/blob/master/examples/geotiff-upload.js">
                  Ember service for large file uploading with sha-256 checksum and resuming after network error
                </a>
              </li>
              <li>
                This site:
                <a href="https://github.com/alex-mos/mospan_pro_frontend">frontend</a>,
                <a href="https://github.com/alex-mos/mospan_pro_backend">backend</a>,
              </li>
            </ul>
          </section>
  
          <section>
            <h2>Employers list</h2>
            <p>(many freelance projects in between working as employee.)</p>
    
            <h3>Media Target</h3>
    
            <p><em>frontend developer ( April 2018 – Present day )</em></p>
            <p>Creating SPA with VueJS for various web-projects;</p>
            <p>Dynamic charts with realtime data updating;</p>
            <p>Websocket usage for communicating with server.</p>
    
            <h3>
              <a href="http://exactfarming.com">
                ExactFarming
              </a>
            </h3>
            <p><em>frontend developer ( April 2017 – April 2018 )</em></p>
            <p>Development complex web-application for farm business using EmberJS;</p>
            <p>Numerous tasks related to geolocation and LeafletJS;</p>
            <p>Unit and integration testing.</p>
    
            <h3>
              <a href="http://breffi.ru">
                Breffi
              </a>
            </h3>
    
            <p><em>Team-lead frontend developer ( March 2016 – February 2017 )</em></p>
            <p>Creating b2b-application for meds supply accounting system and launching marketing campaigns.</p>
            <p>coordination of frontend department process.</p>
    
            <h3>
              <a href="http://emias.info">
                Emias.info
              </a>
            </h3>
            <p><em>frontend developer ( January 2015 – December 2015 )</em></p>
            <p>Development of application for appointments in public hospitals used by more than 400 000 patients
              monthly;</p>
            <p>Creating AngularJS modules, developing of business logic using VanillaJS and HTML-based tasks.</p>
    
            <h3>
              <a href="http://sijeko.ru">
                Sijeko
              </a>
            </h3>
    
            <p><em>jr. frontend developer ( March 2013 – May 2014 )</em></p>
            <p>Creating diverse websites with HTML, CSS and jQuery;</p>
            <p>Supporting and improvement of sites on various platforms such as Drupal, ModX, Symphony etc.</p>
          </section>
  
          <section>
            <h2>Education</h2>
            <h3>
              <a
                href="https://www.linkedin.com/school/белгородский-государственный-технологический-университет-им.-в.г.-шухова/">
                Belgorod Shukhov State Technology University
              </a>
            </h3>
  
          <table>
            <tr>
              <td>Mechanical engenering</td>
              <td>graduate</td>
              <td>2004 – 2009</td>
            </tr>
            <tr>
              <td>Translator for professional interaction</td>
              <td>graduate</td>
              <td>2008 – 2010</td>
            </tr>
            <tr>
              <td>Architectural and Building Sciences</td>
              <td>PhD</td>
              <td>2009 – 2012</td>
            </tr>
          </table>
          </section>
  
          <section>
            <h2>Languages</h2>
            <ul>
              <li>
                Russian: fluent
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
  background-color white
  border 3px solid rgb(170, 170, 170)
  
  section
    padding 10px 15px

  h1
    padding 10px 15px
    
  p
    font-size 20px
    
  ul
    li
      font-size 20px
    
  table
    width 100%
    font-size 20px
</style>
