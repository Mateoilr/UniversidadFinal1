
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
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Estudiante
 * 
 */
export type Estudiante = $Result.DefaultSelection<Prisma.$EstudiantePayload>
/**
 * Model Docente
 * 
 */
export type Docente = $Result.DefaultSelection<Prisma.$DocentePayload>
/**
 * Model Matricula
 * 
 */
export type Matricula = $Result.DefaultSelection<Prisma.$MatriculaPayload>
/**
 * Model Inscripcion
 * 
 */
export type Inscripcion = $Result.DefaultSelection<Prisma.$InscripcionPayload>
/**
 * Model Dicta
 * 
 */
export type Dicta = $Result.DefaultSelection<Prisma.$DictaPayload>
/**
 * Model Alumno
 * 
 */
export type Alumno = $Result.DefaultSelection<Prisma.$AlumnoPayload>
/**
 * Model carreradocente
 * 
 */
export type carreradocente = $Result.DefaultSelection<Prisma.$carreradocentePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model UsuarioRol
 * 
 */
export type UsuarioRol = $Result.DefaultSelection<Prisma.$UsuarioRolPayload>
/**
 * Model RolPermiso
 * 
 */
export type RolPermiso = $Result.DefaultSelection<Prisma.$RolPermisoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carreras
 * const carreras = await prisma.carrera.findMany()
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
   * // Fetch zero or more Carreras
   * const carreras = await prisma.carrera.findMany()
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
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudiante`: Exposes CRUD operations for the **Estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.EstudianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docente`: Exposes CRUD operations for the **Docente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Docentes
    * const docentes = await prisma.docente.findMany()
    * ```
    */
  get docente(): Prisma.DocenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matricula`: Exposes CRUD operations for the **Matricula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matriculas
    * const matriculas = await prisma.matricula.findMany()
    * ```
    */
  get matricula(): Prisma.MatriculaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripcion`: Exposes CRUD operations for the **Inscripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscripcions
    * const inscripcions = await prisma.inscripcion.findMany()
    * ```
    */
  get inscripcion(): Prisma.InscripcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dicta`: Exposes CRUD operations for the **Dicta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dictas
    * const dictas = await prisma.dicta.findMany()
    * ```
    */
  get dicta(): Prisma.DictaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alumno`: Exposes CRUD operations for the **Alumno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumnos
    * const alumnos = await prisma.alumno.findMany()
    * ```
    */
  get alumno(): Prisma.AlumnoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carreradocente`: Exposes CRUD operations for the **carreradocente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreradocentes
    * const carreradocentes = await prisma.carreradocente.findMany()
    * ```
    */
  get carreradocente(): Prisma.carreradocenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioRol`: Exposes CRUD operations for the **UsuarioRol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioRols
    * const usuarioRols = await prisma.usuarioRol.findMany()
    * ```
    */
  get usuarioRol(): Prisma.UsuarioRolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolPermiso`: Exposes CRUD operations for the **RolPermiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolPermisos
    * const rolPermisos = await prisma.rolPermiso.findMany()
    * ```
    */
  get rolPermiso(): Prisma.RolPermisoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Carrera: 'Carrera',
    Materia: 'Materia',
    Estudiante: 'Estudiante',
    Docente: 'Docente',
    Matricula: 'Matricula',
    Inscripcion: 'Inscripcion',
    Dicta: 'Dicta',
    Alumno: 'Alumno',
    carreradocente: 'carreradocente',
    Usuario: 'Usuario',
    Rol: 'Rol',
    Permiso: 'Permiso',
    UsuarioRol: 'UsuarioRol',
    RolPermiso: 'RolPermiso'
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
      modelProps: "carrera" | "materia" | "estudiante" | "docente" | "matricula" | "inscripcion" | "dicta" | "alumno" | "carreradocente" | "usuario" | "rol" | "permiso" | "usuarioRol" | "rolPermiso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarreraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Estudiante: {
        payload: Prisma.$EstudiantePayload<ExtArgs>
        fields: Prisma.EstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findFirst: {
            args: Prisma.EstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findMany: {
            args: Prisma.EstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          create: {
            args: Prisma.EstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          createMany: {
            args: Prisma.EstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          delete: {
            args: Prisma.EstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          update: {
            args: Prisma.EstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          deleteMany: {
            args: Prisma.EstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstudianteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          upsert: {
            args: Prisma.EstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.EstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      Docente: {
        payload: Prisma.$DocentePayload<ExtArgs>
        fields: Prisma.DocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findFirst: {
            args: Prisma.DocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findMany: {
            args: Prisma.DocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          create: {
            args: Prisma.DocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          createMany: {
            args: Prisma.DocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          delete: {
            args: Prisma.DocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          update: {
            args: Prisma.DocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          deleteMany: {
            args: Prisma.DocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          upsert: {
            args: Prisma.DocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          aggregate: {
            args: Prisma.DocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocente>
          }
          groupBy: {
            args: Prisma.DocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocenteCountArgs<ExtArgs>
            result: $Utils.Optional<DocenteCountAggregateOutputType> | number
          }
        }
      }
      Matricula: {
        payload: Prisma.$MatriculaPayload<ExtArgs>
        fields: Prisma.MatriculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatriculaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatriculaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findFirst: {
            args: Prisma.MatriculaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatriculaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findMany: {
            args: Prisma.MatriculaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          create: {
            args: Prisma.MatriculaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          createMany: {
            args: Prisma.MatriculaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatriculaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          delete: {
            args: Prisma.MatriculaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          update: {
            args: Prisma.MatriculaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          deleteMany: {
            args: Prisma.MatriculaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatriculaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatriculaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          upsert: {
            args: Prisma.MatriculaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          aggregate: {
            args: Prisma.MatriculaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatricula>
          }
          groupBy: {
            args: Prisma.MatriculaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatriculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatriculaCountArgs<ExtArgs>
            result: $Utils.Optional<MatriculaCountAggregateOutputType> | number
          }
        }
      }
      Inscripcion: {
        payload: Prisma.$InscripcionPayload<ExtArgs>
        fields: Prisma.InscripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findFirst: {
            args: Prisma.InscripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findMany: {
            args: Prisma.InscripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          create: {
            args: Prisma.InscripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          createMany: {
            args: Prisma.InscripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          delete: {
            args: Prisma.InscripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          update: {
            args: Prisma.InscripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          deleteMany: {
            args: Prisma.InscripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InscripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          upsert: {
            args: Prisma.InscripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          aggregate: {
            args: Prisma.InscripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripcion>
          }
          groupBy: {
            args: Prisma.InscripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscripcionCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionCountAggregateOutputType> | number
          }
        }
      }
      Dicta: {
        payload: Prisma.$DictaPayload<ExtArgs>
        fields: Prisma.DictaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>
          }
          findFirst: {
            args: Prisma.DictaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>
          }
          findMany: {
            args: Prisma.DictaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>[]
          }
          create: {
            args: Prisma.DictaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>
          }
          createMany: {
            args: Prisma.DictaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>[]
          }
          delete: {
            args: Prisma.DictaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>
          }
          update: {
            args: Prisma.DictaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>
          }
          deleteMany: {
            args: Prisma.DictaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>[]
          }
          upsert: {
            args: Prisma.DictaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictaPayload>
          }
          aggregate: {
            args: Prisma.DictaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDicta>
          }
          groupBy: {
            args: Prisma.DictaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictaCountArgs<ExtArgs>
            result: $Utils.Optional<DictaCountAggregateOutputType> | number
          }
        }
      }
      Alumno: {
        payload: Prisma.$AlumnoPayload<ExtArgs>
        fields: Prisma.AlumnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          findFirst: {
            args: Prisma.AlumnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          findMany: {
            args: Prisma.AlumnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>[]
          }
          create: {
            args: Prisma.AlumnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          createMany: {
            args: Prisma.AlumnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlumnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>[]
          }
          delete: {
            args: Prisma.AlumnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          update: {
            args: Prisma.AlumnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          deleteMany: {
            args: Prisma.AlumnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlumnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlumnoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>[]
          }
          upsert: {
            args: Prisma.AlumnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          aggregate: {
            args: Prisma.AlumnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumno>
          }
          groupBy: {
            args: Prisma.AlumnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumnoCountArgs<ExtArgs>
            result: $Utils.Optional<AlumnoCountAggregateOutputType> | number
          }
        }
      }
      carreradocente: {
        payload: Prisma.$carreradocentePayload<ExtArgs>
        fields: Prisma.carreradocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carreradocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carreradocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>
          }
          findFirst: {
            args: Prisma.carreradocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carreradocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>
          }
          findMany: {
            args: Prisma.carreradocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>[]
          }
          create: {
            args: Prisma.carreradocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>
          }
          createMany: {
            args: Prisma.carreradocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carreradocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>[]
          }
          delete: {
            args: Prisma.carreradocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>
          }
          update: {
            args: Prisma.carreradocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>
          }
          deleteMany: {
            args: Prisma.carreradocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carreradocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carreradocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>[]
          }
          upsert: {
            args: Prisma.carreradocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carreradocentePayload>
          }
          aggregate: {
            args: Prisma.CarreradocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarreradocente>
          }
          groupBy: {
            args: Prisma.carreradocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreradocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.carreradocenteCountArgs<ExtArgs>
            result: $Utils.Optional<CarreradocenteCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      UsuarioRol: {
        payload: Prisma.$UsuarioRolPayload<ExtArgs>
        fields: Prisma.UsuarioRolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioRolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioRolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          findFirst: {
            args: Prisma.UsuarioRolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioRolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          findMany: {
            args: Prisma.UsuarioRolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          create: {
            args: Prisma.UsuarioRolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          createMany: {
            args: Prisma.UsuarioRolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioRolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          delete: {
            args: Prisma.UsuarioRolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          update: {
            args: Prisma.UsuarioRolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioRolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioRolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioRolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioRolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          aggregate: {
            args: Prisma.UsuarioRolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioRol>
          }
          groupBy: {
            args: Prisma.UsuarioRolGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioRolGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioRolCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioRolCountAggregateOutputType> | number
          }
        }
      }
      RolPermiso: {
        payload: Prisma.$RolPermisoPayload<ExtArgs>
        fields: Prisma.RolPermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolPermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolPermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findFirst: {
            args: Prisma.RolPermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolPermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findMany: {
            args: Prisma.RolPermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          create: {
            args: Prisma.RolPermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          createMany: {
            args: Prisma.RolPermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolPermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          delete: {
            args: Prisma.RolPermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          update: {
            args: Prisma.RolPermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          deleteMany: {
            args: Prisma.RolPermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolPermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolPermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          upsert: {
            args: Prisma.RolPermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          aggregate: {
            args: Prisma.RolPermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolPermiso>
          }
          groupBy: {
            args: Prisma.RolPermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolPermisoCountArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoCountAggregateOutputType> | number
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
    carrera?: CarreraOmit
    materia?: MateriaOmit
    estudiante?: EstudianteOmit
    docente?: DocenteOmit
    matricula?: MatriculaOmit
    inscripcion?: InscripcionOmit
    dicta?: DictaOmit
    alumno?: AlumnoOmit
    carreradocente?: carreradocenteOmit
    usuario?: UsuarioOmit
    rol?: RolOmit
    permiso?: PermisoOmit
    usuarioRol?: UsuarioRolOmit
    rolPermiso?: RolPermisoOmit
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
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    materias: number
    matriculas: number
    Alumno: number
    docente: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | CarreraCountOutputTypeCountMateriasArgs
    matriculas?: boolean | CarreraCountOutputTypeCountMatriculasArgs
    Alumno?: boolean | CarreraCountOutputTypeCountAlumnoArgs
    docente?: boolean | CarreraCountOutputTypeCountDocenteArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountAlumnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountDocenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carreradocenteWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    inscripciones: number
    dictan: number
    Alumno: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | MateriaCountOutputTypeCountInscripcionesArgs
    dictan?: boolean | MateriaCountOutputTypeCountDictanArgs
    Alumno?: boolean | MateriaCountOutputTypeCountAlumnoArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountDictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictaWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountAlumnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    matriculas: number
    inscripciones: number
    Alumno: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | EstudianteCountOutputTypeCountMatriculasArgs
    inscripciones?: boolean | EstudianteCountOutputTypeCountInscripcionesArgs
    Alumno?: boolean | EstudianteCountOutputTypeCountAlumnoArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountAlumnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoWhereInput
  }


  /**
   * Count Type DocenteCountOutputType
   */

  export type DocenteCountOutputType = {
    dictan: number
    carreraDocente: number
  }

  export type DocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictan?: boolean | DocenteCountOutputTypeCountDictanArgs
    carreraDocente?: boolean | DocenteCountOutputTypeCountCarreraDocenteArgs
  }

  // Custom InputTypes
  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCountOutputType
     */
    select?: DocenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountDictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictaWhereInput
  }

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountCarreraDocenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carreradocenteWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    roles: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UsuarioCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
    permisos: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
    permisos?: boolean | RolCountOutputTypeCountPermisosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Count Type PermisoCountOutputType
   */

  export type PermisoCountOutputType = {
    roles: number
  }

  export type PermisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermisoCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoCountOutputType
     */
    select?: PermisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarreraMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarreraCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id?: true
  }

  export type CarreraSumAggregateInputType = {
    id?: true
  }

  export type CarreraMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarreraMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarreraCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id: number
    nombre: string
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    matriculas?: boolean | Carrera$matriculasArgs<ExtArgs>
    Alumno?: boolean | Carrera$AlumnoArgs<ExtArgs>
    docente?: boolean | Carrera$docenteArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["carrera"]>
  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    matriculas?: boolean | Carrera$matriculasArgs<ExtArgs>
    Alumno?: boolean | Carrera$AlumnoArgs<ExtArgs>
    docente?: boolean | Carrera$docenteArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarreraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      materias: Prisma.$MateriaPayload<ExtArgs>[]
      matriculas: Prisma.$MatriculaPayload<ExtArgs>[]
      Alumno: Prisma.$AlumnoPayload<ExtArgs>[]
      docente: Prisma.$carreradocentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreraWithIdOnly = await prisma.carrera.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreras and returns the data saved in the database.
     * @param {CarreraCreateManyAndReturnArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras and returns the data updated in the database.
     * @param {CarreraUpdateManyAndReturnArgs} args - Arguments to update many Carreras.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarreraUpdateManyAndReturnArgs>(args: SelectSubset<T, CarreraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
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
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends Carrera$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matriculas<T extends Carrera$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Alumno<T extends Carrera$AlumnoArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$AlumnoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    docente<T extends Carrera$docenteArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$docenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carrera model
   */
  interface CarreraFieldRefs {
    readonly id: FieldRef<"Carrera", 'Int'>
    readonly nombre: FieldRef<"Carrera", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera createManyAndReturn
   */
  export type CarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera updateManyAndReturn
   */
  export type CarreraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to delete.
     */
    limit?: number
  }

  /**
   * Carrera.materias
   */
  export type Carrera$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Carrera.matriculas
   */
  export type Carrera$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Carrera.Alumno
   */
  export type Carrera$AlumnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    where?: AlumnoWhereInput
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    cursor?: AlumnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Carrera.docente
   */
  export type Carrera$docenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    where?: carreradocenteWhereInput
    orderBy?: carreradocenteOrderByWithRelationInput | carreradocenteOrderByWithRelationInput[]
    cursor?: carreradocenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarreradocenteScalarFieldEnum | CarreradocenteScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
  }

  export type MateriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
  }

  export type MateriaCountAggregateOutputType = {
    id: number
    nombre: number
    carreraId: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id?: true
    carreraId?: true
  }

  export type MateriaSumAggregateInputType = {
    id?: true
    carreraId?: true
  }

  export type MateriaMinAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
  }

  export type MateriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
  }

  export type MateriaCountAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id: number
    nombre: string
    carreraId: number
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    inscripciones?: boolean | Materia$inscripcionesArgs<ExtArgs>
    dictan?: boolean | Materia$dictanArgs<ExtArgs>
    Alumno?: boolean | Materia$AlumnoArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "carreraId", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    inscripciones?: boolean | Materia$inscripcionesArgs<ExtArgs>
    dictan?: boolean | Materia$dictanArgs<ExtArgs>
    Alumno?: boolean | Materia$AlumnoArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
      dictan: Prisma.$DictaPayload<ExtArgs>[]
      Alumno: Prisma.$AlumnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      carreraId: number
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.updateManyAndReturn({
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
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
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
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inscripciones<T extends Materia$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Materia$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dictan<T extends Materia$dictanArgs<ExtArgs> = {}>(args?: Subset<T, Materia$dictanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Alumno<T extends Materia$AlumnoArgs<ExtArgs> = {}>(args?: Subset<T, Materia$AlumnoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id: FieldRef<"Materia", 'Int'>
    readonly nombre: FieldRef<"Materia", 'String'>
    readonly carreraId: FieldRef<"Materia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.inscripciones
   */
  export type Materia$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Materia.dictan
   */
  export type Materia$dictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    where?: DictaWhereInput
    orderBy?: DictaOrderByWithRelationInput | DictaOrderByWithRelationInput[]
    cursor?: DictaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictaScalarFieldEnum | DictaScalarFieldEnum[]
  }

  /**
   * Materia.Alumno
   */
  export type Materia$AlumnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    where?: AlumnoWhereInput
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    cursor?: AlumnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    id: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    id: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstudianteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstudianteCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    id?: true
  }

  export type EstudianteSumAggregateInputType = {
    id?: true
  }

  export type EstudianteMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstudianteMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstudianteCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante to aggregate.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type EstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithAggregationInput | EstudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: EstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    id: number
    nombre: string
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends EstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    matriculas?: boolean | Estudiante$matriculasArgs<ExtArgs>
    inscripciones?: boolean | Estudiante$inscripcionesArgs<ExtArgs>
    Alumno?: boolean | Estudiante$AlumnoArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["estudiante"]>
  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | Estudiante$matriculasArgs<ExtArgs>
    inscripciones?: boolean | Estudiante$inscripcionesArgs<ExtArgs>
    Alumno?: boolean | Estudiante$AlumnoArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstudianteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      matriculas: Prisma.$MatriculaPayload<ExtArgs>[]
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
      Alumno: Prisma.$AlumnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type EstudianteGetPayload<S extends boolean | null | undefined | EstudianteDefaultArgs> = $Result.GetResult<Prisma.$EstudiantePayload, S>

  type EstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface EstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante'], meta: { name: 'Estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {EstudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteFindUniqueArgs>(args: SelectSubset<T, EstudianteFindUniqueArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteFindFirstArgs>(args?: SelectSubset<T, EstudianteFindFirstArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteFindManyArgs>(args?: SelectSubset<T, EstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante.
     * @param {EstudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends EstudianteCreateArgs>(args: SelectSubset<T, EstudianteCreateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiantes.
     * @param {EstudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteCreateManyArgs>(args?: SelectSubset<T, EstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudiantes and returns the data saved in the database.
     * @param {EstudianteCreateManyAndReturnArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudianteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estudiante.
     * @param {EstudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends EstudianteDeleteArgs>(args: SelectSubset<T, EstudianteDeleteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante.
     * @param {EstudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteUpdateArgs>(args: SelectSubset<T, EstudianteUpdateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteDeleteManyArgs>(args?: SelectSubset<T, EstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteUpdateManyArgs>(args: SelectSubset<T, EstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes and returns the data updated in the database.
     * @param {EstudianteUpdateManyAndReturnArgs} args - Arguments to update many Estudiantes.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstudianteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstudianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estudiante.
     * @param {EstudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteUpsertArgs>(args: SelectSubset<T, EstudianteUpsertArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudianteCountArgs>(
      args?: Subset<T, EstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteGroupByArgs} args - Group by arguments.
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
      T extends EstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante model
   */
  readonly fields: EstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matriculas<T extends Estudiante$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscripciones<T extends Estudiante$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Alumno<T extends Estudiante$AlumnoArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$AlumnoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estudiante model
   */
  interface EstudianteFieldRefs {
    readonly id: FieldRef<"Estudiante", 'Int'>
    readonly nombre: FieldRef<"Estudiante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante findUnique
   */
  export type EstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findUniqueOrThrow
   */
  export type EstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findFirst
   */
  export type EstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findFirstOrThrow
   */
  export type EstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findMany
   */
  export type EstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante create
   */
  export type EstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante.
     */
    data: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
  }

  /**
   * Estudiante createMany
   */
  export type EstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante createManyAndReturn
   */
  export type EstudianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante update
   */
  export type EstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante.
     */
    data: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
    /**
     * Choose, which Estudiante to update.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante updateMany
   */
  export type EstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante updateManyAndReturn
   */
  export type EstudianteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante upsert
   */
  export type EstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante to update in case it exists.
     */
    where: EstudianteWhereUniqueInput
    /**
     * In case the Estudiante found by the `where` argument doesn't exist, create a new Estudiante with this data.
     */
    create: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
    /**
     * In case the Estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
  }

  /**
   * Estudiante delete
   */
  export type EstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter which Estudiante to delete.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante deleteMany
   */
  export type EstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to delete.
     */
    limit?: number
  }

  /**
   * Estudiante.matriculas
   */
  export type Estudiante$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Estudiante.inscripciones
   */
  export type Estudiante$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Estudiante.Alumno
   */
  export type Estudiante$AlumnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    where?: AlumnoWhereInput
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    cursor?: AlumnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Estudiante without action
   */
  export type EstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
  }


  /**
   * Model Docente
   */

  export type AggregateDocente = {
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  export type DocenteAvgAggregateOutputType = {
    id: number | null
  }

  export type DocenteSumAggregateOutputType = {
    id: number | null
  }

  export type DocenteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DocenteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DocenteCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type DocenteAvgAggregateInputType = {
    id?: true
  }

  export type DocenteSumAggregateInputType = {
    id?: true
  }

  export type DocenteMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DocenteMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DocenteCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type DocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente to aggregate.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Docentes
    **/
    _count?: true | DocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocenteMaxAggregateInputType
  }

  export type GetDocenteAggregateType<T extends DocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocente[P]>
      : GetScalarType<T[P], AggregateDocente[P]>
  }




  export type DocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteWhereInput
    orderBy?: DocenteOrderByWithAggregationInput | DocenteOrderByWithAggregationInput[]
    by: DocenteScalarFieldEnum[] | DocenteScalarFieldEnum
    having?: DocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocenteCountAggregateInputType | true
    _avg?: DocenteAvgAggregateInputType
    _sum?: DocenteSumAggregateInputType
    _min?: DocenteMinAggregateInputType
    _max?: DocenteMaxAggregateInputType
  }

  export type DocenteGroupByOutputType = {
    id: number
    nombre: string
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  type GetDocenteGroupByPayload<T extends DocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocenteGroupByOutputType[P]>
            : GetScalarType<T[P], DocenteGroupByOutputType[P]>
        }
      >
    >


  export type DocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    dictan?: boolean | Docente$dictanArgs<ExtArgs>
    carreraDocente?: boolean | Docente$carreraDocenteArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type DocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["docente"]>
  export type DocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictan?: boolean | Docente$dictanArgs<ExtArgs>
    carreraDocente?: boolean | Docente$carreraDocenteArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Docente"
    objects: {
      dictan: Prisma.$DictaPayload<ExtArgs>[]
      carreraDocente: Prisma.$carreradocentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["docente"]>
    composites: {}
  }

  type DocenteGetPayload<S extends boolean | null | undefined | DocenteDefaultArgs> = $Result.GetResult<Prisma.$DocentePayload, S>

  type DocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocenteCountAggregateInputType | true
    }

  export interface DocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Docente'], meta: { name: 'Docente' } }
    /**
     * Find zero or one Docente that matches the filter.
     * @param {DocenteFindUniqueArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocenteFindUniqueArgs>(args: SelectSubset<T, DocenteFindUniqueArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Docente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocenteFindUniqueOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, DocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocenteFindFirstArgs>(args?: SelectSubset<T, DocenteFindFirstArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, DocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Docentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Docentes
     * const docentes = await prisma.docente.findMany()
     * 
     * // Get first 10 Docentes
     * const docentes = await prisma.docente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docenteWithIdOnly = await prisma.docente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocenteFindManyArgs>(args?: SelectSubset<T, DocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Docente.
     * @param {DocenteCreateArgs} args - Arguments to create a Docente.
     * @example
     * // Create one Docente
     * const Docente = await prisma.docente.create({
     *   data: {
     *     // ... data to create a Docente
     *   }
     * })
     * 
     */
    create<T extends DocenteCreateArgs>(args: SelectSubset<T, DocenteCreateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Docentes.
     * @param {DocenteCreateManyArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocenteCreateManyArgs>(args?: SelectSubset<T, DocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Docentes and returns the data saved in the database.
     * @param {DocenteCreateManyAndReturnArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Docentes and only return the `id`
     * const docenteWithIdOnly = await prisma.docente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, DocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Docente.
     * @param {DocenteDeleteArgs} args - Arguments to delete one Docente.
     * @example
     * // Delete one Docente
     * const Docente = await prisma.docente.delete({
     *   where: {
     *     // ... filter to delete one Docente
     *   }
     * })
     * 
     */
    delete<T extends DocenteDeleteArgs>(args: SelectSubset<T, DocenteDeleteArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Docente.
     * @param {DocenteUpdateArgs} args - Arguments to update one Docente.
     * @example
     * // Update one Docente
     * const docente = await prisma.docente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocenteUpdateArgs>(args: SelectSubset<T, DocenteUpdateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Docentes.
     * @param {DocenteDeleteManyArgs} args - Arguments to filter Docentes to delete.
     * @example
     * // Delete a few Docentes
     * const { count } = await prisma.docente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocenteDeleteManyArgs>(args?: SelectSubset<T, DocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocenteUpdateManyArgs>(args: SelectSubset<T, DocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes and returns the data updated in the database.
     * @param {DocenteUpdateManyAndReturnArgs} args - Arguments to update many Docentes.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Docentes and only return the `id`
     * const docenteWithIdOnly = await prisma.docente.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, DocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Docente.
     * @param {DocenteUpsertArgs} args - Arguments to update or create a Docente.
     * @example
     * // Update or create a Docente
     * const docente = await prisma.docente.upsert({
     *   create: {
     *     // ... data to create a Docente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Docente we want to update
     *   }
     * })
     */
    upsert<T extends DocenteUpsertArgs>(args: SelectSubset<T, DocenteUpsertArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCountArgs} args - Arguments to filter Docentes to count.
     * @example
     * // Count the number of Docentes
     * const count = await prisma.docente.count({
     *   where: {
     *     // ... the filter for the Docentes we want to count
     *   }
     * })
    **/
    count<T extends DocenteCountArgs>(
      args?: Subset<T, DocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocenteAggregateArgs>(args: Subset<T, DocenteAggregateArgs>): Prisma.PrismaPromise<GetDocenteAggregateType<T>>

    /**
     * Group by Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteGroupByArgs} args - Group by arguments.
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
      T extends DocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocenteGroupByArgs['orderBy'] }
        : { orderBy?: DocenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Docente model
   */
  readonly fields: DocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Docente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dictan<T extends Docente$dictanArgs<ExtArgs> = {}>(args?: Subset<T, Docente$dictanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carreraDocente<T extends Docente$carreraDocenteArgs<ExtArgs> = {}>(args?: Subset<T, Docente$carreraDocenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Docente model
   */
  interface DocenteFieldRefs {
    readonly id: FieldRef<"Docente", 'Int'>
    readonly nombre: FieldRef<"Docente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Docente findUnique
   */
  export type DocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findUniqueOrThrow
   */
  export type DocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findFirst
   */
  export type DocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findFirstOrThrow
   */
  export type DocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findMany
   */
  export type DocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docentes to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente create
   */
  export type DocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Docente.
     */
    data: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
  }

  /**
   * Docente createMany
   */
  export type DocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente createManyAndReturn
   */
  export type DocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente update
   */
  export type DocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Docente.
     */
    data: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
    /**
     * Choose, which Docente to update.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente updateMany
   */
  export type DocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente updateManyAndReturn
   */
  export type DocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente upsert
   */
  export type DocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Docente to update in case it exists.
     */
    where: DocenteWhereUniqueInput
    /**
     * In case the Docente found by the `where` argument doesn't exist, create a new Docente with this data.
     */
    create: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
    /**
     * In case the Docente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
  }

  /**
   * Docente delete
   */
  export type DocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter which Docente to delete.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente deleteMany
   */
  export type DocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docentes to delete
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to delete.
     */
    limit?: number
  }

  /**
   * Docente.dictan
   */
  export type Docente$dictanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    where?: DictaWhereInput
    orderBy?: DictaOrderByWithRelationInput | DictaOrderByWithRelationInput[]
    cursor?: DictaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictaScalarFieldEnum | DictaScalarFieldEnum[]
  }

  /**
   * Docente.carreraDocente
   */
  export type Docente$carreraDocenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    where?: carreradocenteWhereInput
    orderBy?: carreradocenteOrderByWithRelationInput | carreradocenteOrderByWithRelationInput[]
    cursor?: carreradocenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarreradocenteScalarFieldEnum | CarreradocenteScalarFieldEnum[]
  }

  /**
   * Docente without action
   */
  export type DocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
  }


  /**
   * Model Matricula
   */

  export type AggregateMatricula = {
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  export type MatriculaAvgAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
  }

  export type MatriculaSumAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
  }

  export type MatriculaMinAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
  }

  export type MatriculaMaxAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
  }

  export type MatriculaCountAggregateOutputType = {
    id: number
    estudianteId: number
    carreraId: number
    _all: number
  }


  export type MatriculaAvgAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
  }

  export type MatriculaSumAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
  }

  export type MatriculaMinAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
  }

  export type MatriculaMaxAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
  }

  export type MatriculaCountAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
    _all?: true
  }

  export type MatriculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matricula to aggregate.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matriculas
    **/
    _count?: true | MatriculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculaMaxAggregateInputType
  }

  export type GetMatriculaAggregateType<T extends MatriculaAggregateArgs> = {
        [P in keyof T & keyof AggregateMatricula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatricula[P]>
      : GetScalarType<T[P], AggregateMatricula[P]>
  }




  export type MatriculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithAggregationInput | MatriculaOrderByWithAggregationInput[]
    by: MatriculaScalarFieldEnum[] | MatriculaScalarFieldEnum
    having?: MatriculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculaCountAggregateInputType | true
    _avg?: MatriculaAvgAggregateInputType
    _sum?: MatriculaSumAggregateInputType
    _min?: MatriculaMinAggregateInputType
    _max?: MatriculaMaxAggregateInputType
  }

  export type MatriculaGroupByOutputType = {
    id: number
    estudianteId: number
    carreraId: number
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  type GetMatriculaGroupByPayload<T extends MatriculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatriculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
        }
      >
    >


  export type MatriculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>

  export type MatriculaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>

  export type MatriculaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>

  export type MatriculaSelectScalar = {
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
  }

  export type MatriculaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estudianteId" | "carreraId", ExtArgs["result"]["matricula"]>
  export type MatriculaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type MatriculaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type MatriculaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $MatriculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matricula"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
      carrera: Prisma.$CarreraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estudianteId: number
      carreraId: number
    }, ExtArgs["result"]["matricula"]>
    composites: {}
  }

  type MatriculaGetPayload<S extends boolean | null | undefined | MatriculaDefaultArgs> = $Result.GetResult<Prisma.$MatriculaPayload, S>

  type MatriculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatriculaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatriculaCountAggregateInputType | true
    }

  export interface MatriculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matricula'], meta: { name: 'Matricula' } }
    /**
     * Find zero or one Matricula that matches the filter.
     * @param {MatriculaFindUniqueArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatriculaFindUniqueArgs>(args: SelectSubset<T, MatriculaFindUniqueArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matricula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatriculaFindUniqueOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatriculaFindUniqueOrThrowArgs>(args: SelectSubset<T, MatriculaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatriculaFindFirstArgs>(args?: SelectSubset<T, MatriculaFindFirstArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matricula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatriculaFindFirstOrThrowArgs>(args?: SelectSubset<T, MatriculaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matriculas
     * const matriculas = await prisma.matricula.findMany()
     * 
     * // Get first 10 Matriculas
     * const matriculas = await prisma.matricula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matriculaWithIdOnly = await prisma.matricula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatriculaFindManyArgs>(args?: SelectSubset<T, MatriculaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matricula.
     * @param {MatriculaCreateArgs} args - Arguments to create a Matricula.
     * @example
     * // Create one Matricula
     * const Matricula = await prisma.matricula.create({
     *   data: {
     *     // ... data to create a Matricula
     *   }
     * })
     * 
     */
    create<T extends MatriculaCreateArgs>(args: SelectSubset<T, MatriculaCreateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matriculas.
     * @param {MatriculaCreateManyArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatriculaCreateManyArgs>(args?: SelectSubset<T, MatriculaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matriculas and returns the data saved in the database.
     * @param {MatriculaCreateManyAndReturnArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matriculas and only return the `id`
     * const matriculaWithIdOnly = await prisma.matricula.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatriculaCreateManyAndReturnArgs>(args?: SelectSubset<T, MatriculaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matricula.
     * @param {MatriculaDeleteArgs} args - Arguments to delete one Matricula.
     * @example
     * // Delete one Matricula
     * const Matricula = await prisma.matricula.delete({
     *   where: {
     *     // ... filter to delete one Matricula
     *   }
     * })
     * 
     */
    delete<T extends MatriculaDeleteArgs>(args: SelectSubset<T, MatriculaDeleteArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matricula.
     * @param {MatriculaUpdateArgs} args - Arguments to update one Matricula.
     * @example
     * // Update one Matricula
     * const matricula = await prisma.matricula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatriculaUpdateArgs>(args: SelectSubset<T, MatriculaUpdateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matriculas.
     * @param {MatriculaDeleteManyArgs} args - Arguments to filter Matriculas to delete.
     * @example
     * // Delete a few Matriculas
     * const { count } = await prisma.matricula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatriculaDeleteManyArgs>(args?: SelectSubset<T, MatriculaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matriculas
     * const matricula = await prisma.matricula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatriculaUpdateManyArgs>(args: SelectSubset<T, MatriculaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas and returns the data updated in the database.
     * @param {MatriculaUpdateManyAndReturnArgs} args - Arguments to update many Matriculas.
     * @example
     * // Update many Matriculas
     * const matricula = await prisma.matricula.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matriculas and only return the `id`
     * const matriculaWithIdOnly = await prisma.matricula.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatriculaUpdateManyAndReturnArgs>(args: SelectSubset<T, MatriculaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matricula.
     * @param {MatriculaUpsertArgs} args - Arguments to update or create a Matricula.
     * @example
     * // Update or create a Matricula
     * const matricula = await prisma.matricula.upsert({
     *   create: {
     *     // ... data to create a Matricula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matricula we want to update
     *   }
     * })
     */
    upsert<T extends MatriculaUpsertArgs>(args: SelectSubset<T, MatriculaUpsertArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaCountArgs} args - Arguments to filter Matriculas to count.
     * @example
     * // Count the number of Matriculas
     * const count = await prisma.matricula.count({
     *   where: {
     *     // ... the filter for the Matriculas we want to count
     *   }
     * })
    **/
    count<T extends MatriculaCountArgs>(
      args?: Subset<T, MatriculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatriculaAggregateArgs>(args: Subset<T, MatriculaAggregateArgs>): Prisma.PrismaPromise<GetMatriculaAggregateType<T>>

    /**
     * Group by Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaGroupByArgs} args - Group by arguments.
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
      T extends MatriculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatriculaGroupByArgs['orderBy'] }
        : { orderBy?: MatriculaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatriculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matricula model
   */
  readonly fields: MatriculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matricula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatriculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Matricula model
   */
  interface MatriculaFieldRefs {
    readonly id: FieldRef<"Matricula", 'Int'>
    readonly estudianteId: FieldRef<"Matricula", 'Int'>
    readonly carreraId: FieldRef<"Matricula", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Matricula findUnique
   */
  export type MatriculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findUniqueOrThrow
   */
  export type MatriculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findFirst
   */
  export type MatriculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findFirstOrThrow
   */
  export type MatriculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findMany
   */
  export type MatriculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matriculas to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula create
   */
  export type MatriculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to create a Matricula.
     */
    data: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
  }

  /**
   * Matricula createMany
   */
  export type MatriculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matricula createManyAndReturn
   */
  export type MatriculaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matricula update
   */
  export type MatriculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to update a Matricula.
     */
    data: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
    /**
     * Choose, which Matricula to update.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula updateMany
   */
  export type MatriculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matriculas.
     */
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyInput>
    /**
     * Filter which Matriculas to update
     */
    where?: MatriculaWhereInput
    /**
     * Limit how many Matriculas to update.
     */
    limit?: number
  }

  /**
   * Matricula updateManyAndReturn
   */
  export type MatriculaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * The data used to update Matriculas.
     */
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyInput>
    /**
     * Filter which Matriculas to update
     */
    where?: MatriculaWhereInput
    /**
     * Limit how many Matriculas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matricula upsert
   */
  export type MatriculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The filter to search for the Matricula to update in case it exists.
     */
    where: MatriculaWhereUniqueInput
    /**
     * In case the Matricula found by the `where` argument doesn't exist, create a new Matricula with this data.
     */
    create: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
    /**
     * In case the Matricula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
  }

  /**
   * Matricula delete
   */
  export type MatriculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter which Matricula to delete.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula deleteMany
   */
  export type MatriculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matriculas to delete
     */
    where?: MatriculaWhereInput
    /**
     * Limit how many Matriculas to delete.
     */
    limit?: number
  }

  /**
   * Matricula without action
   */
  export type MatriculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matricula
     */
    omit?: MatriculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
  }


  /**
   * Model Inscripcion
   */

  export type AggregateInscripcion = {
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  export type InscripcionAvgAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionSumAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionMinAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionMaxAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type InscripcionCountAggregateOutputType = {
    id: number
    estudianteId: number
    materiaId: number
    _all: number
  }


  export type InscripcionAvgAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionSumAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionMinAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionMaxAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type InscripcionCountAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
    _all?: true
  }

  export type InscripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcion to aggregate.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscripcions
    **/
    _count?: true | InscripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionMaxAggregateInputType
  }

  export type GetInscripcionAggregateType<T extends InscripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripcion[P]>
      : GetScalarType<T[P], AggregateInscripcion[P]>
  }




  export type InscripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithAggregationInput | InscripcionOrderByWithAggregationInput[]
    by: InscripcionScalarFieldEnum[] | InscripcionScalarFieldEnum
    having?: InscripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionCountAggregateInputType | true
    _avg?: InscripcionAvgAggregateInputType
    _sum?: InscripcionSumAggregateInputType
    _min?: InscripcionMinAggregateInputType
    _max?: InscripcionMaxAggregateInputType
  }

  export type InscripcionGroupByOutputType = {
    id: number
    estudianteId: number
    materiaId: number
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  type GetInscripcionGroupByPayload<T extends InscripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
        }
      >
    >


  export type InscripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectScalar = {
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
  }

  export type InscripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estudianteId" | "materiaId", ExtArgs["result"]["inscripcion"]>
  export type InscripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $InscripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscripcion"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estudianteId: number
      materiaId: number
    }, ExtArgs["result"]["inscripcion"]>
    composites: {}
  }

  type InscripcionGetPayload<S extends boolean | null | undefined | InscripcionDefaultArgs> = $Result.GetResult<Prisma.$InscripcionPayload, S>

  type InscripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionCountAggregateInputType | true
    }

  export interface InscripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscripcion'], meta: { name: 'Inscripcion' } }
    /**
     * Find zero or one Inscripcion that matches the filter.
     * @param {InscripcionFindUniqueArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscripcionFindUniqueArgs>(args: SelectSubset<T, InscripcionFindUniqueArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscripcionFindUniqueOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, InscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscripcionFindFirstArgs>(args?: SelectSubset<T, InscripcionFindFirstArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, InscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany()
     * 
     * // Get first 10 Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscripcionFindManyArgs>(args?: SelectSubset<T, InscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscripcion.
     * @param {InscripcionCreateArgs} args - Arguments to create a Inscripcion.
     * @example
     * // Create one Inscripcion
     * const Inscripcion = await prisma.inscripcion.create({
     *   data: {
     *     // ... data to create a Inscripcion
     *   }
     * })
     * 
     */
    create<T extends InscripcionCreateArgs>(args: SelectSubset<T, InscripcionCreateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscripcions.
     * @param {InscripcionCreateManyArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscripcionCreateManyArgs>(args?: SelectSubset<T, InscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscripcions and returns the data saved in the database.
     * @param {InscripcionCreateManyAndReturnArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscripcions and only return the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, InscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscripcion.
     * @param {InscripcionDeleteArgs} args - Arguments to delete one Inscripcion.
     * @example
     * // Delete one Inscripcion
     * const Inscripcion = await prisma.inscripcion.delete({
     *   where: {
     *     // ... filter to delete one Inscripcion
     *   }
     * })
     * 
     */
    delete<T extends InscripcionDeleteArgs>(args: SelectSubset<T, InscripcionDeleteArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscripcion.
     * @param {InscripcionUpdateArgs} args - Arguments to update one Inscripcion.
     * @example
     * // Update one Inscripcion
     * const inscripcion = await prisma.inscripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscripcionUpdateArgs>(args: SelectSubset<T, InscripcionUpdateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscripcions.
     * @param {InscripcionDeleteManyArgs} args - Arguments to filter Inscripcions to delete.
     * @example
     * // Delete a few Inscripcions
     * const { count } = await prisma.inscripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscripcionDeleteManyArgs>(args?: SelectSubset<T, InscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscripcionUpdateManyArgs>(args: SelectSubset<T, InscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions and returns the data updated in the database.
     * @param {InscripcionUpdateManyAndReturnArgs} args - Arguments to update many Inscripcions.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscripcions and only return the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.updateManyAndReturn({
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
    updateManyAndReturn<T extends InscripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, InscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscripcion.
     * @param {InscripcionUpsertArgs} args - Arguments to update or create a Inscripcion.
     * @example
     * // Update or create a Inscripcion
     * const inscripcion = await prisma.inscripcion.upsert({
     *   create: {
     *     // ... data to create a Inscripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscripcion we want to update
     *   }
     * })
     */
    upsert<T extends InscripcionUpsertArgs>(args: SelectSubset<T, InscripcionUpsertArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionCountArgs} args - Arguments to filter Inscripcions to count.
     * @example
     * // Count the number of Inscripcions
     * const count = await prisma.inscripcion.count({
     *   where: {
     *     // ... the filter for the Inscripcions we want to count
     *   }
     * })
    **/
    count<T extends InscripcionCountArgs>(
      args?: Subset<T, InscripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscripcionAggregateArgs>(args: Subset<T, InscripcionAggregateArgs>): Prisma.PrismaPromise<GetInscripcionAggregateType<T>>

    /**
     * Group by Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionGroupByArgs} args - Group by arguments.
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
      T extends InscripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscripcionGroupByArgs['orderBy'] }
        : { orderBy?: InscripcionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscripcion model
   */
  readonly fields: InscripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inscripcion model
   */
  interface InscripcionFieldRefs {
    readonly id: FieldRef<"Inscripcion", 'Int'>
    readonly estudianteId: FieldRef<"Inscripcion", 'Int'>
    readonly materiaId: FieldRef<"Inscripcion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inscripcion findUnique
   */
  export type InscripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findUniqueOrThrow
   */
  export type InscripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findFirst
   */
  export type InscripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findFirstOrThrow
   */
  export type InscripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findMany
   */
  export type InscripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcions to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion create
   */
  export type InscripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscripcion.
     */
    data: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
  }

  /**
   * Inscripcion createMany
   */
  export type InscripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inscripcion createManyAndReturn
   */
  export type InscripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion update
   */
  export type InscripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscripcion.
     */
    data: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
    /**
     * Choose, which Inscripcion to update.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion updateMany
   */
  export type InscripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
  }

  /**
   * Inscripcion updateManyAndReturn
   */
  export type InscripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion upsert
   */
  export type InscripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscripcion to update in case it exists.
     */
    where: InscripcionWhereUniqueInput
    /**
     * In case the Inscripcion found by the `where` argument doesn't exist, create a new Inscripcion with this data.
     */
    create: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
    /**
     * In case the Inscripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
  }

  /**
   * Inscripcion delete
   */
  export type InscripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter which Inscripcion to delete.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion deleteMany
   */
  export type InscripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcions to delete
     */
    where?: InscripcionWhereInput
    /**
     * Limit how many Inscripcions to delete.
     */
    limit?: number
  }

  /**
   * Inscripcion without action
   */
  export type InscripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscripcion
     */
    omit?: InscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
  }


  /**
   * Model Dicta
   */

  export type AggregateDicta = {
    _count: DictaCountAggregateOutputType | null
    _avg: DictaAvgAggregateOutputType | null
    _sum: DictaSumAggregateOutputType | null
    _min: DictaMinAggregateOutputType | null
    _max: DictaMaxAggregateOutputType | null
  }

  export type DictaAvgAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictaSumAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictaMinAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictaMaxAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type DictaCountAggregateOutputType = {
    id: number
    docenteId: number
    materiaId: number
    _all: number
  }


  export type DictaAvgAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictaSumAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictaMinAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictaMaxAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type DictaCountAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
    _all?: true
  }

  export type DictaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dicta to aggregate.
     */
    where?: DictaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictas to fetch.
     */
    orderBy?: DictaOrderByWithRelationInput | DictaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dictas
    **/
    _count?: true | DictaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictaMaxAggregateInputType
  }

  export type GetDictaAggregateType<T extends DictaAggregateArgs> = {
        [P in keyof T & keyof AggregateDicta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDicta[P]>
      : GetScalarType<T[P], AggregateDicta[P]>
  }




  export type DictaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictaWhereInput
    orderBy?: DictaOrderByWithAggregationInput | DictaOrderByWithAggregationInput[]
    by: DictaScalarFieldEnum[] | DictaScalarFieldEnum
    having?: DictaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictaCountAggregateInputType | true
    _avg?: DictaAvgAggregateInputType
    _sum?: DictaSumAggregateInputType
    _min?: DictaMinAggregateInputType
    _max?: DictaMaxAggregateInputType
  }

  export type DictaGroupByOutputType = {
    id: number
    docenteId: number
    materiaId: number
    _count: DictaCountAggregateOutputType | null
    _avg: DictaAvgAggregateOutputType | null
    _sum: DictaSumAggregateOutputType | null
    _min: DictaMinAggregateOutputType | null
    _max: DictaMaxAggregateOutputType | null
  }

  type GetDictaGroupByPayload<T extends DictaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictaGroupByOutputType[P]>
            : GetScalarType<T[P], DictaGroupByOutputType[P]>
        }
      >
    >


  export type DictaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dicta"]>

  export type DictaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dicta"]>

  export type DictaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dicta"]>

  export type DictaSelectScalar = {
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
  }

  export type DictaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "docenteId" | "materiaId", ExtArgs["result"]["dicta"]>
  export type DictaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type DictaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type DictaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $DictaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dicta"
    objects: {
      docente: Prisma.$DocentePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      docenteId: number
      materiaId: number
    }, ExtArgs["result"]["dicta"]>
    composites: {}
  }

  type DictaGetPayload<S extends boolean | null | undefined | DictaDefaultArgs> = $Result.GetResult<Prisma.$DictaPayload, S>

  type DictaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictaCountAggregateInputType | true
    }

  export interface DictaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dicta'], meta: { name: 'Dicta' } }
    /**
     * Find zero or one Dicta that matches the filter.
     * @param {DictaFindUniqueArgs} args - Arguments to find a Dicta
     * @example
     * // Get one Dicta
     * const dicta = await prisma.dicta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictaFindUniqueArgs>(args: SelectSubset<T, DictaFindUniqueArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dicta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictaFindUniqueOrThrowArgs} args - Arguments to find a Dicta
     * @example
     * // Get one Dicta
     * const dicta = await prisma.dicta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictaFindUniqueOrThrowArgs>(args: SelectSubset<T, DictaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dicta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictaFindFirstArgs} args - Arguments to find a Dicta
     * @example
     * // Get one Dicta
     * const dicta = await prisma.dicta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictaFindFirstArgs>(args?: SelectSubset<T, DictaFindFirstArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dicta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictaFindFirstOrThrowArgs} args - Arguments to find a Dicta
     * @example
     * // Get one Dicta
     * const dicta = await prisma.dicta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictaFindFirstOrThrowArgs>(args?: SelectSubset<T, DictaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dictas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dictas
     * const dictas = await prisma.dicta.findMany()
     * 
     * // Get first 10 Dictas
     * const dictas = await prisma.dicta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dictaWithIdOnly = await prisma.dicta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DictaFindManyArgs>(args?: SelectSubset<T, DictaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dicta.
     * @param {DictaCreateArgs} args - Arguments to create a Dicta.
     * @example
     * // Create one Dicta
     * const Dicta = await prisma.dicta.create({
     *   data: {
     *     // ... data to create a Dicta
     *   }
     * })
     * 
     */
    create<T extends DictaCreateArgs>(args: SelectSubset<T, DictaCreateArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dictas.
     * @param {DictaCreateManyArgs} args - Arguments to create many Dictas.
     * @example
     * // Create many Dictas
     * const dicta = await prisma.dicta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictaCreateManyArgs>(args?: SelectSubset<T, DictaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dictas and returns the data saved in the database.
     * @param {DictaCreateManyAndReturnArgs} args - Arguments to create many Dictas.
     * @example
     * // Create many Dictas
     * const dicta = await prisma.dicta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dictas and only return the `id`
     * const dictaWithIdOnly = await prisma.dicta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictaCreateManyAndReturnArgs>(args?: SelectSubset<T, DictaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dicta.
     * @param {DictaDeleteArgs} args - Arguments to delete one Dicta.
     * @example
     * // Delete one Dicta
     * const Dicta = await prisma.dicta.delete({
     *   where: {
     *     // ... filter to delete one Dicta
     *   }
     * })
     * 
     */
    delete<T extends DictaDeleteArgs>(args: SelectSubset<T, DictaDeleteArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dicta.
     * @param {DictaUpdateArgs} args - Arguments to update one Dicta.
     * @example
     * // Update one Dicta
     * const dicta = await prisma.dicta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictaUpdateArgs>(args: SelectSubset<T, DictaUpdateArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dictas.
     * @param {DictaDeleteManyArgs} args - Arguments to filter Dictas to delete.
     * @example
     * // Delete a few Dictas
     * const { count } = await prisma.dicta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictaDeleteManyArgs>(args?: SelectSubset<T, DictaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dictas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dictas
     * const dicta = await prisma.dicta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictaUpdateManyArgs>(args: SelectSubset<T, DictaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dictas and returns the data updated in the database.
     * @param {DictaUpdateManyAndReturnArgs} args - Arguments to update many Dictas.
     * @example
     * // Update many Dictas
     * const dicta = await prisma.dicta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dictas and only return the `id`
     * const dictaWithIdOnly = await prisma.dicta.updateManyAndReturn({
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
    updateManyAndReturn<T extends DictaUpdateManyAndReturnArgs>(args: SelectSubset<T, DictaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dicta.
     * @param {DictaUpsertArgs} args - Arguments to update or create a Dicta.
     * @example
     * // Update or create a Dicta
     * const dicta = await prisma.dicta.upsert({
     *   create: {
     *     // ... data to create a Dicta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dicta we want to update
     *   }
     * })
     */
    upsert<T extends DictaUpsertArgs>(args: SelectSubset<T, DictaUpsertArgs<ExtArgs>>): Prisma__DictaClient<$Result.GetResult<Prisma.$DictaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dictas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictaCountArgs} args - Arguments to filter Dictas to count.
     * @example
     * // Count the number of Dictas
     * const count = await prisma.dicta.count({
     *   where: {
     *     // ... the filter for the Dictas we want to count
     *   }
     * })
    **/
    count<T extends DictaCountArgs>(
      args?: Subset<T, DictaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dicta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DictaAggregateArgs>(args: Subset<T, DictaAggregateArgs>): Prisma.PrismaPromise<GetDictaAggregateType<T>>

    /**
     * Group by Dicta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictaGroupByArgs} args - Group by arguments.
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
      T extends DictaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictaGroupByArgs['orderBy'] }
        : { orderBy?: DictaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DictaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dicta model
   */
  readonly fields: DictaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dicta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docente<T extends DocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocenteDefaultArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dicta model
   */
  interface DictaFieldRefs {
    readonly id: FieldRef<"Dicta", 'Int'>
    readonly docenteId: FieldRef<"Dicta", 'Int'>
    readonly materiaId: FieldRef<"Dicta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dicta findUnique
   */
  export type DictaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * Filter, which Dicta to fetch.
     */
    where: DictaWhereUniqueInput
  }

  /**
   * Dicta findUniqueOrThrow
   */
  export type DictaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * Filter, which Dicta to fetch.
     */
    where: DictaWhereUniqueInput
  }

  /**
   * Dicta findFirst
   */
  export type DictaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * Filter, which Dicta to fetch.
     */
    where?: DictaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictas to fetch.
     */
    orderBy?: DictaOrderByWithRelationInput | DictaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dictas.
     */
    cursor?: DictaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dictas.
     */
    distinct?: DictaScalarFieldEnum | DictaScalarFieldEnum[]
  }

  /**
   * Dicta findFirstOrThrow
   */
  export type DictaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * Filter, which Dicta to fetch.
     */
    where?: DictaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictas to fetch.
     */
    orderBy?: DictaOrderByWithRelationInput | DictaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dictas.
     */
    cursor?: DictaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dictas.
     */
    distinct?: DictaScalarFieldEnum | DictaScalarFieldEnum[]
  }

  /**
   * Dicta findMany
   */
  export type DictaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * Filter, which Dictas to fetch.
     */
    where?: DictaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictas to fetch.
     */
    orderBy?: DictaOrderByWithRelationInput | DictaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dictas.
     */
    cursor?: DictaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictas.
     */
    skip?: number
    distinct?: DictaScalarFieldEnum | DictaScalarFieldEnum[]
  }

  /**
   * Dicta create
   */
  export type DictaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * The data needed to create a Dicta.
     */
    data: XOR<DictaCreateInput, DictaUncheckedCreateInput>
  }

  /**
   * Dicta createMany
   */
  export type DictaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dictas.
     */
    data: DictaCreateManyInput | DictaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dicta createManyAndReturn
   */
  export type DictaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * The data used to create many Dictas.
     */
    data: DictaCreateManyInput | DictaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dicta update
   */
  export type DictaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * The data needed to update a Dicta.
     */
    data: XOR<DictaUpdateInput, DictaUncheckedUpdateInput>
    /**
     * Choose, which Dicta to update.
     */
    where: DictaWhereUniqueInput
  }

  /**
   * Dicta updateMany
   */
  export type DictaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dictas.
     */
    data: XOR<DictaUpdateManyMutationInput, DictaUncheckedUpdateManyInput>
    /**
     * Filter which Dictas to update
     */
    where?: DictaWhereInput
    /**
     * Limit how many Dictas to update.
     */
    limit?: number
  }

  /**
   * Dicta updateManyAndReturn
   */
  export type DictaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * The data used to update Dictas.
     */
    data: XOR<DictaUpdateManyMutationInput, DictaUncheckedUpdateManyInput>
    /**
     * Filter which Dictas to update
     */
    where?: DictaWhereInput
    /**
     * Limit how many Dictas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dicta upsert
   */
  export type DictaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * The filter to search for the Dicta to update in case it exists.
     */
    where: DictaWhereUniqueInput
    /**
     * In case the Dicta found by the `where` argument doesn't exist, create a new Dicta with this data.
     */
    create: XOR<DictaCreateInput, DictaUncheckedCreateInput>
    /**
     * In case the Dicta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictaUpdateInput, DictaUncheckedUpdateInput>
  }

  /**
   * Dicta delete
   */
  export type DictaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
    /**
     * Filter which Dicta to delete.
     */
    where: DictaWhereUniqueInput
  }

  /**
   * Dicta deleteMany
   */
  export type DictaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dictas to delete
     */
    where?: DictaWhereInput
    /**
     * Limit how many Dictas to delete.
     */
    limit?: number
  }

  /**
   * Dicta without action
   */
  export type DictaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicta
     */
    select?: DictaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicta
     */
    omit?: DictaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictaInclude<ExtArgs> | null
  }


  /**
   * Model Alumno
   */

  export type AggregateAlumno = {
    _count: AlumnoCountAggregateOutputType | null
    _avg: AlumnoAvgAggregateOutputType | null
    _sum: AlumnoSumAggregateOutputType | null
    _min: AlumnoMinAggregateOutputType | null
    _max: AlumnoMaxAggregateOutputType | null
  }

  export type AlumnoAvgAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type AlumnoSumAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type AlumnoMinAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type AlumnoMaxAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    carreraId: number | null
    materiaId: number | null
  }

  export type AlumnoCountAggregateOutputType = {
    id: number
    estudianteId: number
    carreraId: number
    materiaId: number
    _all: number
  }


  export type AlumnoAvgAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
    materiaId?: true
  }

  export type AlumnoSumAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
    materiaId?: true
  }

  export type AlumnoMinAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
    materiaId?: true
  }

  export type AlumnoMaxAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
    materiaId?: true
  }

  export type AlumnoCountAggregateInputType = {
    id?: true
    estudianteId?: true
    carreraId?: true
    materiaId?: true
    _all?: true
  }

  export type AlumnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumno to aggregate.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alumnos
    **/
    _count?: true | AlumnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnoMaxAggregateInputType
  }

  export type GetAlumnoAggregateType<T extends AlumnoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumno[P]>
      : GetScalarType<T[P], AggregateAlumno[P]>
  }




  export type AlumnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoWhereInput
    orderBy?: AlumnoOrderByWithAggregationInput | AlumnoOrderByWithAggregationInput[]
    by: AlumnoScalarFieldEnum[] | AlumnoScalarFieldEnum
    having?: AlumnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnoCountAggregateInputType | true
    _avg?: AlumnoAvgAggregateInputType
    _sum?: AlumnoSumAggregateInputType
    _min?: AlumnoMinAggregateInputType
    _max?: AlumnoMaxAggregateInputType
  }

  export type AlumnoGroupByOutputType = {
    id: number
    estudianteId: number
    carreraId: number
    materiaId: number
    _count: AlumnoCountAggregateOutputType | null
    _avg: AlumnoAvgAggregateOutputType | null
    _sum: AlumnoSumAggregateOutputType | null
    _min: AlumnoMinAggregateOutputType | null
    _max: AlumnoMaxAggregateOutputType | null
  }

  type GetAlumnoGroupByPayload<T extends AlumnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnoGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnoGroupByOutputType[P]>
        }
      >
    >


  export type AlumnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumno"]>

  export type AlumnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumno"]>

  export type AlumnoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumno"]>

  export type AlumnoSelectScalar = {
    id?: boolean
    estudianteId?: boolean
    carreraId?: boolean
    materiaId?: boolean
  }

  export type AlumnoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estudianteId" | "carreraId" | "materiaId", ExtArgs["result"]["alumno"]>
  export type AlumnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type AlumnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type AlumnoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $AlumnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alumno"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
      carrera: Prisma.$CarreraPayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estudianteId: number
      carreraId: number
      materiaId: number
    }, ExtArgs["result"]["alumno"]>
    composites: {}
  }

  type AlumnoGetPayload<S extends boolean | null | undefined | AlumnoDefaultArgs> = $Result.GetResult<Prisma.$AlumnoPayload, S>

  type AlumnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlumnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlumnoCountAggregateInputType | true
    }

  export interface AlumnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alumno'], meta: { name: 'Alumno' } }
    /**
     * Find zero or one Alumno that matches the filter.
     * @param {AlumnoFindUniqueArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlumnoFindUniqueArgs>(args: SelectSubset<T, AlumnoFindUniqueArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alumno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlumnoFindUniqueOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlumnoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlumnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindFirstArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlumnoFindFirstArgs>(args?: SelectSubset<T, AlumnoFindFirstArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindFirstOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlumnoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlumnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos
     * const alumnos = await prisma.alumno.findMany()
     * 
     * // Get first 10 Alumnos
     * const alumnos = await prisma.alumno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumnoWithIdOnly = await prisma.alumno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlumnoFindManyArgs>(args?: SelectSubset<T, AlumnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alumno.
     * @param {AlumnoCreateArgs} args - Arguments to create a Alumno.
     * @example
     * // Create one Alumno
     * const Alumno = await prisma.alumno.create({
     *   data: {
     *     // ... data to create a Alumno
     *   }
     * })
     * 
     */
    create<T extends AlumnoCreateArgs>(args: SelectSubset<T, AlumnoCreateArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alumnos.
     * @param {AlumnoCreateManyArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumno = await prisma.alumno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlumnoCreateManyArgs>(args?: SelectSubset<T, AlumnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alumnos and returns the data saved in the database.
     * @param {AlumnoCreateManyAndReturnArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumno = await prisma.alumno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alumnos and only return the `id`
     * const alumnoWithIdOnly = await prisma.alumno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlumnoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlumnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alumno.
     * @param {AlumnoDeleteArgs} args - Arguments to delete one Alumno.
     * @example
     * // Delete one Alumno
     * const Alumno = await prisma.alumno.delete({
     *   where: {
     *     // ... filter to delete one Alumno
     *   }
     * })
     * 
     */
    delete<T extends AlumnoDeleteArgs>(args: SelectSubset<T, AlumnoDeleteArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alumno.
     * @param {AlumnoUpdateArgs} args - Arguments to update one Alumno.
     * @example
     * // Update one Alumno
     * const alumno = await prisma.alumno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlumnoUpdateArgs>(args: SelectSubset<T, AlumnoUpdateArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alumnos.
     * @param {AlumnoDeleteManyArgs} args - Arguments to filter Alumnos to delete.
     * @example
     * // Delete a few Alumnos
     * const { count } = await prisma.alumno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlumnoDeleteManyArgs>(args?: SelectSubset<T, AlumnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos
     * const alumno = await prisma.alumno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlumnoUpdateManyArgs>(args: SelectSubset<T, AlumnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos and returns the data updated in the database.
     * @param {AlumnoUpdateManyAndReturnArgs} args - Arguments to update many Alumnos.
     * @example
     * // Update many Alumnos
     * const alumno = await prisma.alumno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alumnos and only return the `id`
     * const alumnoWithIdOnly = await prisma.alumno.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlumnoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlumnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alumno.
     * @param {AlumnoUpsertArgs} args - Arguments to update or create a Alumno.
     * @example
     * // Update or create a Alumno
     * const alumno = await prisma.alumno.upsert({
     *   create: {
     *     // ... data to create a Alumno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumno we want to update
     *   }
     * })
     */
    upsert<T extends AlumnoUpsertArgs>(args: SelectSubset<T, AlumnoUpsertArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoCountArgs} args - Arguments to filter Alumnos to count.
     * @example
     * // Count the number of Alumnos
     * const count = await prisma.alumno.count({
     *   where: {
     *     // ... the filter for the Alumnos we want to count
     *   }
     * })
    **/
    count<T extends AlumnoCountArgs>(
      args?: Subset<T, AlumnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumnoAggregateArgs>(args: Subset<T, AlumnoAggregateArgs>): Prisma.PrismaPromise<GetAlumnoAggregateType<T>>

    /**
     * Group by Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoGroupByArgs} args - Group by arguments.
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
      T extends AlumnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumnoGroupByArgs['orderBy'] }
        : { orderBy?: AlumnoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlumnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alumno model
   */
  readonly fields: AlumnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alumno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alumno model
   */
  interface AlumnoFieldRefs {
    readonly id: FieldRef<"Alumno", 'Int'>
    readonly estudianteId: FieldRef<"Alumno", 'Int'>
    readonly carreraId: FieldRef<"Alumno", 'Int'>
    readonly materiaId: FieldRef<"Alumno", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alumno findUnique
   */
  export type AlumnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno findUniqueOrThrow
   */
  export type AlumnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno findFirst
   */
  export type AlumnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Alumno findFirstOrThrow
   */
  export type AlumnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Alumno findMany
   */
  export type AlumnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Alumno create
   */
  export type AlumnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Alumno.
     */
    data: XOR<AlumnoCreateInput, AlumnoUncheckedCreateInput>
  }

  /**
   * Alumno createMany
   */
  export type AlumnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alumnos.
     */
    data: AlumnoCreateManyInput | AlumnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alumno createManyAndReturn
   */
  export type AlumnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * The data used to create many Alumnos.
     */
    data: AlumnoCreateManyInput | AlumnoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alumno update
   */
  export type AlumnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Alumno.
     */
    data: XOR<AlumnoUpdateInput, AlumnoUncheckedUpdateInput>
    /**
     * Choose, which Alumno to update.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno updateMany
   */
  export type AlumnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnoWhereInput
    /**
     * Limit how many Alumnos to update.
     */
    limit?: number
  }

  /**
   * Alumno updateManyAndReturn
   */
  export type AlumnoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnoWhereInput
    /**
     * Limit how many Alumnos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alumno upsert
   */
  export type AlumnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Alumno to update in case it exists.
     */
    where: AlumnoWhereUniqueInput
    /**
     * In case the Alumno found by the `where` argument doesn't exist, create a new Alumno with this data.
     */
    create: XOR<AlumnoCreateInput, AlumnoUncheckedCreateInput>
    /**
     * In case the Alumno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumnoUpdateInput, AlumnoUncheckedUpdateInput>
  }

  /**
   * Alumno delete
   */
  export type AlumnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter which Alumno to delete.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno deleteMany
   */
  export type AlumnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumnos to delete
     */
    where?: AlumnoWhereInput
    /**
     * Limit how many Alumnos to delete.
     */
    limit?: number
  }

  /**
   * Alumno without action
   */
  export type AlumnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
  }


  /**
   * Model carreradocente
   */

  export type AggregateCarreradocente = {
    _count: CarreradocenteCountAggregateOutputType | null
    _avg: CarreradocenteAvgAggregateOutputType | null
    _sum: CarreradocenteSumAggregateOutputType | null
    _min: CarreradocenteMinAggregateOutputType | null
    _max: CarreradocenteMaxAggregateOutputType | null
  }

  export type CarreradocenteAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
    docenteId: number | null
  }

  export type CarreradocenteSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
    docenteId: number | null
  }

  export type CarreradocenteMinAggregateOutputType = {
    id: number | null
    carreraId: number | null
    docenteId: number | null
  }

  export type CarreradocenteMaxAggregateOutputType = {
    id: number | null
    carreraId: number | null
    docenteId: number | null
  }

  export type CarreradocenteCountAggregateOutputType = {
    id: number
    carreraId: number
    docenteId: number
    _all: number
  }


  export type CarreradocenteAvgAggregateInputType = {
    id?: true
    carreraId?: true
    docenteId?: true
  }

  export type CarreradocenteSumAggregateInputType = {
    id?: true
    carreraId?: true
    docenteId?: true
  }

  export type CarreradocenteMinAggregateInputType = {
    id?: true
    carreraId?: true
    docenteId?: true
  }

  export type CarreradocenteMaxAggregateInputType = {
    id?: true
    carreraId?: true
    docenteId?: true
  }

  export type CarreradocenteCountAggregateInputType = {
    id?: true
    carreraId?: true
    docenteId?: true
    _all?: true
  }

  export type CarreradocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carreradocente to aggregate.
     */
    where?: carreradocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carreradocentes to fetch.
     */
    orderBy?: carreradocenteOrderByWithRelationInput | carreradocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carreradocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carreradocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carreradocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carreradocentes
    **/
    _count?: true | CarreradocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreradocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreradocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreradocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreradocenteMaxAggregateInputType
  }

  export type GetCarreradocenteAggregateType<T extends CarreradocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateCarreradocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarreradocente[P]>
      : GetScalarType<T[P], AggregateCarreradocente[P]>
  }




  export type carreradocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carreradocenteWhereInput
    orderBy?: carreradocenteOrderByWithAggregationInput | carreradocenteOrderByWithAggregationInput[]
    by: CarreradocenteScalarFieldEnum[] | CarreradocenteScalarFieldEnum
    having?: carreradocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreradocenteCountAggregateInputType | true
    _avg?: CarreradocenteAvgAggregateInputType
    _sum?: CarreradocenteSumAggregateInputType
    _min?: CarreradocenteMinAggregateInputType
    _max?: CarreradocenteMaxAggregateInputType
  }

  export type CarreradocenteGroupByOutputType = {
    id: number
    carreraId: number
    docenteId: number
    _count: CarreradocenteCountAggregateOutputType | null
    _avg: CarreradocenteAvgAggregateOutputType | null
    _sum: CarreradocenteSumAggregateOutputType | null
    _min: CarreradocenteMinAggregateOutputType | null
    _max: CarreradocenteMaxAggregateOutputType | null
  }

  type GetCarreradocenteGroupByPayload<T extends carreradocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreradocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreradocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreradocenteGroupByOutputType[P]>
            : GetScalarType<T[P], CarreradocenteGroupByOutputType[P]>
        }
      >
    >


  export type carreradocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carreraId?: boolean
    docenteId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carreradocente"]>

  export type carreradocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carreraId?: boolean
    docenteId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carreradocente"]>

  export type carreradocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carreraId?: boolean
    docenteId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carreradocente"]>

  export type carreradocenteSelectScalar = {
    id?: boolean
    carreraId?: boolean
    docenteId?: boolean
  }

  export type carreradocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carreraId" | "docenteId", ExtArgs["result"]["carreradocente"]>
  export type carreradocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
  }
  export type carreradocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
  }
  export type carreradocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
  }

  export type $carreradocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carreradocente"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      docente: Prisma.$DocentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carreraId: number
      docenteId: number
    }, ExtArgs["result"]["carreradocente"]>
    composites: {}
  }

  type carreradocenteGetPayload<S extends boolean | null | undefined | carreradocenteDefaultArgs> = $Result.GetResult<Prisma.$carreradocentePayload, S>

  type carreradocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carreradocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreradocenteCountAggregateInputType | true
    }

  export interface carreradocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carreradocente'], meta: { name: 'carreradocente' } }
    /**
     * Find zero or one Carreradocente that matches the filter.
     * @param {carreradocenteFindUniqueArgs} args - Arguments to find a Carreradocente
     * @example
     * // Get one Carreradocente
     * const carreradocente = await prisma.carreradocente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carreradocenteFindUniqueArgs>(args: SelectSubset<T, carreradocenteFindUniqueArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carreradocente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carreradocenteFindUniqueOrThrowArgs} args - Arguments to find a Carreradocente
     * @example
     * // Get one Carreradocente
     * const carreradocente = await prisma.carreradocente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carreradocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, carreradocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carreradocente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carreradocenteFindFirstArgs} args - Arguments to find a Carreradocente
     * @example
     * // Get one Carreradocente
     * const carreradocente = await prisma.carreradocente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carreradocenteFindFirstArgs>(args?: SelectSubset<T, carreradocenteFindFirstArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carreradocente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carreradocenteFindFirstOrThrowArgs} args - Arguments to find a Carreradocente
     * @example
     * // Get one Carreradocente
     * const carreradocente = await prisma.carreradocente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carreradocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, carreradocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreradocentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carreradocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreradocentes
     * const carreradocentes = await prisma.carreradocente.findMany()
     * 
     * // Get first 10 Carreradocentes
     * const carreradocentes = await prisma.carreradocente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreradocenteWithIdOnly = await prisma.carreradocente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carreradocenteFindManyArgs>(args?: SelectSubset<T, carreradocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carreradocente.
     * @param {carreradocenteCreateArgs} args - Arguments to create a Carreradocente.
     * @example
     * // Create one Carreradocente
     * const Carreradocente = await prisma.carreradocente.create({
     *   data: {
     *     // ... data to create a Carreradocente
     *   }
     * })
     * 
     */
    create<T extends carreradocenteCreateArgs>(args: SelectSubset<T, carreradocenteCreateArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreradocentes.
     * @param {carreradocenteCreateManyArgs} args - Arguments to create many Carreradocentes.
     * @example
     * // Create many Carreradocentes
     * const carreradocente = await prisma.carreradocente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carreradocenteCreateManyArgs>(args?: SelectSubset<T, carreradocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreradocentes and returns the data saved in the database.
     * @param {carreradocenteCreateManyAndReturnArgs} args - Arguments to create many Carreradocentes.
     * @example
     * // Create many Carreradocentes
     * const carreradocente = await prisma.carreradocente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreradocentes and only return the `id`
     * const carreradocenteWithIdOnly = await prisma.carreradocente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carreradocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, carreradocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carreradocente.
     * @param {carreradocenteDeleteArgs} args - Arguments to delete one Carreradocente.
     * @example
     * // Delete one Carreradocente
     * const Carreradocente = await prisma.carreradocente.delete({
     *   where: {
     *     // ... filter to delete one Carreradocente
     *   }
     * })
     * 
     */
    delete<T extends carreradocenteDeleteArgs>(args: SelectSubset<T, carreradocenteDeleteArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carreradocente.
     * @param {carreradocenteUpdateArgs} args - Arguments to update one Carreradocente.
     * @example
     * // Update one Carreradocente
     * const carreradocente = await prisma.carreradocente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carreradocenteUpdateArgs>(args: SelectSubset<T, carreradocenteUpdateArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreradocentes.
     * @param {carreradocenteDeleteManyArgs} args - Arguments to filter Carreradocentes to delete.
     * @example
     * // Delete a few Carreradocentes
     * const { count } = await prisma.carreradocente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carreradocenteDeleteManyArgs>(args?: SelectSubset<T, carreradocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreradocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carreradocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreradocentes
     * const carreradocente = await prisma.carreradocente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carreradocenteUpdateManyArgs>(args: SelectSubset<T, carreradocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreradocentes and returns the data updated in the database.
     * @param {carreradocenteUpdateManyAndReturnArgs} args - Arguments to update many Carreradocentes.
     * @example
     * // Update many Carreradocentes
     * const carreradocente = await prisma.carreradocente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carreradocentes and only return the `id`
     * const carreradocenteWithIdOnly = await prisma.carreradocente.updateManyAndReturn({
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
    updateManyAndReturn<T extends carreradocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, carreradocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carreradocente.
     * @param {carreradocenteUpsertArgs} args - Arguments to update or create a Carreradocente.
     * @example
     * // Update or create a Carreradocente
     * const carreradocente = await prisma.carreradocente.upsert({
     *   create: {
     *     // ... data to create a Carreradocente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carreradocente we want to update
     *   }
     * })
     */
    upsert<T extends carreradocenteUpsertArgs>(args: SelectSubset<T, carreradocenteUpsertArgs<ExtArgs>>): Prisma__carreradocenteClient<$Result.GetResult<Prisma.$carreradocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreradocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carreradocenteCountArgs} args - Arguments to filter Carreradocentes to count.
     * @example
     * // Count the number of Carreradocentes
     * const count = await prisma.carreradocente.count({
     *   where: {
     *     // ... the filter for the Carreradocentes we want to count
     *   }
     * })
    **/
    count<T extends carreradocenteCountArgs>(
      args?: Subset<T, carreradocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreradocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carreradocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreradocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarreradocenteAggregateArgs>(args: Subset<T, CarreradocenteAggregateArgs>): Prisma.PrismaPromise<GetCarreradocenteAggregateType<T>>

    /**
     * Group by Carreradocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carreradocenteGroupByArgs} args - Group by arguments.
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
      T extends carreradocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carreradocenteGroupByArgs['orderBy'] }
        : { orderBy?: carreradocenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carreradocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreradocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carreradocente model
   */
  readonly fields: carreradocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carreradocente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carreradocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    docente<T extends DocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocenteDefaultArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the carreradocente model
   */
  interface carreradocenteFieldRefs {
    readonly id: FieldRef<"carreradocente", 'Int'>
    readonly carreraId: FieldRef<"carreradocente", 'Int'>
    readonly docenteId: FieldRef<"carreradocente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * carreradocente findUnique
   */
  export type carreradocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * Filter, which carreradocente to fetch.
     */
    where: carreradocenteWhereUniqueInput
  }

  /**
   * carreradocente findUniqueOrThrow
   */
  export type carreradocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * Filter, which carreradocente to fetch.
     */
    where: carreradocenteWhereUniqueInput
  }

  /**
   * carreradocente findFirst
   */
  export type carreradocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * Filter, which carreradocente to fetch.
     */
    where?: carreradocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carreradocentes to fetch.
     */
    orderBy?: carreradocenteOrderByWithRelationInput | carreradocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carreradocentes.
     */
    cursor?: carreradocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carreradocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carreradocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carreradocentes.
     */
    distinct?: CarreradocenteScalarFieldEnum | CarreradocenteScalarFieldEnum[]
  }

  /**
   * carreradocente findFirstOrThrow
   */
  export type carreradocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * Filter, which carreradocente to fetch.
     */
    where?: carreradocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carreradocentes to fetch.
     */
    orderBy?: carreradocenteOrderByWithRelationInput | carreradocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carreradocentes.
     */
    cursor?: carreradocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carreradocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carreradocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carreradocentes.
     */
    distinct?: CarreradocenteScalarFieldEnum | CarreradocenteScalarFieldEnum[]
  }

  /**
   * carreradocente findMany
   */
  export type carreradocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * Filter, which carreradocentes to fetch.
     */
    where?: carreradocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carreradocentes to fetch.
     */
    orderBy?: carreradocenteOrderByWithRelationInput | carreradocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carreradocentes.
     */
    cursor?: carreradocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carreradocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carreradocentes.
     */
    skip?: number
    distinct?: CarreradocenteScalarFieldEnum | CarreradocenteScalarFieldEnum[]
  }

  /**
   * carreradocente create
   */
  export type carreradocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a carreradocente.
     */
    data: XOR<carreradocenteCreateInput, carreradocenteUncheckedCreateInput>
  }

  /**
   * carreradocente createMany
   */
  export type carreradocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carreradocentes.
     */
    data: carreradocenteCreateManyInput | carreradocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carreradocente createManyAndReturn
   */
  export type carreradocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * The data used to create many carreradocentes.
     */
    data: carreradocenteCreateManyInput | carreradocenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carreradocente update
   */
  export type carreradocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a carreradocente.
     */
    data: XOR<carreradocenteUpdateInput, carreradocenteUncheckedUpdateInput>
    /**
     * Choose, which carreradocente to update.
     */
    where: carreradocenteWhereUniqueInput
  }

  /**
   * carreradocente updateMany
   */
  export type carreradocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carreradocentes.
     */
    data: XOR<carreradocenteUpdateManyMutationInput, carreradocenteUncheckedUpdateManyInput>
    /**
     * Filter which carreradocentes to update
     */
    where?: carreradocenteWhereInput
    /**
     * Limit how many carreradocentes to update.
     */
    limit?: number
  }

  /**
   * carreradocente updateManyAndReturn
   */
  export type carreradocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * The data used to update carreradocentes.
     */
    data: XOR<carreradocenteUpdateManyMutationInput, carreradocenteUncheckedUpdateManyInput>
    /**
     * Filter which carreradocentes to update
     */
    where?: carreradocenteWhereInput
    /**
     * Limit how many carreradocentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carreradocente upsert
   */
  export type carreradocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the carreradocente to update in case it exists.
     */
    where: carreradocenteWhereUniqueInput
    /**
     * In case the carreradocente found by the `where` argument doesn't exist, create a new carreradocente with this data.
     */
    create: XOR<carreradocenteCreateInput, carreradocenteUncheckedCreateInput>
    /**
     * In case the carreradocente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carreradocenteUpdateInput, carreradocenteUncheckedUpdateInput>
  }

  /**
   * carreradocente delete
   */
  export type carreradocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
    /**
     * Filter which carreradocente to delete.
     */
    where: carreradocenteWhereUniqueInput
  }

  /**
   * carreradocente deleteMany
   */
  export type carreradocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carreradocentes to delete
     */
    where?: carreradocenteWhereInput
    /**
     * Limit how many carreradocentes to delete.
     */
    limit?: number
  }

  /**
   * carreradocente without action
   */
  export type carreradocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carreradocente
     */
    select?: carreradocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carreradocente
     */
    omit?: carreradocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carreradocenteInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    creadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    creadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    password: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    creadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    creadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    password: string
    creadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
    roles?: boolean | Usuario$rolesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "creadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Usuario$rolesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      roles: Prisma.$UsuarioRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      creadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Usuario$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.roles
   */
  export type Usuario$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    cursor?: UsuarioRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioRolPayload<ExtArgs>[]
      permisos: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permisos<T extends Rol$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    cursor?: UsuarioRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * Rol.permisos
   */
  export type Rol$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoAvgAggregateOutputType = {
    id: number | null
  }

  export type PermisoSumAggregateOutputType = {
    id: number | null
  }

  export type PermisoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PermisoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PermisoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PermisoAvgAggregateInputType = {
    id?: true
  }

  export type PermisoSumAggregateInputType = {
    id?: true
  }

  export type PermisoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PermisoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PermisoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _avg?: PermisoAvgAggregateInputType
    _sum?: PermisoSumAggregateInputType
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id: number
    nombre: string
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["permiso"]>
  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      roles: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoWithIdOnly = await prisma.permiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisoCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {PermisoUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
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
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permiso$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permiso$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permiso model
   */
  interface PermisoFieldRefs {
    readonly id: FieldRef<"Permiso", 'Int'>
    readonly nombre: FieldRef<"Permiso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso createManyAndReturn
   */
  export type PermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso updateManyAndReturn
   */
  export type PermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permiso.roles
   */
  export type Permiso$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioRol
   */

  export type AggregateUsuarioRol = {
    _count: UsuarioRolCountAggregateOutputType | null
    _avg: UsuarioRolAvgAggregateOutputType | null
    _sum: UsuarioRolSumAggregateOutputType | null
    _min: UsuarioRolMinAggregateOutputType | null
    _max: UsuarioRolMaxAggregateOutputType | null
  }

  export type UsuarioRolAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type UsuarioRolCountAggregateOutputType = {
    id: number
    usuarioId: number
    rolId: number
    _all: number
  }


  export type UsuarioRolAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolSumAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolMinAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
  }

  export type UsuarioRolCountAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
    _all?: true
  }

  export type UsuarioRolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioRol to aggregate.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioRols
    **/
    _count?: true | UsuarioRolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioRolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioRolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioRolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioRolMaxAggregateInputType
  }

  export type GetUsuarioRolAggregateType<T extends UsuarioRolAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioRol[P]>
      : GetScalarType<T[P], AggregateUsuarioRol[P]>
  }




  export type UsuarioRolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithAggregationInput | UsuarioRolOrderByWithAggregationInput[]
    by: UsuarioRolScalarFieldEnum[] | UsuarioRolScalarFieldEnum
    having?: UsuarioRolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioRolCountAggregateInputType | true
    _avg?: UsuarioRolAvgAggregateInputType
    _sum?: UsuarioRolSumAggregateInputType
    _min?: UsuarioRolMinAggregateInputType
    _max?: UsuarioRolMaxAggregateInputType
  }

  export type UsuarioRolGroupByOutputType = {
    id: number
    usuarioId: number
    rolId: number
    _count: UsuarioRolCountAggregateOutputType | null
    _avg: UsuarioRolAvgAggregateOutputType | null
    _sum: UsuarioRolSumAggregateOutputType | null
    _min: UsuarioRolMinAggregateOutputType | null
    _max: UsuarioRolMaxAggregateOutputType | null
  }

  type GetUsuarioRolGroupByPayload<T extends UsuarioRolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioRolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioRolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioRolGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioRolGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioRolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
  }

  export type UsuarioRolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "rolId", ExtArgs["result"]["usuarioRol"]>
  export type UsuarioRolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioRolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioRolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioRolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioRol"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      rol: Prisma.$RolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      rolId: number
    }, ExtArgs["result"]["usuarioRol"]>
    composites: {}
  }

  type UsuarioRolGetPayload<S extends boolean | null | undefined | UsuarioRolDefaultArgs> = $Result.GetResult<Prisma.$UsuarioRolPayload, S>

  type UsuarioRolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioRolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioRolCountAggregateInputType | true
    }

  export interface UsuarioRolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioRol'], meta: { name: 'UsuarioRol' } }
    /**
     * Find zero or one UsuarioRol that matches the filter.
     * @param {UsuarioRolFindUniqueArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioRolFindUniqueArgs>(args: SelectSubset<T, UsuarioRolFindUniqueArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioRol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioRolFindUniqueOrThrowArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioRolFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioRolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioRol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindFirstArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioRolFindFirstArgs>(args?: SelectSubset<T, UsuarioRolFindFirstArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioRol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindFirstOrThrowArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioRolFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioRolFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioRols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioRols
     * const usuarioRols = await prisma.usuarioRol.findMany()
     * 
     * // Get first 10 UsuarioRols
     * const usuarioRols = await prisma.usuarioRol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioRolFindManyArgs>(args?: SelectSubset<T, UsuarioRolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioRol.
     * @param {UsuarioRolCreateArgs} args - Arguments to create a UsuarioRol.
     * @example
     * // Create one UsuarioRol
     * const UsuarioRol = await prisma.usuarioRol.create({
     *   data: {
     *     // ... data to create a UsuarioRol
     *   }
     * })
     * 
     */
    create<T extends UsuarioRolCreateArgs>(args: SelectSubset<T, UsuarioRolCreateArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioRols.
     * @param {UsuarioRolCreateManyArgs} args - Arguments to create many UsuarioRols.
     * @example
     * // Create many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioRolCreateManyArgs>(args?: SelectSubset<T, UsuarioRolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioRols and returns the data saved in the database.
     * @param {UsuarioRolCreateManyAndReturnArgs} args - Arguments to create many UsuarioRols.
     * @example
     * // Create many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioRols and only return the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioRolCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioRolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioRol.
     * @param {UsuarioRolDeleteArgs} args - Arguments to delete one UsuarioRol.
     * @example
     * // Delete one UsuarioRol
     * const UsuarioRol = await prisma.usuarioRol.delete({
     *   where: {
     *     // ... filter to delete one UsuarioRol
     *   }
     * })
     * 
     */
    delete<T extends UsuarioRolDeleteArgs>(args: SelectSubset<T, UsuarioRolDeleteArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioRol.
     * @param {UsuarioRolUpdateArgs} args - Arguments to update one UsuarioRol.
     * @example
     * // Update one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioRolUpdateArgs>(args: SelectSubset<T, UsuarioRolUpdateArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioRols.
     * @param {UsuarioRolDeleteManyArgs} args - Arguments to filter UsuarioRols to delete.
     * @example
     * // Delete a few UsuarioRols
     * const { count } = await prisma.usuarioRol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioRolDeleteManyArgs>(args?: SelectSubset<T, UsuarioRolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioRolUpdateManyArgs>(args: SelectSubset<T, UsuarioRolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioRols and returns the data updated in the database.
     * @param {UsuarioRolUpdateManyAndReturnArgs} args - Arguments to update many UsuarioRols.
     * @example
     * // Update many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioRols and only return the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioRolUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioRolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioRol.
     * @param {UsuarioRolUpsertArgs} args - Arguments to update or create a UsuarioRol.
     * @example
     * // Update or create a UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.upsert({
     *   create: {
     *     // ... data to create a UsuarioRol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioRol we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioRolUpsertArgs>(args: SelectSubset<T, UsuarioRolUpsertArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolCountArgs} args - Arguments to filter UsuarioRols to count.
     * @example
     * // Count the number of UsuarioRols
     * const count = await prisma.usuarioRol.count({
     *   where: {
     *     // ... the filter for the UsuarioRols we want to count
     *   }
     * })
    **/
    count<T extends UsuarioRolCountArgs>(
      args?: Subset<T, UsuarioRolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioRolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioRolAggregateArgs>(args: Subset<T, UsuarioRolAggregateArgs>): Prisma.PrismaPromise<GetUsuarioRolAggregateType<T>>

    /**
     * Group by UsuarioRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolGroupByArgs} args - Group by arguments.
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
      T extends UsuarioRolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioRolGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioRolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioRolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioRol model
   */
  readonly fields: UsuarioRolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioRol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioRolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsuarioRol model
   */
  interface UsuarioRolFieldRefs {
    readonly id: FieldRef<"UsuarioRol", 'Int'>
    readonly usuarioId: FieldRef<"UsuarioRol", 'Int'>
    readonly rolId: FieldRef<"UsuarioRol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioRol findUnique
   */
  export type UsuarioRolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol findUniqueOrThrow
   */
  export type UsuarioRolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol findFirst
   */
  export type UsuarioRolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioRols.
     */
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol findFirstOrThrow
   */
  export type UsuarioRolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioRols.
     */
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol findMany
   */
  export type UsuarioRolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRols to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol create
   */
  export type UsuarioRolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioRol.
     */
    data: XOR<UsuarioRolCreateInput, UsuarioRolUncheckedCreateInput>
  }

  /**
   * UsuarioRol createMany
   */
  export type UsuarioRolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioRols.
     */
    data: UsuarioRolCreateManyInput | UsuarioRolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioRol createManyAndReturn
   */
  export type UsuarioRolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioRols.
     */
    data: UsuarioRolCreateManyInput | UsuarioRolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioRol update
   */
  export type UsuarioRolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioRol.
     */
    data: XOR<UsuarioRolUpdateInput, UsuarioRolUncheckedUpdateInput>
    /**
     * Choose, which UsuarioRol to update.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol updateMany
   */
  export type UsuarioRolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioRols.
     */
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioRols to update
     */
    where?: UsuarioRolWhereInput
    /**
     * Limit how many UsuarioRols to update.
     */
    limit?: number
  }

  /**
   * UsuarioRol updateManyAndReturn
   */
  export type UsuarioRolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioRols.
     */
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioRols to update
     */
    where?: UsuarioRolWhereInput
    /**
     * Limit how many UsuarioRols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioRol upsert
   */
  export type UsuarioRolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioRol to update in case it exists.
     */
    where: UsuarioRolWhereUniqueInput
    /**
     * In case the UsuarioRol found by the `where` argument doesn't exist, create a new UsuarioRol with this data.
     */
    create: XOR<UsuarioRolCreateInput, UsuarioRolUncheckedCreateInput>
    /**
     * In case the UsuarioRol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioRolUpdateInput, UsuarioRolUncheckedUpdateInput>
  }

  /**
   * UsuarioRol delete
   */
  export type UsuarioRolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter which UsuarioRol to delete.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol deleteMany
   */
  export type UsuarioRolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioRols to delete
     */
    where?: UsuarioRolWhereInput
    /**
     * Limit how many UsuarioRols to delete.
     */
    limit?: number
  }

  /**
   * UsuarioRol without action
   */
  export type UsuarioRolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioRol
     */
    omit?: UsuarioRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
  }


  /**
   * Model RolPermiso
   */

  export type AggregateRolPermiso = {
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  export type RolPermisoAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoSumAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMinAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMaxAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoCountAggregateOutputType = {
    id: number
    rolId: number
    permisoId: number
    _all: number
  }


  export type RolPermisoAvgAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoSumAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMinAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMaxAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoCountAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
    _all?: true
  }

  export type RolPermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermiso to aggregate.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolPermisos
    **/
    _count?: true | RolPermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolPermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolPermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolPermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolPermisoMaxAggregateInputType
  }

  export type GetRolPermisoAggregateType<T extends RolPermisoAggregateArgs> = {
        [P in keyof T & keyof AggregateRolPermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolPermiso[P]>
      : GetScalarType<T[P], AggregateRolPermiso[P]>
  }




  export type RolPermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithAggregationInput | RolPermisoOrderByWithAggregationInput[]
    by: RolPermisoScalarFieldEnum[] | RolPermisoScalarFieldEnum
    having?: RolPermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolPermisoCountAggregateInputType | true
    _avg?: RolPermisoAvgAggregateInputType
    _sum?: RolPermisoSumAggregateInputType
    _min?: RolPermisoMinAggregateInputType
    _max?: RolPermisoMaxAggregateInputType
  }

  export type RolPermisoGroupByOutputType = {
    id: number
    rolId: number
    permisoId: number
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  type GetRolPermisoGroupByPayload<T extends RolPermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolPermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolPermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
            : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
        }
      >
    >


  export type RolPermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectScalar = {
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
  }

  export type RolPermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rolId" | "permisoId", ExtArgs["result"]["rolPermiso"]>
  export type RolPermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }

  export type $RolPermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolPermiso"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      permiso: Prisma.$PermisoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rolId: number
      permisoId: number
    }, ExtArgs["result"]["rolPermiso"]>
    composites: {}
  }

  type RolPermisoGetPayload<S extends boolean | null | undefined | RolPermisoDefaultArgs> = $Result.GetResult<Prisma.$RolPermisoPayload, S>

  type RolPermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolPermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolPermisoCountAggregateInputType | true
    }

  export interface RolPermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolPermiso'], meta: { name: 'RolPermiso' } }
    /**
     * Find zero or one RolPermiso that matches the filter.
     * @param {RolPermisoFindUniqueArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolPermisoFindUniqueArgs>(args: SelectSubset<T, RolPermisoFindUniqueArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolPermiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolPermisoFindUniqueOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolPermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, RolPermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolPermisoFindFirstArgs>(args?: SelectSubset<T, RolPermisoFindFirstArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolPermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, RolPermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany()
     * 
     * // Get first 10 RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolPermisoFindManyArgs>(args?: SelectSubset<T, RolPermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolPermiso.
     * @param {RolPermisoCreateArgs} args - Arguments to create a RolPermiso.
     * @example
     * // Create one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.create({
     *   data: {
     *     // ... data to create a RolPermiso
     *   }
     * })
     * 
     */
    create<T extends RolPermisoCreateArgs>(args: SelectSubset<T, RolPermisoCreateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolPermisos.
     * @param {RolPermisoCreateManyArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolPermisoCreateManyArgs>(args?: SelectSubset<T, RolPermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolPermisos and returns the data saved in the database.
     * @param {RolPermisoCreateManyAndReturnArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolPermisos and only return the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolPermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, RolPermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolPermiso.
     * @param {RolPermisoDeleteArgs} args - Arguments to delete one RolPermiso.
     * @example
     * // Delete one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.delete({
     *   where: {
     *     // ... filter to delete one RolPermiso
     *   }
     * })
     * 
     */
    delete<T extends RolPermisoDeleteArgs>(args: SelectSubset<T, RolPermisoDeleteArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolPermiso.
     * @param {RolPermisoUpdateArgs} args - Arguments to update one RolPermiso.
     * @example
     * // Update one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolPermisoUpdateArgs>(args: SelectSubset<T, RolPermisoUpdateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolPermisos.
     * @param {RolPermisoDeleteManyArgs} args - Arguments to filter RolPermisos to delete.
     * @example
     * // Delete a few RolPermisos
     * const { count } = await prisma.rolPermiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolPermisoDeleteManyArgs>(args?: SelectSubset<T, RolPermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolPermisoUpdateManyArgs>(args: SelectSubset<T, RolPermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos and returns the data updated in the database.
     * @param {RolPermisoUpdateManyAndReturnArgs} args - Arguments to update many RolPermisos.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolPermisos and only return the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolPermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, RolPermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolPermiso.
     * @param {RolPermisoUpsertArgs} args - Arguments to update or create a RolPermiso.
     * @example
     * // Update or create a RolPermiso
     * const rolPermiso = await prisma.rolPermiso.upsert({
     *   create: {
     *     // ... data to create a RolPermiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolPermiso we want to update
     *   }
     * })
     */
    upsert<T extends RolPermisoUpsertArgs>(args: SelectSubset<T, RolPermisoUpsertArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoCountArgs} args - Arguments to filter RolPermisos to count.
     * @example
     * // Count the number of RolPermisos
     * const count = await prisma.rolPermiso.count({
     *   where: {
     *     // ... the filter for the RolPermisos we want to count
     *   }
     * })
    **/
    count<T extends RolPermisoCountArgs>(
      args?: Subset<T, RolPermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolPermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolPermisoAggregateArgs>(args: Subset<T, RolPermisoAggregateArgs>): Prisma.PrismaPromise<GetRolPermisoAggregateType<T>>

    /**
     * Group by RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoGroupByArgs} args - Group by arguments.
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
      T extends RolPermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolPermisoGroupByArgs['orderBy'] }
        : { orderBy?: RolPermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolPermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolPermiso model
   */
  readonly fields: RolPermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolPermiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolPermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permiso<T extends PermisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermisoDefaultArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RolPermiso model
   */
  interface RolPermisoFieldRefs {
    readonly id: FieldRef<"RolPermiso", 'Int'>
    readonly rolId: FieldRef<"RolPermiso", 'Int'>
    readonly permisoId: FieldRef<"RolPermiso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolPermiso findUnique
   */
  export type RolPermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findUniqueOrThrow
   */
  export type RolPermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findFirst
   */
  export type RolPermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findFirstOrThrow
   */
  export type RolPermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findMany
   */
  export type RolPermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso create
   */
  export type RolPermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a RolPermiso.
     */
    data: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
  }

  /**
   * RolPermiso createMany
   */
  export type RolPermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolPermiso createManyAndReturn
   */
  export type RolPermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso update
   */
  export type RolPermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a RolPermiso.
     */
    data: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
    /**
     * Choose, which RolPermiso to update.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso updateMany
   */
  export type RolPermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
  }

  /**
   * RolPermiso updateManyAndReturn
   */
  export type RolPermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso upsert
   */
  export type RolPermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the RolPermiso to update in case it exists.
     */
    where: RolPermisoWhereUniqueInput
    /**
     * In case the RolPermiso found by the `where` argument doesn't exist, create a new RolPermiso with this data.
     */
    create: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
    /**
     * In case the RolPermiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
  }

  /**
   * RolPermiso delete
   */
  export type RolPermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter which RolPermiso to delete.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso deleteMany
   */
  export type RolPermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to delete
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to delete.
     */
    limit?: number
  }

  /**
   * RolPermiso without action
   */
  export type RolPermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
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


  export const CarreraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    carreraId: 'carreraId'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const DocenteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum]


  export const MatriculaScalarFieldEnum: {
    id: 'id',
    estudianteId: 'estudianteId',
    carreraId: 'carreraId'
  };

  export type MatriculaScalarFieldEnum = (typeof MatriculaScalarFieldEnum)[keyof typeof MatriculaScalarFieldEnum]


  export const InscripcionScalarFieldEnum: {
    id: 'id',
    estudianteId: 'estudianteId',
    materiaId: 'materiaId'
  };

  export type InscripcionScalarFieldEnum = (typeof InscripcionScalarFieldEnum)[keyof typeof InscripcionScalarFieldEnum]


  export const DictaScalarFieldEnum: {
    id: 'id',
    docenteId: 'docenteId',
    materiaId: 'materiaId'
  };

  export type DictaScalarFieldEnum = (typeof DictaScalarFieldEnum)[keyof typeof DictaScalarFieldEnum]


  export const AlumnoScalarFieldEnum: {
    id: 'id',
    estudianteId: 'estudianteId',
    carreraId: 'carreraId',
    materiaId: 'materiaId'
  };

  export type AlumnoScalarFieldEnum = (typeof AlumnoScalarFieldEnum)[keyof typeof AlumnoScalarFieldEnum]


  export const CarreradocenteScalarFieldEnum: {
    id: 'id',
    carreraId: 'carreraId',
    docenteId: 'docenteId'
  };

  export type CarreradocenteScalarFieldEnum = (typeof CarreradocenteScalarFieldEnum)[keyof typeof CarreradocenteScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    creadoEn: 'creadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const UsuarioRolScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    rolId: 'rolId'
  };

  export type UsuarioRolScalarFieldEnum = (typeof UsuarioRolScalarFieldEnum)[keyof typeof UsuarioRolScalarFieldEnum]


  export const RolPermisoScalarFieldEnum: {
    id: 'id',
    rolId: 'rolId',
    permisoId: 'permisoId'
  };

  export type RolPermisoScalarFieldEnum = (typeof RolPermisoScalarFieldEnum)[keyof typeof RolPermisoScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    materias?: MateriaListRelationFilter
    matriculas?: MatriculaListRelationFilter
    Alumno?: AlumnoListRelationFilter
    docente?: CarreradocenteListRelationFilter
  }

  export type CarreraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    materias?: MateriaOrderByRelationAggregateInput
    matriculas?: MatriculaOrderByRelationAggregateInput
    Alumno?: AlumnoOrderByRelationAggregateInput
    docente?: carreradocenteOrderByRelationAggregateInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    nombre?: StringFilter<"Carrera"> | string
    materias?: MateriaListRelationFilter
    matriculas?: MatriculaListRelationFilter
    Alumno?: AlumnoListRelationFilter
    docente?: CarreradocenteListRelationFilter
  }, "id">

  export type CarreraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrera"> | number
    nombre?: StringWithAggregatesFilter<"Carrera"> | string
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    carreraId?: IntFilter<"Materia"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    inscripciones?: InscripcionListRelationFilter
    dictan?: DictaListRelationFilter
    Alumno?: AlumnoListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
    dictan?: DictaOrderByRelationAggregateInput
    Alumno?: AlumnoOrderByRelationAggregateInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nombre?: StringFilter<"Materia"> | string
    carreraId?: IntFilter<"Materia"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    inscripciones?: InscripcionListRelationFilter
    dictan?: DictaListRelationFilter
    Alumno?: AlumnoListRelationFilter
  }, "id">

  export type MateriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materia"> | number
    nombre?: StringWithAggregatesFilter<"Materia"> | string
    carreraId?: IntWithAggregatesFilter<"Materia"> | number
  }

  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    matriculas?: MatriculaListRelationFilter
    inscripciones?: InscripcionListRelationFilter
    Alumno?: AlumnoListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    matriculas?: MatriculaOrderByRelationAggregateInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
    Alumno?: AlumnoOrderByRelationAggregateInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    nombre?: StringFilter<"Estudiante"> | string
    matriculas?: MatriculaListRelationFilter
    inscripciones?: InscripcionListRelationFilter
    Alumno?: AlumnoListRelationFilter
  }, "id">

  export type EstudianteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _avg?: EstudianteAvgOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
    _sum?: EstudianteSumOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudiante"> | number
    nombre?: StringWithAggregatesFilter<"Estudiante"> | string
  }

  export type DocenteWhereInput = {
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    id?: IntFilter<"Docente"> | number
    nombre?: StringFilter<"Docente"> | string
    dictan?: DictaListRelationFilter
    carreraDocente?: CarreradocenteListRelationFilter
  }

  export type DocenteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    dictan?: DictaOrderByRelationAggregateInput
    carreraDocente?: carreradocenteOrderByRelationAggregateInput
  }

  export type DocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    nombre?: StringFilter<"Docente"> | string
    dictan?: DictaListRelationFilter
    carreraDocente?: CarreradocenteListRelationFilter
  }, "id">

  export type DocenteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: DocenteCountOrderByAggregateInput
    _avg?: DocenteAvgOrderByAggregateInput
    _max?: DocenteMaxOrderByAggregateInput
    _min?: DocenteMinOrderByAggregateInput
    _sum?: DocenteSumOrderByAggregateInput
  }

  export type DocenteScalarWhereWithAggregatesInput = {
    AND?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    OR?: DocenteScalarWhereWithAggregatesInput[]
    NOT?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Docente"> | number
    nombre?: StringWithAggregatesFilter<"Docente"> | string
  }

  export type MatriculaWhereInput = {
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    id?: IntFilter<"Matricula"> | number
    estudianteId?: IntFilter<"Matricula"> | number
    carreraId?: IntFilter<"Matricula"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
  }

  export type MatriculaOrderByWithRelationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    carrera?: CarreraOrderByWithRelationInput
  }

  export type MatriculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    estudianteId?: IntFilter<"Matricula"> | number
    carreraId?: IntFilter<"Matricula"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
  }, "id">

  export type MatriculaOrderByWithAggregationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    _count?: MatriculaCountOrderByAggregateInput
    _avg?: MatriculaAvgOrderByAggregateInput
    _max?: MatriculaMaxOrderByAggregateInput
    _min?: MatriculaMinOrderByAggregateInput
    _sum?: MatriculaSumOrderByAggregateInput
  }

  export type MatriculaScalarWhereWithAggregatesInput = {
    AND?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    OR?: MatriculaScalarWhereWithAggregatesInput[]
    NOT?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matricula"> | number
    estudianteId?: IntWithAggregatesFilter<"Matricula"> | number
    carreraId?: IntWithAggregatesFilter<"Matricula"> | number
  }

  export type InscripcionWhereInput = {
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    estudianteId?: IntFilter<"Inscripcion"> | number
    materiaId?: IntFilter<"Inscripcion"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type InscripcionOrderByWithRelationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type InscripcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    estudianteId?: IntFilter<"Inscripcion"> | number
    materiaId?: IntFilter<"Inscripcion"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id">

  export type InscripcionOrderByWithAggregationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
    _count?: InscripcionCountOrderByAggregateInput
    _avg?: InscripcionAvgOrderByAggregateInput
    _max?: InscripcionMaxOrderByAggregateInput
    _min?: InscripcionMinOrderByAggregateInput
    _sum?: InscripcionSumOrderByAggregateInput
  }

  export type InscripcionScalarWhereWithAggregatesInput = {
    AND?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    OR?: InscripcionScalarWhereWithAggregatesInput[]
    NOT?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inscripcion"> | number
    estudianteId?: IntWithAggregatesFilter<"Inscripcion"> | number
    materiaId?: IntWithAggregatesFilter<"Inscripcion"> | number
  }

  export type DictaWhereInput = {
    AND?: DictaWhereInput | DictaWhereInput[]
    OR?: DictaWhereInput[]
    NOT?: DictaWhereInput | DictaWhereInput[]
    id?: IntFilter<"Dicta"> | number
    docenteId?: IntFilter<"Dicta"> | number
    materiaId?: IntFilter<"Dicta"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type DictaOrderByWithRelationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
    docente?: DocenteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type DictaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DictaWhereInput | DictaWhereInput[]
    OR?: DictaWhereInput[]
    NOT?: DictaWhereInput | DictaWhereInput[]
    docenteId?: IntFilter<"Dicta"> | number
    materiaId?: IntFilter<"Dicta"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id">

  export type DictaOrderByWithAggregationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
    _count?: DictaCountOrderByAggregateInput
    _avg?: DictaAvgOrderByAggregateInput
    _max?: DictaMaxOrderByAggregateInput
    _min?: DictaMinOrderByAggregateInput
    _sum?: DictaSumOrderByAggregateInput
  }

  export type DictaScalarWhereWithAggregatesInput = {
    AND?: DictaScalarWhereWithAggregatesInput | DictaScalarWhereWithAggregatesInput[]
    OR?: DictaScalarWhereWithAggregatesInput[]
    NOT?: DictaScalarWhereWithAggregatesInput | DictaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dicta"> | number
    docenteId?: IntWithAggregatesFilter<"Dicta"> | number
    materiaId?: IntWithAggregatesFilter<"Dicta"> | number
  }

  export type AlumnoWhereInput = {
    AND?: AlumnoWhereInput | AlumnoWhereInput[]
    OR?: AlumnoWhereInput[]
    NOT?: AlumnoWhereInput | AlumnoWhereInput[]
    id?: IntFilter<"Alumno"> | number
    estudianteId?: IntFilter<"Alumno"> | number
    carreraId?: IntFilter<"Alumno"> | number
    materiaId?: IntFilter<"Alumno"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type AlumnoOrderByWithRelationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    carrera?: CarreraOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type AlumnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlumnoWhereInput | AlumnoWhereInput[]
    OR?: AlumnoWhereInput[]
    NOT?: AlumnoWhereInput | AlumnoWhereInput[]
    estudianteId?: IntFilter<"Alumno"> | number
    carreraId?: IntFilter<"Alumno"> | number
    materiaId?: IntFilter<"Alumno"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id">

  export type AlumnoOrderByWithAggregationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
    _count?: AlumnoCountOrderByAggregateInput
    _avg?: AlumnoAvgOrderByAggregateInput
    _max?: AlumnoMaxOrderByAggregateInput
    _min?: AlumnoMinOrderByAggregateInput
    _sum?: AlumnoSumOrderByAggregateInput
  }

  export type AlumnoScalarWhereWithAggregatesInput = {
    AND?: AlumnoScalarWhereWithAggregatesInput | AlumnoScalarWhereWithAggregatesInput[]
    OR?: AlumnoScalarWhereWithAggregatesInput[]
    NOT?: AlumnoScalarWhereWithAggregatesInput | AlumnoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alumno"> | number
    estudianteId?: IntWithAggregatesFilter<"Alumno"> | number
    carreraId?: IntWithAggregatesFilter<"Alumno"> | number
    materiaId?: IntWithAggregatesFilter<"Alumno"> | number
  }

  export type carreradocenteWhereInput = {
    AND?: carreradocenteWhereInput | carreradocenteWhereInput[]
    OR?: carreradocenteWhereInput[]
    NOT?: carreradocenteWhereInput | carreradocenteWhereInput[]
    id?: IntFilter<"carreradocente"> | number
    carreraId?: IntFilter<"carreradocente"> | number
    docenteId?: IntFilter<"carreradocente"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
  }

  export type carreradocenteOrderByWithRelationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    docenteId?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    docente?: DocenteOrderByWithRelationInput
  }

  export type carreradocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: carreradocenteWhereInput | carreradocenteWhereInput[]
    OR?: carreradocenteWhereInput[]
    NOT?: carreradocenteWhereInput | carreradocenteWhereInput[]
    carreraId?: IntFilter<"carreradocente"> | number
    docenteId?: IntFilter<"carreradocente"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
  }, "id">

  export type carreradocenteOrderByWithAggregationInput = {
    id?: SortOrder
    carreraId?: SortOrder
    docenteId?: SortOrder
    _count?: carreradocenteCountOrderByAggregateInput
    _avg?: carreradocenteAvgOrderByAggregateInput
    _max?: carreradocenteMaxOrderByAggregateInput
    _min?: carreradocenteMinOrderByAggregateInput
    _sum?: carreradocenteSumOrderByAggregateInput
  }

  export type carreradocenteScalarWhereWithAggregatesInput = {
    AND?: carreradocenteScalarWhereWithAggregatesInput | carreradocenteScalarWhereWithAggregatesInput[]
    OR?: carreradocenteScalarWhereWithAggregatesInput[]
    NOT?: carreradocenteScalarWhereWithAggregatesInput | carreradocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carreradocente"> | number
    carreraId?: IntWithAggregatesFilter<"carreradocente"> | number
    docenteId?: IntWithAggregatesFilter<"carreradocente"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    roles?: UsuarioRolListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
    roles?: UsuarioRolOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    roles?: UsuarioRolListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioRolListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioRolOrderByRelationAggregateInput
    permisos?: RolPermisoOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    usuarios?: UsuarioRolListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id?: IntFilter<"Permiso"> | number
    nombre?: StringFilter<"Permiso"> | string
    roles?: RolPermisoListRelationFilter
  }

  export type PermisoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    roles?: RolPermisoOrderByRelationAggregateInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    roles?: RolPermisoListRelationFilter
  }, "id" | "nombre">

  export type PermisoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _avg?: PermisoAvgOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
    _sum?: PermisoSumOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permiso"> | number
    nombre?: StringWithAggregatesFilter<"Permiso"> | string
  }

  export type UsuarioRolWhereInput = {
    AND?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    OR?: UsuarioRolWhereInput[]
    NOT?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    id?: IntFilter<"UsuarioRol"> | number
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }

  export type UsuarioRolOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
  }

  export type UsuarioRolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    OR?: UsuarioRolWhereInput[]
    NOT?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }, "id">

  export type UsuarioRolOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    _count?: UsuarioRolCountOrderByAggregateInput
    _avg?: UsuarioRolAvgOrderByAggregateInput
    _max?: UsuarioRolMaxOrderByAggregateInput
    _min?: UsuarioRolMinOrderByAggregateInput
    _sum?: UsuarioRolSumOrderByAggregateInput
  }

  export type UsuarioRolScalarWhereWithAggregatesInput = {
    AND?: UsuarioRolScalarWhereWithAggregatesInput | UsuarioRolScalarWhereWithAggregatesInput[]
    OR?: UsuarioRolScalarWhereWithAggregatesInput[]
    NOT?: UsuarioRolScalarWhereWithAggregatesInput | UsuarioRolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioRol"> | number
    usuarioId?: IntWithAggregatesFilter<"UsuarioRol"> | number
    rolId?: IntWithAggregatesFilter<"UsuarioRol"> | number
  }

  export type RolPermisoWhereInput = {
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }

  export type RolPermisoOrderByWithRelationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    rol?: RolOrderByWithRelationInput
    permiso?: PermisoOrderByWithRelationInput
  }

  export type RolPermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
  }, "id">

  export type RolPermisoOrderByWithAggregationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    _count?: RolPermisoCountOrderByAggregateInput
    _avg?: RolPermisoAvgOrderByAggregateInput
    _max?: RolPermisoMaxOrderByAggregateInput
    _min?: RolPermisoMinOrderByAggregateInput
    _sum?: RolPermisoSumOrderByAggregateInput
  }

  export type RolPermisoScalarWhereWithAggregatesInput = {
    AND?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    OR?: RolPermisoScalarWhereWithAggregatesInput[]
    NOT?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolPermiso"> | number
    rolId?: IntWithAggregatesFilter<"RolPermiso"> | number
    permisoId?: IntWithAggregatesFilter<"RolPermiso"> | number
  }

  export type CarreraCreateInput = {
    nombre: string
    materias?: MateriaCreateNestedManyWithoutCarreraInput
    matriculas?: MatriculaCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateInput = {
    id?: number
    nombre: string
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
    matriculas?: MatriculaUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CarreraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaCreateInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    dictan?: DictaCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    id?: number
    nombre: string
    carreraId: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    dictan?: DictaUncheckedCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    dictan?: DictaUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    dictan?: DictaUncheckedUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    id?: number
    nombre: string
    carreraId: number
  }

  export type MateriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteCreateInput = {
    nombre: string
    matriculas?: MatriculaCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
    Alumno?: AlumnoCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    id?: number
    nombre: string
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
    Alumno?: AlumnoUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUncheckedUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
    id?: number
    nombre: string
  }

  export type EstudianteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteCreateInput = {
    nombre: string
    dictan?: DictaCreateNestedManyWithoutDocenteInput
    carreraDocente?: carreradocenteCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateInput = {
    id?: number
    nombre: string
    dictan?: DictaUncheckedCreateNestedManyWithoutDocenteInput
    carreraDocente?: carreradocenteUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictaUpdateManyWithoutDocenteNestedInput
    carreraDocente?: carreradocenteUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictaUncheckedUpdateManyWithoutDocenteNestedInput
    carreraDocente?: carreradocenteUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteCreateManyInput = {
    id?: number
    nombre: string
  }

  export type DocenteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MatriculaCreateInput = {
    estudiante: EstudianteCreateNestedOneWithoutMatriculasInput
    carrera: CarreraCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateInput = {
    id?: number
    estudianteId: number
    carreraId: number
  }

  export type MatriculaUpdateInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutMatriculasNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaCreateManyInput = {
    id?: number
    estudianteId: number
    carreraId: number
  }

  export type MatriculaUpdateManyMutationInput = {

  }

  export type MatriculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateInput = {
    estudiante: EstudianteCreateNestedOneWithoutInscripcionesInput
    materia: MateriaCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type InscripcionUpdateInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput
    materia?: MateriaUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateManyInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type InscripcionUpdateManyMutationInput = {

  }

  export type InscripcionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictaCreateInput = {
    docente: DocenteCreateNestedOneWithoutDictanInput
    materia: MateriaCreateNestedOneWithoutDictanInput
  }

  export type DictaUncheckedCreateInput = {
    id?: number
    docenteId: number
    materiaId: number
  }

  export type DictaUpdateInput = {
    docente?: DocenteUpdateOneRequiredWithoutDictanNestedInput
    materia?: MateriaUpdateOneRequiredWithoutDictanNestedInput
  }

  export type DictaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictaCreateManyInput = {
    id?: number
    docenteId: number
    materiaId: number
  }

  export type DictaUpdateManyMutationInput = {

  }

  export type DictaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoCreateInput = {
    estudiante: EstudianteCreateNestedOneWithoutAlumnoInput
    carrera: CarreraCreateNestedOneWithoutAlumnoInput
    materia: MateriaCreateNestedOneWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateInput = {
    id?: number
    estudianteId: number
    carreraId: number
    materiaId: number
  }

  export type AlumnoUpdateInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutAlumnoNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutAlumnoNestedInput
    materia?: MateriaUpdateOneRequiredWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoCreateManyInput = {
    id?: number
    estudianteId: number
    carreraId: number
    materiaId: number
  }

  export type AlumnoUpdateManyMutationInput = {

  }

  export type AlumnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type carreradocenteCreateInput = {
    carrera: CarreraCreateNestedOneWithoutDocenteInput
    docente: DocenteCreateNestedOneWithoutCarreraDocenteInput
  }

  export type carreradocenteUncheckedCreateInput = {
    id?: number
    carreraId: number
    docenteId: number
  }

  export type carreradocenteUpdateInput = {
    carrera?: CarreraUpdateOneRequiredWithoutDocenteNestedInput
    docente?: DocenteUpdateOneRequiredWithoutCarreraDocenteNestedInput
  }

  export type carreradocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type carreradocenteCreateManyInput = {
    id?: number
    carreraId: number
    docenteId: number
  }

  export type carreradocenteUpdateManyMutationInput = {

  }

  export type carreradocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    email: string
    password: string
    creadoEn?: Date | string
    roles?: UsuarioRolCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    creadoEn?: Date | string
    roles?: UsuarioRolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UsuarioRolUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UsuarioRolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    password: string
    creadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolCreateInput = {
    nombre: string
    usuarios?: UsuarioRolCreateNestedManyWithoutRolInput
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioRolUncheckedCreateNestedManyWithoutRolInput
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioRolUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioRolUncheckedUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre: string
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoCreateInput = {
    nombre: string
    roles?: RolPermisoCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUncheckedCreateInput = {
    id?: number
    nombre: string
    roles?: RolPermisoUncheckedCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    roles?: RolPermisoUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    roles?: RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PermisoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioRolCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutRolesInput
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioRolUncheckedCreateInput = {
    id?: number
    usuarioId: number
    rolId: number
  }

  export type UsuarioRolUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutRolesNestedInput
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioRolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolCreateManyInput = {
    id?: number
    usuarioId: number
    rolId: number
  }

  export type UsuarioRolUpdateManyMutationInput = {

  }

  export type UsuarioRolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateManyMutationInput = {

  }

  export type RolPermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
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

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type MatriculaListRelationFilter = {
    every?: MatriculaWhereInput
    some?: MatriculaWhereInput
    none?: MatriculaWhereInput
  }

  export type AlumnoListRelationFilter = {
    every?: AlumnoWhereInput
    some?: AlumnoWhereInput
    none?: AlumnoWhereInput
  }

  export type CarreradocenteListRelationFilter = {
    every?: carreradocenteWhereInput
    some?: carreradocenteWhereInput
    none?: carreradocenteWhereInput
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatriculaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlumnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carreradocenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type InscripcionListRelationFilter = {
    every?: InscripcionWhereInput
    some?: InscripcionWhereInput
    none?: InscripcionWhereInput
  }

  export type DictaListRelationFilter = {
    every?: DictaWhereInput
    some?: DictaWhereInput
    none?: DictaWhereInput
  }

  export type InscripcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
  }

  export type EstudianteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstudianteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstudianteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstudianteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocenteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DocenteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DocenteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DocenteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstudianteScalarRelationFilter = {
    is?: EstudianteWhereInput
    isNot?: EstudianteWhereInput
  }

  export type MatriculaCountOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
  }

  export type MatriculaAvgOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
  }

  export type MatriculaMaxOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
  }

  export type MatriculaMinOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
  }

  export type MatriculaSumOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
  }

  export type MateriaScalarRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type InscripcionCountOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionAvgOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionMaxOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionMinOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type InscripcionSumOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DocenteScalarRelationFilter = {
    is?: DocenteWhereInput
    isNot?: DocenteWhereInput
  }

  export type DictaCountOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictaAvgOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictaMaxOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictaMinOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DictaSumOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type AlumnoCountOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type AlumnoAvgOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type AlumnoMaxOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type AlumnoMinOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type AlumnoSumOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    carreraId?: SortOrder
    materiaId?: SortOrder
  }

  export type carreradocenteCountOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    docenteId?: SortOrder
  }

  export type carreradocenteAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    docenteId?: SortOrder
  }

  export type carreradocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    docenteId?: SortOrder
  }

  export type carreradocenteMinOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    docenteId?: SortOrder
  }

  export type carreradocenteSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    docenteId?: SortOrder
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

  export type UsuarioRolListRelationFilter = {
    every?: UsuarioRolWhereInput
    some?: UsuarioRolWhereInput
    none?: UsuarioRolWhereInput
  }

  export type UsuarioRolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type RolPermisoListRelationFilter = {
    every?: RolPermisoWhereInput
    some?: RolPermisoWhereInput
    none?: RolPermisoWhereInput
  }

  export type RolPermisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PermisoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type UsuarioRolCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioRolSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type PermisoScalarRelationFilter = {
    is?: PermisoWhereInput
    isNot?: PermisoWhereInput
  }

  export type RolPermisoCountOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMinOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type MateriaCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type MatriculaCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MatriculaCreateWithoutCarreraInput, MatriculaUncheckedCreateWithoutCarreraInput> | MatriculaCreateWithoutCarreraInput[] | MatriculaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCarreraInput | MatriculaCreateOrConnectWithoutCarreraInput[]
    createMany?: MatriculaCreateManyCarreraInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type AlumnoCreateNestedManyWithoutCarreraInput = {
    create?: XOR<AlumnoCreateWithoutCarreraInput, AlumnoUncheckedCreateWithoutCarreraInput> | AlumnoCreateWithoutCarreraInput[] | AlumnoUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCarreraInput | AlumnoCreateOrConnectWithoutCarreraInput[]
    createMany?: AlumnoCreateManyCarreraInputEnvelope
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type carreradocenteCreateNestedManyWithoutCarreraInput = {
    create?: XOR<carreradocenteCreateWithoutCarreraInput, carreradocenteUncheckedCreateWithoutCarreraInput> | carreradocenteCreateWithoutCarreraInput[] | carreradocenteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutCarreraInput | carreradocenteCreateOrConnectWithoutCarreraInput[]
    createMany?: carreradocenteCreateManyCarreraInputEnvelope
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MatriculaCreateWithoutCarreraInput, MatriculaUncheckedCreateWithoutCarreraInput> | MatriculaCreateWithoutCarreraInput[] | MatriculaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCarreraInput | MatriculaCreateOrConnectWithoutCarreraInput[]
    createMany?: MatriculaCreateManyCarreraInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type AlumnoUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<AlumnoCreateWithoutCarreraInput, AlumnoUncheckedCreateWithoutCarreraInput> | AlumnoCreateWithoutCarreraInput[] | AlumnoUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCarreraInput | AlumnoCreateOrConnectWithoutCarreraInput[]
    createMany?: AlumnoCreateManyCarreraInputEnvelope
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type carreradocenteUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<carreradocenteCreateWithoutCarreraInput, carreradocenteUncheckedCreateWithoutCarreraInput> | carreradocenteCreateWithoutCarreraInput[] | carreradocenteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutCarreraInput | carreradocenteCreateOrConnectWithoutCarreraInput[]
    createMany?: carreradocenteCreateManyCarreraInputEnvelope
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MateriaUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MatriculaUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MatriculaCreateWithoutCarreraInput, MatriculaUncheckedCreateWithoutCarreraInput> | MatriculaCreateWithoutCarreraInput[] | MatriculaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCarreraInput | MatriculaCreateOrConnectWithoutCarreraInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutCarreraInput | MatriculaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MatriculaCreateManyCarreraInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutCarreraInput | MatriculaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutCarreraInput | MatriculaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type AlumnoUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<AlumnoCreateWithoutCarreraInput, AlumnoUncheckedCreateWithoutCarreraInput> | AlumnoCreateWithoutCarreraInput[] | AlumnoUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCarreraInput | AlumnoCreateOrConnectWithoutCarreraInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutCarreraInput | AlumnoUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: AlumnoCreateManyCarreraInputEnvelope
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutCarreraInput | AlumnoUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutCarreraInput | AlumnoUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type carreradocenteUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<carreradocenteCreateWithoutCarreraInput, carreradocenteUncheckedCreateWithoutCarreraInput> | carreradocenteCreateWithoutCarreraInput[] | carreradocenteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutCarreraInput | carreradocenteCreateOrConnectWithoutCarreraInput[]
    upsert?: carreradocenteUpsertWithWhereUniqueWithoutCarreraInput | carreradocenteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: carreradocenteCreateManyCarreraInputEnvelope
    set?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    disconnect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    delete?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    update?: carreradocenteUpdateWithWhereUniqueWithoutCarreraInput | carreradocenteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: carreradocenteUpdateManyWithWhereWithoutCarreraInput | carreradocenteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: carreradocenteScalarWhereInput | carreradocenteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MatriculaCreateWithoutCarreraInput, MatriculaUncheckedCreateWithoutCarreraInput> | MatriculaCreateWithoutCarreraInput[] | MatriculaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCarreraInput | MatriculaCreateOrConnectWithoutCarreraInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutCarreraInput | MatriculaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MatriculaCreateManyCarreraInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutCarreraInput | MatriculaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutCarreraInput | MatriculaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type AlumnoUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<AlumnoCreateWithoutCarreraInput, AlumnoUncheckedCreateWithoutCarreraInput> | AlumnoCreateWithoutCarreraInput[] | AlumnoUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCarreraInput | AlumnoCreateOrConnectWithoutCarreraInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutCarreraInput | AlumnoUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: AlumnoCreateManyCarreraInputEnvelope
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutCarreraInput | AlumnoUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutCarreraInput | AlumnoUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type carreradocenteUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<carreradocenteCreateWithoutCarreraInput, carreradocenteUncheckedCreateWithoutCarreraInput> | carreradocenteCreateWithoutCarreraInput[] | carreradocenteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutCarreraInput | carreradocenteCreateOrConnectWithoutCarreraInput[]
    upsert?: carreradocenteUpsertWithWhereUniqueWithoutCarreraInput | carreradocenteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: carreradocenteCreateManyCarreraInputEnvelope
    set?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    disconnect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    delete?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    update?: carreradocenteUpdateWithWhereUniqueWithoutCarreraInput | carreradocenteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: carreradocenteUpdateManyWithWhereWithoutCarreraInput | carreradocenteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: carreradocenteScalarWhereInput | carreradocenteScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
  }

  export type InscripcionCreateNestedManyWithoutMateriaInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type DictaCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DictaCreateWithoutMateriaInput, DictaUncheckedCreateWithoutMateriaInput> | DictaCreateWithoutMateriaInput[] | DictaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutMateriaInput | DictaCreateOrConnectWithoutMateriaInput[]
    createMany?: DictaCreateManyMateriaInputEnvelope
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
  }

  export type AlumnoCreateNestedManyWithoutMateriaInput = {
    create?: XOR<AlumnoCreateWithoutMateriaInput, AlumnoUncheckedCreateWithoutMateriaInput> | AlumnoCreateWithoutMateriaInput[] | AlumnoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutMateriaInput | AlumnoCreateOrConnectWithoutMateriaInput[]
    createMany?: AlumnoCreateManyMateriaInputEnvelope
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type DictaUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DictaCreateWithoutMateriaInput, DictaUncheckedCreateWithoutMateriaInput> | DictaCreateWithoutMateriaInput[] | DictaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutMateriaInput | DictaCreateOrConnectWithoutMateriaInput[]
    createMany?: DictaCreateManyMateriaInputEnvelope
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
  }

  export type AlumnoUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<AlumnoCreateWithoutMateriaInput, AlumnoUncheckedCreateWithoutMateriaInput> | AlumnoCreateWithoutMateriaInput[] | AlumnoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutMateriaInput | AlumnoCreateOrConnectWithoutMateriaInput[]
    createMany?: AlumnoCreateManyMateriaInputEnvelope
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type CarreraUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    upsert?: CarreraUpsertWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutMateriasInput, CarreraUpdateWithoutMateriasInput>, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type InscripcionUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutMateriaInput | InscripcionUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutMateriaInput | InscripcionUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutMateriaInput | InscripcionUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type DictaUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DictaCreateWithoutMateriaInput, DictaUncheckedCreateWithoutMateriaInput> | DictaCreateWithoutMateriaInput[] | DictaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutMateriaInput | DictaCreateOrConnectWithoutMateriaInput[]
    upsert?: DictaUpsertWithWhereUniqueWithoutMateriaInput | DictaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DictaCreateManyMateriaInputEnvelope
    set?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    disconnect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    delete?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    update?: DictaUpdateWithWhereUniqueWithoutMateriaInput | DictaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DictaUpdateManyWithWhereWithoutMateriaInput | DictaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DictaScalarWhereInput | DictaScalarWhereInput[]
  }

  export type AlumnoUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<AlumnoCreateWithoutMateriaInput, AlumnoUncheckedCreateWithoutMateriaInput> | AlumnoCreateWithoutMateriaInput[] | AlumnoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutMateriaInput | AlumnoCreateOrConnectWithoutMateriaInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutMateriaInput | AlumnoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: AlumnoCreateManyMateriaInputEnvelope
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutMateriaInput | AlumnoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutMateriaInput | AlumnoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type InscripcionUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput> | InscripcionCreateWithoutMateriaInput[] | InscripcionUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutMateriaInput | InscripcionCreateOrConnectWithoutMateriaInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutMateriaInput | InscripcionUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: InscripcionCreateManyMateriaInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutMateriaInput | InscripcionUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutMateriaInput | InscripcionUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type DictaUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DictaCreateWithoutMateriaInput, DictaUncheckedCreateWithoutMateriaInput> | DictaCreateWithoutMateriaInput[] | DictaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutMateriaInput | DictaCreateOrConnectWithoutMateriaInput[]
    upsert?: DictaUpsertWithWhereUniqueWithoutMateriaInput | DictaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DictaCreateManyMateriaInputEnvelope
    set?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    disconnect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    delete?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    update?: DictaUpdateWithWhereUniqueWithoutMateriaInput | DictaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DictaUpdateManyWithWhereWithoutMateriaInput | DictaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DictaScalarWhereInput | DictaScalarWhereInput[]
  }

  export type AlumnoUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<AlumnoCreateWithoutMateriaInput, AlumnoUncheckedCreateWithoutMateriaInput> | AlumnoCreateWithoutMateriaInput[] | AlumnoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutMateriaInput | AlumnoCreateOrConnectWithoutMateriaInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutMateriaInput | AlumnoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: AlumnoCreateManyMateriaInputEnvelope
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutMateriaInput | AlumnoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutMateriaInput | AlumnoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type MatriculaCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<MatriculaCreateWithoutEstudianteInput, MatriculaUncheckedCreateWithoutEstudianteInput> | MatriculaCreateWithoutEstudianteInput[] | MatriculaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutEstudianteInput | MatriculaCreateOrConnectWithoutEstudianteInput[]
    createMany?: MatriculaCreateManyEstudianteInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type InscripcionCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type AlumnoCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<AlumnoCreateWithoutEstudianteInput, AlumnoUncheckedCreateWithoutEstudianteInput> | AlumnoCreateWithoutEstudianteInput[] | AlumnoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutEstudianteInput | AlumnoCreateOrConnectWithoutEstudianteInput[]
    createMany?: AlumnoCreateManyEstudianteInputEnvelope
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<MatriculaCreateWithoutEstudianteInput, MatriculaUncheckedCreateWithoutEstudianteInput> | MatriculaCreateWithoutEstudianteInput[] | MatriculaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutEstudianteInput | MatriculaCreateOrConnectWithoutEstudianteInput[]
    createMany?: MatriculaCreateManyEstudianteInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type AlumnoUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<AlumnoCreateWithoutEstudianteInput, AlumnoUncheckedCreateWithoutEstudianteInput> | AlumnoCreateWithoutEstudianteInput[] | AlumnoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutEstudianteInput | AlumnoCreateOrConnectWithoutEstudianteInput[]
    createMany?: AlumnoCreateManyEstudianteInputEnvelope
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type MatriculaUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<MatriculaCreateWithoutEstudianteInput, MatriculaUncheckedCreateWithoutEstudianteInput> | MatriculaCreateWithoutEstudianteInput[] | MatriculaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutEstudianteInput | MatriculaCreateOrConnectWithoutEstudianteInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutEstudianteInput | MatriculaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: MatriculaCreateManyEstudianteInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutEstudianteInput | MatriculaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutEstudianteInput | MatriculaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type InscripcionUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type AlumnoUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<AlumnoCreateWithoutEstudianteInput, AlumnoUncheckedCreateWithoutEstudianteInput> | AlumnoCreateWithoutEstudianteInput[] | AlumnoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutEstudianteInput | AlumnoCreateOrConnectWithoutEstudianteInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutEstudianteInput | AlumnoUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: AlumnoCreateManyEstudianteInputEnvelope
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutEstudianteInput | AlumnoUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutEstudianteInput | AlumnoUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<MatriculaCreateWithoutEstudianteInput, MatriculaUncheckedCreateWithoutEstudianteInput> | MatriculaCreateWithoutEstudianteInput[] | MatriculaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutEstudianteInput | MatriculaCreateOrConnectWithoutEstudianteInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutEstudianteInput | MatriculaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: MatriculaCreateManyEstudianteInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutEstudianteInput | MatriculaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutEstudianteInput | MatriculaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type AlumnoUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<AlumnoCreateWithoutEstudianteInput, AlumnoUncheckedCreateWithoutEstudianteInput> | AlumnoCreateWithoutEstudianteInput[] | AlumnoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutEstudianteInput | AlumnoCreateOrConnectWithoutEstudianteInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutEstudianteInput | AlumnoUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: AlumnoCreateManyEstudianteInputEnvelope
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutEstudianteInput | AlumnoUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutEstudianteInput | AlumnoUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type DictaCreateNestedManyWithoutDocenteInput = {
    create?: XOR<DictaCreateWithoutDocenteInput, DictaUncheckedCreateWithoutDocenteInput> | DictaCreateWithoutDocenteInput[] | DictaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutDocenteInput | DictaCreateOrConnectWithoutDocenteInput[]
    createMany?: DictaCreateManyDocenteInputEnvelope
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
  }

  export type carreradocenteCreateNestedManyWithoutDocenteInput = {
    create?: XOR<carreradocenteCreateWithoutDocenteInput, carreradocenteUncheckedCreateWithoutDocenteInput> | carreradocenteCreateWithoutDocenteInput[] | carreradocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutDocenteInput | carreradocenteCreateOrConnectWithoutDocenteInput[]
    createMany?: carreradocenteCreateManyDocenteInputEnvelope
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
  }

  export type DictaUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<DictaCreateWithoutDocenteInput, DictaUncheckedCreateWithoutDocenteInput> | DictaCreateWithoutDocenteInput[] | DictaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutDocenteInput | DictaCreateOrConnectWithoutDocenteInput[]
    createMany?: DictaCreateManyDocenteInputEnvelope
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
  }

  export type carreradocenteUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<carreradocenteCreateWithoutDocenteInput, carreradocenteUncheckedCreateWithoutDocenteInput> | carreradocenteCreateWithoutDocenteInput[] | carreradocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutDocenteInput | carreradocenteCreateOrConnectWithoutDocenteInput[]
    createMany?: carreradocenteCreateManyDocenteInputEnvelope
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
  }

  export type DictaUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<DictaCreateWithoutDocenteInput, DictaUncheckedCreateWithoutDocenteInput> | DictaCreateWithoutDocenteInput[] | DictaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutDocenteInput | DictaCreateOrConnectWithoutDocenteInput[]
    upsert?: DictaUpsertWithWhereUniqueWithoutDocenteInput | DictaUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: DictaCreateManyDocenteInputEnvelope
    set?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    disconnect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    delete?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    update?: DictaUpdateWithWhereUniqueWithoutDocenteInput | DictaUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: DictaUpdateManyWithWhereWithoutDocenteInput | DictaUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: DictaScalarWhereInput | DictaScalarWhereInput[]
  }

  export type carreradocenteUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<carreradocenteCreateWithoutDocenteInput, carreradocenteUncheckedCreateWithoutDocenteInput> | carreradocenteCreateWithoutDocenteInput[] | carreradocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutDocenteInput | carreradocenteCreateOrConnectWithoutDocenteInput[]
    upsert?: carreradocenteUpsertWithWhereUniqueWithoutDocenteInput | carreradocenteUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: carreradocenteCreateManyDocenteInputEnvelope
    set?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    disconnect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    delete?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    update?: carreradocenteUpdateWithWhereUniqueWithoutDocenteInput | carreradocenteUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: carreradocenteUpdateManyWithWhereWithoutDocenteInput | carreradocenteUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: carreradocenteScalarWhereInput | carreradocenteScalarWhereInput[]
  }

  export type DictaUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<DictaCreateWithoutDocenteInput, DictaUncheckedCreateWithoutDocenteInput> | DictaCreateWithoutDocenteInput[] | DictaUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: DictaCreateOrConnectWithoutDocenteInput | DictaCreateOrConnectWithoutDocenteInput[]
    upsert?: DictaUpsertWithWhereUniqueWithoutDocenteInput | DictaUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: DictaCreateManyDocenteInputEnvelope
    set?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    disconnect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    delete?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    connect?: DictaWhereUniqueInput | DictaWhereUniqueInput[]
    update?: DictaUpdateWithWhereUniqueWithoutDocenteInput | DictaUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: DictaUpdateManyWithWhereWithoutDocenteInput | DictaUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: DictaScalarWhereInput | DictaScalarWhereInput[]
  }

  export type carreradocenteUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<carreradocenteCreateWithoutDocenteInput, carreradocenteUncheckedCreateWithoutDocenteInput> | carreradocenteCreateWithoutDocenteInput[] | carreradocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: carreradocenteCreateOrConnectWithoutDocenteInput | carreradocenteCreateOrConnectWithoutDocenteInput[]
    upsert?: carreradocenteUpsertWithWhereUniqueWithoutDocenteInput | carreradocenteUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: carreradocenteCreateManyDocenteInputEnvelope
    set?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    disconnect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    delete?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    connect?: carreradocenteWhereUniqueInput | carreradocenteWhereUniqueInput[]
    update?: carreradocenteUpdateWithWhereUniqueWithoutDocenteInput | carreradocenteUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: carreradocenteUpdateManyWithWhereWithoutDocenteInput | carreradocenteUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: carreradocenteScalarWhereInput | carreradocenteScalarWhereInput[]
  }

  export type EstudianteCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<EstudianteCreateWithoutMatriculasInput, EstudianteUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutMatriculasInput
    connect?: EstudianteWhereUniqueInput
  }

  export type CarreraCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<CarreraCreateWithoutMatriculasInput, CarreraUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMatriculasInput
    connect?: CarreraWhereUniqueInput
  }

  export type EstudianteUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<EstudianteCreateWithoutMatriculasInput, EstudianteUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutMatriculasInput
    upsert?: EstudianteUpsertWithoutMatriculasInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutMatriculasInput, EstudianteUpdateWithoutMatriculasInput>, EstudianteUncheckedUpdateWithoutMatriculasInput>
  }

  export type CarreraUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<CarreraCreateWithoutMatriculasInput, CarreraUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMatriculasInput
    upsert?: CarreraUpsertWithoutMatriculasInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutMatriculasInput, CarreraUpdateWithoutMatriculasInput>, CarreraUncheckedUpdateWithoutMatriculasInput>
  }

  export type EstudianteCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutInscripcionesInput
    connect?: EstudianteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutInscripcionesInput
    connect?: MateriaWhereUniqueInput
  }

  export type EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutInscripcionesInput
    upsert?: EstudianteUpsertWithoutInscripcionesInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutInscripcionesInput, EstudianteUpdateWithoutInscripcionesInput>, EstudianteUncheckedUpdateWithoutInscripcionesInput>
  }

  export type MateriaUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutInscripcionesInput
    upsert?: MateriaUpsertWithoutInscripcionesInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutInscripcionesInput, MateriaUpdateWithoutInscripcionesInput>, MateriaUncheckedUpdateWithoutInscripcionesInput>
  }

  export type DocenteCreateNestedOneWithoutDictanInput = {
    create?: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutDictanInput
    connect?: DocenteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutDictanInput = {
    create?: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDictanInput
    connect?: MateriaWhereUniqueInput
  }

  export type DocenteUpdateOneRequiredWithoutDictanNestedInput = {
    create?: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutDictanInput
    upsert?: DocenteUpsertWithoutDictanInput
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutDictanInput, DocenteUpdateWithoutDictanInput>, DocenteUncheckedUpdateWithoutDictanInput>
  }

  export type MateriaUpdateOneRequiredWithoutDictanNestedInput = {
    create?: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDictanInput
    upsert?: MateriaUpsertWithoutDictanInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutDictanInput, MateriaUpdateWithoutDictanInput>, MateriaUncheckedUpdateWithoutDictanInput>
  }

  export type EstudianteCreateNestedOneWithoutAlumnoInput = {
    create?: XOR<EstudianteCreateWithoutAlumnoInput, EstudianteUncheckedCreateWithoutAlumnoInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutAlumnoInput
    connect?: EstudianteWhereUniqueInput
  }

  export type CarreraCreateNestedOneWithoutAlumnoInput = {
    create?: XOR<CarreraCreateWithoutAlumnoInput, CarreraUncheckedCreateWithoutAlumnoInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutAlumnoInput
    connect?: CarreraWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutAlumnoInput = {
    create?: XOR<MateriaCreateWithoutAlumnoInput, MateriaUncheckedCreateWithoutAlumnoInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutAlumnoInput
    connect?: MateriaWhereUniqueInput
  }

  export type EstudianteUpdateOneRequiredWithoutAlumnoNestedInput = {
    create?: XOR<EstudianteCreateWithoutAlumnoInput, EstudianteUncheckedCreateWithoutAlumnoInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutAlumnoInput
    upsert?: EstudianteUpsertWithoutAlumnoInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutAlumnoInput, EstudianteUpdateWithoutAlumnoInput>, EstudianteUncheckedUpdateWithoutAlumnoInput>
  }

  export type CarreraUpdateOneRequiredWithoutAlumnoNestedInput = {
    create?: XOR<CarreraCreateWithoutAlumnoInput, CarreraUncheckedCreateWithoutAlumnoInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutAlumnoInput
    upsert?: CarreraUpsertWithoutAlumnoInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutAlumnoInput, CarreraUpdateWithoutAlumnoInput>, CarreraUncheckedUpdateWithoutAlumnoInput>
  }

  export type MateriaUpdateOneRequiredWithoutAlumnoNestedInput = {
    create?: XOR<MateriaCreateWithoutAlumnoInput, MateriaUncheckedCreateWithoutAlumnoInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutAlumnoInput
    upsert?: MateriaUpsertWithoutAlumnoInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutAlumnoInput, MateriaUpdateWithoutAlumnoInput>, MateriaUncheckedUpdateWithoutAlumnoInput>
  }

  export type CarreraCreateNestedOneWithoutDocenteInput = {
    create?: XOR<CarreraCreateWithoutDocenteInput, CarreraUncheckedCreateWithoutDocenteInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutDocenteInput
    connect?: CarreraWhereUniqueInput
  }

  export type DocenteCreateNestedOneWithoutCarreraDocenteInput = {
    create?: XOR<DocenteCreateWithoutCarreraDocenteInput, DocenteUncheckedCreateWithoutCarreraDocenteInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutCarreraDocenteInput
    connect?: DocenteWhereUniqueInput
  }

  export type CarreraUpdateOneRequiredWithoutDocenteNestedInput = {
    create?: XOR<CarreraCreateWithoutDocenteInput, CarreraUncheckedCreateWithoutDocenteInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutDocenteInput
    upsert?: CarreraUpsertWithoutDocenteInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutDocenteInput, CarreraUpdateWithoutDocenteInput>, CarreraUncheckedUpdateWithoutDocenteInput>
  }

  export type DocenteUpdateOneRequiredWithoutCarreraDocenteNestedInput = {
    create?: XOR<DocenteCreateWithoutCarreraDocenteInput, DocenteUncheckedCreateWithoutCarreraDocenteInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutCarreraDocenteInput
    upsert?: DocenteUpsertWithoutCarreraDocenteInput
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutCarreraDocenteInput, DocenteUpdateWithoutCarreraDocenteInput>, DocenteUncheckedUpdateWithoutCarreraDocenteInput>
  }

  export type UsuarioRolCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type UsuarioRolUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioRolUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutUsuarioInput | UsuarioRolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type UsuarioRolUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutUsuarioInput | UsuarioRolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type UsuarioRolCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type RolPermisoCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioRolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioRolUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutRolInput | UsuarioRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutRolInput | UsuarioRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutRolInput | UsuarioRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type RolPermisoUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioRolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutRolInput | UsuarioRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutRolInput | UsuarioRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutRolInput | UsuarioRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRolesInput = {
    create?: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesInput
    upsert?: UsuarioUpsertWithoutRolesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRolesInput, UsuarioUpdateWithoutRolesInput>, UsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    connect?: RolWhereUniqueInput
  }

  export type PermisoCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    connect?: PermisoWhereUniqueInput
  }

  export type RolUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    upsert?: RolUpsertWithoutPermisosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPermisosInput, RolUpdateWithoutPermisosInput>, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type PermisoUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    upsert?: PermisoUpsertWithoutRolesInput
    connect?: PermisoWhereUniqueInput
    update?: XOR<XOR<PermisoUpdateToOneWithWhereWithoutRolesInput, PermisoUpdateWithoutRolesInput>, PermisoUncheckedUpdateWithoutRolesInput>
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

  export type MateriaCreateWithoutCarreraInput = {
    nombre: string
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    dictan?: DictaCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    dictan?: DictaUncheckedCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaCreateManyCarreraInputEnvelope = {
    data: MateriaCreateManyCarreraInput | MateriaCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaCreateWithoutCarreraInput = {
    estudiante: EstudianteCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateWithoutCarreraInput = {
    id?: number
    estudianteId: number
  }

  export type MatriculaCreateOrConnectWithoutCarreraInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutCarreraInput, MatriculaUncheckedCreateWithoutCarreraInput>
  }

  export type MatriculaCreateManyCarreraInputEnvelope = {
    data: MatriculaCreateManyCarreraInput | MatriculaCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type AlumnoCreateWithoutCarreraInput = {
    estudiante: EstudianteCreateNestedOneWithoutAlumnoInput
    materia: MateriaCreateNestedOneWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateWithoutCarreraInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type AlumnoCreateOrConnectWithoutCarreraInput = {
    where: AlumnoWhereUniqueInput
    create: XOR<AlumnoCreateWithoutCarreraInput, AlumnoUncheckedCreateWithoutCarreraInput>
  }

  export type AlumnoCreateManyCarreraInputEnvelope = {
    data: AlumnoCreateManyCarreraInput | AlumnoCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type carreradocenteCreateWithoutCarreraInput = {
    docente: DocenteCreateNestedOneWithoutCarreraDocenteInput
  }

  export type carreradocenteUncheckedCreateWithoutCarreraInput = {
    id?: number
    docenteId: number
  }

  export type carreradocenteCreateOrConnectWithoutCarreraInput = {
    where: carreradocenteWhereUniqueInput
    create: XOR<carreradocenteCreateWithoutCarreraInput, carreradocenteUncheckedCreateWithoutCarreraInput>
  }

  export type carreradocenteCreateManyCarreraInputEnvelope = {
    data: carreradocenteCreateManyCarreraInput | carreradocenteCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCarreraInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCarreraInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    carreraId?: IntFilter<"Materia"> | number
  }

  export type MatriculaUpsertWithWhereUniqueWithoutCarreraInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutCarreraInput, MatriculaUncheckedUpdateWithoutCarreraInput>
    create: XOR<MatriculaCreateWithoutCarreraInput, MatriculaUncheckedCreateWithoutCarreraInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutCarreraInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutCarreraInput, MatriculaUncheckedUpdateWithoutCarreraInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutCarreraInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutCarreraInput>
  }

  export type MatriculaScalarWhereInput = {
    AND?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    OR?: MatriculaScalarWhereInput[]
    NOT?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    id?: IntFilter<"Matricula"> | number
    estudianteId?: IntFilter<"Matricula"> | number
    carreraId?: IntFilter<"Matricula"> | number
  }

  export type AlumnoUpsertWithWhereUniqueWithoutCarreraInput = {
    where: AlumnoWhereUniqueInput
    update: XOR<AlumnoUpdateWithoutCarreraInput, AlumnoUncheckedUpdateWithoutCarreraInput>
    create: XOR<AlumnoCreateWithoutCarreraInput, AlumnoUncheckedCreateWithoutCarreraInput>
  }

  export type AlumnoUpdateWithWhereUniqueWithoutCarreraInput = {
    where: AlumnoWhereUniqueInput
    data: XOR<AlumnoUpdateWithoutCarreraInput, AlumnoUncheckedUpdateWithoutCarreraInput>
  }

  export type AlumnoUpdateManyWithWhereWithoutCarreraInput = {
    where: AlumnoScalarWhereInput
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyWithoutCarreraInput>
  }

  export type AlumnoScalarWhereInput = {
    AND?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
    OR?: AlumnoScalarWhereInput[]
    NOT?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
    id?: IntFilter<"Alumno"> | number
    estudianteId?: IntFilter<"Alumno"> | number
    carreraId?: IntFilter<"Alumno"> | number
    materiaId?: IntFilter<"Alumno"> | number
  }

  export type carreradocenteUpsertWithWhereUniqueWithoutCarreraInput = {
    where: carreradocenteWhereUniqueInput
    update: XOR<carreradocenteUpdateWithoutCarreraInput, carreradocenteUncheckedUpdateWithoutCarreraInput>
    create: XOR<carreradocenteCreateWithoutCarreraInput, carreradocenteUncheckedCreateWithoutCarreraInput>
  }

  export type carreradocenteUpdateWithWhereUniqueWithoutCarreraInput = {
    where: carreradocenteWhereUniqueInput
    data: XOR<carreradocenteUpdateWithoutCarreraInput, carreradocenteUncheckedUpdateWithoutCarreraInput>
  }

  export type carreradocenteUpdateManyWithWhereWithoutCarreraInput = {
    where: carreradocenteScalarWhereInput
    data: XOR<carreradocenteUpdateManyMutationInput, carreradocenteUncheckedUpdateManyWithoutCarreraInput>
  }

  export type carreradocenteScalarWhereInput = {
    AND?: carreradocenteScalarWhereInput | carreradocenteScalarWhereInput[]
    OR?: carreradocenteScalarWhereInput[]
    NOT?: carreradocenteScalarWhereInput | carreradocenteScalarWhereInput[]
    id?: IntFilter<"carreradocente"> | number
    carreraId?: IntFilter<"carreradocente"> | number
    docenteId?: IntFilter<"carreradocente"> | number
  }

  export type CarreraCreateWithoutMateriasInput = {
    nombre: string
    matriculas?: MatriculaCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutMateriasInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
  }

  export type InscripcionCreateWithoutMateriaInput = {
    estudiante: EstudianteCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutMateriaInput = {
    id?: number
    estudianteId: number
  }

  export type InscripcionCreateOrConnectWithoutMateriaInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput>
  }

  export type InscripcionCreateManyMateriaInputEnvelope = {
    data: InscripcionCreateManyMateriaInput | InscripcionCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type DictaCreateWithoutMateriaInput = {
    docente: DocenteCreateNestedOneWithoutDictanInput
  }

  export type DictaUncheckedCreateWithoutMateriaInput = {
    id?: number
    docenteId: number
  }

  export type DictaCreateOrConnectWithoutMateriaInput = {
    where: DictaWhereUniqueInput
    create: XOR<DictaCreateWithoutMateriaInput, DictaUncheckedCreateWithoutMateriaInput>
  }

  export type DictaCreateManyMateriaInputEnvelope = {
    data: DictaCreateManyMateriaInput | DictaCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type AlumnoCreateWithoutMateriaInput = {
    estudiante: EstudianteCreateNestedOneWithoutAlumnoInput
    carrera: CarreraCreateNestedOneWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateWithoutMateriaInput = {
    id?: number
    estudianteId: number
    carreraId: number
  }

  export type AlumnoCreateOrConnectWithoutMateriaInput = {
    where: AlumnoWhereUniqueInput
    create: XOR<AlumnoCreateWithoutMateriaInput, AlumnoUncheckedCreateWithoutMateriaInput>
  }

  export type AlumnoCreateManyMateriaInputEnvelope = {
    data: AlumnoCreateManyMateriaInput | AlumnoCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithoutMateriasInput = {
    update: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type CarreraUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUncheckedUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type InscripcionUpsertWithWhereUniqueWithoutMateriaInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutMateriaInput, InscripcionUncheckedUpdateWithoutMateriaInput>
    create: XOR<InscripcionCreateWithoutMateriaInput, InscripcionUncheckedCreateWithoutMateriaInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutMateriaInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutMateriaInput, InscripcionUncheckedUpdateWithoutMateriaInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutMateriaInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutMateriaInput>
  }

  export type InscripcionScalarWhereInput = {
    AND?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    OR?: InscripcionScalarWhereInput[]
    NOT?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    estudianteId?: IntFilter<"Inscripcion"> | number
    materiaId?: IntFilter<"Inscripcion"> | number
  }

  export type DictaUpsertWithWhereUniqueWithoutMateriaInput = {
    where: DictaWhereUniqueInput
    update: XOR<DictaUpdateWithoutMateriaInput, DictaUncheckedUpdateWithoutMateriaInput>
    create: XOR<DictaCreateWithoutMateriaInput, DictaUncheckedCreateWithoutMateriaInput>
  }

  export type DictaUpdateWithWhereUniqueWithoutMateriaInput = {
    where: DictaWhereUniqueInput
    data: XOR<DictaUpdateWithoutMateriaInput, DictaUncheckedUpdateWithoutMateriaInput>
  }

  export type DictaUpdateManyWithWhereWithoutMateriaInput = {
    where: DictaScalarWhereInput
    data: XOR<DictaUpdateManyMutationInput, DictaUncheckedUpdateManyWithoutMateriaInput>
  }

  export type DictaScalarWhereInput = {
    AND?: DictaScalarWhereInput | DictaScalarWhereInput[]
    OR?: DictaScalarWhereInput[]
    NOT?: DictaScalarWhereInput | DictaScalarWhereInput[]
    id?: IntFilter<"Dicta"> | number
    docenteId?: IntFilter<"Dicta"> | number
    materiaId?: IntFilter<"Dicta"> | number
  }

  export type AlumnoUpsertWithWhereUniqueWithoutMateriaInput = {
    where: AlumnoWhereUniqueInput
    update: XOR<AlumnoUpdateWithoutMateriaInput, AlumnoUncheckedUpdateWithoutMateriaInput>
    create: XOR<AlumnoCreateWithoutMateriaInput, AlumnoUncheckedCreateWithoutMateriaInput>
  }

  export type AlumnoUpdateWithWhereUniqueWithoutMateriaInput = {
    where: AlumnoWhereUniqueInput
    data: XOR<AlumnoUpdateWithoutMateriaInput, AlumnoUncheckedUpdateWithoutMateriaInput>
  }

  export type AlumnoUpdateManyWithWhereWithoutMateriaInput = {
    where: AlumnoScalarWhereInput
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyWithoutMateriaInput>
  }

  export type MatriculaCreateWithoutEstudianteInput = {
    carrera: CarreraCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateWithoutEstudianteInput = {
    id?: number
    carreraId: number
  }

  export type MatriculaCreateOrConnectWithoutEstudianteInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutEstudianteInput, MatriculaUncheckedCreateWithoutEstudianteInput>
  }

  export type MatriculaCreateManyEstudianteInputEnvelope = {
    data: MatriculaCreateManyEstudianteInput | MatriculaCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type InscripcionCreateWithoutEstudianteInput = {
    materia: MateriaCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutEstudianteInput = {
    id?: number
    materiaId: number
  }

  export type InscripcionCreateOrConnectWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionCreateManyEstudianteInputEnvelope = {
    data: InscripcionCreateManyEstudianteInput | InscripcionCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type AlumnoCreateWithoutEstudianteInput = {
    carrera: CarreraCreateNestedOneWithoutAlumnoInput
    materia: MateriaCreateNestedOneWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateWithoutEstudianteInput = {
    id?: number
    carreraId: number
    materiaId: number
  }

  export type AlumnoCreateOrConnectWithoutEstudianteInput = {
    where: AlumnoWhereUniqueInput
    create: XOR<AlumnoCreateWithoutEstudianteInput, AlumnoUncheckedCreateWithoutEstudianteInput>
  }

  export type AlumnoCreateManyEstudianteInputEnvelope = {
    data: AlumnoCreateManyEstudianteInput | AlumnoCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutEstudianteInput, MatriculaUncheckedUpdateWithoutEstudianteInput>
    create: XOR<MatriculaCreateWithoutEstudianteInput, MatriculaUncheckedCreateWithoutEstudianteInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutEstudianteInput, MatriculaUncheckedUpdateWithoutEstudianteInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutEstudianteInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutEstudianteInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type AlumnoUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: AlumnoWhereUniqueInput
    update: XOR<AlumnoUpdateWithoutEstudianteInput, AlumnoUncheckedUpdateWithoutEstudianteInput>
    create: XOR<AlumnoCreateWithoutEstudianteInput, AlumnoUncheckedCreateWithoutEstudianteInput>
  }

  export type AlumnoUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: AlumnoWhereUniqueInput
    data: XOR<AlumnoUpdateWithoutEstudianteInput, AlumnoUncheckedUpdateWithoutEstudianteInput>
  }

  export type AlumnoUpdateManyWithWhereWithoutEstudianteInput = {
    where: AlumnoScalarWhereInput
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type DictaCreateWithoutDocenteInput = {
    materia: MateriaCreateNestedOneWithoutDictanInput
  }

  export type DictaUncheckedCreateWithoutDocenteInput = {
    id?: number
    materiaId: number
  }

  export type DictaCreateOrConnectWithoutDocenteInput = {
    where: DictaWhereUniqueInput
    create: XOR<DictaCreateWithoutDocenteInput, DictaUncheckedCreateWithoutDocenteInput>
  }

  export type DictaCreateManyDocenteInputEnvelope = {
    data: DictaCreateManyDocenteInput | DictaCreateManyDocenteInput[]
    skipDuplicates?: boolean
  }

  export type carreradocenteCreateWithoutDocenteInput = {
    carrera: CarreraCreateNestedOneWithoutDocenteInput
  }

  export type carreradocenteUncheckedCreateWithoutDocenteInput = {
    id?: number
    carreraId: number
  }

  export type carreradocenteCreateOrConnectWithoutDocenteInput = {
    where: carreradocenteWhereUniqueInput
    create: XOR<carreradocenteCreateWithoutDocenteInput, carreradocenteUncheckedCreateWithoutDocenteInput>
  }

  export type carreradocenteCreateManyDocenteInputEnvelope = {
    data: carreradocenteCreateManyDocenteInput | carreradocenteCreateManyDocenteInput[]
    skipDuplicates?: boolean
  }

  export type DictaUpsertWithWhereUniqueWithoutDocenteInput = {
    where: DictaWhereUniqueInput
    update: XOR<DictaUpdateWithoutDocenteInput, DictaUncheckedUpdateWithoutDocenteInput>
    create: XOR<DictaCreateWithoutDocenteInput, DictaUncheckedCreateWithoutDocenteInput>
  }

  export type DictaUpdateWithWhereUniqueWithoutDocenteInput = {
    where: DictaWhereUniqueInput
    data: XOR<DictaUpdateWithoutDocenteInput, DictaUncheckedUpdateWithoutDocenteInput>
  }

  export type DictaUpdateManyWithWhereWithoutDocenteInput = {
    where: DictaScalarWhereInput
    data: XOR<DictaUpdateManyMutationInput, DictaUncheckedUpdateManyWithoutDocenteInput>
  }

  export type carreradocenteUpsertWithWhereUniqueWithoutDocenteInput = {
    where: carreradocenteWhereUniqueInput
    update: XOR<carreradocenteUpdateWithoutDocenteInput, carreradocenteUncheckedUpdateWithoutDocenteInput>
    create: XOR<carreradocenteCreateWithoutDocenteInput, carreradocenteUncheckedCreateWithoutDocenteInput>
  }

  export type carreradocenteUpdateWithWhereUniqueWithoutDocenteInput = {
    where: carreradocenteWhereUniqueInput
    data: XOR<carreradocenteUpdateWithoutDocenteInput, carreradocenteUncheckedUpdateWithoutDocenteInput>
  }

  export type carreradocenteUpdateManyWithWhereWithoutDocenteInput = {
    where: carreradocenteScalarWhereInput
    data: XOR<carreradocenteUpdateManyMutationInput, carreradocenteUncheckedUpdateManyWithoutDocenteInput>
  }

  export type EstudianteCreateWithoutMatriculasInput = {
    nombre: string
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
    Alumno?: AlumnoCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutMatriculasInput = {
    id?: number
    nombre: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutMatriculasInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutMatriculasInput, EstudianteUncheckedCreateWithoutMatriculasInput>
  }

  export type CarreraCreateWithoutMatriculasInput = {
    nombre: string
    materias?: MateriaCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutMatriculasInput = {
    id?: number
    nombre: string
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutMatriculasInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutMatriculasInput, CarreraUncheckedCreateWithoutMatriculasInput>
  }

  export type EstudianteUpsertWithoutMatriculasInput = {
    update: XOR<EstudianteUpdateWithoutMatriculasInput, EstudianteUncheckedUpdateWithoutMatriculasInput>
    create: XOR<EstudianteCreateWithoutMatriculasInput, EstudianteUncheckedCreateWithoutMatriculasInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutMatriculasInput, EstudianteUncheckedUpdateWithoutMatriculasInput>
  }

  export type EstudianteUpdateWithoutMatriculasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
    Alumno?: AlumnoUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type CarreraUpsertWithoutMatriculasInput = {
    update: XOR<CarreraUpdateWithoutMatriculasInput, CarreraUncheckedUpdateWithoutMatriculasInput>
    create: XOR<CarreraCreateWithoutMatriculasInput, CarreraUncheckedCreateWithoutMatriculasInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutMatriculasInput, CarreraUncheckedUpdateWithoutMatriculasInput>
  }

  export type CarreraUpdateWithoutMatriculasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type EstudianteCreateWithoutInscripcionesInput = {
    nombre: string
    matriculas?: MatriculaCreateNestedManyWithoutEstudianteInput
    Alumno?: AlumnoCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutEstudianteInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutInscripcionesInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
  }

  export type MateriaCreateWithoutInscripcionesInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    dictan?: DictaCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    carreraId: number
    dictan?: DictaUncheckedCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutInscripcionesInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
  }

  export type EstudianteUpsertWithoutInscripcionesInput = {
    update: XOR<EstudianteUpdateWithoutInscripcionesInput, EstudianteUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutInscripcionesInput, EstudianteUncheckedUpdateWithoutInscripcionesInput>
  }

  export type EstudianteUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUpdateManyWithoutEstudianteNestedInput
    Alumno?: AlumnoUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUncheckedUpdateManyWithoutEstudianteNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type MateriaUpsertWithoutInscripcionesInput = {
    update: XOR<MateriaUpdateWithoutInscripcionesInput, MateriaUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<MateriaCreateWithoutInscripcionesInput, MateriaUncheckedCreateWithoutInscripcionesInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutInscripcionesInput, MateriaUncheckedUpdateWithoutInscripcionesInput>
  }

  export type MateriaUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    dictan?: DictaUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    dictan?: DictaUncheckedUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type DocenteCreateWithoutDictanInput = {
    nombre: string
    carreraDocente?: carreradocenteCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateWithoutDictanInput = {
    id?: number
    nombre: string
    carreraDocente?: carreradocenteUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteCreateOrConnectWithoutDictanInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
  }

  export type MateriaCreateWithoutDictanInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutDictanInput = {
    id?: number
    nombre: string
    carreraId: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutDictanInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
  }

  export type DocenteUpsertWithoutDictanInput = {
    update: XOR<DocenteUpdateWithoutDictanInput, DocenteUncheckedUpdateWithoutDictanInput>
    create: XOR<DocenteCreateWithoutDictanInput, DocenteUncheckedCreateWithoutDictanInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutDictanInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutDictanInput, DocenteUncheckedUpdateWithoutDictanInput>
  }

  export type DocenteUpdateWithoutDictanInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carreraDocente?: carreradocenteUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateWithoutDictanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraDocente?: carreradocenteUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type MateriaUpsertWithoutDictanInput = {
    update: XOR<MateriaUpdateWithoutDictanInput, MateriaUncheckedUpdateWithoutDictanInput>
    create: XOR<MateriaCreateWithoutDictanInput, MateriaUncheckedCreateWithoutDictanInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutDictanInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutDictanInput, MateriaUncheckedUpdateWithoutDictanInput>
  }

  export type MateriaUpdateWithoutDictanInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutDictanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type EstudianteCreateWithoutAlumnoInput = {
    nombre: string
    matriculas?: MatriculaCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutAlumnoInput = {
    id?: number
    nombre: string
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutEstudianteInput
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutAlumnoInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutAlumnoInput, EstudianteUncheckedCreateWithoutAlumnoInput>
  }

  export type CarreraCreateWithoutAlumnoInput = {
    nombre: string
    materias?: MateriaCreateNestedManyWithoutCarreraInput
    matriculas?: MatriculaCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutAlumnoInput = {
    id?: number
    nombre: string
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCarreraInput
    docente?: carreradocenteUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutAlumnoInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutAlumnoInput, CarreraUncheckedCreateWithoutAlumnoInput>
  }

  export type MateriaCreateWithoutAlumnoInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    inscripciones?: InscripcionCreateNestedManyWithoutMateriaInput
    dictan?: DictaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutAlumnoInput = {
    id?: number
    nombre: string
    carreraId: number
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutMateriaInput
    dictan?: DictaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutAlumnoInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutAlumnoInput, MateriaUncheckedCreateWithoutAlumnoInput>
  }

  export type EstudianteUpsertWithoutAlumnoInput = {
    update: XOR<EstudianteUpdateWithoutAlumnoInput, EstudianteUncheckedUpdateWithoutAlumnoInput>
    create: XOR<EstudianteCreateWithoutAlumnoInput, EstudianteUncheckedCreateWithoutAlumnoInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutAlumnoInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutAlumnoInput, EstudianteUncheckedUpdateWithoutAlumnoInput>
  }

  export type EstudianteUpdateWithoutAlumnoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaUncheckedUpdateManyWithoutEstudianteNestedInput
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type CarreraUpsertWithoutAlumnoInput = {
    update: XOR<CarreraUpdateWithoutAlumnoInput, CarreraUncheckedUpdateWithoutAlumnoInput>
    create: XOR<CarreraCreateWithoutAlumnoInput, CarreraUncheckedCreateWithoutAlumnoInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutAlumnoInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutAlumnoInput, CarreraUncheckedUpdateWithoutAlumnoInput>
  }

  export type CarreraUpdateWithoutAlumnoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
    matriculas?: MatriculaUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCarreraNestedInput
    docente?: carreradocenteUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type MateriaUpsertWithoutAlumnoInput = {
    update: XOR<MateriaUpdateWithoutAlumnoInput, MateriaUncheckedUpdateWithoutAlumnoInput>
    create: XOR<MateriaCreateWithoutAlumnoInput, MateriaUncheckedCreateWithoutAlumnoInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutAlumnoInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutAlumnoInput, MateriaUncheckedUpdateWithoutAlumnoInput>
  }

  export type MateriaUpdateWithoutAlumnoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    dictan?: DictaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    dictan?: DictaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type CarreraCreateWithoutDocenteInput = {
    nombre: string
    materias?: MateriaCreateNestedManyWithoutCarreraInput
    matriculas?: MatriculaCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutDocenteInput = {
    id?: number
    nombre: string
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCarreraInput
    Alumno?: AlumnoUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutDocenteInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutDocenteInput, CarreraUncheckedCreateWithoutDocenteInput>
  }

  export type DocenteCreateWithoutCarreraDocenteInput = {
    nombre: string
    dictan?: DictaCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateWithoutCarreraDocenteInput = {
    id?: number
    nombre: string
    dictan?: DictaUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteCreateOrConnectWithoutCarreraDocenteInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutCarreraDocenteInput, DocenteUncheckedCreateWithoutCarreraDocenteInput>
  }

  export type CarreraUpsertWithoutDocenteInput = {
    update: XOR<CarreraUpdateWithoutDocenteInput, CarreraUncheckedUpdateWithoutDocenteInput>
    create: XOR<CarreraCreateWithoutDocenteInput, CarreraUncheckedCreateWithoutDocenteInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutDocenteInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutDocenteInput, CarreraUncheckedUpdateWithoutDocenteInput>
  }

  export type CarreraUpdateWithoutDocenteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
    matriculas?: MatriculaUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCarreraNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type DocenteUpsertWithoutCarreraDocenteInput = {
    update: XOR<DocenteUpdateWithoutCarreraDocenteInput, DocenteUncheckedUpdateWithoutCarreraDocenteInput>
    create: XOR<DocenteCreateWithoutCarreraDocenteInput, DocenteUncheckedCreateWithoutCarreraDocenteInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutCarreraDocenteInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutCarreraDocenteInput, DocenteUncheckedUpdateWithoutCarreraDocenteInput>
  }

  export type DocenteUpdateWithoutCarreraDocenteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictaUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateWithoutCarreraDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    dictan?: DictaUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type UsuarioRolCreateWithoutUsuarioInput = {
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioRolUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rolId: number
  }

  export type UsuarioRolCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    create: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioRolCreateManyUsuarioInputEnvelope = {
    data: UsuarioRolCreateManyUsuarioInput | UsuarioRolCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    update: XOR<UsuarioRolUpdateWithoutUsuarioInput, UsuarioRolUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    data: XOR<UsuarioRolUpdateWithoutUsuarioInput, UsuarioRolUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioRolUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioRolScalarWhereInput
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioRolScalarWhereInput = {
    AND?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
    OR?: UsuarioRolScalarWhereInput[]
    NOT?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
    id?: IntFilter<"UsuarioRol"> | number
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
  }

  export type UsuarioRolCreateWithoutRolInput = {
    usuario: UsuarioCreateNestedOneWithoutRolesInput
  }

  export type UsuarioRolUncheckedCreateWithoutRolInput = {
    id?: number
    usuarioId: number
  }

  export type UsuarioRolCreateOrConnectWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    create: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput>
  }

  export type UsuarioRolCreateManyRolInputEnvelope = {
    data: UsuarioRolCreateManyRolInput | UsuarioRolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoCreateWithoutRolInput = {
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateWithoutRolInput = {
    id?: number
    permisoId: number
  }

  export type RolPermisoCreateOrConnectWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoCreateManyRolInputEnvelope = {
    data: RolPermisoCreateManyRolInput | RolPermisoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioRolUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    update: XOR<UsuarioRolUpdateWithoutRolInput, UsuarioRolUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput>
  }

  export type UsuarioRolUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    data: XOR<UsuarioRolUpdateWithoutRolInput, UsuarioRolUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioRolUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioRolScalarWhereInput
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutRolInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoScalarWhereInput = {
    AND?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    OR?: RolPermisoScalarWhereInput[]
    NOT?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
  }

  export type RolPermisoCreateWithoutPermisoInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type RolPermisoUncheckedCreateWithoutPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoCreateOrConnectWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoCreateManyPermisoInputEnvelope = {
    data: RolPermisoCreateManyPermisoInput | RolPermisoCreateManyPermisoInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutPermisoInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutPermisoInput>
  }

  export type UsuarioCreateWithoutRolesInput = {
    email: string
    password: string
    creadoEn?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutRolesInput = {
    id?: number
    email: string
    password: string
    creadoEn?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutRolesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutRolesInput = {
    update: XOR<UsuarioUpdateWithoutRolesInput, UsuarioUncheckedUpdateWithoutRolesInput>
    create: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRolesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRolesInput, UsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type UsuarioUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateWithoutPermisosInput = {
    nombre: string
    usuarios?: UsuarioRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPermisosInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPermisosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
  }

  export type PermisoCreateWithoutRolesInput = {
    nombre: string
  }

  export type PermisoUncheckedCreateWithoutRolesInput = {
    id?: number
    nombre: string
  }

  export type PermisoCreateOrConnectWithoutRolesInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
  }

  export type RolUpsertWithoutPermisosInput = {
    update: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolUpdateWithoutPermisosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type PermisoUpsertWithoutRolesInput = {
    update: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    where?: PermisoWhereInput
  }

  export type PermisoUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermisoWhereInput
    data: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type PermisoUpdateWithoutRolesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaCreateManyCarreraInput = {
    id?: number
    nombre: string
  }

  export type MatriculaCreateManyCarreraInput = {
    id?: number
    estudianteId: number
  }

  export type AlumnoCreateManyCarreraInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type carreradocenteCreateManyCarreraInput = {
    id?: number
    docenteId: number
  }

  export type MateriaUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUpdateManyWithoutMateriaNestedInput
    dictan?: DictaUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutMateriaNestedInput
    dictan?: DictaUncheckedUpdateManyWithoutMateriaNestedInput
    Alumno?: AlumnoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MatriculaUpdateWithoutCarreraInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoUpdateWithoutCarreraInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutAlumnoNestedInput
    materia?: MateriaUpdateOneRequiredWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type carreradocenteUpdateWithoutCarreraInput = {
    docente?: DocenteUpdateOneRequiredWithoutCarreraDocenteNestedInput
  }

  export type carreradocenteUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type carreradocenteUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateManyMateriaInput = {
    id?: number
    estudianteId: number
  }

  export type DictaCreateManyMateriaInput = {
    id?: number
    docenteId: number
  }

  export type AlumnoCreateManyMateriaInput = {
    id?: number
    estudianteId: number
    carreraId: number
  }

  export type InscripcionUpdateWithoutMateriaInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type DictaUpdateWithoutMateriaInput = {
    docente?: DocenteUpdateOneRequiredWithoutDictanNestedInput
  }

  export type DictaUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type DictaUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoUpdateWithoutMateriaInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutAlumnoNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaCreateManyEstudianteInput = {
    id?: number
    carreraId: number
  }

  export type InscripcionCreateManyEstudianteInput = {
    id?: number
    materiaId: number
  }

  export type AlumnoCreateManyEstudianteInput = {
    id?: number
    carreraId: number
    materiaId: number
  }

  export type MatriculaUpdateWithoutEstudianteInput = {
    carrera?: CarreraUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUpdateWithoutEstudianteInput = {
    materia?: MateriaUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoUpdateWithoutEstudianteInput = {
    carrera?: CarreraUpdateOneRequiredWithoutAlumnoNestedInput
    materia?: MateriaUpdateOneRequiredWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictaCreateManyDocenteInput = {
    id?: number
    materiaId: number
  }

  export type carreradocenteCreateManyDocenteInput = {
    id?: number
    carreraId: number
  }

  export type DictaUpdateWithoutDocenteInput = {
    materia?: MateriaUpdateOneRequiredWithoutDictanNestedInput
  }

  export type DictaUncheckedUpdateWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type DictaUncheckedUpdateManyWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type carreradocenteUpdateWithoutDocenteInput = {
    carrera?: CarreraUpdateOneRequiredWithoutDocenteNestedInput
  }

  export type carreradocenteUncheckedUpdateWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type carreradocenteUncheckedUpdateManyWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolCreateManyUsuarioInput = {
    id?: number
    rolId: number
  }

  export type UsuarioRolUpdateWithoutUsuarioInput = {
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioRolUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolCreateManyRolInput = {
    id?: number
    usuarioId: number
  }

  export type RolPermisoCreateManyRolInput = {
    id?: number
    permisoId: number
  }

  export type UsuarioRolUpdateWithoutRolInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UsuarioRolUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioRolUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUpdateWithoutRolInput = {
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoUpdateWithoutPermisoInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
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