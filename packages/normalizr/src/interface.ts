export type Schema =
  | null
  | string
  | { [K: string]: any }
  | Schema[]
  | SchemaSimple
  | Serializable;

export type Serializable<
  T extends { toJSON(): string } = { toJSON(): string },
> = {
  prototype: T;
};

export interface SchemaSimple<T = any> {
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities?: any,
    args?: any[],
  ): any;
  denormalize?(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [denormalized: T, found: boolean, suspend: boolean];
  denormalizeOnly?(
    input: {},
    args: any,
    unvisit: (input: any, schema: any) => any,
  ): T;
  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
    entities: EntityTable,
  ): any;
}

export interface SchemaClass<T = any, N = T | undefined>
  extends SchemaSimple<T> {
  // this is not an actual member, but is needed for the recursive NormalizeNullable<> type algo
  _normalizeNullable(): any;
  // this is not an actual member, but is needed for the recursive DenormalizeNullable<> type algo
  _denormalizeNullable(): [N, boolean, boolean];
}

export interface EntityInterface<T = any> extends SchemaSimple {
  createIfValid?(props: any): any;
  pk(
    params: any,
    parent?: any,
    key?: string,
    args?: readonly any[],
  ): string | undefined;
  readonly key: string;
  merge(existing: any, incoming: any): any;
  /** @deprecated use mergeWithStore instead (which can call this) */
  expiresAt?(meta: any, input: any): number;
  mergeWithStore?(
    existingMeta: any,
    incomingMeta: any,
    existing: any,
    incoming: any,
  ): any;
  mergeMetaWithStore?(
    existingMeta: any,
    incomingMeta: any,
    existing: any,
    incoming: any,
  ): any;
  /** @deprecated use mergeWithStore instead (which can call this) */
  useIncoming?(
    existingMeta: any,
    incomingMeta: any,
    existing: any,
    incoming: any,
  ): boolean;
  indexes?: any;
  schema: Record<string, Schema>;
  cacheWith?: object;
  prototype: T;
}

export interface UnvisitFunction {
  (input: any, schema: any): [any, boolean, boolean] | any;
  og?: UnvisitFunction;
  setLocal?: (entity: any) => void;
}

export interface NormalizedIndex {
  readonly [entityKey: string]: {
    readonly [indexName: string]: { readonly [lookup: string]: string };
  };
}

export interface EntityTable {
  [entityKey: string]:
    | {
        [pk: string]: unknown;
      }
    | undefined;
}
