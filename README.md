
Currently branch is not at 100%.

```
$ npm run test:cov

> nest-swc-test@0.0.1 test:cov
> vitest run --coverage


 RUN  v0.8.4 ~/nest-swc-test

 √ src/app.controller.spec.ts (2)

Test Files  1 passed (1)
     Tests  2 passed (2)
      Time  1.28s (in thread 11ms, 11723.99%)

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |       75 |     100 |     100 |                   
 app.controller.ts |     100 |    66.66 |     100 |     100 | 6                 
 app.service.ts    |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------
```

![](https://t.gyazo.com/teams/unity/213e3b7560d1ed2aaa27476b840e597a.png)

## Currently swc does not work with nestjs (2021/06/04)

class-transformer not working. emitDecoratorMetadata has bug

https://github.com/Brooooooklyn/swc-node/issues/401

https://github.com/typestack/class-transformer/blob/aad5a4385d4913411e0028d10ffcd49b9096e0db/src/TransformOperationExecutor.ts#L295

