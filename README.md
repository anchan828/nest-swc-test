
## jest config

```json
{
  "transform": {
    "^.+\\.(t|j)s$": [
      "@swc-node/jest",
      {
        "decorators": true,
        "dynamicImport": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "keepClassNames": true
      }
    ]
  }
}
```

## Currently swc does not work with nestjs (2021/06/04)

class-transformer not working. emitDecoratorMetadata has bug

https://github.com/Brooooooklyn/swc-node/issues/401

https://github.com/typestack/class-transformer/blob/aad5a4385d4913411e0028d10ffcd49b9096e0db/src/TransformOperationExecutor.ts#L295

