/* eslint-disable */
import { mergeProps, type JSX } from 'solid-js';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface FaceID112Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 112
   */
  size?: SvgAttributes['width'];
}

export function FaceID112(props: FaceID112Props) {
  const merged = mergeProps({ size: 112 }, props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 112 112" width={merged.size} height={merged.size} {...props}><path fill="currentColor" d="M21 42.398q-2.383 0-2.383-2.46v-10.04q0-5.664 2.89-8.515t8.595-2.852H40.14q2.46 0 2.46 2.383 0 2.422-2.46 2.422h-9.922q-3.321 0-5.078 1.719-1.72 1.719-1.72 5.117v9.766q0 2.46-2.421 2.46m69.922 0q-2.383 0-2.383-2.46v-9.766q0-3.398-1.797-5.117-1.796-1.72-5.039-1.72H71.82q-2.46 0-2.46-2.42 0-2.385 2.46-2.384h10q5.742 0 8.633 2.89 2.89 2.852 2.89 8.477v10.04q0 2.46-2.421 2.46m-60.82 50.82q-5.704 0-8.594-2.89-2.89-2.851-2.89-8.516v-10q0-2.46 2.382-2.46 2.422 0 2.422 2.46v9.766q0 3.398 1.719 5.117 1.758 1.72 5.078 1.72h9.922q2.46 0 2.46 2.42 0 2.385-2.46 2.384zm41.718 0q-2.46 0-2.46-2.382 0-2.422 2.46-2.422h9.883q3.242 0 5.04-1.719 1.796-1.718 1.796-5.117v-9.766q0-2.46 2.383-2.46 2.422 0 2.422 2.46v10q0 5.664-2.89 8.516-2.892 2.89-8.634 2.89zM41.47 52.75q-1.133 0-1.875-.703-.703-.703-.703-1.914v-5.274q0-1.17.703-1.875.742-.741 1.875-.742 1.133 0 1.875.742.742.704.742 1.875v5.274q0 1.21-.742 1.914-.742.703-1.875.703m11.328 9.14q-1.21 0-1.875-.546-.664-.586-.664-1.563 0-.859.547-1.406.585-.585 1.445-.586h1.328q.43 0 .742-.273.352-.274.352-.82v-12.5q0-.938.547-1.446.546-.547 1.445-.547.938 0 1.484.547.547.508.547 1.445v12.149q0 2.734-1.406 4.14-1.406 1.407-4.14 1.407h-.352m17.46-9.14q-1.17 0-1.874-.703-.703-.703-.703-1.914V44.86q0-1.17.703-1.875.703-.741 1.875-.742 1.133 0 1.836.742.742.704.742 1.875v5.274q0 1.21-.742 1.914-.703.703-1.836.703m-14.57 21.758q-3.398 0-6.718-1.328-3.321-1.368-5.625-3.946a3 3 0 0 1-.508-.664 2.2 2.2 0 0 1-.156-.82q0-.898.586-1.445.585-.547 1.445-.547.546 0 .898.234.39.234.82.625 1.72 1.758 4.22 2.813 2.5 1.054 5.038 1.054 2.695 0 5.157-1.054 2.5-1.095 4.18-2.813.819-.86 1.68-.86.82 0 1.405.548.586.546.586 1.445 0 .507-.156.898a2.1 2.1 0 0 1-.43.625 18.6 18.6 0 0 1-5.78 3.868q-3.243 1.367-6.642 1.367"/></svg>
  );
}
