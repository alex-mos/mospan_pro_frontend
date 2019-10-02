import Vue from 'vue'

export default function (vm) {
  const mousePosition = Vue.observable({
    x: 0,
    y: 0
  })

  const update = e => {
    mousePosition.x = e.pageX
    mousePosition.y = e.pageY
  }

  vm.$on('hook:mounted', () => {
    console.log('mounted')
    window.addEventListener('mousemove', update)
  })

  vm.$on('hook:destroyed', () => {
    console.log('destroyed')
    window.removeEventListener('mousemove', update)
  })

  return mousePosition
}
