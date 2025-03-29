/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowUpRight28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowUpRight28(props: ArrowUpRight28Props) {
  const merged = mergeProps({ size: 28 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9.5 7a1 1 0 0 1 1-1H21a1 1 0 0 1 1 1v10.5a1 1 0 1 1-2 0V9.414L7.707 21.707a1 1 0 0 1-1.414-1.414L18.586 8H10.5a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>
  );
}
