import { mount } from '@vue/test-utils'
import AtomButton from './Button.vue'

const wrapper = mount(AtomButton, {
  propsData: {
    type: 'nieuws',
  },
})

describe('🧪 NavItem', () => {
  test(`is here"`, () => {
    expect(wrapper).toBeTruthy()
  })

  test(`is here 2"`, () => {
    expect(wrapper).toBeTruthy()
  })
})
