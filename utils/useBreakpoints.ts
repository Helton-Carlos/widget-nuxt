import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function breakpoints() {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  const xs = breakpoints.smaller('sm')
  const sm = breakpoints.between('sm', 'md')
  const md = breakpoints.between('md', 'lg')
  const lg = breakpoints.between('lg', 'xl')
  const xl = breakpoints.between('xl', '2xl')
  const xxl = breakpoints['2xl']

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl
  };
}
