import { mount } from '@vue/test-utils'
import Books from '@/pages/Books'

// VueTestUtils.config.mocks.$route.query.demo = false

describe('Books.vue', () => {
  it('shows error when backend id unavailable', () => {
    const wrapper = mount(Books)
    // toasted.primary.errors
  })

  it('mixed book set is rendered', () => {
    // const wrapper = mount(Books)
  })

  it('all books available in demo mode', () => {
    const $route = {
      query: {
        demo: true
      }
    }
    const wrapper = mount(Books, {
      mocks: {
        $route
      }
    })
    expect(wrapper.vm.$route.query.demo).toBe(true)
  })

  it('request is not sends in demo mode', () => {
    // const wrapper = mount(Books)
  })
})
