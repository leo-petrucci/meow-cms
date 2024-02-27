import PropsTable from './components/PropsTable'
import { Tabs } from '@meow/components'

const theme = {
  logo: <span>Meow CMS</span>,
  project: {
    link: 'https://github.com/creativiii/meow-cms',
  },
  components: {
    Note: ({ children }) => {
      return (
        <div className="nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4 contrast-more:nx-border-current contrast-more:dark:nx-border-current nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300">
          <div className="nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2">
            💡
          </div>
          <div className="nx-w-full nx-min-w-0 nx-leading-7">{children}</div>
        </div>
      )
    },
    PropsTable,
    Video: ({ src }) => {
      return <video controls src={src}></video>
    },
    TabsRoot: Tabs,
    TabsContent: Tabs.Content,
    ContentLink: () => <></>,
  },
}

export default theme
