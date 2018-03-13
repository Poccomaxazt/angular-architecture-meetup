import {ShowConfirmModalAction} from '../../core/store/layout.actions';
import {SharedModule} from '../shared.module';

/**
 * This decorator calls confirm dialog for method with info message like a parameter
 * and calls original method after confirmation
 */
export function Confirmation(message: string): MethodDecorator {
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method
    descriptor.value = function(args: any[]) {
      SharedModule.store.dispatch(new ShowConfirmModalAction({
        message,
        onConfirm: originalMethod.bind(this, ...args)
      }));
    };

    return descriptor;
  };
}
