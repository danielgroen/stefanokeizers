import { mount } from '@vue/test-utils'
import MoleculeMediaItem from './MediaItem.vue'

const wrapper = mount(MoleculeMediaItem, {
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
