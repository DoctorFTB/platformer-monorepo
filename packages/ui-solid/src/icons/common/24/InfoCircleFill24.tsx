/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface InfoCircleFill24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function InfoCircleFill24(props: InfoCircleFill24Props) {
  const merged = mergeProps({ size: 24 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19m1.08-14.034a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0m-3.528 3.238a.72.72 0 0 1 .72-.72h1.944a.72.72 0 0 1 .721.72v5.325h1.222a.721.721 0 1 1 0 1.442h-3.886a.721.721 0 1 1 0-1.442h1.222v-4.603h-1.222a.72.72 0 0 1-.721-.722" clip-rule="evenodd"/></svg>
  );
}
