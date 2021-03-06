// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function computeArea(param) {
  return Caml_int32.imul(Caml_int32.imul(param[/* x */0], param[/* y */1]), Belt_Option.mapWithDefault(param[/* z */2], 1, (function (n) {
                    return n;
                  })));
}

function coord2d(x, y) {
  return /* record */[
          /* x */x,
          /* y */y,
          /* z */undefined
        ];
}

function computeArea2(param) {
  return Caml_int32.imul(Caml_int32.imul(param[/* a */0], param[/* b */1]), Belt_Option.mapWithDefault(Caml_option.nullable_to_opt(param[/* c */2]), 1, (function (n) {
                    return n;
                  })));
}

function computeArea3(o) {
  return Caml_int32.imul(Caml_int32.imul(o.x, o.y), Belt_Option.mapWithDefault(Caml_option.nullable_to_opt(o.z), 1, (function (n) {
                    return n;
                  })));
}

function computeArea4(o) {
  return Caml_int32.imul(Caml_int32.imul(o.x, o.y), Belt_Option.mapWithDefault(o.z, 1, (function (n) {
                    return n;
                  })));
}

function computeNested(param) {
  return 0;
}

function computeNestedNested(param) {
  return 0;
}

function computeNestedNestedNullable(param) {
  return 0;
}

function computeNestedNestedHalfNullable(param) {
  return 0;
}

function useTypeImportedInOtherModule(x) {
  return x;
}

function convertInner(x) {
  return x;
}

function convertOuter(x) {
  return x;
}

var origin = /* record */[
  /* x */0,
  /* y */0,
  /* z */0
];

export {
  origin ,
  computeArea ,
  coord2d ,
  computeArea2 ,
  computeArea3 ,
  computeArea4 ,
  computeNested ,
  computeNestedNested ,
  computeNestedNestedNullable ,
  computeNestedNestedHalfNullable ,
  useTypeImportedInOtherModule ,
  convertInner ,
  convertOuter ,
  
}
/* No side effect */
