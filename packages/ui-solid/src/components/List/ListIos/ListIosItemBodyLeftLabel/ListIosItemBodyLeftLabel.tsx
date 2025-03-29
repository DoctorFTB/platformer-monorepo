import { cnCreate } from '@/css/cnCreate.js';
import { omitProps } from '@/helpers/omitProps.js';
import { omitClasses } from '@/helpers/omitClasses.js';
import { TypographyIos } from '@/components/Typography/TypographyIos/TypographyIos.js';
import type { WithOptionalClasses } from '@/css/types.js';
import type { JSXIntrinsicElementAttrs } from '@/types/jsx.js';

import { e } from '../bem.js';

import './ListIosItemBodyLeftLabel.scss';

export type ListIosItemBodyLeftLabelElementKey = 'root';
export type ListIosItemBodyLeftLabelVariant = 'regular' | 'accent' | 'destructive' | 'placeholder';
export type ListIosItemBodyLeftLabelProps =
  & JSXIntrinsicElementAttrs<'p'>
  & WithOptionalClasses<ListIosItemBodyLeftLabelElementKey, ListIosItemBodyLeftLabelProps>
  & {
  /**
   * True if the medium font-weight should be applied.
   * @default false
   */
  medium?: boolean;
  /**
   * Label visual variant.
   */
  variant?: ListIosItemBodyLeftLabelVariant;
};

export function ListIosItemBodyLeftLabel(props: ListIosItemBodyLeftLabelProps) {
  const $cn = cnCreate(props, {
    root: v => [v.class, e('item-body-left-label', v.variant || 'regular')],
  });
  return (
    <TypographyIos
      {...omitProps(omitClasses(props), ['medium', 'variant'])}
      variant="body"
      component="p"
      class={$cn().root}
      weight={props.medium ? 'medium' : undefined}
    />
  );
}