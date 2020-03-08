import styles from './GivenBook.css?module'
import { VueComponent, Component, VNode } from '~/types/vue-ts-component'

@Component
export default class GivenBook extends VueComponent {
  // props: {
  //   coverURL: {
  //     type: String,
  //     required: true,
  //     default: ''
  //   },
  //   status: {
  //     type: String,
  //     required: true,
  //     default: ''
  //   }
  // },
  render(): VNode {
    return (
      <div class="{ style.book }">
      <div class="{ style.frontSide }">
        <img
          :src="coverURL"
          class="{ style.imgResponsive }"
        >
        <div
          v-if="status === 'reserved'"
          class="{ style.banner banner_reserved }"
        >
          обещана
        </div>
  
        <div
          v-if="status === 'sent'"
          class="{ style.banner, bannerSent }"
        >
          отправлена
        </div>
      </div>
    </div>
    )
  }
}
