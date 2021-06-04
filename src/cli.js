import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main.js";

let template = [
  "Web - Css",
  "Web - Scss",
  "Web - Sass",
  "Web - Bootstrap",
  "Web - PWA",
  "Electron App",
  "Express App",
  "React App",
  "Next App",
];

async function prompt(options) {
  const questions = [];

  questions.push({
    type: "list",
    name: "template",
    message: "Project template",
    choices: template,
    default: template[0],
  });

  questions.push({
    type: "confirm",
    name: "git",
    message: "Would you like to initialize a git repository?",
    default: false,
  });

  const answers = await inquirer.prompt(questions);
  return {
    template: answers.template,
    git: answers.git,
  };
}

export async function cli(args) {
  let options;
  options = await prompt(options);
  await createProject(options);
}
