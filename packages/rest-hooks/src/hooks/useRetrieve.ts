import { StateContext } from '@rest-hooks/react';
import { useContext, useMemo } from 'react';

import useExpiresAt from './useExpiresAt.js';
import useFetchDispatcher from './useFetchDispatcher.js';
import { ReadShape, ParamsFromShape } from '../endpoint/index.js';

/**
 * Request a resource if it is not in cache.\
 * @deprecated use https://resthooks.io/docs/api/useFetch
 */
export default function useRetrieve<Shape extends ReadShape<any, any>>(
  fetchShape: Shape,
  params: ParamsFromShape<Shape> | null,
  triggerFetch = false,
  entitiesExpireAt = 0,
) {
  const dispatchFetch: any = useFetchDispatcher(true);
  const expiresAt = useExpiresAt(fetchShape, params, entitiesExpireAt);
  const { lastReset } = useContext(StateContext);

  return useMemo(() => {
    // null params mean don't do anything
    if ((Date.now() <= expiresAt && !triggerFetch) || !params) return;
    return dispatchFetch(fetchShape, params);
    // we need to check against serialized params, since params can change frequently
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    expiresAt,
    dispatchFetch,
    params && fetchShape.getFetchKey(params),
    triggerFetch,
    lastReset,
  ]);
}
