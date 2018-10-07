// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

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
  return Caml_int32.imul(Caml_int32.imul(param[/* a */0], param[/* b */1]), Belt_Option.mapWithDefault(Js_primitive.nullable_to_opt(param[/* c */2]), 1, (function (n) {
                    return n;
                  })));
}

function computeArea3(o) {
  return Caml_int32.imul(Caml_int32.imul(o.x, o.y), Belt_Option.mapWithDefault(Js_primitive.nullable_to_opt(o.z), 1, (function (n) {
                    return n;
                  })));
}

function computeArea4(o) {
  return Caml_int32.imul(Caml_int32.imul(o.x, o.y), Belt_Option.mapWithDefault(o.z, 1, (function (n) {
                    return n;
                  })));
}

function computeNested() {
  return 0;
}

function computeNestedNested() {
  return 0;
}

function computeNestedNestedNullable() {
  return 0;
}

function computeNestedNestedHalfNullable() {
  return 0;
}

var origin = /* record */[
  /* x */0,
  /* y */0,
  /* z */0
];

exports.origin = origin;
exports.computeArea = computeArea;
exports.coord2d = coord2d;
exports.computeArea2 = computeArea2;
exports.computeArea3 = computeArea3;
exports.computeArea4 = computeArea4;
exports.computeNested = computeNested;
exports.computeNestedNested = computeNestedNested;
exports.computeNestedNestedNullable = computeNestedNestedNullable;
exports.computeNestedNestedHalfNullable = computeNestedNestedHalfNullable;
/* No side effect */
