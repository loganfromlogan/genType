/** 
 * @flow strict
 * @generated 
 * @nolint
 */

// $FlowExpectedError: Reason checked type sufficiently
const RecordsBS = require("./Records.bs");

// No need to import locally visible type coord. Make sure it is also marked with @genType
// No need to import locally visible type coord2. Make sure it is also marked with @genType

export type coord = {|x:number, y:number, z?:number|};
export const origin: coord = {x:RecordsBS.origin[0], y:RecordsBS.origin[1], z:RecordsBS.origin[2]};
export const computeArea: (coord) => number = function _(Arg1) { const result = RecordsBS.computeArea([Arg1.x, Arg1.y, Arg1.z]); return result };
export const coord2d: (number, number) => coord = function _(Arg1, Arg2) { const result = RecordsBS.coord2d(Arg1, Arg2); return {x:result[0], y:result[1], z:result[2]} };
export type coord2 = {|a:number, b:number, c:?number|};
export const computeArea2: (coord2) => number = function _(Arg1) { const result = RecordsBS.computeArea2([Arg1.a, Arg1.b, Arg1.c]); return result };
export const computeArea3: ({|x:number, y:number, z:?number|}) => number = RecordsBS.computeArea3;
export const computeArea4: ({|x:number, y:number, z:?number|}) => number = function _(Arg1) { const result = RecordsBS.computeArea4({x:Arg1.x, y:Arg1.y, z:(Arg1.z == null ? undefined : Arg1.z)}); return result };
export const computeNested: ({|x:number, y:number, z:?{|x:number, y:number, z:?number|}|}) => number = function _(Arg1) { const result = RecordsBS.computeNested({x:Arg1.x, y:Arg1.y, z:(Arg1.z == null ? undefined : {x:Arg1.z.x, y:Arg1.z.y, z:(Arg1.z.z == null ? undefined : Arg1.z.z)})}); return result };
export const computeNestedNested: ({|x:number, y:number, z:?{|x:number, y:number, z:?{|x:number, y:number, z:?number|}|}|}) => number = function _(Arg1) { const result = RecordsBS.computeNestedNested({x:Arg1.x, y:Arg1.y, z:(Arg1.z == null ? undefined : {x:Arg1.z.x, y:Arg1.z.y, z:(Arg1.z.z == null ? undefined : {x:Arg1.z.z.x, y:Arg1.z.z.y, z:(Arg1.z.z.z == null ? undefined : Arg1.z.z.z)})})}); return result };
export const computeNestedNestedNullable: ({|x:number, y:number, z:?{|x:number, y:number, z:?{|x:number, y:number, z:?number|}|}|}) => number = RecordsBS.computeNestedNestedNullable;
export const computeNestedNestedHalfNullable: ({|x:number, y:number, z:?{|x:number, y:number, z:?{|x:number, y:number, z:?number|}|}|}) => number = function _(Arg1) { const result = RecordsBS.computeNestedNestedHalfNullable({x:Arg1.x, y:Arg1.y, z:(Arg1.z == null ? Arg1.z : {x:Arg1.z.x, y:Arg1.z.y, z:(Arg1.z.z == null ? undefined : Arg1.z.z)})}); return result };