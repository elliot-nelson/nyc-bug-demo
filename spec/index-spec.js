describe("the problem with coverage", function () {
    it("works on OSX & Linux, but not on Windows", function () {
        expect("hello world").toEqual("hello world");
    });
});
