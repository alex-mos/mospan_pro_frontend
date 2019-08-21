import { mount } from '@vue/test-utils'
import Cv from '@/pages/Cv.vue'

describe('Cv.vue', () => {
  it('renders a CV', () => {
    const wrapper = mount(Cv)
    expect(wrapper.find('h1').text()).toBe('Александр Мосьпан')
  })
})
