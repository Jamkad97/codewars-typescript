export function dirReduc(arr: string[]): string[] {
  const opposite: Record<string, string> = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  };

  const stack: string[] = [];

  for (const dir of arr) {
    if (stack.length > 0 && opposite[dir] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return stack;
}
