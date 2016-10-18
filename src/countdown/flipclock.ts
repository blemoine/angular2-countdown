interface FlipClock {
  setTime(digit: number): void
}
interface JQuery {
  FlipClock(digit: number, options: any): FlipClock
}

declare module 'jquery' {

}
