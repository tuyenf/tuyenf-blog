import type { paths } from './tApi'

type PostReqType = NonNullable<paths['/api/posts/list']['get']['parameters']['query']>

declare namespace ApiRequestModule {
  export interface PostRequest extends PostReqType {}
}
