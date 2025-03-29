/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface GiftFill24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function GiftFill24(props: GiftFill24Props) {
  const merged = mergeProps({ size: 24 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={merged.size} height={merged.size} {...props}><path fill="currentColor" d="M2.5 10.1c0-2.66 0-3.99.518-5.006a4.75 4.75 0 0 1 2.076-2.076C6.11 2.5 7.44 2.5 10.1 2.5h1.235v5.922c-.205-.42-.453-.815-.765-1.127-.546-.546-1.317-1.032-2.153-1.209-.862-.182-1.818-.035-2.587.734a2.2 2.2 0 0 0-.66 1.358c-.046.485.073.956.271 1.376.318.675.873 1.294 1.49 1.781H2.5zm0 2.565V13.9c0 2.66 0 3.99.518 5.007a4.75 4.75 0 0 0 2.076 2.075c1.016.518 2.346.518 5.006.518h1.235v-7.06c-1.309 1.809-2.935 3.043-4.905 3.437a.665.665 0 0 1-.26-1.304c1.846-.37 3.44-1.701 4.736-3.908zm10.594 0c1.297 2.207 2.89 3.539 4.736 3.908a.665.665 0 1 1-.26 1.304c-1.97-.394-3.596-1.628-4.905-3.437v7.06H13.9c2.66 0 3.99 0 5.007-.518a4.75 4.75 0 0 0 2.075-2.075c.518-1.017.518-2.347.518-5.007v-1.235zm8.406-1.33V10.1c0-2.66 0-3.99-.518-5.006a4.75 4.75 0 0 0-2.075-2.076C17.89 2.5 16.56 2.5 13.9 2.5h-1.235v5.922c.205-.42.453-.815.765-1.127.546-.546 1.317-1.032 2.153-1.209.862-.182 1.818-.035 2.587.734.394.394.612.86.66 1.358.046.485-.073.956-.271 1.376-.318.675-.873 1.294-1.49 1.781z"/><path fill="currentColor" d="M15.858 7.387c-.535.114-1.084.446-1.488.849-.355.355-.636.979-.919 1.783-.067.19-.134.394-.203.602-.077.23-.155.467-.237.7q.238-.022.504-.058c.877-.117 1.814-.34 2.391-.725.647-.431 1.193-1.007 1.45-1.551.125-.267.167-.496.15-.683a.87.87 0 0 0-.276-.543c-.392-.392-.86-.482-1.372-.374m-6.228.849c-.404-.403-.953-.735-1.488-.849-.511-.108-.98-.018-1.372.374a.87.87 0 0 0-.276.543c-.018.187.025.416.15.683.257.544.803 1.12 1.45 1.551.577.385 1.514.608 2.39.725q.268.036.505.057c-.082-.232-.16-.468-.237-.699q-.103-.314-.203-.602c-.283-.804-.564-1.428-.92-1.783"/></svg>
  );
}
