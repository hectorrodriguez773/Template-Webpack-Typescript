import { Print } from '../print-interface'

export class HtmlPrint implements Print {
  /**
   * Prints a message in the DOM.
   *
   * @param message.
   *
   * @returns void.
   */
  print(message: string): void {
    const text: HTMLElement | null = document.getElementById('text');

    if (text) {
      text.innerText = message;
    }
  }
}