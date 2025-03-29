/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface HareFill24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function HareFill24(props: HareFill24Props) {
  const merged = mergeProps({ size: 24 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={merged.size} height={merged.size} {...props}><path fill="currentColor" d="M12.525 19.283q-.428 0-.857-.143-.43-.143-.971-.62l-2.935-2.457a2 2 0 0 0-.186.007h-.178a8.2 8.2 0 0 1-1.97-.221 5 5 0 0 1-1.615-.729 4.6 4.6 0 0 1-1.242-1.328q-.685.007-1.128-.35Q1 13.078 1 12.472q0-.55.386-.886.392-.343.978-.329.486-1.4 1.264-2.313.778-.915 1.785-1.357 1.014-.45 2.192-.45.9 0 1.678.207a7.7 7.7 0 0 1 1.5.557q.728.351 1.478.807l1.606.971q.607.344 1.1.6.5.258.942.257.307 0 .529-.121.228-.129.464-.343l-4.042-2.57q-.45-.286-.935-.629a7 7 0 0 1-.814-.685q-.328-.343-.328-.622 0-.315.278-.57.279-.266.714-.458.435-.2.907-.3.479-.1.871-.1.979 0 1.942.507.964.507 1.735 1.593l1.786 2.52q.9-.021 1.628.286t1.256.87q.53.565.814 1.315.286.75.286 1.6 0 .948-.307 1.477-.3.522-.907.736-.6.207-1.492.207-.615 0-1.128-.136a5 5 0 0 1-.964-.364 8 8 0 0 1-.857-.5 16 16 0 0 0-1.571.857 5 5 0 0 0-.614-.078 7 7 0 0 0-.629-.029 9 9 0 0 0-.785.036q-.386.036-.743.107l-.485-1.121q-.771-1.779-2.028-2.65-1.257-.87-2.892-.87-.522 0-.936.128-.406.129-.407.507 0 .236.15.35t.393.114h.864a3.93 3.93 0 0 1 2.92 1.257q.587.614.986 1.485l.814 1.8q.321-.064.614-.129.3-.072.678-.114.379-.05.929-.05 1.093 0 1.863.293.771.292 1.179.8.406.498.407 1.12 0 .579-.429.9-.428.321-1.22.321-.359 0-.615-.064a10 10 0 0 0-.557-.121q-.3-.057-.778-.057-.7 0-1.128.12-.422.122-.8.122m-5.448.579q-1.143 0-1.828-.436-.68-.428-.679-1.142 0-.48.343-.764.35-.294.943-.293.306 0 .6.028.292.022.535.05.25.03.421.029.108 0 .193-.007l.164-.015 2.185 1.843a4 4 0 0 1-1.2.521q-.677.186-1.677.186m12.795-7.312a.62.62 0 0 0 .472-.207.7.7 0 0 0 .2-.493.63.63 0 0 0-.193-.464.64.64 0 0 0-.471-.193.63.63 0 0 0-.472.207.68.68 0 0 0 0 .95q.194.2.464.2"/></svg>
  );
}
