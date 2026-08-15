//Define a common command to run cucumber tests

const commonCommand = "--require ts-node/register \
 --require ./src/step-definitions/*-steps.ts \
 ./src/features/*.feature \
 --require ./src/Utils/cucumber-timeout.ts";

 interface ProfileCommand {
   [profile: string]: string;
 }

 const profileCommands: ProfileCommand = {
    smoke : `${commonCommand} --tags @smoke`,
   "cucumberWithTS": `cucumber-js ${commonCommand}`,
   "cucumber": `npx cucumber-js && ts-node ./src/index.ts`
 };