/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface BuildingColumnsFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function BuildingColumnsFill28(props: BuildingColumnsFill28Props) {
  const merged = mergeProps({ size: 28 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m3.426 7.186 10.211-5.069C13.786 2.038 13.893 2 14 2c.105 0 .211.04.356.117l10.218 5.07c.737.392.459 1.513-.376 1.513H3.802c-.834 0-1.112-1.12-.376-1.514M5.5 10.251a.8.8 0 0 0 0 1.6h.2v8.4h-.2a.8.8 0 0 0 0 1.6h2a.8.8 0 0 0 0-1.6h-.2v-8.4h.2a.8.8 0 0 0 0-1.6zm5 0a.8.8 0 0 0 0 1.6h.2v8.4h-.2a.8.8 0 0 0 0 1.6h2a.8.8 0 1 0 0-1.6h-.2v-8.4h.2a.8.8 0 1 0 0-1.6zm4.2.8a.8.8 0 0 1 .8-.8h2a.8.8 0 1 1 0 1.6h-.2v8.4h.2a.8.8 0 1 1 0 1.6h-2a.8.8 0 0 1 0-1.6h.2v-8.4h-.2a.8.8 0 0 1-.8-.8m5.8-.8a.8.8 0 0 0 0 1.6h.2v8.4h-.2a.8.8 0 0 0 0 1.6h2a.8.8 0 1 0 0-1.6h-.2v-8.4h.2a.8.8 0 1 0 0-1.6zM3.2 24a.8.8 0 0 1 .8-.8h20a.8.8 0 0 1 0 1.6H4a.8.8 0 0 1-.8-.8" clip-rule="evenodd"/></svg>
  );
}
