const { exec } = require("child_process");
const fs = require('fs');
const {convertXML, createAST} = require("simple-xml-to-json")

// TODO: make metar code as a variable excec command and run multiple thread and save it into DB (mysql, postgres....)
// Require Window machine, linux mac not working
exec(`mweather.exe /sxml test.xml -file "./00Z.TXT"`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    fs.readFile('test.xml', (err, data) => {
        if (err) {
            console.log('file not exist')
        } else {
            const myJson = convertXML(data.toString())
            console.log(JSON.stringify(myJson))
            // next Step: connect DB and storage json
            // delete file after generate test.xml
        }
    });
});
