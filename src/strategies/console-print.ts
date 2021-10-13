import { Print } from '../print-interface'

export class ConsolePrint implements Print {
  /**
   * Prints a message in the developer tools console.
   *
   * @param message.
   *
   * @returns void.
   */
  print(message: string): void {
    console.log(message)
  }
}