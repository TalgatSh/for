export const objOrigin = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export const arrForSort = ['name', 'level'];

export function sortForAlphabet(obj, preFinallyObject, resultLastKeys) {
  resultLastKeys.forEach((el) => {
    for (const key in obj) {
      if (el === key) {
        preFinallyObject.push({
          key,
          value: obj[key],
        });
      }
    }
  });

  return preFinallyObject;
}

export function filterLastKeys(obj, sortRules) {
  const arrOfKeys = Object.keys(obj);

  sortRules.forEach((el) => arrOfKeys.splice(arrOfKeys.indexOf(el), 1));
  arrOfKeys.sort();

  return arrOfKeys;
}

export function sortForRules(obj, sortRules) {
  let result = null;
  const preFinallyObject = [];

  const resultLastKeys = filterLastKeys(obj, sortRules);

  sortRules.forEach((el) => {
    for (const key in obj) {
      if (el === key) {
        preFinallyObject.push({
          key,
          value: obj[key],
        });
      }

      if (preFinallyObject.length === sortRules.length) {
        result = sortForAlphabet(obj, preFinallyObject, resultLastKeys);
      }
    }
  });

  return result;
}

export default function sortObject(obj, sortRules) { // START
  const result = sortForRules(obj, sortRules);
  return result;
}
