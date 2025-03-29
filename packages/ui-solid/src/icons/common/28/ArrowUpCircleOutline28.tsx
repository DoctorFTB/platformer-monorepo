/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowUpCircleOutline28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowUpCircleOutline28(props: ArrowUpCircleOutline28Props) {
  const merged = mergeProps({ size: 28 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M3.8 14C3.8 8.367 8.367 3.8 14 3.8S24.2 8.367 24.2 14 19.633 24.2 14 24.2 3.8 19.633 3.8 14M14 2.2C7.483 2.2 2.2 7.483 2.2 14S7.483 25.8 14 25.8 25.8 20.517 25.8 14 20.517 2.2 14 2.2m3.434 11.866a.8.8 0 0 0 1.132-1.132l-4-4a.8.8 0 0 0-1.132 0l-4 4a.8.8 0 0 0 1.132 1.132L13.2 11.43V19a.8.8 0 0 0 1.6 0v-7.569z" clip-rule="evenodd"/></svg>
  );
}
