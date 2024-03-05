import * as SwitchPrimitives from '@radix-ui/react-switch'
import { useFormItem } from '../'
import { useController, useFormContext } from 'react-hook-form'
import React from 'react'
import { cn } from '../lib/utils'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className
    )}
    id={`switch-${props.name}`}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export interface ControlledSwitchProps
  extends React.ComponentProps<typeof Switch> {}

/**
 * An on/off switch to be used in forms
 */
const SwitchControlled = (props: ControlledSwitchProps) => {
  const form = useFormContext()
  const { rules, name } = useFormItem()

  const {
    field: { onChange: formOnchange, value, ref: _ref, ...rest },
  } = useController({
    name: name,
    control: form.control,
    rules,
    defaultValue: props.defaultValue || false,
  })

  return (
    <>
      <Switch
        {...props}
        {...rest}
        onCheckedChange={formOnchange}
        checked={value}
      />
    </>
  )
}

export { Switch, SwitchControlled }