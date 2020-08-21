export function logMethod() {
  // tslint:disable-next-line: only-arrow-functions
  return function (
    target: Object, // target class
    key: string, // target method to apply decorator
    descriptor: PropertyDescriptor // data description for the method
  ) {
    // define an itarator to read all matheod for class
    descriptor.enumerable = true;

    const original = descriptor?.value; // may be undefined  or null

    // start reading values to log
    descriptor.value = function() {
      // logging logic
      // class name
      const targetName = target.constructor.name;
      // reading arguments
      const args = JSON.stringify(arguments);
      console.log(`Arguments ${args}`);
      // logging the method being called
      console.log(`Calling method ${targetName}.${key} with arguments ${args}`);
      // infor the transpiler that use the decorator and transpile it
      const result = original.apply(this.arguments);
      return result;
    };
    return descriptor;
  };
}
