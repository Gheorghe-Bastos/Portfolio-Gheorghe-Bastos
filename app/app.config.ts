export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      secondary: 'secondary',
      neutral: 'neutral'
    },
    card: {
      slots: {
        title: 'text-2xl font-display font-bold'
      }
    },
    footer: {
      slots: {
        top: 'py-4 lg:py-12',
        bottom: 'py-4 lg:py-12',
        container: 'py-4 lg:py- lg:flex lg:items-center lg:justify-between lg:gap-x-3',
        center: 'mt-0 lg:mt-0 lg:order-2 flex items-center justify-center'
      }
    }
  }
})