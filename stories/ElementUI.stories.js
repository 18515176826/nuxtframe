import { storiesOf } from '@storybook/vue'

storiesOf('ElementUI', module)
  .add('Alert', () => ({
    template: '<el-alert title="成功提示的文案" type="success"></el-alert>'
  }))
