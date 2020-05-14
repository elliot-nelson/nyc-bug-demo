## Setup

This repository was created with the following steps:

1. `npm install jasmine nyc`
2. `jasmine init`
3. Create any spec file in `spec/`
4. Run the test command

## Test Command

```console
node node_modules\nyc\bin\nyc.js --cwd spec node node_modules\jasmine\bin\jasmine.js
```

## Expected Behavior

Prints the following:

```console
1 spec, 0 failures
Finished in 0.023 seconds
Randomized with seed 40333 (jasmine --random=true --seed=40333)
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                   
 index-spec.js |     100 |      100 |     100 |     100 |                   
---------------|---------|----------|---------|---------|-------------------
```

## Actual Behavior

Prints the following:

```console
1 spec, 0 failures
Finished in 0.017 seconds
Randomized with seed 50629 (jasmine --random=true --seed=50629)
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
```

Removing the `--cwd` option fixes the problem.
Running the same command (with the `--cwd`) works on MacOS/Linux.
