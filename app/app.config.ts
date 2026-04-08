export default defineAppConfig({
  ui: {
    colors: {
      primary: 'yellow',
      neutral: 'neutral'
    },
    pageCard: {
      slots: {
        title: 'text-2xl text-pretty font-bold text-highlighted',
        description: 'text-lg text-pretty',
        container: 'flex items-center'
      }
    }
  }
})
