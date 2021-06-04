import chalk from "chalk";
import execa from "execa";
import fs from "fs";
import Listr from "listr";
import ncp from "ncp";
import path from "path";
import { projectInstall } from "pkg-install";
import { promisify } from "util";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplate(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

async function initGit(options) {
  const result = await execa("git", ["init"], {
    cwd: options.targetDirectory,
  });

  if (result.failed) {
    return Promise.reject(
      new Error(chalk.red.bold("Failed to initialize a git repository!"))
    );
  }
}

export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };

  const url = import.meta.url;
  const templateDir = path.resolve(
    new URL(url).pathname,
    "../../templates",
    options.template.toLowerCase()
  );

  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error("%s Invalid template name ", chalk.red.bold("ERROR:"));
    process.exit(1);
  }

  const tasks = new Listr([
    {
      title: "Creating project",
      task: () => copyTemplate(options),
    },
    {
      title: "Initializing a git repository",
      task: () => initGit(options),
      enabled: () => options.git,
    },
    {
      title: "Install dependencies",
      task: () =>
        projectInstall({
          cwd: options.targetDirectory,
        }),
    },
  ]);

  await tasks.run();

  console.log(chalk.greenBright.bold("Project is ready to go! Happy coding!"));
  return true;
}
