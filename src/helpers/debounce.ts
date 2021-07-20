export const debounce = (callback: (...args: any) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> = 0

  return (...args: any) => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      callback([...args])
      timer = 0
    }, delay)
  }
}
