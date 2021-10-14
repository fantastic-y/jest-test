import { shallowMount } from '@vue/test-utils'
//import HelloWorld from '@/components/HelloWorld.vue'


//describe('HelloWorld.vue', () => {
//  it('renders props.msg when passed', () => {
//    const msg = 'new message'
//    const wrapper = shallowMount(HelloWorld, {
//      props: { msg }
//    })
//    expect(wrapper.text()).toMatch(msg)
//  })
//})

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

describe('MessageComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MessageComponent, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})