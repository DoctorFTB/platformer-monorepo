/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface GiftFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function GiftFill28(props: GiftFill28Props) {
  const merged = mergeProps({ size: 28 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" d="M4 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 6.73 4.545C7.8 4 9.2 4 12 4h1.2v5.731c-.172-.29-.37-.56-.6-.79-.59-.59-1.426-1.12-2.34-1.313-.947-.2-2.008-.039-2.861.814-.438.438-.684.96-.737 1.52-.053.545.082 1.068.298 1.527.3.638.792 1.225 1.348 1.711H4zm0 2.8V16c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C7.8 24 9.2 24 12 24h1.2v-7.047c-1.355 1.766-3.024 2.979-5.033 3.38a.85.85 0 1 1-.334-1.666c1.836-.368 3.445-1.67 4.775-3.857l-.088-.01zm11.48 0-.088.01c1.33 2.188 2.939 3.49 4.775 3.856a.85.85 0 0 1-.334 1.668c-2.009-.402-3.678-1.615-5.033-3.38V24H16c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C24 20.2 24 18.8 24 16v-1.2zM24 13.2V12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C20.2 4 18.8 4 16 4h-1.2v5.731c.172-.29.37-.56.6-.79.59-.59 1.426-1.12 2.34-1.313.947-.2 2.008-.039 2.861.814.438.438.684.96.737 1.52.052.545-.082 1.068-.298 1.527-.3.638-.792 1.225-1.348 1.711z"/><path fill="currentColor" d="M18.093 9.291c-.53.112-1.084.445-1.492.853-.347.346-.634.972-.932 1.82q-.102.295-.21.622c-.057.172-.116.35-.176.525q.142-.015.292-.035c.92-.123 1.877-.355 2.454-.74.665-.444 1.218-1.03 1.473-1.572.124-.263.16-.477.144-.64-.014-.148-.074-.307-.247-.48-.37-.37-.808-.458-1.306-.353m-6.693.853c-.41-.408-.963-.74-1.493-.853-.498-.105-.936-.017-1.306.353-.173.173-.233.332-.247.48-.016.163.02.377.144.64.255.541.808 1.128 1.474 1.572.576.385 1.533.617 2.453.74q.15.02.292.035l-.176-.525c-.072-.216-.142-.427-.21-.622-.298-.848-.585-1.474-.932-1.82"/></svg>
  );
}
