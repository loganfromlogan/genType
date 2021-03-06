/** Generate fresh identifiers */
module IntMap =
  Map.Make({
    type t = int;
    let compare = (x: int, y: int) => compare(x, y);
  });

type typeVarsGen = {
  mutable typeNameMap: IntMap.t(string),
  mutable typeNameCounter: int,
};

let createTypeVarsGen = () => {typeNameMap: IntMap.empty, typeNameCounter: 0};

let jsTypeNameForObject = (~typeVarsGen) => {
  typeVarsGen.typeNameCounter = typeVarsGen.typeNameCounter + 1;
  let name = "T" ++ string_of_int(typeVarsGen.typeNameCounter);
  name;
};

let jsTypeNameForAnonymousTypeID = (~typeVarsGen, id) =>
  try (typeVarsGen.typeNameMap |> IntMap.find(id)) {
  | Not_found =>
    typeVarsGen.typeNameCounter = typeVarsGen.typeNameCounter + 1;
    let name = "T" ++ string_of_int(typeVarsGen.typeNameCounter);
    typeVarsGen.typeNameMap = typeVarsGen.typeNameMap |> IntMap.add(id, name);
    name;
  };