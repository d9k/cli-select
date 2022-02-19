# cli-select

## Special thanks to

[ocpu](https://github.com/ocpu) for the [question-deno](https://github.com/ocpu/question-deno) library. 

## Usage

```
tac todo.txt | cli-select -m "What do you plan to do today?" > todo-today.txt 
```

## Install from url

Install [Deno](https://deno.land/) if not yet!

```
deno install --force --allow-read --allow-write --unstable --name cli-select https://deno.land/x/cli_select/main.ts
```

## Upgrade from url

```
deno cache --reload --unstable https://deno.land/x/cli_select/main.ts
```

## Local install

```
deno install --force --allow-read --allow-write --unstable --name cli-select main.ts
```
