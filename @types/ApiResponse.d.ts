import type { paths } from './tApi'

type PostResType = NonNullable<paths['/api/posts/list']['get']['responses']['200']['content']['application/json']>
declare namespace ApiResponseModule {
  export interface PostListResponse extends PostResType {}
}
