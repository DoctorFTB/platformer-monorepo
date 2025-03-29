/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowUpCircleFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowUpCircleFill28(props: ArrowUpCircleFill28Props) {
  const merged = mergeProps({ size: 28 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11m3.434-10.934a.8.8 0 0 0 1.132-1.132l-4-4a.8.8 0 0 0-1.132 0l-4 4a.8.8 0 0 0 1.132 1.132L13.2 11.43V19a.8.8 0 0 0 1.6 0v-7.569z" clip-rule="evenodd"/></svg>
  );
}
