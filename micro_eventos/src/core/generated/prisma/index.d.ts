
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model PropostaCasa
 * 
 */
export type PropostaCasa = $Result.DefaultSelection<Prisma.$PropostaCasaPayload>
/**
 * Model PropostaArtista
 * 
 */
export type PropostaArtista = $Result.DefaultSelection<Prisma.$PropostaArtistaPayload>
/**
 * Model EventoArtista
 * 
 */
export type EventoArtista = $Result.DefaultSelection<Prisma.$EventoArtistaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Eventos
 * const eventos = await prisma.evento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Eventos
   * const eventos = await prisma.evento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propostaCasa`: Exposes CRUD operations for the **PropostaCasa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropostaCasas
    * const propostaCasas = await prisma.propostaCasa.findMany()
    * ```
    */
  get propostaCasa(): Prisma.PropostaCasaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propostaArtista`: Exposes CRUD operations for the **PropostaArtista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropostaArtistas
    * const propostaArtistas = await prisma.propostaArtista.findMany()
    * ```
    */
  get propostaArtista(): Prisma.PropostaArtistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventoArtista`: Exposes CRUD operations for the **EventoArtista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventoArtistas
    * const eventoArtistas = await prisma.eventoArtista.findMany()
    * ```
    */
  get eventoArtista(): Prisma.EventoArtistaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Evento: 'Evento',
    PropostaCasa: 'PropostaCasa',
    PropostaArtista: 'PropostaArtista',
    EventoArtista: 'EventoArtista'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "evento" | "propostaCasa" | "propostaArtista" | "eventoArtista"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      PropostaCasa: {
        payload: Prisma.$PropostaCasaPayload<ExtArgs>
        fields: Prisma.PropostaCasaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropostaCasaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropostaCasaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>
          }
          findFirst: {
            args: Prisma.PropostaCasaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropostaCasaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>
          }
          findMany: {
            args: Prisma.PropostaCasaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>[]
          }
          create: {
            args: Prisma.PropostaCasaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>
          }
          createMany: {
            args: Prisma.PropostaCasaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropostaCasaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>[]
          }
          delete: {
            args: Prisma.PropostaCasaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>
          }
          update: {
            args: Prisma.PropostaCasaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>
          }
          deleteMany: {
            args: Prisma.PropostaCasaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropostaCasaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropostaCasaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>[]
          }
          upsert: {
            args: Prisma.PropostaCasaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaCasaPayload>
          }
          aggregate: {
            args: Prisma.PropostaCasaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropostaCasa>
          }
          groupBy: {
            args: Prisma.PropostaCasaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropostaCasaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropostaCasaCountArgs<ExtArgs>
            result: $Utils.Optional<PropostaCasaCountAggregateOutputType> | number
          }
        }
      }
      PropostaArtista: {
        payload: Prisma.$PropostaArtistaPayload<ExtArgs>
        fields: Prisma.PropostaArtistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropostaArtistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropostaArtistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>
          }
          findFirst: {
            args: Prisma.PropostaArtistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropostaArtistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>
          }
          findMany: {
            args: Prisma.PropostaArtistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>[]
          }
          create: {
            args: Prisma.PropostaArtistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>
          }
          createMany: {
            args: Prisma.PropostaArtistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropostaArtistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>[]
          }
          delete: {
            args: Prisma.PropostaArtistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>
          }
          update: {
            args: Prisma.PropostaArtistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>
          }
          deleteMany: {
            args: Prisma.PropostaArtistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropostaArtistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropostaArtistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>[]
          }
          upsert: {
            args: Prisma.PropostaArtistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaArtistaPayload>
          }
          aggregate: {
            args: Prisma.PropostaArtistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropostaArtista>
          }
          groupBy: {
            args: Prisma.PropostaArtistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropostaArtistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropostaArtistaCountArgs<ExtArgs>
            result: $Utils.Optional<PropostaArtistaCountAggregateOutputType> | number
          }
        }
      }
      EventoArtista: {
        payload: Prisma.$EventoArtistaPayload<ExtArgs>
        fields: Prisma.EventoArtistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoArtistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoArtistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>
          }
          findFirst: {
            args: Prisma.EventoArtistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoArtistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>
          }
          findMany: {
            args: Prisma.EventoArtistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>[]
          }
          create: {
            args: Prisma.EventoArtistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>
          }
          createMany: {
            args: Prisma.EventoArtistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoArtistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>[]
          }
          delete: {
            args: Prisma.EventoArtistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>
          }
          update: {
            args: Prisma.EventoArtistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>
          }
          deleteMany: {
            args: Prisma.EventoArtistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoArtistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoArtistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>[]
          }
          upsert: {
            args: Prisma.EventoArtistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoArtistaPayload>
          }
          aggregate: {
            args: Prisma.EventoArtistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventoArtista>
          }
          groupBy: {
            args: Prisma.EventoArtistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoArtistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoArtistaCountArgs<ExtArgs>
            result: $Utils.Optional<EventoArtistaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    evento?: EventoOmit
    propostaCasa?: PropostaCasaOmit
    propostaArtista?: PropostaArtistaOmit
    eventoArtista?: EventoArtistaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    propostasCasa: number
    propostasArtista: number
    eventoArtistas: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propostasCasa?: boolean | EventoCountOutputTypeCountPropostasCasaArgs
    propostasArtista?: boolean | EventoCountOutputTypeCountPropostasArtistaArgs
    eventoArtistas?: boolean | EventoCountOutputTypeCountEventoArtistasArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountPropostasCasaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaCasaWhereInput
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountPropostasArtistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaArtistaWhereInput
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountEventoArtistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoArtistaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoMinAggregateOutputType = {
    id_evento: string | null
    id_usuario: string | null
    titulo: string | null
    descricao: string | null
    data_inicio: Date | null
    data_fim: Date | null
    local: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id_evento: string | null
    id_usuario: string | null
    titulo: string | null
    descricao: string | null
    data_inicio: Date | null
    data_fim: Date | null
    local: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id_evento: number
    id_usuario: number
    titulo: number
    descricao: number
    data_inicio: number
    data_fim: number
    local: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventoMinAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    titulo?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    local?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoMaxAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    titulo?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    local?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoCountAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    titulo?: true
    descricao?: true
    data_inicio?: true
    data_fim?: true
    local?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id_evento: string
    id_usuario: string
    titulo: string
    descricao: string | null
    data_inicio: Date
    data_fim: Date
    local: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    titulo?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    local?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    propostasCasa?: boolean | Evento$propostasCasaArgs<ExtArgs>
    propostasArtista?: boolean | Evento$propostasArtistaArgs<ExtArgs>
    eventoArtistas?: boolean | Evento$eventoArtistasArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    titulo?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    local?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    titulo?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    local?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id_evento?: boolean
    id_usuario?: boolean
    titulo?: boolean
    descricao?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    local?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_usuario" | "titulo" | "descricao" | "data_inicio" | "data_fim" | "local" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propostasCasa?: boolean | Evento$propostasCasaArgs<ExtArgs>
    propostasArtista?: boolean | Evento$propostasArtistaArgs<ExtArgs>
    eventoArtistas?: boolean | Evento$eventoArtistasArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      propostasCasa: Prisma.$PropostaCasaPayload<ExtArgs>[]
      propostasArtista: Prisma.$PropostaArtistaPayload<ExtArgs>[]
      eventoArtistas: Prisma.$EventoArtistaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: string
      id_usuario: string
      titulo: string
      descricao: string | null
      data_inicio: Date
      data_fim: Date
      local: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventoWithId_eventoOnly = await prisma.evento.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id_evento`
     * const eventoWithId_eventoOnly = await prisma.evento.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id_evento`
     * const eventoWithId_eventoOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propostasCasa<T extends Evento$propostasCasaArgs<ExtArgs> = {}>(args?: Subset<T, Evento$propostasCasaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propostasArtista<T extends Evento$propostasArtistaArgs<ExtArgs> = {}>(args?: Subset<T, Evento$propostasArtistaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventoArtistas<T extends Evento$eventoArtistasArgs<ExtArgs> = {}>(args?: Subset<T, Evento$eventoArtistasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id_evento: FieldRef<"Evento", 'String'>
    readonly id_usuario: FieldRef<"Evento", 'String'>
    readonly titulo: FieldRef<"Evento", 'String'>
    readonly descricao: FieldRef<"Evento", 'String'>
    readonly data_inicio: FieldRef<"Evento", 'DateTime'>
    readonly data_fim: FieldRef<"Evento", 'DateTime'>
    readonly local: FieldRef<"Evento", 'String'>
    readonly status: FieldRef<"Evento", 'String'>
    readonly createdAt: FieldRef<"Evento", 'DateTime'>
    readonly updatedAt: FieldRef<"Evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.propostasCasa
   */
  export type Evento$propostasCasaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    where?: PropostaCasaWhereInput
    orderBy?: PropostaCasaOrderByWithRelationInput | PropostaCasaOrderByWithRelationInput[]
    cursor?: PropostaCasaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaCasaScalarFieldEnum | PropostaCasaScalarFieldEnum[]
  }

  /**
   * Evento.propostasArtista
   */
  export type Evento$propostasArtistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    where?: PropostaArtistaWhereInput
    orderBy?: PropostaArtistaOrderByWithRelationInput | PropostaArtistaOrderByWithRelationInput[]
    cursor?: PropostaArtistaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaArtistaScalarFieldEnum | PropostaArtistaScalarFieldEnum[]
  }

  /**
   * Evento.eventoArtistas
   */
  export type Evento$eventoArtistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    where?: EventoArtistaWhereInput
    orderBy?: EventoArtistaOrderByWithRelationInput | EventoArtistaOrderByWithRelationInput[]
    cursor?: EventoArtistaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoArtistaScalarFieldEnum | EventoArtistaScalarFieldEnum[]
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model PropostaCasa
   */

  export type AggregatePropostaCasa = {
    _count: PropostaCasaCountAggregateOutputType | null
    _min: PropostaCasaMinAggregateOutputType | null
    _max: PropostaCasaMaxAggregateOutputType | null
  }

  export type PropostaCasaMinAggregateOutputType = {
    id_proposta_casa: string | null
    id_artista: string | null
    id_evento: string | null
    data_proposta: Date | null
    data_evento: Date | null
    valor_ofertado: string | null
    status: string | null
    termos: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropostaCasaMaxAggregateOutputType = {
    id_proposta_casa: string | null
    id_artista: string | null
    id_evento: string | null
    data_proposta: Date | null
    data_evento: Date | null
    valor_ofertado: string | null
    status: string | null
    termos: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropostaCasaCountAggregateOutputType = {
    id_proposta_casa: number
    id_artista: number
    id_evento: number
    data_proposta: number
    data_evento: number
    valor_ofertado: number
    status: number
    termos: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropostaCasaMinAggregateInputType = {
    id_proposta_casa?: true
    id_artista?: true
    id_evento?: true
    data_proposta?: true
    data_evento?: true
    valor_ofertado?: true
    status?: true
    termos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropostaCasaMaxAggregateInputType = {
    id_proposta_casa?: true
    id_artista?: true
    id_evento?: true
    data_proposta?: true
    data_evento?: true
    valor_ofertado?: true
    status?: true
    termos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropostaCasaCountAggregateInputType = {
    id_proposta_casa?: true
    id_artista?: true
    id_evento?: true
    data_proposta?: true
    data_evento?: true
    valor_ofertado?: true
    status?: true
    termos?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropostaCasaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropostaCasa to aggregate.
     */
    where?: PropostaCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaCasas to fetch.
     */
    orderBy?: PropostaCasaOrderByWithRelationInput | PropostaCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropostaCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaCasas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropostaCasas
    **/
    _count?: true | PropostaCasaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropostaCasaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropostaCasaMaxAggregateInputType
  }

  export type GetPropostaCasaAggregateType<T extends PropostaCasaAggregateArgs> = {
        [P in keyof T & keyof AggregatePropostaCasa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropostaCasa[P]>
      : GetScalarType<T[P], AggregatePropostaCasa[P]>
  }




  export type PropostaCasaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaCasaWhereInput
    orderBy?: PropostaCasaOrderByWithAggregationInput | PropostaCasaOrderByWithAggregationInput[]
    by: PropostaCasaScalarFieldEnum[] | PropostaCasaScalarFieldEnum
    having?: PropostaCasaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropostaCasaCountAggregateInputType | true
    _min?: PropostaCasaMinAggregateInputType
    _max?: PropostaCasaMaxAggregateInputType
  }

  export type PropostaCasaGroupByOutputType = {
    id_proposta_casa: string
    id_artista: string
    id_evento: string
    data_proposta: Date
    data_evento: Date
    valor_ofertado: string
    status: string
    termos: string | null
    createdAt: Date
    updatedAt: Date
    _count: PropostaCasaCountAggregateOutputType | null
    _min: PropostaCasaMinAggregateOutputType | null
    _max: PropostaCasaMaxAggregateOutputType | null
  }

  type GetPropostaCasaGroupByPayload<T extends PropostaCasaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropostaCasaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropostaCasaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropostaCasaGroupByOutputType[P]>
            : GetScalarType<T[P], PropostaCasaGroupByOutputType[P]>
        }
      >
    >


  export type PropostaCasaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta_casa?: boolean
    id_artista?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaCasa"]>

  export type PropostaCasaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta_casa?: boolean
    id_artista?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaCasa"]>

  export type PropostaCasaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta_casa?: boolean
    id_artista?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaCasa"]>

  export type PropostaCasaSelectScalar = {
    id_proposta_casa?: boolean
    id_artista?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropostaCasaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proposta_casa" | "id_artista" | "id_evento" | "data_proposta" | "data_evento" | "valor_ofertado" | "status" | "termos" | "createdAt" | "updatedAt", ExtArgs["result"]["propostaCasa"]>
  export type PropostaCasaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type PropostaCasaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type PropostaCasaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }

  export type $PropostaCasaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropostaCasa"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proposta_casa: string
      id_artista: string
      id_evento: string
      data_proposta: Date
      data_evento: Date
      valor_ofertado: string
      status: string
      termos: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propostaCasa"]>
    composites: {}
  }

  type PropostaCasaGetPayload<S extends boolean | null | undefined | PropostaCasaDefaultArgs> = $Result.GetResult<Prisma.$PropostaCasaPayload, S>

  type PropostaCasaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropostaCasaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropostaCasaCountAggregateInputType | true
    }

  export interface PropostaCasaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropostaCasa'], meta: { name: 'PropostaCasa' } }
    /**
     * Find zero or one PropostaCasa that matches the filter.
     * @param {PropostaCasaFindUniqueArgs} args - Arguments to find a PropostaCasa
     * @example
     * // Get one PropostaCasa
     * const propostaCasa = await prisma.propostaCasa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropostaCasaFindUniqueArgs>(args: SelectSubset<T, PropostaCasaFindUniqueArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropostaCasa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropostaCasaFindUniqueOrThrowArgs} args - Arguments to find a PropostaCasa
     * @example
     * // Get one PropostaCasa
     * const propostaCasa = await prisma.propostaCasa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropostaCasaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropostaCasaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropostaCasa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCasaFindFirstArgs} args - Arguments to find a PropostaCasa
     * @example
     * // Get one PropostaCasa
     * const propostaCasa = await prisma.propostaCasa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropostaCasaFindFirstArgs>(args?: SelectSubset<T, PropostaCasaFindFirstArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropostaCasa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCasaFindFirstOrThrowArgs} args - Arguments to find a PropostaCasa
     * @example
     * // Get one PropostaCasa
     * const propostaCasa = await prisma.propostaCasa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropostaCasaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropostaCasaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropostaCasas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCasaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropostaCasas
     * const propostaCasas = await prisma.propostaCasa.findMany()
     * 
     * // Get first 10 PropostaCasas
     * const propostaCasas = await prisma.propostaCasa.findMany({ take: 10 })
     * 
     * // Only select the `id_proposta_casa`
     * const propostaCasaWithId_proposta_casaOnly = await prisma.propostaCasa.findMany({ select: { id_proposta_casa: true } })
     * 
     */
    findMany<T extends PropostaCasaFindManyArgs>(args?: SelectSubset<T, PropostaCasaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropostaCasa.
     * @param {PropostaCasaCreateArgs} args - Arguments to create a PropostaCasa.
     * @example
     * // Create one PropostaCasa
     * const PropostaCasa = await prisma.propostaCasa.create({
     *   data: {
     *     // ... data to create a PropostaCasa
     *   }
     * })
     * 
     */
    create<T extends PropostaCasaCreateArgs>(args: SelectSubset<T, PropostaCasaCreateArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropostaCasas.
     * @param {PropostaCasaCreateManyArgs} args - Arguments to create many PropostaCasas.
     * @example
     * // Create many PropostaCasas
     * const propostaCasa = await prisma.propostaCasa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropostaCasaCreateManyArgs>(args?: SelectSubset<T, PropostaCasaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropostaCasas and returns the data saved in the database.
     * @param {PropostaCasaCreateManyAndReturnArgs} args - Arguments to create many PropostaCasas.
     * @example
     * // Create many PropostaCasas
     * const propostaCasa = await prisma.propostaCasa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropostaCasas and only return the `id_proposta_casa`
     * const propostaCasaWithId_proposta_casaOnly = await prisma.propostaCasa.createManyAndReturn({
     *   select: { id_proposta_casa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropostaCasaCreateManyAndReturnArgs>(args?: SelectSubset<T, PropostaCasaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropostaCasa.
     * @param {PropostaCasaDeleteArgs} args - Arguments to delete one PropostaCasa.
     * @example
     * // Delete one PropostaCasa
     * const PropostaCasa = await prisma.propostaCasa.delete({
     *   where: {
     *     // ... filter to delete one PropostaCasa
     *   }
     * })
     * 
     */
    delete<T extends PropostaCasaDeleteArgs>(args: SelectSubset<T, PropostaCasaDeleteArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropostaCasa.
     * @param {PropostaCasaUpdateArgs} args - Arguments to update one PropostaCasa.
     * @example
     * // Update one PropostaCasa
     * const propostaCasa = await prisma.propostaCasa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropostaCasaUpdateArgs>(args: SelectSubset<T, PropostaCasaUpdateArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropostaCasas.
     * @param {PropostaCasaDeleteManyArgs} args - Arguments to filter PropostaCasas to delete.
     * @example
     * // Delete a few PropostaCasas
     * const { count } = await prisma.propostaCasa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropostaCasaDeleteManyArgs>(args?: SelectSubset<T, PropostaCasaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropostaCasas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCasaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropostaCasas
     * const propostaCasa = await prisma.propostaCasa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropostaCasaUpdateManyArgs>(args: SelectSubset<T, PropostaCasaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropostaCasas and returns the data updated in the database.
     * @param {PropostaCasaUpdateManyAndReturnArgs} args - Arguments to update many PropostaCasas.
     * @example
     * // Update many PropostaCasas
     * const propostaCasa = await prisma.propostaCasa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropostaCasas and only return the `id_proposta_casa`
     * const propostaCasaWithId_proposta_casaOnly = await prisma.propostaCasa.updateManyAndReturn({
     *   select: { id_proposta_casa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropostaCasaUpdateManyAndReturnArgs>(args: SelectSubset<T, PropostaCasaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropostaCasa.
     * @param {PropostaCasaUpsertArgs} args - Arguments to update or create a PropostaCasa.
     * @example
     * // Update or create a PropostaCasa
     * const propostaCasa = await prisma.propostaCasa.upsert({
     *   create: {
     *     // ... data to create a PropostaCasa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropostaCasa we want to update
     *   }
     * })
     */
    upsert<T extends PropostaCasaUpsertArgs>(args: SelectSubset<T, PropostaCasaUpsertArgs<ExtArgs>>): Prisma__PropostaCasaClient<$Result.GetResult<Prisma.$PropostaCasaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropostaCasas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCasaCountArgs} args - Arguments to filter PropostaCasas to count.
     * @example
     * // Count the number of PropostaCasas
     * const count = await prisma.propostaCasa.count({
     *   where: {
     *     // ... the filter for the PropostaCasas we want to count
     *   }
     * })
    **/
    count<T extends PropostaCasaCountArgs>(
      args?: Subset<T, PropostaCasaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropostaCasaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropostaCasa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCasaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropostaCasaAggregateArgs>(args: Subset<T, PropostaCasaAggregateArgs>): Prisma.PrismaPromise<GetPropostaCasaAggregateType<T>>

    /**
     * Group by PropostaCasa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaCasaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropostaCasaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropostaCasaGroupByArgs['orderBy'] }
        : { orderBy?: PropostaCasaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropostaCasaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropostaCasaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropostaCasa model
   */
  readonly fields: PropostaCasaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropostaCasa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropostaCasaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropostaCasa model
   */
  interface PropostaCasaFieldRefs {
    readonly id_proposta_casa: FieldRef<"PropostaCasa", 'String'>
    readonly id_artista: FieldRef<"PropostaCasa", 'String'>
    readonly id_evento: FieldRef<"PropostaCasa", 'String'>
    readonly data_proposta: FieldRef<"PropostaCasa", 'DateTime'>
    readonly data_evento: FieldRef<"PropostaCasa", 'DateTime'>
    readonly valor_ofertado: FieldRef<"PropostaCasa", 'String'>
    readonly status: FieldRef<"PropostaCasa", 'String'>
    readonly termos: FieldRef<"PropostaCasa", 'String'>
    readonly createdAt: FieldRef<"PropostaCasa", 'DateTime'>
    readonly updatedAt: FieldRef<"PropostaCasa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropostaCasa findUnique
   */
  export type PropostaCasaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaCasa to fetch.
     */
    where: PropostaCasaWhereUniqueInput
  }

  /**
   * PropostaCasa findUniqueOrThrow
   */
  export type PropostaCasaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaCasa to fetch.
     */
    where: PropostaCasaWhereUniqueInput
  }

  /**
   * PropostaCasa findFirst
   */
  export type PropostaCasaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaCasa to fetch.
     */
    where?: PropostaCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaCasas to fetch.
     */
    orderBy?: PropostaCasaOrderByWithRelationInput | PropostaCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropostaCasas.
     */
    cursor?: PropostaCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaCasas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropostaCasas.
     */
    distinct?: PropostaCasaScalarFieldEnum | PropostaCasaScalarFieldEnum[]
  }

  /**
   * PropostaCasa findFirstOrThrow
   */
  export type PropostaCasaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaCasa to fetch.
     */
    where?: PropostaCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaCasas to fetch.
     */
    orderBy?: PropostaCasaOrderByWithRelationInput | PropostaCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropostaCasas.
     */
    cursor?: PropostaCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaCasas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropostaCasas.
     */
    distinct?: PropostaCasaScalarFieldEnum | PropostaCasaScalarFieldEnum[]
  }

  /**
   * PropostaCasa findMany
   */
  export type PropostaCasaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaCasas to fetch.
     */
    where?: PropostaCasaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaCasas to fetch.
     */
    orderBy?: PropostaCasaOrderByWithRelationInput | PropostaCasaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropostaCasas.
     */
    cursor?: PropostaCasaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaCasas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaCasas.
     */
    skip?: number
    distinct?: PropostaCasaScalarFieldEnum | PropostaCasaScalarFieldEnum[]
  }

  /**
   * PropostaCasa create
   */
  export type PropostaCasaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * The data needed to create a PropostaCasa.
     */
    data: XOR<PropostaCasaCreateInput, PropostaCasaUncheckedCreateInput>
  }

  /**
   * PropostaCasa createMany
   */
  export type PropostaCasaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropostaCasas.
     */
    data: PropostaCasaCreateManyInput | PropostaCasaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropostaCasa createManyAndReturn
   */
  export type PropostaCasaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * The data used to create many PropostaCasas.
     */
    data: PropostaCasaCreateManyInput | PropostaCasaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropostaCasa update
   */
  export type PropostaCasaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * The data needed to update a PropostaCasa.
     */
    data: XOR<PropostaCasaUpdateInput, PropostaCasaUncheckedUpdateInput>
    /**
     * Choose, which PropostaCasa to update.
     */
    where: PropostaCasaWhereUniqueInput
  }

  /**
   * PropostaCasa updateMany
   */
  export type PropostaCasaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropostaCasas.
     */
    data: XOR<PropostaCasaUpdateManyMutationInput, PropostaCasaUncheckedUpdateManyInput>
    /**
     * Filter which PropostaCasas to update
     */
    where?: PropostaCasaWhereInput
    /**
     * Limit how many PropostaCasas to update.
     */
    limit?: number
  }

  /**
   * PropostaCasa updateManyAndReturn
   */
  export type PropostaCasaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * The data used to update PropostaCasas.
     */
    data: XOR<PropostaCasaUpdateManyMutationInput, PropostaCasaUncheckedUpdateManyInput>
    /**
     * Filter which PropostaCasas to update
     */
    where?: PropostaCasaWhereInput
    /**
     * Limit how many PropostaCasas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropostaCasa upsert
   */
  export type PropostaCasaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * The filter to search for the PropostaCasa to update in case it exists.
     */
    where: PropostaCasaWhereUniqueInput
    /**
     * In case the PropostaCasa found by the `where` argument doesn't exist, create a new PropostaCasa with this data.
     */
    create: XOR<PropostaCasaCreateInput, PropostaCasaUncheckedCreateInput>
    /**
     * In case the PropostaCasa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropostaCasaUpdateInput, PropostaCasaUncheckedUpdateInput>
  }

  /**
   * PropostaCasa delete
   */
  export type PropostaCasaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
    /**
     * Filter which PropostaCasa to delete.
     */
    where: PropostaCasaWhereUniqueInput
  }

  /**
   * PropostaCasa deleteMany
   */
  export type PropostaCasaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropostaCasas to delete
     */
    where?: PropostaCasaWhereInput
    /**
     * Limit how many PropostaCasas to delete.
     */
    limit?: number
  }

  /**
   * PropostaCasa without action
   */
  export type PropostaCasaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaCasa
     */
    select?: PropostaCasaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaCasa
     */
    omit?: PropostaCasaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaCasaInclude<ExtArgs> | null
  }


  /**
   * Model PropostaArtista
   */

  export type AggregatePropostaArtista = {
    _count: PropostaArtistaCountAggregateOutputType | null
    _min: PropostaArtistaMinAggregateOutputType | null
    _max: PropostaArtistaMaxAggregateOutputType | null
  }

  export type PropostaArtistaMinAggregateOutputType = {
    id_proposta_artista: string | null
    id_casa: string | null
    id_evento: string | null
    data_proposta: Date | null
    data_evento: Date | null
    valor_ofertado: string | null
    status: string | null
    termos: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropostaArtistaMaxAggregateOutputType = {
    id_proposta_artista: string | null
    id_casa: string | null
    id_evento: string | null
    data_proposta: Date | null
    data_evento: Date | null
    valor_ofertado: string | null
    status: string | null
    termos: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropostaArtistaCountAggregateOutputType = {
    id_proposta_artista: number
    id_casa: number
    id_evento: number
    data_proposta: number
    data_evento: number
    valor_ofertado: number
    status: number
    termos: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropostaArtistaMinAggregateInputType = {
    id_proposta_artista?: true
    id_casa?: true
    id_evento?: true
    data_proposta?: true
    data_evento?: true
    valor_ofertado?: true
    status?: true
    termos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropostaArtistaMaxAggregateInputType = {
    id_proposta_artista?: true
    id_casa?: true
    id_evento?: true
    data_proposta?: true
    data_evento?: true
    valor_ofertado?: true
    status?: true
    termos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropostaArtistaCountAggregateInputType = {
    id_proposta_artista?: true
    id_casa?: true
    id_evento?: true
    data_proposta?: true
    data_evento?: true
    valor_ofertado?: true
    status?: true
    termos?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropostaArtistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropostaArtista to aggregate.
     */
    where?: PropostaArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaArtistas to fetch.
     */
    orderBy?: PropostaArtistaOrderByWithRelationInput | PropostaArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropostaArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaArtistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropostaArtistas
    **/
    _count?: true | PropostaArtistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropostaArtistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropostaArtistaMaxAggregateInputType
  }

  export type GetPropostaArtistaAggregateType<T extends PropostaArtistaAggregateArgs> = {
        [P in keyof T & keyof AggregatePropostaArtista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropostaArtista[P]>
      : GetScalarType<T[P], AggregatePropostaArtista[P]>
  }




  export type PropostaArtistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaArtistaWhereInput
    orderBy?: PropostaArtistaOrderByWithAggregationInput | PropostaArtistaOrderByWithAggregationInput[]
    by: PropostaArtistaScalarFieldEnum[] | PropostaArtistaScalarFieldEnum
    having?: PropostaArtistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropostaArtistaCountAggregateInputType | true
    _min?: PropostaArtistaMinAggregateInputType
    _max?: PropostaArtistaMaxAggregateInputType
  }

  export type PropostaArtistaGroupByOutputType = {
    id_proposta_artista: string
    id_casa: string
    id_evento: string
    data_proposta: Date
    data_evento: Date
    valor_ofertado: string
    status: string
    termos: string | null
    createdAt: Date
    updatedAt: Date
    _count: PropostaArtistaCountAggregateOutputType | null
    _min: PropostaArtistaMinAggregateOutputType | null
    _max: PropostaArtistaMaxAggregateOutputType | null
  }

  type GetPropostaArtistaGroupByPayload<T extends PropostaArtistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropostaArtistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropostaArtistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropostaArtistaGroupByOutputType[P]>
            : GetScalarType<T[P], PropostaArtistaGroupByOutputType[P]>
        }
      >
    >


  export type PropostaArtistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta_artista?: boolean
    id_casa?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaArtista"]>

  export type PropostaArtistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta_artista?: boolean
    id_casa?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaArtista"]>

  export type PropostaArtistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta_artista?: boolean
    id_casa?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaArtista"]>

  export type PropostaArtistaSelectScalar = {
    id_proposta_artista?: boolean
    id_casa?: boolean
    id_evento?: boolean
    data_proposta?: boolean
    data_evento?: boolean
    valor_ofertado?: boolean
    status?: boolean
    termos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropostaArtistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proposta_artista" | "id_casa" | "id_evento" | "data_proposta" | "data_evento" | "valor_ofertado" | "status" | "termos" | "createdAt" | "updatedAt", ExtArgs["result"]["propostaArtista"]>
  export type PropostaArtistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type PropostaArtistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type PropostaArtistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }

  export type $PropostaArtistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropostaArtista"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proposta_artista: string
      id_casa: string
      id_evento: string
      data_proposta: Date
      data_evento: Date
      valor_ofertado: string
      status: string
      termos: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propostaArtista"]>
    composites: {}
  }

  type PropostaArtistaGetPayload<S extends boolean | null | undefined | PropostaArtistaDefaultArgs> = $Result.GetResult<Prisma.$PropostaArtistaPayload, S>

  type PropostaArtistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropostaArtistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropostaArtistaCountAggregateInputType | true
    }

  export interface PropostaArtistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropostaArtista'], meta: { name: 'PropostaArtista' } }
    /**
     * Find zero or one PropostaArtista that matches the filter.
     * @param {PropostaArtistaFindUniqueArgs} args - Arguments to find a PropostaArtista
     * @example
     * // Get one PropostaArtista
     * const propostaArtista = await prisma.propostaArtista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropostaArtistaFindUniqueArgs>(args: SelectSubset<T, PropostaArtistaFindUniqueArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropostaArtista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropostaArtistaFindUniqueOrThrowArgs} args - Arguments to find a PropostaArtista
     * @example
     * // Get one PropostaArtista
     * const propostaArtista = await prisma.propostaArtista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropostaArtistaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropostaArtistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropostaArtista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaArtistaFindFirstArgs} args - Arguments to find a PropostaArtista
     * @example
     * // Get one PropostaArtista
     * const propostaArtista = await prisma.propostaArtista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropostaArtistaFindFirstArgs>(args?: SelectSubset<T, PropostaArtistaFindFirstArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropostaArtista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaArtistaFindFirstOrThrowArgs} args - Arguments to find a PropostaArtista
     * @example
     * // Get one PropostaArtista
     * const propostaArtista = await prisma.propostaArtista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropostaArtistaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropostaArtistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropostaArtistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaArtistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropostaArtistas
     * const propostaArtistas = await prisma.propostaArtista.findMany()
     * 
     * // Get first 10 PropostaArtistas
     * const propostaArtistas = await prisma.propostaArtista.findMany({ take: 10 })
     * 
     * // Only select the `id_proposta_artista`
     * const propostaArtistaWithId_proposta_artistaOnly = await prisma.propostaArtista.findMany({ select: { id_proposta_artista: true } })
     * 
     */
    findMany<T extends PropostaArtistaFindManyArgs>(args?: SelectSubset<T, PropostaArtistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropostaArtista.
     * @param {PropostaArtistaCreateArgs} args - Arguments to create a PropostaArtista.
     * @example
     * // Create one PropostaArtista
     * const PropostaArtista = await prisma.propostaArtista.create({
     *   data: {
     *     // ... data to create a PropostaArtista
     *   }
     * })
     * 
     */
    create<T extends PropostaArtistaCreateArgs>(args: SelectSubset<T, PropostaArtistaCreateArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropostaArtistas.
     * @param {PropostaArtistaCreateManyArgs} args - Arguments to create many PropostaArtistas.
     * @example
     * // Create many PropostaArtistas
     * const propostaArtista = await prisma.propostaArtista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropostaArtistaCreateManyArgs>(args?: SelectSubset<T, PropostaArtistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropostaArtistas and returns the data saved in the database.
     * @param {PropostaArtistaCreateManyAndReturnArgs} args - Arguments to create many PropostaArtistas.
     * @example
     * // Create many PropostaArtistas
     * const propostaArtista = await prisma.propostaArtista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropostaArtistas and only return the `id_proposta_artista`
     * const propostaArtistaWithId_proposta_artistaOnly = await prisma.propostaArtista.createManyAndReturn({
     *   select: { id_proposta_artista: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropostaArtistaCreateManyAndReturnArgs>(args?: SelectSubset<T, PropostaArtistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropostaArtista.
     * @param {PropostaArtistaDeleteArgs} args - Arguments to delete one PropostaArtista.
     * @example
     * // Delete one PropostaArtista
     * const PropostaArtista = await prisma.propostaArtista.delete({
     *   where: {
     *     // ... filter to delete one PropostaArtista
     *   }
     * })
     * 
     */
    delete<T extends PropostaArtistaDeleteArgs>(args: SelectSubset<T, PropostaArtistaDeleteArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropostaArtista.
     * @param {PropostaArtistaUpdateArgs} args - Arguments to update one PropostaArtista.
     * @example
     * // Update one PropostaArtista
     * const propostaArtista = await prisma.propostaArtista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropostaArtistaUpdateArgs>(args: SelectSubset<T, PropostaArtistaUpdateArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropostaArtistas.
     * @param {PropostaArtistaDeleteManyArgs} args - Arguments to filter PropostaArtistas to delete.
     * @example
     * // Delete a few PropostaArtistas
     * const { count } = await prisma.propostaArtista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropostaArtistaDeleteManyArgs>(args?: SelectSubset<T, PropostaArtistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropostaArtistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaArtistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropostaArtistas
     * const propostaArtista = await prisma.propostaArtista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropostaArtistaUpdateManyArgs>(args: SelectSubset<T, PropostaArtistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropostaArtistas and returns the data updated in the database.
     * @param {PropostaArtistaUpdateManyAndReturnArgs} args - Arguments to update many PropostaArtistas.
     * @example
     * // Update many PropostaArtistas
     * const propostaArtista = await prisma.propostaArtista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropostaArtistas and only return the `id_proposta_artista`
     * const propostaArtistaWithId_proposta_artistaOnly = await prisma.propostaArtista.updateManyAndReturn({
     *   select: { id_proposta_artista: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropostaArtistaUpdateManyAndReturnArgs>(args: SelectSubset<T, PropostaArtistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropostaArtista.
     * @param {PropostaArtistaUpsertArgs} args - Arguments to update or create a PropostaArtista.
     * @example
     * // Update or create a PropostaArtista
     * const propostaArtista = await prisma.propostaArtista.upsert({
     *   create: {
     *     // ... data to create a PropostaArtista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropostaArtista we want to update
     *   }
     * })
     */
    upsert<T extends PropostaArtistaUpsertArgs>(args: SelectSubset<T, PropostaArtistaUpsertArgs<ExtArgs>>): Prisma__PropostaArtistaClient<$Result.GetResult<Prisma.$PropostaArtistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropostaArtistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaArtistaCountArgs} args - Arguments to filter PropostaArtistas to count.
     * @example
     * // Count the number of PropostaArtistas
     * const count = await prisma.propostaArtista.count({
     *   where: {
     *     // ... the filter for the PropostaArtistas we want to count
     *   }
     * })
    **/
    count<T extends PropostaArtistaCountArgs>(
      args?: Subset<T, PropostaArtistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropostaArtistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropostaArtista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaArtistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropostaArtistaAggregateArgs>(args: Subset<T, PropostaArtistaAggregateArgs>): Prisma.PrismaPromise<GetPropostaArtistaAggregateType<T>>

    /**
     * Group by PropostaArtista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaArtistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropostaArtistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropostaArtistaGroupByArgs['orderBy'] }
        : { orderBy?: PropostaArtistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropostaArtistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropostaArtistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropostaArtista model
   */
  readonly fields: PropostaArtistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropostaArtista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropostaArtistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropostaArtista model
   */
  interface PropostaArtistaFieldRefs {
    readonly id_proposta_artista: FieldRef<"PropostaArtista", 'String'>
    readonly id_casa: FieldRef<"PropostaArtista", 'String'>
    readonly id_evento: FieldRef<"PropostaArtista", 'String'>
    readonly data_proposta: FieldRef<"PropostaArtista", 'DateTime'>
    readonly data_evento: FieldRef<"PropostaArtista", 'DateTime'>
    readonly valor_ofertado: FieldRef<"PropostaArtista", 'String'>
    readonly status: FieldRef<"PropostaArtista", 'String'>
    readonly termos: FieldRef<"PropostaArtista", 'String'>
    readonly createdAt: FieldRef<"PropostaArtista", 'DateTime'>
    readonly updatedAt: FieldRef<"PropostaArtista", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropostaArtista findUnique
   */
  export type PropostaArtistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaArtista to fetch.
     */
    where: PropostaArtistaWhereUniqueInput
  }

  /**
   * PropostaArtista findUniqueOrThrow
   */
  export type PropostaArtistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaArtista to fetch.
     */
    where: PropostaArtistaWhereUniqueInput
  }

  /**
   * PropostaArtista findFirst
   */
  export type PropostaArtistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaArtista to fetch.
     */
    where?: PropostaArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaArtistas to fetch.
     */
    orderBy?: PropostaArtistaOrderByWithRelationInput | PropostaArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropostaArtistas.
     */
    cursor?: PropostaArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaArtistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropostaArtistas.
     */
    distinct?: PropostaArtistaScalarFieldEnum | PropostaArtistaScalarFieldEnum[]
  }

  /**
   * PropostaArtista findFirstOrThrow
   */
  export type PropostaArtistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaArtista to fetch.
     */
    where?: PropostaArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaArtistas to fetch.
     */
    orderBy?: PropostaArtistaOrderByWithRelationInput | PropostaArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropostaArtistas.
     */
    cursor?: PropostaArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaArtistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropostaArtistas.
     */
    distinct?: PropostaArtistaScalarFieldEnum | PropostaArtistaScalarFieldEnum[]
  }

  /**
   * PropostaArtista findMany
   */
  export type PropostaArtistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaArtistas to fetch.
     */
    where?: PropostaArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaArtistas to fetch.
     */
    orderBy?: PropostaArtistaOrderByWithRelationInput | PropostaArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropostaArtistas.
     */
    cursor?: PropostaArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaArtistas.
     */
    skip?: number
    distinct?: PropostaArtistaScalarFieldEnum | PropostaArtistaScalarFieldEnum[]
  }

  /**
   * PropostaArtista create
   */
  export type PropostaArtistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * The data needed to create a PropostaArtista.
     */
    data: XOR<PropostaArtistaCreateInput, PropostaArtistaUncheckedCreateInput>
  }

  /**
   * PropostaArtista createMany
   */
  export type PropostaArtistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropostaArtistas.
     */
    data: PropostaArtistaCreateManyInput | PropostaArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropostaArtista createManyAndReturn
   */
  export type PropostaArtistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * The data used to create many PropostaArtistas.
     */
    data: PropostaArtistaCreateManyInput | PropostaArtistaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropostaArtista update
   */
  export type PropostaArtistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * The data needed to update a PropostaArtista.
     */
    data: XOR<PropostaArtistaUpdateInput, PropostaArtistaUncheckedUpdateInput>
    /**
     * Choose, which PropostaArtista to update.
     */
    where: PropostaArtistaWhereUniqueInput
  }

  /**
   * PropostaArtista updateMany
   */
  export type PropostaArtistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropostaArtistas.
     */
    data: XOR<PropostaArtistaUpdateManyMutationInput, PropostaArtistaUncheckedUpdateManyInput>
    /**
     * Filter which PropostaArtistas to update
     */
    where?: PropostaArtistaWhereInput
    /**
     * Limit how many PropostaArtistas to update.
     */
    limit?: number
  }

  /**
   * PropostaArtista updateManyAndReturn
   */
  export type PropostaArtistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * The data used to update PropostaArtistas.
     */
    data: XOR<PropostaArtistaUpdateManyMutationInput, PropostaArtistaUncheckedUpdateManyInput>
    /**
     * Filter which PropostaArtistas to update
     */
    where?: PropostaArtistaWhereInput
    /**
     * Limit how many PropostaArtistas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropostaArtista upsert
   */
  export type PropostaArtistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * The filter to search for the PropostaArtista to update in case it exists.
     */
    where: PropostaArtistaWhereUniqueInput
    /**
     * In case the PropostaArtista found by the `where` argument doesn't exist, create a new PropostaArtista with this data.
     */
    create: XOR<PropostaArtistaCreateInput, PropostaArtistaUncheckedCreateInput>
    /**
     * In case the PropostaArtista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropostaArtistaUpdateInput, PropostaArtistaUncheckedUpdateInput>
  }

  /**
   * PropostaArtista delete
   */
  export type PropostaArtistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
    /**
     * Filter which PropostaArtista to delete.
     */
    where: PropostaArtistaWhereUniqueInput
  }

  /**
   * PropostaArtista deleteMany
   */
  export type PropostaArtistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropostaArtistas to delete
     */
    where?: PropostaArtistaWhereInput
    /**
     * Limit how many PropostaArtistas to delete.
     */
    limit?: number
  }

  /**
   * PropostaArtista without action
   */
  export type PropostaArtistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaArtista
     */
    select?: PropostaArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaArtista
     */
    omit?: PropostaArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaArtistaInclude<ExtArgs> | null
  }


  /**
   * Model EventoArtista
   */

  export type AggregateEventoArtista = {
    _count: EventoArtistaCountAggregateOutputType | null
    _min: EventoArtistaMinAggregateOutputType | null
    _max: EventoArtistaMaxAggregateOutputType | null
  }

  export type EventoArtistaMinAggregateOutputType = {
    id_evento: string | null
    id_usuario: string | null
    funcao: string | null
    contrato_acordado: string | null
    cache_final: string | null
    created_final: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoArtistaMaxAggregateOutputType = {
    id_evento: string | null
    id_usuario: string | null
    funcao: string | null
    contrato_acordado: string | null
    cache_final: string | null
    created_final: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoArtistaCountAggregateOutputType = {
    id_evento: number
    id_usuario: number
    funcao: number
    contrato_acordado: number
    cache_final: number
    created_final: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventoArtistaMinAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    funcao?: true
    contrato_acordado?: true
    cache_final?: true
    created_final?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoArtistaMaxAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    funcao?: true
    contrato_acordado?: true
    cache_final?: true
    created_final?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoArtistaCountAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    funcao?: true
    contrato_acordado?: true
    cache_final?: true
    created_final?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventoArtistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventoArtista to aggregate.
     */
    where?: EventoArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoArtistas to fetch.
     */
    orderBy?: EventoArtistaOrderByWithRelationInput | EventoArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoArtistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventoArtistas
    **/
    _count?: true | EventoArtistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoArtistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoArtistaMaxAggregateInputType
  }

  export type GetEventoArtistaAggregateType<T extends EventoArtistaAggregateArgs> = {
        [P in keyof T & keyof AggregateEventoArtista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventoArtista[P]>
      : GetScalarType<T[P], AggregateEventoArtista[P]>
  }




  export type EventoArtistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoArtistaWhereInput
    orderBy?: EventoArtistaOrderByWithAggregationInput | EventoArtistaOrderByWithAggregationInput[]
    by: EventoArtistaScalarFieldEnum[] | EventoArtistaScalarFieldEnum
    having?: EventoArtistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoArtistaCountAggregateInputType | true
    _min?: EventoArtistaMinAggregateInputType
    _max?: EventoArtistaMaxAggregateInputType
  }

  export type EventoArtistaGroupByOutputType = {
    id_evento: string
    id_usuario: string
    funcao: string
    contrato_acordado: string | null
    cache_final: string | null
    created_final: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventoArtistaCountAggregateOutputType | null
    _min: EventoArtistaMinAggregateOutputType | null
    _max: EventoArtistaMaxAggregateOutputType | null
  }

  type GetEventoArtistaGroupByPayload<T extends EventoArtistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoArtistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoArtistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoArtistaGroupByOutputType[P]>
            : GetScalarType<T[P], EventoArtistaGroupByOutputType[P]>
        }
      >
    >


  export type EventoArtistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    funcao?: boolean
    contrato_acordado?: boolean
    cache_final?: boolean
    created_final?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventoArtista"]>

  export type EventoArtistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    funcao?: boolean
    contrato_acordado?: boolean
    cache_final?: boolean
    created_final?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventoArtista"]>

  export type EventoArtistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    funcao?: boolean
    contrato_acordado?: boolean
    cache_final?: boolean
    created_final?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventoArtista"]>

  export type EventoArtistaSelectScalar = {
    id_evento?: boolean
    id_usuario?: boolean
    funcao?: boolean
    contrato_acordado?: boolean
    cache_final?: boolean
    created_final?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventoArtistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_usuario" | "funcao" | "contrato_acordado" | "cache_final" | "created_final" | "createdAt" | "updatedAt", ExtArgs["result"]["eventoArtista"]>
  export type EventoArtistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type EventoArtistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type EventoArtistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }

  export type $EventoArtistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventoArtista"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: string
      id_usuario: string
      funcao: string
      contrato_acordado: string | null
      cache_final: string | null
      created_final: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventoArtista"]>
    composites: {}
  }

  type EventoArtistaGetPayload<S extends boolean | null | undefined | EventoArtistaDefaultArgs> = $Result.GetResult<Prisma.$EventoArtistaPayload, S>

  type EventoArtistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoArtistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoArtistaCountAggregateInputType | true
    }

  export interface EventoArtistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventoArtista'], meta: { name: 'EventoArtista' } }
    /**
     * Find zero or one EventoArtista that matches the filter.
     * @param {EventoArtistaFindUniqueArgs} args - Arguments to find a EventoArtista
     * @example
     * // Get one EventoArtista
     * const eventoArtista = await prisma.eventoArtista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoArtistaFindUniqueArgs>(args: SelectSubset<T, EventoArtistaFindUniqueArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventoArtista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoArtistaFindUniqueOrThrowArgs} args - Arguments to find a EventoArtista
     * @example
     * // Get one EventoArtista
     * const eventoArtista = await prisma.eventoArtista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoArtistaFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoArtistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoArtista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoArtistaFindFirstArgs} args - Arguments to find a EventoArtista
     * @example
     * // Get one EventoArtista
     * const eventoArtista = await prisma.eventoArtista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoArtistaFindFirstArgs>(args?: SelectSubset<T, EventoArtistaFindFirstArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoArtista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoArtistaFindFirstOrThrowArgs} args - Arguments to find a EventoArtista
     * @example
     * // Get one EventoArtista
     * const eventoArtista = await prisma.eventoArtista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoArtistaFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoArtistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoArtistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoArtistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventoArtistas
     * const eventoArtistas = await prisma.eventoArtista.findMany()
     * 
     * // Get first 10 EventoArtistas
     * const eventoArtistas = await prisma.eventoArtista.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventoArtistaWithId_eventoOnly = await prisma.eventoArtista.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends EventoArtistaFindManyArgs>(args?: SelectSubset<T, EventoArtistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventoArtista.
     * @param {EventoArtistaCreateArgs} args - Arguments to create a EventoArtista.
     * @example
     * // Create one EventoArtista
     * const EventoArtista = await prisma.eventoArtista.create({
     *   data: {
     *     // ... data to create a EventoArtista
     *   }
     * })
     * 
     */
    create<T extends EventoArtistaCreateArgs>(args: SelectSubset<T, EventoArtistaCreateArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventoArtistas.
     * @param {EventoArtistaCreateManyArgs} args - Arguments to create many EventoArtistas.
     * @example
     * // Create many EventoArtistas
     * const eventoArtista = await prisma.eventoArtista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoArtistaCreateManyArgs>(args?: SelectSubset<T, EventoArtistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventoArtistas and returns the data saved in the database.
     * @param {EventoArtistaCreateManyAndReturnArgs} args - Arguments to create many EventoArtistas.
     * @example
     * // Create many EventoArtistas
     * const eventoArtista = await prisma.eventoArtista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventoArtistas and only return the `id_evento`
     * const eventoArtistaWithId_eventoOnly = await prisma.eventoArtista.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoArtistaCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoArtistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventoArtista.
     * @param {EventoArtistaDeleteArgs} args - Arguments to delete one EventoArtista.
     * @example
     * // Delete one EventoArtista
     * const EventoArtista = await prisma.eventoArtista.delete({
     *   where: {
     *     // ... filter to delete one EventoArtista
     *   }
     * })
     * 
     */
    delete<T extends EventoArtistaDeleteArgs>(args: SelectSubset<T, EventoArtistaDeleteArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventoArtista.
     * @param {EventoArtistaUpdateArgs} args - Arguments to update one EventoArtista.
     * @example
     * // Update one EventoArtista
     * const eventoArtista = await prisma.eventoArtista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoArtistaUpdateArgs>(args: SelectSubset<T, EventoArtistaUpdateArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventoArtistas.
     * @param {EventoArtistaDeleteManyArgs} args - Arguments to filter EventoArtistas to delete.
     * @example
     * // Delete a few EventoArtistas
     * const { count } = await prisma.eventoArtista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoArtistaDeleteManyArgs>(args?: SelectSubset<T, EventoArtistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoArtistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoArtistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventoArtistas
     * const eventoArtista = await prisma.eventoArtista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoArtistaUpdateManyArgs>(args: SelectSubset<T, EventoArtistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoArtistas and returns the data updated in the database.
     * @param {EventoArtistaUpdateManyAndReturnArgs} args - Arguments to update many EventoArtistas.
     * @example
     * // Update many EventoArtistas
     * const eventoArtista = await prisma.eventoArtista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventoArtistas and only return the `id_evento`
     * const eventoArtistaWithId_eventoOnly = await prisma.eventoArtista.updateManyAndReturn({
     *   select: { id_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoArtistaUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoArtistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventoArtista.
     * @param {EventoArtistaUpsertArgs} args - Arguments to update or create a EventoArtista.
     * @example
     * // Update or create a EventoArtista
     * const eventoArtista = await prisma.eventoArtista.upsert({
     *   create: {
     *     // ... data to create a EventoArtista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventoArtista we want to update
     *   }
     * })
     */
    upsert<T extends EventoArtistaUpsertArgs>(args: SelectSubset<T, EventoArtistaUpsertArgs<ExtArgs>>): Prisma__EventoArtistaClient<$Result.GetResult<Prisma.$EventoArtistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventoArtistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoArtistaCountArgs} args - Arguments to filter EventoArtistas to count.
     * @example
     * // Count the number of EventoArtistas
     * const count = await prisma.eventoArtista.count({
     *   where: {
     *     // ... the filter for the EventoArtistas we want to count
     *   }
     * })
    **/
    count<T extends EventoArtistaCountArgs>(
      args?: Subset<T, EventoArtistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoArtistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventoArtista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoArtistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoArtistaAggregateArgs>(args: Subset<T, EventoArtistaAggregateArgs>): Prisma.PrismaPromise<GetEventoArtistaAggregateType<T>>

    /**
     * Group by EventoArtista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoArtistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoArtistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoArtistaGroupByArgs['orderBy'] }
        : { orderBy?: EventoArtistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoArtistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoArtistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventoArtista model
   */
  readonly fields: EventoArtistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventoArtista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoArtistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventoArtista model
   */
  interface EventoArtistaFieldRefs {
    readonly id_evento: FieldRef<"EventoArtista", 'String'>
    readonly id_usuario: FieldRef<"EventoArtista", 'String'>
    readonly funcao: FieldRef<"EventoArtista", 'String'>
    readonly contrato_acordado: FieldRef<"EventoArtista", 'String'>
    readonly cache_final: FieldRef<"EventoArtista", 'String'>
    readonly created_final: FieldRef<"EventoArtista", 'String'>
    readonly createdAt: FieldRef<"EventoArtista", 'DateTime'>
    readonly updatedAt: FieldRef<"EventoArtista", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventoArtista findUnique
   */
  export type EventoArtistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * Filter, which EventoArtista to fetch.
     */
    where: EventoArtistaWhereUniqueInput
  }

  /**
   * EventoArtista findUniqueOrThrow
   */
  export type EventoArtistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * Filter, which EventoArtista to fetch.
     */
    where: EventoArtistaWhereUniqueInput
  }

  /**
   * EventoArtista findFirst
   */
  export type EventoArtistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * Filter, which EventoArtista to fetch.
     */
    where?: EventoArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoArtistas to fetch.
     */
    orderBy?: EventoArtistaOrderByWithRelationInput | EventoArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventoArtistas.
     */
    cursor?: EventoArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoArtistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventoArtistas.
     */
    distinct?: EventoArtistaScalarFieldEnum | EventoArtistaScalarFieldEnum[]
  }

  /**
   * EventoArtista findFirstOrThrow
   */
  export type EventoArtistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * Filter, which EventoArtista to fetch.
     */
    where?: EventoArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoArtistas to fetch.
     */
    orderBy?: EventoArtistaOrderByWithRelationInput | EventoArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventoArtistas.
     */
    cursor?: EventoArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoArtistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventoArtistas.
     */
    distinct?: EventoArtistaScalarFieldEnum | EventoArtistaScalarFieldEnum[]
  }

  /**
   * EventoArtista findMany
   */
  export type EventoArtistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * Filter, which EventoArtistas to fetch.
     */
    where?: EventoArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoArtistas to fetch.
     */
    orderBy?: EventoArtistaOrderByWithRelationInput | EventoArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventoArtistas.
     */
    cursor?: EventoArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoArtistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoArtistas.
     */
    skip?: number
    distinct?: EventoArtistaScalarFieldEnum | EventoArtistaScalarFieldEnum[]
  }

  /**
   * EventoArtista create
   */
  export type EventoArtistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * The data needed to create a EventoArtista.
     */
    data: XOR<EventoArtistaCreateInput, EventoArtistaUncheckedCreateInput>
  }

  /**
   * EventoArtista createMany
   */
  export type EventoArtistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventoArtistas.
     */
    data: EventoArtistaCreateManyInput | EventoArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventoArtista createManyAndReturn
   */
  export type EventoArtistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * The data used to create many EventoArtistas.
     */
    data: EventoArtistaCreateManyInput | EventoArtistaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventoArtista update
   */
  export type EventoArtistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * The data needed to update a EventoArtista.
     */
    data: XOR<EventoArtistaUpdateInput, EventoArtistaUncheckedUpdateInput>
    /**
     * Choose, which EventoArtista to update.
     */
    where: EventoArtistaWhereUniqueInput
  }

  /**
   * EventoArtista updateMany
   */
  export type EventoArtistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventoArtistas.
     */
    data: XOR<EventoArtistaUpdateManyMutationInput, EventoArtistaUncheckedUpdateManyInput>
    /**
     * Filter which EventoArtistas to update
     */
    where?: EventoArtistaWhereInput
    /**
     * Limit how many EventoArtistas to update.
     */
    limit?: number
  }

  /**
   * EventoArtista updateManyAndReturn
   */
  export type EventoArtistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * The data used to update EventoArtistas.
     */
    data: XOR<EventoArtistaUpdateManyMutationInput, EventoArtistaUncheckedUpdateManyInput>
    /**
     * Filter which EventoArtistas to update
     */
    where?: EventoArtistaWhereInput
    /**
     * Limit how many EventoArtistas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventoArtista upsert
   */
  export type EventoArtistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * The filter to search for the EventoArtista to update in case it exists.
     */
    where: EventoArtistaWhereUniqueInput
    /**
     * In case the EventoArtista found by the `where` argument doesn't exist, create a new EventoArtista with this data.
     */
    create: XOR<EventoArtistaCreateInput, EventoArtistaUncheckedCreateInput>
    /**
     * In case the EventoArtista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoArtistaUpdateInput, EventoArtistaUncheckedUpdateInput>
  }

  /**
   * EventoArtista delete
   */
  export type EventoArtistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
    /**
     * Filter which EventoArtista to delete.
     */
    where: EventoArtistaWhereUniqueInput
  }

  /**
   * EventoArtista deleteMany
   */
  export type EventoArtistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventoArtistas to delete
     */
    where?: EventoArtistaWhereInput
    /**
     * Limit how many EventoArtistas to delete.
     */
    limit?: number
  }

  /**
   * EventoArtista without action
   */
  export type EventoArtistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoArtista
     */
    select?: EventoArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoArtista
     */
    omit?: EventoArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoArtistaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventoScalarFieldEnum: {
    id_evento: 'id_evento',
    id_usuario: 'id_usuario',
    titulo: 'titulo',
    descricao: 'descricao',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    local: 'local',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const PropostaCasaScalarFieldEnum: {
    id_proposta_casa: 'id_proposta_casa',
    id_artista: 'id_artista',
    id_evento: 'id_evento',
    data_proposta: 'data_proposta',
    data_evento: 'data_evento',
    valor_ofertado: 'valor_ofertado',
    status: 'status',
    termos: 'termos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropostaCasaScalarFieldEnum = (typeof PropostaCasaScalarFieldEnum)[keyof typeof PropostaCasaScalarFieldEnum]


  export const PropostaArtistaScalarFieldEnum: {
    id_proposta_artista: 'id_proposta_artista',
    id_casa: 'id_casa',
    id_evento: 'id_evento',
    data_proposta: 'data_proposta',
    data_evento: 'data_evento',
    valor_ofertado: 'valor_ofertado',
    status: 'status',
    termos: 'termos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropostaArtistaScalarFieldEnum = (typeof PropostaArtistaScalarFieldEnum)[keyof typeof PropostaArtistaScalarFieldEnum]


  export const EventoArtistaScalarFieldEnum: {
    id_evento: 'id_evento',
    id_usuario: 'id_usuario',
    funcao: 'funcao',
    contrato_acordado: 'contrato_acordado',
    cache_final: 'cache_final',
    created_final: 'created_final',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventoArtistaScalarFieldEnum = (typeof EventoArtistaScalarFieldEnum)[keyof typeof EventoArtistaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id_evento?: StringFilter<"Evento"> | string
    id_usuario?: StringFilter<"Evento"> | string
    titulo?: StringFilter<"Evento"> | string
    descricao?: StringNullableFilter<"Evento"> | string | null
    data_inicio?: DateTimeFilter<"Evento"> | Date | string
    data_fim?: DateTimeFilter<"Evento"> | Date | string
    local?: StringFilter<"Evento"> | string
    status?: StringFilter<"Evento"> | string
    createdAt?: DateTimeFilter<"Evento"> | Date | string
    updatedAt?: DateTimeFilter<"Evento"> | Date | string
    propostasCasa?: PropostaCasaListRelationFilter
    propostasArtista?: PropostaArtistaListRelationFilter
    eventoArtistas?: EventoArtistaListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    local?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    propostasCasa?: PropostaCasaOrderByRelationAggregateInput
    propostasArtista?: PropostaArtistaOrderByRelationAggregateInput
    eventoArtistas?: EventoArtistaOrderByRelationAggregateInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: string
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id_usuario?: StringFilter<"Evento"> | string
    titulo?: StringFilter<"Evento"> | string
    descricao?: StringNullableFilter<"Evento"> | string | null
    data_inicio?: DateTimeFilter<"Evento"> | Date | string
    data_fim?: DateTimeFilter<"Evento"> | Date | string
    local?: StringFilter<"Evento"> | string
    status?: StringFilter<"Evento"> | string
    createdAt?: DateTimeFilter<"Evento"> | Date | string
    updatedAt?: DateTimeFilter<"Evento"> | Date | string
    propostasCasa?: PropostaCasaListRelationFilter
    propostasArtista?: PropostaArtistaListRelationFilter
    eventoArtistas?: EventoArtistaListRelationFilter
  }, "id_evento">

  export type EventoOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    local?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id_evento?: StringWithAggregatesFilter<"Evento"> | string
    id_usuario?: StringWithAggregatesFilter<"Evento"> | string
    titulo?: StringWithAggregatesFilter<"Evento"> | string
    descricao?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    data_inicio?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    local?: StringWithAggregatesFilter<"Evento"> | string
    status?: StringWithAggregatesFilter<"Evento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
  }

  export type PropostaCasaWhereInput = {
    AND?: PropostaCasaWhereInput | PropostaCasaWhereInput[]
    OR?: PropostaCasaWhereInput[]
    NOT?: PropostaCasaWhereInput | PropostaCasaWhereInput[]
    id_proposta_casa?: StringFilter<"PropostaCasa"> | string
    id_artista?: StringFilter<"PropostaCasa"> | string
    id_evento?: StringFilter<"PropostaCasa"> | string
    data_proposta?: DateTimeFilter<"PropostaCasa"> | Date | string
    data_evento?: DateTimeFilter<"PropostaCasa"> | Date | string
    valor_ofertado?: StringFilter<"PropostaCasa"> | string
    status?: StringFilter<"PropostaCasa"> | string
    termos?: StringNullableFilter<"PropostaCasa"> | string | null
    createdAt?: DateTimeFilter<"PropostaCasa"> | Date | string
    updatedAt?: DateTimeFilter<"PropostaCasa"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }

  export type PropostaCasaOrderByWithRelationInput = {
    id_proposta_casa?: SortOrder
    id_artista?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evento?: EventoOrderByWithRelationInput
  }

  export type PropostaCasaWhereUniqueInput = Prisma.AtLeast<{
    id_proposta_casa?: string
    AND?: PropostaCasaWhereInput | PropostaCasaWhereInput[]
    OR?: PropostaCasaWhereInput[]
    NOT?: PropostaCasaWhereInput | PropostaCasaWhereInput[]
    id_artista?: StringFilter<"PropostaCasa"> | string
    id_evento?: StringFilter<"PropostaCasa"> | string
    data_proposta?: DateTimeFilter<"PropostaCasa"> | Date | string
    data_evento?: DateTimeFilter<"PropostaCasa"> | Date | string
    valor_ofertado?: StringFilter<"PropostaCasa"> | string
    status?: StringFilter<"PropostaCasa"> | string
    termos?: StringNullableFilter<"PropostaCasa"> | string | null
    createdAt?: DateTimeFilter<"PropostaCasa"> | Date | string
    updatedAt?: DateTimeFilter<"PropostaCasa"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }, "id_proposta_casa">

  export type PropostaCasaOrderByWithAggregationInput = {
    id_proposta_casa?: SortOrder
    id_artista?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropostaCasaCountOrderByAggregateInput
    _max?: PropostaCasaMaxOrderByAggregateInput
    _min?: PropostaCasaMinOrderByAggregateInput
  }

  export type PropostaCasaScalarWhereWithAggregatesInput = {
    AND?: PropostaCasaScalarWhereWithAggregatesInput | PropostaCasaScalarWhereWithAggregatesInput[]
    OR?: PropostaCasaScalarWhereWithAggregatesInput[]
    NOT?: PropostaCasaScalarWhereWithAggregatesInput | PropostaCasaScalarWhereWithAggregatesInput[]
    id_proposta_casa?: StringWithAggregatesFilter<"PropostaCasa"> | string
    id_artista?: StringWithAggregatesFilter<"PropostaCasa"> | string
    id_evento?: StringWithAggregatesFilter<"PropostaCasa"> | string
    data_proposta?: DateTimeWithAggregatesFilter<"PropostaCasa"> | Date | string
    data_evento?: DateTimeWithAggregatesFilter<"PropostaCasa"> | Date | string
    valor_ofertado?: StringWithAggregatesFilter<"PropostaCasa"> | string
    status?: StringWithAggregatesFilter<"PropostaCasa"> | string
    termos?: StringNullableWithAggregatesFilter<"PropostaCasa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PropostaCasa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropostaCasa"> | Date | string
  }

  export type PropostaArtistaWhereInput = {
    AND?: PropostaArtistaWhereInput | PropostaArtistaWhereInput[]
    OR?: PropostaArtistaWhereInput[]
    NOT?: PropostaArtistaWhereInput | PropostaArtistaWhereInput[]
    id_proposta_artista?: StringFilter<"PropostaArtista"> | string
    id_casa?: StringFilter<"PropostaArtista"> | string
    id_evento?: StringFilter<"PropostaArtista"> | string
    data_proposta?: DateTimeFilter<"PropostaArtista"> | Date | string
    data_evento?: DateTimeFilter<"PropostaArtista"> | Date | string
    valor_ofertado?: StringFilter<"PropostaArtista"> | string
    status?: StringFilter<"PropostaArtista"> | string
    termos?: StringNullableFilter<"PropostaArtista"> | string | null
    createdAt?: DateTimeFilter<"PropostaArtista"> | Date | string
    updatedAt?: DateTimeFilter<"PropostaArtista"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }

  export type PropostaArtistaOrderByWithRelationInput = {
    id_proposta_artista?: SortOrder
    id_casa?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evento?: EventoOrderByWithRelationInput
  }

  export type PropostaArtistaWhereUniqueInput = Prisma.AtLeast<{
    id_proposta_artista?: string
    AND?: PropostaArtistaWhereInput | PropostaArtistaWhereInput[]
    OR?: PropostaArtistaWhereInput[]
    NOT?: PropostaArtistaWhereInput | PropostaArtistaWhereInput[]
    id_casa?: StringFilter<"PropostaArtista"> | string
    id_evento?: StringFilter<"PropostaArtista"> | string
    data_proposta?: DateTimeFilter<"PropostaArtista"> | Date | string
    data_evento?: DateTimeFilter<"PropostaArtista"> | Date | string
    valor_ofertado?: StringFilter<"PropostaArtista"> | string
    status?: StringFilter<"PropostaArtista"> | string
    termos?: StringNullableFilter<"PropostaArtista"> | string | null
    createdAt?: DateTimeFilter<"PropostaArtista"> | Date | string
    updatedAt?: DateTimeFilter<"PropostaArtista"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }, "id_proposta_artista">

  export type PropostaArtistaOrderByWithAggregationInput = {
    id_proposta_artista?: SortOrder
    id_casa?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropostaArtistaCountOrderByAggregateInput
    _max?: PropostaArtistaMaxOrderByAggregateInput
    _min?: PropostaArtistaMinOrderByAggregateInput
  }

  export type PropostaArtistaScalarWhereWithAggregatesInput = {
    AND?: PropostaArtistaScalarWhereWithAggregatesInput | PropostaArtistaScalarWhereWithAggregatesInput[]
    OR?: PropostaArtistaScalarWhereWithAggregatesInput[]
    NOT?: PropostaArtistaScalarWhereWithAggregatesInput | PropostaArtistaScalarWhereWithAggregatesInput[]
    id_proposta_artista?: StringWithAggregatesFilter<"PropostaArtista"> | string
    id_casa?: StringWithAggregatesFilter<"PropostaArtista"> | string
    id_evento?: StringWithAggregatesFilter<"PropostaArtista"> | string
    data_proposta?: DateTimeWithAggregatesFilter<"PropostaArtista"> | Date | string
    data_evento?: DateTimeWithAggregatesFilter<"PropostaArtista"> | Date | string
    valor_ofertado?: StringWithAggregatesFilter<"PropostaArtista"> | string
    status?: StringWithAggregatesFilter<"PropostaArtista"> | string
    termos?: StringNullableWithAggregatesFilter<"PropostaArtista"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PropostaArtista"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropostaArtista"> | Date | string
  }

  export type EventoArtistaWhereInput = {
    AND?: EventoArtistaWhereInput | EventoArtistaWhereInput[]
    OR?: EventoArtistaWhereInput[]
    NOT?: EventoArtistaWhereInput | EventoArtistaWhereInput[]
    id_evento?: StringFilter<"EventoArtista"> | string
    id_usuario?: StringFilter<"EventoArtista"> | string
    funcao?: StringFilter<"EventoArtista"> | string
    contrato_acordado?: StringNullableFilter<"EventoArtista"> | string | null
    cache_final?: StringNullableFilter<"EventoArtista"> | string | null
    created_final?: StringNullableFilter<"EventoArtista"> | string | null
    createdAt?: DateTimeFilter<"EventoArtista"> | Date | string
    updatedAt?: DateTimeFilter<"EventoArtista"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }

  export type EventoArtistaOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    funcao?: SortOrder
    contrato_acordado?: SortOrderInput | SortOrder
    cache_final?: SortOrderInput | SortOrder
    created_final?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evento?: EventoOrderByWithRelationInput
  }

  export type EventoArtistaWhereUniqueInput = Prisma.AtLeast<{
    id_evento_id_usuario?: EventoArtistaId_eventoId_usuarioCompoundUniqueInput
    AND?: EventoArtistaWhereInput | EventoArtistaWhereInput[]
    OR?: EventoArtistaWhereInput[]
    NOT?: EventoArtistaWhereInput | EventoArtistaWhereInput[]
    id_evento?: StringFilter<"EventoArtista"> | string
    id_usuario?: StringFilter<"EventoArtista"> | string
    funcao?: StringFilter<"EventoArtista"> | string
    contrato_acordado?: StringNullableFilter<"EventoArtista"> | string | null
    cache_final?: StringNullableFilter<"EventoArtista"> | string | null
    created_final?: StringNullableFilter<"EventoArtista"> | string | null
    createdAt?: DateTimeFilter<"EventoArtista"> | Date | string
    updatedAt?: DateTimeFilter<"EventoArtista"> | Date | string
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }, "id_evento_id_usuario">

  export type EventoArtistaOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    funcao?: SortOrder
    contrato_acordado?: SortOrderInput | SortOrder
    cache_final?: SortOrderInput | SortOrder
    created_final?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventoArtistaCountOrderByAggregateInput
    _max?: EventoArtistaMaxOrderByAggregateInput
    _min?: EventoArtistaMinOrderByAggregateInput
  }

  export type EventoArtistaScalarWhereWithAggregatesInput = {
    AND?: EventoArtistaScalarWhereWithAggregatesInput | EventoArtistaScalarWhereWithAggregatesInput[]
    OR?: EventoArtistaScalarWhereWithAggregatesInput[]
    NOT?: EventoArtistaScalarWhereWithAggregatesInput | EventoArtistaScalarWhereWithAggregatesInput[]
    id_evento?: StringWithAggregatesFilter<"EventoArtista"> | string
    id_usuario?: StringWithAggregatesFilter<"EventoArtista"> | string
    funcao?: StringWithAggregatesFilter<"EventoArtista"> | string
    contrato_acordado?: StringNullableWithAggregatesFilter<"EventoArtista"> | string | null
    cache_final?: StringNullableWithAggregatesFilter<"EventoArtista"> | string | null
    created_final?: StringNullableWithAggregatesFilter<"EventoArtista"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventoArtista"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventoArtista"> | Date | string
  }

  export type EventoCreateInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasCasa?: PropostaCasaCreateNestedManyWithoutEventoInput
    propostasArtista?: PropostaArtistaCreateNestedManyWithoutEventoInput
    eventoArtistas?: EventoArtistaCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasCasa?: PropostaCasaUncheckedCreateNestedManyWithoutEventoInput
    propostasArtista?: PropostaArtistaUncheckedCreateNestedManyWithoutEventoInput
    eventoArtistas?: EventoArtistaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoUpdateInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasCasa?: PropostaCasaUpdateManyWithoutEventoNestedInput
    propostasArtista?: PropostaArtistaUpdateManyWithoutEventoNestedInput
    eventoArtistas?: EventoArtistaUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasCasa?: PropostaCasaUncheckedUpdateManyWithoutEventoNestedInput
    propostasArtista?: PropostaArtistaUncheckedUpdateManyWithoutEventoNestedInput
    eventoArtistas?: EventoArtistaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateManyInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoUpdateManyMutationInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaCasaCreateInput = {
    id_proposta_casa?: string
    id_artista: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evento: EventoCreateNestedOneWithoutPropostasCasaInput
  }

  export type PropostaCasaUncheckedCreateInput = {
    id_proposta_casa?: string
    id_artista: string
    id_evento: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCasaUpdateInput = {
    id_proposta_casa?: StringFieldUpdateOperationsInput | string
    id_artista?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: EventoUpdateOneRequiredWithoutPropostasCasaNestedInput
  }

  export type PropostaCasaUncheckedUpdateInput = {
    id_proposta_casa?: StringFieldUpdateOperationsInput | string
    id_artista?: StringFieldUpdateOperationsInput | string
    id_evento?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaCasaCreateManyInput = {
    id_proposta_casa?: string
    id_artista: string
    id_evento: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCasaUpdateManyMutationInput = {
    id_proposta_casa?: StringFieldUpdateOperationsInput | string
    id_artista?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaCasaUncheckedUpdateManyInput = {
    id_proposta_casa?: StringFieldUpdateOperationsInput | string
    id_artista?: StringFieldUpdateOperationsInput | string
    id_evento?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaArtistaCreateInput = {
    id_proposta_artista?: string
    id_casa: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evento: EventoCreateNestedOneWithoutPropostasArtistaInput
  }

  export type PropostaArtistaUncheckedCreateInput = {
    id_proposta_artista?: string
    id_casa: string
    id_evento: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaArtistaUpdateInput = {
    id_proposta_artista?: StringFieldUpdateOperationsInput | string
    id_casa?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: EventoUpdateOneRequiredWithoutPropostasArtistaNestedInput
  }

  export type PropostaArtistaUncheckedUpdateInput = {
    id_proposta_artista?: StringFieldUpdateOperationsInput | string
    id_casa?: StringFieldUpdateOperationsInput | string
    id_evento?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaArtistaCreateManyInput = {
    id_proposta_artista?: string
    id_casa: string
    id_evento: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaArtistaUpdateManyMutationInput = {
    id_proposta_artista?: StringFieldUpdateOperationsInput | string
    id_casa?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaArtistaUncheckedUpdateManyInput = {
    id_proposta_artista?: StringFieldUpdateOperationsInput | string
    id_casa?: StringFieldUpdateOperationsInput | string
    id_evento?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoArtistaCreateInput = {
    id_usuario: string
    funcao: string
    contrato_acordado?: string | null
    cache_final?: string | null
    created_final?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evento: EventoCreateNestedOneWithoutEventoArtistasInput
  }

  export type EventoArtistaUncheckedCreateInput = {
    id_evento: string
    id_usuario: string
    funcao: string
    contrato_acordado?: string | null
    cache_final?: string | null
    created_final?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoArtistaUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    contrato_acordado?: NullableStringFieldUpdateOperationsInput | string | null
    cache_final?: NullableStringFieldUpdateOperationsInput | string | null
    created_final?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: EventoUpdateOneRequiredWithoutEventoArtistasNestedInput
  }

  export type EventoArtistaUncheckedUpdateInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    contrato_acordado?: NullableStringFieldUpdateOperationsInput | string | null
    cache_final?: NullableStringFieldUpdateOperationsInput | string | null
    created_final?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoArtistaCreateManyInput = {
    id_evento: string
    id_usuario: string
    funcao: string
    contrato_acordado?: string | null
    cache_final?: string | null
    created_final?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoArtistaUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    contrato_acordado?: NullableStringFieldUpdateOperationsInput | string | null
    cache_final?: NullableStringFieldUpdateOperationsInput | string | null
    created_final?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoArtistaUncheckedUpdateManyInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    contrato_acordado?: NullableStringFieldUpdateOperationsInput | string | null
    cache_final?: NullableStringFieldUpdateOperationsInput | string | null
    created_final?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropostaCasaListRelationFilter = {
    every?: PropostaCasaWhereInput
    some?: PropostaCasaWhereInput
    none?: PropostaCasaWhereInput
  }

  export type PropostaArtistaListRelationFilter = {
    every?: PropostaArtistaWhereInput
    some?: PropostaArtistaWhereInput
    none?: PropostaArtistaWhereInput
  }

  export type EventoArtistaListRelationFilter = {
    every?: EventoArtistaWhereInput
    some?: EventoArtistaWhereInput
    none?: EventoArtistaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropostaCasaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropostaArtistaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoArtistaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    local?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    local?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    local?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EventoScalarRelationFilter = {
    is?: EventoWhereInput
    isNot?: EventoWhereInput
  }

  export type PropostaCasaCountOrderByAggregateInput = {
    id_proposta_casa?: SortOrder
    id_artista?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaCasaMaxOrderByAggregateInput = {
    id_proposta_casa?: SortOrder
    id_artista?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaCasaMinOrderByAggregateInput = {
    id_proposta_casa?: SortOrder
    id_artista?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaArtistaCountOrderByAggregateInput = {
    id_proposta_artista?: SortOrder
    id_casa?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaArtistaMaxOrderByAggregateInput = {
    id_proposta_artista?: SortOrder
    id_casa?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaArtistaMinOrderByAggregateInput = {
    id_proposta_artista?: SortOrder
    id_casa?: SortOrder
    id_evento?: SortOrder
    data_proposta?: SortOrder
    data_evento?: SortOrder
    valor_ofertado?: SortOrder
    status?: SortOrder
    termos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoArtistaId_eventoId_usuarioCompoundUniqueInput = {
    id_evento: string
    id_usuario: string
  }

  export type EventoArtistaCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    funcao?: SortOrder
    contrato_acordado?: SortOrder
    cache_final?: SortOrder
    created_final?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoArtistaMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    funcao?: SortOrder
    contrato_acordado?: SortOrder
    cache_final?: SortOrder
    created_final?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoArtistaMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    funcao?: SortOrder
    contrato_acordado?: SortOrder
    cache_final?: SortOrder
    created_final?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropostaCasaCreateNestedManyWithoutEventoInput = {
    create?: XOR<PropostaCasaCreateWithoutEventoInput, PropostaCasaUncheckedCreateWithoutEventoInput> | PropostaCasaCreateWithoutEventoInput[] | PropostaCasaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaCasaCreateOrConnectWithoutEventoInput | PropostaCasaCreateOrConnectWithoutEventoInput[]
    createMany?: PropostaCasaCreateManyEventoInputEnvelope
    connect?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
  }

  export type PropostaArtistaCreateNestedManyWithoutEventoInput = {
    create?: XOR<PropostaArtistaCreateWithoutEventoInput, PropostaArtistaUncheckedCreateWithoutEventoInput> | PropostaArtistaCreateWithoutEventoInput[] | PropostaArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaArtistaCreateOrConnectWithoutEventoInput | PropostaArtistaCreateOrConnectWithoutEventoInput[]
    createMany?: PropostaArtistaCreateManyEventoInputEnvelope
    connect?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
  }

  export type EventoArtistaCreateNestedManyWithoutEventoInput = {
    create?: XOR<EventoArtistaCreateWithoutEventoInput, EventoArtistaUncheckedCreateWithoutEventoInput> | EventoArtistaCreateWithoutEventoInput[] | EventoArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EventoArtistaCreateOrConnectWithoutEventoInput | EventoArtistaCreateOrConnectWithoutEventoInput[]
    createMany?: EventoArtistaCreateManyEventoInputEnvelope
    connect?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
  }

  export type PropostaCasaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<PropostaCasaCreateWithoutEventoInput, PropostaCasaUncheckedCreateWithoutEventoInput> | PropostaCasaCreateWithoutEventoInput[] | PropostaCasaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaCasaCreateOrConnectWithoutEventoInput | PropostaCasaCreateOrConnectWithoutEventoInput[]
    createMany?: PropostaCasaCreateManyEventoInputEnvelope
    connect?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
  }

  export type PropostaArtistaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<PropostaArtistaCreateWithoutEventoInput, PropostaArtistaUncheckedCreateWithoutEventoInput> | PropostaArtistaCreateWithoutEventoInput[] | PropostaArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaArtistaCreateOrConnectWithoutEventoInput | PropostaArtistaCreateOrConnectWithoutEventoInput[]
    createMany?: PropostaArtistaCreateManyEventoInputEnvelope
    connect?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
  }

  export type EventoArtistaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<EventoArtistaCreateWithoutEventoInput, EventoArtistaUncheckedCreateWithoutEventoInput> | EventoArtistaCreateWithoutEventoInput[] | EventoArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EventoArtistaCreateOrConnectWithoutEventoInput | EventoArtistaCreateOrConnectWithoutEventoInput[]
    createMany?: EventoArtistaCreateManyEventoInputEnvelope
    connect?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropostaCasaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<PropostaCasaCreateWithoutEventoInput, PropostaCasaUncheckedCreateWithoutEventoInput> | PropostaCasaCreateWithoutEventoInput[] | PropostaCasaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaCasaCreateOrConnectWithoutEventoInput | PropostaCasaCreateOrConnectWithoutEventoInput[]
    upsert?: PropostaCasaUpsertWithWhereUniqueWithoutEventoInput | PropostaCasaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: PropostaCasaCreateManyEventoInputEnvelope
    set?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    disconnect?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    delete?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    connect?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    update?: PropostaCasaUpdateWithWhereUniqueWithoutEventoInput | PropostaCasaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: PropostaCasaUpdateManyWithWhereWithoutEventoInput | PropostaCasaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: PropostaCasaScalarWhereInput | PropostaCasaScalarWhereInput[]
  }

  export type PropostaArtistaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<PropostaArtistaCreateWithoutEventoInput, PropostaArtistaUncheckedCreateWithoutEventoInput> | PropostaArtistaCreateWithoutEventoInput[] | PropostaArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaArtistaCreateOrConnectWithoutEventoInput | PropostaArtistaCreateOrConnectWithoutEventoInput[]
    upsert?: PropostaArtistaUpsertWithWhereUniqueWithoutEventoInput | PropostaArtistaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: PropostaArtistaCreateManyEventoInputEnvelope
    set?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    disconnect?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    delete?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    connect?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    update?: PropostaArtistaUpdateWithWhereUniqueWithoutEventoInput | PropostaArtistaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: PropostaArtistaUpdateManyWithWhereWithoutEventoInput | PropostaArtistaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: PropostaArtistaScalarWhereInput | PropostaArtistaScalarWhereInput[]
  }

  export type EventoArtistaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<EventoArtistaCreateWithoutEventoInput, EventoArtistaUncheckedCreateWithoutEventoInput> | EventoArtistaCreateWithoutEventoInput[] | EventoArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EventoArtistaCreateOrConnectWithoutEventoInput | EventoArtistaCreateOrConnectWithoutEventoInput[]
    upsert?: EventoArtistaUpsertWithWhereUniqueWithoutEventoInput | EventoArtistaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: EventoArtistaCreateManyEventoInputEnvelope
    set?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    disconnect?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    delete?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    connect?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    update?: EventoArtistaUpdateWithWhereUniqueWithoutEventoInput | EventoArtistaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: EventoArtistaUpdateManyWithWhereWithoutEventoInput | EventoArtistaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: EventoArtistaScalarWhereInput | EventoArtistaScalarWhereInput[]
  }

  export type PropostaCasaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<PropostaCasaCreateWithoutEventoInput, PropostaCasaUncheckedCreateWithoutEventoInput> | PropostaCasaCreateWithoutEventoInput[] | PropostaCasaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaCasaCreateOrConnectWithoutEventoInput | PropostaCasaCreateOrConnectWithoutEventoInput[]
    upsert?: PropostaCasaUpsertWithWhereUniqueWithoutEventoInput | PropostaCasaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: PropostaCasaCreateManyEventoInputEnvelope
    set?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    disconnect?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    delete?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    connect?: PropostaCasaWhereUniqueInput | PropostaCasaWhereUniqueInput[]
    update?: PropostaCasaUpdateWithWhereUniqueWithoutEventoInput | PropostaCasaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: PropostaCasaUpdateManyWithWhereWithoutEventoInput | PropostaCasaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: PropostaCasaScalarWhereInput | PropostaCasaScalarWhereInput[]
  }

  export type PropostaArtistaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<PropostaArtistaCreateWithoutEventoInput, PropostaArtistaUncheckedCreateWithoutEventoInput> | PropostaArtistaCreateWithoutEventoInput[] | PropostaArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PropostaArtistaCreateOrConnectWithoutEventoInput | PropostaArtistaCreateOrConnectWithoutEventoInput[]
    upsert?: PropostaArtistaUpsertWithWhereUniqueWithoutEventoInput | PropostaArtistaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: PropostaArtistaCreateManyEventoInputEnvelope
    set?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    disconnect?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    delete?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    connect?: PropostaArtistaWhereUniqueInput | PropostaArtistaWhereUniqueInput[]
    update?: PropostaArtistaUpdateWithWhereUniqueWithoutEventoInput | PropostaArtistaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: PropostaArtistaUpdateManyWithWhereWithoutEventoInput | PropostaArtistaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: PropostaArtistaScalarWhereInput | PropostaArtistaScalarWhereInput[]
  }

  export type EventoArtistaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<EventoArtistaCreateWithoutEventoInput, EventoArtistaUncheckedCreateWithoutEventoInput> | EventoArtistaCreateWithoutEventoInput[] | EventoArtistaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EventoArtistaCreateOrConnectWithoutEventoInput | EventoArtistaCreateOrConnectWithoutEventoInput[]
    upsert?: EventoArtistaUpsertWithWhereUniqueWithoutEventoInput | EventoArtistaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: EventoArtistaCreateManyEventoInputEnvelope
    set?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    disconnect?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    delete?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    connect?: EventoArtistaWhereUniqueInput | EventoArtistaWhereUniqueInput[]
    update?: EventoArtistaUpdateWithWhereUniqueWithoutEventoInput | EventoArtistaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: EventoArtistaUpdateManyWithWhereWithoutEventoInput | EventoArtistaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: EventoArtistaScalarWhereInput | EventoArtistaScalarWhereInput[]
  }

  export type EventoCreateNestedOneWithoutPropostasCasaInput = {
    create?: XOR<EventoCreateWithoutPropostasCasaInput, EventoUncheckedCreateWithoutPropostasCasaInput>
    connectOrCreate?: EventoCreateOrConnectWithoutPropostasCasaInput
    connect?: EventoWhereUniqueInput
  }

  export type EventoUpdateOneRequiredWithoutPropostasCasaNestedInput = {
    create?: XOR<EventoCreateWithoutPropostasCasaInput, EventoUncheckedCreateWithoutPropostasCasaInput>
    connectOrCreate?: EventoCreateOrConnectWithoutPropostasCasaInput
    upsert?: EventoUpsertWithoutPropostasCasaInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutPropostasCasaInput, EventoUpdateWithoutPropostasCasaInput>, EventoUncheckedUpdateWithoutPropostasCasaInput>
  }

  export type EventoCreateNestedOneWithoutPropostasArtistaInput = {
    create?: XOR<EventoCreateWithoutPropostasArtistaInput, EventoUncheckedCreateWithoutPropostasArtistaInput>
    connectOrCreate?: EventoCreateOrConnectWithoutPropostasArtistaInput
    connect?: EventoWhereUniqueInput
  }

  export type EventoUpdateOneRequiredWithoutPropostasArtistaNestedInput = {
    create?: XOR<EventoCreateWithoutPropostasArtistaInput, EventoUncheckedCreateWithoutPropostasArtistaInput>
    connectOrCreate?: EventoCreateOrConnectWithoutPropostasArtistaInput
    upsert?: EventoUpsertWithoutPropostasArtistaInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutPropostasArtistaInput, EventoUpdateWithoutPropostasArtistaInput>, EventoUncheckedUpdateWithoutPropostasArtistaInput>
  }

  export type EventoCreateNestedOneWithoutEventoArtistasInput = {
    create?: XOR<EventoCreateWithoutEventoArtistasInput, EventoUncheckedCreateWithoutEventoArtistasInput>
    connectOrCreate?: EventoCreateOrConnectWithoutEventoArtistasInput
    connect?: EventoWhereUniqueInput
  }

  export type EventoUpdateOneRequiredWithoutEventoArtistasNestedInput = {
    create?: XOR<EventoCreateWithoutEventoArtistasInput, EventoUncheckedCreateWithoutEventoArtistasInput>
    connectOrCreate?: EventoCreateOrConnectWithoutEventoArtistasInput
    upsert?: EventoUpsertWithoutEventoArtistasInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutEventoArtistasInput, EventoUpdateWithoutEventoArtistasInput>, EventoUncheckedUpdateWithoutEventoArtistasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PropostaCasaCreateWithoutEventoInput = {
    id_proposta_casa?: string
    id_artista: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCasaUncheckedCreateWithoutEventoInput = {
    id_proposta_casa?: string
    id_artista: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCasaCreateOrConnectWithoutEventoInput = {
    where: PropostaCasaWhereUniqueInput
    create: XOR<PropostaCasaCreateWithoutEventoInput, PropostaCasaUncheckedCreateWithoutEventoInput>
  }

  export type PropostaCasaCreateManyEventoInputEnvelope = {
    data: PropostaCasaCreateManyEventoInput | PropostaCasaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type PropostaArtistaCreateWithoutEventoInput = {
    id_proposta_artista?: string
    id_casa: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaArtistaUncheckedCreateWithoutEventoInput = {
    id_proposta_artista?: string
    id_casa: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaArtistaCreateOrConnectWithoutEventoInput = {
    where: PropostaArtistaWhereUniqueInput
    create: XOR<PropostaArtistaCreateWithoutEventoInput, PropostaArtistaUncheckedCreateWithoutEventoInput>
  }

  export type PropostaArtistaCreateManyEventoInputEnvelope = {
    data: PropostaArtistaCreateManyEventoInput | PropostaArtistaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type EventoArtistaCreateWithoutEventoInput = {
    id_usuario: string
    funcao: string
    contrato_acordado?: string | null
    cache_final?: string | null
    created_final?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoArtistaUncheckedCreateWithoutEventoInput = {
    id_usuario: string
    funcao: string
    contrato_acordado?: string | null
    cache_final?: string | null
    created_final?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoArtistaCreateOrConnectWithoutEventoInput = {
    where: EventoArtistaWhereUniqueInput
    create: XOR<EventoArtistaCreateWithoutEventoInput, EventoArtistaUncheckedCreateWithoutEventoInput>
  }

  export type EventoArtistaCreateManyEventoInputEnvelope = {
    data: EventoArtistaCreateManyEventoInput | EventoArtistaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type PropostaCasaUpsertWithWhereUniqueWithoutEventoInput = {
    where: PropostaCasaWhereUniqueInput
    update: XOR<PropostaCasaUpdateWithoutEventoInput, PropostaCasaUncheckedUpdateWithoutEventoInput>
    create: XOR<PropostaCasaCreateWithoutEventoInput, PropostaCasaUncheckedCreateWithoutEventoInput>
  }

  export type PropostaCasaUpdateWithWhereUniqueWithoutEventoInput = {
    where: PropostaCasaWhereUniqueInput
    data: XOR<PropostaCasaUpdateWithoutEventoInput, PropostaCasaUncheckedUpdateWithoutEventoInput>
  }

  export type PropostaCasaUpdateManyWithWhereWithoutEventoInput = {
    where: PropostaCasaScalarWhereInput
    data: XOR<PropostaCasaUpdateManyMutationInput, PropostaCasaUncheckedUpdateManyWithoutEventoInput>
  }

  export type PropostaCasaScalarWhereInput = {
    AND?: PropostaCasaScalarWhereInput | PropostaCasaScalarWhereInput[]
    OR?: PropostaCasaScalarWhereInput[]
    NOT?: PropostaCasaScalarWhereInput | PropostaCasaScalarWhereInput[]
    id_proposta_casa?: StringFilter<"PropostaCasa"> | string
    id_artista?: StringFilter<"PropostaCasa"> | string
    id_evento?: StringFilter<"PropostaCasa"> | string
    data_proposta?: DateTimeFilter<"PropostaCasa"> | Date | string
    data_evento?: DateTimeFilter<"PropostaCasa"> | Date | string
    valor_ofertado?: StringFilter<"PropostaCasa"> | string
    status?: StringFilter<"PropostaCasa"> | string
    termos?: StringNullableFilter<"PropostaCasa"> | string | null
    createdAt?: DateTimeFilter<"PropostaCasa"> | Date | string
    updatedAt?: DateTimeFilter<"PropostaCasa"> | Date | string
  }

  export type PropostaArtistaUpsertWithWhereUniqueWithoutEventoInput = {
    where: PropostaArtistaWhereUniqueInput
    update: XOR<PropostaArtistaUpdateWithoutEventoInput, PropostaArtistaUncheckedUpdateWithoutEventoInput>
    create: XOR<PropostaArtistaCreateWithoutEventoInput, PropostaArtistaUncheckedCreateWithoutEventoInput>
  }

  export type PropostaArtistaUpdateWithWhereUniqueWithoutEventoInput = {
    where: PropostaArtistaWhereUniqueInput
    data: XOR<PropostaArtistaUpdateWithoutEventoInput, PropostaArtistaUncheckedUpdateWithoutEventoInput>
  }

  export type PropostaArtistaUpdateManyWithWhereWithoutEventoInput = {
    where: PropostaArtistaScalarWhereInput
    data: XOR<PropostaArtistaUpdateManyMutationInput, PropostaArtistaUncheckedUpdateManyWithoutEventoInput>
  }

  export type PropostaArtistaScalarWhereInput = {
    AND?: PropostaArtistaScalarWhereInput | PropostaArtistaScalarWhereInput[]
    OR?: PropostaArtistaScalarWhereInput[]
    NOT?: PropostaArtistaScalarWhereInput | PropostaArtistaScalarWhereInput[]
    id_proposta_artista?: StringFilter<"PropostaArtista"> | string
    id_casa?: StringFilter<"PropostaArtista"> | string
    id_evento?: StringFilter<"PropostaArtista"> | string
    data_proposta?: DateTimeFilter<"PropostaArtista"> | Date | string
    data_evento?: DateTimeFilter<"PropostaArtista"> | Date | string
    valor_ofertado?: StringFilter<"PropostaArtista"> | string
    status?: StringFilter<"PropostaArtista"> | string
    termos?: StringNullableFilter<"PropostaArtista"> | string | null
    createdAt?: DateTimeFilter<"PropostaArtista"> | Date | string
    updatedAt?: DateTimeFilter<"PropostaArtista"> | Date | string
  }

  export type EventoArtistaUpsertWithWhereUniqueWithoutEventoInput = {
    where: EventoArtistaWhereUniqueInput
    update: XOR<EventoArtistaUpdateWithoutEventoInput, EventoArtistaUncheckedUpdateWithoutEventoInput>
    create: XOR<EventoArtistaCreateWithoutEventoInput, EventoArtistaUncheckedCreateWithoutEventoInput>
  }

  export type EventoArtistaUpdateWithWhereUniqueWithoutEventoInput = {
    where: EventoArtistaWhereUniqueInput
    data: XOR<EventoArtistaUpdateWithoutEventoInput, EventoArtistaUncheckedUpdateWithoutEventoInput>
  }

  export type EventoArtistaUpdateManyWithWhereWithoutEventoInput = {
    where: EventoArtistaScalarWhereInput
    data: XOR<EventoArtistaUpdateManyMutationInput, EventoArtistaUncheckedUpdateManyWithoutEventoInput>
  }

  export type EventoArtistaScalarWhereInput = {
    AND?: EventoArtistaScalarWhereInput | EventoArtistaScalarWhereInput[]
    OR?: EventoArtistaScalarWhereInput[]
    NOT?: EventoArtistaScalarWhereInput | EventoArtistaScalarWhereInput[]
    id_evento?: StringFilter<"EventoArtista"> | string
    id_usuario?: StringFilter<"EventoArtista"> | string
    funcao?: StringFilter<"EventoArtista"> | string
    contrato_acordado?: StringNullableFilter<"EventoArtista"> | string | null
    cache_final?: StringNullableFilter<"EventoArtista"> | string | null
    created_final?: StringNullableFilter<"EventoArtista"> | string | null
    createdAt?: DateTimeFilter<"EventoArtista"> | Date | string
    updatedAt?: DateTimeFilter<"EventoArtista"> | Date | string
  }

  export type EventoCreateWithoutPropostasCasaInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasArtista?: PropostaArtistaCreateNestedManyWithoutEventoInput
    eventoArtistas?: EventoArtistaCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutPropostasCasaInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasArtista?: PropostaArtistaUncheckedCreateNestedManyWithoutEventoInput
    eventoArtistas?: EventoArtistaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutPropostasCasaInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutPropostasCasaInput, EventoUncheckedCreateWithoutPropostasCasaInput>
  }

  export type EventoUpsertWithoutPropostasCasaInput = {
    update: XOR<EventoUpdateWithoutPropostasCasaInput, EventoUncheckedUpdateWithoutPropostasCasaInput>
    create: XOR<EventoCreateWithoutPropostasCasaInput, EventoUncheckedCreateWithoutPropostasCasaInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutPropostasCasaInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutPropostasCasaInput, EventoUncheckedUpdateWithoutPropostasCasaInput>
  }

  export type EventoUpdateWithoutPropostasCasaInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasArtista?: PropostaArtistaUpdateManyWithoutEventoNestedInput
    eventoArtistas?: EventoArtistaUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutPropostasCasaInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasArtista?: PropostaArtistaUncheckedUpdateManyWithoutEventoNestedInput
    eventoArtistas?: EventoArtistaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateWithoutPropostasArtistaInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasCasa?: PropostaCasaCreateNestedManyWithoutEventoInput
    eventoArtistas?: EventoArtistaCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutPropostasArtistaInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasCasa?: PropostaCasaUncheckedCreateNestedManyWithoutEventoInput
    eventoArtistas?: EventoArtistaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutPropostasArtistaInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutPropostasArtistaInput, EventoUncheckedCreateWithoutPropostasArtistaInput>
  }

  export type EventoUpsertWithoutPropostasArtistaInput = {
    update: XOR<EventoUpdateWithoutPropostasArtistaInput, EventoUncheckedUpdateWithoutPropostasArtistaInput>
    create: XOR<EventoCreateWithoutPropostasArtistaInput, EventoUncheckedCreateWithoutPropostasArtistaInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutPropostasArtistaInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutPropostasArtistaInput, EventoUncheckedUpdateWithoutPropostasArtistaInput>
  }

  export type EventoUpdateWithoutPropostasArtistaInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasCasa?: PropostaCasaUpdateManyWithoutEventoNestedInput
    eventoArtistas?: EventoArtistaUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutPropostasArtistaInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasCasa?: PropostaCasaUncheckedUpdateManyWithoutEventoNestedInput
    eventoArtistas?: EventoArtistaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateWithoutEventoArtistasInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasCasa?: PropostaCasaCreateNestedManyWithoutEventoInput
    propostasArtista?: PropostaArtistaCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutEventoArtistasInput = {
    id_evento?: string
    id_usuario: string
    titulo: string
    descricao?: string | null
    data_inicio: Date | string
    data_fim: Date | string
    local: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    propostasCasa?: PropostaCasaUncheckedCreateNestedManyWithoutEventoInput
    propostasArtista?: PropostaArtistaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutEventoArtistasInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutEventoArtistasInput, EventoUncheckedCreateWithoutEventoArtistasInput>
  }

  export type EventoUpsertWithoutEventoArtistasInput = {
    update: XOR<EventoUpdateWithoutEventoArtistasInput, EventoUncheckedUpdateWithoutEventoArtistasInput>
    create: XOR<EventoCreateWithoutEventoArtistasInput, EventoUncheckedCreateWithoutEventoArtistasInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutEventoArtistasInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutEventoArtistasInput, EventoUncheckedUpdateWithoutEventoArtistasInput>
  }

  export type EventoUpdateWithoutEventoArtistasInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasCasa?: PropostaCasaUpdateManyWithoutEventoNestedInput
    propostasArtista?: PropostaArtistaUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutEventoArtistasInput = {
    id_evento?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propostasCasa?: PropostaCasaUncheckedUpdateManyWithoutEventoNestedInput
    propostasArtista?: PropostaArtistaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type PropostaCasaCreateManyEventoInput = {
    id_proposta_casa?: string
    id_artista: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaArtistaCreateManyEventoInput = {
    id_proposta_artista?: string
    id_casa: string
    data_proposta: Date | string
    data_evento: Date | string
    valor_ofertado: string
    status: string
    termos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoArtistaCreateManyEventoInput = {
    id_usuario: string
    funcao: string
    contrato_acordado?: string | null
    cache_final?: string | null
    created_final?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropostaCasaUpdateWithoutEventoInput = {
    id_proposta_casa?: StringFieldUpdateOperationsInput | string
    id_artista?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaCasaUncheckedUpdateWithoutEventoInput = {
    id_proposta_casa?: StringFieldUpdateOperationsInput | string
    id_artista?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaCasaUncheckedUpdateManyWithoutEventoInput = {
    id_proposta_casa?: StringFieldUpdateOperationsInput | string
    id_artista?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaArtistaUpdateWithoutEventoInput = {
    id_proposta_artista?: StringFieldUpdateOperationsInput | string
    id_casa?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaArtistaUncheckedUpdateWithoutEventoInput = {
    id_proposta_artista?: StringFieldUpdateOperationsInput | string
    id_casa?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropostaArtistaUncheckedUpdateManyWithoutEventoInput = {
    id_proposta_artista?: StringFieldUpdateOperationsInput | string
    id_casa?: StringFieldUpdateOperationsInput | string
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_ofertado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    termos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoArtistaUpdateWithoutEventoInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    contrato_acordado?: NullableStringFieldUpdateOperationsInput | string | null
    cache_final?: NullableStringFieldUpdateOperationsInput | string | null
    created_final?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoArtistaUncheckedUpdateWithoutEventoInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    contrato_acordado?: NullableStringFieldUpdateOperationsInput | string | null
    cache_final?: NullableStringFieldUpdateOperationsInput | string | null
    created_final?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoArtistaUncheckedUpdateManyWithoutEventoInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    contrato_acordado?: NullableStringFieldUpdateOperationsInput | string | null
    cache_final?: NullableStringFieldUpdateOperationsInput | string | null
    created_final?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}