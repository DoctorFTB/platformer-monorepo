/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ExclamationMarkCircleFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ExclamationMarkCircleFill28(props: ExclamationMarkCircleFill28Props) {
  const merged = mergeProps({ size: 28 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><circle cx="14" cy="14" r="11" fill="#fff"/><path fill="currentColor" fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11m1.081-16.15-.114 6.45a.967.967 0 0 1-1.933 0l-.114-6.45a1.08 1.08 0 1 1 2.161 0m.169 9.9a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"/></svg>
  );
}
