# Usage

## Create a [Resource](../api/Resource.md)

`resources/article.ts`
```javascript
import { Resource } from 'rest-hooks';

export default class ArticleResource extends Resource {
  readonly id: number | null = null;
  readonly title: string = '';
  readonly content: string = '';
  readonly author: number | null = null;
  readonly tags: string[] = [];

  pk() {
    return this.id;
  }

  static urlRoot = 'http://test.com/article/';
}
```

Be sure to add all the properties you expect and mark them as readonly. [Mutation is considered harmful.](../guides/immutability.md)

Also be sure to provide the `pk()` function and `static urlRoot` string.

## [Use resource](../api/useResource.md)

`article.tsx`
```tsx
import { hooks } from 'rest-hooks';
import ArticleResource from 'resources/article';

export default function Article({ match: { params } }) {
  const article = hooks.useResource(
    ArticleResource.singleRequest(),
    params
  )
  return (
    <article>
      <h2>{article.title}</h2>
      <div>
        {article.content}
      </div>
    </article>
  )
}
```

This will automatically fetch the resource if it is not already available. Param changes also results
in a fetch. It will automatically re-render when a new article is fetched even if from another component.


## [Dispatch mutation](../api/useDispatch.md)

`article.tsx`
```tsx
import { hooks } from 'rest-hooks';
import ArticleResource from 'resources/article';

export default function NewArticleForm() {
  const create = hooks.useDispatch(ArticleResource.createRequest())
  return (
    <form onSubmit={e => create(new FormData(e.target), {})}>
      <FormField name="title" />
      <FormField name="content" type="textarea" />
      <FormField name="tags" type="tag" />
    </article>
  )
}
```

`create()` here will return a promise that resolves to the new Resource created by the API.
It will automatically be added in the cache for any consumers to display.

### [⬅️Installation](./installation.md)
### 📖[Documentation](..)
