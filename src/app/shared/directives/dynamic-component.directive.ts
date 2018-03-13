import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import {getDynamicComponentByType} from '../decorators/dynamic-component.decorator';

@Directive({
  selector: '[imDynamicComponent]'
})
export class DynamicComponentDirective implements OnChanges {
  @Input()
  public type: string;

  private componentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('type' in changes) {
      if (this.componentRef) {
        this.componentRef.destroy();
      }

      const component = getDynamicComponentByType(this.type);
      if (!component) {
        throw new Error(`You are trying to generate unknown component: ${this.type}`);
      }

      const factory = this.resolver.resolveComponentFactory(component);
      const componentRef: ComponentRef<any> = this.container.createComponent(factory);

      this.componentRef = componentRef;
      this.componentRef.instance.type = this.type;
    }
  }
}
