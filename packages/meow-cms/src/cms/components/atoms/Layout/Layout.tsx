import { useMeasure } from '@meow/utils'
import React from 'react'
import { LayoutContext } from './context'

type LayoutProps = {
  navbar: React.ReactNode
  children:
    | React.ReactNode
    | ((props: { navbarHeight: number }) => React.ReactNode)
}

const Layout = ({ children, navbar }: LayoutProps) => {
  const [ref, { height }] = useMeasure()

  return (
    <LayoutContext.Provider
      value={{
        navbarHeight: height,
      }}
    >
      <div className="flex flex-col">
        <div
          ref={ref}
          className="p-4 bg-white border-b border-border flex justify-end"
        >
          {navbar}
        </div>
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: `calc(100vh - ${height}px)`,
          }}
        >
          {typeof children === 'function'
            ? children({ navbarHeight: height })
            : children}
        </div>
      </div>
    </LayoutContext.Provider>
  )
}

export { Layout }