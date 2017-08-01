interface SquareConfig{
  color?: string;
  width?: number;
}
//只读属性
interface Point{
  readonly x: number;
  readonly y: number;
}

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
