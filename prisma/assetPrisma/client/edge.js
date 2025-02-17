
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.InitGameScalarFieldEnum = {
  id: 'id',
  gold: 'gold',
  towerAmountLimit: 'towerAmountLimit',
  inhibitorHp: 'inhibitorHp',
  inhibitorHpLimit: 'inhibitorHpLimit',
  inhibitorStatus: 'inhibitorStatus',
  inhibitorInterval: 'inhibitorInterval',
  monsterCount: 'monsterCount',
  monsterCountLimit: 'monsterCountLimit',
  stageChangeInterval: 'stageChangeInterval'
};

exports.Prisma.MonsterScalarFieldEnum = {
  id: 'id',
  hp: 'hp',
  attack: 'attack',
  speed: 'speed',
  score: 'score',
  gold: 'gold',
  stage: 'stage',
  cycle: 'cycle'
};

exports.Prisma.SpecialMonsterScalarFieldEnum = {
  id: 'id',
  hp: 'hp',
  attack: 'attack',
  speed: 'speed',
  score: 'score',
  gold: 'gold',
  stage: 'stage',
  cycle: 'cycle'
};

exports.Prisma.TowerScalarFieldEnum = {
  id: 'id',
  towerName: 'towerName',
  attackPower: 'attackPower',
  attackSpeed: 'attackSpeed',
  attackRange: 'attackRange',
  attackType: 'attackType',
  towerPrice: 'towerPrice',
  sellPriceRate: 'sellPriceRate',
  upgradeAttackPower: 'upgradeAttackPower',
  upgradePrice: 'upgradePrice',
  upgradeAddPrice: 'upgradeAddPrice'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.attackType = exports.$Enums.attackType = {
  singleAttack: 'singleAttack',
  multiAttack: 'multiAttack',
  heal: 'heal'
};

exports.Prisma.ModelName = {
  initGame: 'initGame',
  monster: 'monster',
  specialMonster: 'specialMonster',
  tower: 'tower'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\appla\\Desktop\\GitHub\\TowerDefence\\prisma\\assetPrisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\appla\\Desktop\\GitHub\\TowerDefence\\prisma\\schemaAsset.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.20.0",
  "engineVersion": "06fc58a368dc7be9fbbbe894adf8d445d208c284",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_ASSET",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../prisma/assetPrisma/client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_ASSET\")\n}\n\nenum attackType {\n  singleAttack\n  multiAttack\n  heal\n}\n\nmodel initGame {\n  id                  Int    @id @default(autoincrement()) @map(\"Id\")\n  gold                Int    @map(\"gold\")\n  towerAmountLimit    Int    @default(6) @map(\"towerAmountLimit\")\n  inhibitorHp         Int    @map(\"inhibitorHp\")\n  inhibitorHpLimit    Int    @default(1000) @map(\"inhibitorHpLimit\")\n  inhibitorStatus     String @default(\"normal\") @map(\"inhibitorStatus\")\n  inhibitorInterval   Int    @map(\"inhibitorInterval\")\n  monsterCount        Int    @default(0) @map(\"monsterCount\")\n  monsterCountLimit   Int    @default(200) @map(\"monsterCountLimit\")\n  stageChangeInterval Int    @map(\"stageChangeInterval\")\n\n  @@map(\"InitGame\")\n}\n\nmodel monster {\n  id     Int @id @default(autoincrement()) @map(\"Id\")\n  hp     Int @map(\"hp\")\n  attack Int @map(\"attack\")\n  speed  Int @map(\"speed\")\n  score  Int @map(\"score\")\n  gold   Int @map(\"gold\")\n  stage  Int @map(\"stage\")\n  cycle  Int @map(\"cycle\")\n\n  @@map(\"Monster\")\n}\n\nmodel specialMonster {\n  id     Int  @id @default(autoincrement()) @map(\"Id\")\n  hp     Int  @map(\"hp\")\n  attack Int  @map(\"attack\")\n  speed  Int  @map(\"speed\")\n  score  Int  @map(\"score\")\n  gold   Int  @map(\"gold\")\n  stage  Int  @map(\"stage\")\n  cycle  Int? @map(\"cycle\")\n\n  @@map(\"SpecialMonster\")\n}\n\nmodel tower {\n  id                 Int        @id @default(autoincrement()) @map(\"Id\")\n  towerName          String     @map(\"towerName\")\n  attackPower        Int        @map(\"attackPower\")\n  attackSpeed        Int        @map(\"attackSpeed\")\n  attackRange        Int        @map(\"attackRange\")\n  attackType         attackType @map(\"attackType\")\n  towerPrice         Int        @map(\"towerPrice\")\n  sellPriceRate      Float      @map(\"sellPriceRate\")\n  upgradeAttackPower Int        @map(\"upgradeAttackPower\")\n  upgradePrice       Int        @map(\"upgradePrice\")\n  upgradeAddPrice    Int        @map(\"upgradeAddPrice\")\n\n  @@map(\"Tower\")\n}\n",
  "inlineSchemaHash": "165f04c3a1e2223752066d712cc983d0dcd30da4c535b8583ed6d7b04561c741",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"initGame\":{\"dbName\":\"InitGame\",\"fields\":[{\"name\":\"id\",\"dbName\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"dbName\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"towerAmountLimit\",\"dbName\":\"towerAmountLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":6,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inhibitorHp\",\"dbName\":\"inhibitorHp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inhibitorHpLimit\",\"dbName\":\"inhibitorHpLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1000,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inhibitorStatus\",\"dbName\":\"inhibitorStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"normal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inhibitorInterval\",\"dbName\":\"inhibitorInterval\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monsterCount\",\"dbName\":\"monsterCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monsterCountLimit\",\"dbName\":\"monsterCountLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":200,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stageChangeInterval\",\"dbName\":\"stageChangeInterval\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"monster\":{\"dbName\":\"Monster\",\"fields\":[{\"name\":\"id\",\"dbName\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hp\",\"dbName\":\"hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attack\",\"dbName\":\"attack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speed\",\"dbName\":\"speed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"dbName\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"dbName\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage\",\"dbName\":\"stage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cycle\",\"dbName\":\"cycle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"specialMonster\":{\"dbName\":\"SpecialMonster\",\"fields\":[{\"name\":\"id\",\"dbName\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hp\",\"dbName\":\"hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attack\",\"dbName\":\"attack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speed\",\"dbName\":\"speed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"dbName\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"dbName\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage\",\"dbName\":\"stage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cycle\",\"dbName\":\"cycle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tower\":{\"dbName\":\"Tower\",\"fields\":[{\"name\":\"id\",\"dbName\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"towerName\",\"dbName\":\"towerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attackPower\",\"dbName\":\"attackPower\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attackSpeed\",\"dbName\":\"attackSpeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attackRange\",\"dbName\":\"attackRange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attackType\",\"dbName\":\"attackType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"attackType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"towerPrice\",\"dbName\":\"towerPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellPriceRate\",\"dbName\":\"sellPriceRate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upgradeAttackPower\",\"dbName\":\"upgradeAttackPower\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upgradePrice\",\"dbName\":\"upgradePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upgradeAddPrice\",\"dbName\":\"upgradeAddPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"attackType\":{\"values\":[{\"name\":\"singleAttack\",\"dbName\":null},{\"name\":\"multiAttack\",\"dbName\":null},{\"name\":\"heal\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_ASSET: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_ASSET'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_ASSET || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

