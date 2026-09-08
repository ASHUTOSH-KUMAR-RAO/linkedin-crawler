
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
 * Model ResearchJob
 * 
 */
export type ResearchJob = $Result.DefaultSelection<Prisma.$ResearchJobPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model PersonCompany
 * 
 */
export type PersonCompany = $Result.DefaultSelection<Prisma.$PersonCompanyPayload>
/**
 * Model ContactData
 * 
 */
export type ContactData = $Result.DefaultSelection<Prisma.$ContactDataPayload>
/**
 * Model SocialProfile
 * 
 */
export type SocialProfile = $Result.DefaultSelection<Prisma.$SocialProfilePayload>
/**
 * Model ResearchResult
 * 
 */
export type ResearchResult = $Result.DefaultSelection<Prisma.$ResearchResultPayload>
/**
 * Model Source
 * 
 */
export type Source = $Result.DefaultSelection<Prisma.$SourcePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobMode: {
  QUICK: 'QUICK',
  DEEP: 'DEEP'
};

export type JobMode = (typeof JobMode)[keyof typeof JobMode]


export const JobStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  PARTIAL: 'PARTIAL',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const ContactStatus: {
  UNKNOWN: 'UNKNOWN',
  FOUND: 'FOUND',
  VERIFIED: 'VERIFIED',
  UNAVAILABLE: 'UNAVAILABLE'
};

export type ContactStatus = (typeof ContactStatus)[keyof typeof ContactStatus]


export const SourceType: {
  SEARCH_ENGINE: 'SEARCH_ENGINE',
  PUBLIC_WEB: 'PUBLIC_WEB',
  LINKEDIN_PUBLIC: 'LINKEDIN_PUBLIC',
  COMPANY_WEBSITE: 'COMPANY_WEBSITE',
  ENRICHMENT_API: 'ENRICHMENT_API',
  DEMO: 'DEMO',
  OTHER: 'OTHER'
};

export type SourceType = (typeof SourceType)[keyof typeof SourceType]

}

export type JobMode = $Enums.JobMode

export const JobMode: typeof $Enums.JobMode

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type ContactStatus = $Enums.ContactStatus

export const ContactStatus: typeof $Enums.ContactStatus

export type SourceType = $Enums.SourceType

export const SourceType: typeof $Enums.SourceType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ResearchJobs
 * const researchJobs = await prisma.researchJob.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more ResearchJobs
   * const researchJobs = await prisma.researchJob.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.researchJob`: Exposes CRUD operations for the **ResearchJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchJobs
    * const researchJobs = await prisma.researchJob.findMany()
    * ```
    */
  get researchJob(): Prisma.ResearchJobDelegate<ExtArgs>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.personCompany`: Exposes CRUD operations for the **PersonCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonCompanies
    * const personCompanies = await prisma.personCompany.findMany()
    * ```
    */
  get personCompany(): Prisma.PersonCompanyDelegate<ExtArgs>;

  /**
   * `prisma.contactData`: Exposes CRUD operations for the **ContactData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactData
    * const contactData = await prisma.contactData.findMany()
    * ```
    */
  get contactData(): Prisma.ContactDataDelegate<ExtArgs>;

  /**
   * `prisma.socialProfile`: Exposes CRUD operations for the **SocialProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialProfiles
    * const socialProfiles = await prisma.socialProfile.findMany()
    * ```
    */
  get socialProfile(): Prisma.SocialProfileDelegate<ExtArgs>;

  /**
   * `prisma.researchResult`: Exposes CRUD operations for the **ResearchResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchResults
    * const researchResults = await prisma.researchResult.findMany()
    * ```
    */
  get researchResult(): Prisma.ResearchResultDelegate<ExtArgs>;

  /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    ResearchJob: 'ResearchJob',
    Person: 'Person',
    Company: 'Company',
    PersonCompany: 'PersonCompany',
    ContactData: 'ContactData',
    SocialProfile: 'SocialProfile',
    ResearchResult: 'ResearchResult',
    Source: 'Source'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "researchJob" | "person" | "company" | "personCompany" | "contactData" | "socialProfile" | "researchResult" | "source"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ResearchJob: {
        payload: Prisma.$ResearchJobPayload<ExtArgs>
        fields: Prisma.ResearchJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearchJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearchJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>
          }
          findFirst: {
            args: Prisma.ResearchJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearchJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>
          }
          findMany: {
            args: Prisma.ResearchJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>[]
          }
          create: {
            args: Prisma.ResearchJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>
          }
          createMany: {
            args: Prisma.ResearchJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResearchJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>[]
          }
          delete: {
            args: Prisma.ResearchJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>
          }
          update: {
            args: Prisma.ResearchJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>
          }
          deleteMany: {
            args: Prisma.ResearchJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearchJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResearchJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchJobPayload>
          }
          aggregate: {
            args: Prisma.ResearchJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearchJob>
          }
          groupBy: {
            args: Prisma.ResearchJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearchJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearchJobCountArgs<ExtArgs>
            result: $Utils.Optional<ResearchJobCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      PersonCompany: {
        payload: Prisma.$PersonCompanyPayload<ExtArgs>
        fields: Prisma.PersonCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>
          }
          findFirst: {
            args: Prisma.PersonCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>
          }
          findMany: {
            args: Prisma.PersonCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>[]
          }
          create: {
            args: Prisma.PersonCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>
          }
          createMany: {
            args: Prisma.PersonCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>[]
          }
          delete: {
            args: Prisma.PersonCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>
          }
          update: {
            args: Prisma.PersonCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>
          }
          deleteMany: {
            args: Prisma.PersonCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonCompanyPayload>
          }
          aggregate: {
            args: Prisma.PersonCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonCompany>
          }
          groupBy: {
            args: Prisma.PersonCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCompanyCountAggregateOutputType> | number
          }
        }
      }
      ContactData: {
        payload: Prisma.$ContactDataPayload<ExtArgs>
        fields: Prisma.ContactDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>
          }
          findFirst: {
            args: Prisma.ContactDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>
          }
          findMany: {
            args: Prisma.ContactDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>[]
          }
          create: {
            args: Prisma.ContactDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>
          }
          createMany: {
            args: Prisma.ContactDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>[]
          }
          delete: {
            args: Prisma.ContactDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>
          }
          update: {
            args: Prisma.ContactDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>
          }
          deleteMany: {
            args: Prisma.ContactDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactDataPayload>
          }
          aggregate: {
            args: Prisma.ContactDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactData>
          }
          groupBy: {
            args: Prisma.ContactDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactDataCountArgs<ExtArgs>
            result: $Utils.Optional<ContactDataCountAggregateOutputType> | number
          }
        }
      }
      SocialProfile: {
        payload: Prisma.$SocialProfilePayload<ExtArgs>
        fields: Prisma.SocialProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>
          }
          findFirst: {
            args: Prisma.SocialProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>
          }
          findMany: {
            args: Prisma.SocialProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>[]
          }
          create: {
            args: Prisma.SocialProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>
          }
          createMany: {
            args: Prisma.SocialProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>[]
          }
          delete: {
            args: Prisma.SocialProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>
          }
          update: {
            args: Prisma.SocialProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>
          }
          deleteMany: {
            args: Prisma.SocialProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialProfilePayload>
          }
          aggregate: {
            args: Prisma.SocialProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialProfile>
          }
          groupBy: {
            args: Prisma.SocialProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SocialProfileCountAggregateOutputType> | number
          }
        }
      }
      ResearchResult: {
        payload: Prisma.$ResearchResultPayload<ExtArgs>
        fields: Prisma.ResearchResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearchResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearchResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>
          }
          findFirst: {
            args: Prisma.ResearchResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearchResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>
          }
          findMany: {
            args: Prisma.ResearchResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>[]
          }
          create: {
            args: Prisma.ResearchResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>
          }
          createMany: {
            args: Prisma.ResearchResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResearchResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>[]
          }
          delete: {
            args: Prisma.ResearchResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>
          }
          update: {
            args: Prisma.ResearchResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>
          }
          deleteMany: {
            args: Prisma.ResearchResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearchResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResearchResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchResultPayload>
          }
          aggregate: {
            args: Prisma.ResearchResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearchResult>
          }
          groupBy: {
            args: Prisma.ResearchResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearchResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearchResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResearchResultCountAggregateOutputType> | number
          }
        }
      }
      Source: {
        payload: Prisma.$SourcePayload<ExtArgs>
        fields: Prisma.SourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findFirst: {
            args: Prisma.SourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findMany: {
            args: Prisma.SourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          create: {
            args: Prisma.SourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          createMany: {
            args: Prisma.SourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          delete: {
            args: Prisma.SourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          update: {
            args: Prisma.SourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          deleteMany: {
            args: Prisma.SourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          aggregate: {
            args: Prisma.SourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource>
          }
          groupBy: {
            args: Prisma.SourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ResearchJobCountOutputType
   */

  export type ResearchJobCountOutputType = {
    results: number
  }

  export type ResearchJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | ResearchJobCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * ResearchJobCountOutputType without action
   */
  export type ResearchJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJobCountOutputType
     */
    select?: ResearchJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResearchJobCountOutputType without action
   */
  export type ResearchJobCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchResultWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    companies: number
    socialProfiles: number
    results: number
    sources: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | PersonCountOutputTypeCountCompaniesArgs
    socialProfiles?: boolean | PersonCountOutputTypeCountSocialProfilesArgs
    results?: boolean | PersonCountOutputTypeCountResultsArgs
    sources?: boolean | PersonCountOutputTypeCountSourcesArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonCompanyWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountSocialProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialProfileWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchResultWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    people: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | CompanyCountOutputTypeCountPeopleArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonCompanyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ResearchJob
   */

  export type AggregateResearchJob = {
    _count: ResearchJobCountAggregateOutputType | null
    _avg: ResearchJobAvgAggregateOutputType | null
    _sum: ResearchJobSumAggregateOutputType | null
    _min: ResearchJobMinAggregateOutputType | null
    _max: ResearchJobMaxAggregateOutputType | null
  }

  export type ResearchJobAvgAggregateOutputType = {
    requestedCount: number | null
    foundCount: number | null
    progressPercent: number | null
  }

  export type ResearchJobSumAggregateOutputType = {
    requestedCount: number | null
    foundCount: number | null
    progressPercent: number | null
  }

  export type ResearchJobMinAggregateOutputType = {
    id: string | null
    query: string | null
    mode: $Enums.JobMode | null
    status: $Enums.JobStatus | null
    requestedCount: number | null
    foundCount: number | null
    errorMessage: string | null
    progressStage: string | null
    progressPercent: number | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ResearchJobMaxAggregateOutputType = {
    id: string | null
    query: string | null
    mode: $Enums.JobMode | null
    status: $Enums.JobStatus | null
    requestedCount: number | null
    foundCount: number | null
    errorMessage: string | null
    progressStage: string | null
    progressPercent: number | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ResearchJobCountAggregateOutputType = {
    id: number
    query: number
    mode: number
    status: number
    requestedCount: number
    foundCount: number
    errorMessage: number
    progressStage: number
    progressPercent: number
    createdAt: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type ResearchJobAvgAggregateInputType = {
    requestedCount?: true
    foundCount?: true
    progressPercent?: true
  }

  export type ResearchJobSumAggregateInputType = {
    requestedCount?: true
    foundCount?: true
    progressPercent?: true
  }

  export type ResearchJobMinAggregateInputType = {
    id?: true
    query?: true
    mode?: true
    status?: true
    requestedCount?: true
    foundCount?: true
    errorMessage?: true
    progressStage?: true
    progressPercent?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type ResearchJobMaxAggregateInputType = {
    id?: true
    query?: true
    mode?: true
    status?: true
    requestedCount?: true
    foundCount?: true
    errorMessage?: true
    progressStage?: true
    progressPercent?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type ResearchJobCountAggregateInputType = {
    id?: true
    query?: true
    mode?: true
    status?: true
    requestedCount?: true
    foundCount?: true
    errorMessage?: true
    progressStage?: true
    progressPercent?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type ResearchJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchJob to aggregate.
     */
    where?: ResearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchJobs to fetch.
     */
    orderBy?: ResearchJobOrderByWithRelationInput | ResearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchJobs
    **/
    _count?: true | ResearchJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResearchJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResearchJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchJobMaxAggregateInputType
  }

  export type GetResearchJobAggregateType<T extends ResearchJobAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchJob[P]>
      : GetScalarType<T[P], AggregateResearchJob[P]>
  }




  export type ResearchJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchJobWhereInput
    orderBy?: ResearchJobOrderByWithAggregationInput | ResearchJobOrderByWithAggregationInput[]
    by: ResearchJobScalarFieldEnum[] | ResearchJobScalarFieldEnum
    having?: ResearchJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchJobCountAggregateInputType | true
    _avg?: ResearchJobAvgAggregateInputType
    _sum?: ResearchJobSumAggregateInputType
    _min?: ResearchJobMinAggregateInputType
    _max?: ResearchJobMaxAggregateInputType
  }

  export type ResearchJobGroupByOutputType = {
    id: string
    query: string
    mode: $Enums.JobMode
    status: $Enums.JobStatus
    requestedCount: number
    foundCount: number
    errorMessage: string | null
    progressStage: string | null
    progressPercent: number
    createdAt: Date
    startedAt: Date | null
    completedAt: Date | null
    _count: ResearchJobCountAggregateOutputType | null
    _avg: ResearchJobAvgAggregateOutputType | null
    _sum: ResearchJobSumAggregateOutputType | null
    _min: ResearchJobMinAggregateOutputType | null
    _max: ResearchJobMaxAggregateOutputType | null
  }

  type GetResearchJobGroupByPayload<T extends ResearchJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchJobGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchJobGroupByOutputType[P]>
        }
      >
    >


  export type ResearchJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    mode?: boolean
    status?: boolean
    requestedCount?: boolean
    foundCount?: boolean
    errorMessage?: boolean
    progressStage?: boolean
    progressPercent?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    results?: boolean | ResearchJob$resultsArgs<ExtArgs>
    _count?: boolean | ResearchJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researchJob"]>

  export type ResearchJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    mode?: boolean
    status?: boolean
    requestedCount?: boolean
    foundCount?: boolean
    errorMessage?: boolean
    progressStage?: boolean
    progressPercent?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["researchJob"]>

  export type ResearchJobSelectScalar = {
    id?: boolean
    query?: boolean
    mode?: boolean
    status?: boolean
    requestedCount?: boolean
    foundCount?: boolean
    errorMessage?: boolean
    progressStage?: boolean
    progressPercent?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type ResearchJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | ResearchJob$resultsArgs<ExtArgs>
    _count?: boolean | ResearchJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResearchJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResearchJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResearchJob"
    objects: {
      results: Prisma.$ResearchResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      query: string
      mode: $Enums.JobMode
      status: $Enums.JobStatus
      requestedCount: number
      foundCount: number
      errorMessage: string | null
      progressStage: string | null
      progressPercent: number
      createdAt: Date
      startedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["researchJob"]>
    composites: {}
  }

  type ResearchJobGetPayload<S extends boolean | null | undefined | ResearchJobDefaultArgs> = $Result.GetResult<Prisma.$ResearchJobPayload, S>

  type ResearchJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResearchJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResearchJobCountAggregateInputType | true
    }

  export interface ResearchJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResearchJob'], meta: { name: 'ResearchJob' } }
    /**
     * Find zero or one ResearchJob that matches the filter.
     * @param {ResearchJobFindUniqueArgs} args - Arguments to find a ResearchJob
     * @example
     * // Get one ResearchJob
     * const researchJob = await prisma.researchJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearchJobFindUniqueArgs>(args: SelectSubset<T, ResearchJobFindUniqueArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResearchJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResearchJobFindUniqueOrThrowArgs} args - Arguments to find a ResearchJob
     * @example
     * // Get one ResearchJob
     * const researchJob = await prisma.researchJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearchJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearchJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResearchJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchJobFindFirstArgs} args - Arguments to find a ResearchJob
     * @example
     * // Get one ResearchJob
     * const researchJob = await prisma.researchJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearchJobFindFirstArgs>(args?: SelectSubset<T, ResearchJobFindFirstArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResearchJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchJobFindFirstOrThrowArgs} args - Arguments to find a ResearchJob
     * @example
     * // Get one ResearchJob
     * const researchJob = await prisma.researchJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearchJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearchJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResearchJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchJobs
     * const researchJobs = await prisma.researchJob.findMany()
     * 
     * // Get first 10 ResearchJobs
     * const researchJobs = await prisma.researchJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchJobWithIdOnly = await prisma.researchJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResearchJobFindManyArgs>(args?: SelectSubset<T, ResearchJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResearchJob.
     * @param {ResearchJobCreateArgs} args - Arguments to create a ResearchJob.
     * @example
     * // Create one ResearchJob
     * const ResearchJob = await prisma.researchJob.create({
     *   data: {
     *     // ... data to create a ResearchJob
     *   }
     * })
     * 
     */
    create<T extends ResearchJobCreateArgs>(args: SelectSubset<T, ResearchJobCreateArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResearchJobs.
     * @param {ResearchJobCreateManyArgs} args - Arguments to create many ResearchJobs.
     * @example
     * // Create many ResearchJobs
     * const researchJob = await prisma.researchJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearchJobCreateManyArgs>(args?: SelectSubset<T, ResearchJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResearchJobs and returns the data saved in the database.
     * @param {ResearchJobCreateManyAndReturnArgs} args - Arguments to create many ResearchJobs.
     * @example
     * // Create many ResearchJobs
     * const researchJob = await prisma.researchJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResearchJobs and only return the `id`
     * const researchJobWithIdOnly = await prisma.researchJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResearchJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ResearchJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResearchJob.
     * @param {ResearchJobDeleteArgs} args - Arguments to delete one ResearchJob.
     * @example
     * // Delete one ResearchJob
     * const ResearchJob = await prisma.researchJob.delete({
     *   where: {
     *     // ... filter to delete one ResearchJob
     *   }
     * })
     * 
     */
    delete<T extends ResearchJobDeleteArgs>(args: SelectSubset<T, ResearchJobDeleteArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResearchJob.
     * @param {ResearchJobUpdateArgs} args - Arguments to update one ResearchJob.
     * @example
     * // Update one ResearchJob
     * const researchJob = await prisma.researchJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearchJobUpdateArgs>(args: SelectSubset<T, ResearchJobUpdateArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResearchJobs.
     * @param {ResearchJobDeleteManyArgs} args - Arguments to filter ResearchJobs to delete.
     * @example
     * // Delete a few ResearchJobs
     * const { count } = await prisma.researchJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearchJobDeleteManyArgs>(args?: SelectSubset<T, ResearchJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchJobs
     * const researchJob = await prisma.researchJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearchJobUpdateManyArgs>(args: SelectSubset<T, ResearchJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResearchJob.
     * @param {ResearchJobUpsertArgs} args - Arguments to update or create a ResearchJob.
     * @example
     * // Update or create a ResearchJob
     * const researchJob = await prisma.researchJob.upsert({
     *   create: {
     *     // ... data to create a ResearchJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchJob we want to update
     *   }
     * })
     */
    upsert<T extends ResearchJobUpsertArgs>(args: SelectSubset<T, ResearchJobUpsertArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResearchJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchJobCountArgs} args - Arguments to filter ResearchJobs to count.
     * @example
     * // Count the number of ResearchJobs
     * const count = await prisma.researchJob.count({
     *   where: {
     *     // ... the filter for the ResearchJobs we want to count
     *   }
     * })
    **/
    count<T extends ResearchJobCountArgs>(
      args?: Subset<T, ResearchJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchJobAggregateArgs>(args: Subset<T, ResearchJobAggregateArgs>): Prisma.PrismaPromise<GetResearchJobAggregateType<T>>

    /**
     * Group by ResearchJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchJobGroupByArgs} args - Group by arguments.
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
      T extends ResearchJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchJobGroupByArgs['orderBy'] }
        : { orderBy?: ResearchJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResearchJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResearchJob model
   */
  readonly fields: ResearchJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearchJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    results<T extends ResearchJob$resultsArgs<ExtArgs> = {}>(args?: Subset<T, ResearchJob$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ResearchJob model
   */ 
  interface ResearchJobFieldRefs {
    readonly id: FieldRef<"ResearchJob", 'String'>
    readonly query: FieldRef<"ResearchJob", 'String'>
    readonly mode: FieldRef<"ResearchJob", 'JobMode'>
    readonly status: FieldRef<"ResearchJob", 'JobStatus'>
    readonly requestedCount: FieldRef<"ResearchJob", 'Int'>
    readonly foundCount: FieldRef<"ResearchJob", 'Int'>
    readonly errorMessage: FieldRef<"ResearchJob", 'String'>
    readonly progressStage: FieldRef<"ResearchJob", 'String'>
    readonly progressPercent: FieldRef<"ResearchJob", 'Int'>
    readonly createdAt: FieldRef<"ResearchJob", 'DateTime'>
    readonly startedAt: FieldRef<"ResearchJob", 'DateTime'>
    readonly completedAt: FieldRef<"ResearchJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResearchJob findUnique
   */
  export type ResearchJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * Filter, which ResearchJob to fetch.
     */
    where: ResearchJobWhereUniqueInput
  }

  /**
   * ResearchJob findUniqueOrThrow
   */
  export type ResearchJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * Filter, which ResearchJob to fetch.
     */
    where: ResearchJobWhereUniqueInput
  }

  /**
   * ResearchJob findFirst
   */
  export type ResearchJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * Filter, which ResearchJob to fetch.
     */
    where?: ResearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchJobs to fetch.
     */
    orderBy?: ResearchJobOrderByWithRelationInput | ResearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchJobs.
     */
    cursor?: ResearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchJobs.
     */
    distinct?: ResearchJobScalarFieldEnum | ResearchJobScalarFieldEnum[]
  }

  /**
   * ResearchJob findFirstOrThrow
   */
  export type ResearchJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * Filter, which ResearchJob to fetch.
     */
    where?: ResearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchJobs to fetch.
     */
    orderBy?: ResearchJobOrderByWithRelationInput | ResearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchJobs.
     */
    cursor?: ResearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchJobs.
     */
    distinct?: ResearchJobScalarFieldEnum | ResearchJobScalarFieldEnum[]
  }

  /**
   * ResearchJob findMany
   */
  export type ResearchJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * Filter, which ResearchJobs to fetch.
     */
    where?: ResearchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchJobs to fetch.
     */
    orderBy?: ResearchJobOrderByWithRelationInput | ResearchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchJobs.
     */
    cursor?: ResearchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchJobs.
     */
    skip?: number
    distinct?: ResearchJobScalarFieldEnum | ResearchJobScalarFieldEnum[]
  }

  /**
   * ResearchJob create
   */
  export type ResearchJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ResearchJob.
     */
    data: XOR<ResearchJobCreateInput, ResearchJobUncheckedCreateInput>
  }

  /**
   * ResearchJob createMany
   */
  export type ResearchJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResearchJobs.
     */
    data: ResearchJobCreateManyInput | ResearchJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResearchJob createManyAndReturn
   */
  export type ResearchJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResearchJobs.
     */
    data: ResearchJobCreateManyInput | ResearchJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResearchJob update
   */
  export type ResearchJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ResearchJob.
     */
    data: XOR<ResearchJobUpdateInput, ResearchJobUncheckedUpdateInput>
    /**
     * Choose, which ResearchJob to update.
     */
    where: ResearchJobWhereUniqueInput
  }

  /**
   * ResearchJob updateMany
   */
  export type ResearchJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResearchJobs.
     */
    data: XOR<ResearchJobUpdateManyMutationInput, ResearchJobUncheckedUpdateManyInput>
    /**
     * Filter which ResearchJobs to update
     */
    where?: ResearchJobWhereInput
  }

  /**
   * ResearchJob upsert
   */
  export type ResearchJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ResearchJob to update in case it exists.
     */
    where: ResearchJobWhereUniqueInput
    /**
     * In case the ResearchJob found by the `where` argument doesn't exist, create a new ResearchJob with this data.
     */
    create: XOR<ResearchJobCreateInput, ResearchJobUncheckedCreateInput>
    /**
     * In case the ResearchJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearchJobUpdateInput, ResearchJobUncheckedUpdateInput>
  }

  /**
   * ResearchJob delete
   */
  export type ResearchJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
    /**
     * Filter which ResearchJob to delete.
     */
    where: ResearchJobWhereUniqueInput
  }

  /**
   * ResearchJob deleteMany
   */
  export type ResearchJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchJobs to delete
     */
    where?: ResearchJobWhereInput
  }

  /**
   * ResearchJob.results
   */
  export type ResearchJob$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    where?: ResearchResultWhereInput
    orderBy?: ResearchResultOrderByWithRelationInput | ResearchResultOrderByWithRelationInput[]
    cursor?: ResearchResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResearchResultScalarFieldEnum | ResearchResultScalarFieldEnum[]
  }

  /**
   * ResearchJob without action
   */
  export type ResearchJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchJob
     */
    select?: ResearchJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchJobInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    jobTitle: string | null
    location: string | null
    linkedinUrl: string | null
    isDemo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    jobTitle: string | null
    location: string | null
    linkedinUrl: string | null
    isDemo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    jobTitle: number
    location: number
    linkedinUrl: number
    isDemo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    jobTitle?: true
    location?: true
    linkedinUrl?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    jobTitle?: true
    location?: true
    linkedinUrl?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    jobTitle?: true
    location?: true
    linkedinUrl?: true
    isDemo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    name: string
    jobTitle: string | null
    location: string | null
    linkedinUrl: string | null
    isDemo: boolean
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    jobTitle?: boolean
    location?: boolean
    linkedinUrl?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companies?: boolean | Person$companiesArgs<ExtArgs>
    contactData?: boolean | Person$contactDataArgs<ExtArgs>
    socialProfiles?: boolean | Person$socialProfilesArgs<ExtArgs>
    results?: boolean | Person$resultsArgs<ExtArgs>
    sources?: boolean | Person$sourcesArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    jobTitle?: boolean
    location?: boolean
    linkedinUrl?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    name?: boolean
    jobTitle?: boolean
    location?: boolean
    linkedinUrl?: boolean
    isDemo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | Person$companiesArgs<ExtArgs>
    contactData?: boolean | Person$contactDataArgs<ExtArgs>
    socialProfiles?: boolean | Person$socialProfilesArgs<ExtArgs>
    results?: boolean | Person$resultsArgs<ExtArgs>
    sources?: boolean | Person$sourcesArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      companies: Prisma.$PersonCompanyPayload<ExtArgs>[]
      contactData: Prisma.$ContactDataPayload<ExtArgs> | null
      socialProfiles: Prisma.$SocialProfilePayload<ExtArgs>[]
      results: Prisma.$ResearchResultPayload<ExtArgs>[]
      sources: Prisma.$SourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      jobTitle: string | null
      location: string | null
      linkedinUrl: string | null
      isDemo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends Person$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Person$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "findMany"> | Null>
    contactData<T extends Person$contactDataArgs<ExtArgs> = {}>(args?: Subset<T, Person$contactDataArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    socialProfiles<T extends Person$socialProfilesArgs<ExtArgs> = {}>(args?: Subset<T, Person$socialProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "findMany"> | Null>
    results<T extends Person$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Person$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "findMany"> | Null>
    sources<T extends Person$sourcesArgs<ExtArgs> = {}>(args?: Subset<T, Person$sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Person model
   */ 
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
    readonly jobTitle: FieldRef<"Person", 'String'>
    readonly location: FieldRef<"Person", 'String'>
    readonly linkedinUrl: FieldRef<"Person", 'String'>
    readonly isDemo: FieldRef<"Person", 'Boolean'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
  }

  /**
   * Person.companies
   */
  export type Person$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    where?: PersonCompanyWhereInput
    orderBy?: PersonCompanyOrderByWithRelationInput | PersonCompanyOrderByWithRelationInput[]
    cursor?: PersonCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonCompanyScalarFieldEnum | PersonCompanyScalarFieldEnum[]
  }

  /**
   * Person.contactData
   */
  export type Person$contactDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    where?: ContactDataWhereInput
  }

  /**
   * Person.socialProfiles
   */
  export type Person$socialProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    where?: SocialProfileWhereInput
    orderBy?: SocialProfileOrderByWithRelationInput | SocialProfileOrderByWithRelationInput[]
    cursor?: SocialProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialProfileScalarFieldEnum | SocialProfileScalarFieldEnum[]
  }

  /**
   * Person.results
   */
  export type Person$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    where?: ResearchResultWhereInput
    orderBy?: ResearchResultOrderByWithRelationInput | ResearchResultOrderByWithRelationInput[]
    cursor?: ResearchResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResearchResultScalarFieldEnum | ResearchResultScalarFieldEnum[]
  }

  /**
   * Person.sources
   */
  export type Person$sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    cursor?: SourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    industry: string | null
    location: string | null
    createdAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    industry: string | null
    location: string | null
    createdAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    website: number
    industry: number
    location: number
    createdAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    website?: true
    industry?: true
    location?: true
    createdAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    website?: true
    industry?: true
    location?: true
    createdAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    website?: true
    industry?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    website: string | null
    industry: string | null
    location: string | null
    createdAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    industry?: boolean
    location?: boolean
    createdAt?: boolean
    people?: boolean | Company$peopleArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    industry?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    website?: boolean
    industry?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | Company$peopleArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      people: Prisma.$PersonCompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      website: string | null
      industry: string | null
      location: string | null
      createdAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    people<T extends Company$peopleArgs<ExtArgs> = {}>(args?: Subset<T, Company$peopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly industry: FieldRef<"Company", 'String'>
    readonly location: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.people
   */
  export type Company$peopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    where?: PersonCompanyWhereInput
    orderBy?: PersonCompanyOrderByWithRelationInput | PersonCompanyOrderByWithRelationInput[]
    cursor?: PersonCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonCompanyScalarFieldEnum | PersonCompanyScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model PersonCompany
   */

  export type AggregatePersonCompany = {
    _count: PersonCompanyCountAggregateOutputType | null
    _min: PersonCompanyMinAggregateOutputType | null
    _max: PersonCompanyMaxAggregateOutputType | null
  }

  export type PersonCompanyMinAggregateOutputType = {
    personId: string | null
    companyId: string | null
    relationship: string | null
    current: boolean | null
  }

  export type PersonCompanyMaxAggregateOutputType = {
    personId: string | null
    companyId: string | null
    relationship: string | null
    current: boolean | null
  }

  export type PersonCompanyCountAggregateOutputType = {
    personId: number
    companyId: number
    relationship: number
    current: number
    _all: number
  }


  export type PersonCompanyMinAggregateInputType = {
    personId?: true
    companyId?: true
    relationship?: true
    current?: true
  }

  export type PersonCompanyMaxAggregateInputType = {
    personId?: true
    companyId?: true
    relationship?: true
    current?: true
  }

  export type PersonCompanyCountAggregateInputType = {
    personId?: true
    companyId?: true
    relationship?: true
    current?: true
    _all?: true
  }

  export type PersonCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonCompany to aggregate.
     */
    where?: PersonCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonCompanies to fetch.
     */
    orderBy?: PersonCompanyOrderByWithRelationInput | PersonCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonCompanies
    **/
    _count?: true | PersonCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonCompanyMaxAggregateInputType
  }

  export type GetPersonCompanyAggregateType<T extends PersonCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonCompany[P]>
      : GetScalarType<T[P], AggregatePersonCompany[P]>
  }




  export type PersonCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonCompanyWhereInput
    orderBy?: PersonCompanyOrderByWithAggregationInput | PersonCompanyOrderByWithAggregationInput[]
    by: PersonCompanyScalarFieldEnum[] | PersonCompanyScalarFieldEnum
    having?: PersonCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCompanyCountAggregateInputType | true
    _min?: PersonCompanyMinAggregateInputType
    _max?: PersonCompanyMaxAggregateInputType
  }

  export type PersonCompanyGroupByOutputType = {
    personId: string
    companyId: string
    relationship: string | null
    current: boolean
    _count: PersonCompanyCountAggregateOutputType | null
    _min: PersonCompanyMinAggregateOutputType | null
    _max: PersonCompanyMaxAggregateOutputType | null
  }

  type GetPersonCompanyGroupByPayload<T extends PersonCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], PersonCompanyGroupByOutputType[P]>
        }
      >
    >


  export type PersonCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personId?: boolean
    companyId?: boolean
    relationship?: boolean
    current?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personCompany"]>

  export type PersonCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    personId?: boolean
    companyId?: boolean
    relationship?: boolean
    current?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personCompany"]>

  export type PersonCompanySelectScalar = {
    personId?: boolean
    companyId?: boolean
    relationship?: boolean
    current?: boolean
  }

  export type PersonCompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type PersonCompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $PersonCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonCompany"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      personId: string
      companyId: string
      relationship: string | null
      current: boolean
    }, ExtArgs["result"]["personCompany"]>
    composites: {}
  }

  type PersonCompanyGetPayload<S extends boolean | null | undefined | PersonCompanyDefaultArgs> = $Result.GetResult<Prisma.$PersonCompanyPayload, S>

  type PersonCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonCompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonCompanyCountAggregateInputType | true
    }

  export interface PersonCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonCompany'], meta: { name: 'PersonCompany' } }
    /**
     * Find zero or one PersonCompany that matches the filter.
     * @param {PersonCompanyFindUniqueArgs} args - Arguments to find a PersonCompany
     * @example
     * // Get one PersonCompany
     * const personCompany = await prisma.personCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonCompanyFindUniqueArgs>(args: SelectSubset<T, PersonCompanyFindUniqueArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PersonCompany that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PersonCompanyFindUniqueOrThrowArgs} args - Arguments to find a PersonCompany
     * @example
     * // Get one PersonCompany
     * const personCompany = await prisma.personCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PersonCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCompanyFindFirstArgs} args - Arguments to find a PersonCompany
     * @example
     * // Get one PersonCompany
     * const personCompany = await prisma.personCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonCompanyFindFirstArgs>(args?: SelectSubset<T, PersonCompanyFindFirstArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PersonCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCompanyFindFirstOrThrowArgs} args - Arguments to find a PersonCompany
     * @example
     * // Get one PersonCompany
     * const personCompany = await prisma.personCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PersonCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonCompanies
     * const personCompanies = await prisma.personCompany.findMany()
     * 
     * // Get first 10 PersonCompanies
     * const personCompanies = await prisma.personCompany.findMany({ take: 10 })
     * 
     * // Only select the `personId`
     * const personCompanyWithPersonIdOnly = await prisma.personCompany.findMany({ select: { personId: true } })
     * 
     */
    findMany<T extends PersonCompanyFindManyArgs>(args?: SelectSubset<T, PersonCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PersonCompany.
     * @param {PersonCompanyCreateArgs} args - Arguments to create a PersonCompany.
     * @example
     * // Create one PersonCompany
     * const PersonCompany = await prisma.personCompany.create({
     *   data: {
     *     // ... data to create a PersonCompany
     *   }
     * })
     * 
     */
    create<T extends PersonCompanyCreateArgs>(args: SelectSubset<T, PersonCompanyCreateArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PersonCompanies.
     * @param {PersonCompanyCreateManyArgs} args - Arguments to create many PersonCompanies.
     * @example
     * // Create many PersonCompanies
     * const personCompany = await prisma.personCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCompanyCreateManyArgs>(args?: SelectSubset<T, PersonCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonCompanies and returns the data saved in the database.
     * @param {PersonCompanyCreateManyAndReturnArgs} args - Arguments to create many PersonCompanies.
     * @example
     * // Create many PersonCompanies
     * const personCompany = await prisma.personCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonCompanies and only return the `personId`
     * const personCompanyWithPersonIdOnly = await prisma.personCompany.createManyAndReturn({ 
     *   select: { personId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PersonCompany.
     * @param {PersonCompanyDeleteArgs} args - Arguments to delete one PersonCompany.
     * @example
     * // Delete one PersonCompany
     * const PersonCompany = await prisma.personCompany.delete({
     *   where: {
     *     // ... filter to delete one PersonCompany
     *   }
     * })
     * 
     */
    delete<T extends PersonCompanyDeleteArgs>(args: SelectSubset<T, PersonCompanyDeleteArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PersonCompany.
     * @param {PersonCompanyUpdateArgs} args - Arguments to update one PersonCompany.
     * @example
     * // Update one PersonCompany
     * const personCompany = await prisma.personCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonCompanyUpdateArgs>(args: SelectSubset<T, PersonCompanyUpdateArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PersonCompanies.
     * @param {PersonCompanyDeleteManyArgs} args - Arguments to filter PersonCompanies to delete.
     * @example
     * // Delete a few PersonCompanies
     * const { count } = await prisma.personCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonCompanyDeleteManyArgs>(args?: SelectSubset<T, PersonCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonCompanies
     * const personCompany = await prisma.personCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonCompanyUpdateManyArgs>(args: SelectSubset<T, PersonCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonCompany.
     * @param {PersonCompanyUpsertArgs} args - Arguments to update or create a PersonCompany.
     * @example
     * // Update or create a PersonCompany
     * const personCompany = await prisma.personCompany.upsert({
     *   create: {
     *     // ... data to create a PersonCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonCompany we want to update
     *   }
     * })
     */
    upsert<T extends PersonCompanyUpsertArgs>(args: SelectSubset<T, PersonCompanyUpsertArgs<ExtArgs>>): Prisma__PersonCompanyClient<$Result.GetResult<Prisma.$PersonCompanyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PersonCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCompanyCountArgs} args - Arguments to filter PersonCompanies to count.
     * @example
     * // Count the number of PersonCompanies
     * const count = await prisma.personCompany.count({
     *   where: {
     *     // ... the filter for the PersonCompanies we want to count
     *   }
     * })
    **/
    count<T extends PersonCompanyCountArgs>(
      args?: Subset<T, PersonCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonCompanyAggregateArgs>(args: Subset<T, PersonCompanyAggregateArgs>): Prisma.PrismaPromise<GetPersonCompanyAggregateType<T>>

    /**
     * Group by PersonCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCompanyGroupByArgs} args - Group by arguments.
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
      T extends PersonCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonCompanyGroupByArgs['orderBy'] }
        : { orderBy?: PersonCompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonCompany model
   */
  readonly fields: PersonCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PersonCompany model
   */ 
  interface PersonCompanyFieldRefs {
    readonly personId: FieldRef<"PersonCompany", 'String'>
    readonly companyId: FieldRef<"PersonCompany", 'String'>
    readonly relationship: FieldRef<"PersonCompany", 'String'>
    readonly current: FieldRef<"PersonCompany", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PersonCompany findUnique
   */
  export type PersonCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * Filter, which PersonCompany to fetch.
     */
    where: PersonCompanyWhereUniqueInput
  }

  /**
   * PersonCompany findUniqueOrThrow
   */
  export type PersonCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * Filter, which PersonCompany to fetch.
     */
    where: PersonCompanyWhereUniqueInput
  }

  /**
   * PersonCompany findFirst
   */
  export type PersonCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * Filter, which PersonCompany to fetch.
     */
    where?: PersonCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonCompanies to fetch.
     */
    orderBy?: PersonCompanyOrderByWithRelationInput | PersonCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonCompanies.
     */
    cursor?: PersonCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonCompanies.
     */
    distinct?: PersonCompanyScalarFieldEnum | PersonCompanyScalarFieldEnum[]
  }

  /**
   * PersonCompany findFirstOrThrow
   */
  export type PersonCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * Filter, which PersonCompany to fetch.
     */
    where?: PersonCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonCompanies to fetch.
     */
    orderBy?: PersonCompanyOrderByWithRelationInput | PersonCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonCompanies.
     */
    cursor?: PersonCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonCompanies.
     */
    distinct?: PersonCompanyScalarFieldEnum | PersonCompanyScalarFieldEnum[]
  }

  /**
   * PersonCompany findMany
   */
  export type PersonCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * Filter, which PersonCompanies to fetch.
     */
    where?: PersonCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonCompanies to fetch.
     */
    orderBy?: PersonCompanyOrderByWithRelationInput | PersonCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonCompanies.
     */
    cursor?: PersonCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonCompanies.
     */
    skip?: number
    distinct?: PersonCompanyScalarFieldEnum | PersonCompanyScalarFieldEnum[]
  }

  /**
   * PersonCompany create
   */
  export type PersonCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonCompany.
     */
    data: XOR<PersonCompanyCreateInput, PersonCompanyUncheckedCreateInput>
  }

  /**
   * PersonCompany createMany
   */
  export type PersonCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonCompanies.
     */
    data: PersonCompanyCreateManyInput | PersonCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonCompany createManyAndReturn
   */
  export type PersonCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PersonCompanies.
     */
    data: PersonCompanyCreateManyInput | PersonCompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonCompany update
   */
  export type PersonCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonCompany.
     */
    data: XOR<PersonCompanyUpdateInput, PersonCompanyUncheckedUpdateInput>
    /**
     * Choose, which PersonCompany to update.
     */
    where: PersonCompanyWhereUniqueInput
  }

  /**
   * PersonCompany updateMany
   */
  export type PersonCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonCompanies.
     */
    data: XOR<PersonCompanyUpdateManyMutationInput, PersonCompanyUncheckedUpdateManyInput>
    /**
     * Filter which PersonCompanies to update
     */
    where?: PersonCompanyWhereInput
  }

  /**
   * PersonCompany upsert
   */
  export type PersonCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonCompany to update in case it exists.
     */
    where: PersonCompanyWhereUniqueInput
    /**
     * In case the PersonCompany found by the `where` argument doesn't exist, create a new PersonCompany with this data.
     */
    create: XOR<PersonCompanyCreateInput, PersonCompanyUncheckedCreateInput>
    /**
     * In case the PersonCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonCompanyUpdateInput, PersonCompanyUncheckedUpdateInput>
  }

  /**
   * PersonCompany delete
   */
  export type PersonCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
    /**
     * Filter which PersonCompany to delete.
     */
    where: PersonCompanyWhereUniqueInput
  }

  /**
   * PersonCompany deleteMany
   */
  export type PersonCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonCompanies to delete
     */
    where?: PersonCompanyWhereInput
  }

  /**
   * PersonCompany without action
   */
  export type PersonCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCompany
     */
    select?: PersonCompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonCompanyInclude<ExtArgs> | null
  }


  /**
   * Model ContactData
   */

  export type AggregateContactData = {
    _count: ContactDataCountAggregateOutputType | null
    _min: ContactDataMinAggregateOutputType | null
    _max: ContactDataMaxAggregateOutputType | null
  }

  export type ContactDataMinAggregateOutputType = {
    id: string | null
    personId: string | null
    email: string | null
    phone: string | null
    emailStatus: $Enums.ContactStatus | null
    phoneStatus: $Enums.ContactStatus | null
    updatedAt: Date | null
  }

  export type ContactDataMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    email: string | null
    phone: string | null
    emailStatus: $Enums.ContactStatus | null
    phoneStatus: $Enums.ContactStatus | null
    updatedAt: Date | null
  }

  export type ContactDataCountAggregateOutputType = {
    id: number
    personId: number
    email: number
    phone: number
    emailStatus: number
    phoneStatus: number
    updatedAt: number
    _all: number
  }


  export type ContactDataMinAggregateInputType = {
    id?: true
    personId?: true
    email?: true
    phone?: true
    emailStatus?: true
    phoneStatus?: true
    updatedAt?: true
  }

  export type ContactDataMaxAggregateInputType = {
    id?: true
    personId?: true
    email?: true
    phone?: true
    emailStatus?: true
    phoneStatus?: true
    updatedAt?: true
  }

  export type ContactDataCountAggregateInputType = {
    id?: true
    personId?: true
    email?: true
    phone?: true
    emailStatus?: true
    phoneStatus?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactData to aggregate.
     */
    where?: ContactDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactData to fetch.
     */
    orderBy?: ContactDataOrderByWithRelationInput | ContactDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactData
    **/
    _count?: true | ContactDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactDataMaxAggregateInputType
  }

  export type GetContactDataAggregateType<T extends ContactDataAggregateArgs> = {
        [P in keyof T & keyof AggregateContactData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactData[P]>
      : GetScalarType<T[P], AggregateContactData[P]>
  }




  export type ContactDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactDataWhereInput
    orderBy?: ContactDataOrderByWithAggregationInput | ContactDataOrderByWithAggregationInput[]
    by: ContactDataScalarFieldEnum[] | ContactDataScalarFieldEnum
    having?: ContactDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactDataCountAggregateInputType | true
    _min?: ContactDataMinAggregateInputType
    _max?: ContactDataMaxAggregateInputType
  }

  export type ContactDataGroupByOutputType = {
    id: string
    personId: string
    email: string | null
    phone: string | null
    emailStatus: $Enums.ContactStatus
    phoneStatus: $Enums.ContactStatus
    updatedAt: Date
    _count: ContactDataCountAggregateOutputType | null
    _min: ContactDataMinAggregateOutputType | null
    _max: ContactDataMaxAggregateOutputType | null
  }

  type GetContactDataGroupByPayload<T extends ContactDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactDataGroupByOutputType[P]>
            : GetScalarType<T[P], ContactDataGroupByOutputType[P]>
        }
      >
    >


  export type ContactDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    email?: boolean
    phone?: boolean
    emailStatus?: boolean
    phoneStatus?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactData"]>

  export type ContactDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    email?: boolean
    phone?: boolean
    emailStatus?: boolean
    phoneStatus?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactData"]>

  export type ContactDataSelectScalar = {
    id?: boolean
    personId?: boolean
    email?: boolean
    phone?: boolean
    emailStatus?: boolean
    phoneStatus?: boolean
    updatedAt?: boolean
  }

  export type ContactDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ContactDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $ContactDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactData"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      email: string | null
      phone: string | null
      emailStatus: $Enums.ContactStatus
      phoneStatus: $Enums.ContactStatus
      updatedAt: Date
    }, ExtArgs["result"]["contactData"]>
    composites: {}
  }

  type ContactDataGetPayload<S extends boolean | null | undefined | ContactDataDefaultArgs> = $Result.GetResult<Prisma.$ContactDataPayload, S>

  type ContactDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactDataCountAggregateInputType | true
    }

  export interface ContactDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactData'], meta: { name: 'ContactData' } }
    /**
     * Find zero or one ContactData that matches the filter.
     * @param {ContactDataFindUniqueArgs} args - Arguments to find a ContactData
     * @example
     * // Get one ContactData
     * const contactData = await prisma.contactData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactDataFindUniqueArgs>(args: SelectSubset<T, ContactDataFindUniqueArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContactData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactDataFindUniqueOrThrowArgs} args - Arguments to find a ContactData
     * @example
     * // Get one ContactData
     * const contactData = await prisma.contactData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContactData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDataFindFirstArgs} args - Arguments to find a ContactData
     * @example
     * // Get one ContactData
     * const contactData = await prisma.contactData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactDataFindFirstArgs>(args?: SelectSubset<T, ContactDataFindFirstArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContactData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDataFindFirstOrThrowArgs} args - Arguments to find a ContactData
     * @example
     * // Get one ContactData
     * const contactData = await prisma.contactData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContactData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactData
     * const contactData = await prisma.contactData.findMany()
     * 
     * // Get first 10 ContactData
     * const contactData = await prisma.contactData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactDataWithIdOnly = await prisma.contactData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactDataFindManyArgs>(args?: SelectSubset<T, ContactDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContactData.
     * @param {ContactDataCreateArgs} args - Arguments to create a ContactData.
     * @example
     * // Create one ContactData
     * const ContactData = await prisma.contactData.create({
     *   data: {
     *     // ... data to create a ContactData
     *   }
     * })
     * 
     */
    create<T extends ContactDataCreateArgs>(args: SelectSubset<T, ContactDataCreateArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContactData.
     * @param {ContactDataCreateManyArgs} args - Arguments to create many ContactData.
     * @example
     * // Create many ContactData
     * const contactData = await prisma.contactData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactDataCreateManyArgs>(args?: SelectSubset<T, ContactDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactData and returns the data saved in the database.
     * @param {ContactDataCreateManyAndReturnArgs} args - Arguments to create many ContactData.
     * @example
     * // Create many ContactData
     * const contactData = await prisma.contactData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactData and only return the `id`
     * const contactDataWithIdOnly = await prisma.contactData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactDataCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContactData.
     * @param {ContactDataDeleteArgs} args - Arguments to delete one ContactData.
     * @example
     * // Delete one ContactData
     * const ContactData = await prisma.contactData.delete({
     *   where: {
     *     // ... filter to delete one ContactData
     *   }
     * })
     * 
     */
    delete<T extends ContactDataDeleteArgs>(args: SelectSubset<T, ContactDataDeleteArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContactData.
     * @param {ContactDataUpdateArgs} args - Arguments to update one ContactData.
     * @example
     * // Update one ContactData
     * const contactData = await prisma.contactData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactDataUpdateArgs>(args: SelectSubset<T, ContactDataUpdateArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContactData.
     * @param {ContactDataDeleteManyArgs} args - Arguments to filter ContactData to delete.
     * @example
     * // Delete a few ContactData
     * const { count } = await prisma.contactData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDataDeleteManyArgs>(args?: SelectSubset<T, ContactDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactData
     * const contactData = await prisma.contactData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactDataUpdateManyArgs>(args: SelectSubset<T, ContactDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactData.
     * @param {ContactDataUpsertArgs} args - Arguments to update or create a ContactData.
     * @example
     * // Update or create a ContactData
     * const contactData = await prisma.contactData.upsert({
     *   create: {
     *     // ... data to create a ContactData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactData we want to update
     *   }
     * })
     */
    upsert<T extends ContactDataUpsertArgs>(args: SelectSubset<T, ContactDataUpsertArgs<ExtArgs>>): Prisma__ContactDataClient<$Result.GetResult<Prisma.$ContactDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContactData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDataCountArgs} args - Arguments to filter ContactData to count.
     * @example
     * // Count the number of ContactData
     * const count = await prisma.contactData.count({
     *   where: {
     *     // ... the filter for the ContactData we want to count
     *   }
     * })
    **/
    count<T extends ContactDataCountArgs>(
      args?: Subset<T, ContactDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactDataAggregateArgs>(args: Subset<T, ContactDataAggregateArgs>): Prisma.PrismaPromise<GetContactDataAggregateType<T>>

    /**
     * Group by ContactData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactDataGroupByArgs} args - Group by arguments.
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
      T extends ContactDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactDataGroupByArgs['orderBy'] }
        : { orderBy?: ContactDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactData model
   */
  readonly fields: ContactDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ContactData model
   */ 
  interface ContactDataFieldRefs {
    readonly id: FieldRef<"ContactData", 'String'>
    readonly personId: FieldRef<"ContactData", 'String'>
    readonly email: FieldRef<"ContactData", 'String'>
    readonly phone: FieldRef<"ContactData", 'String'>
    readonly emailStatus: FieldRef<"ContactData", 'ContactStatus'>
    readonly phoneStatus: FieldRef<"ContactData", 'ContactStatus'>
    readonly updatedAt: FieldRef<"ContactData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactData findUnique
   */
  export type ContactDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * Filter, which ContactData to fetch.
     */
    where: ContactDataWhereUniqueInput
  }

  /**
   * ContactData findUniqueOrThrow
   */
  export type ContactDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * Filter, which ContactData to fetch.
     */
    where: ContactDataWhereUniqueInput
  }

  /**
   * ContactData findFirst
   */
  export type ContactDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * Filter, which ContactData to fetch.
     */
    where?: ContactDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactData to fetch.
     */
    orderBy?: ContactDataOrderByWithRelationInput | ContactDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactData.
     */
    cursor?: ContactDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactData.
     */
    distinct?: ContactDataScalarFieldEnum | ContactDataScalarFieldEnum[]
  }

  /**
   * ContactData findFirstOrThrow
   */
  export type ContactDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * Filter, which ContactData to fetch.
     */
    where?: ContactDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactData to fetch.
     */
    orderBy?: ContactDataOrderByWithRelationInput | ContactDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactData.
     */
    cursor?: ContactDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactData.
     */
    distinct?: ContactDataScalarFieldEnum | ContactDataScalarFieldEnum[]
  }

  /**
   * ContactData findMany
   */
  export type ContactDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * Filter, which ContactData to fetch.
     */
    where?: ContactDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactData to fetch.
     */
    orderBy?: ContactDataOrderByWithRelationInput | ContactDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactData.
     */
    cursor?: ContactDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactData.
     */
    skip?: number
    distinct?: ContactDataScalarFieldEnum | ContactDataScalarFieldEnum[]
  }

  /**
   * ContactData create
   */
  export type ContactDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactData.
     */
    data: XOR<ContactDataCreateInput, ContactDataUncheckedCreateInput>
  }

  /**
   * ContactData createMany
   */
  export type ContactDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactData.
     */
    data: ContactDataCreateManyInput | ContactDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactData createManyAndReturn
   */
  export type ContactDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContactData.
     */
    data: ContactDataCreateManyInput | ContactDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactData update
   */
  export type ContactDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactData.
     */
    data: XOR<ContactDataUpdateInput, ContactDataUncheckedUpdateInput>
    /**
     * Choose, which ContactData to update.
     */
    where: ContactDataWhereUniqueInput
  }

  /**
   * ContactData updateMany
   */
  export type ContactDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactData.
     */
    data: XOR<ContactDataUpdateManyMutationInput, ContactDataUncheckedUpdateManyInput>
    /**
     * Filter which ContactData to update
     */
    where?: ContactDataWhereInput
  }

  /**
   * ContactData upsert
   */
  export type ContactDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactData to update in case it exists.
     */
    where: ContactDataWhereUniqueInput
    /**
     * In case the ContactData found by the `where` argument doesn't exist, create a new ContactData with this data.
     */
    create: XOR<ContactDataCreateInput, ContactDataUncheckedCreateInput>
    /**
     * In case the ContactData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactDataUpdateInput, ContactDataUncheckedUpdateInput>
  }

  /**
   * ContactData delete
   */
  export type ContactDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
    /**
     * Filter which ContactData to delete.
     */
    where: ContactDataWhereUniqueInput
  }

  /**
   * ContactData deleteMany
   */
  export type ContactDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactData to delete
     */
    where?: ContactDataWhereInput
  }

  /**
   * ContactData without action
   */
  export type ContactDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactData
     */
    select?: ContactDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactDataInclude<ExtArgs> | null
  }


  /**
   * Model SocialProfile
   */

  export type AggregateSocialProfile = {
    _count: SocialProfileCountAggregateOutputType | null
    _min: SocialProfileMinAggregateOutputType | null
    _max: SocialProfileMaxAggregateOutputType | null
  }

  export type SocialProfileMinAggregateOutputType = {
    id: string | null
    personId: string | null
    platform: string | null
    profileUrl: string | null
    createdAt: Date | null
  }

  export type SocialProfileMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    platform: string | null
    profileUrl: string | null
    createdAt: Date | null
  }

  export type SocialProfileCountAggregateOutputType = {
    id: number
    personId: number
    platform: number
    profileUrl: number
    createdAt: number
    _all: number
  }


  export type SocialProfileMinAggregateInputType = {
    id?: true
    personId?: true
    platform?: true
    profileUrl?: true
    createdAt?: true
  }

  export type SocialProfileMaxAggregateInputType = {
    id?: true
    personId?: true
    platform?: true
    profileUrl?: true
    createdAt?: true
  }

  export type SocialProfileCountAggregateInputType = {
    id?: true
    personId?: true
    platform?: true
    profileUrl?: true
    createdAt?: true
    _all?: true
  }

  export type SocialProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialProfile to aggregate.
     */
    where?: SocialProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialProfiles to fetch.
     */
    orderBy?: SocialProfileOrderByWithRelationInput | SocialProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialProfiles
    **/
    _count?: true | SocialProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialProfileMaxAggregateInputType
  }

  export type GetSocialProfileAggregateType<T extends SocialProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialProfile[P]>
      : GetScalarType<T[P], AggregateSocialProfile[P]>
  }




  export type SocialProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialProfileWhereInput
    orderBy?: SocialProfileOrderByWithAggregationInput | SocialProfileOrderByWithAggregationInput[]
    by: SocialProfileScalarFieldEnum[] | SocialProfileScalarFieldEnum
    having?: SocialProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialProfileCountAggregateInputType | true
    _min?: SocialProfileMinAggregateInputType
    _max?: SocialProfileMaxAggregateInputType
  }

  export type SocialProfileGroupByOutputType = {
    id: string
    personId: string
    platform: string
    profileUrl: string
    createdAt: Date
    _count: SocialProfileCountAggregateOutputType | null
    _min: SocialProfileMinAggregateOutputType | null
    _max: SocialProfileMaxAggregateOutputType | null
  }

  type GetSocialProfileGroupByPayload<T extends SocialProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SocialProfileGroupByOutputType[P]>
        }
      >
    >


  export type SocialProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    platform?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialProfile"]>

  export type SocialProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    platform?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialProfile"]>

  export type SocialProfileSelectScalar = {
    id?: boolean
    personId?: boolean
    platform?: boolean
    profileUrl?: boolean
    createdAt?: boolean
  }

  export type SocialProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type SocialProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $SocialProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialProfile"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      platform: string
      profileUrl: string
      createdAt: Date
    }, ExtArgs["result"]["socialProfile"]>
    composites: {}
  }

  type SocialProfileGetPayload<S extends boolean | null | undefined | SocialProfileDefaultArgs> = $Result.GetResult<Prisma.$SocialProfilePayload, S>

  type SocialProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialProfileCountAggregateInputType | true
    }

  export interface SocialProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialProfile'], meta: { name: 'SocialProfile' } }
    /**
     * Find zero or one SocialProfile that matches the filter.
     * @param {SocialProfileFindUniqueArgs} args - Arguments to find a SocialProfile
     * @example
     * // Get one SocialProfile
     * const socialProfile = await prisma.socialProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialProfileFindUniqueArgs>(args: SelectSubset<T, SocialProfileFindUniqueArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SocialProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocialProfileFindUniqueOrThrowArgs} args - Arguments to find a SocialProfile
     * @example
     * // Get one SocialProfile
     * const socialProfile = await prisma.socialProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SocialProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialProfileFindFirstArgs} args - Arguments to find a SocialProfile
     * @example
     * // Get one SocialProfile
     * const socialProfile = await prisma.socialProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialProfileFindFirstArgs>(args?: SelectSubset<T, SocialProfileFindFirstArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SocialProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialProfileFindFirstOrThrowArgs} args - Arguments to find a SocialProfile
     * @example
     * // Get one SocialProfile
     * const socialProfile = await prisma.socialProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SocialProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialProfiles
     * const socialProfiles = await prisma.socialProfile.findMany()
     * 
     * // Get first 10 SocialProfiles
     * const socialProfiles = await prisma.socialProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialProfileWithIdOnly = await prisma.socialProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialProfileFindManyArgs>(args?: SelectSubset<T, SocialProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SocialProfile.
     * @param {SocialProfileCreateArgs} args - Arguments to create a SocialProfile.
     * @example
     * // Create one SocialProfile
     * const SocialProfile = await prisma.socialProfile.create({
     *   data: {
     *     // ... data to create a SocialProfile
     *   }
     * })
     * 
     */
    create<T extends SocialProfileCreateArgs>(args: SelectSubset<T, SocialProfileCreateArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SocialProfiles.
     * @param {SocialProfileCreateManyArgs} args - Arguments to create many SocialProfiles.
     * @example
     * // Create many SocialProfiles
     * const socialProfile = await prisma.socialProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialProfileCreateManyArgs>(args?: SelectSubset<T, SocialProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialProfiles and returns the data saved in the database.
     * @param {SocialProfileCreateManyAndReturnArgs} args - Arguments to create many SocialProfiles.
     * @example
     * // Create many SocialProfiles
     * const socialProfile = await prisma.socialProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialProfiles and only return the `id`
     * const socialProfileWithIdOnly = await prisma.socialProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SocialProfile.
     * @param {SocialProfileDeleteArgs} args - Arguments to delete one SocialProfile.
     * @example
     * // Delete one SocialProfile
     * const SocialProfile = await prisma.socialProfile.delete({
     *   where: {
     *     // ... filter to delete one SocialProfile
     *   }
     * })
     * 
     */
    delete<T extends SocialProfileDeleteArgs>(args: SelectSubset<T, SocialProfileDeleteArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SocialProfile.
     * @param {SocialProfileUpdateArgs} args - Arguments to update one SocialProfile.
     * @example
     * // Update one SocialProfile
     * const socialProfile = await prisma.socialProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialProfileUpdateArgs>(args: SelectSubset<T, SocialProfileUpdateArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SocialProfiles.
     * @param {SocialProfileDeleteManyArgs} args - Arguments to filter SocialProfiles to delete.
     * @example
     * // Delete a few SocialProfiles
     * const { count } = await prisma.socialProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialProfileDeleteManyArgs>(args?: SelectSubset<T, SocialProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialProfiles
     * const socialProfile = await prisma.socialProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialProfileUpdateManyArgs>(args: SelectSubset<T, SocialProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialProfile.
     * @param {SocialProfileUpsertArgs} args - Arguments to update or create a SocialProfile.
     * @example
     * // Update or create a SocialProfile
     * const socialProfile = await prisma.socialProfile.upsert({
     *   create: {
     *     // ... data to create a SocialProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialProfile we want to update
     *   }
     * })
     */
    upsert<T extends SocialProfileUpsertArgs>(args: SelectSubset<T, SocialProfileUpsertArgs<ExtArgs>>): Prisma__SocialProfileClient<$Result.GetResult<Prisma.$SocialProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SocialProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialProfileCountArgs} args - Arguments to filter SocialProfiles to count.
     * @example
     * // Count the number of SocialProfiles
     * const count = await prisma.socialProfile.count({
     *   where: {
     *     // ... the filter for the SocialProfiles we want to count
     *   }
     * })
    **/
    count<T extends SocialProfileCountArgs>(
      args?: Subset<T, SocialProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialProfileAggregateArgs>(args: Subset<T, SocialProfileAggregateArgs>): Prisma.PrismaPromise<GetSocialProfileAggregateType<T>>

    /**
     * Group by SocialProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialProfileGroupByArgs} args - Group by arguments.
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
      T extends SocialProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialProfileGroupByArgs['orderBy'] }
        : { orderBy?: SocialProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialProfile model
   */
  readonly fields: SocialProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SocialProfile model
   */ 
  interface SocialProfileFieldRefs {
    readonly id: FieldRef<"SocialProfile", 'String'>
    readonly personId: FieldRef<"SocialProfile", 'String'>
    readonly platform: FieldRef<"SocialProfile", 'String'>
    readonly profileUrl: FieldRef<"SocialProfile", 'String'>
    readonly createdAt: FieldRef<"SocialProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialProfile findUnique
   */
  export type SocialProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * Filter, which SocialProfile to fetch.
     */
    where: SocialProfileWhereUniqueInput
  }

  /**
   * SocialProfile findUniqueOrThrow
   */
  export type SocialProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * Filter, which SocialProfile to fetch.
     */
    where: SocialProfileWhereUniqueInput
  }

  /**
   * SocialProfile findFirst
   */
  export type SocialProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * Filter, which SocialProfile to fetch.
     */
    where?: SocialProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialProfiles to fetch.
     */
    orderBy?: SocialProfileOrderByWithRelationInput | SocialProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialProfiles.
     */
    cursor?: SocialProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialProfiles.
     */
    distinct?: SocialProfileScalarFieldEnum | SocialProfileScalarFieldEnum[]
  }

  /**
   * SocialProfile findFirstOrThrow
   */
  export type SocialProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * Filter, which SocialProfile to fetch.
     */
    where?: SocialProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialProfiles to fetch.
     */
    orderBy?: SocialProfileOrderByWithRelationInput | SocialProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialProfiles.
     */
    cursor?: SocialProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialProfiles.
     */
    distinct?: SocialProfileScalarFieldEnum | SocialProfileScalarFieldEnum[]
  }

  /**
   * SocialProfile findMany
   */
  export type SocialProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * Filter, which SocialProfiles to fetch.
     */
    where?: SocialProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialProfiles to fetch.
     */
    orderBy?: SocialProfileOrderByWithRelationInput | SocialProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialProfiles.
     */
    cursor?: SocialProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialProfiles.
     */
    skip?: number
    distinct?: SocialProfileScalarFieldEnum | SocialProfileScalarFieldEnum[]
  }

  /**
   * SocialProfile create
   */
  export type SocialProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialProfile.
     */
    data: XOR<SocialProfileCreateInput, SocialProfileUncheckedCreateInput>
  }

  /**
   * SocialProfile createMany
   */
  export type SocialProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialProfiles.
     */
    data: SocialProfileCreateManyInput | SocialProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialProfile createManyAndReturn
   */
  export type SocialProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SocialProfiles.
     */
    data: SocialProfileCreateManyInput | SocialProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialProfile update
   */
  export type SocialProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialProfile.
     */
    data: XOR<SocialProfileUpdateInput, SocialProfileUncheckedUpdateInput>
    /**
     * Choose, which SocialProfile to update.
     */
    where: SocialProfileWhereUniqueInput
  }

  /**
   * SocialProfile updateMany
   */
  export type SocialProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialProfiles.
     */
    data: XOR<SocialProfileUpdateManyMutationInput, SocialProfileUncheckedUpdateManyInput>
    /**
     * Filter which SocialProfiles to update
     */
    where?: SocialProfileWhereInput
  }

  /**
   * SocialProfile upsert
   */
  export type SocialProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialProfile to update in case it exists.
     */
    where: SocialProfileWhereUniqueInput
    /**
     * In case the SocialProfile found by the `where` argument doesn't exist, create a new SocialProfile with this data.
     */
    create: XOR<SocialProfileCreateInput, SocialProfileUncheckedCreateInput>
    /**
     * In case the SocialProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialProfileUpdateInput, SocialProfileUncheckedUpdateInput>
  }

  /**
   * SocialProfile delete
   */
  export type SocialProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
    /**
     * Filter which SocialProfile to delete.
     */
    where: SocialProfileWhereUniqueInput
  }

  /**
   * SocialProfile deleteMany
   */
  export type SocialProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialProfiles to delete
     */
    where?: SocialProfileWhereInput
  }

  /**
   * SocialProfile without action
   */
  export type SocialProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialProfile
     */
    select?: SocialProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialProfileInclude<ExtArgs> | null
  }


  /**
   * Model ResearchResult
   */

  export type AggregateResearchResult = {
    _count: ResearchResultCountAggregateOutputType | null
    _avg: ResearchResultAvgAggregateOutputType | null
    _sum: ResearchResultSumAggregateOutputType | null
    _min: ResearchResultMinAggregateOutputType | null
    _max: ResearchResultMaxAggregateOutputType | null
  }

  export type ResearchResultAvgAggregateOutputType = {
    relevanceScore: number | null
    confidenceScore: number | null
  }

  export type ResearchResultSumAggregateOutputType = {
    relevanceScore: number | null
    confidenceScore: number | null
  }

  export type ResearchResultMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    personId: string | null
    keyword: string | null
    relevanceScore: number | null
    confidenceScore: number | null
    relevanceReasons: string | null
    confidenceReasons: string | null
    createdAt: Date | null
  }

  export type ResearchResultMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    personId: string | null
    keyword: string | null
    relevanceScore: number | null
    confidenceScore: number | null
    relevanceReasons: string | null
    confidenceReasons: string | null
    createdAt: Date | null
  }

  export type ResearchResultCountAggregateOutputType = {
    id: number
    jobId: number
    personId: number
    keyword: number
    relevanceScore: number
    confidenceScore: number
    relevanceReasons: number
    confidenceReasons: number
    createdAt: number
    _all: number
  }


  export type ResearchResultAvgAggregateInputType = {
    relevanceScore?: true
    confidenceScore?: true
  }

  export type ResearchResultSumAggregateInputType = {
    relevanceScore?: true
    confidenceScore?: true
  }

  export type ResearchResultMinAggregateInputType = {
    id?: true
    jobId?: true
    personId?: true
    keyword?: true
    relevanceScore?: true
    confidenceScore?: true
    relevanceReasons?: true
    confidenceReasons?: true
    createdAt?: true
  }

  export type ResearchResultMaxAggregateInputType = {
    id?: true
    jobId?: true
    personId?: true
    keyword?: true
    relevanceScore?: true
    confidenceScore?: true
    relevanceReasons?: true
    confidenceReasons?: true
    createdAt?: true
  }

  export type ResearchResultCountAggregateInputType = {
    id?: true
    jobId?: true
    personId?: true
    keyword?: true
    relevanceScore?: true
    confidenceScore?: true
    relevanceReasons?: true
    confidenceReasons?: true
    createdAt?: true
    _all?: true
  }

  export type ResearchResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchResult to aggregate.
     */
    where?: ResearchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchResults to fetch.
     */
    orderBy?: ResearchResultOrderByWithRelationInput | ResearchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchResults
    **/
    _count?: true | ResearchResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResearchResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResearchResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchResultMaxAggregateInputType
  }

  export type GetResearchResultAggregateType<T extends ResearchResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchResult[P]>
      : GetScalarType<T[P], AggregateResearchResult[P]>
  }




  export type ResearchResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchResultWhereInput
    orderBy?: ResearchResultOrderByWithAggregationInput | ResearchResultOrderByWithAggregationInput[]
    by: ResearchResultScalarFieldEnum[] | ResearchResultScalarFieldEnum
    having?: ResearchResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchResultCountAggregateInputType | true
    _avg?: ResearchResultAvgAggregateInputType
    _sum?: ResearchResultSumAggregateInputType
    _min?: ResearchResultMinAggregateInputType
    _max?: ResearchResultMaxAggregateInputType
  }

  export type ResearchResultGroupByOutputType = {
    id: string
    jobId: string
    personId: string
    keyword: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons: string | null
    confidenceReasons: string | null
    createdAt: Date
    _count: ResearchResultCountAggregateOutputType | null
    _avg: ResearchResultAvgAggregateOutputType | null
    _sum: ResearchResultSumAggregateOutputType | null
    _min: ResearchResultMinAggregateOutputType | null
    _max: ResearchResultMaxAggregateOutputType | null
  }

  type GetResearchResultGroupByPayload<T extends ResearchResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchResultGroupByOutputType[P]>
        }
      >
    >


  export type ResearchResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    personId?: boolean
    keyword?: boolean
    relevanceScore?: boolean
    confidenceScore?: boolean
    relevanceReasons?: boolean
    confidenceReasons?: boolean
    createdAt?: boolean
    job?: boolean | ResearchJobDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researchResult"]>

  export type ResearchResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    personId?: boolean
    keyword?: boolean
    relevanceScore?: boolean
    confidenceScore?: boolean
    relevanceReasons?: boolean
    confidenceReasons?: boolean
    createdAt?: boolean
    job?: boolean | ResearchJobDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researchResult"]>

  export type ResearchResultSelectScalar = {
    id?: boolean
    jobId?: boolean
    personId?: boolean
    keyword?: boolean
    relevanceScore?: boolean
    confidenceScore?: boolean
    relevanceReasons?: boolean
    confidenceReasons?: boolean
    createdAt?: boolean
  }

  export type ResearchResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | ResearchJobDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ResearchResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | ResearchJobDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $ResearchResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResearchResult"
    objects: {
      job: Prisma.$ResearchJobPayload<ExtArgs>
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      personId: string
      keyword: string | null
      relevanceScore: number
      confidenceScore: number
      relevanceReasons: string | null
      confidenceReasons: string | null
      createdAt: Date
    }, ExtArgs["result"]["researchResult"]>
    composites: {}
  }

  type ResearchResultGetPayload<S extends boolean | null | undefined | ResearchResultDefaultArgs> = $Result.GetResult<Prisma.$ResearchResultPayload, S>

  type ResearchResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResearchResultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResearchResultCountAggregateInputType | true
    }

  export interface ResearchResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResearchResult'], meta: { name: 'ResearchResult' } }
    /**
     * Find zero or one ResearchResult that matches the filter.
     * @param {ResearchResultFindUniqueArgs} args - Arguments to find a ResearchResult
     * @example
     * // Get one ResearchResult
     * const researchResult = await prisma.researchResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearchResultFindUniqueArgs>(args: SelectSubset<T, ResearchResultFindUniqueArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResearchResult that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResearchResultFindUniqueOrThrowArgs} args - Arguments to find a ResearchResult
     * @example
     * // Get one ResearchResult
     * const researchResult = await prisma.researchResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearchResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearchResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResearchResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchResultFindFirstArgs} args - Arguments to find a ResearchResult
     * @example
     * // Get one ResearchResult
     * const researchResult = await prisma.researchResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearchResultFindFirstArgs>(args?: SelectSubset<T, ResearchResultFindFirstArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResearchResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchResultFindFirstOrThrowArgs} args - Arguments to find a ResearchResult
     * @example
     * // Get one ResearchResult
     * const researchResult = await prisma.researchResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearchResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearchResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResearchResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchResults
     * const researchResults = await prisma.researchResult.findMany()
     * 
     * // Get first 10 ResearchResults
     * const researchResults = await prisma.researchResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchResultWithIdOnly = await prisma.researchResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResearchResultFindManyArgs>(args?: SelectSubset<T, ResearchResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResearchResult.
     * @param {ResearchResultCreateArgs} args - Arguments to create a ResearchResult.
     * @example
     * // Create one ResearchResult
     * const ResearchResult = await prisma.researchResult.create({
     *   data: {
     *     // ... data to create a ResearchResult
     *   }
     * })
     * 
     */
    create<T extends ResearchResultCreateArgs>(args: SelectSubset<T, ResearchResultCreateArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResearchResults.
     * @param {ResearchResultCreateManyArgs} args - Arguments to create many ResearchResults.
     * @example
     * // Create many ResearchResults
     * const researchResult = await prisma.researchResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearchResultCreateManyArgs>(args?: SelectSubset<T, ResearchResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResearchResults and returns the data saved in the database.
     * @param {ResearchResultCreateManyAndReturnArgs} args - Arguments to create many ResearchResults.
     * @example
     * // Create many ResearchResults
     * const researchResult = await prisma.researchResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResearchResults and only return the `id`
     * const researchResultWithIdOnly = await prisma.researchResult.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResearchResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResearchResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResearchResult.
     * @param {ResearchResultDeleteArgs} args - Arguments to delete one ResearchResult.
     * @example
     * // Delete one ResearchResult
     * const ResearchResult = await prisma.researchResult.delete({
     *   where: {
     *     // ... filter to delete one ResearchResult
     *   }
     * })
     * 
     */
    delete<T extends ResearchResultDeleteArgs>(args: SelectSubset<T, ResearchResultDeleteArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResearchResult.
     * @param {ResearchResultUpdateArgs} args - Arguments to update one ResearchResult.
     * @example
     * // Update one ResearchResult
     * const researchResult = await prisma.researchResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearchResultUpdateArgs>(args: SelectSubset<T, ResearchResultUpdateArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResearchResults.
     * @param {ResearchResultDeleteManyArgs} args - Arguments to filter ResearchResults to delete.
     * @example
     * // Delete a few ResearchResults
     * const { count } = await prisma.researchResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearchResultDeleteManyArgs>(args?: SelectSubset<T, ResearchResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchResults
     * const researchResult = await prisma.researchResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearchResultUpdateManyArgs>(args: SelectSubset<T, ResearchResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResearchResult.
     * @param {ResearchResultUpsertArgs} args - Arguments to update or create a ResearchResult.
     * @example
     * // Update or create a ResearchResult
     * const researchResult = await prisma.researchResult.upsert({
     *   create: {
     *     // ... data to create a ResearchResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchResult we want to update
     *   }
     * })
     */
    upsert<T extends ResearchResultUpsertArgs>(args: SelectSubset<T, ResearchResultUpsertArgs<ExtArgs>>): Prisma__ResearchResultClient<$Result.GetResult<Prisma.$ResearchResultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResearchResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchResultCountArgs} args - Arguments to filter ResearchResults to count.
     * @example
     * // Count the number of ResearchResults
     * const count = await prisma.researchResult.count({
     *   where: {
     *     // ... the filter for the ResearchResults we want to count
     *   }
     * })
    **/
    count<T extends ResearchResultCountArgs>(
      args?: Subset<T, ResearchResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchResultAggregateArgs>(args: Subset<T, ResearchResultAggregateArgs>): Prisma.PrismaPromise<GetResearchResultAggregateType<T>>

    /**
     * Group by ResearchResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchResultGroupByArgs} args - Group by arguments.
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
      T extends ResearchResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchResultGroupByArgs['orderBy'] }
        : { orderBy?: ResearchResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResearchResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResearchResult model
   */
  readonly fields: ResearchResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearchResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends ResearchJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResearchJobDefaultArgs<ExtArgs>>): Prisma__ResearchJobClient<$Result.GetResult<Prisma.$ResearchJobPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ResearchResult model
   */ 
  interface ResearchResultFieldRefs {
    readonly id: FieldRef<"ResearchResult", 'String'>
    readonly jobId: FieldRef<"ResearchResult", 'String'>
    readonly personId: FieldRef<"ResearchResult", 'String'>
    readonly keyword: FieldRef<"ResearchResult", 'String'>
    readonly relevanceScore: FieldRef<"ResearchResult", 'Int'>
    readonly confidenceScore: FieldRef<"ResearchResult", 'Int'>
    readonly relevanceReasons: FieldRef<"ResearchResult", 'String'>
    readonly confidenceReasons: FieldRef<"ResearchResult", 'String'>
    readonly createdAt: FieldRef<"ResearchResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResearchResult findUnique
   */
  export type ResearchResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * Filter, which ResearchResult to fetch.
     */
    where: ResearchResultWhereUniqueInput
  }

  /**
   * ResearchResult findUniqueOrThrow
   */
  export type ResearchResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * Filter, which ResearchResult to fetch.
     */
    where: ResearchResultWhereUniqueInput
  }

  /**
   * ResearchResult findFirst
   */
  export type ResearchResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * Filter, which ResearchResult to fetch.
     */
    where?: ResearchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchResults to fetch.
     */
    orderBy?: ResearchResultOrderByWithRelationInput | ResearchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchResults.
     */
    cursor?: ResearchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchResults.
     */
    distinct?: ResearchResultScalarFieldEnum | ResearchResultScalarFieldEnum[]
  }

  /**
   * ResearchResult findFirstOrThrow
   */
  export type ResearchResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * Filter, which ResearchResult to fetch.
     */
    where?: ResearchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchResults to fetch.
     */
    orderBy?: ResearchResultOrderByWithRelationInput | ResearchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchResults.
     */
    cursor?: ResearchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchResults.
     */
    distinct?: ResearchResultScalarFieldEnum | ResearchResultScalarFieldEnum[]
  }

  /**
   * ResearchResult findMany
   */
  export type ResearchResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * Filter, which ResearchResults to fetch.
     */
    where?: ResearchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchResults to fetch.
     */
    orderBy?: ResearchResultOrderByWithRelationInput | ResearchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchResults.
     */
    cursor?: ResearchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchResults.
     */
    skip?: number
    distinct?: ResearchResultScalarFieldEnum | ResearchResultScalarFieldEnum[]
  }

  /**
   * ResearchResult create
   */
  export type ResearchResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ResearchResult.
     */
    data: XOR<ResearchResultCreateInput, ResearchResultUncheckedCreateInput>
  }

  /**
   * ResearchResult createMany
   */
  export type ResearchResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResearchResults.
     */
    data: ResearchResultCreateManyInput | ResearchResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResearchResult createManyAndReturn
   */
  export type ResearchResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResearchResults.
     */
    data: ResearchResultCreateManyInput | ResearchResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResearchResult update
   */
  export type ResearchResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ResearchResult.
     */
    data: XOR<ResearchResultUpdateInput, ResearchResultUncheckedUpdateInput>
    /**
     * Choose, which ResearchResult to update.
     */
    where: ResearchResultWhereUniqueInput
  }

  /**
   * ResearchResult updateMany
   */
  export type ResearchResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResearchResults.
     */
    data: XOR<ResearchResultUpdateManyMutationInput, ResearchResultUncheckedUpdateManyInput>
    /**
     * Filter which ResearchResults to update
     */
    where?: ResearchResultWhereInput
  }

  /**
   * ResearchResult upsert
   */
  export type ResearchResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ResearchResult to update in case it exists.
     */
    where: ResearchResultWhereUniqueInput
    /**
     * In case the ResearchResult found by the `where` argument doesn't exist, create a new ResearchResult with this data.
     */
    create: XOR<ResearchResultCreateInput, ResearchResultUncheckedCreateInput>
    /**
     * In case the ResearchResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearchResultUpdateInput, ResearchResultUncheckedUpdateInput>
  }

  /**
   * ResearchResult delete
   */
  export type ResearchResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
    /**
     * Filter which ResearchResult to delete.
     */
    where: ResearchResultWhereUniqueInput
  }

  /**
   * ResearchResult deleteMany
   */
  export type ResearchResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchResults to delete
     */
    where?: ResearchResultWhereInput
  }

  /**
   * ResearchResult without action
   */
  export type ResearchResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchResult
     */
    select?: ResearchResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchResultInclude<ExtArgs> | null
  }


  /**
   * Model Source
   */

  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceMinAggregateOutputType = {
    id: string | null
    personId: string | null
    sourceType: $Enums.SourceType | null
    sourceUrl: string | null
    sourceStatus: string | null
    discoveredAt: Date | null
  }

  export type SourceMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    sourceType: $Enums.SourceType | null
    sourceUrl: string | null
    sourceStatus: string | null
    discoveredAt: Date | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    personId: number
    sourceType: number
    sourceUrl: number
    sourceStatus: number
    discoveredAt: number
    _all: number
  }


  export type SourceMinAggregateInputType = {
    id?: true
    personId?: true
    sourceType?: true
    sourceUrl?: true
    sourceStatus?: true
    discoveredAt?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    personId?: true
    sourceType?: true
    sourceUrl?: true
    sourceStatus?: true
    discoveredAt?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    personId?: true
    sourceType?: true
    sourceUrl?: true
    sourceStatus?: true
    discoveredAt?: true
    _all?: true
  }

  export type SourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Source to aggregate.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithAggregationInput | SourceOrderByWithAggregationInput[]
    by: SourceScalarFieldEnum[] | SourceScalarFieldEnum
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }

  export type SourceGroupByOutputType = {
    id: string
    personId: string
    sourceType: $Enums.SourceType
    sourceUrl: string | null
    sourceStatus: string
    discoveredAt: Date
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    sourceStatus?: boolean
    discoveredAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    sourceStatus?: boolean
    discoveredAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectScalar = {
    id?: boolean
    personId?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    sourceStatus?: boolean
    discoveredAt?: boolean
  }

  export type SourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type SourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $SourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Source"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      sourceType: $Enums.SourceType
      sourceUrl: string | null
      sourceStatus: string
      discoveredAt: Date
    }, ExtArgs["result"]["source"]>
    composites: {}
  }

  type SourceGetPayload<S extends boolean | null | undefined | SourceDefaultArgs> = $Result.GetResult<Prisma.$SourcePayload, S>

  type SourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SourceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SourceCountAggregateInputType | true
    }

  export interface SourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Source'], meta: { name: 'Source' } }
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFindUniqueArgs>(args: SelectSubset<T, SourceFindUniqueArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Source that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SourceFindUniqueOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFindFirstArgs>(args?: SelectSubset<T, SourceFindFirstArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFindManyArgs>(args?: SelectSubset<T, SourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
     */
    create<T extends SourceCreateArgs>(args: SelectSubset<T, SourceCreateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sources.
     * @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCreateManyArgs>(args?: SelectSubset<T, SourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {SourceCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
     */
    delete<T extends SourceDeleteArgs>(args: SelectSubset<T, SourceDeleteArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUpdateArgs>(args: SelectSubset<T, SourceUpdateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDeleteManyArgs>(args?: SelectSubset<T, SourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUpdateManyArgs>(args: SelectSubset<T, SourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
     */
    upsert<T extends SourceUpsertArgs>(args: SelectSubset<T, SourceUpsertArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): Prisma.PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
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
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Source model
   */
  readonly fields: SourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Source model
   */ 
  interface SourceFieldRefs {
    readonly id: FieldRef<"Source", 'String'>
    readonly personId: FieldRef<"Source", 'String'>
    readonly sourceType: FieldRef<"Source", 'SourceType'>
    readonly sourceUrl: FieldRef<"Source", 'String'>
    readonly sourceStatus: FieldRef<"Source", 'String'>
    readonly discoveredAt: FieldRef<"Source", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findUniqueOrThrow
   */
  export type SourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findFirstOrThrow
   */
  export type SourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findMany
   */
  export type SourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Sources to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source create
   */
  export type SourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Source.
     */
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }

  /**
   * Source createMany
   */
  export type SourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Source createManyAndReturn
   */
  export type SourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Source update
   */
  export type SourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Source.
     */
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
  }

  /**
   * Source upsert
   */
  export type SourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Source to update in case it exists.
     */
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     */
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }

  /**
   * Source delete
   */
  export type SourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter which Source to delete.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sources to delete
     */
    where?: SourceWhereInput
  }

  /**
   * Source without action
   */
  export type SourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
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


  export const ResearchJobScalarFieldEnum: {
    id: 'id',
    query: 'query',
    mode: 'mode',
    status: 'status',
    requestedCount: 'requestedCount',
    foundCount: 'foundCount',
    errorMessage: 'errorMessage',
    progressStage: 'progressStage',
    progressPercent: 'progressPercent',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type ResearchJobScalarFieldEnum = (typeof ResearchJobScalarFieldEnum)[keyof typeof ResearchJobScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    jobTitle: 'jobTitle',
    location: 'location',
    linkedinUrl: 'linkedinUrl',
    isDemo: 'isDemo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    website: 'website',
    industry: 'industry',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const PersonCompanyScalarFieldEnum: {
    personId: 'personId',
    companyId: 'companyId',
    relationship: 'relationship',
    current: 'current'
  };

  export type PersonCompanyScalarFieldEnum = (typeof PersonCompanyScalarFieldEnum)[keyof typeof PersonCompanyScalarFieldEnum]


  export const ContactDataScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    email: 'email',
    phone: 'phone',
    emailStatus: 'emailStatus',
    phoneStatus: 'phoneStatus',
    updatedAt: 'updatedAt'
  };

  export type ContactDataScalarFieldEnum = (typeof ContactDataScalarFieldEnum)[keyof typeof ContactDataScalarFieldEnum]


  export const SocialProfileScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    platform: 'platform',
    profileUrl: 'profileUrl',
    createdAt: 'createdAt'
  };

  export type SocialProfileScalarFieldEnum = (typeof SocialProfileScalarFieldEnum)[keyof typeof SocialProfileScalarFieldEnum]


  export const ResearchResultScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    personId: 'personId',
    keyword: 'keyword',
    relevanceScore: 'relevanceScore',
    confidenceScore: 'confidenceScore',
    relevanceReasons: 'relevanceReasons',
    confidenceReasons: 'confidenceReasons',
    createdAt: 'createdAt'
  };

  export type ResearchResultScalarFieldEnum = (typeof ResearchResultScalarFieldEnum)[keyof typeof ResearchResultScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    sourceType: 'sourceType',
    sourceUrl: 'sourceUrl',
    sourceStatus: 'sourceStatus',
    discoveredAt: 'discoveredAt'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


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
   * Reference to a field of type 'JobMode'
   */
  export type EnumJobModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobMode'>
    


  /**
   * Reference to a field of type 'JobMode[]'
   */
  export type ListEnumJobModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobMode[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ContactStatus'
   */
  export type EnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus'>
    


  /**
   * Reference to a field of type 'ContactStatus[]'
   */
  export type ListEnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus[]'>
    


  /**
   * Reference to a field of type 'SourceType'
   */
  export type EnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType'>
    


  /**
   * Reference to a field of type 'SourceType[]'
   */
  export type ListEnumSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ResearchJobWhereInput = {
    AND?: ResearchJobWhereInput | ResearchJobWhereInput[]
    OR?: ResearchJobWhereInput[]
    NOT?: ResearchJobWhereInput | ResearchJobWhereInput[]
    id?: StringFilter<"ResearchJob"> | string
    query?: StringFilter<"ResearchJob"> | string
    mode?: EnumJobModeFilter<"ResearchJob"> | $Enums.JobMode
    status?: EnumJobStatusFilter<"ResearchJob"> | $Enums.JobStatus
    requestedCount?: IntFilter<"ResearchJob"> | number
    foundCount?: IntFilter<"ResearchJob"> | number
    errorMessage?: StringNullableFilter<"ResearchJob"> | string | null
    progressStage?: StringNullableFilter<"ResearchJob"> | string | null
    progressPercent?: IntFilter<"ResearchJob"> | number
    createdAt?: DateTimeFilter<"ResearchJob"> | Date | string
    startedAt?: DateTimeNullableFilter<"ResearchJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ResearchJob"> | Date | string | null
    results?: ResearchResultListRelationFilter
  }

  export type ResearchJobOrderByWithRelationInput = {
    id?: SortOrder
    query?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    requestedCount?: SortOrder
    foundCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    progressStage?: SortOrderInput | SortOrder
    progressPercent?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    results?: ResearchResultOrderByRelationAggregateInput
  }

  export type ResearchJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResearchJobWhereInput | ResearchJobWhereInput[]
    OR?: ResearchJobWhereInput[]
    NOT?: ResearchJobWhereInput | ResearchJobWhereInput[]
    query?: StringFilter<"ResearchJob"> | string
    mode?: EnumJobModeFilter<"ResearchJob"> | $Enums.JobMode
    status?: EnumJobStatusFilter<"ResearchJob"> | $Enums.JobStatus
    requestedCount?: IntFilter<"ResearchJob"> | number
    foundCount?: IntFilter<"ResearchJob"> | number
    errorMessage?: StringNullableFilter<"ResearchJob"> | string | null
    progressStage?: StringNullableFilter<"ResearchJob"> | string | null
    progressPercent?: IntFilter<"ResearchJob"> | number
    createdAt?: DateTimeFilter<"ResearchJob"> | Date | string
    startedAt?: DateTimeNullableFilter<"ResearchJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ResearchJob"> | Date | string | null
    results?: ResearchResultListRelationFilter
  }, "id">

  export type ResearchJobOrderByWithAggregationInput = {
    id?: SortOrder
    query?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    requestedCount?: SortOrder
    foundCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    progressStage?: SortOrderInput | SortOrder
    progressPercent?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ResearchJobCountOrderByAggregateInput
    _avg?: ResearchJobAvgOrderByAggregateInput
    _max?: ResearchJobMaxOrderByAggregateInput
    _min?: ResearchJobMinOrderByAggregateInput
    _sum?: ResearchJobSumOrderByAggregateInput
  }

  export type ResearchJobScalarWhereWithAggregatesInput = {
    AND?: ResearchJobScalarWhereWithAggregatesInput | ResearchJobScalarWhereWithAggregatesInput[]
    OR?: ResearchJobScalarWhereWithAggregatesInput[]
    NOT?: ResearchJobScalarWhereWithAggregatesInput | ResearchJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResearchJob"> | string
    query?: StringWithAggregatesFilter<"ResearchJob"> | string
    mode?: EnumJobModeWithAggregatesFilter<"ResearchJob"> | $Enums.JobMode
    status?: EnumJobStatusWithAggregatesFilter<"ResearchJob"> | $Enums.JobStatus
    requestedCount?: IntWithAggregatesFilter<"ResearchJob"> | number
    foundCount?: IntWithAggregatesFilter<"ResearchJob"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"ResearchJob"> | string | null
    progressStage?: StringNullableWithAggregatesFilter<"ResearchJob"> | string | null
    progressPercent?: IntWithAggregatesFilter<"ResearchJob"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ResearchJob"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ResearchJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ResearchJob"> | Date | string | null
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    jobTitle?: StringNullableFilter<"Person"> | string | null
    location?: StringNullableFilter<"Person"> | string | null
    linkedinUrl?: StringNullableFilter<"Person"> | string | null
    isDemo?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    companies?: PersonCompanyListRelationFilter
    contactData?: XOR<ContactDataNullableRelationFilter, ContactDataWhereInput> | null
    socialProfiles?: SocialProfileListRelationFilter
    results?: ResearchResultListRelationFilter
    sources?: SourceListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companies?: PersonCompanyOrderByRelationAggregateInput
    contactData?: ContactDataOrderByWithRelationInput
    socialProfiles?: SocialProfileOrderByRelationAggregateInput
    results?: ResearchResultOrderByRelationAggregateInput
    sources?: SourceOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    linkedinUrl?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    jobTitle?: StringNullableFilter<"Person"> | string | null
    location?: StringNullableFilter<"Person"> | string | null
    isDemo?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    companies?: PersonCompanyListRelationFilter
    contactData?: XOR<ContactDataNullableRelationFilter, ContactDataWhereInput> | null
    socialProfiles?: SocialProfileListRelationFilter
    results?: ResearchResultListRelationFilter
    sources?: SourceListRelationFilter
  }, "id" | "linkedinUrl">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    name?: StringWithAggregatesFilter<"Person"> | string
    jobTitle?: StringNullableWithAggregatesFilter<"Person"> | string | null
    location?: StringNullableWithAggregatesFilter<"Person"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"Person"> | string | null
    isDemo?: BoolWithAggregatesFilter<"Person"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    website?: StringNullableFilter<"Company"> | string | null
    industry?: StringNullableFilter<"Company"> | string | null
    location?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    people?: PersonCompanyListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    people?: PersonCompanyOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_website?: CompanyNameWebsiteCompoundUniqueInput
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    website?: StringNullableFilter<"Company"> | string | null
    industry?: StringNullableFilter<"Company"> | string | null
    location?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    people?: PersonCompanyListRelationFilter
  }, "id" | "name_website">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Company"> | string | null
    location?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type PersonCompanyWhereInput = {
    AND?: PersonCompanyWhereInput | PersonCompanyWhereInput[]
    OR?: PersonCompanyWhereInput[]
    NOT?: PersonCompanyWhereInput | PersonCompanyWhereInput[]
    personId?: StringFilter<"PersonCompany"> | string
    companyId?: StringFilter<"PersonCompany"> | string
    relationship?: StringNullableFilter<"PersonCompany"> | string | null
    current?: BoolFilter<"PersonCompany"> | boolean
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type PersonCompanyOrderByWithRelationInput = {
    personId?: SortOrder
    companyId?: SortOrder
    relationship?: SortOrderInput | SortOrder
    current?: SortOrder
    person?: PersonOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type PersonCompanyWhereUniqueInput = Prisma.AtLeast<{
    personId_companyId?: PersonCompanyPersonIdCompanyIdCompoundUniqueInput
    AND?: PersonCompanyWhereInput | PersonCompanyWhereInput[]
    OR?: PersonCompanyWhereInput[]
    NOT?: PersonCompanyWhereInput | PersonCompanyWhereInput[]
    personId?: StringFilter<"PersonCompany"> | string
    companyId?: StringFilter<"PersonCompany"> | string
    relationship?: StringNullableFilter<"PersonCompany"> | string | null
    current?: BoolFilter<"PersonCompany"> | boolean
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "personId_companyId">

  export type PersonCompanyOrderByWithAggregationInput = {
    personId?: SortOrder
    companyId?: SortOrder
    relationship?: SortOrderInput | SortOrder
    current?: SortOrder
    _count?: PersonCompanyCountOrderByAggregateInput
    _max?: PersonCompanyMaxOrderByAggregateInput
    _min?: PersonCompanyMinOrderByAggregateInput
  }

  export type PersonCompanyScalarWhereWithAggregatesInput = {
    AND?: PersonCompanyScalarWhereWithAggregatesInput | PersonCompanyScalarWhereWithAggregatesInput[]
    OR?: PersonCompanyScalarWhereWithAggregatesInput[]
    NOT?: PersonCompanyScalarWhereWithAggregatesInput | PersonCompanyScalarWhereWithAggregatesInput[]
    personId?: StringWithAggregatesFilter<"PersonCompany"> | string
    companyId?: StringWithAggregatesFilter<"PersonCompany"> | string
    relationship?: StringNullableWithAggregatesFilter<"PersonCompany"> | string | null
    current?: BoolWithAggregatesFilter<"PersonCompany"> | boolean
  }

  export type ContactDataWhereInput = {
    AND?: ContactDataWhereInput | ContactDataWhereInput[]
    OR?: ContactDataWhereInput[]
    NOT?: ContactDataWhereInput | ContactDataWhereInput[]
    id?: StringFilter<"ContactData"> | string
    personId?: StringFilter<"ContactData"> | string
    email?: StringNullableFilter<"ContactData"> | string | null
    phone?: StringNullableFilter<"ContactData"> | string | null
    emailStatus?: EnumContactStatusFilter<"ContactData"> | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFilter<"ContactData"> | $Enums.ContactStatus
    updatedAt?: DateTimeFilter<"ContactData"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type ContactDataOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emailStatus?: SortOrder
    phoneStatus?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type ContactDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    personId?: string
    AND?: ContactDataWhereInput | ContactDataWhereInput[]
    OR?: ContactDataWhereInput[]
    NOT?: ContactDataWhereInput | ContactDataWhereInput[]
    email?: StringNullableFilter<"ContactData"> | string | null
    phone?: StringNullableFilter<"ContactData"> | string | null
    emailStatus?: EnumContactStatusFilter<"ContactData"> | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFilter<"ContactData"> | $Enums.ContactStatus
    updatedAt?: DateTimeFilter<"ContactData"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id" | "personId">

  export type ContactDataOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emailStatus?: SortOrder
    phoneStatus?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactDataCountOrderByAggregateInput
    _max?: ContactDataMaxOrderByAggregateInput
    _min?: ContactDataMinOrderByAggregateInput
  }

  export type ContactDataScalarWhereWithAggregatesInput = {
    AND?: ContactDataScalarWhereWithAggregatesInput | ContactDataScalarWhereWithAggregatesInput[]
    OR?: ContactDataScalarWhereWithAggregatesInput[]
    NOT?: ContactDataScalarWhereWithAggregatesInput | ContactDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactData"> | string
    personId?: StringWithAggregatesFilter<"ContactData"> | string
    email?: StringNullableWithAggregatesFilter<"ContactData"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ContactData"> | string | null
    emailStatus?: EnumContactStatusWithAggregatesFilter<"ContactData"> | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusWithAggregatesFilter<"ContactData"> | $Enums.ContactStatus
    updatedAt?: DateTimeWithAggregatesFilter<"ContactData"> | Date | string
  }

  export type SocialProfileWhereInput = {
    AND?: SocialProfileWhereInput | SocialProfileWhereInput[]
    OR?: SocialProfileWhereInput[]
    NOT?: SocialProfileWhereInput | SocialProfileWhereInput[]
    id?: StringFilter<"SocialProfile"> | string
    personId?: StringFilter<"SocialProfile"> | string
    platform?: StringFilter<"SocialProfile"> | string
    profileUrl?: StringFilter<"SocialProfile"> | string
    createdAt?: DateTimeFilter<"SocialProfile"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type SocialProfileOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    platform?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type SocialProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    personId_platform?: SocialProfilePersonIdPlatformCompoundUniqueInput
    AND?: SocialProfileWhereInput | SocialProfileWhereInput[]
    OR?: SocialProfileWhereInput[]
    NOT?: SocialProfileWhereInput | SocialProfileWhereInput[]
    personId?: StringFilter<"SocialProfile"> | string
    platform?: StringFilter<"SocialProfile"> | string
    profileUrl?: StringFilter<"SocialProfile"> | string
    createdAt?: DateTimeFilter<"SocialProfile"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id" | "personId_platform">

  export type SocialProfileOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    platform?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    _count?: SocialProfileCountOrderByAggregateInput
    _max?: SocialProfileMaxOrderByAggregateInput
    _min?: SocialProfileMinOrderByAggregateInput
  }

  export type SocialProfileScalarWhereWithAggregatesInput = {
    AND?: SocialProfileScalarWhereWithAggregatesInput | SocialProfileScalarWhereWithAggregatesInput[]
    OR?: SocialProfileScalarWhereWithAggregatesInput[]
    NOT?: SocialProfileScalarWhereWithAggregatesInput | SocialProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialProfile"> | string
    personId?: StringWithAggregatesFilter<"SocialProfile"> | string
    platform?: StringWithAggregatesFilter<"SocialProfile"> | string
    profileUrl?: StringWithAggregatesFilter<"SocialProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialProfile"> | Date | string
  }

  export type ResearchResultWhereInput = {
    AND?: ResearchResultWhereInput | ResearchResultWhereInput[]
    OR?: ResearchResultWhereInput[]
    NOT?: ResearchResultWhereInput | ResearchResultWhereInput[]
    id?: StringFilter<"ResearchResult"> | string
    jobId?: StringFilter<"ResearchResult"> | string
    personId?: StringFilter<"ResearchResult"> | string
    keyword?: StringNullableFilter<"ResearchResult"> | string | null
    relevanceScore?: IntFilter<"ResearchResult"> | number
    confidenceScore?: IntFilter<"ResearchResult"> | number
    relevanceReasons?: StringNullableFilter<"ResearchResult"> | string | null
    confidenceReasons?: StringNullableFilter<"ResearchResult"> | string | null
    createdAt?: DateTimeFilter<"ResearchResult"> | Date | string
    job?: XOR<ResearchJobRelationFilter, ResearchJobWhereInput>
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type ResearchResultOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    personId?: SortOrder
    keyword?: SortOrderInput | SortOrder
    relevanceScore?: SortOrder
    confidenceScore?: SortOrder
    relevanceReasons?: SortOrderInput | SortOrder
    confidenceReasons?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    job?: ResearchJobOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
  }

  export type ResearchResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId_personId?: ResearchResultJobIdPersonIdCompoundUniqueInput
    AND?: ResearchResultWhereInput | ResearchResultWhereInput[]
    OR?: ResearchResultWhereInput[]
    NOT?: ResearchResultWhereInput | ResearchResultWhereInput[]
    jobId?: StringFilter<"ResearchResult"> | string
    personId?: StringFilter<"ResearchResult"> | string
    keyword?: StringNullableFilter<"ResearchResult"> | string | null
    relevanceScore?: IntFilter<"ResearchResult"> | number
    confidenceScore?: IntFilter<"ResearchResult"> | number
    relevanceReasons?: StringNullableFilter<"ResearchResult"> | string | null
    confidenceReasons?: StringNullableFilter<"ResearchResult"> | string | null
    createdAt?: DateTimeFilter<"ResearchResult"> | Date | string
    job?: XOR<ResearchJobRelationFilter, ResearchJobWhereInput>
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id" | "jobId_personId">

  export type ResearchResultOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    personId?: SortOrder
    keyword?: SortOrderInput | SortOrder
    relevanceScore?: SortOrder
    confidenceScore?: SortOrder
    relevanceReasons?: SortOrderInput | SortOrder
    confidenceReasons?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResearchResultCountOrderByAggregateInput
    _avg?: ResearchResultAvgOrderByAggregateInput
    _max?: ResearchResultMaxOrderByAggregateInput
    _min?: ResearchResultMinOrderByAggregateInput
    _sum?: ResearchResultSumOrderByAggregateInput
  }

  export type ResearchResultScalarWhereWithAggregatesInput = {
    AND?: ResearchResultScalarWhereWithAggregatesInput | ResearchResultScalarWhereWithAggregatesInput[]
    OR?: ResearchResultScalarWhereWithAggregatesInput[]
    NOT?: ResearchResultScalarWhereWithAggregatesInput | ResearchResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResearchResult"> | string
    jobId?: StringWithAggregatesFilter<"ResearchResult"> | string
    personId?: StringWithAggregatesFilter<"ResearchResult"> | string
    keyword?: StringNullableWithAggregatesFilter<"ResearchResult"> | string | null
    relevanceScore?: IntWithAggregatesFilter<"ResearchResult"> | number
    confidenceScore?: IntWithAggregatesFilter<"ResearchResult"> | number
    relevanceReasons?: StringNullableWithAggregatesFilter<"ResearchResult"> | string | null
    confidenceReasons?: StringNullableWithAggregatesFilter<"ResearchResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ResearchResult"> | Date | string
  }

  export type SourceWhereInput = {
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    id?: StringFilter<"Source"> | string
    personId?: StringFilter<"Source"> | string
    sourceType?: EnumSourceTypeFilter<"Source"> | $Enums.SourceType
    sourceUrl?: StringNullableFilter<"Source"> | string | null
    sourceStatus?: StringFilter<"Source"> | string
    discoveredAt?: DateTimeFilter<"Source"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceStatus?: SortOrder
    discoveredAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type SourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    personId?: StringFilter<"Source"> | string
    sourceType?: EnumSourceTypeFilter<"Source"> | $Enums.SourceType
    sourceUrl?: StringNullableFilter<"Source"> | string | null
    sourceStatus?: StringFilter<"Source"> | string
    discoveredAt?: DateTimeFilter<"Source"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id">

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceStatus?: SortOrder
    discoveredAt?: SortOrder
    _count?: SourceCountOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    OR?: SourceScalarWhereWithAggregatesInput[]
    NOT?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Source"> | string
    personId?: StringWithAggregatesFilter<"Source"> | string
    sourceType?: EnumSourceTypeWithAggregatesFilter<"Source"> | $Enums.SourceType
    sourceUrl?: StringNullableWithAggregatesFilter<"Source"> | string | null
    sourceStatus?: StringWithAggregatesFilter<"Source"> | string
    discoveredAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
  }

  export type ResearchJobCreateInput = {
    id?: string
    query: string
    mode: $Enums.JobMode
    status?: $Enums.JobStatus
    requestedCount?: number
    foundCount?: number
    errorMessage?: string | null
    progressStage?: string | null
    progressPercent?: number
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    results?: ResearchResultCreateNestedManyWithoutJobInput
  }

  export type ResearchJobUncheckedCreateInput = {
    id?: string
    query: string
    mode: $Enums.JobMode
    status?: $Enums.JobStatus
    requestedCount?: number
    foundCount?: number
    errorMessage?: string | null
    progressStage?: string | null
    progressPercent?: number
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    results?: ResearchResultUncheckedCreateNestedManyWithoutJobInput
  }

  export type ResearchJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    mode?: EnumJobModeFieldUpdateOperationsInput | $Enums.JobMode
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    requestedCount?: IntFieldUpdateOperationsInput | number
    foundCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    progressStage?: NullableStringFieldUpdateOperationsInput | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResearchResultUpdateManyWithoutJobNestedInput
  }

  export type ResearchJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    mode?: EnumJobModeFieldUpdateOperationsInput | $Enums.JobMode
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    requestedCount?: IntFieldUpdateOperationsInput | number
    foundCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    progressStage?: NullableStringFieldUpdateOperationsInput | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResearchResultUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ResearchJobCreateManyInput = {
    id?: string
    query: string
    mode: $Enums.JobMode
    status?: $Enums.JobStatus
    requestedCount?: number
    foundCount?: number
    errorMessage?: string | null
    progressStage?: string | null
    progressPercent?: number
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ResearchJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    mode?: EnumJobModeFieldUpdateOperationsInput | $Enums.JobMode
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    requestedCount?: IntFieldUpdateOperationsInput | number
    foundCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    progressStage?: NullableStringFieldUpdateOperationsInput | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResearchJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    mode?: EnumJobModeFieldUpdateOperationsInput | $Enums.JobMode
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    requestedCount?: IntFieldUpdateOperationsInput | number
    foundCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    progressStage?: NullableStringFieldUpdateOperationsInput | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonCreateInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyCreateNestedManyWithoutPersonInput
    contactData?: ContactDataCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileCreateNestedManyWithoutPersonInput
    results?: ResearchResultCreateNestedManyWithoutPersonInput
    sources?: SourceCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyUncheckedCreateNestedManyWithoutPersonInput
    contactData?: ContactDataUncheckedCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileUncheckedCreateNestedManyWithoutPersonInput
    results?: ResearchResultUncheckedCreateNestedManyWithoutPersonInput
    sources?: SourceUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUpdateManyWithoutPersonNestedInput
    sources?: SourceUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUncheckedUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUncheckedUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUncheckedUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUncheckedUpdateManyWithoutPersonNestedInput
    sources?: SourceUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    website?: string | null
    industry?: string | null
    location?: string | null
    createdAt?: Date | string
    people?: PersonCompanyCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    website?: string | null
    industry?: string | null
    location?: string | null
    createdAt?: Date | string
    people?: PersonCompanyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonCompanyUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonCompanyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    website?: string | null
    industry?: string | null
    location?: string | null
    createdAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCompanyCreateInput = {
    relationship?: string | null
    current?: boolean
    person: PersonCreateNestedOneWithoutCompaniesInput
    company: CompanyCreateNestedOneWithoutPeopleInput
  }

  export type PersonCompanyUncheckedCreateInput = {
    personId: string
    companyId: string
    relationship?: string | null
    current?: boolean
  }

  export type PersonCompanyUpdateInput = {
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    person?: PersonUpdateOneRequiredWithoutCompaniesNestedInput
    company?: CompanyUpdateOneRequiredWithoutPeopleNestedInput
  }

  export type PersonCompanyUncheckedUpdateInput = {
    personId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonCompanyCreateManyInput = {
    personId: string
    companyId: string
    relationship?: string | null
    current?: boolean
  }

  export type PersonCompanyUpdateManyMutationInput = {
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonCompanyUncheckedUpdateManyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactDataCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    emailStatus?: $Enums.ContactStatus
    phoneStatus?: $Enums.ContactStatus
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutContactDataInput
  }

  export type ContactDataUncheckedCreateInput = {
    id?: string
    personId: string
    email?: string | null
    phone?: string | null
    emailStatus?: $Enums.ContactStatus
    phoneStatus?: $Enums.ContactStatus
    updatedAt?: Date | string
  }

  export type ContactDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutContactDataNestedInput
  }

  export type ContactDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactDataCreateManyInput = {
    id?: string
    personId: string
    email?: string | null
    phone?: string | null
    emailStatus?: $Enums.ContactStatus
    phoneStatus?: $Enums.ContactStatus
    updatedAt?: Date | string
  }

  export type ContactDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialProfileCreateInput = {
    id?: string
    platform: string
    profileUrl: string
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutSocialProfilesInput
  }

  export type SocialProfileUncheckedCreateInput = {
    id?: string
    personId: string
    platform: string
    profileUrl: string
    createdAt?: Date | string
  }

  export type SocialProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSocialProfilesNestedInput
  }

  export type SocialProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialProfileCreateManyInput = {
    id?: string
    personId: string
    platform: string
    profileUrl: string
    createdAt?: Date | string
  }

  export type SocialProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchResultCreateInput = {
    id?: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
    job: ResearchJobCreateNestedOneWithoutResultsInput
    person: PersonCreateNestedOneWithoutResultsInput
  }

  export type ResearchResultUncheckedCreateInput = {
    id?: string
    jobId: string
    personId: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
  }

  export type ResearchResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ResearchJobUpdateOneRequiredWithoutResultsNestedInput
    person?: PersonUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResearchResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchResultCreateManyInput = {
    id?: string
    jobId: string
    personId: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
  }

  export type ResearchResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceCreateInput = {
    id?: string
    sourceType: $Enums.SourceType
    sourceUrl?: string | null
    sourceStatus?: string
    discoveredAt?: Date | string
    person: PersonCreateNestedOneWithoutSourcesInput
  }

  export type SourceUncheckedCreateInput = {
    id?: string
    personId: string
    sourceType: $Enums.SourceType
    sourceUrl?: string | null
    sourceStatus?: string
    discoveredAt?: Date | string
  }

  export type SourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceStatus?: StringFieldUpdateOperationsInput | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSourcesNestedInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceStatus?: StringFieldUpdateOperationsInput | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceCreateManyInput = {
    id?: string
    personId: string
    sourceType: $Enums.SourceType
    sourceUrl?: string | null
    sourceStatus?: string
    discoveredAt?: Date | string
  }

  export type SourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceStatus?: StringFieldUpdateOperationsInput | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceStatus?: StringFieldUpdateOperationsInput | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumJobModeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobMode | EnumJobModeFieldRefInput<$PrismaModel>
    in?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobModeFilter<$PrismaModel> | $Enums.JobMode
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ResearchResultListRelationFilter = {
    every?: ResearchResultWhereInput
    some?: ResearchResultWhereInput
    none?: ResearchResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResearchResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResearchJobCountOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    requestedCount?: SortOrder
    foundCount?: SortOrder
    errorMessage?: SortOrder
    progressStage?: SortOrder
    progressPercent?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ResearchJobAvgOrderByAggregateInput = {
    requestedCount?: SortOrder
    foundCount?: SortOrder
    progressPercent?: SortOrder
  }

  export type ResearchJobMaxOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    requestedCount?: SortOrder
    foundCount?: SortOrder
    errorMessage?: SortOrder
    progressStage?: SortOrder
    progressPercent?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ResearchJobMinOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    requestedCount?: SortOrder
    foundCount?: SortOrder
    errorMessage?: SortOrder
    progressStage?: SortOrder
    progressPercent?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ResearchJobSumOrderByAggregateInput = {
    requestedCount?: SortOrder
    foundCount?: SortOrder
    progressPercent?: SortOrder
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

  export type EnumJobModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobMode | EnumJobModeFieldRefInput<$PrismaModel>
    in?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobModeWithAggregatesFilter<$PrismaModel> | $Enums.JobMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobModeFilter<$PrismaModel>
    _max?: NestedEnumJobModeFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonCompanyListRelationFilter = {
    every?: PersonCompanyWhereInput
    some?: PersonCompanyWhereInput
    none?: PersonCompanyWhereInput
  }

  export type ContactDataNullableRelationFilter = {
    is?: ContactDataWhereInput | null
    isNot?: ContactDataWhereInput | null
  }

  export type SocialProfileListRelationFilter = {
    every?: SocialProfileWhereInput
    some?: SocialProfileWhereInput
    none?: SocialProfileWhereInput
  }

  export type SourceListRelationFilter = {
    every?: SourceWhereInput
    some?: SourceWhereInput
    none?: SourceWhereInput
  }

  export type PersonCompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrder
    isDemo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanyNameWebsiteCompoundUniqueInput = {
    name: string
    website: string
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type PersonCompanyPersonIdCompanyIdCompoundUniqueInput = {
    personId: string
    companyId: string
  }

  export type PersonCompanyCountOrderByAggregateInput = {
    personId?: SortOrder
    companyId?: SortOrder
    relationship?: SortOrder
    current?: SortOrder
  }

  export type PersonCompanyMaxOrderByAggregateInput = {
    personId?: SortOrder
    companyId?: SortOrder
    relationship?: SortOrder
    current?: SortOrder
  }

  export type PersonCompanyMinOrderByAggregateInput = {
    personId?: SortOrder
    companyId?: SortOrder
    relationship?: SortOrder
    current?: SortOrder
  }

  export type EnumContactStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | EnumContactStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContactStatusFilter<$PrismaModel> | $Enums.ContactStatus
  }

  export type ContactDataCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailStatus?: SortOrder
    phoneStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactDataMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailStatus?: SortOrder
    phoneStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactDataMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailStatus?: SortOrder
    phoneStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumContactStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | EnumContactStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContactStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContactStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactStatusFilter<$PrismaModel>
    _max?: NestedEnumContactStatusFilter<$PrismaModel>
  }

  export type SocialProfilePersonIdPlatformCompoundUniqueInput = {
    personId: string
    platform: string
  }

  export type SocialProfileCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    platform?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    platform?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialProfileMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    platform?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ResearchJobRelationFilter = {
    is?: ResearchJobWhereInput
    isNot?: ResearchJobWhereInput
  }

  export type ResearchResultJobIdPersonIdCompoundUniqueInput = {
    jobId: string
    personId: string
  }

  export type ResearchResultCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    personId?: SortOrder
    keyword?: SortOrder
    relevanceScore?: SortOrder
    confidenceScore?: SortOrder
    relevanceReasons?: SortOrder
    confidenceReasons?: SortOrder
    createdAt?: SortOrder
  }

  export type ResearchResultAvgOrderByAggregateInput = {
    relevanceScore?: SortOrder
    confidenceScore?: SortOrder
  }

  export type ResearchResultMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    personId?: SortOrder
    keyword?: SortOrder
    relevanceScore?: SortOrder
    confidenceScore?: SortOrder
    relevanceReasons?: SortOrder
    confidenceReasons?: SortOrder
    createdAt?: SortOrder
  }

  export type ResearchResultMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    personId?: SortOrder
    keyword?: SortOrder
    relevanceScore?: SortOrder
    confidenceScore?: SortOrder
    relevanceReasons?: SortOrder
    confidenceReasons?: SortOrder
    createdAt?: SortOrder
  }

  export type ResearchResultSumOrderByAggregateInput = {
    relevanceScore?: SortOrder
    confidenceScore?: SortOrder
  }

  export type EnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceStatus?: SortOrder
    discoveredAt?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceStatus?: SortOrder
    discoveredAt?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    sourceStatus?: SortOrder
    discoveredAt?: SortOrder
  }

  export type EnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type ResearchResultCreateNestedManyWithoutJobInput = {
    create?: XOR<ResearchResultCreateWithoutJobInput, ResearchResultUncheckedCreateWithoutJobInput> | ResearchResultCreateWithoutJobInput[] | ResearchResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutJobInput | ResearchResultCreateOrConnectWithoutJobInput[]
    createMany?: ResearchResultCreateManyJobInputEnvelope
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
  }

  export type ResearchResultUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ResearchResultCreateWithoutJobInput, ResearchResultUncheckedCreateWithoutJobInput> | ResearchResultCreateWithoutJobInput[] | ResearchResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutJobInput | ResearchResultCreateOrConnectWithoutJobInput[]
    createMany?: ResearchResultCreateManyJobInputEnvelope
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumJobModeFieldUpdateOperationsInput = {
    set?: $Enums.JobMode
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ResearchResultUpdateManyWithoutJobNestedInput = {
    create?: XOR<ResearchResultCreateWithoutJobInput, ResearchResultUncheckedCreateWithoutJobInput> | ResearchResultCreateWithoutJobInput[] | ResearchResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutJobInput | ResearchResultCreateOrConnectWithoutJobInput[]
    upsert?: ResearchResultUpsertWithWhereUniqueWithoutJobInput | ResearchResultUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ResearchResultCreateManyJobInputEnvelope
    set?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    disconnect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    delete?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    update?: ResearchResultUpdateWithWhereUniqueWithoutJobInput | ResearchResultUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ResearchResultUpdateManyWithWhereWithoutJobInput | ResearchResultUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ResearchResultScalarWhereInput | ResearchResultScalarWhereInput[]
  }

  export type ResearchResultUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ResearchResultCreateWithoutJobInput, ResearchResultUncheckedCreateWithoutJobInput> | ResearchResultCreateWithoutJobInput[] | ResearchResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutJobInput | ResearchResultCreateOrConnectWithoutJobInput[]
    upsert?: ResearchResultUpsertWithWhereUniqueWithoutJobInput | ResearchResultUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ResearchResultCreateManyJobInputEnvelope
    set?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    disconnect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    delete?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    update?: ResearchResultUpdateWithWhereUniqueWithoutJobInput | ResearchResultUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ResearchResultUpdateManyWithWhereWithoutJobInput | ResearchResultUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ResearchResultScalarWhereInput | ResearchResultScalarWhereInput[]
  }

  export type PersonCompanyCreateNestedManyWithoutPersonInput = {
    create?: XOR<PersonCompanyCreateWithoutPersonInput, PersonCompanyUncheckedCreateWithoutPersonInput> | PersonCompanyCreateWithoutPersonInput[] | PersonCompanyUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutPersonInput | PersonCompanyCreateOrConnectWithoutPersonInput[]
    createMany?: PersonCompanyCreateManyPersonInputEnvelope
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
  }

  export type ContactDataCreateNestedOneWithoutPersonInput = {
    create?: XOR<ContactDataCreateWithoutPersonInput, ContactDataUncheckedCreateWithoutPersonInput>
    connectOrCreate?: ContactDataCreateOrConnectWithoutPersonInput
    connect?: ContactDataWhereUniqueInput
  }

  export type SocialProfileCreateNestedManyWithoutPersonInput = {
    create?: XOR<SocialProfileCreateWithoutPersonInput, SocialProfileUncheckedCreateWithoutPersonInput> | SocialProfileCreateWithoutPersonInput[] | SocialProfileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialProfileCreateOrConnectWithoutPersonInput | SocialProfileCreateOrConnectWithoutPersonInput[]
    createMany?: SocialProfileCreateManyPersonInputEnvelope
    connect?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
  }

  export type ResearchResultCreateNestedManyWithoutPersonInput = {
    create?: XOR<ResearchResultCreateWithoutPersonInput, ResearchResultUncheckedCreateWithoutPersonInput> | ResearchResultCreateWithoutPersonInput[] | ResearchResultUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutPersonInput | ResearchResultCreateOrConnectWithoutPersonInput[]
    createMany?: ResearchResultCreateManyPersonInputEnvelope
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
  }

  export type SourceCreateNestedManyWithoutPersonInput = {
    create?: XOR<SourceCreateWithoutPersonInput, SourceUncheckedCreateWithoutPersonInput> | SourceCreateWithoutPersonInput[] | SourceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutPersonInput | SourceCreateOrConnectWithoutPersonInput[]
    createMany?: SourceCreateManyPersonInputEnvelope
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
  }

  export type PersonCompanyUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PersonCompanyCreateWithoutPersonInput, PersonCompanyUncheckedCreateWithoutPersonInput> | PersonCompanyCreateWithoutPersonInput[] | PersonCompanyUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutPersonInput | PersonCompanyCreateOrConnectWithoutPersonInput[]
    createMany?: PersonCompanyCreateManyPersonInputEnvelope
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
  }

  export type ContactDataUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<ContactDataCreateWithoutPersonInput, ContactDataUncheckedCreateWithoutPersonInput>
    connectOrCreate?: ContactDataCreateOrConnectWithoutPersonInput
    connect?: ContactDataWhereUniqueInput
  }

  export type SocialProfileUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<SocialProfileCreateWithoutPersonInput, SocialProfileUncheckedCreateWithoutPersonInput> | SocialProfileCreateWithoutPersonInput[] | SocialProfileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialProfileCreateOrConnectWithoutPersonInput | SocialProfileCreateOrConnectWithoutPersonInput[]
    createMany?: SocialProfileCreateManyPersonInputEnvelope
    connect?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
  }

  export type ResearchResultUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<ResearchResultCreateWithoutPersonInput, ResearchResultUncheckedCreateWithoutPersonInput> | ResearchResultCreateWithoutPersonInput[] | ResearchResultUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutPersonInput | ResearchResultCreateOrConnectWithoutPersonInput[]
    createMany?: ResearchResultCreateManyPersonInputEnvelope
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
  }

  export type SourceUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<SourceCreateWithoutPersonInput, SourceUncheckedCreateWithoutPersonInput> | SourceCreateWithoutPersonInput[] | SourceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutPersonInput | SourceCreateOrConnectWithoutPersonInput[]
    createMany?: SourceCreateManyPersonInputEnvelope
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonCompanyUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PersonCompanyCreateWithoutPersonInput, PersonCompanyUncheckedCreateWithoutPersonInput> | PersonCompanyCreateWithoutPersonInput[] | PersonCompanyUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutPersonInput | PersonCompanyCreateOrConnectWithoutPersonInput[]
    upsert?: PersonCompanyUpsertWithWhereUniqueWithoutPersonInput | PersonCompanyUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PersonCompanyCreateManyPersonInputEnvelope
    set?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    disconnect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    delete?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    update?: PersonCompanyUpdateWithWhereUniqueWithoutPersonInput | PersonCompanyUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PersonCompanyUpdateManyWithWhereWithoutPersonInput | PersonCompanyUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PersonCompanyScalarWhereInput | PersonCompanyScalarWhereInput[]
  }

  export type ContactDataUpdateOneWithoutPersonNestedInput = {
    create?: XOR<ContactDataCreateWithoutPersonInput, ContactDataUncheckedCreateWithoutPersonInput>
    connectOrCreate?: ContactDataCreateOrConnectWithoutPersonInput
    upsert?: ContactDataUpsertWithoutPersonInput
    disconnect?: ContactDataWhereInput | boolean
    delete?: ContactDataWhereInput | boolean
    connect?: ContactDataWhereUniqueInput
    update?: XOR<XOR<ContactDataUpdateToOneWithWhereWithoutPersonInput, ContactDataUpdateWithoutPersonInput>, ContactDataUncheckedUpdateWithoutPersonInput>
  }

  export type SocialProfileUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SocialProfileCreateWithoutPersonInput, SocialProfileUncheckedCreateWithoutPersonInput> | SocialProfileCreateWithoutPersonInput[] | SocialProfileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialProfileCreateOrConnectWithoutPersonInput | SocialProfileCreateOrConnectWithoutPersonInput[]
    upsert?: SocialProfileUpsertWithWhereUniqueWithoutPersonInput | SocialProfileUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SocialProfileCreateManyPersonInputEnvelope
    set?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    disconnect?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    delete?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    connect?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    update?: SocialProfileUpdateWithWhereUniqueWithoutPersonInput | SocialProfileUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SocialProfileUpdateManyWithWhereWithoutPersonInput | SocialProfileUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SocialProfileScalarWhereInput | SocialProfileScalarWhereInput[]
  }

  export type ResearchResultUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ResearchResultCreateWithoutPersonInput, ResearchResultUncheckedCreateWithoutPersonInput> | ResearchResultCreateWithoutPersonInput[] | ResearchResultUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutPersonInput | ResearchResultCreateOrConnectWithoutPersonInput[]
    upsert?: ResearchResultUpsertWithWhereUniqueWithoutPersonInput | ResearchResultUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ResearchResultCreateManyPersonInputEnvelope
    set?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    disconnect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    delete?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    update?: ResearchResultUpdateWithWhereUniqueWithoutPersonInput | ResearchResultUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ResearchResultUpdateManyWithWhereWithoutPersonInput | ResearchResultUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ResearchResultScalarWhereInput | ResearchResultScalarWhereInput[]
  }

  export type SourceUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SourceCreateWithoutPersonInput, SourceUncheckedCreateWithoutPersonInput> | SourceCreateWithoutPersonInput[] | SourceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutPersonInput | SourceCreateOrConnectWithoutPersonInput[]
    upsert?: SourceUpsertWithWhereUniqueWithoutPersonInput | SourceUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SourceCreateManyPersonInputEnvelope
    set?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    disconnect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    delete?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    update?: SourceUpdateWithWhereUniqueWithoutPersonInput | SourceUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SourceUpdateManyWithWhereWithoutPersonInput | SourceUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SourceScalarWhereInput | SourceScalarWhereInput[]
  }

  export type PersonCompanyUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PersonCompanyCreateWithoutPersonInput, PersonCompanyUncheckedCreateWithoutPersonInput> | PersonCompanyCreateWithoutPersonInput[] | PersonCompanyUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutPersonInput | PersonCompanyCreateOrConnectWithoutPersonInput[]
    upsert?: PersonCompanyUpsertWithWhereUniqueWithoutPersonInput | PersonCompanyUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PersonCompanyCreateManyPersonInputEnvelope
    set?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    disconnect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    delete?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    update?: PersonCompanyUpdateWithWhereUniqueWithoutPersonInput | PersonCompanyUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PersonCompanyUpdateManyWithWhereWithoutPersonInput | PersonCompanyUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PersonCompanyScalarWhereInput | PersonCompanyScalarWhereInput[]
  }

  export type ContactDataUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<ContactDataCreateWithoutPersonInput, ContactDataUncheckedCreateWithoutPersonInput>
    connectOrCreate?: ContactDataCreateOrConnectWithoutPersonInput
    upsert?: ContactDataUpsertWithoutPersonInput
    disconnect?: ContactDataWhereInput | boolean
    delete?: ContactDataWhereInput | boolean
    connect?: ContactDataWhereUniqueInput
    update?: XOR<XOR<ContactDataUpdateToOneWithWhereWithoutPersonInput, ContactDataUpdateWithoutPersonInput>, ContactDataUncheckedUpdateWithoutPersonInput>
  }

  export type SocialProfileUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SocialProfileCreateWithoutPersonInput, SocialProfileUncheckedCreateWithoutPersonInput> | SocialProfileCreateWithoutPersonInput[] | SocialProfileUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialProfileCreateOrConnectWithoutPersonInput | SocialProfileCreateOrConnectWithoutPersonInput[]
    upsert?: SocialProfileUpsertWithWhereUniqueWithoutPersonInput | SocialProfileUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SocialProfileCreateManyPersonInputEnvelope
    set?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    disconnect?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    delete?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    connect?: SocialProfileWhereUniqueInput | SocialProfileWhereUniqueInput[]
    update?: SocialProfileUpdateWithWhereUniqueWithoutPersonInput | SocialProfileUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SocialProfileUpdateManyWithWhereWithoutPersonInput | SocialProfileUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SocialProfileScalarWhereInput | SocialProfileScalarWhereInput[]
  }

  export type ResearchResultUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ResearchResultCreateWithoutPersonInput, ResearchResultUncheckedCreateWithoutPersonInput> | ResearchResultCreateWithoutPersonInput[] | ResearchResultUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ResearchResultCreateOrConnectWithoutPersonInput | ResearchResultCreateOrConnectWithoutPersonInput[]
    upsert?: ResearchResultUpsertWithWhereUniqueWithoutPersonInput | ResearchResultUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ResearchResultCreateManyPersonInputEnvelope
    set?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    disconnect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    delete?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    connect?: ResearchResultWhereUniqueInput | ResearchResultWhereUniqueInput[]
    update?: ResearchResultUpdateWithWhereUniqueWithoutPersonInput | ResearchResultUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ResearchResultUpdateManyWithWhereWithoutPersonInput | ResearchResultUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ResearchResultScalarWhereInput | ResearchResultScalarWhereInput[]
  }

  export type SourceUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SourceCreateWithoutPersonInput, SourceUncheckedCreateWithoutPersonInput> | SourceCreateWithoutPersonInput[] | SourceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SourceCreateOrConnectWithoutPersonInput | SourceCreateOrConnectWithoutPersonInput[]
    upsert?: SourceUpsertWithWhereUniqueWithoutPersonInput | SourceUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SourceCreateManyPersonInputEnvelope
    set?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    disconnect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    delete?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    connect?: SourceWhereUniqueInput | SourceWhereUniqueInput[]
    update?: SourceUpdateWithWhereUniqueWithoutPersonInput | SourceUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SourceUpdateManyWithWhereWithoutPersonInput | SourceUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SourceScalarWhereInput | SourceScalarWhereInput[]
  }

  export type PersonCompanyCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PersonCompanyCreateWithoutCompanyInput, PersonCompanyUncheckedCreateWithoutCompanyInput> | PersonCompanyCreateWithoutCompanyInput[] | PersonCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutCompanyInput | PersonCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: PersonCompanyCreateManyCompanyInputEnvelope
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
  }

  export type PersonCompanyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PersonCompanyCreateWithoutCompanyInput, PersonCompanyUncheckedCreateWithoutCompanyInput> | PersonCompanyCreateWithoutCompanyInput[] | PersonCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutCompanyInput | PersonCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: PersonCompanyCreateManyCompanyInputEnvelope
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
  }

  export type PersonCompanyUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PersonCompanyCreateWithoutCompanyInput, PersonCompanyUncheckedCreateWithoutCompanyInput> | PersonCompanyCreateWithoutCompanyInput[] | PersonCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutCompanyInput | PersonCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: PersonCompanyUpsertWithWhereUniqueWithoutCompanyInput | PersonCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PersonCompanyCreateManyCompanyInputEnvelope
    set?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    disconnect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    delete?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    update?: PersonCompanyUpdateWithWhereUniqueWithoutCompanyInput | PersonCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PersonCompanyUpdateManyWithWhereWithoutCompanyInput | PersonCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PersonCompanyScalarWhereInput | PersonCompanyScalarWhereInput[]
  }

  export type PersonCompanyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PersonCompanyCreateWithoutCompanyInput, PersonCompanyUncheckedCreateWithoutCompanyInput> | PersonCompanyCreateWithoutCompanyInput[] | PersonCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PersonCompanyCreateOrConnectWithoutCompanyInput | PersonCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: PersonCompanyUpsertWithWhereUniqueWithoutCompanyInput | PersonCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PersonCompanyCreateManyCompanyInputEnvelope
    set?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    disconnect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    delete?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    connect?: PersonCompanyWhereUniqueInput | PersonCompanyWhereUniqueInput[]
    update?: PersonCompanyUpdateWithWhereUniqueWithoutCompanyInput | PersonCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PersonCompanyUpdateManyWithWhereWithoutCompanyInput | PersonCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PersonCompanyScalarWhereInput | PersonCompanyScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<PersonCreateWithoutCompaniesInput, PersonUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCompaniesInput
    connect?: PersonWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutPeopleInput = {
    create?: XOR<CompanyCreateWithoutPeopleInput, CompanyUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPeopleInput
    connect?: CompanyWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<PersonCreateWithoutCompaniesInput, PersonUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCompaniesInput
    upsert?: PersonUpsertWithoutCompaniesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutCompaniesInput, PersonUpdateWithoutCompaniesInput>, PersonUncheckedUpdateWithoutCompaniesInput>
  }

  export type CompanyUpdateOneRequiredWithoutPeopleNestedInput = {
    create?: XOR<CompanyCreateWithoutPeopleInput, CompanyUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPeopleInput
    upsert?: CompanyUpsertWithoutPeopleInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutPeopleInput, CompanyUpdateWithoutPeopleInput>, CompanyUncheckedUpdateWithoutPeopleInput>
  }

  export type PersonCreateNestedOneWithoutContactDataInput = {
    create?: XOR<PersonCreateWithoutContactDataInput, PersonUncheckedCreateWithoutContactDataInput>
    connectOrCreate?: PersonCreateOrConnectWithoutContactDataInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumContactStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContactStatus
  }

  export type PersonUpdateOneRequiredWithoutContactDataNestedInput = {
    create?: XOR<PersonCreateWithoutContactDataInput, PersonUncheckedCreateWithoutContactDataInput>
    connectOrCreate?: PersonCreateOrConnectWithoutContactDataInput
    upsert?: PersonUpsertWithoutContactDataInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutContactDataInput, PersonUpdateWithoutContactDataInput>, PersonUncheckedUpdateWithoutContactDataInput>
  }

  export type PersonCreateNestedOneWithoutSocialProfilesInput = {
    create?: XOR<PersonCreateWithoutSocialProfilesInput, PersonUncheckedCreateWithoutSocialProfilesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSocialProfilesInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutSocialProfilesNestedInput = {
    create?: XOR<PersonCreateWithoutSocialProfilesInput, PersonUncheckedCreateWithoutSocialProfilesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSocialProfilesInput
    upsert?: PersonUpsertWithoutSocialProfilesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSocialProfilesInput, PersonUpdateWithoutSocialProfilesInput>, PersonUncheckedUpdateWithoutSocialProfilesInput>
  }

  export type ResearchJobCreateNestedOneWithoutResultsInput = {
    create?: XOR<ResearchJobCreateWithoutResultsInput, ResearchJobUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ResearchJobCreateOrConnectWithoutResultsInput
    connect?: ResearchJobWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutResultsInput = {
    create?: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutResultsInput
    connect?: PersonWhereUniqueInput
  }

  export type ResearchJobUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ResearchJobCreateWithoutResultsInput, ResearchJobUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ResearchJobCreateOrConnectWithoutResultsInput
    upsert?: ResearchJobUpsertWithoutResultsInput
    connect?: ResearchJobWhereUniqueInput
    update?: XOR<XOR<ResearchJobUpdateToOneWithWhereWithoutResultsInput, ResearchJobUpdateWithoutResultsInput>, ResearchJobUncheckedUpdateWithoutResultsInput>
  }

  export type PersonUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutResultsInput
    upsert?: PersonUpsertWithoutResultsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutResultsInput, PersonUpdateWithoutResultsInput>, PersonUncheckedUpdateWithoutResultsInput>
  }

  export type PersonCreateNestedOneWithoutSourcesInput = {
    create?: XOR<PersonCreateWithoutSourcesInput, PersonUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSourcesInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.SourceType
  }

  export type PersonUpdateOneRequiredWithoutSourcesNestedInput = {
    create?: XOR<PersonCreateWithoutSourcesInput, PersonUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSourcesInput
    upsert?: PersonUpsertWithoutSourcesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSourcesInput, PersonUpdateWithoutSourcesInput>, PersonUncheckedUpdateWithoutSourcesInput>
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

  export type NestedEnumJobModeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobMode | EnumJobModeFieldRefInput<$PrismaModel>
    in?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobModeFilter<$PrismaModel> | $Enums.JobMode
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumJobModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobMode | EnumJobModeFieldRefInput<$PrismaModel>
    in?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobMode[] | ListEnumJobModeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobModeWithAggregatesFilter<$PrismaModel> | $Enums.JobMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobModeFilter<$PrismaModel>
    _max?: NestedEnumJobModeFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumContactStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | EnumContactStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContactStatusFilter<$PrismaModel> | $Enums.ContactStatus
  }

  export type NestedEnumContactStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | EnumContactStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactStatus[] | ListEnumContactStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContactStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContactStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactStatusFilter<$PrismaModel>
    _max?: NestedEnumContactStatusFilter<$PrismaModel>
  }

  export type NestedEnumSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeFilter<$PrismaModel> | $Enums.SourceType
  }

  export type NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceType | EnumSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceType[] | ListEnumSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumSourceTypeFilter<$PrismaModel>
  }

  export type ResearchResultCreateWithoutJobInput = {
    id?: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutResultsInput
  }

  export type ResearchResultUncheckedCreateWithoutJobInput = {
    id?: string
    personId: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
  }

  export type ResearchResultCreateOrConnectWithoutJobInput = {
    where: ResearchResultWhereUniqueInput
    create: XOR<ResearchResultCreateWithoutJobInput, ResearchResultUncheckedCreateWithoutJobInput>
  }

  export type ResearchResultCreateManyJobInputEnvelope = {
    data: ResearchResultCreateManyJobInput | ResearchResultCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ResearchResultUpsertWithWhereUniqueWithoutJobInput = {
    where: ResearchResultWhereUniqueInput
    update: XOR<ResearchResultUpdateWithoutJobInput, ResearchResultUncheckedUpdateWithoutJobInput>
    create: XOR<ResearchResultCreateWithoutJobInput, ResearchResultUncheckedCreateWithoutJobInput>
  }

  export type ResearchResultUpdateWithWhereUniqueWithoutJobInput = {
    where: ResearchResultWhereUniqueInput
    data: XOR<ResearchResultUpdateWithoutJobInput, ResearchResultUncheckedUpdateWithoutJobInput>
  }

  export type ResearchResultUpdateManyWithWhereWithoutJobInput = {
    where: ResearchResultScalarWhereInput
    data: XOR<ResearchResultUpdateManyMutationInput, ResearchResultUncheckedUpdateManyWithoutJobInput>
  }

  export type ResearchResultScalarWhereInput = {
    AND?: ResearchResultScalarWhereInput | ResearchResultScalarWhereInput[]
    OR?: ResearchResultScalarWhereInput[]
    NOT?: ResearchResultScalarWhereInput | ResearchResultScalarWhereInput[]
    id?: StringFilter<"ResearchResult"> | string
    jobId?: StringFilter<"ResearchResult"> | string
    personId?: StringFilter<"ResearchResult"> | string
    keyword?: StringNullableFilter<"ResearchResult"> | string | null
    relevanceScore?: IntFilter<"ResearchResult"> | number
    confidenceScore?: IntFilter<"ResearchResult"> | number
    relevanceReasons?: StringNullableFilter<"ResearchResult"> | string | null
    confidenceReasons?: StringNullableFilter<"ResearchResult"> | string | null
    createdAt?: DateTimeFilter<"ResearchResult"> | Date | string
  }

  export type PersonCompanyCreateWithoutPersonInput = {
    relationship?: string | null
    current?: boolean
    company: CompanyCreateNestedOneWithoutPeopleInput
  }

  export type PersonCompanyUncheckedCreateWithoutPersonInput = {
    companyId: string
    relationship?: string | null
    current?: boolean
  }

  export type PersonCompanyCreateOrConnectWithoutPersonInput = {
    where: PersonCompanyWhereUniqueInput
    create: XOR<PersonCompanyCreateWithoutPersonInput, PersonCompanyUncheckedCreateWithoutPersonInput>
  }

  export type PersonCompanyCreateManyPersonInputEnvelope = {
    data: PersonCompanyCreateManyPersonInput | PersonCompanyCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type ContactDataCreateWithoutPersonInput = {
    id?: string
    email?: string | null
    phone?: string | null
    emailStatus?: $Enums.ContactStatus
    phoneStatus?: $Enums.ContactStatus
    updatedAt?: Date | string
  }

  export type ContactDataUncheckedCreateWithoutPersonInput = {
    id?: string
    email?: string | null
    phone?: string | null
    emailStatus?: $Enums.ContactStatus
    phoneStatus?: $Enums.ContactStatus
    updatedAt?: Date | string
  }

  export type ContactDataCreateOrConnectWithoutPersonInput = {
    where: ContactDataWhereUniqueInput
    create: XOR<ContactDataCreateWithoutPersonInput, ContactDataUncheckedCreateWithoutPersonInput>
  }

  export type SocialProfileCreateWithoutPersonInput = {
    id?: string
    platform: string
    profileUrl: string
    createdAt?: Date | string
  }

  export type SocialProfileUncheckedCreateWithoutPersonInput = {
    id?: string
    platform: string
    profileUrl: string
    createdAt?: Date | string
  }

  export type SocialProfileCreateOrConnectWithoutPersonInput = {
    where: SocialProfileWhereUniqueInput
    create: XOR<SocialProfileCreateWithoutPersonInput, SocialProfileUncheckedCreateWithoutPersonInput>
  }

  export type SocialProfileCreateManyPersonInputEnvelope = {
    data: SocialProfileCreateManyPersonInput | SocialProfileCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type ResearchResultCreateWithoutPersonInput = {
    id?: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
    job: ResearchJobCreateNestedOneWithoutResultsInput
  }

  export type ResearchResultUncheckedCreateWithoutPersonInput = {
    id?: string
    jobId: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
  }

  export type ResearchResultCreateOrConnectWithoutPersonInput = {
    where: ResearchResultWhereUniqueInput
    create: XOR<ResearchResultCreateWithoutPersonInput, ResearchResultUncheckedCreateWithoutPersonInput>
  }

  export type ResearchResultCreateManyPersonInputEnvelope = {
    data: ResearchResultCreateManyPersonInput | ResearchResultCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type SourceCreateWithoutPersonInput = {
    id?: string
    sourceType: $Enums.SourceType
    sourceUrl?: string | null
    sourceStatus?: string
    discoveredAt?: Date | string
  }

  export type SourceUncheckedCreateWithoutPersonInput = {
    id?: string
    sourceType: $Enums.SourceType
    sourceUrl?: string | null
    sourceStatus?: string
    discoveredAt?: Date | string
  }

  export type SourceCreateOrConnectWithoutPersonInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutPersonInput, SourceUncheckedCreateWithoutPersonInput>
  }

  export type SourceCreateManyPersonInputEnvelope = {
    data: SourceCreateManyPersonInput | SourceCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type PersonCompanyUpsertWithWhereUniqueWithoutPersonInput = {
    where: PersonCompanyWhereUniqueInput
    update: XOR<PersonCompanyUpdateWithoutPersonInput, PersonCompanyUncheckedUpdateWithoutPersonInput>
    create: XOR<PersonCompanyCreateWithoutPersonInput, PersonCompanyUncheckedCreateWithoutPersonInput>
  }

  export type PersonCompanyUpdateWithWhereUniqueWithoutPersonInput = {
    where: PersonCompanyWhereUniqueInput
    data: XOR<PersonCompanyUpdateWithoutPersonInput, PersonCompanyUncheckedUpdateWithoutPersonInput>
  }

  export type PersonCompanyUpdateManyWithWhereWithoutPersonInput = {
    where: PersonCompanyScalarWhereInput
    data: XOR<PersonCompanyUpdateManyMutationInput, PersonCompanyUncheckedUpdateManyWithoutPersonInput>
  }

  export type PersonCompanyScalarWhereInput = {
    AND?: PersonCompanyScalarWhereInput | PersonCompanyScalarWhereInput[]
    OR?: PersonCompanyScalarWhereInput[]
    NOT?: PersonCompanyScalarWhereInput | PersonCompanyScalarWhereInput[]
    personId?: StringFilter<"PersonCompany"> | string
    companyId?: StringFilter<"PersonCompany"> | string
    relationship?: StringNullableFilter<"PersonCompany"> | string | null
    current?: BoolFilter<"PersonCompany"> | boolean
  }

  export type ContactDataUpsertWithoutPersonInput = {
    update: XOR<ContactDataUpdateWithoutPersonInput, ContactDataUncheckedUpdateWithoutPersonInput>
    create: XOR<ContactDataCreateWithoutPersonInput, ContactDataUncheckedCreateWithoutPersonInput>
    where?: ContactDataWhereInput
  }

  export type ContactDataUpdateToOneWithWhereWithoutPersonInput = {
    where?: ContactDataWhereInput
    data: XOR<ContactDataUpdateWithoutPersonInput, ContactDataUncheckedUpdateWithoutPersonInput>
  }

  export type ContactDataUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactDataUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    phoneStatus?: EnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialProfileUpsertWithWhereUniqueWithoutPersonInput = {
    where: SocialProfileWhereUniqueInput
    update: XOR<SocialProfileUpdateWithoutPersonInput, SocialProfileUncheckedUpdateWithoutPersonInput>
    create: XOR<SocialProfileCreateWithoutPersonInput, SocialProfileUncheckedCreateWithoutPersonInput>
  }

  export type SocialProfileUpdateWithWhereUniqueWithoutPersonInput = {
    where: SocialProfileWhereUniqueInput
    data: XOR<SocialProfileUpdateWithoutPersonInput, SocialProfileUncheckedUpdateWithoutPersonInput>
  }

  export type SocialProfileUpdateManyWithWhereWithoutPersonInput = {
    where: SocialProfileScalarWhereInput
    data: XOR<SocialProfileUpdateManyMutationInput, SocialProfileUncheckedUpdateManyWithoutPersonInput>
  }

  export type SocialProfileScalarWhereInput = {
    AND?: SocialProfileScalarWhereInput | SocialProfileScalarWhereInput[]
    OR?: SocialProfileScalarWhereInput[]
    NOT?: SocialProfileScalarWhereInput | SocialProfileScalarWhereInput[]
    id?: StringFilter<"SocialProfile"> | string
    personId?: StringFilter<"SocialProfile"> | string
    platform?: StringFilter<"SocialProfile"> | string
    profileUrl?: StringFilter<"SocialProfile"> | string
    createdAt?: DateTimeFilter<"SocialProfile"> | Date | string
  }

  export type ResearchResultUpsertWithWhereUniqueWithoutPersonInput = {
    where: ResearchResultWhereUniqueInput
    update: XOR<ResearchResultUpdateWithoutPersonInput, ResearchResultUncheckedUpdateWithoutPersonInput>
    create: XOR<ResearchResultCreateWithoutPersonInput, ResearchResultUncheckedCreateWithoutPersonInput>
  }

  export type ResearchResultUpdateWithWhereUniqueWithoutPersonInput = {
    where: ResearchResultWhereUniqueInput
    data: XOR<ResearchResultUpdateWithoutPersonInput, ResearchResultUncheckedUpdateWithoutPersonInput>
  }

  export type ResearchResultUpdateManyWithWhereWithoutPersonInput = {
    where: ResearchResultScalarWhereInput
    data: XOR<ResearchResultUpdateManyMutationInput, ResearchResultUncheckedUpdateManyWithoutPersonInput>
  }

  export type SourceUpsertWithWhereUniqueWithoutPersonInput = {
    where: SourceWhereUniqueInput
    update: XOR<SourceUpdateWithoutPersonInput, SourceUncheckedUpdateWithoutPersonInput>
    create: XOR<SourceCreateWithoutPersonInput, SourceUncheckedCreateWithoutPersonInput>
  }

  export type SourceUpdateWithWhereUniqueWithoutPersonInput = {
    where: SourceWhereUniqueInput
    data: XOR<SourceUpdateWithoutPersonInput, SourceUncheckedUpdateWithoutPersonInput>
  }

  export type SourceUpdateManyWithWhereWithoutPersonInput = {
    where: SourceScalarWhereInput
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyWithoutPersonInput>
  }

  export type SourceScalarWhereInput = {
    AND?: SourceScalarWhereInput | SourceScalarWhereInput[]
    OR?: SourceScalarWhereInput[]
    NOT?: SourceScalarWhereInput | SourceScalarWhereInput[]
    id?: StringFilter<"Source"> | string
    personId?: StringFilter<"Source"> | string
    sourceType?: EnumSourceTypeFilter<"Source"> | $Enums.SourceType
    sourceUrl?: StringNullableFilter<"Source"> | string | null
    sourceStatus?: StringFilter<"Source"> | string
    discoveredAt?: DateTimeFilter<"Source"> | Date | string
  }

  export type PersonCompanyCreateWithoutCompanyInput = {
    relationship?: string | null
    current?: boolean
    person: PersonCreateNestedOneWithoutCompaniesInput
  }

  export type PersonCompanyUncheckedCreateWithoutCompanyInput = {
    personId: string
    relationship?: string | null
    current?: boolean
  }

  export type PersonCompanyCreateOrConnectWithoutCompanyInput = {
    where: PersonCompanyWhereUniqueInput
    create: XOR<PersonCompanyCreateWithoutCompanyInput, PersonCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type PersonCompanyCreateManyCompanyInputEnvelope = {
    data: PersonCompanyCreateManyCompanyInput | PersonCompanyCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type PersonCompanyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: PersonCompanyWhereUniqueInput
    update: XOR<PersonCompanyUpdateWithoutCompanyInput, PersonCompanyUncheckedUpdateWithoutCompanyInput>
    create: XOR<PersonCompanyCreateWithoutCompanyInput, PersonCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type PersonCompanyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: PersonCompanyWhereUniqueInput
    data: XOR<PersonCompanyUpdateWithoutCompanyInput, PersonCompanyUncheckedUpdateWithoutCompanyInput>
  }

  export type PersonCompanyUpdateManyWithWhereWithoutCompanyInput = {
    where: PersonCompanyScalarWhereInput
    data: XOR<PersonCompanyUpdateManyMutationInput, PersonCompanyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type PersonCreateWithoutCompaniesInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contactData?: ContactDataCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileCreateNestedManyWithoutPersonInput
    results?: ResearchResultCreateNestedManyWithoutPersonInput
    sources?: SourceCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contactData?: ContactDataUncheckedCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileUncheckedCreateNestedManyWithoutPersonInput
    results?: ResearchResultUncheckedCreateNestedManyWithoutPersonInput
    sources?: SourceUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutCompaniesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCompaniesInput, PersonUncheckedCreateWithoutCompaniesInput>
  }

  export type CompanyCreateWithoutPeopleInput = {
    id?: string
    name: string
    website?: string | null
    industry?: string | null
    location?: string | null
    createdAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutPeopleInput = {
    id?: string
    name: string
    website?: string | null
    industry?: string | null
    location?: string | null
    createdAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutPeopleInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutPeopleInput, CompanyUncheckedCreateWithoutPeopleInput>
  }

  export type PersonUpsertWithoutCompaniesInput = {
    update: XOR<PersonUpdateWithoutCompaniesInput, PersonUncheckedUpdateWithoutCompaniesInput>
    create: XOR<PersonCreateWithoutCompaniesInput, PersonUncheckedCreateWithoutCompaniesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutCompaniesInput, PersonUncheckedUpdateWithoutCompaniesInput>
  }

  export type PersonUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactData?: ContactDataUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUpdateManyWithoutPersonNestedInput
    sources?: SourceUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactData?: ContactDataUncheckedUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUncheckedUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUncheckedUpdateManyWithoutPersonNestedInput
    sources?: SourceUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type CompanyUpsertWithoutPeopleInput = {
    update: XOR<CompanyUpdateWithoutPeopleInput, CompanyUncheckedUpdateWithoutPeopleInput>
    create: XOR<CompanyCreateWithoutPeopleInput, CompanyUncheckedCreateWithoutPeopleInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutPeopleInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutPeopleInput, CompanyUncheckedUpdateWithoutPeopleInput>
  }

  export type CompanyUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateWithoutContactDataInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyCreateNestedManyWithoutPersonInput
    socialProfiles?: SocialProfileCreateNestedManyWithoutPersonInput
    results?: ResearchResultCreateNestedManyWithoutPersonInput
    sources?: SourceCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutContactDataInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyUncheckedCreateNestedManyWithoutPersonInput
    socialProfiles?: SocialProfileUncheckedCreateNestedManyWithoutPersonInput
    results?: ResearchResultUncheckedCreateNestedManyWithoutPersonInput
    sources?: SourceUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutContactDataInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutContactDataInput, PersonUncheckedCreateWithoutContactDataInput>
  }

  export type PersonUpsertWithoutContactDataInput = {
    update: XOR<PersonUpdateWithoutContactDataInput, PersonUncheckedUpdateWithoutContactDataInput>
    create: XOR<PersonCreateWithoutContactDataInput, PersonUncheckedCreateWithoutContactDataInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutContactDataInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutContactDataInput, PersonUncheckedUpdateWithoutContactDataInput>
  }

  export type PersonUpdateWithoutContactDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUpdateManyWithoutPersonNestedInput
    socialProfiles?: SocialProfileUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUpdateManyWithoutPersonNestedInput
    sources?: SourceUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutContactDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUncheckedUpdateManyWithoutPersonNestedInput
    socialProfiles?: SocialProfileUncheckedUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUncheckedUpdateManyWithoutPersonNestedInput
    sources?: SourceUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutSocialProfilesInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyCreateNestedManyWithoutPersonInput
    contactData?: ContactDataCreateNestedOneWithoutPersonInput
    results?: ResearchResultCreateNestedManyWithoutPersonInput
    sources?: SourceCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutSocialProfilesInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyUncheckedCreateNestedManyWithoutPersonInput
    contactData?: ContactDataUncheckedCreateNestedOneWithoutPersonInput
    results?: ResearchResultUncheckedCreateNestedManyWithoutPersonInput
    sources?: SourceUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutSocialProfilesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSocialProfilesInput, PersonUncheckedCreateWithoutSocialProfilesInput>
  }

  export type PersonUpsertWithoutSocialProfilesInput = {
    update: XOR<PersonUpdateWithoutSocialProfilesInput, PersonUncheckedUpdateWithoutSocialProfilesInput>
    create: XOR<PersonCreateWithoutSocialProfilesInput, PersonUncheckedCreateWithoutSocialProfilesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSocialProfilesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSocialProfilesInput, PersonUncheckedUpdateWithoutSocialProfilesInput>
  }

  export type PersonUpdateWithoutSocialProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUpdateOneWithoutPersonNestedInput
    results?: ResearchResultUpdateManyWithoutPersonNestedInput
    sources?: SourceUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutSocialProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUncheckedUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUncheckedUpdateOneWithoutPersonNestedInput
    results?: ResearchResultUncheckedUpdateManyWithoutPersonNestedInput
    sources?: SourceUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type ResearchJobCreateWithoutResultsInput = {
    id?: string
    query: string
    mode: $Enums.JobMode
    status?: $Enums.JobStatus
    requestedCount?: number
    foundCount?: number
    errorMessage?: string | null
    progressStage?: string | null
    progressPercent?: number
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ResearchJobUncheckedCreateWithoutResultsInput = {
    id?: string
    query: string
    mode: $Enums.JobMode
    status?: $Enums.JobStatus
    requestedCount?: number
    foundCount?: number
    errorMessage?: string | null
    progressStage?: string | null
    progressPercent?: number
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ResearchJobCreateOrConnectWithoutResultsInput = {
    where: ResearchJobWhereUniqueInput
    create: XOR<ResearchJobCreateWithoutResultsInput, ResearchJobUncheckedCreateWithoutResultsInput>
  }

  export type PersonCreateWithoutResultsInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyCreateNestedManyWithoutPersonInput
    contactData?: ContactDataCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileCreateNestedManyWithoutPersonInput
    sources?: SourceCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutResultsInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyUncheckedCreateNestedManyWithoutPersonInput
    contactData?: ContactDataUncheckedCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileUncheckedCreateNestedManyWithoutPersonInput
    sources?: SourceUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutResultsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
  }

  export type ResearchJobUpsertWithoutResultsInput = {
    update: XOR<ResearchJobUpdateWithoutResultsInput, ResearchJobUncheckedUpdateWithoutResultsInput>
    create: XOR<ResearchJobCreateWithoutResultsInput, ResearchJobUncheckedCreateWithoutResultsInput>
    where?: ResearchJobWhereInput
  }

  export type ResearchJobUpdateToOneWithWhereWithoutResultsInput = {
    where?: ResearchJobWhereInput
    data: XOR<ResearchJobUpdateWithoutResultsInput, ResearchJobUncheckedUpdateWithoutResultsInput>
  }

  export type ResearchJobUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    mode?: EnumJobModeFieldUpdateOperationsInput | $Enums.JobMode
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    requestedCount?: IntFieldUpdateOperationsInput | number
    foundCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    progressStage?: NullableStringFieldUpdateOperationsInput | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResearchJobUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    mode?: EnumJobModeFieldUpdateOperationsInput | $Enums.JobMode
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    requestedCount?: IntFieldUpdateOperationsInput | number
    foundCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    progressStage?: NullableStringFieldUpdateOperationsInput | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonUpsertWithoutResultsInput = {
    update: XOR<PersonUpdateWithoutResultsInput, PersonUncheckedUpdateWithoutResultsInput>
    create: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutResultsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutResultsInput, PersonUncheckedUpdateWithoutResultsInput>
  }

  export type PersonUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUpdateManyWithoutPersonNestedInput
    sources?: SourceUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUncheckedUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUncheckedUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUncheckedUpdateManyWithoutPersonNestedInput
    sources?: SourceUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutSourcesInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyCreateNestedManyWithoutPersonInput
    contactData?: ContactDataCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileCreateNestedManyWithoutPersonInput
    results?: ResearchResultCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutSourcesInput = {
    id?: string
    name: string
    jobTitle?: string | null
    location?: string | null
    linkedinUrl?: string | null
    isDemo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: PersonCompanyUncheckedCreateNestedManyWithoutPersonInput
    contactData?: ContactDataUncheckedCreateNestedOneWithoutPersonInput
    socialProfiles?: SocialProfileUncheckedCreateNestedManyWithoutPersonInput
    results?: ResearchResultUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutSourcesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSourcesInput, PersonUncheckedCreateWithoutSourcesInput>
  }

  export type PersonUpsertWithoutSourcesInput = {
    update: XOR<PersonUpdateWithoutSourcesInput, PersonUncheckedUpdateWithoutSourcesInput>
    create: XOR<PersonCreateWithoutSourcesInput, PersonUncheckedCreateWithoutSourcesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSourcesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSourcesInput, PersonUncheckedUpdateWithoutSourcesInput>
  }

  export type PersonUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDemo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: PersonCompanyUncheckedUpdateManyWithoutPersonNestedInput
    contactData?: ContactDataUncheckedUpdateOneWithoutPersonNestedInput
    socialProfiles?: SocialProfileUncheckedUpdateManyWithoutPersonNestedInput
    results?: ResearchResultUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type ResearchResultCreateManyJobInput = {
    id?: string
    personId: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
  }

  export type ResearchResultUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResearchResultUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchResultUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCompanyCreateManyPersonInput = {
    companyId: string
    relationship?: string | null
    current?: boolean
  }

  export type SocialProfileCreateManyPersonInput = {
    id?: string
    platform: string
    profileUrl: string
    createdAt?: Date | string
  }

  export type ResearchResultCreateManyPersonInput = {
    id?: string
    jobId: string
    keyword?: string | null
    relevanceScore: number
    confidenceScore: number
    relevanceReasons?: string | null
    confidenceReasons?: string | null
    createdAt?: Date | string
  }

  export type SourceCreateManyPersonInput = {
    id?: string
    sourceType: $Enums.SourceType
    sourceUrl?: string | null
    sourceStatus?: string
    discoveredAt?: Date | string
  }

  export type PersonCompanyUpdateWithoutPersonInput = {
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutPeopleNestedInput
  }

  export type PersonCompanyUncheckedUpdateWithoutPersonInput = {
    companyId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonCompanyUncheckedUpdateManyWithoutPersonInput = {
    companyId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialProfileUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialProfileUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialProfileUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchResultUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ResearchJobUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResearchResultUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchResultUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: IntFieldUpdateOperationsInput | number
    confidenceScore?: IntFieldUpdateOperationsInput | number
    relevanceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceReasons?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceStatus?: StringFieldUpdateOperationsInput | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceStatus?: StringFieldUpdateOperationsInput | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumSourceTypeFieldUpdateOperationsInput | $Enums.SourceType
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceStatus?: StringFieldUpdateOperationsInput | string
    discoveredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCompanyCreateManyCompanyInput = {
    personId: string
    relationship?: string | null
    current?: boolean
  }

  export type PersonCompanyUpdateWithoutCompanyInput = {
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
    person?: PersonUpdateOneRequiredWithoutCompaniesNestedInput
  }

  export type PersonCompanyUncheckedUpdateWithoutCompanyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonCompanyUncheckedUpdateManyWithoutCompanyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    current?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ResearchJobCountOutputTypeDefaultArgs instead
     */
    export type ResearchJobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResearchJobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonCountOutputTypeDefaultArgs instead
     */
    export type PersonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResearchJobDefaultArgs instead
     */
    export type ResearchJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResearchJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonDefaultArgs instead
     */
    export type PersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonCompanyDefaultArgs instead
     */
    export type PersonCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonCompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDataDefaultArgs instead
     */
    export type ContactDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialProfileDefaultArgs instead
     */
    export type SocialProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResearchResultDefaultArgs instead
     */
    export type ResearchResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResearchResultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SourceDefaultArgs instead
     */
    export type SourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SourceDefaultArgs<ExtArgs>

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