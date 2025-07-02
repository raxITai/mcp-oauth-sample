
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model AccessToken
 * 
 */
export type AccessToken = $Result.DefaultSelection<Prisma.$AccessTokenPayload>
/**
 * Model AuthCode
 * 
 */
export type AuthCode = $Result.DefaultSelection<Prisma.$AuthCodePayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model MCPServer
 * 
 */
export type MCPServer = $Result.DefaultSelection<Prisma.$MCPServerPayload>
/**
 * Model AnalyticsRequest
 * 
 */
export type AnalyticsRequest = $Result.DefaultSelection<Prisma.$AnalyticsRequestPayload>
/**
 * Model AnalyticsSecurity
 * 
 */
export type AnalyticsSecurity = $Result.DefaultSelection<Prisma.$AnalyticsSecurityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SecurityEventType: {
  AUTH_FAILURE: 'AUTH_FAILURE',
  INVALID_TOKEN: 'INVALID_TOKEN',
  SUSPICIOUS_ACTIVITY: 'SUSPICIOUS_ACTIVITY',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS',
  TOKEN_REUSE: 'TOKEN_REUSE',
  UNUSUAL_LOCATION: 'UNUSUAL_LOCATION',
  PRIVILEGE_ESCALATION: 'PRIVILEGE_ESCALATION',
  MALFORMED_REQUEST: 'MALFORMED_REQUEST',
  BRUTE_FORCE_ATTEMPT: 'BRUTE_FORCE_ATTEMPT',
  OAUTH_INVALID_CLIENT: 'OAUTH_INVALID_CLIENT',
  OAUTH_INVALID_GRANT: 'OAUTH_INVALID_GRANT',
  OAUTH_INVALID_SCOPE: 'OAUTH_INVALID_SCOPE'
};

export type SecurityEventType = (typeof SecurityEventType)[keyof typeof SecurityEventType]

}

export type SecurityEventType = $Enums.SecurityEventType

export const SecurityEventType: typeof $Enums.SecurityEventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessToken`: Exposes CRUD operations for the **AccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessTokens
    * const accessTokens = await prisma.accessToken.findMany()
    * ```
    */
  get accessToken(): Prisma.AccessTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authCode`: Exposes CRUD operations for the **AuthCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthCodes
    * const authCodes = await prisma.authCode.findMany()
    * ```
    */
  get authCode(): Prisma.AuthCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mCPServer`: Exposes CRUD operations for the **MCPServer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MCPServers
    * const mCPServers = await prisma.mCPServer.findMany()
    * ```
    */
  get mCPServer(): Prisma.MCPServerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsRequest`: Exposes CRUD operations for the **AnalyticsRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsRequests
    * const analyticsRequests = await prisma.analyticsRequest.findMany()
    * ```
    */
  get analyticsRequest(): Prisma.AnalyticsRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsSecurity`: Exposes CRUD operations for the **AnalyticsSecurity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsSecurities
    * const analyticsSecurities = await prisma.analyticsSecurity.findMany()
    * ```
    */
  get analyticsSecurity(): Prisma.AnalyticsSecurityDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Client: 'Client',
    AccessToken: 'AccessToken',
    AuthCode: 'AuthCode',
    RefreshToken: 'RefreshToken',
    MCPServer: 'MCPServer',
    AnalyticsRequest: 'AnalyticsRequest',
    AnalyticsSecurity: 'AnalyticsSecurity'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "client" | "accessToken" | "authCode" | "refreshToken" | "mCPServer" | "analyticsRequest" | "analyticsSecurity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      AccessToken: {
        payload: Prisma.$AccessTokenPayload<ExtArgs>
        fields: Prisma.AccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findFirst: {
            args: Prisma.AccessTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findMany: {
            args: Prisma.AccessTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>[]
          }
          create: {
            args: Prisma.AccessTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          createMany: {
            args: Prisma.AccessTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>[]
          }
          delete: {
            args: Prisma.AccessTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          update: {
            args: Prisma.AccessTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.AccessTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>[]
          }
          upsert: {
            args: Prisma.AccessTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          aggregate: {
            args: Prisma.AccessTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessToken>
          }
          groupBy: {
            args: Prisma.AccessTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessTokenCountArgs<ExtArgs>
            result: $Utils.Optional<AccessTokenCountAggregateOutputType> | number
          }
        }
      }
      AuthCode: {
        payload: Prisma.$AuthCodePayload<ExtArgs>
        fields: Prisma.AuthCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          findFirst: {
            args: Prisma.AuthCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          findMany: {
            args: Prisma.AuthCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>[]
          }
          create: {
            args: Prisma.AuthCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          createMany: {
            args: Prisma.AuthCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>[]
          }
          delete: {
            args: Prisma.AuthCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          update: {
            args: Prisma.AuthCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          deleteMany: {
            args: Prisma.AuthCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>[]
          }
          upsert: {
            args: Prisma.AuthCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          aggregate: {
            args: Prisma.AuthCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthCode>
          }
          groupBy: {
            args: Prisma.AuthCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCodeCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCodeCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      MCPServer: {
        payload: Prisma.$MCPServerPayload<ExtArgs>
        fields: Prisma.MCPServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MCPServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MCPServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          findFirst: {
            args: Prisma.MCPServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MCPServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          findMany: {
            args: Prisma.MCPServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>[]
          }
          create: {
            args: Prisma.MCPServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          createMany: {
            args: Prisma.MCPServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MCPServerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>[]
          }
          delete: {
            args: Prisma.MCPServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          update: {
            args: Prisma.MCPServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          deleteMany: {
            args: Prisma.MCPServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MCPServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MCPServerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>[]
          }
          upsert: {
            args: Prisma.MCPServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          aggregate: {
            args: Prisma.MCPServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMCPServer>
          }
          groupBy: {
            args: Prisma.MCPServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MCPServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MCPServerCountArgs<ExtArgs>
            result: $Utils.Optional<MCPServerCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsRequest: {
        payload: Prisma.$AnalyticsRequestPayload<ExtArgs>
        fields: Prisma.AnalyticsRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>
          }
          findMany: {
            args: Prisma.AnalyticsRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>[]
          }
          create: {
            args: Prisma.AnalyticsRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>
          }
          createMany: {
            args: Prisma.AnalyticsRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>
          }
          update: {
            args: Prisma.AnalyticsRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsRequestPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsRequest>
          }
          groupBy: {
            args: Prisma.AnalyticsRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsRequestCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsSecurity: {
        payload: Prisma.$AnalyticsSecurityPayload<ExtArgs>
        fields: Prisma.AnalyticsSecurityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsSecurityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsSecurityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsSecurityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsSecurityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>
          }
          findMany: {
            args: Prisma.AnalyticsSecurityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>[]
          }
          create: {
            args: Prisma.AnalyticsSecurityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>
          }
          createMany: {
            args: Prisma.AnalyticsSecurityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsSecurityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsSecurityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>
          }
          update: {
            args: Prisma.AnalyticsSecurityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsSecurityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsSecurityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsSecurityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsSecurityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsSecurityPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsSecurityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsSecurity>
          }
          groupBy: {
            args: Prisma.AnalyticsSecurityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsSecurityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsSecurityCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsSecurityCountAggregateOutputType> | number
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
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    client?: ClientOmit
    accessToken?: AccessTokenOmit
    authCode?: AuthCodeOmit
    refreshToken?: RefreshTokenOmit
    mCPServer?: MCPServerOmit
    analyticsRequest?: AnalyticsRequestOmit
    analyticsSecurity?: AnalyticsSecurityOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    clients: number
    accessTokens: number
    authCodes: number
    refreshTokens: number
    analyticsRequests: number
    securityEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    clients?: boolean | UserCountOutputTypeCountClientsArgs
    accessTokens?: boolean | UserCountOutputTypeCountAccessTokensArgs
    authCodes?: boolean | UserCountOutputTypeCountAuthCodesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    analyticsRequests?: boolean | UserCountOutputTypeCountAnalyticsRequestsArgs
    securityEvents?: boolean | UserCountOutputTypeCountSecurityEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalyticsRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecurityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsSecurityWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    accessTokens: number
    authCodes: number
    refreshTokens: number
    analyticsRequests: number
    securityEvents: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessTokens?: boolean | ClientCountOutputTypeCountAccessTokensArgs
    authCodes?: boolean | ClientCountOutputTypeCountAuthCodesArgs
    refreshTokens?: boolean | ClientCountOutputTypeCountRefreshTokensArgs
    analyticsRequests?: boolean | ClientCountOutputTypeCountAnalyticsRequestsArgs
    securityEvents?: boolean | ClientCountOutputTypeCountSecurityEventsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAuthCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthCodeWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAnalyticsRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsRequestWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSecurityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsSecurityWhereInput
  }


  /**
   * Count Type MCPServerCountOutputType
   */

  export type MCPServerCountOutputType = {
    requests: number
    securityEvents: number
  }

  export type MCPServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | MCPServerCountOutputTypeCountRequestsArgs
    securityEvents?: boolean | MCPServerCountOutputTypeCountSecurityEventsArgs
  }

  // Custom InputTypes
  /**
   * MCPServerCountOutputType without action
   */
  export type MCPServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServerCountOutputType
     */
    select?: MCPServerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MCPServerCountOutputType without action
   */
  export type MCPServerCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsRequestWhereInput
  }

  /**
   * MCPServerCountOutputType without action
   */
  export type MCPServerCountOutputTypeCountSecurityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsSecurityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    accessTokens?: boolean | User$accessTokensArgs<ExtArgs>
    authCodes?: boolean | User$authCodesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    analyticsRequests?: boolean | User$analyticsRequestsArgs<ExtArgs>
    securityEvents?: boolean | User$securityEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    accessTokens?: boolean | User$accessTokensArgs<ExtArgs>
    authCodes?: boolean | User$authCodesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    analyticsRequests?: boolean | User$analyticsRequestsArgs<ExtArgs>
    securityEvents?: boolean | User$securityEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      accessTokens: Prisma.$AccessTokenPayload<ExtArgs>[]
      authCodes: Prisma.$AuthCodePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      analyticsRequests: Prisma.$AnalyticsRequestPayload<ExtArgs>[]
      securityEvents: Prisma.$AnalyticsSecurityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessTokens<T extends User$accessTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$accessTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authCodes<T extends User$authCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$authCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analyticsRequests<T extends User$analyticsRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$analyticsRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityEvents<T extends User$securityEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$securityEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.accessTokens
   */
  export type User$accessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    cursor?: AccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * User.authCodes
   */
  export type User$authCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    where?: AuthCodeWhereInput
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    cursor?: AuthCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.analyticsRequests
   */
  export type User$analyticsRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    where?: AnalyticsRequestWhereInput
    orderBy?: AnalyticsRequestOrderByWithRelationInput | AnalyticsRequestOrderByWithRelationInput[]
    cursor?: AnalyticsRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsRequestScalarFieldEnum | AnalyticsRequestScalarFieldEnum[]
  }

  /**
   * User.securityEvents
   */
  export type User$securityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    where?: AnalyticsSecurityWhereInput
    orderBy?: AnalyticsSecurityOrderByWithRelationInput | AnalyticsSecurityOrderByWithRelationInput[]
    cursor?: AnalyticsSecurityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsSecurityScalarFieldEnum | AnalyticsSecurityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientSecret: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientSecret: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    clientId: number
    clientSecret: number
    name: number
    redirectUris: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    clientId?: true
    clientSecret?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    clientId?: true
    clientSecret?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    clientId?: true
    clientSecret?: true
    name?: true
    redirectUris?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    clientId: string
    clientSecret: string
    name: string
    redirectUris: string[]
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientSecret?: boolean
    name?: boolean
    redirectUris?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Client$userArgs<ExtArgs>
    accessTokens?: boolean | Client$accessTokensArgs<ExtArgs>
    authCodes?: boolean | Client$authCodesArgs<ExtArgs>
    refreshTokens?: boolean | Client$refreshTokensArgs<ExtArgs>
    analyticsRequests?: boolean | Client$analyticsRequestsArgs<ExtArgs>
    securityEvents?: boolean | Client$securityEventsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientSecret?: boolean
    name?: boolean
    redirectUris?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Client$userArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientSecret?: boolean
    name?: boolean
    redirectUris?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Client$userArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    clientId?: boolean
    clientSecret?: boolean
    name?: boolean
    redirectUris?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "clientSecret" | "name" | "redirectUris" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Client$userArgs<ExtArgs>
    accessTokens?: boolean | Client$accessTokensArgs<ExtArgs>
    authCodes?: boolean | Client$authCodesArgs<ExtArgs>
    refreshTokens?: boolean | Client$refreshTokensArgs<ExtArgs>
    analyticsRequests?: boolean | Client$analyticsRequestsArgs<ExtArgs>
    securityEvents?: boolean | Client$securityEventsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Client$userArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Client$userArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      accessTokens: Prisma.$AccessTokenPayload<ExtArgs>[]
      authCodes: Prisma.$AuthCodePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      analyticsRequests: Prisma.$AnalyticsRequestPayload<ExtArgs>[]
      securityEvents: Prisma.$AnalyticsSecurityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      clientSecret: string
      name: string
      redirectUris: string[]
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Client$userArgs<ExtArgs> = {}>(args?: Subset<T, Client$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accessTokens<T extends Client$accessTokensArgs<ExtArgs> = {}>(args?: Subset<T, Client$accessTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authCodes<T extends Client$authCodesArgs<ExtArgs> = {}>(args?: Subset<T, Client$authCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends Client$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, Client$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analyticsRequests<T extends Client$analyticsRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Client$analyticsRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityEvents<T extends Client$securityEventsArgs<ExtArgs> = {}>(args?: Subset<T, Client$securityEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly clientId: FieldRef<"Client", 'String'>
    readonly clientSecret: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly redirectUris: FieldRef<"Client", 'String[]'>
    readonly userId: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.user
   */
  export type Client$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Client.accessTokens
   */
  export type Client$accessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    cursor?: AccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * Client.authCodes
   */
  export type Client$authCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    where?: AuthCodeWhereInput
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    cursor?: AuthCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * Client.refreshTokens
   */
  export type Client$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * Client.analyticsRequests
   */
  export type Client$analyticsRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    where?: AnalyticsRequestWhereInput
    orderBy?: AnalyticsRequestOrderByWithRelationInput | AnalyticsRequestOrderByWithRelationInput[]
    cursor?: AnalyticsRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsRequestScalarFieldEnum | AnalyticsRequestScalarFieldEnum[]
  }

  /**
   * Client.securityEvents
   */
  export type Client$securityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    where?: AnalyticsSecurityWhereInput
    orderBy?: AnalyticsSecurityOrderByWithRelationInput | AnalyticsSecurityOrderByWithRelationInput[]
    cursor?: AnalyticsSecurityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsSecurityScalarFieldEnum | AnalyticsSecurityScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model AccessToken
   */

  export type AggregateAccessToken = {
    _count: AccessTokenCountAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  export type AccessTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    resource: string | null
    createdAt: Date | null
  }

  export type AccessTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    resource: string | null
    createdAt: Date | null
  }

  export type AccessTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    clientId: number
    userId: number
    resource: number
    createdAt: number
    _all: number
  }


  export type AccessTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    resource?: true
    createdAt?: true
  }

  export type AccessTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    resource?: true
    createdAt?: true
  }

  export type AccessTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    resource?: true
    createdAt?: true
    _all?: true
  }

  export type AccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessToken to aggregate.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessTokens
    **/
    _count?: true | AccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessTokenMaxAggregateInputType
  }

  export type GetAccessTokenAggregateType<T extends AccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessToken[P]>
      : GetScalarType<T[P], AggregateAccessToken[P]>
  }




  export type AccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithAggregationInput | AccessTokenOrderByWithAggregationInput[]
    by: AccessTokenScalarFieldEnum[] | AccessTokenScalarFieldEnum
    having?: AccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessTokenCountAggregateInputType | true
    _min?: AccessTokenMinAggregateInputType
    _max?: AccessTokenMaxAggregateInputType
  }

  export type AccessTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    clientId: string
    userId: string
    resource: string | null
    createdAt: Date
    _count: AccessTokenCountAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  type GetAccessTokenGroupByPayload<T extends AccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type AccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessToken"]>

  export type AccessTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessToken"]>

  export type AccessTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessToken"]>

  export type AccessTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
  }

  export type AccessTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "clientId" | "userId" | "resource" | "createdAt", ExtArgs["result"]["accessToken"]>
  export type AccessTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessToken"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      clientId: string
      userId: string
      resource: string | null
      createdAt: Date
    }, ExtArgs["result"]["accessToken"]>
    composites: {}
  }

  type AccessTokenGetPayload<S extends boolean | null | undefined | AccessTokenDefaultArgs> = $Result.GetResult<Prisma.$AccessTokenPayload, S>

  type AccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessTokenCountAggregateInputType | true
    }

  export interface AccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessToken'], meta: { name: 'AccessToken' } }
    /**
     * Find zero or one AccessToken that matches the filter.
     * @param {AccessTokenFindUniqueArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessTokenFindUniqueArgs>(args: SelectSubset<T, AccessTokenFindUniqueArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessTokenFindUniqueOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessTokenFindFirstArgs>(args?: SelectSubset<T, AccessTokenFindFirstArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessTokens
     * const accessTokens = await prisma.accessToken.findMany()
     * 
     * // Get first 10 AccessTokens
     * const accessTokens = await prisma.accessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessTokenWithIdOnly = await prisma.accessToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessTokenFindManyArgs>(args?: SelectSubset<T, AccessTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessToken.
     * @param {AccessTokenCreateArgs} args - Arguments to create a AccessToken.
     * @example
     * // Create one AccessToken
     * const AccessToken = await prisma.accessToken.create({
     *   data: {
     *     // ... data to create a AccessToken
     *   }
     * })
     * 
     */
    create<T extends AccessTokenCreateArgs>(args: SelectSubset<T, AccessTokenCreateArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessTokens.
     * @param {AccessTokenCreateManyArgs} args - Arguments to create many AccessTokens.
     * @example
     * // Create many AccessTokens
     * const accessToken = await prisma.accessToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessTokenCreateManyArgs>(args?: SelectSubset<T, AccessTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessTokens and returns the data saved in the database.
     * @param {AccessTokenCreateManyAndReturnArgs} args - Arguments to create many AccessTokens.
     * @example
     * // Create many AccessTokens
     * const accessToken = await prisma.accessToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessTokens and only return the `id`
     * const accessTokenWithIdOnly = await prisma.accessToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessToken.
     * @param {AccessTokenDeleteArgs} args - Arguments to delete one AccessToken.
     * @example
     * // Delete one AccessToken
     * const AccessToken = await prisma.accessToken.delete({
     *   where: {
     *     // ... filter to delete one AccessToken
     *   }
     * })
     * 
     */
    delete<T extends AccessTokenDeleteArgs>(args: SelectSubset<T, AccessTokenDeleteArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessToken.
     * @param {AccessTokenUpdateArgs} args - Arguments to update one AccessToken.
     * @example
     * // Update one AccessToken
     * const accessToken = await prisma.accessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessTokenUpdateArgs>(args: SelectSubset<T, AccessTokenUpdateArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessTokens.
     * @param {AccessTokenDeleteManyArgs} args - Arguments to filter AccessTokens to delete.
     * @example
     * // Delete a few AccessTokens
     * const { count } = await prisma.accessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessTokenDeleteManyArgs>(args?: SelectSubset<T, AccessTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessTokens
     * const accessToken = await prisma.accessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessTokenUpdateManyArgs>(args: SelectSubset<T, AccessTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessTokens and returns the data updated in the database.
     * @param {AccessTokenUpdateManyAndReturnArgs} args - Arguments to update many AccessTokens.
     * @example
     * // Update many AccessTokens
     * const accessToken = await prisma.accessToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessTokens and only return the `id`
     * const accessTokenWithIdOnly = await prisma.accessToken.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AccessTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessToken.
     * @param {AccessTokenUpsertArgs} args - Arguments to update or create a AccessToken.
     * @example
     * // Update or create a AccessToken
     * const accessToken = await prisma.accessToken.upsert({
     *   create: {
     *     // ... data to create a AccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessToken we want to update
     *   }
     * })
     */
    upsert<T extends AccessTokenUpsertArgs>(args: SelectSubset<T, AccessTokenUpsertArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenCountArgs} args - Arguments to filter AccessTokens to count.
     * @example
     * // Count the number of AccessTokens
     * const count = await prisma.accessToken.count({
     *   where: {
     *     // ... the filter for the AccessTokens we want to count
     *   }
     * })
    **/
    count<T extends AccessTokenCountArgs>(
      args?: Subset<T, AccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessTokenAggregateArgs>(args: Subset<T, AccessTokenAggregateArgs>): Prisma.PrismaPromise<GetAccessTokenAggregateType<T>>

    /**
     * Group by AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenGroupByArgs} args - Group by arguments.
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
      T extends AccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: AccessTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessToken model
   */
  readonly fields: AccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccessToken model
   */
  interface AccessTokenFieldRefs {
    readonly id: FieldRef<"AccessToken", 'String'>
    readonly token: FieldRef<"AccessToken", 'String'>
    readonly expiresAt: FieldRef<"AccessToken", 'DateTime'>
    readonly clientId: FieldRef<"AccessToken", 'String'>
    readonly userId: FieldRef<"AccessToken", 'String'>
    readonly resource: FieldRef<"AccessToken", 'String'>
    readonly createdAt: FieldRef<"AccessToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessToken findUnique
   */
  export type AccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken findUniqueOrThrow
   */
  export type AccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken findFirst
   */
  export type AccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * AccessToken findFirstOrThrow
   */
  export type AccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * AccessToken findMany
   */
  export type AccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * AccessToken create
   */
  export type AccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessToken.
     */
    data: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
  }

  /**
   * AccessToken createMany
   */
  export type AccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessTokens.
     */
    data: AccessTokenCreateManyInput | AccessTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessToken createManyAndReturn
   */
  export type AccessTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * The data used to create many AccessTokens.
     */
    data: AccessTokenCreateManyInput | AccessTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessToken update
   */
  export type AccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessToken.
     */
    data: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
    /**
     * Choose, which AccessToken to update.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken updateMany
   */
  export type AccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessTokens.
     */
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccessTokens to update
     */
    where?: AccessTokenWhereInput
    /**
     * Limit how many AccessTokens to update.
     */
    limit?: number
  }

  /**
   * AccessToken updateManyAndReturn
   */
  export type AccessTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * The data used to update AccessTokens.
     */
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccessTokens to update
     */
    where?: AccessTokenWhereInput
    /**
     * Limit how many AccessTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessToken upsert
   */
  export type AccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessToken to update in case it exists.
     */
    where: AccessTokenWhereUniqueInput
    /**
     * In case the AccessToken found by the `where` argument doesn't exist, create a new AccessToken with this data.
     */
    create: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
    /**
     * In case the AccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
  }

  /**
   * AccessToken delete
   */
  export type AccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter which AccessToken to delete.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken deleteMany
   */
  export type AccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessTokens to delete
     */
    where?: AccessTokenWhereInput
    /**
     * Limit how many AccessTokens to delete.
     */
    limit?: number
  }

  /**
   * AccessToken without action
   */
  export type AccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessToken
     */
    omit?: AccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
  }


  /**
   * Model AuthCode
   */

  export type AggregateAuthCode = {
    _count: AuthCodeCountAggregateOutputType | null
    _min: AuthCodeMinAggregateOutputType | null
    _max: AuthCodeMaxAggregateOutputType | null
  }

  export type AuthCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    redirectUri: string | null
    codeChallenge: string | null
    codeChallengeMethod: string | null
    resource: string | null
    createdAt: Date | null
  }

  export type AuthCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    redirectUri: string | null
    codeChallenge: string | null
    codeChallengeMethod: string | null
    resource: string | null
    createdAt: Date | null
  }

  export type AuthCodeCountAggregateOutputType = {
    id: number
    code: number
    expiresAt: number
    clientId: number
    userId: number
    redirectUri: number
    codeChallenge: number
    codeChallengeMethod: number
    resource: number
    createdAt: number
    _all: number
  }


  export type AuthCodeMinAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    redirectUri?: true
    codeChallenge?: true
    codeChallengeMethod?: true
    resource?: true
    createdAt?: true
  }

  export type AuthCodeMaxAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    redirectUri?: true
    codeChallenge?: true
    codeChallengeMethod?: true
    resource?: true
    createdAt?: true
  }

  export type AuthCodeCountAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    redirectUri?: true
    codeChallenge?: true
    codeChallengeMethod?: true
    resource?: true
    createdAt?: true
    _all?: true
  }

  export type AuthCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthCode to aggregate.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthCodes
    **/
    _count?: true | AuthCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthCodeMaxAggregateInputType
  }

  export type GetAuthCodeAggregateType<T extends AuthCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthCode[P]>
      : GetScalarType<T[P], AggregateAuthCode[P]>
  }




  export type AuthCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthCodeWhereInput
    orderBy?: AuthCodeOrderByWithAggregationInput | AuthCodeOrderByWithAggregationInput[]
    by: AuthCodeScalarFieldEnum[] | AuthCodeScalarFieldEnum
    having?: AuthCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCodeCountAggregateInputType | true
    _min?: AuthCodeMinAggregateInputType
    _max?: AuthCodeMaxAggregateInputType
  }

  export type AuthCodeGroupByOutputType = {
    id: string
    code: string
    expiresAt: Date
    clientId: string
    userId: string
    redirectUri: string
    codeChallenge: string | null
    codeChallengeMethod: string | null
    resource: string | null
    createdAt: Date
    _count: AuthCodeCountAggregateOutputType | null
    _min: AuthCodeMinAggregateOutputType | null
    _max: AuthCodeMaxAggregateOutputType | null
  }

  type GetAuthCodeGroupByPayload<T extends AuthCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthCodeGroupByOutputType[P]>
            : GetScalarType<T[P], AuthCodeGroupByOutputType[P]>
        }
      >
    >


  export type AuthCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    redirectUri?: boolean
    codeChallenge?: boolean
    codeChallengeMethod?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authCode"]>

  export type AuthCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    redirectUri?: boolean
    codeChallenge?: boolean
    codeChallengeMethod?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authCode"]>

  export type AuthCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    redirectUri?: boolean
    codeChallenge?: boolean
    codeChallengeMethod?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authCode"]>

  export type AuthCodeSelectScalar = {
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    redirectUri?: boolean
    codeChallenge?: boolean
    codeChallengeMethod?: boolean
    resource?: boolean
    createdAt?: boolean
  }

  export type AuthCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "expiresAt" | "clientId" | "userId" | "redirectUri" | "codeChallenge" | "codeChallengeMethod" | "resource" | "createdAt", ExtArgs["result"]["authCode"]>
  export type AuthCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthCode"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      expiresAt: Date
      clientId: string
      userId: string
      redirectUri: string
      codeChallenge: string | null
      codeChallengeMethod: string | null
      resource: string | null
      createdAt: Date
    }, ExtArgs["result"]["authCode"]>
    composites: {}
  }

  type AuthCodeGetPayload<S extends boolean | null | undefined | AuthCodeDefaultArgs> = $Result.GetResult<Prisma.$AuthCodePayload, S>

  type AuthCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCodeCountAggregateInputType | true
    }

  export interface AuthCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthCode'], meta: { name: 'AuthCode' } }
    /**
     * Find zero or one AuthCode that matches the filter.
     * @param {AuthCodeFindUniqueArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthCodeFindUniqueArgs>(args: SelectSubset<T, AuthCodeFindUniqueArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthCodeFindUniqueOrThrowArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeFindFirstArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthCodeFindFirstArgs>(args?: SelectSubset<T, AuthCodeFindFirstArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeFindFirstOrThrowArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthCodes
     * const authCodes = await prisma.authCode.findMany()
     * 
     * // Get first 10 AuthCodes
     * const authCodes = await prisma.authCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authCodeWithIdOnly = await prisma.authCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthCodeFindManyArgs>(args?: SelectSubset<T, AuthCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthCode.
     * @param {AuthCodeCreateArgs} args - Arguments to create a AuthCode.
     * @example
     * // Create one AuthCode
     * const AuthCode = await prisma.authCode.create({
     *   data: {
     *     // ... data to create a AuthCode
     *   }
     * })
     * 
     */
    create<T extends AuthCodeCreateArgs>(args: SelectSubset<T, AuthCodeCreateArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthCodes.
     * @param {AuthCodeCreateManyArgs} args - Arguments to create many AuthCodes.
     * @example
     * // Create many AuthCodes
     * const authCode = await prisma.authCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCodeCreateManyArgs>(args?: SelectSubset<T, AuthCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthCodes and returns the data saved in the database.
     * @param {AuthCodeCreateManyAndReturnArgs} args - Arguments to create many AuthCodes.
     * @example
     * // Create many AuthCodes
     * const authCode = await prisma.authCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthCodes and only return the `id`
     * const authCodeWithIdOnly = await prisma.authCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthCode.
     * @param {AuthCodeDeleteArgs} args - Arguments to delete one AuthCode.
     * @example
     * // Delete one AuthCode
     * const AuthCode = await prisma.authCode.delete({
     *   where: {
     *     // ... filter to delete one AuthCode
     *   }
     * })
     * 
     */
    delete<T extends AuthCodeDeleteArgs>(args: SelectSubset<T, AuthCodeDeleteArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthCode.
     * @param {AuthCodeUpdateArgs} args - Arguments to update one AuthCode.
     * @example
     * // Update one AuthCode
     * const authCode = await prisma.authCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthCodeUpdateArgs>(args: SelectSubset<T, AuthCodeUpdateArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthCodes.
     * @param {AuthCodeDeleteManyArgs} args - Arguments to filter AuthCodes to delete.
     * @example
     * // Delete a few AuthCodes
     * const { count } = await prisma.authCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthCodeDeleteManyArgs>(args?: SelectSubset<T, AuthCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthCodes
     * const authCode = await prisma.authCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthCodeUpdateManyArgs>(args: SelectSubset<T, AuthCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthCodes and returns the data updated in the database.
     * @param {AuthCodeUpdateManyAndReturnArgs} args - Arguments to update many AuthCodes.
     * @example
     * // Update many AuthCodes
     * const authCode = await prisma.authCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthCodes and only return the `id`
     * const authCodeWithIdOnly = await prisma.authCode.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AuthCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthCode.
     * @param {AuthCodeUpsertArgs} args - Arguments to update or create a AuthCode.
     * @example
     * // Update or create a AuthCode
     * const authCode = await prisma.authCode.upsert({
     *   create: {
     *     // ... data to create a AuthCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthCode we want to update
     *   }
     * })
     */
    upsert<T extends AuthCodeUpsertArgs>(args: SelectSubset<T, AuthCodeUpsertArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeCountArgs} args - Arguments to filter AuthCodes to count.
     * @example
     * // Count the number of AuthCodes
     * const count = await prisma.authCode.count({
     *   where: {
     *     // ... the filter for the AuthCodes we want to count
     *   }
     * })
    **/
    count<T extends AuthCodeCountArgs>(
      args?: Subset<T, AuthCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthCodeAggregateArgs>(args: Subset<T, AuthCodeAggregateArgs>): Prisma.PrismaPromise<GetAuthCodeAggregateType<T>>

    /**
     * Group by AuthCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeGroupByArgs} args - Group by arguments.
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
      T extends AuthCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthCodeGroupByArgs['orderBy'] }
        : { orderBy?: AuthCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthCode model
   */
  readonly fields: AuthCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthCode model
   */
  interface AuthCodeFieldRefs {
    readonly id: FieldRef<"AuthCode", 'String'>
    readonly code: FieldRef<"AuthCode", 'String'>
    readonly expiresAt: FieldRef<"AuthCode", 'DateTime'>
    readonly clientId: FieldRef<"AuthCode", 'String'>
    readonly userId: FieldRef<"AuthCode", 'String'>
    readonly redirectUri: FieldRef<"AuthCode", 'String'>
    readonly codeChallenge: FieldRef<"AuthCode", 'String'>
    readonly codeChallengeMethod: FieldRef<"AuthCode", 'String'>
    readonly resource: FieldRef<"AuthCode", 'String'>
    readonly createdAt: FieldRef<"AuthCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthCode findUnique
   */
  export type AuthCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode findUniqueOrThrow
   */
  export type AuthCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode findFirst
   */
  export type AuthCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthCodes.
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthCodes.
     */
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * AuthCode findFirstOrThrow
   */
  export type AuthCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthCodes.
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthCodes.
     */
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * AuthCode findMany
   */
  export type AuthCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCodes to fetch.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthCodes.
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * AuthCode create
   */
  export type AuthCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthCode.
     */
    data: XOR<AuthCodeCreateInput, AuthCodeUncheckedCreateInput>
  }

  /**
   * AuthCode createMany
   */
  export type AuthCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthCodes.
     */
    data: AuthCodeCreateManyInput | AuthCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthCode createManyAndReturn
   */
  export type AuthCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * The data used to create many AuthCodes.
     */
    data: AuthCodeCreateManyInput | AuthCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthCode update
   */
  export type AuthCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthCode.
     */
    data: XOR<AuthCodeUpdateInput, AuthCodeUncheckedUpdateInput>
    /**
     * Choose, which AuthCode to update.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode updateMany
   */
  export type AuthCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthCodes.
     */
    data: XOR<AuthCodeUpdateManyMutationInput, AuthCodeUncheckedUpdateManyInput>
    /**
     * Filter which AuthCodes to update
     */
    where?: AuthCodeWhereInput
    /**
     * Limit how many AuthCodes to update.
     */
    limit?: number
  }

  /**
   * AuthCode updateManyAndReturn
   */
  export type AuthCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * The data used to update AuthCodes.
     */
    data: XOR<AuthCodeUpdateManyMutationInput, AuthCodeUncheckedUpdateManyInput>
    /**
     * Filter which AuthCodes to update
     */
    where?: AuthCodeWhereInput
    /**
     * Limit how many AuthCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthCode upsert
   */
  export type AuthCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthCode to update in case it exists.
     */
    where: AuthCodeWhereUniqueInput
    /**
     * In case the AuthCode found by the `where` argument doesn't exist, create a new AuthCode with this data.
     */
    create: XOR<AuthCodeCreateInput, AuthCodeUncheckedCreateInput>
    /**
     * In case the AuthCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthCodeUpdateInput, AuthCodeUncheckedUpdateInput>
  }

  /**
   * AuthCode delete
   */
  export type AuthCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter which AuthCode to delete.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode deleteMany
   */
  export type AuthCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthCodes to delete
     */
    where?: AuthCodeWhereInput
    /**
     * Limit how many AuthCodes to delete.
     */
    limit?: number
  }

  /**
   * AuthCode without action
   */
  export type AuthCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    resource: string | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    resource: string | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    clientId: number
    userId: number
    resource: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    resource?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    resource?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    resource?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    clientId: string
    userId: string
    resource: string | null
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    resource?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "clientId" | "userId" | "resource" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      clientId: string
      userId: string
      resource: string | null
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly clientId: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly resource: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model MCPServer
   */

  export type AggregateMCPServer = {
    _count: MCPServerCountAggregateOutputType | null
    _min: MCPServerMinAggregateOutputType | null
    _max: MCPServerMaxAggregateOutputType | null
  }

  export type MCPServerMinAggregateOutputType = {
    id: string | null
    name: string | null
    identifier: string | null
    description: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MCPServerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    identifier: string | null
    description: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MCPServerCountAggregateOutputType = {
    id: number
    name: number
    identifier: number
    description: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MCPServerMinAggregateInputType = {
    id?: true
    name?: true
    identifier?: true
    description?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MCPServerMaxAggregateInputType = {
    id?: true
    name?: true
    identifier?: true
    description?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MCPServerCountAggregateInputType = {
    id?: true
    name?: true
    identifier?: true
    description?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MCPServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MCPServer to aggregate.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MCPServers
    **/
    _count?: true | MCPServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MCPServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MCPServerMaxAggregateInputType
  }

  export type GetMCPServerAggregateType<T extends MCPServerAggregateArgs> = {
        [P in keyof T & keyof AggregateMCPServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMCPServer[P]>
      : GetScalarType<T[P], AggregateMCPServer[P]>
  }




  export type MCPServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MCPServerWhereInput
    orderBy?: MCPServerOrderByWithAggregationInput | MCPServerOrderByWithAggregationInput[]
    by: MCPServerScalarFieldEnum[] | MCPServerScalarFieldEnum
    having?: MCPServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MCPServerCountAggregateInputType | true
    _min?: MCPServerMinAggregateInputType
    _max?: MCPServerMaxAggregateInputType
  }

  export type MCPServerGroupByOutputType = {
    id: string
    name: string
    identifier: string
    description: string | null
    version: string | null
    createdAt: Date
    updatedAt: Date
    _count: MCPServerCountAggregateOutputType | null
    _min: MCPServerMinAggregateOutputType | null
    _max: MCPServerMaxAggregateOutputType | null
  }

  type GetMCPServerGroupByPayload<T extends MCPServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MCPServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MCPServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MCPServerGroupByOutputType[P]>
            : GetScalarType<T[P], MCPServerGroupByOutputType[P]>
        }
      >
    >


  export type MCPServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    identifier?: boolean
    description?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requests?: boolean | MCPServer$requestsArgs<ExtArgs>
    securityEvents?: boolean | MCPServer$securityEventsArgs<ExtArgs>
    _count?: boolean | MCPServerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mCPServer"]>

  export type MCPServerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    identifier?: boolean
    description?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mCPServer"]>

  export type MCPServerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    identifier?: boolean
    description?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mCPServer"]>

  export type MCPServerSelectScalar = {
    id?: boolean
    name?: boolean
    identifier?: boolean
    description?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MCPServerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "identifier" | "description" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["mCPServer"]>
  export type MCPServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | MCPServer$requestsArgs<ExtArgs>
    securityEvents?: boolean | MCPServer$securityEventsArgs<ExtArgs>
    _count?: boolean | MCPServerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MCPServerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MCPServerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MCPServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MCPServer"
    objects: {
      requests: Prisma.$AnalyticsRequestPayload<ExtArgs>[]
      securityEvents: Prisma.$AnalyticsSecurityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      identifier: string
      description: string | null
      version: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mCPServer"]>
    composites: {}
  }

  type MCPServerGetPayload<S extends boolean | null | undefined | MCPServerDefaultArgs> = $Result.GetResult<Prisma.$MCPServerPayload, S>

  type MCPServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MCPServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MCPServerCountAggregateInputType | true
    }

  export interface MCPServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MCPServer'], meta: { name: 'MCPServer' } }
    /**
     * Find zero or one MCPServer that matches the filter.
     * @param {MCPServerFindUniqueArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MCPServerFindUniqueArgs>(args: SelectSubset<T, MCPServerFindUniqueArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MCPServer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MCPServerFindUniqueOrThrowArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MCPServerFindUniqueOrThrowArgs>(args: SelectSubset<T, MCPServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MCPServer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerFindFirstArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MCPServerFindFirstArgs>(args?: SelectSubset<T, MCPServerFindFirstArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MCPServer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerFindFirstOrThrowArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MCPServerFindFirstOrThrowArgs>(args?: SelectSubset<T, MCPServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MCPServers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MCPServers
     * const mCPServers = await prisma.mCPServer.findMany()
     * 
     * // Get first 10 MCPServers
     * const mCPServers = await prisma.mCPServer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mCPServerWithIdOnly = await prisma.mCPServer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MCPServerFindManyArgs>(args?: SelectSubset<T, MCPServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MCPServer.
     * @param {MCPServerCreateArgs} args - Arguments to create a MCPServer.
     * @example
     * // Create one MCPServer
     * const MCPServer = await prisma.mCPServer.create({
     *   data: {
     *     // ... data to create a MCPServer
     *   }
     * })
     * 
     */
    create<T extends MCPServerCreateArgs>(args: SelectSubset<T, MCPServerCreateArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MCPServers.
     * @param {MCPServerCreateManyArgs} args - Arguments to create many MCPServers.
     * @example
     * // Create many MCPServers
     * const mCPServer = await prisma.mCPServer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MCPServerCreateManyArgs>(args?: SelectSubset<T, MCPServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MCPServers and returns the data saved in the database.
     * @param {MCPServerCreateManyAndReturnArgs} args - Arguments to create many MCPServers.
     * @example
     * // Create many MCPServers
     * const mCPServer = await prisma.mCPServer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MCPServers and only return the `id`
     * const mCPServerWithIdOnly = await prisma.mCPServer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MCPServerCreateManyAndReturnArgs>(args?: SelectSubset<T, MCPServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MCPServer.
     * @param {MCPServerDeleteArgs} args - Arguments to delete one MCPServer.
     * @example
     * // Delete one MCPServer
     * const MCPServer = await prisma.mCPServer.delete({
     *   where: {
     *     // ... filter to delete one MCPServer
     *   }
     * })
     * 
     */
    delete<T extends MCPServerDeleteArgs>(args: SelectSubset<T, MCPServerDeleteArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MCPServer.
     * @param {MCPServerUpdateArgs} args - Arguments to update one MCPServer.
     * @example
     * // Update one MCPServer
     * const mCPServer = await prisma.mCPServer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MCPServerUpdateArgs>(args: SelectSubset<T, MCPServerUpdateArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MCPServers.
     * @param {MCPServerDeleteManyArgs} args - Arguments to filter MCPServers to delete.
     * @example
     * // Delete a few MCPServers
     * const { count } = await prisma.mCPServer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MCPServerDeleteManyArgs>(args?: SelectSubset<T, MCPServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MCPServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MCPServers
     * const mCPServer = await prisma.mCPServer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MCPServerUpdateManyArgs>(args: SelectSubset<T, MCPServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MCPServers and returns the data updated in the database.
     * @param {MCPServerUpdateManyAndReturnArgs} args - Arguments to update many MCPServers.
     * @example
     * // Update many MCPServers
     * const mCPServer = await prisma.mCPServer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MCPServers and only return the `id`
     * const mCPServerWithIdOnly = await prisma.mCPServer.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MCPServerUpdateManyAndReturnArgs>(args: SelectSubset<T, MCPServerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MCPServer.
     * @param {MCPServerUpsertArgs} args - Arguments to update or create a MCPServer.
     * @example
     * // Update or create a MCPServer
     * const mCPServer = await prisma.mCPServer.upsert({
     *   create: {
     *     // ... data to create a MCPServer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MCPServer we want to update
     *   }
     * })
     */
    upsert<T extends MCPServerUpsertArgs>(args: SelectSubset<T, MCPServerUpsertArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MCPServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerCountArgs} args - Arguments to filter MCPServers to count.
     * @example
     * // Count the number of MCPServers
     * const count = await prisma.mCPServer.count({
     *   where: {
     *     // ... the filter for the MCPServers we want to count
     *   }
     * })
    **/
    count<T extends MCPServerCountArgs>(
      args?: Subset<T, MCPServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MCPServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MCPServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MCPServerAggregateArgs>(args: Subset<T, MCPServerAggregateArgs>): Prisma.PrismaPromise<GetMCPServerAggregateType<T>>

    /**
     * Group by MCPServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerGroupByArgs} args - Group by arguments.
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
      T extends MCPServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MCPServerGroupByArgs['orderBy'] }
        : { orderBy?: MCPServerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MCPServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMCPServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MCPServer model
   */
  readonly fields: MCPServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MCPServer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MCPServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends MCPServer$requestsArgs<ExtArgs> = {}>(args?: Subset<T, MCPServer$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityEvents<T extends MCPServer$securityEventsArgs<ExtArgs> = {}>(args?: Subset<T, MCPServer$securityEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MCPServer model
   */
  interface MCPServerFieldRefs {
    readonly id: FieldRef<"MCPServer", 'String'>
    readonly name: FieldRef<"MCPServer", 'String'>
    readonly identifier: FieldRef<"MCPServer", 'String'>
    readonly description: FieldRef<"MCPServer", 'String'>
    readonly version: FieldRef<"MCPServer", 'String'>
    readonly createdAt: FieldRef<"MCPServer", 'DateTime'>
    readonly updatedAt: FieldRef<"MCPServer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MCPServer findUnique
   */
  export type MCPServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer findUniqueOrThrow
   */
  export type MCPServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer findFirst
   */
  export type MCPServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MCPServers.
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MCPServers.
     */
    distinct?: MCPServerScalarFieldEnum | MCPServerScalarFieldEnum[]
  }

  /**
   * MCPServer findFirstOrThrow
   */
  export type MCPServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MCPServers.
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MCPServers.
     */
    distinct?: MCPServerScalarFieldEnum | MCPServerScalarFieldEnum[]
  }

  /**
   * MCPServer findMany
   */
  export type MCPServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServers to fetch.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MCPServers.
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    distinct?: MCPServerScalarFieldEnum | MCPServerScalarFieldEnum[]
  }

  /**
   * MCPServer create
   */
  export type MCPServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * The data needed to create a MCPServer.
     */
    data: XOR<MCPServerCreateInput, MCPServerUncheckedCreateInput>
  }

  /**
   * MCPServer createMany
   */
  export type MCPServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MCPServers.
     */
    data: MCPServerCreateManyInput | MCPServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MCPServer createManyAndReturn
   */
  export type MCPServerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * The data used to create many MCPServers.
     */
    data: MCPServerCreateManyInput | MCPServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MCPServer update
   */
  export type MCPServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * The data needed to update a MCPServer.
     */
    data: XOR<MCPServerUpdateInput, MCPServerUncheckedUpdateInput>
    /**
     * Choose, which MCPServer to update.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer updateMany
   */
  export type MCPServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MCPServers.
     */
    data: XOR<MCPServerUpdateManyMutationInput, MCPServerUncheckedUpdateManyInput>
    /**
     * Filter which MCPServers to update
     */
    where?: MCPServerWhereInput
    /**
     * Limit how many MCPServers to update.
     */
    limit?: number
  }

  /**
   * MCPServer updateManyAndReturn
   */
  export type MCPServerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * The data used to update MCPServers.
     */
    data: XOR<MCPServerUpdateManyMutationInput, MCPServerUncheckedUpdateManyInput>
    /**
     * Filter which MCPServers to update
     */
    where?: MCPServerWhereInput
    /**
     * Limit how many MCPServers to update.
     */
    limit?: number
  }

  /**
   * MCPServer upsert
   */
  export type MCPServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * The filter to search for the MCPServer to update in case it exists.
     */
    where: MCPServerWhereUniqueInput
    /**
     * In case the MCPServer found by the `where` argument doesn't exist, create a new MCPServer with this data.
     */
    create: XOR<MCPServerCreateInput, MCPServerUncheckedCreateInput>
    /**
     * In case the MCPServer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MCPServerUpdateInput, MCPServerUncheckedUpdateInput>
  }

  /**
   * MCPServer delete
   */
  export type MCPServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter which MCPServer to delete.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer deleteMany
   */
  export type MCPServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MCPServers to delete
     */
    where?: MCPServerWhereInput
    /**
     * Limit how many MCPServers to delete.
     */
    limit?: number
  }

  /**
   * MCPServer.requests
   */
  export type MCPServer$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    where?: AnalyticsRequestWhereInput
    orderBy?: AnalyticsRequestOrderByWithRelationInput | AnalyticsRequestOrderByWithRelationInput[]
    cursor?: AnalyticsRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsRequestScalarFieldEnum | AnalyticsRequestScalarFieldEnum[]
  }

  /**
   * MCPServer.securityEvents
   */
  export type MCPServer$securityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    where?: AnalyticsSecurityWhereInput
    orderBy?: AnalyticsSecurityOrderByWithRelationInput | AnalyticsSecurityOrderByWithRelationInput[]
    cursor?: AnalyticsSecurityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsSecurityScalarFieldEnum | AnalyticsSecurityScalarFieldEnum[]
  }

  /**
   * MCPServer without action
   */
  export type MCPServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
  }


  /**
   * Model AnalyticsRequest
   */

  export type AggregateAnalyticsRequest = {
    _count: AnalyticsRequestCountAggregateOutputType | null
    _avg: AnalyticsRequestAvgAggregateOutputType | null
    _sum: AnalyticsRequestSumAggregateOutputType | null
    _min: AnalyticsRequestMinAggregateOutputType | null
    _max: AnalyticsRequestMaxAggregateOutputType | null
  }

  export type AnalyticsRequestAvgAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type AnalyticsRequestSumAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type AnalyticsRequestMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    endpoint: string | null
    method: string | null
    statusCode: number | null
    responseTime: number | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    mcpServerId: string | null
    ssoProvider: string | null
    userRole: string | null
    organization: string | null
    ipAddress: string | null
    userAgent: string | null
    country: string | null
    city: string | null
    clientType: string | null
    platform: string | null
    mcpMethod: string | null
    toolName: string | null
    oauthGrantType: string | null
    usePKCE: boolean | null
    redirectUri: string | null
  }

  export type AnalyticsRequestMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    endpoint: string | null
    method: string | null
    statusCode: number | null
    responseTime: number | null
    expiresAt: Date | null
    clientId: string | null
    userId: string | null
    mcpServerId: string | null
    ssoProvider: string | null
    userRole: string | null
    organization: string | null
    ipAddress: string | null
    userAgent: string | null
    country: string | null
    city: string | null
    clientType: string | null
    platform: string | null
    mcpMethod: string | null
    toolName: string | null
    oauthGrantType: string | null
    usePKCE: boolean | null
    redirectUri: string | null
  }

  export type AnalyticsRequestCountAggregateOutputType = {
    id: number
    timestamp: number
    endpoint: number
    method: number
    statusCode: number
    responseTime: number
    expiresAt: number
    clientId: number
    userId: number
    mcpServerId: number
    ssoProvider: number
    userRole: number
    scopes: number
    organization: number
    ipAddress: number
    userAgent: number
    country: number
    city: number
    clientType: number
    platform: number
    mcpMethod: number
    toolName: number
    oauthGrantType: number
    tokenScopes: number
    usePKCE: number
    redirectUri: number
    _all: number
  }


  export type AnalyticsRequestAvgAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type AnalyticsRequestSumAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type AnalyticsRequestMinAggregateInputType = {
    id?: true
    timestamp?: true
    endpoint?: true
    method?: true
    statusCode?: true
    responseTime?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    mcpServerId?: true
    ssoProvider?: true
    userRole?: true
    organization?: true
    ipAddress?: true
    userAgent?: true
    country?: true
    city?: true
    clientType?: true
    platform?: true
    mcpMethod?: true
    toolName?: true
    oauthGrantType?: true
    usePKCE?: true
    redirectUri?: true
  }

  export type AnalyticsRequestMaxAggregateInputType = {
    id?: true
    timestamp?: true
    endpoint?: true
    method?: true
    statusCode?: true
    responseTime?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    mcpServerId?: true
    ssoProvider?: true
    userRole?: true
    organization?: true
    ipAddress?: true
    userAgent?: true
    country?: true
    city?: true
    clientType?: true
    platform?: true
    mcpMethod?: true
    toolName?: true
    oauthGrantType?: true
    usePKCE?: true
    redirectUri?: true
  }

  export type AnalyticsRequestCountAggregateInputType = {
    id?: true
    timestamp?: true
    endpoint?: true
    method?: true
    statusCode?: true
    responseTime?: true
    expiresAt?: true
    clientId?: true
    userId?: true
    mcpServerId?: true
    ssoProvider?: true
    userRole?: true
    scopes?: true
    organization?: true
    ipAddress?: true
    userAgent?: true
    country?: true
    city?: true
    clientType?: true
    platform?: true
    mcpMethod?: true
    toolName?: true
    oauthGrantType?: true
    tokenScopes?: true
    usePKCE?: true
    redirectUri?: true
    _all?: true
  }

  export type AnalyticsRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsRequest to aggregate.
     */
    where?: AnalyticsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsRequests to fetch.
     */
    orderBy?: AnalyticsRequestOrderByWithRelationInput | AnalyticsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsRequests
    **/
    _count?: true | AnalyticsRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsRequestMaxAggregateInputType
  }

  export type GetAnalyticsRequestAggregateType<T extends AnalyticsRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsRequest[P]>
      : GetScalarType<T[P], AggregateAnalyticsRequest[P]>
  }




  export type AnalyticsRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsRequestWhereInput
    orderBy?: AnalyticsRequestOrderByWithAggregationInput | AnalyticsRequestOrderByWithAggregationInput[]
    by: AnalyticsRequestScalarFieldEnum[] | AnalyticsRequestScalarFieldEnum
    having?: AnalyticsRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsRequestCountAggregateInputType | true
    _avg?: AnalyticsRequestAvgAggregateInputType
    _sum?: AnalyticsRequestSumAggregateInputType
    _min?: AnalyticsRequestMinAggregateInputType
    _max?: AnalyticsRequestMaxAggregateInputType
  }

  export type AnalyticsRequestGroupByOutputType = {
    id: string
    timestamp: Date
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt: Date
    clientId: string | null
    userId: string | null
    mcpServerId: string | null
    ssoProvider: string | null
    userRole: string | null
    scopes: string[]
    organization: string | null
    ipAddress: string
    userAgent: string
    country: string | null
    city: string | null
    clientType: string | null
    platform: string | null
    mcpMethod: string | null
    toolName: string | null
    oauthGrantType: string | null
    tokenScopes: string[]
    usePKCE: boolean | null
    redirectUri: string | null
    _count: AnalyticsRequestCountAggregateOutputType | null
    _avg: AnalyticsRequestAvgAggregateOutputType | null
    _sum: AnalyticsRequestSumAggregateOutputType | null
    _min: AnalyticsRequestMinAggregateOutputType | null
    _max: AnalyticsRequestMaxAggregateOutputType | null
  }

  type GetAnalyticsRequestGroupByPayload<T extends AnalyticsRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsRequestGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    responseTime?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    mcpServerId?: boolean
    ssoProvider?: boolean
    userRole?: boolean
    scopes?: boolean
    organization?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
    clientType?: boolean
    platform?: boolean
    mcpMethod?: boolean
    toolName?: boolean
    oauthGrantType?: boolean
    tokenScopes?: boolean
    usePKCE?: boolean
    redirectUri?: boolean
    client?: boolean | AnalyticsRequest$clientArgs<ExtArgs>
    user?: boolean | AnalyticsRequest$userArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsRequest$mcpServerArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsRequest"]>

  export type AnalyticsRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    responseTime?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    mcpServerId?: boolean
    ssoProvider?: boolean
    userRole?: boolean
    scopes?: boolean
    organization?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
    clientType?: boolean
    platform?: boolean
    mcpMethod?: boolean
    toolName?: boolean
    oauthGrantType?: boolean
    tokenScopes?: boolean
    usePKCE?: boolean
    redirectUri?: boolean
    client?: boolean | AnalyticsRequest$clientArgs<ExtArgs>
    user?: boolean | AnalyticsRequest$userArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsRequest$mcpServerArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsRequest"]>

  export type AnalyticsRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    responseTime?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    mcpServerId?: boolean
    ssoProvider?: boolean
    userRole?: boolean
    scopes?: boolean
    organization?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
    clientType?: boolean
    platform?: boolean
    mcpMethod?: boolean
    toolName?: boolean
    oauthGrantType?: boolean
    tokenScopes?: boolean
    usePKCE?: boolean
    redirectUri?: boolean
    client?: boolean | AnalyticsRequest$clientArgs<ExtArgs>
    user?: boolean | AnalyticsRequest$userArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsRequest$mcpServerArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsRequest"]>

  export type AnalyticsRequestSelectScalar = {
    id?: boolean
    timestamp?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    responseTime?: boolean
    expiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    mcpServerId?: boolean
    ssoProvider?: boolean
    userRole?: boolean
    scopes?: boolean
    organization?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
    clientType?: boolean
    platform?: boolean
    mcpMethod?: boolean
    toolName?: boolean
    oauthGrantType?: boolean
    tokenScopes?: boolean
    usePKCE?: boolean
    redirectUri?: boolean
  }

  export type AnalyticsRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "endpoint" | "method" | "statusCode" | "responseTime" | "expiresAt" | "clientId" | "userId" | "mcpServerId" | "ssoProvider" | "userRole" | "scopes" | "organization" | "ipAddress" | "userAgent" | "country" | "city" | "clientType" | "platform" | "mcpMethod" | "toolName" | "oauthGrantType" | "tokenScopes" | "usePKCE" | "redirectUri", ExtArgs["result"]["analyticsRequest"]>
  export type AnalyticsRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | AnalyticsRequest$clientArgs<ExtArgs>
    user?: boolean | AnalyticsRequest$userArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsRequest$mcpServerArgs<ExtArgs>
  }
  export type AnalyticsRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | AnalyticsRequest$clientArgs<ExtArgs>
    user?: boolean | AnalyticsRequest$userArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsRequest$mcpServerArgs<ExtArgs>
  }
  export type AnalyticsRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | AnalyticsRequest$clientArgs<ExtArgs>
    user?: boolean | AnalyticsRequest$userArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsRequest$mcpServerArgs<ExtArgs>
  }

  export type $AnalyticsRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsRequest"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      mcpServer: Prisma.$MCPServerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      endpoint: string
      method: string
      statusCode: number
      responseTime: number
      expiresAt: Date
      clientId: string | null
      userId: string | null
      mcpServerId: string | null
      ssoProvider: string | null
      userRole: string | null
      scopes: string[]
      organization: string | null
      ipAddress: string
      userAgent: string
      country: string | null
      city: string | null
      clientType: string | null
      platform: string | null
      mcpMethod: string | null
      toolName: string | null
      oauthGrantType: string | null
      tokenScopes: string[]
      usePKCE: boolean | null
      redirectUri: string | null
    }, ExtArgs["result"]["analyticsRequest"]>
    composites: {}
  }

  type AnalyticsRequestGetPayload<S extends boolean | null | undefined | AnalyticsRequestDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsRequestPayload, S>

  type AnalyticsRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsRequestCountAggregateInputType | true
    }

  export interface AnalyticsRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsRequest'], meta: { name: 'AnalyticsRequest' } }
    /**
     * Find zero or one AnalyticsRequest that matches the filter.
     * @param {AnalyticsRequestFindUniqueArgs} args - Arguments to find a AnalyticsRequest
     * @example
     * // Get one AnalyticsRequest
     * const analyticsRequest = await prisma.analyticsRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsRequestFindUniqueArgs>(args: SelectSubset<T, AnalyticsRequestFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsRequestFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsRequest
     * @example
     * // Get one AnalyticsRequest
     * const analyticsRequest = await prisma.analyticsRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsRequestFindFirstArgs} args - Arguments to find a AnalyticsRequest
     * @example
     * // Get one AnalyticsRequest
     * const analyticsRequest = await prisma.analyticsRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsRequestFindFirstArgs>(args?: SelectSubset<T, AnalyticsRequestFindFirstArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsRequestFindFirstOrThrowArgs} args - Arguments to find a AnalyticsRequest
     * @example
     * // Get one AnalyticsRequest
     * const analyticsRequest = await prisma.analyticsRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsRequests
     * const analyticsRequests = await prisma.analyticsRequest.findMany()
     * 
     * // Get first 10 AnalyticsRequests
     * const analyticsRequests = await prisma.analyticsRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsRequestWithIdOnly = await prisma.analyticsRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsRequestFindManyArgs>(args?: SelectSubset<T, AnalyticsRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsRequest.
     * @param {AnalyticsRequestCreateArgs} args - Arguments to create a AnalyticsRequest.
     * @example
     * // Create one AnalyticsRequest
     * const AnalyticsRequest = await prisma.analyticsRequest.create({
     *   data: {
     *     // ... data to create a AnalyticsRequest
     *   }
     * })
     * 
     */
    create<T extends AnalyticsRequestCreateArgs>(args: SelectSubset<T, AnalyticsRequestCreateArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsRequests.
     * @param {AnalyticsRequestCreateManyArgs} args - Arguments to create many AnalyticsRequests.
     * @example
     * // Create many AnalyticsRequests
     * const analyticsRequest = await prisma.analyticsRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsRequestCreateManyArgs>(args?: SelectSubset<T, AnalyticsRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsRequests and returns the data saved in the database.
     * @param {AnalyticsRequestCreateManyAndReturnArgs} args - Arguments to create many AnalyticsRequests.
     * @example
     * // Create many AnalyticsRequests
     * const analyticsRequest = await prisma.analyticsRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsRequests and only return the `id`
     * const analyticsRequestWithIdOnly = await prisma.analyticsRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsRequest.
     * @param {AnalyticsRequestDeleteArgs} args - Arguments to delete one AnalyticsRequest.
     * @example
     * // Delete one AnalyticsRequest
     * const AnalyticsRequest = await prisma.analyticsRequest.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsRequest
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsRequestDeleteArgs>(args: SelectSubset<T, AnalyticsRequestDeleteArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsRequest.
     * @param {AnalyticsRequestUpdateArgs} args - Arguments to update one AnalyticsRequest.
     * @example
     * // Update one AnalyticsRequest
     * const analyticsRequest = await prisma.analyticsRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsRequestUpdateArgs>(args: SelectSubset<T, AnalyticsRequestUpdateArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsRequests.
     * @param {AnalyticsRequestDeleteManyArgs} args - Arguments to filter AnalyticsRequests to delete.
     * @example
     * // Delete a few AnalyticsRequests
     * const { count } = await prisma.analyticsRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsRequestDeleteManyArgs>(args?: SelectSubset<T, AnalyticsRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsRequests
     * const analyticsRequest = await prisma.analyticsRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsRequestUpdateManyArgs>(args: SelectSubset<T, AnalyticsRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsRequests and returns the data updated in the database.
     * @param {AnalyticsRequestUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsRequests.
     * @example
     * // Update many AnalyticsRequests
     * const analyticsRequest = await prisma.analyticsRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsRequests and only return the `id`
     * const analyticsRequestWithIdOnly = await prisma.analyticsRequest.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AnalyticsRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsRequest.
     * @param {AnalyticsRequestUpsertArgs} args - Arguments to update or create a AnalyticsRequest.
     * @example
     * // Update or create a AnalyticsRequest
     * const analyticsRequest = await prisma.analyticsRequest.upsert({
     *   create: {
     *     // ... data to create a AnalyticsRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsRequest we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsRequestUpsertArgs>(args: SelectSubset<T, AnalyticsRequestUpsertArgs<ExtArgs>>): Prisma__AnalyticsRequestClient<$Result.GetResult<Prisma.$AnalyticsRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsRequestCountArgs} args - Arguments to filter AnalyticsRequests to count.
     * @example
     * // Count the number of AnalyticsRequests
     * const count = await prisma.analyticsRequest.count({
     *   where: {
     *     // ... the filter for the AnalyticsRequests we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsRequestCountArgs>(
      args?: Subset<T, AnalyticsRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsRequestAggregateArgs>(args: Subset<T, AnalyticsRequestAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsRequestAggregateType<T>>

    /**
     * Group by AnalyticsRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsRequestGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsRequestGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsRequest model
   */
  readonly fields: AnalyticsRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends AnalyticsRequest$clientArgs<ExtArgs> = {}>(args?: Subset<T, AnalyticsRequest$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends AnalyticsRequest$userArgs<ExtArgs> = {}>(args?: Subset<T, AnalyticsRequest$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mcpServer<T extends AnalyticsRequest$mcpServerArgs<ExtArgs> = {}>(args?: Subset<T, AnalyticsRequest$mcpServerArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnalyticsRequest model
   */
  interface AnalyticsRequestFieldRefs {
    readonly id: FieldRef<"AnalyticsRequest", 'String'>
    readonly timestamp: FieldRef<"AnalyticsRequest", 'DateTime'>
    readonly endpoint: FieldRef<"AnalyticsRequest", 'String'>
    readonly method: FieldRef<"AnalyticsRequest", 'String'>
    readonly statusCode: FieldRef<"AnalyticsRequest", 'Int'>
    readonly responseTime: FieldRef<"AnalyticsRequest", 'Int'>
    readonly expiresAt: FieldRef<"AnalyticsRequest", 'DateTime'>
    readonly clientId: FieldRef<"AnalyticsRequest", 'String'>
    readonly userId: FieldRef<"AnalyticsRequest", 'String'>
    readonly mcpServerId: FieldRef<"AnalyticsRequest", 'String'>
    readonly ssoProvider: FieldRef<"AnalyticsRequest", 'String'>
    readonly userRole: FieldRef<"AnalyticsRequest", 'String'>
    readonly scopes: FieldRef<"AnalyticsRequest", 'String[]'>
    readonly organization: FieldRef<"AnalyticsRequest", 'String'>
    readonly ipAddress: FieldRef<"AnalyticsRequest", 'String'>
    readonly userAgent: FieldRef<"AnalyticsRequest", 'String'>
    readonly country: FieldRef<"AnalyticsRequest", 'String'>
    readonly city: FieldRef<"AnalyticsRequest", 'String'>
    readonly clientType: FieldRef<"AnalyticsRequest", 'String'>
    readonly platform: FieldRef<"AnalyticsRequest", 'String'>
    readonly mcpMethod: FieldRef<"AnalyticsRequest", 'String'>
    readonly toolName: FieldRef<"AnalyticsRequest", 'String'>
    readonly oauthGrantType: FieldRef<"AnalyticsRequest", 'String'>
    readonly tokenScopes: FieldRef<"AnalyticsRequest", 'String[]'>
    readonly usePKCE: FieldRef<"AnalyticsRequest", 'Boolean'>
    readonly redirectUri: FieldRef<"AnalyticsRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsRequest findUnique
   */
  export type AnalyticsRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsRequest to fetch.
     */
    where: AnalyticsRequestWhereUniqueInput
  }

  /**
   * AnalyticsRequest findUniqueOrThrow
   */
  export type AnalyticsRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsRequest to fetch.
     */
    where: AnalyticsRequestWhereUniqueInput
  }

  /**
   * AnalyticsRequest findFirst
   */
  export type AnalyticsRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsRequest to fetch.
     */
    where?: AnalyticsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsRequests to fetch.
     */
    orderBy?: AnalyticsRequestOrderByWithRelationInput | AnalyticsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsRequests.
     */
    cursor?: AnalyticsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsRequests.
     */
    distinct?: AnalyticsRequestScalarFieldEnum | AnalyticsRequestScalarFieldEnum[]
  }

  /**
   * AnalyticsRequest findFirstOrThrow
   */
  export type AnalyticsRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsRequest to fetch.
     */
    where?: AnalyticsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsRequests to fetch.
     */
    orderBy?: AnalyticsRequestOrderByWithRelationInput | AnalyticsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsRequests.
     */
    cursor?: AnalyticsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsRequests.
     */
    distinct?: AnalyticsRequestScalarFieldEnum | AnalyticsRequestScalarFieldEnum[]
  }

  /**
   * AnalyticsRequest findMany
   */
  export type AnalyticsRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsRequests to fetch.
     */
    where?: AnalyticsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsRequests to fetch.
     */
    orderBy?: AnalyticsRequestOrderByWithRelationInput | AnalyticsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsRequests.
     */
    cursor?: AnalyticsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsRequests.
     */
    skip?: number
    distinct?: AnalyticsRequestScalarFieldEnum | AnalyticsRequestScalarFieldEnum[]
  }

  /**
   * AnalyticsRequest create
   */
  export type AnalyticsRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsRequest.
     */
    data: XOR<AnalyticsRequestCreateInput, AnalyticsRequestUncheckedCreateInput>
  }

  /**
   * AnalyticsRequest createMany
   */
  export type AnalyticsRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsRequests.
     */
    data: AnalyticsRequestCreateManyInput | AnalyticsRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsRequest createManyAndReturn
   */
  export type AnalyticsRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsRequests.
     */
    data: AnalyticsRequestCreateManyInput | AnalyticsRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalyticsRequest update
   */
  export type AnalyticsRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsRequest.
     */
    data: XOR<AnalyticsRequestUpdateInput, AnalyticsRequestUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsRequest to update.
     */
    where: AnalyticsRequestWhereUniqueInput
  }

  /**
   * AnalyticsRequest updateMany
   */
  export type AnalyticsRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsRequests.
     */
    data: XOR<AnalyticsRequestUpdateManyMutationInput, AnalyticsRequestUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsRequests to update
     */
    where?: AnalyticsRequestWhereInput
    /**
     * Limit how many AnalyticsRequests to update.
     */
    limit?: number
  }

  /**
   * AnalyticsRequest updateManyAndReturn
   */
  export type AnalyticsRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsRequests.
     */
    data: XOR<AnalyticsRequestUpdateManyMutationInput, AnalyticsRequestUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsRequests to update
     */
    where?: AnalyticsRequestWhereInput
    /**
     * Limit how many AnalyticsRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalyticsRequest upsert
   */
  export type AnalyticsRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsRequest to update in case it exists.
     */
    where: AnalyticsRequestWhereUniqueInput
    /**
     * In case the AnalyticsRequest found by the `where` argument doesn't exist, create a new AnalyticsRequest with this data.
     */
    create: XOR<AnalyticsRequestCreateInput, AnalyticsRequestUncheckedCreateInput>
    /**
     * In case the AnalyticsRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsRequestUpdateInput, AnalyticsRequestUncheckedUpdateInput>
  }

  /**
   * AnalyticsRequest delete
   */
  export type AnalyticsRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
    /**
     * Filter which AnalyticsRequest to delete.
     */
    where: AnalyticsRequestWhereUniqueInput
  }

  /**
   * AnalyticsRequest deleteMany
   */
  export type AnalyticsRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsRequests to delete
     */
    where?: AnalyticsRequestWhereInput
    /**
     * Limit how many AnalyticsRequests to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsRequest.client
   */
  export type AnalyticsRequest$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * AnalyticsRequest.user
   */
  export type AnalyticsRequest$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AnalyticsRequest.mcpServer
   */
  export type AnalyticsRequest$mcpServerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    where?: MCPServerWhereInput
  }

  /**
   * AnalyticsRequest without action
   */
  export type AnalyticsRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsRequest
     */
    select?: AnalyticsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsRequest
     */
    omit?: AnalyticsRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsRequestInclude<ExtArgs> | null
  }


  /**
   * Model AnalyticsSecurity
   */

  export type AggregateAnalyticsSecurity = {
    _count: AnalyticsSecurityCountAggregateOutputType | null
    _avg: AnalyticsSecurityAvgAggregateOutputType | null
    _sum: AnalyticsSecuritySumAggregateOutputType | null
    _min: AnalyticsSecurityMinAggregateOutputType | null
    _max: AnalyticsSecurityMaxAggregateOutputType | null
  }

  export type AnalyticsSecurityAvgAggregateOutputType = {
    riskScore: number | null
  }

  export type AnalyticsSecuritySumAggregateOutputType = {
    riskScore: number | null
  }

  export type AnalyticsSecurityMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    eventType: $Enums.SecurityEventType | null
    severity: string | null
    expiresAt: Date | null
    userId: string | null
    clientId: string | null
    mcpServerId: string | null
    ipAddress: string | null
    userAgent: string | null
    endpoint: string | null
    country: string | null
    city: string | null
    organization: string | null
    ssoProvider: string | null
    riskScore: number | null
    resolved: boolean | null
    resolvedAt: Date | null
    resolvedBy: string | null
  }

  export type AnalyticsSecurityMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    eventType: $Enums.SecurityEventType | null
    severity: string | null
    expiresAt: Date | null
    userId: string | null
    clientId: string | null
    mcpServerId: string | null
    ipAddress: string | null
    userAgent: string | null
    endpoint: string | null
    country: string | null
    city: string | null
    organization: string | null
    ssoProvider: string | null
    riskScore: number | null
    resolved: boolean | null
    resolvedAt: Date | null
    resolvedBy: string | null
  }

  export type AnalyticsSecurityCountAggregateOutputType = {
    id: number
    timestamp: number
    eventType: number
    severity: number
    expiresAt: number
    userId: number
    clientId: number
    mcpServerId: number
    ipAddress: number
    userAgent: number
    endpoint: number
    country: number
    city: number
    organization: number
    ssoProvider: number
    details: number
    riskScore: number
    resolved: number
    resolvedAt: number
    resolvedBy: number
    _all: number
  }


  export type AnalyticsSecurityAvgAggregateInputType = {
    riskScore?: true
  }

  export type AnalyticsSecuritySumAggregateInputType = {
    riskScore?: true
  }

  export type AnalyticsSecurityMinAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    severity?: true
    expiresAt?: true
    userId?: true
    clientId?: true
    mcpServerId?: true
    ipAddress?: true
    userAgent?: true
    endpoint?: true
    country?: true
    city?: true
    organization?: true
    ssoProvider?: true
    riskScore?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
  }

  export type AnalyticsSecurityMaxAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    severity?: true
    expiresAt?: true
    userId?: true
    clientId?: true
    mcpServerId?: true
    ipAddress?: true
    userAgent?: true
    endpoint?: true
    country?: true
    city?: true
    organization?: true
    ssoProvider?: true
    riskScore?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
  }

  export type AnalyticsSecurityCountAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    severity?: true
    expiresAt?: true
    userId?: true
    clientId?: true
    mcpServerId?: true
    ipAddress?: true
    userAgent?: true
    endpoint?: true
    country?: true
    city?: true
    organization?: true
    ssoProvider?: true
    details?: true
    riskScore?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
    _all?: true
  }

  export type AnalyticsSecurityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsSecurity to aggregate.
     */
    where?: AnalyticsSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsSecurities to fetch.
     */
    orderBy?: AnalyticsSecurityOrderByWithRelationInput | AnalyticsSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsSecurities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsSecurities
    **/
    _count?: true | AnalyticsSecurityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsSecurityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSecuritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsSecurityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsSecurityMaxAggregateInputType
  }

  export type GetAnalyticsSecurityAggregateType<T extends AnalyticsSecurityAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsSecurity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsSecurity[P]>
      : GetScalarType<T[P], AggregateAnalyticsSecurity[P]>
  }




  export type AnalyticsSecurityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsSecurityWhereInput
    orderBy?: AnalyticsSecurityOrderByWithAggregationInput | AnalyticsSecurityOrderByWithAggregationInput[]
    by: AnalyticsSecurityScalarFieldEnum[] | AnalyticsSecurityScalarFieldEnum
    having?: AnalyticsSecurityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsSecurityCountAggregateInputType | true
    _avg?: AnalyticsSecurityAvgAggregateInputType
    _sum?: AnalyticsSecuritySumAggregateInputType
    _min?: AnalyticsSecurityMinAggregateInputType
    _max?: AnalyticsSecurityMaxAggregateInputType
  }

  export type AnalyticsSecurityGroupByOutputType = {
    id: string
    timestamp: Date
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt: Date
    userId: string | null
    clientId: string | null
    mcpServerId: string | null
    ipAddress: string
    userAgent: string
    endpoint: string | null
    country: string | null
    city: string | null
    organization: string | null
    ssoProvider: string | null
    details: JsonValue
    riskScore: number
    resolved: boolean
    resolvedAt: Date | null
    resolvedBy: string | null
    _count: AnalyticsSecurityCountAggregateOutputType | null
    _avg: AnalyticsSecurityAvgAggregateOutputType | null
    _sum: AnalyticsSecuritySumAggregateOutputType | null
    _min: AnalyticsSecurityMinAggregateOutputType | null
    _max: AnalyticsSecurityMaxAggregateOutputType | null
  }

  type GetAnalyticsSecurityGroupByPayload<T extends AnalyticsSecurityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsSecurityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsSecurityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsSecurityGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsSecurityGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSecuritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    expiresAt?: boolean
    userId?: boolean
    clientId?: boolean
    mcpServerId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    endpoint?: boolean
    country?: boolean
    city?: boolean
    organization?: boolean
    ssoProvider?: boolean
    details?: boolean
    riskScore?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    user?: boolean | AnalyticsSecurity$userArgs<ExtArgs>
    client?: boolean | AnalyticsSecurity$clientArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsSecurity$mcpServerArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsSecurity"]>

  export type AnalyticsSecuritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    expiresAt?: boolean
    userId?: boolean
    clientId?: boolean
    mcpServerId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    endpoint?: boolean
    country?: boolean
    city?: boolean
    organization?: boolean
    ssoProvider?: boolean
    details?: boolean
    riskScore?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    user?: boolean | AnalyticsSecurity$userArgs<ExtArgs>
    client?: boolean | AnalyticsSecurity$clientArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsSecurity$mcpServerArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsSecurity"]>

  export type AnalyticsSecuritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    expiresAt?: boolean
    userId?: boolean
    clientId?: boolean
    mcpServerId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    endpoint?: boolean
    country?: boolean
    city?: boolean
    organization?: boolean
    ssoProvider?: boolean
    details?: boolean
    riskScore?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    user?: boolean | AnalyticsSecurity$userArgs<ExtArgs>
    client?: boolean | AnalyticsSecurity$clientArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsSecurity$mcpServerArgs<ExtArgs>
  }, ExtArgs["result"]["analyticsSecurity"]>

  export type AnalyticsSecuritySelectScalar = {
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    expiresAt?: boolean
    userId?: boolean
    clientId?: boolean
    mcpServerId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    endpoint?: boolean
    country?: boolean
    city?: boolean
    organization?: boolean
    ssoProvider?: boolean
    details?: boolean
    riskScore?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
  }

  export type AnalyticsSecurityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "eventType" | "severity" | "expiresAt" | "userId" | "clientId" | "mcpServerId" | "ipAddress" | "userAgent" | "endpoint" | "country" | "city" | "organization" | "ssoProvider" | "details" | "riskScore" | "resolved" | "resolvedAt" | "resolvedBy", ExtArgs["result"]["analyticsSecurity"]>
  export type AnalyticsSecurityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AnalyticsSecurity$userArgs<ExtArgs>
    client?: boolean | AnalyticsSecurity$clientArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsSecurity$mcpServerArgs<ExtArgs>
  }
  export type AnalyticsSecurityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AnalyticsSecurity$userArgs<ExtArgs>
    client?: boolean | AnalyticsSecurity$clientArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsSecurity$mcpServerArgs<ExtArgs>
  }
  export type AnalyticsSecurityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AnalyticsSecurity$userArgs<ExtArgs>
    client?: boolean | AnalyticsSecurity$clientArgs<ExtArgs>
    mcpServer?: boolean | AnalyticsSecurity$mcpServerArgs<ExtArgs>
  }

  export type $AnalyticsSecurityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsSecurity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      mcpServer: Prisma.$MCPServerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      eventType: $Enums.SecurityEventType
      severity: string
      expiresAt: Date
      userId: string | null
      clientId: string | null
      mcpServerId: string | null
      ipAddress: string
      userAgent: string
      endpoint: string | null
      country: string | null
      city: string | null
      organization: string | null
      ssoProvider: string | null
      details: Prisma.JsonValue
      riskScore: number
      resolved: boolean
      resolvedAt: Date | null
      resolvedBy: string | null
    }, ExtArgs["result"]["analyticsSecurity"]>
    composites: {}
  }

  type AnalyticsSecurityGetPayload<S extends boolean | null | undefined | AnalyticsSecurityDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsSecurityPayload, S>

  type AnalyticsSecurityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsSecurityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsSecurityCountAggregateInputType | true
    }

  export interface AnalyticsSecurityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsSecurity'], meta: { name: 'AnalyticsSecurity' } }
    /**
     * Find zero or one AnalyticsSecurity that matches the filter.
     * @param {AnalyticsSecurityFindUniqueArgs} args - Arguments to find a AnalyticsSecurity
     * @example
     * // Get one AnalyticsSecurity
     * const analyticsSecurity = await prisma.analyticsSecurity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsSecurityFindUniqueArgs>(args: SelectSubset<T, AnalyticsSecurityFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsSecurity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsSecurityFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsSecurity
     * @example
     * // Get one AnalyticsSecurity
     * const analyticsSecurity = await prisma.analyticsSecurity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsSecurityFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsSecurityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsSecurity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsSecurityFindFirstArgs} args - Arguments to find a AnalyticsSecurity
     * @example
     * // Get one AnalyticsSecurity
     * const analyticsSecurity = await prisma.analyticsSecurity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsSecurityFindFirstArgs>(args?: SelectSubset<T, AnalyticsSecurityFindFirstArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsSecurity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsSecurityFindFirstOrThrowArgs} args - Arguments to find a AnalyticsSecurity
     * @example
     * // Get one AnalyticsSecurity
     * const analyticsSecurity = await prisma.analyticsSecurity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsSecurityFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsSecurityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsSecurities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsSecurityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsSecurities
     * const analyticsSecurities = await prisma.analyticsSecurity.findMany()
     * 
     * // Get first 10 AnalyticsSecurities
     * const analyticsSecurities = await prisma.analyticsSecurity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsSecurityWithIdOnly = await prisma.analyticsSecurity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsSecurityFindManyArgs>(args?: SelectSubset<T, AnalyticsSecurityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsSecurity.
     * @param {AnalyticsSecurityCreateArgs} args - Arguments to create a AnalyticsSecurity.
     * @example
     * // Create one AnalyticsSecurity
     * const AnalyticsSecurity = await prisma.analyticsSecurity.create({
     *   data: {
     *     // ... data to create a AnalyticsSecurity
     *   }
     * })
     * 
     */
    create<T extends AnalyticsSecurityCreateArgs>(args: SelectSubset<T, AnalyticsSecurityCreateArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsSecurities.
     * @param {AnalyticsSecurityCreateManyArgs} args - Arguments to create many AnalyticsSecurities.
     * @example
     * // Create many AnalyticsSecurities
     * const analyticsSecurity = await prisma.analyticsSecurity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsSecurityCreateManyArgs>(args?: SelectSubset<T, AnalyticsSecurityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsSecurities and returns the data saved in the database.
     * @param {AnalyticsSecurityCreateManyAndReturnArgs} args - Arguments to create many AnalyticsSecurities.
     * @example
     * // Create many AnalyticsSecurities
     * const analyticsSecurity = await prisma.analyticsSecurity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsSecurities and only return the `id`
     * const analyticsSecurityWithIdOnly = await prisma.analyticsSecurity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsSecurityCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsSecurityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsSecurity.
     * @param {AnalyticsSecurityDeleteArgs} args - Arguments to delete one AnalyticsSecurity.
     * @example
     * // Delete one AnalyticsSecurity
     * const AnalyticsSecurity = await prisma.analyticsSecurity.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsSecurity
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsSecurityDeleteArgs>(args: SelectSubset<T, AnalyticsSecurityDeleteArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsSecurity.
     * @param {AnalyticsSecurityUpdateArgs} args - Arguments to update one AnalyticsSecurity.
     * @example
     * // Update one AnalyticsSecurity
     * const analyticsSecurity = await prisma.analyticsSecurity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsSecurityUpdateArgs>(args: SelectSubset<T, AnalyticsSecurityUpdateArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsSecurities.
     * @param {AnalyticsSecurityDeleteManyArgs} args - Arguments to filter AnalyticsSecurities to delete.
     * @example
     * // Delete a few AnalyticsSecurities
     * const { count } = await prisma.analyticsSecurity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsSecurityDeleteManyArgs>(args?: SelectSubset<T, AnalyticsSecurityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsSecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsSecurityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsSecurities
     * const analyticsSecurity = await prisma.analyticsSecurity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsSecurityUpdateManyArgs>(args: SelectSubset<T, AnalyticsSecurityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsSecurities and returns the data updated in the database.
     * @param {AnalyticsSecurityUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsSecurities.
     * @example
     * // Update many AnalyticsSecurities
     * const analyticsSecurity = await prisma.analyticsSecurity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsSecurities and only return the `id`
     * const analyticsSecurityWithIdOnly = await prisma.analyticsSecurity.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AnalyticsSecurityUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsSecurityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsSecurity.
     * @param {AnalyticsSecurityUpsertArgs} args - Arguments to update or create a AnalyticsSecurity.
     * @example
     * // Update or create a AnalyticsSecurity
     * const analyticsSecurity = await prisma.analyticsSecurity.upsert({
     *   create: {
     *     // ... data to create a AnalyticsSecurity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsSecurity we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsSecurityUpsertArgs>(args: SelectSubset<T, AnalyticsSecurityUpsertArgs<ExtArgs>>): Prisma__AnalyticsSecurityClient<$Result.GetResult<Prisma.$AnalyticsSecurityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsSecurities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsSecurityCountArgs} args - Arguments to filter AnalyticsSecurities to count.
     * @example
     * // Count the number of AnalyticsSecurities
     * const count = await prisma.analyticsSecurity.count({
     *   where: {
     *     // ... the filter for the AnalyticsSecurities we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsSecurityCountArgs>(
      args?: Subset<T, AnalyticsSecurityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsSecurityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsSecurity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsSecurityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsSecurityAggregateArgs>(args: Subset<T, AnalyticsSecurityAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsSecurityAggregateType<T>>

    /**
     * Group by AnalyticsSecurity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsSecurityGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsSecurityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsSecurityGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsSecurityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsSecurityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsSecurityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsSecurity model
   */
  readonly fields: AnalyticsSecurityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsSecurity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsSecurityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AnalyticsSecurity$userArgs<ExtArgs> = {}>(args?: Subset<T, AnalyticsSecurity$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends AnalyticsSecurity$clientArgs<ExtArgs> = {}>(args?: Subset<T, AnalyticsSecurity$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mcpServer<T extends AnalyticsSecurity$mcpServerArgs<ExtArgs> = {}>(args?: Subset<T, AnalyticsSecurity$mcpServerArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnalyticsSecurity model
   */
  interface AnalyticsSecurityFieldRefs {
    readonly id: FieldRef<"AnalyticsSecurity", 'String'>
    readonly timestamp: FieldRef<"AnalyticsSecurity", 'DateTime'>
    readonly eventType: FieldRef<"AnalyticsSecurity", 'SecurityEventType'>
    readonly severity: FieldRef<"AnalyticsSecurity", 'String'>
    readonly expiresAt: FieldRef<"AnalyticsSecurity", 'DateTime'>
    readonly userId: FieldRef<"AnalyticsSecurity", 'String'>
    readonly clientId: FieldRef<"AnalyticsSecurity", 'String'>
    readonly mcpServerId: FieldRef<"AnalyticsSecurity", 'String'>
    readonly ipAddress: FieldRef<"AnalyticsSecurity", 'String'>
    readonly userAgent: FieldRef<"AnalyticsSecurity", 'String'>
    readonly endpoint: FieldRef<"AnalyticsSecurity", 'String'>
    readonly country: FieldRef<"AnalyticsSecurity", 'String'>
    readonly city: FieldRef<"AnalyticsSecurity", 'String'>
    readonly organization: FieldRef<"AnalyticsSecurity", 'String'>
    readonly ssoProvider: FieldRef<"AnalyticsSecurity", 'String'>
    readonly details: FieldRef<"AnalyticsSecurity", 'Json'>
    readonly riskScore: FieldRef<"AnalyticsSecurity", 'Int'>
    readonly resolved: FieldRef<"AnalyticsSecurity", 'Boolean'>
    readonly resolvedAt: FieldRef<"AnalyticsSecurity", 'DateTime'>
    readonly resolvedBy: FieldRef<"AnalyticsSecurity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsSecurity findUnique
   */
  export type AnalyticsSecurityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsSecurity to fetch.
     */
    where: AnalyticsSecurityWhereUniqueInput
  }

  /**
   * AnalyticsSecurity findUniqueOrThrow
   */
  export type AnalyticsSecurityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsSecurity to fetch.
     */
    where: AnalyticsSecurityWhereUniqueInput
  }

  /**
   * AnalyticsSecurity findFirst
   */
  export type AnalyticsSecurityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsSecurity to fetch.
     */
    where?: AnalyticsSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsSecurities to fetch.
     */
    orderBy?: AnalyticsSecurityOrderByWithRelationInput | AnalyticsSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsSecurities.
     */
    cursor?: AnalyticsSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsSecurities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsSecurities.
     */
    distinct?: AnalyticsSecurityScalarFieldEnum | AnalyticsSecurityScalarFieldEnum[]
  }

  /**
   * AnalyticsSecurity findFirstOrThrow
   */
  export type AnalyticsSecurityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsSecurity to fetch.
     */
    where?: AnalyticsSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsSecurities to fetch.
     */
    orderBy?: AnalyticsSecurityOrderByWithRelationInput | AnalyticsSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsSecurities.
     */
    cursor?: AnalyticsSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsSecurities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsSecurities.
     */
    distinct?: AnalyticsSecurityScalarFieldEnum | AnalyticsSecurityScalarFieldEnum[]
  }

  /**
   * AnalyticsSecurity findMany
   */
  export type AnalyticsSecurityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * Filter, which AnalyticsSecurities to fetch.
     */
    where?: AnalyticsSecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsSecurities to fetch.
     */
    orderBy?: AnalyticsSecurityOrderByWithRelationInput | AnalyticsSecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsSecurities.
     */
    cursor?: AnalyticsSecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsSecurities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsSecurities.
     */
    skip?: number
    distinct?: AnalyticsSecurityScalarFieldEnum | AnalyticsSecurityScalarFieldEnum[]
  }

  /**
   * AnalyticsSecurity create
   */
  export type AnalyticsSecurityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsSecurity.
     */
    data: XOR<AnalyticsSecurityCreateInput, AnalyticsSecurityUncheckedCreateInput>
  }

  /**
   * AnalyticsSecurity createMany
   */
  export type AnalyticsSecurityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsSecurities.
     */
    data: AnalyticsSecurityCreateManyInput | AnalyticsSecurityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsSecurity createManyAndReturn
   */
  export type AnalyticsSecurityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsSecurities.
     */
    data: AnalyticsSecurityCreateManyInput | AnalyticsSecurityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalyticsSecurity update
   */
  export type AnalyticsSecurityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsSecurity.
     */
    data: XOR<AnalyticsSecurityUpdateInput, AnalyticsSecurityUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsSecurity to update.
     */
    where: AnalyticsSecurityWhereUniqueInput
  }

  /**
   * AnalyticsSecurity updateMany
   */
  export type AnalyticsSecurityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsSecurities.
     */
    data: XOR<AnalyticsSecurityUpdateManyMutationInput, AnalyticsSecurityUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsSecurities to update
     */
    where?: AnalyticsSecurityWhereInput
    /**
     * Limit how many AnalyticsSecurities to update.
     */
    limit?: number
  }

  /**
   * AnalyticsSecurity updateManyAndReturn
   */
  export type AnalyticsSecurityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsSecurities.
     */
    data: XOR<AnalyticsSecurityUpdateManyMutationInput, AnalyticsSecurityUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsSecurities to update
     */
    where?: AnalyticsSecurityWhereInput
    /**
     * Limit how many AnalyticsSecurities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalyticsSecurity upsert
   */
  export type AnalyticsSecurityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsSecurity to update in case it exists.
     */
    where: AnalyticsSecurityWhereUniqueInput
    /**
     * In case the AnalyticsSecurity found by the `where` argument doesn't exist, create a new AnalyticsSecurity with this data.
     */
    create: XOR<AnalyticsSecurityCreateInput, AnalyticsSecurityUncheckedCreateInput>
    /**
     * In case the AnalyticsSecurity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsSecurityUpdateInput, AnalyticsSecurityUncheckedUpdateInput>
  }

  /**
   * AnalyticsSecurity delete
   */
  export type AnalyticsSecurityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
    /**
     * Filter which AnalyticsSecurity to delete.
     */
    where: AnalyticsSecurityWhereUniqueInput
  }

  /**
   * AnalyticsSecurity deleteMany
   */
  export type AnalyticsSecurityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsSecurities to delete
     */
    where?: AnalyticsSecurityWhereInput
    /**
     * Limit how many AnalyticsSecurities to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsSecurity.user
   */
  export type AnalyticsSecurity$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AnalyticsSecurity.client
   */
  export type AnalyticsSecurity$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * AnalyticsSecurity.mcpServer
   */
  export type AnalyticsSecurity$mcpServerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    where?: MCPServerWhereInput
  }

  /**
   * AnalyticsSecurity without action
   */
  export type AnalyticsSecurityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsSecurity
     */
    select?: AnalyticsSecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsSecurity
     */
    omit?: AnalyticsSecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsSecurityInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    name: 'name',
    redirectUris: 'redirectUris',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const AccessTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    clientId: 'clientId',
    userId: 'userId',
    resource: 'resource',
    createdAt: 'createdAt'
  };

  export type AccessTokenScalarFieldEnum = (typeof AccessTokenScalarFieldEnum)[keyof typeof AccessTokenScalarFieldEnum]


  export const AuthCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expiresAt: 'expiresAt',
    clientId: 'clientId',
    userId: 'userId',
    redirectUri: 'redirectUri',
    codeChallenge: 'codeChallenge',
    codeChallengeMethod: 'codeChallengeMethod',
    resource: 'resource',
    createdAt: 'createdAt'
  };

  export type AuthCodeScalarFieldEnum = (typeof AuthCodeScalarFieldEnum)[keyof typeof AuthCodeScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    clientId: 'clientId',
    userId: 'userId',
    resource: 'resource',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const MCPServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    identifier: 'identifier',
    description: 'description',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MCPServerScalarFieldEnum = (typeof MCPServerScalarFieldEnum)[keyof typeof MCPServerScalarFieldEnum]


  export const AnalyticsRequestScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    endpoint: 'endpoint',
    method: 'method',
    statusCode: 'statusCode',
    responseTime: 'responseTime',
    expiresAt: 'expiresAt',
    clientId: 'clientId',
    userId: 'userId',
    mcpServerId: 'mcpServerId',
    ssoProvider: 'ssoProvider',
    userRole: 'userRole',
    scopes: 'scopes',
    organization: 'organization',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    country: 'country',
    city: 'city',
    clientType: 'clientType',
    platform: 'platform',
    mcpMethod: 'mcpMethod',
    toolName: 'toolName',
    oauthGrantType: 'oauthGrantType',
    tokenScopes: 'tokenScopes',
    usePKCE: 'usePKCE',
    redirectUri: 'redirectUri'
  };

  export type AnalyticsRequestScalarFieldEnum = (typeof AnalyticsRequestScalarFieldEnum)[keyof typeof AnalyticsRequestScalarFieldEnum]


  export const AnalyticsSecurityScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    eventType: 'eventType',
    severity: 'severity',
    expiresAt: 'expiresAt',
    userId: 'userId',
    clientId: 'clientId',
    mcpServerId: 'mcpServerId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    endpoint: 'endpoint',
    country: 'country',
    city: 'city',
    organization: 'organization',
    ssoProvider: 'ssoProvider',
    details: 'details',
    riskScore: 'riskScore',
    resolved: 'resolved',
    resolvedAt: 'resolvedAt',
    resolvedBy: 'resolvedBy'
  };

  export type AnalyticsSecurityScalarFieldEnum = (typeof AnalyticsSecurityScalarFieldEnum)[keyof typeof AnalyticsSecurityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SecurityEventType'
   */
  export type EnumSecurityEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityEventType'>
    


  /**
   * Reference to a field of type 'SecurityEventType[]'
   */
  export type ListEnumSecurityEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityEventType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    clients?: ClientListRelationFilter
    accessTokens?: AccessTokenListRelationFilter
    authCodes?: AuthCodeListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    analyticsRequests?: AnalyticsRequestListRelationFilter
    securityEvents?: AnalyticsSecurityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    accessTokens?: AccessTokenOrderByRelationAggregateInput
    authCodes?: AuthCodeOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    analyticsRequests?: AnalyticsRequestOrderByRelationAggregateInput
    securityEvents?: AnalyticsSecurityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    clients?: ClientListRelationFilter
    accessTokens?: AccessTokenListRelationFilter
    authCodes?: AuthCodeListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    analyticsRequests?: AnalyticsRequestListRelationFilter
    securityEvents?: AnalyticsSecurityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    clientId?: StringFilter<"Client"> | string
    clientSecret?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    redirectUris?: StringNullableListFilter<"Client">
    userId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accessTokens?: AccessTokenListRelationFilter
    authCodes?: AuthCodeListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    analyticsRequests?: AnalyticsRequestListRelationFilter
    securityEvents?: AnalyticsSecurityListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    name?: SortOrder
    redirectUris?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accessTokens?: AccessTokenOrderByRelationAggregateInput
    authCodes?: AuthCodeOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    analyticsRequests?: AnalyticsRequestOrderByRelationAggregateInput
    securityEvents?: AnalyticsSecurityOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    clientSecret?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    redirectUris?: StringNullableListFilter<"Client">
    userId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accessTokens?: AccessTokenListRelationFilter
    authCodes?: AuthCodeListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    analyticsRequests?: AnalyticsRequestListRelationFilter
    securityEvents?: AnalyticsSecurityListRelationFilter
  }, "id" | "clientId">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    name?: SortOrder
    redirectUris?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    clientId?: StringWithAggregatesFilter<"Client"> | string
    clientSecret?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    redirectUris?: StringNullableListFilter<"Client">
    userId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type AccessTokenWhereInput = {
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    id?: StringFilter<"AccessToken"> | string
    token?: StringFilter<"AccessToken"> | string
    expiresAt?: DateTimeFilter<"AccessToken"> | Date | string
    clientId?: StringFilter<"AccessToken"> | string
    userId?: StringFilter<"AccessToken"> | string
    resource?: StringNullableFilter<"AccessToken"> | string | null
    createdAt?: DateTimeFilter<"AccessToken"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    expiresAt?: DateTimeFilter<"AccessToken"> | Date | string
    clientId?: StringFilter<"AccessToken"> | string
    userId?: StringFilter<"AccessToken"> | string
    resource?: StringNullableFilter<"AccessToken"> | string | null
    createdAt?: DateTimeFilter<"AccessToken"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type AccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AccessTokenCountOrderByAggregateInput
    _max?: AccessTokenMaxOrderByAggregateInput
    _min?: AccessTokenMinOrderByAggregateInput
  }

  export type AccessTokenScalarWhereWithAggregatesInput = {
    AND?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    OR?: AccessTokenScalarWhereWithAggregatesInput[]
    NOT?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessToken"> | string
    token?: StringWithAggregatesFilter<"AccessToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AccessToken"> | Date | string
    clientId?: StringWithAggregatesFilter<"AccessToken"> | string
    userId?: StringWithAggregatesFilter<"AccessToken"> | string
    resource?: StringNullableWithAggregatesFilter<"AccessToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccessToken"> | Date | string
  }

  export type AuthCodeWhereInput = {
    AND?: AuthCodeWhereInput | AuthCodeWhereInput[]
    OR?: AuthCodeWhereInput[]
    NOT?: AuthCodeWhereInput | AuthCodeWhereInput[]
    id?: StringFilter<"AuthCode"> | string
    code?: StringFilter<"AuthCode"> | string
    expiresAt?: DateTimeFilter<"AuthCode"> | Date | string
    clientId?: StringFilter<"AuthCode"> | string
    userId?: StringFilter<"AuthCode"> | string
    redirectUri?: StringFilter<"AuthCode"> | string
    codeChallenge?: StringNullableFilter<"AuthCode"> | string | null
    codeChallengeMethod?: StringNullableFilter<"AuthCode"> | string | null
    resource?: StringNullableFilter<"AuthCode"> | string | null
    createdAt?: DateTimeFilter<"AuthCode"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    redirectUri?: SortOrder
    codeChallenge?: SortOrderInput | SortOrder
    codeChallengeMethod?: SortOrderInput | SortOrder
    resource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AuthCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AuthCodeWhereInput | AuthCodeWhereInput[]
    OR?: AuthCodeWhereInput[]
    NOT?: AuthCodeWhereInput | AuthCodeWhereInput[]
    expiresAt?: DateTimeFilter<"AuthCode"> | Date | string
    clientId?: StringFilter<"AuthCode"> | string
    userId?: StringFilter<"AuthCode"> | string
    redirectUri?: StringFilter<"AuthCode"> | string
    codeChallenge?: StringNullableFilter<"AuthCode"> | string | null
    codeChallengeMethod?: StringNullableFilter<"AuthCode"> | string | null
    resource?: StringNullableFilter<"AuthCode"> | string | null
    createdAt?: DateTimeFilter<"AuthCode"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type AuthCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    redirectUri?: SortOrder
    codeChallenge?: SortOrderInput | SortOrder
    codeChallengeMethod?: SortOrderInput | SortOrder
    resource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuthCodeCountOrderByAggregateInput
    _max?: AuthCodeMaxOrderByAggregateInput
    _min?: AuthCodeMinOrderByAggregateInput
  }

  export type AuthCodeScalarWhereWithAggregatesInput = {
    AND?: AuthCodeScalarWhereWithAggregatesInput | AuthCodeScalarWhereWithAggregatesInput[]
    OR?: AuthCodeScalarWhereWithAggregatesInput[]
    NOT?: AuthCodeScalarWhereWithAggregatesInput | AuthCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthCode"> | string
    code?: StringWithAggregatesFilter<"AuthCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthCode"> | Date | string
    clientId?: StringWithAggregatesFilter<"AuthCode"> | string
    userId?: StringWithAggregatesFilter<"AuthCode"> | string
    redirectUri?: StringWithAggregatesFilter<"AuthCode"> | string
    codeChallenge?: StringNullableWithAggregatesFilter<"AuthCode"> | string | null
    codeChallengeMethod?: StringNullableWithAggregatesFilter<"AuthCode"> | string | null
    resource?: StringNullableWithAggregatesFilter<"AuthCode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthCode"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    clientId?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    resource?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    clientId?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    resource?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    clientId?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    resource?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type MCPServerWhereInput = {
    AND?: MCPServerWhereInput | MCPServerWhereInput[]
    OR?: MCPServerWhereInput[]
    NOT?: MCPServerWhereInput | MCPServerWhereInput[]
    id?: StringFilter<"MCPServer"> | string
    name?: StringFilter<"MCPServer"> | string
    identifier?: StringFilter<"MCPServer"> | string
    description?: StringNullableFilter<"MCPServer"> | string | null
    version?: StringNullableFilter<"MCPServer"> | string | null
    createdAt?: DateTimeFilter<"MCPServer"> | Date | string
    updatedAt?: DateTimeFilter<"MCPServer"> | Date | string
    requests?: AnalyticsRequestListRelationFilter
    securityEvents?: AnalyticsSecurityListRelationFilter
  }

  export type MCPServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requests?: AnalyticsRequestOrderByRelationAggregateInput
    securityEvents?: AnalyticsSecurityOrderByRelationAggregateInput
  }

  export type MCPServerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    identifier?: string
    AND?: MCPServerWhereInput | MCPServerWhereInput[]
    OR?: MCPServerWhereInput[]
    NOT?: MCPServerWhereInput | MCPServerWhereInput[]
    name?: StringFilter<"MCPServer"> | string
    description?: StringNullableFilter<"MCPServer"> | string | null
    version?: StringNullableFilter<"MCPServer"> | string | null
    createdAt?: DateTimeFilter<"MCPServer"> | Date | string
    updatedAt?: DateTimeFilter<"MCPServer"> | Date | string
    requests?: AnalyticsRequestListRelationFilter
    securityEvents?: AnalyticsSecurityListRelationFilter
  }, "id" | "identifier">

  export type MCPServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MCPServerCountOrderByAggregateInput
    _max?: MCPServerMaxOrderByAggregateInput
    _min?: MCPServerMinOrderByAggregateInput
  }

  export type MCPServerScalarWhereWithAggregatesInput = {
    AND?: MCPServerScalarWhereWithAggregatesInput | MCPServerScalarWhereWithAggregatesInput[]
    OR?: MCPServerScalarWhereWithAggregatesInput[]
    NOT?: MCPServerScalarWhereWithAggregatesInput | MCPServerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MCPServer"> | string
    name?: StringWithAggregatesFilter<"MCPServer"> | string
    identifier?: StringWithAggregatesFilter<"MCPServer"> | string
    description?: StringNullableWithAggregatesFilter<"MCPServer"> | string | null
    version?: StringNullableWithAggregatesFilter<"MCPServer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MCPServer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MCPServer"> | Date | string
  }

  export type AnalyticsRequestWhereInput = {
    AND?: AnalyticsRequestWhereInput | AnalyticsRequestWhereInput[]
    OR?: AnalyticsRequestWhereInput[]
    NOT?: AnalyticsRequestWhereInput | AnalyticsRequestWhereInput[]
    id?: StringFilter<"AnalyticsRequest"> | string
    timestamp?: DateTimeFilter<"AnalyticsRequest"> | Date | string
    endpoint?: StringFilter<"AnalyticsRequest"> | string
    method?: StringFilter<"AnalyticsRequest"> | string
    statusCode?: IntFilter<"AnalyticsRequest"> | number
    responseTime?: IntFilter<"AnalyticsRequest"> | number
    expiresAt?: DateTimeFilter<"AnalyticsRequest"> | Date | string
    clientId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    userId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    mcpServerId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    ssoProvider?: StringNullableFilter<"AnalyticsRequest"> | string | null
    userRole?: StringNullableFilter<"AnalyticsRequest"> | string | null
    scopes?: StringNullableListFilter<"AnalyticsRequest">
    organization?: StringNullableFilter<"AnalyticsRequest"> | string | null
    ipAddress?: StringFilter<"AnalyticsRequest"> | string
    userAgent?: StringFilter<"AnalyticsRequest"> | string
    country?: StringNullableFilter<"AnalyticsRequest"> | string | null
    city?: StringNullableFilter<"AnalyticsRequest"> | string | null
    clientType?: StringNullableFilter<"AnalyticsRequest"> | string | null
    platform?: StringNullableFilter<"AnalyticsRequest"> | string | null
    mcpMethod?: StringNullableFilter<"AnalyticsRequest"> | string | null
    toolName?: StringNullableFilter<"AnalyticsRequest"> | string | null
    oauthGrantType?: StringNullableFilter<"AnalyticsRequest"> | string | null
    tokenScopes?: StringNullableListFilter<"AnalyticsRequest">
    usePKCE?: BoolNullableFilter<"AnalyticsRequest"> | boolean | null
    redirectUri?: StringNullableFilter<"AnalyticsRequest"> | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mcpServer?: XOR<MCPServerNullableScalarRelationFilter, MCPServerWhereInput> | null
  }

  export type AnalyticsRequestOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    mcpServerId?: SortOrderInput | SortOrder
    ssoProvider?: SortOrderInput | SortOrder
    userRole?: SortOrderInput | SortOrder
    scopes?: SortOrder
    organization?: SortOrderInput | SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    clientType?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    mcpMethod?: SortOrderInput | SortOrder
    toolName?: SortOrderInput | SortOrder
    oauthGrantType?: SortOrderInput | SortOrder
    tokenScopes?: SortOrder
    usePKCE?: SortOrderInput | SortOrder
    redirectUri?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    mcpServer?: MCPServerOrderByWithRelationInput
  }

  export type AnalyticsRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsRequestWhereInput | AnalyticsRequestWhereInput[]
    OR?: AnalyticsRequestWhereInput[]
    NOT?: AnalyticsRequestWhereInput | AnalyticsRequestWhereInput[]
    timestamp?: DateTimeFilter<"AnalyticsRequest"> | Date | string
    endpoint?: StringFilter<"AnalyticsRequest"> | string
    method?: StringFilter<"AnalyticsRequest"> | string
    statusCode?: IntFilter<"AnalyticsRequest"> | number
    responseTime?: IntFilter<"AnalyticsRequest"> | number
    expiresAt?: DateTimeFilter<"AnalyticsRequest"> | Date | string
    clientId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    userId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    mcpServerId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    ssoProvider?: StringNullableFilter<"AnalyticsRequest"> | string | null
    userRole?: StringNullableFilter<"AnalyticsRequest"> | string | null
    scopes?: StringNullableListFilter<"AnalyticsRequest">
    organization?: StringNullableFilter<"AnalyticsRequest"> | string | null
    ipAddress?: StringFilter<"AnalyticsRequest"> | string
    userAgent?: StringFilter<"AnalyticsRequest"> | string
    country?: StringNullableFilter<"AnalyticsRequest"> | string | null
    city?: StringNullableFilter<"AnalyticsRequest"> | string | null
    clientType?: StringNullableFilter<"AnalyticsRequest"> | string | null
    platform?: StringNullableFilter<"AnalyticsRequest"> | string | null
    mcpMethod?: StringNullableFilter<"AnalyticsRequest"> | string | null
    toolName?: StringNullableFilter<"AnalyticsRequest"> | string | null
    oauthGrantType?: StringNullableFilter<"AnalyticsRequest"> | string | null
    tokenScopes?: StringNullableListFilter<"AnalyticsRequest">
    usePKCE?: BoolNullableFilter<"AnalyticsRequest"> | boolean | null
    redirectUri?: StringNullableFilter<"AnalyticsRequest"> | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mcpServer?: XOR<MCPServerNullableScalarRelationFilter, MCPServerWhereInput> | null
  }, "id">

  export type AnalyticsRequestOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    mcpServerId?: SortOrderInput | SortOrder
    ssoProvider?: SortOrderInput | SortOrder
    userRole?: SortOrderInput | SortOrder
    scopes?: SortOrder
    organization?: SortOrderInput | SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    clientType?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    mcpMethod?: SortOrderInput | SortOrder
    toolName?: SortOrderInput | SortOrder
    oauthGrantType?: SortOrderInput | SortOrder
    tokenScopes?: SortOrder
    usePKCE?: SortOrderInput | SortOrder
    redirectUri?: SortOrderInput | SortOrder
    _count?: AnalyticsRequestCountOrderByAggregateInput
    _avg?: AnalyticsRequestAvgOrderByAggregateInput
    _max?: AnalyticsRequestMaxOrderByAggregateInput
    _min?: AnalyticsRequestMinOrderByAggregateInput
    _sum?: AnalyticsRequestSumOrderByAggregateInput
  }

  export type AnalyticsRequestScalarWhereWithAggregatesInput = {
    AND?: AnalyticsRequestScalarWhereWithAggregatesInput | AnalyticsRequestScalarWhereWithAggregatesInput[]
    OR?: AnalyticsRequestScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsRequestScalarWhereWithAggregatesInput | AnalyticsRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsRequest"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AnalyticsRequest"> | Date | string
    endpoint?: StringWithAggregatesFilter<"AnalyticsRequest"> | string
    method?: StringWithAggregatesFilter<"AnalyticsRequest"> | string
    statusCode?: IntWithAggregatesFilter<"AnalyticsRequest"> | number
    responseTime?: IntWithAggregatesFilter<"AnalyticsRequest"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"AnalyticsRequest"> | Date | string
    clientId?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    userId?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    mcpServerId?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    ssoProvider?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    userRole?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    scopes?: StringNullableListFilter<"AnalyticsRequest">
    organization?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    ipAddress?: StringWithAggregatesFilter<"AnalyticsRequest"> | string
    userAgent?: StringWithAggregatesFilter<"AnalyticsRequest"> | string
    country?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    city?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    clientType?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    platform?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    mcpMethod?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    toolName?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    oauthGrantType?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
    tokenScopes?: StringNullableListFilter<"AnalyticsRequest">
    usePKCE?: BoolNullableWithAggregatesFilter<"AnalyticsRequest"> | boolean | null
    redirectUri?: StringNullableWithAggregatesFilter<"AnalyticsRequest"> | string | null
  }

  export type AnalyticsSecurityWhereInput = {
    AND?: AnalyticsSecurityWhereInput | AnalyticsSecurityWhereInput[]
    OR?: AnalyticsSecurityWhereInput[]
    NOT?: AnalyticsSecurityWhereInput | AnalyticsSecurityWhereInput[]
    id?: StringFilter<"AnalyticsSecurity"> | string
    timestamp?: DateTimeFilter<"AnalyticsSecurity"> | Date | string
    eventType?: EnumSecurityEventTypeFilter<"AnalyticsSecurity"> | $Enums.SecurityEventType
    severity?: StringFilter<"AnalyticsSecurity"> | string
    expiresAt?: DateTimeFilter<"AnalyticsSecurity"> | Date | string
    userId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    clientId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    mcpServerId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    ipAddress?: StringFilter<"AnalyticsSecurity"> | string
    userAgent?: StringFilter<"AnalyticsSecurity"> | string
    endpoint?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    country?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    city?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    organization?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    ssoProvider?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    details?: JsonFilter<"AnalyticsSecurity">
    riskScore?: IntFilter<"AnalyticsSecurity"> | number
    resolved?: BoolFilter<"AnalyticsSecurity"> | boolean
    resolvedAt?: DateTimeNullableFilter<"AnalyticsSecurity"> | Date | string | null
    resolvedBy?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    mcpServer?: XOR<MCPServerNullableScalarRelationFilter, MCPServerWhereInput> | null
  }

  export type AnalyticsSecurityOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    mcpServerId?: SortOrderInput | SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    endpoint?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    ssoProvider?: SortOrderInput | SortOrder
    details?: SortOrder
    riskScore?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    mcpServer?: MCPServerOrderByWithRelationInput
  }

  export type AnalyticsSecurityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsSecurityWhereInput | AnalyticsSecurityWhereInput[]
    OR?: AnalyticsSecurityWhereInput[]
    NOT?: AnalyticsSecurityWhereInput | AnalyticsSecurityWhereInput[]
    timestamp?: DateTimeFilter<"AnalyticsSecurity"> | Date | string
    eventType?: EnumSecurityEventTypeFilter<"AnalyticsSecurity"> | $Enums.SecurityEventType
    severity?: StringFilter<"AnalyticsSecurity"> | string
    expiresAt?: DateTimeFilter<"AnalyticsSecurity"> | Date | string
    userId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    clientId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    mcpServerId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    ipAddress?: StringFilter<"AnalyticsSecurity"> | string
    userAgent?: StringFilter<"AnalyticsSecurity"> | string
    endpoint?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    country?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    city?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    organization?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    ssoProvider?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    details?: JsonFilter<"AnalyticsSecurity">
    riskScore?: IntFilter<"AnalyticsSecurity"> | number
    resolved?: BoolFilter<"AnalyticsSecurity"> | boolean
    resolvedAt?: DateTimeNullableFilter<"AnalyticsSecurity"> | Date | string | null
    resolvedBy?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    mcpServer?: XOR<MCPServerNullableScalarRelationFilter, MCPServerWhereInput> | null
  }, "id">

  export type AnalyticsSecurityOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    mcpServerId?: SortOrderInput | SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    endpoint?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    ssoProvider?: SortOrderInput | SortOrder
    details?: SortOrder
    riskScore?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    _count?: AnalyticsSecurityCountOrderByAggregateInput
    _avg?: AnalyticsSecurityAvgOrderByAggregateInput
    _max?: AnalyticsSecurityMaxOrderByAggregateInput
    _min?: AnalyticsSecurityMinOrderByAggregateInput
    _sum?: AnalyticsSecuritySumOrderByAggregateInput
  }

  export type AnalyticsSecurityScalarWhereWithAggregatesInput = {
    AND?: AnalyticsSecurityScalarWhereWithAggregatesInput | AnalyticsSecurityScalarWhereWithAggregatesInput[]
    OR?: AnalyticsSecurityScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsSecurityScalarWhereWithAggregatesInput | AnalyticsSecurityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsSecurity"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AnalyticsSecurity"> | Date | string
    eventType?: EnumSecurityEventTypeWithAggregatesFilter<"AnalyticsSecurity"> | $Enums.SecurityEventType
    severity?: StringWithAggregatesFilter<"AnalyticsSecurity"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AnalyticsSecurity"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    mcpServerId?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    ipAddress?: StringWithAggregatesFilter<"AnalyticsSecurity"> | string
    userAgent?: StringWithAggregatesFilter<"AnalyticsSecurity"> | string
    endpoint?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    country?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    city?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    organization?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    ssoProvider?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
    details?: JsonWithAggregatesFilter<"AnalyticsSecurity">
    riskScore?: IntWithAggregatesFilter<"AnalyticsSecurity"> | number
    resolved?: BoolWithAggregatesFilter<"AnalyticsSecurity"> | boolean
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"AnalyticsSecurity"> | Date | string | null
    resolvedBy?: StringNullableWithAggregatesFilter<"AnalyticsSecurity"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutClientsInput
    accessTokens?: AccessTokenCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutClientsNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    resource?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutAccessTokensInput
    user: UserCreateNestedOneWithoutAccessTokensInput
  }

  export type AccessTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AccessTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAccessTokensNestedInput
    user?: UserUpdateOneRequiredWithoutAccessTokensNestedInput
  }

  export type AccessTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AccessTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutAuthCodesInput
    user: UserCreateNestedOneWithoutAuthCodesInput
  }

  export type AuthCodeUncheckedCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    clientId: string
    userId: string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
  }

  export type AuthCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAuthCodesNestedInput
    user?: UserUpdateOneRequiredWithoutAuthCodesNestedInput
  }

  export type AuthCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeCreateManyInput = {
    id?: string
    code: string
    expiresAt: Date | string
    clientId: string
    userId: string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
  }

  export type AuthCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    resource?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutRefreshTokensInput
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRefreshTokensNestedInput
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MCPServerCreateInput = {
    id?: string
    name: string
    identifier: string
    description?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: AnalyticsRequestCreateNestedManyWithoutMcpServerInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutMcpServerInput
  }

  export type MCPServerUncheckedCreateInput = {
    id?: string
    name: string
    identifier: string
    description?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: AnalyticsRequestUncheckedCreateNestedManyWithoutMcpServerInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutMcpServerInput
  }

  export type MCPServerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: AnalyticsRequestUpdateManyWithoutMcpServerNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutMcpServerNestedInput
  }

  export type MCPServerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: AnalyticsRequestUncheckedUpdateManyWithoutMcpServerNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutMcpServerNestedInput
  }

  export type MCPServerCreateManyInput = {
    id?: string
    name: string
    identifier: string
    description?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MCPServerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MCPServerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsRequestCreateInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
    client?: ClientCreateNestedOneWithoutAnalyticsRequestsInput
    user?: UserCreateNestedOneWithoutAnalyticsRequestsInput
    mcpServer?: MCPServerCreateNestedOneWithoutRequestsInput
  }

  export type AnalyticsRequestUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    clientId?: string | null
    userId?: string | null
    mcpServerId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutAnalyticsRequestsNestedInput
    user?: UserUpdateOneWithoutAnalyticsRequestsNestedInput
    mcpServer?: MCPServerUpdateOneWithoutRequestsNestedInput
  }

  export type AnalyticsRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsRequestCreateManyInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    clientId?: string | null
    userId?: string | null
    mcpServerId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityCreateInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    user?: UserCreateNestedOneWithoutSecurityEventsInput
    client?: ClientCreateNestedOneWithoutSecurityEventsInput
    mcpServer?: MCPServerCreateNestedOneWithoutSecurityEventsInput
  }

  export type AnalyticsSecurityUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    userId?: string | null
    clientId?: string | null
    mcpServerId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AnalyticsSecurityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutSecurityEventsNestedInput
    client?: ClientUpdateOneWithoutSecurityEventsNestedInput
    mcpServer?: MCPServerUpdateOneWithoutSecurityEventsNestedInput
  }

  export type AnalyticsSecurityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityCreateManyInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    userId?: string | null
    clientId?: string | null
    mcpServerId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AnalyticsSecurityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type AccessTokenListRelationFilter = {
    every?: AccessTokenWhereInput
    some?: AccessTokenWhereInput
    none?: AccessTokenWhereInput
  }

  export type AuthCodeListRelationFilter = {
    every?: AuthCodeWhereInput
    some?: AuthCodeWhereInput
    none?: AuthCodeWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type AnalyticsRequestListRelationFilter = {
    every?: AnalyticsRequestWhereInput
    some?: AnalyticsRequestWhereInput
    none?: AnalyticsRequestWhereInput
  }

  export type AnalyticsSecurityListRelationFilter = {
    every?: AnalyticsSecurityWhereInput
    some?: AnalyticsSecurityWhereInput
    none?: AnalyticsSecurityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyticsRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyticsSecurityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    name?: SortOrder
    redirectUris?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type AccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type AccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type AccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    redirectUri?: SortOrder
    codeChallenge?: SortOrder
    codeChallengeMethod?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    redirectUri?: SortOrder
    codeChallenge?: SortOrder
    codeChallengeMethod?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    redirectUri?: SortOrder
    codeChallenge?: SortOrder
    codeChallengeMethod?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    createdAt?: SortOrder
  }

  export type MCPServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    description?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MCPServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    description?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MCPServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    description?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type MCPServerNullableScalarRelationFilter = {
    is?: MCPServerWhereInput | null
    isNot?: MCPServerWhereInput | null
  }

  export type AnalyticsRequestCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    mcpServerId?: SortOrder
    ssoProvider?: SortOrder
    userRole?: SortOrder
    scopes?: SortOrder
    organization?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    country?: SortOrder
    city?: SortOrder
    clientType?: SortOrder
    platform?: SortOrder
    mcpMethod?: SortOrder
    toolName?: SortOrder
    oauthGrantType?: SortOrder
    tokenScopes?: SortOrder
    usePKCE?: SortOrder
    redirectUri?: SortOrder
  }

  export type AnalyticsRequestAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type AnalyticsRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    mcpServerId?: SortOrder
    ssoProvider?: SortOrder
    userRole?: SortOrder
    organization?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    country?: SortOrder
    city?: SortOrder
    clientType?: SortOrder
    platform?: SortOrder
    mcpMethod?: SortOrder
    toolName?: SortOrder
    oauthGrantType?: SortOrder
    usePKCE?: SortOrder
    redirectUri?: SortOrder
  }

  export type AnalyticsRequestMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    expiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    mcpServerId?: SortOrder
    ssoProvider?: SortOrder
    userRole?: SortOrder
    organization?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    country?: SortOrder
    city?: SortOrder
    clientType?: SortOrder
    platform?: SortOrder
    mcpMethod?: SortOrder
    toolName?: SortOrder
    oauthGrantType?: SortOrder
    usePKCE?: SortOrder
    redirectUri?: SortOrder
  }

  export type AnalyticsRequestSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumSecurityEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeFilter<$PrismaModel> | $Enums.SecurityEventType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnalyticsSecurityCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    mcpServerId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    endpoint?: SortOrder
    country?: SortOrder
    city?: SortOrder
    organization?: SortOrder
    ssoProvider?: SortOrder
    details?: SortOrder
    riskScore?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
  }

  export type AnalyticsSecurityAvgOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type AnalyticsSecurityMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    mcpServerId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    endpoint?: SortOrder
    country?: SortOrder
    city?: SortOrder
    organization?: SortOrder
    ssoProvider?: SortOrder
    riskScore?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
  }

  export type AnalyticsSecurityMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    mcpServerId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    endpoint?: SortOrder
    country?: SortOrder
    city?: SortOrder
    organization?: SortOrder
    ssoProvider?: SortOrder
    riskScore?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
  }

  export type AnalyticsSecuritySumOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type EnumSecurityEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.SecurityEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
    _max?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type AccessTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type AuthCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AnalyticsRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsRequestCreateWithoutUserInput, AnalyticsRequestUncheckedCreateWithoutUserInput> | AnalyticsRequestCreateWithoutUserInput[] | AnalyticsRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutUserInput | AnalyticsRequestCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsRequestCreateManyUserInputEnvelope
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
  }

  export type AnalyticsSecurityCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutUserInput, AnalyticsSecurityUncheckedCreateWithoutUserInput> | AnalyticsSecurityCreateWithoutUserInput[] | AnalyticsSecurityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutUserInput | AnalyticsSecurityCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsSecurityCreateManyUserInputEnvelope
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type AccessTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type AuthCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsRequestCreateWithoutUserInput, AnalyticsRequestUncheckedCreateWithoutUserInput> | AnalyticsRequestCreateWithoutUserInput[] | AnalyticsRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutUserInput | AnalyticsRequestCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsRequestCreateManyUserInputEnvelope
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
  }

  export type AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutUserInput, AnalyticsSecurityUncheckedCreateWithoutUserInput> | AnalyticsSecurityCreateWithoutUserInput[] | AnalyticsSecurityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutUserInput | AnalyticsSecurityCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsSecurityCreateManyUserInputEnvelope
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type AccessTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutUserInput | AccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutUserInput | AccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutUserInput | AccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type AuthCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    upsert?: AuthCodeUpsertWithWhereUniqueWithoutUserInput | AuthCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    set?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    disconnect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    delete?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    update?: AuthCodeUpdateWithWhereUniqueWithoutUserInput | AuthCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthCodeUpdateManyWithWhereWithoutUserInput | AuthCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AnalyticsRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsRequestCreateWithoutUserInput, AnalyticsRequestUncheckedCreateWithoutUserInput> | AnalyticsRequestCreateWithoutUserInput[] | AnalyticsRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutUserInput | AnalyticsRequestCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsRequestUpsertWithWhereUniqueWithoutUserInput | AnalyticsRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsRequestCreateManyUserInputEnvelope
    set?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    disconnect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    delete?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    update?: AnalyticsRequestUpdateWithWhereUniqueWithoutUserInput | AnalyticsRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsRequestUpdateManyWithWhereWithoutUserInput | AnalyticsRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
  }

  export type AnalyticsSecurityUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutUserInput, AnalyticsSecurityUncheckedCreateWithoutUserInput> | AnalyticsSecurityCreateWithoutUserInput[] | AnalyticsSecurityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutUserInput | AnalyticsSecurityCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsSecurityUpsertWithWhereUniqueWithoutUserInput | AnalyticsSecurityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsSecurityCreateManyUserInputEnvelope
    set?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    disconnect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    delete?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    update?: AnalyticsSecurityUpdateWithWhereUniqueWithoutUserInput | AnalyticsSecurityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsSecurityUpdateManyWithWhereWithoutUserInput | AnalyticsSecurityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type AccessTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutUserInput | AccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutUserInput | AccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutUserInput | AccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type AuthCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    upsert?: AuthCodeUpsertWithWhereUniqueWithoutUserInput | AuthCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    set?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    disconnect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    delete?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    update?: AuthCodeUpdateWithWhereUniqueWithoutUserInput | AuthCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthCodeUpdateManyWithWhereWithoutUserInput | AuthCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsRequestCreateWithoutUserInput, AnalyticsRequestUncheckedCreateWithoutUserInput> | AnalyticsRequestCreateWithoutUserInput[] | AnalyticsRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutUserInput | AnalyticsRequestCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsRequestUpsertWithWhereUniqueWithoutUserInput | AnalyticsRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsRequestCreateManyUserInputEnvelope
    set?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    disconnect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    delete?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    update?: AnalyticsRequestUpdateWithWhereUniqueWithoutUserInput | AnalyticsRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsRequestUpdateManyWithWhereWithoutUserInput | AnalyticsRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
  }

  export type AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutUserInput, AnalyticsSecurityUncheckedCreateWithoutUserInput> | AnalyticsSecurityCreateWithoutUserInput[] | AnalyticsSecurityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutUserInput | AnalyticsSecurityCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsSecurityUpsertWithWhereUniqueWithoutUserInput | AnalyticsSecurityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsSecurityCreateManyUserInputEnvelope
    set?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    disconnect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    delete?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    update?: AnalyticsSecurityUpdateWithWhereUniqueWithoutUserInput | AnalyticsSecurityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsSecurityUpdateManyWithWhereWithoutUserInput | AnalyticsSecurityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ClientCreateredirectUrisInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type AccessTokenCreateNestedManyWithoutClientInput = {
    create?: XOR<AccessTokenCreateWithoutClientInput, AccessTokenUncheckedCreateWithoutClientInput> | AccessTokenCreateWithoutClientInput[] | AccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutClientInput | AccessTokenCreateOrConnectWithoutClientInput[]
    createMany?: AccessTokenCreateManyClientInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type AuthCodeCreateNestedManyWithoutClientInput = {
    create?: XOR<AuthCodeCreateWithoutClientInput, AuthCodeUncheckedCreateWithoutClientInput> | AuthCodeCreateWithoutClientInput[] | AuthCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutClientInput | AuthCodeCreateOrConnectWithoutClientInput[]
    createMany?: AuthCodeCreateManyClientInputEnvelope
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutClientInput = {
    create?: XOR<RefreshTokenCreateWithoutClientInput, RefreshTokenUncheckedCreateWithoutClientInput> | RefreshTokenCreateWithoutClientInput[] | RefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutClientInput | RefreshTokenCreateOrConnectWithoutClientInput[]
    createMany?: RefreshTokenCreateManyClientInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AnalyticsRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<AnalyticsRequestCreateWithoutClientInput, AnalyticsRequestUncheckedCreateWithoutClientInput> | AnalyticsRequestCreateWithoutClientInput[] | AnalyticsRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutClientInput | AnalyticsRequestCreateOrConnectWithoutClientInput[]
    createMany?: AnalyticsRequestCreateManyClientInputEnvelope
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
  }

  export type AnalyticsSecurityCreateNestedManyWithoutClientInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutClientInput, AnalyticsSecurityUncheckedCreateWithoutClientInput> | AnalyticsSecurityCreateWithoutClientInput[] | AnalyticsSecurityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutClientInput | AnalyticsSecurityCreateOrConnectWithoutClientInput[]
    createMany?: AnalyticsSecurityCreateManyClientInputEnvelope
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
  }

  export type AccessTokenUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AccessTokenCreateWithoutClientInput, AccessTokenUncheckedCreateWithoutClientInput> | AccessTokenCreateWithoutClientInput[] | AccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutClientInput | AccessTokenCreateOrConnectWithoutClientInput[]
    createMany?: AccessTokenCreateManyClientInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type AuthCodeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AuthCodeCreateWithoutClientInput, AuthCodeUncheckedCreateWithoutClientInput> | AuthCodeCreateWithoutClientInput[] | AuthCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutClientInput | AuthCodeCreateOrConnectWithoutClientInput[]
    createMany?: AuthCodeCreateManyClientInputEnvelope
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<RefreshTokenCreateWithoutClientInput, RefreshTokenUncheckedCreateWithoutClientInput> | RefreshTokenCreateWithoutClientInput[] | RefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutClientInput | RefreshTokenCreateOrConnectWithoutClientInput[]
    createMany?: RefreshTokenCreateManyClientInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AnalyticsRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AnalyticsRequestCreateWithoutClientInput, AnalyticsRequestUncheckedCreateWithoutClientInput> | AnalyticsRequestCreateWithoutClientInput[] | AnalyticsRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutClientInput | AnalyticsRequestCreateOrConnectWithoutClientInput[]
    createMany?: AnalyticsRequestCreateManyClientInputEnvelope
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
  }

  export type AnalyticsSecurityUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutClientInput, AnalyticsSecurityUncheckedCreateWithoutClientInput> | AnalyticsSecurityCreateWithoutClientInput[] | AnalyticsSecurityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutClientInput | AnalyticsSecurityCreateOrConnectWithoutClientInput[]
    createMany?: AnalyticsSecurityCreateManyClientInputEnvelope
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
  }

  export type ClientUpdateredirectUrisInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type AccessTokenUpdateManyWithoutClientNestedInput = {
    create?: XOR<AccessTokenCreateWithoutClientInput, AccessTokenUncheckedCreateWithoutClientInput> | AccessTokenCreateWithoutClientInput[] | AccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutClientInput | AccessTokenCreateOrConnectWithoutClientInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutClientInput | AccessTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AccessTokenCreateManyClientInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutClientInput | AccessTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutClientInput | AccessTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type AuthCodeUpdateManyWithoutClientNestedInput = {
    create?: XOR<AuthCodeCreateWithoutClientInput, AuthCodeUncheckedCreateWithoutClientInput> | AuthCodeCreateWithoutClientInput[] | AuthCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutClientInput | AuthCodeCreateOrConnectWithoutClientInput[]
    upsert?: AuthCodeUpsertWithWhereUniqueWithoutClientInput | AuthCodeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AuthCodeCreateManyClientInputEnvelope
    set?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    disconnect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    delete?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    update?: AuthCodeUpdateWithWhereUniqueWithoutClientInput | AuthCodeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AuthCodeUpdateManyWithWhereWithoutClientInput | AuthCodeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutClientNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutClientInput, RefreshTokenUncheckedCreateWithoutClientInput> | RefreshTokenCreateWithoutClientInput[] | RefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutClientInput | RefreshTokenCreateOrConnectWithoutClientInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutClientInput | RefreshTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RefreshTokenCreateManyClientInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutClientInput | RefreshTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutClientInput | RefreshTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AnalyticsRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<AnalyticsRequestCreateWithoutClientInput, AnalyticsRequestUncheckedCreateWithoutClientInput> | AnalyticsRequestCreateWithoutClientInput[] | AnalyticsRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutClientInput | AnalyticsRequestCreateOrConnectWithoutClientInput[]
    upsert?: AnalyticsRequestUpsertWithWhereUniqueWithoutClientInput | AnalyticsRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AnalyticsRequestCreateManyClientInputEnvelope
    set?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    disconnect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    delete?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    update?: AnalyticsRequestUpdateWithWhereUniqueWithoutClientInput | AnalyticsRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AnalyticsRequestUpdateManyWithWhereWithoutClientInput | AnalyticsRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
  }

  export type AnalyticsSecurityUpdateManyWithoutClientNestedInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutClientInput, AnalyticsSecurityUncheckedCreateWithoutClientInput> | AnalyticsSecurityCreateWithoutClientInput[] | AnalyticsSecurityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutClientInput | AnalyticsSecurityCreateOrConnectWithoutClientInput[]
    upsert?: AnalyticsSecurityUpsertWithWhereUniqueWithoutClientInput | AnalyticsSecurityUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AnalyticsSecurityCreateManyClientInputEnvelope
    set?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    disconnect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    delete?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    update?: AnalyticsSecurityUpdateWithWhereUniqueWithoutClientInput | AnalyticsSecurityUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AnalyticsSecurityUpdateManyWithWhereWithoutClientInput | AnalyticsSecurityUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
  }

  export type AccessTokenUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AccessTokenCreateWithoutClientInput, AccessTokenUncheckedCreateWithoutClientInput> | AccessTokenCreateWithoutClientInput[] | AccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutClientInput | AccessTokenCreateOrConnectWithoutClientInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutClientInput | AccessTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AccessTokenCreateManyClientInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutClientInput | AccessTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutClientInput | AccessTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type AuthCodeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AuthCodeCreateWithoutClientInput, AuthCodeUncheckedCreateWithoutClientInput> | AuthCodeCreateWithoutClientInput[] | AuthCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutClientInput | AuthCodeCreateOrConnectWithoutClientInput[]
    upsert?: AuthCodeUpsertWithWhereUniqueWithoutClientInput | AuthCodeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AuthCodeCreateManyClientInputEnvelope
    set?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    disconnect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    delete?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    update?: AuthCodeUpdateWithWhereUniqueWithoutClientInput | AuthCodeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AuthCodeUpdateManyWithWhereWithoutClientInput | AuthCodeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutClientInput, RefreshTokenUncheckedCreateWithoutClientInput> | RefreshTokenCreateWithoutClientInput[] | RefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutClientInput | RefreshTokenCreateOrConnectWithoutClientInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutClientInput | RefreshTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RefreshTokenCreateManyClientInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutClientInput | RefreshTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutClientInput | RefreshTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AnalyticsRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AnalyticsRequestCreateWithoutClientInput, AnalyticsRequestUncheckedCreateWithoutClientInput> | AnalyticsRequestCreateWithoutClientInput[] | AnalyticsRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutClientInput | AnalyticsRequestCreateOrConnectWithoutClientInput[]
    upsert?: AnalyticsRequestUpsertWithWhereUniqueWithoutClientInput | AnalyticsRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AnalyticsRequestCreateManyClientInputEnvelope
    set?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    disconnect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    delete?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    update?: AnalyticsRequestUpdateWithWhereUniqueWithoutClientInput | AnalyticsRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AnalyticsRequestUpdateManyWithWhereWithoutClientInput | AnalyticsRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
  }

  export type AnalyticsSecurityUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutClientInput, AnalyticsSecurityUncheckedCreateWithoutClientInput> | AnalyticsSecurityCreateWithoutClientInput[] | AnalyticsSecurityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutClientInput | AnalyticsSecurityCreateOrConnectWithoutClientInput[]
    upsert?: AnalyticsSecurityUpsertWithWhereUniqueWithoutClientInput | AnalyticsSecurityUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AnalyticsSecurityCreateManyClientInputEnvelope
    set?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    disconnect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    delete?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    update?: AnalyticsSecurityUpdateWithWhereUniqueWithoutClientInput | AnalyticsSecurityUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AnalyticsSecurityUpdateManyWithWhereWithoutClientInput | AnalyticsSecurityUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutAccessTokensInput = {
    create?: XOR<ClientCreateWithoutAccessTokensInput, ClientUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAccessTokensInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccessTokensInput = {
    create?: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokensInput
    connect?: UserWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutAccessTokensNestedInput = {
    create?: XOR<ClientCreateWithoutAccessTokensInput, ClientUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAccessTokensInput
    upsert?: ClientUpsertWithoutAccessTokensInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAccessTokensInput, ClientUpdateWithoutAccessTokensInput>, ClientUncheckedUpdateWithoutAccessTokensInput>
  }

  export type UserUpdateOneRequiredWithoutAccessTokensNestedInput = {
    create?: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokensInput
    upsert?: UserUpsertWithoutAccessTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessTokensInput, UserUpdateWithoutAccessTokensInput>, UserUncheckedUpdateWithoutAccessTokensInput>
  }

  export type ClientCreateNestedOneWithoutAuthCodesInput = {
    create?: XOR<ClientCreateWithoutAuthCodesInput, ClientUncheckedCreateWithoutAuthCodesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAuthCodesInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuthCodesInput = {
    create?: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthCodesInput
    connect?: UserWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutAuthCodesNestedInput = {
    create?: XOR<ClientCreateWithoutAuthCodesInput, ClientUncheckedCreateWithoutAuthCodesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAuthCodesInput
    upsert?: ClientUpsertWithoutAuthCodesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAuthCodesInput, ClientUpdateWithoutAuthCodesInput>, ClientUncheckedUpdateWithoutAuthCodesInput>
  }

  export type UserUpdateOneRequiredWithoutAuthCodesNestedInput = {
    create?: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthCodesInput
    upsert?: UserUpsertWithoutAuthCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthCodesInput, UserUpdateWithoutAuthCodesInput>, UserUncheckedUpdateWithoutAuthCodesInput>
  }

  export type ClientCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<ClientCreateWithoutRefreshTokensInput, ClientUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRefreshTokensInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<ClientCreateWithoutRefreshTokensInput, ClientUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRefreshTokensInput
    upsert?: ClientUpsertWithoutRefreshTokensInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutRefreshTokensInput, ClientUpdateWithoutRefreshTokensInput>, ClientUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type AnalyticsRequestCreateNestedManyWithoutMcpServerInput = {
    create?: XOR<AnalyticsRequestCreateWithoutMcpServerInput, AnalyticsRequestUncheckedCreateWithoutMcpServerInput> | AnalyticsRequestCreateWithoutMcpServerInput[] | AnalyticsRequestUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutMcpServerInput | AnalyticsRequestCreateOrConnectWithoutMcpServerInput[]
    createMany?: AnalyticsRequestCreateManyMcpServerInputEnvelope
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
  }

  export type AnalyticsSecurityCreateNestedManyWithoutMcpServerInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutMcpServerInput, AnalyticsSecurityUncheckedCreateWithoutMcpServerInput> | AnalyticsSecurityCreateWithoutMcpServerInput[] | AnalyticsSecurityUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutMcpServerInput | AnalyticsSecurityCreateOrConnectWithoutMcpServerInput[]
    createMany?: AnalyticsSecurityCreateManyMcpServerInputEnvelope
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
  }

  export type AnalyticsRequestUncheckedCreateNestedManyWithoutMcpServerInput = {
    create?: XOR<AnalyticsRequestCreateWithoutMcpServerInput, AnalyticsRequestUncheckedCreateWithoutMcpServerInput> | AnalyticsRequestCreateWithoutMcpServerInput[] | AnalyticsRequestUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutMcpServerInput | AnalyticsRequestCreateOrConnectWithoutMcpServerInput[]
    createMany?: AnalyticsRequestCreateManyMcpServerInputEnvelope
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
  }

  export type AnalyticsSecurityUncheckedCreateNestedManyWithoutMcpServerInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutMcpServerInput, AnalyticsSecurityUncheckedCreateWithoutMcpServerInput> | AnalyticsSecurityCreateWithoutMcpServerInput[] | AnalyticsSecurityUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutMcpServerInput | AnalyticsSecurityCreateOrConnectWithoutMcpServerInput[]
    createMany?: AnalyticsSecurityCreateManyMcpServerInputEnvelope
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
  }

  export type AnalyticsRequestUpdateManyWithoutMcpServerNestedInput = {
    create?: XOR<AnalyticsRequestCreateWithoutMcpServerInput, AnalyticsRequestUncheckedCreateWithoutMcpServerInput> | AnalyticsRequestCreateWithoutMcpServerInput[] | AnalyticsRequestUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutMcpServerInput | AnalyticsRequestCreateOrConnectWithoutMcpServerInput[]
    upsert?: AnalyticsRequestUpsertWithWhereUniqueWithoutMcpServerInput | AnalyticsRequestUpsertWithWhereUniqueWithoutMcpServerInput[]
    createMany?: AnalyticsRequestCreateManyMcpServerInputEnvelope
    set?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    disconnect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    delete?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    update?: AnalyticsRequestUpdateWithWhereUniqueWithoutMcpServerInput | AnalyticsRequestUpdateWithWhereUniqueWithoutMcpServerInput[]
    updateMany?: AnalyticsRequestUpdateManyWithWhereWithoutMcpServerInput | AnalyticsRequestUpdateManyWithWhereWithoutMcpServerInput[]
    deleteMany?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
  }

  export type AnalyticsSecurityUpdateManyWithoutMcpServerNestedInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutMcpServerInput, AnalyticsSecurityUncheckedCreateWithoutMcpServerInput> | AnalyticsSecurityCreateWithoutMcpServerInput[] | AnalyticsSecurityUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutMcpServerInput | AnalyticsSecurityCreateOrConnectWithoutMcpServerInput[]
    upsert?: AnalyticsSecurityUpsertWithWhereUniqueWithoutMcpServerInput | AnalyticsSecurityUpsertWithWhereUniqueWithoutMcpServerInput[]
    createMany?: AnalyticsSecurityCreateManyMcpServerInputEnvelope
    set?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    disconnect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    delete?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    update?: AnalyticsSecurityUpdateWithWhereUniqueWithoutMcpServerInput | AnalyticsSecurityUpdateWithWhereUniqueWithoutMcpServerInput[]
    updateMany?: AnalyticsSecurityUpdateManyWithWhereWithoutMcpServerInput | AnalyticsSecurityUpdateManyWithWhereWithoutMcpServerInput[]
    deleteMany?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
  }

  export type AnalyticsRequestUncheckedUpdateManyWithoutMcpServerNestedInput = {
    create?: XOR<AnalyticsRequestCreateWithoutMcpServerInput, AnalyticsRequestUncheckedCreateWithoutMcpServerInput> | AnalyticsRequestCreateWithoutMcpServerInput[] | AnalyticsRequestUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsRequestCreateOrConnectWithoutMcpServerInput | AnalyticsRequestCreateOrConnectWithoutMcpServerInput[]
    upsert?: AnalyticsRequestUpsertWithWhereUniqueWithoutMcpServerInput | AnalyticsRequestUpsertWithWhereUniqueWithoutMcpServerInput[]
    createMany?: AnalyticsRequestCreateManyMcpServerInputEnvelope
    set?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    disconnect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    delete?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    connect?: AnalyticsRequestWhereUniqueInput | AnalyticsRequestWhereUniqueInput[]
    update?: AnalyticsRequestUpdateWithWhereUniqueWithoutMcpServerInput | AnalyticsRequestUpdateWithWhereUniqueWithoutMcpServerInput[]
    updateMany?: AnalyticsRequestUpdateManyWithWhereWithoutMcpServerInput | AnalyticsRequestUpdateManyWithWhereWithoutMcpServerInput[]
    deleteMany?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
  }

  export type AnalyticsSecurityUncheckedUpdateManyWithoutMcpServerNestedInput = {
    create?: XOR<AnalyticsSecurityCreateWithoutMcpServerInput, AnalyticsSecurityUncheckedCreateWithoutMcpServerInput> | AnalyticsSecurityCreateWithoutMcpServerInput[] | AnalyticsSecurityUncheckedCreateWithoutMcpServerInput[]
    connectOrCreate?: AnalyticsSecurityCreateOrConnectWithoutMcpServerInput | AnalyticsSecurityCreateOrConnectWithoutMcpServerInput[]
    upsert?: AnalyticsSecurityUpsertWithWhereUniqueWithoutMcpServerInput | AnalyticsSecurityUpsertWithWhereUniqueWithoutMcpServerInput[]
    createMany?: AnalyticsSecurityCreateManyMcpServerInputEnvelope
    set?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    disconnect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    delete?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    connect?: AnalyticsSecurityWhereUniqueInput | AnalyticsSecurityWhereUniqueInput[]
    update?: AnalyticsSecurityUpdateWithWhereUniqueWithoutMcpServerInput | AnalyticsSecurityUpdateWithWhereUniqueWithoutMcpServerInput[]
    updateMany?: AnalyticsSecurityUpdateManyWithWhereWithoutMcpServerInput | AnalyticsSecurityUpdateManyWithWhereWithoutMcpServerInput[]
    deleteMany?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
  }

  export type AnalyticsRequestCreatescopesInput = {
    set: string[]
  }

  export type AnalyticsRequestCreatetokenScopesInput = {
    set: string[]
  }

  export type ClientCreateNestedOneWithoutAnalyticsRequestsInput = {
    create?: XOR<ClientCreateWithoutAnalyticsRequestsInput, ClientUncheckedCreateWithoutAnalyticsRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAnalyticsRequestsInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnalyticsRequestsInput = {
    create?: XOR<UserCreateWithoutAnalyticsRequestsInput, UserUncheckedCreateWithoutAnalyticsRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type MCPServerCreateNestedOneWithoutRequestsInput = {
    create?: XOR<MCPServerCreateWithoutRequestsInput, MCPServerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: MCPServerCreateOrConnectWithoutRequestsInput
    connect?: MCPServerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnalyticsRequestUpdatescopesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AnalyticsRequestUpdatetokenScopesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ClientUpdateOneWithoutAnalyticsRequestsNestedInput = {
    create?: XOR<ClientCreateWithoutAnalyticsRequestsInput, ClientUncheckedCreateWithoutAnalyticsRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAnalyticsRequestsInput
    upsert?: ClientUpsertWithoutAnalyticsRequestsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAnalyticsRequestsInput, ClientUpdateWithoutAnalyticsRequestsInput>, ClientUncheckedUpdateWithoutAnalyticsRequestsInput>
  }

  export type UserUpdateOneWithoutAnalyticsRequestsNestedInput = {
    create?: XOR<UserCreateWithoutAnalyticsRequestsInput, UserUncheckedCreateWithoutAnalyticsRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsRequestsInput
    upsert?: UserUpsertWithoutAnalyticsRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalyticsRequestsInput, UserUpdateWithoutAnalyticsRequestsInput>, UserUncheckedUpdateWithoutAnalyticsRequestsInput>
  }

  export type MCPServerUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<MCPServerCreateWithoutRequestsInput, MCPServerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: MCPServerCreateOrConnectWithoutRequestsInput
    upsert?: MCPServerUpsertWithoutRequestsInput
    disconnect?: MCPServerWhereInput | boolean
    delete?: MCPServerWhereInput | boolean
    connect?: MCPServerWhereUniqueInput
    update?: XOR<XOR<MCPServerUpdateToOneWithWhereWithoutRequestsInput, MCPServerUpdateWithoutRequestsInput>, MCPServerUncheckedUpdateWithoutRequestsInput>
  }

  export type UserCreateNestedOneWithoutSecurityEventsInput = {
    create?: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityEventsInput
    connect?: UserWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutSecurityEventsInput = {
    create?: XOR<ClientCreateWithoutSecurityEventsInput, ClientUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSecurityEventsInput
    connect?: ClientWhereUniqueInput
  }

  export type MCPServerCreateNestedOneWithoutSecurityEventsInput = {
    create?: XOR<MCPServerCreateWithoutSecurityEventsInput, MCPServerUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: MCPServerCreateOrConnectWithoutSecurityEventsInput
    connect?: MCPServerWhereUniqueInput
  }

  export type EnumSecurityEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.SecurityEventType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutSecurityEventsNestedInput = {
    create?: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityEventsInput
    upsert?: UserUpsertWithoutSecurityEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecurityEventsInput, UserUpdateWithoutSecurityEventsInput>, UserUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type ClientUpdateOneWithoutSecurityEventsNestedInput = {
    create?: XOR<ClientCreateWithoutSecurityEventsInput, ClientUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSecurityEventsInput
    upsert?: ClientUpsertWithoutSecurityEventsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSecurityEventsInput, ClientUpdateWithoutSecurityEventsInput>, ClientUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type MCPServerUpdateOneWithoutSecurityEventsNestedInput = {
    create?: XOR<MCPServerCreateWithoutSecurityEventsInput, MCPServerUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: MCPServerCreateOrConnectWithoutSecurityEventsInput
    upsert?: MCPServerUpsertWithoutSecurityEventsInput
    disconnect?: MCPServerWhereInput | boolean
    delete?: MCPServerWhereInput | boolean
    connect?: MCPServerWhereUniqueInput
    update?: XOR<XOR<MCPServerUpdateToOneWithWhereWithoutSecurityEventsInput, MCPServerUpdateWithoutSecurityEventsInput>, MCPServerUncheckedUpdateWithoutSecurityEventsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumSecurityEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeFilter<$PrismaModel> | $Enums.SecurityEventType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSecurityEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.SecurityEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
    _max?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutUserInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokens?: AccessTokenCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateManyUserInputEnvelope = {
    data: ClientCreateManyUserInput | ClientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccessTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    resource?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutAccessTokensInput
  }

  export type AccessTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AccessTokenCreateOrConnectWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    create: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput>
  }

  export type AccessTokenCreateManyUserInputEnvelope = {
    data: AccessTokenCreateManyUserInput | AccessTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthCodeCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutAuthCodesInput
  }

  export type AuthCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    clientId: string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
  }

  export type AuthCodeCreateOrConnectWithoutUserInput = {
    where: AuthCodeWhereUniqueInput
    create: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput>
  }

  export type AuthCodeCreateManyUserInputEnvelope = {
    data: AuthCodeCreateManyUserInput | AuthCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    resource?: string | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsRequestCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
    client?: ClientCreateNestedOneWithoutAnalyticsRequestsInput
    mcpServer?: MCPServerCreateNestedOneWithoutRequestsInput
  }

  export type AnalyticsRequestUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    clientId?: string | null
    mcpServerId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsRequestCreateOrConnectWithoutUserInput = {
    where: AnalyticsRequestWhereUniqueInput
    create: XOR<AnalyticsRequestCreateWithoutUserInput, AnalyticsRequestUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsRequestCreateManyUserInputEnvelope = {
    data: AnalyticsRequestCreateManyUserInput | AnalyticsRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsSecurityCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    client?: ClientCreateNestedOneWithoutSecurityEventsInput
    mcpServer?: MCPServerCreateNestedOneWithoutSecurityEventsInput
  }

  export type AnalyticsSecurityUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    clientId?: string | null
    mcpServerId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AnalyticsSecurityCreateOrConnectWithoutUserInput = {
    where: AnalyticsSecurityWhereUniqueInput
    create: XOR<AnalyticsSecurityCreateWithoutUserInput, AnalyticsSecurityUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsSecurityCreateManyUserInputEnvelope = {
    data: AnalyticsSecurityCreateManyUserInput | AnalyticsSecurityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithWhereWithoutUserInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    clientId?: StringFilter<"Client"> | string
    clientSecret?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    redirectUris?: StringNullableListFilter<"Client">
    userId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type AccessTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    update: XOR<AccessTokenUpdateWithoutUserInput, AccessTokenUncheckedUpdateWithoutUserInput>
    create: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput>
  }

  export type AccessTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    data: XOR<AccessTokenUpdateWithoutUserInput, AccessTokenUncheckedUpdateWithoutUserInput>
  }

  export type AccessTokenUpdateManyWithWhereWithoutUserInput = {
    where: AccessTokenScalarWhereInput
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessTokenScalarWhereInput = {
    AND?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
    OR?: AccessTokenScalarWhereInput[]
    NOT?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
    id?: StringFilter<"AccessToken"> | string
    token?: StringFilter<"AccessToken"> | string
    expiresAt?: DateTimeFilter<"AccessToken"> | Date | string
    clientId?: StringFilter<"AccessToken"> | string
    userId?: StringFilter<"AccessToken"> | string
    resource?: StringNullableFilter<"AccessToken"> | string | null
    createdAt?: DateTimeFilter<"AccessToken"> | Date | string
  }

  export type AuthCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthCodeWhereUniqueInput
    update: XOR<AuthCodeUpdateWithoutUserInput, AuthCodeUncheckedUpdateWithoutUserInput>
    create: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput>
  }

  export type AuthCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthCodeWhereUniqueInput
    data: XOR<AuthCodeUpdateWithoutUserInput, AuthCodeUncheckedUpdateWithoutUserInput>
  }

  export type AuthCodeUpdateManyWithWhereWithoutUserInput = {
    where: AuthCodeScalarWhereInput
    data: XOR<AuthCodeUpdateManyMutationInput, AuthCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthCodeScalarWhereInput = {
    AND?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
    OR?: AuthCodeScalarWhereInput[]
    NOT?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
    id?: StringFilter<"AuthCode"> | string
    code?: StringFilter<"AuthCode"> | string
    expiresAt?: DateTimeFilter<"AuthCode"> | Date | string
    clientId?: StringFilter<"AuthCode"> | string
    userId?: StringFilter<"AuthCode"> | string
    redirectUri?: StringFilter<"AuthCode"> | string
    codeChallenge?: StringNullableFilter<"AuthCode"> | string | null
    codeChallengeMethod?: StringNullableFilter<"AuthCode"> | string | null
    resource?: StringNullableFilter<"AuthCode"> | string | null
    createdAt?: DateTimeFilter<"AuthCode"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    clientId?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    resource?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type AnalyticsRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalyticsRequestWhereUniqueInput
    update: XOR<AnalyticsRequestUpdateWithoutUserInput, AnalyticsRequestUncheckedUpdateWithoutUserInput>
    create: XOR<AnalyticsRequestCreateWithoutUserInput, AnalyticsRequestUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalyticsRequestWhereUniqueInput
    data: XOR<AnalyticsRequestUpdateWithoutUserInput, AnalyticsRequestUncheckedUpdateWithoutUserInput>
  }

  export type AnalyticsRequestUpdateManyWithWhereWithoutUserInput = {
    where: AnalyticsRequestScalarWhereInput
    data: XOR<AnalyticsRequestUpdateManyMutationInput, AnalyticsRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalyticsRequestScalarWhereInput = {
    AND?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
    OR?: AnalyticsRequestScalarWhereInput[]
    NOT?: AnalyticsRequestScalarWhereInput | AnalyticsRequestScalarWhereInput[]
    id?: StringFilter<"AnalyticsRequest"> | string
    timestamp?: DateTimeFilter<"AnalyticsRequest"> | Date | string
    endpoint?: StringFilter<"AnalyticsRequest"> | string
    method?: StringFilter<"AnalyticsRequest"> | string
    statusCode?: IntFilter<"AnalyticsRequest"> | number
    responseTime?: IntFilter<"AnalyticsRequest"> | number
    expiresAt?: DateTimeFilter<"AnalyticsRequest"> | Date | string
    clientId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    userId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    mcpServerId?: StringNullableFilter<"AnalyticsRequest"> | string | null
    ssoProvider?: StringNullableFilter<"AnalyticsRequest"> | string | null
    userRole?: StringNullableFilter<"AnalyticsRequest"> | string | null
    scopes?: StringNullableListFilter<"AnalyticsRequest">
    organization?: StringNullableFilter<"AnalyticsRequest"> | string | null
    ipAddress?: StringFilter<"AnalyticsRequest"> | string
    userAgent?: StringFilter<"AnalyticsRequest"> | string
    country?: StringNullableFilter<"AnalyticsRequest"> | string | null
    city?: StringNullableFilter<"AnalyticsRequest"> | string | null
    clientType?: StringNullableFilter<"AnalyticsRequest"> | string | null
    platform?: StringNullableFilter<"AnalyticsRequest"> | string | null
    mcpMethod?: StringNullableFilter<"AnalyticsRequest"> | string | null
    toolName?: StringNullableFilter<"AnalyticsRequest"> | string | null
    oauthGrantType?: StringNullableFilter<"AnalyticsRequest"> | string | null
    tokenScopes?: StringNullableListFilter<"AnalyticsRequest">
    usePKCE?: BoolNullableFilter<"AnalyticsRequest"> | boolean | null
    redirectUri?: StringNullableFilter<"AnalyticsRequest"> | string | null
  }

  export type AnalyticsSecurityUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalyticsSecurityWhereUniqueInput
    update: XOR<AnalyticsSecurityUpdateWithoutUserInput, AnalyticsSecurityUncheckedUpdateWithoutUserInput>
    create: XOR<AnalyticsSecurityCreateWithoutUserInput, AnalyticsSecurityUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsSecurityUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalyticsSecurityWhereUniqueInput
    data: XOR<AnalyticsSecurityUpdateWithoutUserInput, AnalyticsSecurityUncheckedUpdateWithoutUserInput>
  }

  export type AnalyticsSecurityUpdateManyWithWhereWithoutUserInput = {
    where: AnalyticsSecurityScalarWhereInput
    data: XOR<AnalyticsSecurityUpdateManyMutationInput, AnalyticsSecurityUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalyticsSecurityScalarWhereInput = {
    AND?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
    OR?: AnalyticsSecurityScalarWhereInput[]
    NOT?: AnalyticsSecurityScalarWhereInput | AnalyticsSecurityScalarWhereInput[]
    id?: StringFilter<"AnalyticsSecurity"> | string
    timestamp?: DateTimeFilter<"AnalyticsSecurity"> | Date | string
    eventType?: EnumSecurityEventTypeFilter<"AnalyticsSecurity"> | $Enums.SecurityEventType
    severity?: StringFilter<"AnalyticsSecurity"> | string
    expiresAt?: DateTimeFilter<"AnalyticsSecurity"> | Date | string
    userId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    clientId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    mcpServerId?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    ipAddress?: StringFilter<"AnalyticsSecurity"> | string
    userAgent?: StringFilter<"AnalyticsSecurity"> | string
    endpoint?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    country?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    city?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    organization?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    ssoProvider?: StringNullableFilter<"AnalyticsSecurity"> | string | null
    details?: JsonFilter<"AnalyticsSecurity">
    riskScore?: IntFilter<"AnalyticsSecurity"> | number
    resolved?: BoolFilter<"AnalyticsSecurity"> | boolean
    resolvedAt?: DateTimeNullableFilter<"AnalyticsSecurity"> | Date | string | null
    resolvedBy?: StringNullableFilter<"AnalyticsSecurity"> | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutClientsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type AccessTokenCreateWithoutClientInput = {
    id?: string
    token: string
    expiresAt: Date | string
    resource?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAccessTokensInput
  }

  export type AccessTokenUncheckedCreateWithoutClientInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AccessTokenCreateOrConnectWithoutClientInput = {
    where: AccessTokenWhereUniqueInput
    create: XOR<AccessTokenCreateWithoutClientInput, AccessTokenUncheckedCreateWithoutClientInput>
  }

  export type AccessTokenCreateManyClientInputEnvelope = {
    data: AccessTokenCreateManyClientInput | AccessTokenCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AuthCodeCreateWithoutClientInput = {
    id?: string
    code: string
    expiresAt: Date | string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuthCodesInput
  }

  export type AuthCodeUncheckedCreateWithoutClientInput = {
    id?: string
    code: string
    expiresAt: Date | string
    userId: string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
  }

  export type AuthCodeCreateOrConnectWithoutClientInput = {
    where: AuthCodeWhereUniqueInput
    create: XOR<AuthCodeCreateWithoutClientInput, AuthCodeUncheckedCreateWithoutClientInput>
  }

  export type AuthCodeCreateManyClientInputEnvelope = {
    data: AuthCodeCreateManyClientInput | AuthCodeCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutClientInput = {
    id?: string
    token: string
    expiresAt: Date | string
    resource?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateWithoutClientInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutClientInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutClientInput, RefreshTokenUncheckedCreateWithoutClientInput>
  }

  export type RefreshTokenCreateManyClientInputEnvelope = {
    data: RefreshTokenCreateManyClientInput | RefreshTokenCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsRequestCreateWithoutClientInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
    user?: UserCreateNestedOneWithoutAnalyticsRequestsInput
    mcpServer?: MCPServerCreateNestedOneWithoutRequestsInput
  }

  export type AnalyticsRequestUncheckedCreateWithoutClientInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    userId?: string | null
    mcpServerId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsRequestCreateOrConnectWithoutClientInput = {
    where: AnalyticsRequestWhereUniqueInput
    create: XOR<AnalyticsRequestCreateWithoutClientInput, AnalyticsRequestUncheckedCreateWithoutClientInput>
  }

  export type AnalyticsRequestCreateManyClientInputEnvelope = {
    data: AnalyticsRequestCreateManyClientInput | AnalyticsRequestCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsSecurityCreateWithoutClientInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    user?: UserCreateNestedOneWithoutSecurityEventsInput
    mcpServer?: MCPServerCreateNestedOneWithoutSecurityEventsInput
  }

  export type AnalyticsSecurityUncheckedCreateWithoutClientInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    userId?: string | null
    mcpServerId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AnalyticsSecurityCreateOrConnectWithoutClientInput = {
    where: AnalyticsSecurityWhereUniqueInput
    create: XOR<AnalyticsSecurityCreateWithoutClientInput, AnalyticsSecurityUncheckedCreateWithoutClientInput>
  }

  export type AnalyticsSecurityCreateManyClientInputEnvelope = {
    data: AnalyticsSecurityCreateManyClientInput | AnalyticsSecurityCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccessTokenUpsertWithWhereUniqueWithoutClientInput = {
    where: AccessTokenWhereUniqueInput
    update: XOR<AccessTokenUpdateWithoutClientInput, AccessTokenUncheckedUpdateWithoutClientInput>
    create: XOR<AccessTokenCreateWithoutClientInput, AccessTokenUncheckedCreateWithoutClientInput>
  }

  export type AccessTokenUpdateWithWhereUniqueWithoutClientInput = {
    where: AccessTokenWhereUniqueInput
    data: XOR<AccessTokenUpdateWithoutClientInput, AccessTokenUncheckedUpdateWithoutClientInput>
  }

  export type AccessTokenUpdateManyWithWhereWithoutClientInput = {
    where: AccessTokenScalarWhereInput
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyWithoutClientInput>
  }

  export type AuthCodeUpsertWithWhereUniqueWithoutClientInput = {
    where: AuthCodeWhereUniqueInput
    update: XOR<AuthCodeUpdateWithoutClientInput, AuthCodeUncheckedUpdateWithoutClientInput>
    create: XOR<AuthCodeCreateWithoutClientInput, AuthCodeUncheckedCreateWithoutClientInput>
  }

  export type AuthCodeUpdateWithWhereUniqueWithoutClientInput = {
    where: AuthCodeWhereUniqueInput
    data: XOR<AuthCodeUpdateWithoutClientInput, AuthCodeUncheckedUpdateWithoutClientInput>
  }

  export type AuthCodeUpdateManyWithWhereWithoutClientInput = {
    where: AuthCodeScalarWhereInput
    data: XOR<AuthCodeUpdateManyMutationInput, AuthCodeUncheckedUpdateManyWithoutClientInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutClientInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutClientInput, RefreshTokenUncheckedUpdateWithoutClientInput>
    create: XOR<RefreshTokenCreateWithoutClientInput, RefreshTokenUncheckedCreateWithoutClientInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutClientInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutClientInput, RefreshTokenUncheckedUpdateWithoutClientInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutClientInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutClientInput>
  }

  export type AnalyticsRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: AnalyticsRequestWhereUniqueInput
    update: XOR<AnalyticsRequestUpdateWithoutClientInput, AnalyticsRequestUncheckedUpdateWithoutClientInput>
    create: XOR<AnalyticsRequestCreateWithoutClientInput, AnalyticsRequestUncheckedCreateWithoutClientInput>
  }

  export type AnalyticsRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: AnalyticsRequestWhereUniqueInput
    data: XOR<AnalyticsRequestUpdateWithoutClientInput, AnalyticsRequestUncheckedUpdateWithoutClientInput>
  }

  export type AnalyticsRequestUpdateManyWithWhereWithoutClientInput = {
    where: AnalyticsRequestScalarWhereInput
    data: XOR<AnalyticsRequestUpdateManyMutationInput, AnalyticsRequestUncheckedUpdateManyWithoutClientInput>
  }

  export type AnalyticsSecurityUpsertWithWhereUniqueWithoutClientInput = {
    where: AnalyticsSecurityWhereUniqueInput
    update: XOR<AnalyticsSecurityUpdateWithoutClientInput, AnalyticsSecurityUncheckedUpdateWithoutClientInput>
    create: XOR<AnalyticsSecurityCreateWithoutClientInput, AnalyticsSecurityUncheckedCreateWithoutClientInput>
  }

  export type AnalyticsSecurityUpdateWithWhereUniqueWithoutClientInput = {
    where: AnalyticsSecurityWhereUniqueInput
    data: XOR<AnalyticsSecurityUpdateWithoutClientInput, AnalyticsSecurityUncheckedUpdateWithoutClientInput>
  }

  export type AnalyticsSecurityUpdateManyWithWhereWithoutClientInput = {
    where: AnalyticsSecurityScalarWhereInput
    data: XOR<AnalyticsSecurityUpdateManyMutationInput, AnalyticsSecurityUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientCreateWithoutAccessTokensInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutClientsInput
    authCodes?: AuthCodeCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAccessTokensInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAccessTokensInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAccessTokensInput, ClientUncheckedCreateWithoutAccessTokensInput>
  }

  export type UserCreateWithoutAccessTokensInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessTokensInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
  }

  export type ClientUpsertWithoutAccessTokensInput = {
    update: XOR<ClientUpdateWithoutAccessTokensInput, ClientUncheckedUpdateWithoutAccessTokensInput>
    create: XOR<ClientCreateWithoutAccessTokensInput, ClientUncheckedCreateWithoutAccessTokensInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAccessTokensInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAccessTokensInput, ClientUncheckedUpdateWithoutAccessTokensInput>
  }

  export type ClientUpdateWithoutAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutClientsNestedInput
    authCodes?: AuthCodeUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authCodes?: AuthCodeUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutAccessTokensInput = {
    update: XOR<UserUpdateWithoutAccessTokensInput, UserUncheckedUpdateWithoutAccessTokensInput>
    create: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessTokensInput, UserUncheckedUpdateWithoutAccessTokensInput>
  }

  export type UserUpdateWithoutAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientCreateWithoutAuthCodesInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutClientsInput
    accessTokens?: AccessTokenCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAuthCodesInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAuthCodesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAuthCodesInput, ClientUncheckedCreateWithoutAuthCodesInput>
  }

  export type UserCreateWithoutAuthCodesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthCodesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
  }

  export type ClientUpsertWithoutAuthCodesInput = {
    update: XOR<ClientUpdateWithoutAuthCodesInput, ClientUncheckedUpdateWithoutAuthCodesInput>
    create: XOR<ClientCreateWithoutAuthCodesInput, ClientUncheckedCreateWithoutAuthCodesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAuthCodesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAuthCodesInput, ClientUncheckedUpdateWithoutAuthCodesInput>
  }

  export type ClientUpdateWithoutAuthCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutClientsNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAuthCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutAuthCodesInput = {
    update: XOR<UserUpdateWithoutAuthCodesInput, UserUncheckedUpdateWithoutAuthCodesInput>
    create: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthCodesInput, UserUncheckedUpdateWithoutAuthCodesInput>
  }

  export type UserUpdateWithoutAuthCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientCreateWithoutRefreshTokensInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutClientsInput
    accessTokens?: AccessTokenCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutRefreshTokensInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutRefreshTokensInput, ClientUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type ClientUpsertWithoutRefreshTokensInput = {
    update: XOR<ClientUpdateWithoutRefreshTokensInput, ClientUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<ClientCreateWithoutRefreshTokensInput, ClientUncheckedCreateWithoutRefreshTokensInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutRefreshTokensInput, ClientUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type ClientUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutClientsNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnalyticsRequestCreateWithoutMcpServerInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
    client?: ClientCreateNestedOneWithoutAnalyticsRequestsInput
    user?: UserCreateNestedOneWithoutAnalyticsRequestsInput
  }

  export type AnalyticsRequestUncheckedCreateWithoutMcpServerInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    clientId?: string | null
    userId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsRequestCreateOrConnectWithoutMcpServerInput = {
    where: AnalyticsRequestWhereUniqueInput
    create: XOR<AnalyticsRequestCreateWithoutMcpServerInput, AnalyticsRequestUncheckedCreateWithoutMcpServerInput>
  }

  export type AnalyticsRequestCreateManyMcpServerInputEnvelope = {
    data: AnalyticsRequestCreateManyMcpServerInput | AnalyticsRequestCreateManyMcpServerInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsSecurityCreateWithoutMcpServerInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    user?: UserCreateNestedOneWithoutSecurityEventsInput
    client?: ClientCreateNestedOneWithoutSecurityEventsInput
  }

  export type AnalyticsSecurityUncheckedCreateWithoutMcpServerInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    userId?: string | null
    clientId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AnalyticsSecurityCreateOrConnectWithoutMcpServerInput = {
    where: AnalyticsSecurityWhereUniqueInput
    create: XOR<AnalyticsSecurityCreateWithoutMcpServerInput, AnalyticsSecurityUncheckedCreateWithoutMcpServerInput>
  }

  export type AnalyticsSecurityCreateManyMcpServerInputEnvelope = {
    data: AnalyticsSecurityCreateManyMcpServerInput | AnalyticsSecurityCreateManyMcpServerInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsRequestUpsertWithWhereUniqueWithoutMcpServerInput = {
    where: AnalyticsRequestWhereUniqueInput
    update: XOR<AnalyticsRequestUpdateWithoutMcpServerInput, AnalyticsRequestUncheckedUpdateWithoutMcpServerInput>
    create: XOR<AnalyticsRequestCreateWithoutMcpServerInput, AnalyticsRequestUncheckedCreateWithoutMcpServerInput>
  }

  export type AnalyticsRequestUpdateWithWhereUniqueWithoutMcpServerInput = {
    where: AnalyticsRequestWhereUniqueInput
    data: XOR<AnalyticsRequestUpdateWithoutMcpServerInput, AnalyticsRequestUncheckedUpdateWithoutMcpServerInput>
  }

  export type AnalyticsRequestUpdateManyWithWhereWithoutMcpServerInput = {
    where: AnalyticsRequestScalarWhereInput
    data: XOR<AnalyticsRequestUpdateManyMutationInput, AnalyticsRequestUncheckedUpdateManyWithoutMcpServerInput>
  }

  export type AnalyticsSecurityUpsertWithWhereUniqueWithoutMcpServerInput = {
    where: AnalyticsSecurityWhereUniqueInput
    update: XOR<AnalyticsSecurityUpdateWithoutMcpServerInput, AnalyticsSecurityUncheckedUpdateWithoutMcpServerInput>
    create: XOR<AnalyticsSecurityCreateWithoutMcpServerInput, AnalyticsSecurityUncheckedCreateWithoutMcpServerInput>
  }

  export type AnalyticsSecurityUpdateWithWhereUniqueWithoutMcpServerInput = {
    where: AnalyticsSecurityWhereUniqueInput
    data: XOR<AnalyticsSecurityUpdateWithoutMcpServerInput, AnalyticsSecurityUncheckedUpdateWithoutMcpServerInput>
  }

  export type AnalyticsSecurityUpdateManyWithWhereWithoutMcpServerInput = {
    where: AnalyticsSecurityScalarWhereInput
    data: XOR<AnalyticsSecurityUpdateManyMutationInput, AnalyticsSecurityUncheckedUpdateManyWithoutMcpServerInput>
  }

  export type ClientCreateWithoutAnalyticsRequestsInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutClientsInput
    accessTokens?: AccessTokenCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAnalyticsRequestsInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutClientInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAnalyticsRequestsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAnalyticsRequestsInput, ClientUncheckedCreateWithoutAnalyticsRequestsInput>
  }

  export type UserCreateWithoutAnalyticsRequestsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalyticsRequestsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalyticsRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalyticsRequestsInput, UserUncheckedCreateWithoutAnalyticsRequestsInput>
  }

  export type MCPServerCreateWithoutRequestsInput = {
    id?: string
    name: string
    identifier: string
    description?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    securityEvents?: AnalyticsSecurityCreateNestedManyWithoutMcpServerInput
  }

  export type MCPServerUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    identifier: string
    description?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    securityEvents?: AnalyticsSecurityUncheckedCreateNestedManyWithoutMcpServerInput
  }

  export type MCPServerCreateOrConnectWithoutRequestsInput = {
    where: MCPServerWhereUniqueInput
    create: XOR<MCPServerCreateWithoutRequestsInput, MCPServerUncheckedCreateWithoutRequestsInput>
  }

  export type ClientUpsertWithoutAnalyticsRequestsInput = {
    update: XOR<ClientUpdateWithoutAnalyticsRequestsInput, ClientUncheckedUpdateWithoutAnalyticsRequestsInput>
    create: XOR<ClientCreateWithoutAnalyticsRequestsInput, ClientUncheckedCreateWithoutAnalyticsRequestsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAnalyticsRequestsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAnalyticsRequestsInput, ClientUncheckedUpdateWithoutAnalyticsRequestsInput>
  }

  export type ClientUpdateWithoutAnalyticsRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutClientsNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAnalyticsRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutAnalyticsRequestsInput = {
    update: XOR<UserUpdateWithoutAnalyticsRequestsInput, UserUncheckedUpdateWithoutAnalyticsRequestsInput>
    create: XOR<UserCreateWithoutAnalyticsRequestsInput, UserUncheckedCreateWithoutAnalyticsRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalyticsRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalyticsRequestsInput, UserUncheckedUpdateWithoutAnalyticsRequestsInput>
  }

  export type UserUpdateWithoutAnalyticsRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalyticsRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MCPServerUpsertWithoutRequestsInput = {
    update: XOR<MCPServerUpdateWithoutRequestsInput, MCPServerUncheckedUpdateWithoutRequestsInput>
    create: XOR<MCPServerCreateWithoutRequestsInput, MCPServerUncheckedCreateWithoutRequestsInput>
    where?: MCPServerWhereInput
  }

  export type MCPServerUpdateToOneWithWhereWithoutRequestsInput = {
    where?: MCPServerWhereInput
    data: XOR<MCPServerUpdateWithoutRequestsInput, MCPServerUncheckedUpdateWithoutRequestsInput>
  }

  export type MCPServerUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityEvents?: AnalyticsSecurityUpdateManyWithoutMcpServerNestedInput
  }

  export type MCPServerUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutMcpServerNestedInput
  }

  export type UserCreateWithoutSecurityEventsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecurityEventsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecurityEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
  }

  export type ClientCreateWithoutSecurityEventsInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutClientsInput
    accessTokens?: AccessTokenCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSecurityEventsInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessTokens?: AccessTokenUncheckedCreateNestedManyWithoutClientInput
    authCodes?: AuthCodeUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutClientInput
    analyticsRequests?: AnalyticsRequestUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSecurityEventsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSecurityEventsInput, ClientUncheckedCreateWithoutSecurityEventsInput>
  }

  export type MCPServerCreateWithoutSecurityEventsInput = {
    id?: string
    name: string
    identifier: string
    description?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: AnalyticsRequestCreateNestedManyWithoutMcpServerInput
  }

  export type MCPServerUncheckedCreateWithoutSecurityEventsInput = {
    id?: string
    name: string
    identifier: string
    description?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: AnalyticsRequestUncheckedCreateNestedManyWithoutMcpServerInput
  }

  export type MCPServerCreateOrConnectWithoutSecurityEventsInput = {
    where: MCPServerWhereUniqueInput
    create: XOR<MCPServerCreateWithoutSecurityEventsInput, MCPServerUncheckedCreateWithoutSecurityEventsInput>
  }

  export type UserUpsertWithoutSecurityEventsInput = {
    update: XOR<UserUpdateWithoutSecurityEventsInput, UserUncheckedUpdateWithoutSecurityEventsInput>
    create: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecurityEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecurityEventsInput, UserUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type UserUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientUpsertWithoutSecurityEventsInput = {
    update: XOR<ClientUpdateWithoutSecurityEventsInput, ClientUncheckedUpdateWithoutSecurityEventsInput>
    create: XOR<ClientCreateWithoutSecurityEventsInput, ClientUncheckedCreateWithoutSecurityEventsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSecurityEventsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSecurityEventsInput, ClientUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type ClientUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutClientsNestedInput
    accessTokens?: AccessTokenUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutClientNestedInput
  }

  export type MCPServerUpsertWithoutSecurityEventsInput = {
    update: XOR<MCPServerUpdateWithoutSecurityEventsInput, MCPServerUncheckedUpdateWithoutSecurityEventsInput>
    create: XOR<MCPServerCreateWithoutSecurityEventsInput, MCPServerUncheckedCreateWithoutSecurityEventsInput>
    where?: MCPServerWhereInput
  }

  export type MCPServerUpdateToOneWithWhereWithoutSecurityEventsInput = {
    where?: MCPServerWhereInput
    data: XOR<MCPServerUpdateWithoutSecurityEventsInput, MCPServerUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type MCPServerUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: AnalyticsRequestUpdateManyWithoutMcpServerNestedInput
  }

  export type MCPServerUncheckedUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: AnalyticsRequestUncheckedUpdateManyWithoutMcpServerNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ClientCreateManyUserInput = {
    id?: string
    clientId?: string
    clientSecret: string
    name: string
    redirectUris?: ClientCreateredirectUrisInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AuthCodeCreateManyUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    clientId: string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    clientId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsRequestCreateManyUserInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    clientId?: string | null
    mcpServerId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsSecurityCreateManyUserInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    clientId?: string | null
    mcpServerId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokens?: AccessTokenUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessTokens?: AccessTokenUncheckedUpdateManyWithoutClientNestedInput
    authCodes?: AuthCodeUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    analyticsRequests?: AnalyticsRequestUncheckedUpdateManyWithoutClientNestedInput
    securityEvents?: AnalyticsSecurityUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    redirectUris?: ClientUpdateredirectUrisInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAccessTokensNestedInput
  }

  export type AccessTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAuthCodesNestedInput
  }

  export type AuthCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutAnalyticsRequestsNestedInput
    mcpServer?: MCPServerUpdateOneWithoutRequestsNestedInput
  }

  export type AnalyticsRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutSecurityEventsNestedInput
    mcpServer?: MCPServerUpdateOneWithoutSecurityEventsNestedInput
  }

  export type AnalyticsSecurityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessTokenCreateManyClientInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AuthCodeCreateManyClientInput = {
    id?: string
    code: string
    expiresAt: Date | string
    userId: string
    redirectUri: string
    codeChallenge?: string | null
    codeChallengeMethod?: string | null
    resource?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyClientInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    resource?: string | null
    createdAt?: Date | string
  }

  export type AnalyticsRequestCreateManyClientInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    userId?: string | null
    mcpServerId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsSecurityCreateManyClientInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    userId?: string | null
    mcpServerId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AccessTokenUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessTokensNestedInput
  }

  export type AccessTokenUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthCodesNestedInput
  }

  export type AuthCodeUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    codeChallenge?: NullableStringFieldUpdateOperationsInput | string | null
    codeChallengeMethod?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsRequestUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutAnalyticsRequestsNestedInput
    mcpServer?: MCPServerUpdateOneWithoutRequestsNestedInput
  }

  export type AnalyticsRequestUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsRequestUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutSecurityEventsNestedInput
    mcpServer?: MCPServerUpdateOneWithoutSecurityEventsNestedInput
  }

  export type AnalyticsSecurityUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mcpServerId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsRequestCreateManyMcpServerInput = {
    id?: string
    timestamp?: Date | string
    endpoint: string
    method: string
    statusCode: number
    responseTime: number
    expiresAt?: Date | string
    clientId?: string | null
    userId?: string | null
    ssoProvider?: string | null
    userRole?: string | null
    scopes?: AnalyticsRequestCreatescopesInput | string[]
    organization?: string | null
    ipAddress: string
    userAgent: string
    country?: string | null
    city?: string | null
    clientType?: string | null
    platform?: string | null
    mcpMethod?: string | null
    toolName?: string | null
    oauthGrantType?: string | null
    tokenScopes?: AnalyticsRequestCreatetokenScopesInput | string[]
    usePKCE?: boolean | null
    redirectUri?: string | null
  }

  export type AnalyticsSecurityCreateManyMcpServerInput = {
    id?: string
    timestamp?: Date | string
    eventType: $Enums.SecurityEventType
    severity: string
    expiresAt?: Date | string
    userId?: string | null
    clientId?: string | null
    ipAddress: string
    userAgent: string
    endpoint?: string | null
    country?: string | null
    city?: string | null
    organization?: string | null
    ssoProvider?: string | null
    details: JsonNullValueInput | InputJsonValue
    riskScore?: number
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
  }

  export type AnalyticsRequestUpdateWithoutMcpServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutAnalyticsRequestsNestedInput
    user?: UserUpdateOneWithoutAnalyticsRequestsNestedInput
  }

  export type AnalyticsRequestUncheckedUpdateWithoutMcpServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsRequestUncheckedUpdateManyWithoutMcpServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: AnalyticsRequestUpdatescopesInput | string[]
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    clientType?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    mcpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    toolName?: NullableStringFieldUpdateOperationsInput | string | null
    oauthGrantType?: NullableStringFieldUpdateOperationsInput | string | null
    tokenScopes?: AnalyticsRequestUpdatetokenScopesInput | string[]
    usePKCE?: NullableBoolFieldUpdateOperationsInput | boolean | null
    redirectUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityUpdateWithoutMcpServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutSecurityEventsNestedInput
    client?: ClientUpdateOneWithoutSecurityEventsNestedInput
  }

  export type AnalyticsSecurityUncheckedUpdateWithoutMcpServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsSecurityUncheckedUpdateManyWithoutMcpServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    severity?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    ssoProvider?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    riskScore?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
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