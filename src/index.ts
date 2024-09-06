import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { NodeJsClient } from '@smithy/types'

async function main() {
  const client = new S3Client() as NodeJsClient<S3Client>

  const bucket = 'test'
  const key = 'key'

  const out = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }))
  if (!out.Body) {
    return undefined
  }
  const r = await out.Body.transformToByteArray()
  console.log(r.length)
}

main().catch(console.error)
