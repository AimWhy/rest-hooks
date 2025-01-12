import {
  __INTERNAL__,
  State,
  EndpointInterface,
  FetchFunction,
} from '@rest-hooks/react';
import { useMemo } from 'react';

import { FetchShape, ParamsFromShape } from '../endpoint/index.js';

const { useCacheState } = __INTERNAL__;

/**
 * Gets meta for a fetch key.
 * @see https://resthooks.io/docs/api/useMeta
 */
export default function useMeta<
  E extends
    | Pick<EndpointInterface<FetchFunction>, 'key'>
    | Pick<FetchShape<any, any>, 'getFetchKey'>,
  Args extends
    | (E extends { key: any }
        ? readonly [...Parameters<E['key']>]
        : readonly [ParamsFromShape<E>])
    | readonly [null],
>(endpoint: E, ...args: Args): StateMeta | null {
  const state = useCacheState();
  const key = args[0]
    ? (endpoint as any).key
      ? (endpoint as any).key(...args)
      : (endpoint as any).getFetchKey(args[0])
    : '';

  return useMemo(() => {
    if (!key) return null;
    return selectMeta(state, key);
  }, [key, state]);
}

function selectMeta<R = any>(
  state: State<R>,
  fetchKey: string,
): State<R>['meta'][string] {
  return state.meta[fetchKey];
}

type StateMeta<R = any> = State<R>['meta'][string];
