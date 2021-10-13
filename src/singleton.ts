/**
 * Gets the process global object.
 *
 * @returns The process global object.
 */
function getGlobalThis(): unknown {
  let result: unknown;

  if (typeof globalThis !== 'undefined') {
    result = globalThis;
  } else if (typeof global !== 'undefined') {
    result = global;
  } else {
    throw new Error('Unable to locate process globals');
  }

  return result;
}

/**
 * Gets the global singleton collection.
 *
 * @returns The global singleton collection.
 */
function getSingletonCollection(): Map<string, unknown> {
  const singletonScopeName = '@singletons@';
  const processGlobals = getGlobalThis() as { [key: string]: Map<string, unknown>; };

  if (!processGlobals[singletonScopeName]) {
    processGlobals[singletonScopeName] = new Map<string, unknown>();
  }

  return processGlobals[singletonScopeName];
}

/**
 * Gets the instance for the singleton.
 *
 * @param name    The singleton instance name.
 * @param factory The factory method to create the instance if it does not exist.
 *
 * @returns The singleton instance.
 *
 * @throws {Error} If the instance does not exist and the factory method is not given.
 */
export function getSingleton<T>(name: string, factory?: () => T): T {
  const singletons = getSingletonCollection();

  if (!singletons.has(name)) {
    if (!factory) {
      throw new Error(`The singleton instance "${name}" has not been initialized.`);
    }

    singletons.set(name, factory());
  }

  return singletons.get(name) as T;
}
