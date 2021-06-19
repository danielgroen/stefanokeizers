import { mount } from '@vue/test-utils'
import AtomNavItem from './NavItem.vue'

const wrapper = mount(AtomNavItem, {
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
