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
deno install --force --allow-read --allow-write --unstable --name cli-select https://raw.githubusercontent.com/d9k/cli-select/main/main.ts
```

## Upgrade from url

```
deno cache --reload https://raw.githubusercontent.com/d9k/cli-select/main/main.ts
```

## Local install

```
deno install --force --allow-read --allow-write --unstable --name cli-select main.ts
```
