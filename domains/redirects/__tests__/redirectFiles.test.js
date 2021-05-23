expect.extend({
                  /**
                   * Checks, if given JSON (object) is valid using passed AJV validator.
                   *
                   * @param {Object} received JSON to validate.
                   * @param validator AJV validator.
                   * @param {string} [fileName=""] currently checked filename.
                   */
                  toBeValidJson(received, validator, fileName = "") {
                      const isValid = validator(received);

                      if(isValid) {
                          return {
                              message: () =>
                                           `expected object to be valid JSON according to given schema`,
                              pass:    true
                          };
                      } else {
                          let stringErrors = "";

                          validator.errors.forEach(error => {
                              if(fileName !== "") {
                                  stringErrors += `\nIn file ${fileName}, JSON path "${error.instancePath}": ${error.message}`;
                              } else {
                                  stringErrors += `\nJSON path "${error.instancePath}": ${error.message}`;
                              }
                          });

                          return {
                              message: () =>
                                           `expected object to be valid JSON according to given schema. Errors occurred:${stringErrors}`,
                              pass:    false
                          };
                      }
                  }
              });

const fs      = require("fs"),
      Ajv2020 = require("ajv/dist/2020"),
      addFormats = require("ajv-formats"),
      ajv     = new Ajv2020({allErrors: true});

addFormats(ajv, ['uri']);

const filesDirectory = "./redirectFiles/",
      schema         = require("../redirectFiles/redirect.schema.json"),
      validate       = ajv.compile(schema);

test("redirect files should match schema", async() => {
    // Iterate through each file in redirect files directory
    await fs.readdirSync(filesDirectory).forEach(filename => {
        // ...but exclude *.schema.json files.
        if(filename.endsWith(".json") && !filename.endsWith(".schema.json")) {
            let file        = fs.readFileSync(filesDirectory + filename),
                fileContent = JSON.parse(file.toString());

            expect(fileContent).toBeValidJson(validate, filename);
        }
    });
});
