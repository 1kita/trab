import BaseButton from '@/components/BaseButton'

export default {
  title: 'Button/BaseButton',
  component: BaseButton,
  parameters: {
    docs: {
      description: {
        component: '基礎ボタン'
      }
    }
  },
  argTypes: {
    buttonColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
      }
    },
    click: {
      action: 'clicked'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: `<base-button v-bind="$props" @click="click" />`
})

export const Normal = Template.bind({})
Normal.args = {
  value: 'true',
  text: 'ボタン',
  buttonColor: 'primary',
  disabled: false
}