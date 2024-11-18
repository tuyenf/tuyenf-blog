/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/posts/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get list of posts */
    get: operations['getPostListResponse']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    Meta: {
      currentPage?: number
      perPage?: number
      totalItems?: number
      totalPages?: number
    }
    Post: {
      /** Format: date-time */
      date?: string
      id?: number
      title?: string
    }
    PostListResponse: {
      data?: components['schemas']['Post'][]
      meta?: components['schemas']['Meta']
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getPostListResponse: {
    parameters: {
      query?: {
        /** @description Sort order (ASC or DESC) */
        order?: string
        /** @description Search term */
        q?: string
        /** @description Field to sort by */
        sortBy?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PostListResponse']
        }
      }
    }
  }
}
