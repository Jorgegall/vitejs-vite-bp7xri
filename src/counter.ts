export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Count: ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 2));
  setCounter(0);
}
