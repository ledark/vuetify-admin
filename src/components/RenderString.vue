import { h, defineComponent } from 'vue'

export default defineComponent({
  props: {
    string: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const markComplete = () => {
      console.log('the method called')
    }
    return () => h('div', props.string, markComplete)
  }
})