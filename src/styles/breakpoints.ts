import { css, ThemedCssFunction } from 'styled-components';

export enum BreakpointWidth {
  smallScreen = 380,
  tablet = 580,
  tabletLarge = 640,
  tabletXLarge = 768,
  desktop = 800,
  desktopLarge = 1024,
  desktopXLarge = 1280,
  desktopXXLarge = 1920,
}

type BreakpointCssMap = Record<keyof typeof BreakpointWidth, ThemedCssFunction<any>>;

export const media: BreakpointCssMap = Object.keys(BreakpointWidth).reduce(
  (mediaQueries, label) => (
    {
      ...mediaQueries,
      [label]: (...args: any[]) => css`
        @media (min-width: ${BreakpointWidth[label]}px) {
          ${css.call(this, ...args)}
        }
      `,
    }
  ),
  {} as BreakpointCssMap,
);
