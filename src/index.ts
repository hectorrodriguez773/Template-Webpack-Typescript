import { Factory } from './factory';
import { getSingleton } from './singleton';
import { Print } from './print-interface';

import { DebugPrint, ConsolePrint, AlertPrint, HtmlPrint } from './strategies';

/**
 * Initializes the factory for print strategies.
 *
 * @returns The factory instance.
 */
 function initializePrintFactory(): Factory<Print> {
  const factory = new Factory<Print>();

  factory.register('debug', () => new DebugPrint());
  factory.register('console', () => new ConsolePrint());
  factory.register('alert', () => new AlertPrint());
  factory.register('html', () => new HtmlPrint());

  return factory;
}

// Initializes the factory
const printFactory = getSingleton<Factory<Print>>(
  'PrintFactory',
  initializePrintFactory
);

printFactory.setOptions({
  defaultStrategy: 'html'
})

// Initializes the alternative factory
const alternativePrintFactory = getSingleton<Factory<Print>>(
  'PrintFactory',
  initializePrintFactory
);

console.log(alternativePrintFactory.getOptions())

// Creating a print instance
const printer = printFactory.create('console');

setTimeout(() => {
  // Printing a message
  printer.print('message');
}, 5000);
