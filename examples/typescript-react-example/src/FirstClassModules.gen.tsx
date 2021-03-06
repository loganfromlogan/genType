/* TypeScript file generated by genType. */

// tslint:disable-next-line:no-var-requires
const FirstClassModulesBS = require('./FirstClassModules.bs');

export const firstClassModule: {
  readonly x: number; 
  readonly EmptyInnerModule: {
  }; 
  readonly InnerModule2: {
    readonly k: number
  }; 
  readonly Z: unknown; 
  readonly y: string
} = {x:FirstClassModulesBS.firstClassModule[0], EmptyInnerModule:{}, InnerModule2:{k:FirstClassModulesBS.firstClassModule[2][0]}, Z:FirstClassModulesBS.firstClassModule[3], y:FirstClassModulesBS.firstClassModule[4]};

export const testConvert: (_1:{
  readonly x: number; 
  readonly EmptyInnerModule: {
  }; 
  readonly InnerModule2: {
    readonly k: number
  }; 
  readonly Z: unknown; 
  readonly y: string
}) => {
  readonly x: number; 
  readonly EmptyInnerModule: {
  }; 
  readonly InnerModule2: {
    readonly k: number
  }; 
  readonly Z: unknown; 
  readonly y: string
} = function _(Arg1: any) {
  const result = FirstClassModulesBS.testConvert([Arg1.x, [], [Arg1.InnerModule2.k], Arg1.Z, Arg1.y]);
  return {x:result[0], EmptyInnerModule:{}, InnerModule2:{k:result[2][0]}, Z:result[3], y:result[4]}
};

export const someFunctorAsFunction: (_1:{
  readonly x: number; 
  readonly EmptyInnerModule: {
  }; 
  readonly InnerModule2: {
    readonly k: number
  }; 
  readonly Z: unknown; 
  readonly y: string
}) => { readonly ww: string } = function _(Arg1: any) {
  const result = FirstClassModulesBS.someFunctorAsFunction([Arg1.x, [], [Arg1.InnerModule2.k], Arg1.Z, Arg1.y]);
  return {ww:result[0]}
};
