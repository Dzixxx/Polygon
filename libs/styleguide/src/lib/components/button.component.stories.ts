import { ButtonComponent } from './button.component';

export default { title: 'My Button' }

export const withText = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button',
  },
});

export const withEmoji = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});