const mockFs = require("mock-fs");
describe("Fails on NodeJS 16, Succeeds on NodeJS 14", () => {
    it("Fails on NodeJS 16, Succeeds on NodeJS 14", async () => {
        mockFs({
            path: {
                source: {
                    subdir: mockFs.directory(),
                },
            },
        });
        await fs.rm("path/source", { force: true });
    });

})
