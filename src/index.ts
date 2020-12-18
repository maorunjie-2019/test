interface A{
    T1: string
}
interface B{
    T2: number
}
interface C extends A, B{
    T3:number[]
}
const u:C = {    //u变量必须同时实现interface A, interface B, interface C
    T1:'text',
    T2:123,
    T3: [1,2,3]
}