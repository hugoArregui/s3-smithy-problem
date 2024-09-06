
```
❯ npm run build

> @well-known-components/base-component@1.0.0 build
> tsc -p tsconfig.json

src/index.ts:10:33 - error TS2769: No overload matches this call.
  Overload 1 of 4, '(command: Command<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | ... 93 more ... | { ...; }, GetObjectCommandInput, ServiceOutputTypes, GetObjectCommandOutput, SmithyResolvedConfiguration<...>>, options?: HttpHandlerOptions | undefined): Promise<...>', gave the following error.
    Argument of type 'GetObjectCommand' is not assignable to parameter of type 'Command<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | { ...; } | ... 92 more ... | { ...; }, GetObjectCommandInput, ServiceOutputTypes, GetObjectCommandOutput, SmithyResolvedConfiguration<...>>'.
      Types of property 'resolveMiddleware' are incompatible.
        Type '(stack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options: any) => Handler<...>' is not assignable to type '(stack: MiddlewareStack<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | ... 93 more ... | { ...; }, ServiceOutputTypes>, configuration: SmithyResolvedConfiguration<...>, options: any) => Handler...'.
          Types of parameters 'stack' and 'stack' are incompatible.
            Type 'MiddlewareStack<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | { ...; } | ... 92 more ... | { ...; }, ServiceOutputTypes>' is not assignable to type 'MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>'.
              Types of property 'add' are incompatible.
                Type '{ (middleware: InitializeMiddleware<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | ... 93 more ... | { ...; }, ServiceOutputTypes>, options?: (InitializeHandlerOptions & AbsoluteLocation) | und...' is not assignable to type '{ (middleware: InitializeMiddleware<ServiceInputTypes, ServiceOutputTypes>, options?: (InitializeHandlerOptions & AbsoluteLocation) | undefined): void; (middleware: SerializeMiddleware<...>, options: SerializeHandlerOptions & AbsoluteLocation): void; (middleware: BuildMiddleware<...>, options: BuildHandlerOptions & ...'.
                  Types of parameters 'middleware' and 'middleware' are incompatible.
                    Types of parameters 'next' and 'next' are incompatible.
                      Type 'InitializeHandler<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | { ...; } | ... 92 more ... | { ...; }, ServiceOutputTypes>' is not assignable to type 'InitializeHandler<ServiceInputTypes, ServiceOutputTypes>'.
                        Type 'ServiceInputTypes' is not assignable to type '{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | { Bucket: string | undefined; ... 12 more ...; SSECustomerKeyMD5?: string | undefined; } | ... 92 more ... | { ...; }'.
  Overload 2 of 4, '(command: Command<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | ... 93 more ... | { ...; }, GetObjectCommandInput, ServiceOutputTypes, GetObjectCommandOutput, SmithyResolvedConfiguration<...>>, options?: HttpHandlerOptions | undefined, cb?: ((err: unknown, data?: { ...; } | undefined) => void) | undefined): void | Promise<...>', gave the following error.
    Argument of type 'GetObjectCommand' is not assignable to parameter of type 'Command<{ Bucket: string | undefined; Key: string | undefined; UploadId: string | undefined; RequestPayer?: "requester" | undefined; ExpectedBucketOwner?: string | undefined; } | { ...; } | ... 92 more ... | { ...; }, GetObjectCommandInput, ServiceOutputTypes, GetObjectCommandOutput, SmithyResolvedConfiguration<...>>'.

10   const out = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }))
                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Found 1 error in src/index.ts:10
```
