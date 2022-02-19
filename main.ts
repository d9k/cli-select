import * as flags from "https://deno.land/std@0.125.0/flags/mod.ts";
import question, { questionConfig } from 'https://raw.githubusercontent.com/ocpu/question-deno/master/mod.ts'
import { println }  from 'https://raw.githubusercontent.com/ocpu/question-deno/master/util.ts'
import {readLines} from "https://deno.land/std/io/bufio.ts"

window.onload = async function main() {
  let tty: Deno.File|undefined;
  try {
    try {
      tty = Deno.openSync("/dev/tty", {
        /** requires --allow-read Deno flag! */
        read: true,
        /** requires --allow-write Deno flag! */
        write: true
      });
      if (Deno.isatty(tty.rid)) {
        questionConfig.keypressReader = tty;
        questionConfig.writer = tty;
      }
    } catch(e) {
      console.error(e);
    }

    const args = flags.parse(Deno.args);

    async function showUsageAndExit(error?: string) {
      await println(
        `Usage:
    PIPED_INPUT | cli-select [-m|--multliselect] [-h|--help] [-q|--question=QUESTION_TEXT]
    
PIPED_INPUT: can be \`cat options.txt\``
      );

      if (error) {
        throw Error(error);
      } else {
        Deno.exit(1);
      }
    }

    if (args.h || args.help) {
      await showUsageAndExit();
    }

    const multiselect = args.m || args.multiselect;
    const questionLine: string|undefined = args.q || args.question;

    const options: string[] = [];

    for await (const inputLine of readLines(Deno.stdin)) {
      options.push(inputLine);
    }

    if (!options.length) {
      await showUsageAndExit('No options provided!');
    }

    const result = multiselect
      ? await question('checkbox', questionLine ?? 'Select one or multiple options:', options)
      : await question('list', questionLine ?? 'Select option:', options);

    const resultArray = Array.isArray(result) ? result : [result];

    for await (const outputLine of resultArray) {
      console.log(outputLine);
    }
  }
  finally {
    if (tty && tty.rid) {
      Deno.close(tty.rid);
    }
  }
}


