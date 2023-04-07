const findMefindMedianSortedArraysdian = require("./median")

describe("#findMefindMedianSortedArraysdian", function(){
  it("counts the number of zeroes", function(){
    expect(findMefindMedianSortedArraysdian([1,2],[3])).toBe(2)
    expect(findMefindMedianSortedArraysdian([1,5,40,12],[22,33,101])).toBe(22)
  })
})