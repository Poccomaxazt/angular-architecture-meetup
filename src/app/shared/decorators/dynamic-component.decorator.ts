const DYNAMIC_COMPONENTS: { [key: string]: any } = {};

export function DynamicComponent(type: string) {
  return (target: any) => {
    if (DYNAMIC_COMPONENTS[type]) {
      console.warn(`Not unique component type was provided: ${type}`);
      return;
    }
    DYNAMIC_COMPONENTS[type] = target;
  };
}

export function getDynamicComponentByType(type: string): any {
  return DYNAMIC_COMPONENTS[type];
}
