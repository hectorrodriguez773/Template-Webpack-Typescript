import { Print } from '../print-interface'

export class AlertPrint implements Print {
  /**
   * Shows an alert with the given message.
   *
   * @param message.
   *
   * @returns void.
   */
  print(message: string): void {
    alert(message)
  }
}