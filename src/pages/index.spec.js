import { mount } from '@vue/test-utils'
import PageIndex from './index.vue'

const wrapper = mount(PageIndex, {
  propsData: {
    type: 'nieuws',
  },
})

describe('🧪 PageIndex', () => {
  test(`is here"`, () => {
    expect(wrapper).toBeTruthy()
  })
})
