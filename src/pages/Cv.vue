<template>
  <div class="container">
    <div class="row">
      <!--
      <div class="col-xs-12">
        <section>
          <h1>Александр Мосьпан</h1>
          <h3 class="subtitle">
            34 года, Москва
          </h3>
        </section>

        <section>
          <p>8 лет во фронтенд-разработке.</p>
          <p>
            В свободное время занимаюсь прохождением курсов и решением задач на
            образовательных площадках Coursera, freeCodeCamp, CodeWars,
            KhanAcademy.
          </p>
          <p>
            Использую систему
            <a
              href="https://en.wikipedia.org/wiki/Getting_Things_Done"
              target="_blank"
              >GTD</a
            >
            как основу для организации жизни и рабочего процесса. Владею
            английским языком на уровне intermediate.
          </p>
        </section>

        <section>
          <h2>Технологии, которые я использую для коммерческой разработки</h2>
          <p>
            В основном, я создаю и поддерживаю клиентские приложения на
            <strong>VueJS</strong>. Раньше работал с EmberJS и AngularJS.<br />
            Хотя я знаю HTML и CSS на высоком уровне и умею верстать семантично,
            довольно часто я использую библиотеки готовых компонентов. Обычно —
            <strong>Vuetify</strong> или Bootstrap.<br />
            Как правило, взаимодействие с сервером происходит через
            <strong>REST</strong> или <strong>WebSocket</strong> API.<br />
            Почти с начала карьеры, я работаю на macOS в среде WebStorm.
          </p>
        </section>

        <section>
          <h2>Технологии, которые я использую в хобби-проектах</h2>
          <p>
            Могу написать простой бекенд на <strong>Golang</strong> с
            <strong>MySQL</strong>, завернуть его в
            <strong>Docker</strong>-контейнеры и запустить на выделенном
            сервере.<br />
            Несколько раз приходилось писать десктопные кроссплатформенные
            программы на Electron.
          </p>
        </section>

        <section>
          <h2>Примеры кода</h2>
          <ul>
            <li>
              <a
                href="https://github.com/alex-mos/exp/blob/master/examples/geotiff-upload.js"
                target="_blank"
              >
                Модуль для проекта на Ember, для загрузки больших файлов, с
                вычислением их контрольной суммы, и с возможностью возобновления
                загрузки после обрыва интернет-соединения.
              </a>
            </li>
            <li>
              Этот сайт:
              <a
                href="https://github.com/alex-mos/mospan_pro_frontend"
                target="_blank"
                >фронтенд (на VueJS)</a
              >,
              <a
                href="https://github.com/alex-mos/mospan_pro_backend"
                target="_blank"
                >бекенд (на Golang)</a
              >
            </li>
          </ul>
        </section>

        <section>
          <h2>Карьера</h2>
          <p>
            (Занимался фрилансом с промежутках между перечисленными местами
            фултайм-работы)
          </p>

          <ul class="companies">
            <li>
              <h3>
                Фронтенд-разработчик в
                <a href="https://urbamatica.com/" target="_blank">
                  Urbamatica
                </a>
              </h3>
              <p><em>октябрь 2021 – настоящее время</em></p>
              <p>Проектная работа на зарубежных заказчиков.</p>
            </li>

            <li>
              <h3>
                Фронтенд-разработчик в
                <a href="https://ozon.ru" target="_blank">
                  Ozon
                </a>
              </h3>
              <p><em>июль 2019 – сентябрь 2021</em></p>
              <p>Разработка приложения для продавцов на ozon.ru</p>
            </li>

            <li>
              <h3>Фронтенд-разработчик в Media Target</h3>
              <p><em>апрель 2018 – июль 2019</em></p>
              <p>Создание приложений на VueJS для нескольких веб-проектов;</p>
              <p>
                Работа с динамическими графиками, обновляющимися в реальном
                времени (на highcharts.js);
              </p>
              <p>Коммуникация с сервером с ипользованием вебсокетов.</p>
            </li>

            <li>
              <h3>
                Фронтенд-разработчик в
                <a href="http://exactfarming.com" target="_blank">
                  ExactFarming
                </a>
              </h3>
              <p><em>апрель 2017 – апрель 2018</em></p>
              <p>
                Разработка сложного веб-приложения для автоматизации
                агропромышленного бизнеса, с использованием EmberJS;
              </p>
              <p>
                Многие задачи были связаны с геолокационными данными и работой с
                картами через leaflet.js;
              </p>
              <p>Написание юнит- и интеграционных тестов.</p>
            </li>

            <li>
              <h3>
                Фронтенд-разработчик в
                <a href="http://breffi.ru" target="_blank">
                  Breffi
                </a>
              </h3>
              <p><em>март 2016 – февраль 2017</em></p>
              <p>
                Разработка b2b-приложения для и для ведения маркетинговых
                кампаний поставщиками медицинских препаратов;
              </p>
              <p>Координация работы отдела верстальщиков.</p>
            </li>

            <li>
              <h3>
                Фронтенд-разработчик в
                <a href="http://emias.info" target="_blank">
                  Emias.info
                </a>
              </h3>
              <p><em>январь 2015 – декабрь 2015</em></p>
              <p>
                Вёрстка и разработка интерфейса веб-приложения для записи в
                городские больницы. Приложением пользовались более четырёхсот
                тысяч человек ежемесячно.
              </p>
              <p>
                Создание модуля на AngularJS, работа с бизнес-логикой на чистом
                JS и много вёрстки.
              </p>
            </li>

            <li>
              <h3>
                Младший фронтенд-разработчик в
                <a href="http://sijeko.ru" target="_blank">
                  Sijeko
                </a>
              </h3>
              <p><em>март 2013 – май 2014</em></p>
              <p>Создание различных вебсайтов на HTML, CSS и jQuery;</p>
              <p>
                Поддержка и доработка множества сайтов на различных платформах,
                таких как Drupal, ModX, Symphony и т.д.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Образование</h2>
          <h3>
            <a href="http://www.bstu.ru/" target="_blank">
              Белгородский Государственный Технологический Университет им. В.Г.
              Шухова
            </a>
          </h3>

          <ul>
            <li>
              Факультет механического оборудования (специалист) (2004 – 2009)
            </li>
            <li>
              Переводчик в сфере профессиональной коммуникации (2009 — 2012)
            </li>
            <li>
              Кафедра строительного материаловедения (кандидат технических наук)
              (2009 – 2012)
            </li>
          </ul>
        </section>
      </div>
    -->

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
            </li>

            <li>
              <h3>Front-end Developer at Media Target</h3>
              <p><em>April 2018 – July 2019</em></p>
              <p>Creating SPA with VueJS for various web projects;</p>
              <p>Dynamic charts with real-time data updating;</p>
              <p>Websocket usage for communicating with the server.</p>
            </li>

            <li>
              <h3>
                Front-end Developer at
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
