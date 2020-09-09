import { storiesOf } from '@storybook/vue'
import Logo from '../components/Logo.vue'

storiesOf('Logo', module)
  .add('component', () => ({
    components: { Logo },
    template: '<logo/>'
  }))
