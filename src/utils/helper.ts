export const sleep = (ms?: number) => new Promise(r => setTimeout(r, ms || 0));

export const getCssUrl = (input: string) => {
  return `url("${input}")`;
}