describe("Assertions", function () {
    it("Numbers comparing", function () {
        const a = 7;
        const b = 8;
        expect(a).toBeLessThan(b);
    });
    it("Numbers comparing", function () {
        const c = 8;
        const d = 9;
        expect(d).toBeGreaterThan(c);
    });

    it("Numbers comparing", function () {
        const e = 9;
        const f = 9;
        expect(e).toEqual(f);
    });
    it("Rows full comparing", function () {
        const str1 = 'name';
        const str2= 'name';
        expect(str1).toEqual(str2);
    });
    it("Rows comparing", function () {
        const str1 = 'name1';
        const str2 = 'name';
        expect(str1).toContain(str2);
    });
    it("Arrays comparing", function () {
        const arr1 = [1, 2, 4];
        const arr2 = [1, 2, 4];
        expect(arr1).toEqual(arr2);
    });
    it("Arrays comparing", function () {
        const arr1 = ['test1', 'test2'];
        const arr2 = ['test1', 'test2'];
        expect(arr1).toEqual(arr2);
    });
});