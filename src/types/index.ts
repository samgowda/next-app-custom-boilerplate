// Global Types

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type TypedAction<T extends { type: any }, U> =
  & Omit<T, 'type'>
  & {
    type: U;
  };

export default TypedAction;
