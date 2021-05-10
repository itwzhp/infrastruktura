const {matchers} = require("jest-json-schema");

expect.extend(matchers);

const fs             = require("fs"),
      filesDirectory = "./redirectFiles/",
      schema         = require("../redirectFiles/redirect.schema.json");

test("redirect file should match schema", async() => {
    await fs.readdirSync(filesDirectory).forEach(filename => {
        if(filename.endsWith(".json") && !filename.endsWith(".schema.json")) {
            let file        = fs.readFileSync(filesDirectory + filename),
                fileContent = JSON.parse(file);

            expect(fileContent).toMatchSchema(schema);
        }
    });
});
