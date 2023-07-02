import { CacheProvider } from '@data-client/react';
import { CoolerArticleResource } from '__tests__/new';

// relative imports to avoid circular dependency in tsconfig references
import { makeRenderRestHook } from '../../../test';
import { useError } from '../hooks';
import { payload } from '../test-fixtures';

describe('useError()', () => {
  let renderRestHook: ReturnType<typeof makeRenderRestHook>;
  beforeEach(() => {
    renderRestHook = makeRenderRestHook(CacheProvider);
  });

  it('should return undefined when cache not ready and no error in meta', () => {
    const initialFixtures = [
      {
        endpoint: CoolerArticleResource.get,
        args: [payload],
        response: payload,
      },
    ];
    const { result } = renderRestHook(
      () => {
        return useError(CoolerArticleResource.get, { id: payload.id });
      },
      { initialFixtures },
    );

    expect(result.current).toBeUndefined();
  });
});
