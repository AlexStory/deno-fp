import { assertEquals } from "./deps.ts";
import { take } from "./mod.ts";

Deno.test("take works", function() {
  const nums = [1, 2, 3, 4, 5]
  
  assertEquals(
    [1, 2, 3],
    take(3, nums)
  )
})

Deno.test("take will only return available values", function() {
  const nums = [1, 2, 3]
  assertEquals(
    [1, 2, 3],
    take(5, nums)
  )
})
