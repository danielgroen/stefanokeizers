import { mount } from '@vue/test-utils'
// @ts-ignore-next-line
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
})
