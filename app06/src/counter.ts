export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

interface Xyz {
  a: string;
  b: number
}


export const qs = (cssSelector: string) => {
  return document.querySelector(cssSelector)
}
