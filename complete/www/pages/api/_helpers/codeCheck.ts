function codeCheck(target: number[], input_code: number[]): number[] {
  function mapCode(arr: number[]): Map<number, number> {
    return arr.reduce((collector: Map<number, number>, current: number) => {
      collector.set(current, (collector.get(current) || 0) + 1);
      return collector;
    }, new Map());
  }

  let target_parts: Map<number, number> = mapCode(target);
  let input_parts: Map<number, number> = mapCode(input_code);

  let seen = new Map();

  let result = new Array();

  // Parse for correct placements first
  for (let i = 0; i < input_code.length; i++) {
    let curr_number = input_code[i];

    if (curr_number === target[i]) {
      seen.set(curr_number, (seen.get(curr_number) || 0) + 1);
      result[i] = 1;
    } else {
      result[i] = 3;
    }
  }

  for (let i = 0; i < input_code.length; i++) {
    let curr_number = input_code[i];

    // Check if already correct
    if (result[i] === 1) {
      result[i] = 1;
    } else if (target.includes(curr_number)) {
      // check if seen
      if (seen.has(curr_number)) {
        // if already seen all the needed parts
        if (seen.get(curr_number) === target_parts.get(curr_number)) {
          result[i] = 0;
        } else {
          seen.set(curr_number, (seen.get(curr_number) || 0) + 1);
          result[i] = 2;
        }
      } else {
        // add to seen if not yet seen
        seen.set(curr_number, (seen.get(curr_number) || 0) + 1);
        result[i] = 2;
      }
    } else {
      result[i] = 0;
    }
  }
  return result;
}
export default codeCheck;
