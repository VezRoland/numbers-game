import {test,expect} from "@jest/globals"
import { compare,genarateRandomNr } from "./utils.js";

test("ha a tipp kissebb, helyesen ítéli meg",()=>{
    let result=compare(1,2)
    expect(result).toMatch(/kisebb/)
})
test("ha a tipp nagyobb, helyesen ítéli meg",()=>{
    let result=compare(2,1)
    expect(result).toMatch(/nagyobb/)
})
test("ha a tipp helyes, helyesen ítéli meg",()=>{
    let result=compare(2,2)
    expect(result).toMatch(/Helyes/)
})

test("a random szám a megadott intervallumon belűli érték",()=>{
    for(let i=0;i<20;i++){
        let result=genarateRandomNr(1,20)
        expect(result).toBeLessThanOrEqual(20)
        expect(result).toBeGreaterThanOrEqual(1)
    }
})