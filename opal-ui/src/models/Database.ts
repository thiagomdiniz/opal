// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.12.4
// source: Database.proto

/* eslint-disable */
import { type JdbcDatasourceSettingsDto } from './Magma';

export const protobufPackage = 'Database';

export interface JdbcDriverDto {
  /** e.g., "MySQL 5.1" */
  driverName: string;
  /** e.g., "com.mysql.jdbc.Driver" */
  driverClass: string;
  /** e.g., "jdbc:mysql://{hostname}:{port}/{databaseName}" */
  jdbcUrlTemplate: string;
  version?: string | undefined;
  /** e.g., "jdbc:mysql://localhost:3306/opal" */
  jdbcUrlExample: string;
  supportedSchemas: string[];
}

export interface DatabasesStatusDto {
  hasIdentifiers: boolean;
  hasStorage: boolean;
}

export interface DatabaseDto {
  name: string;
  hasDatasource?: boolean | undefined;
  defaultStorage: boolean;
  usage: DatabaseDto_Usage;
  usedForIdentifiers?: boolean | undefined;
  sqlSettings?: SqlSettingsDto | undefined;
  mongoDbSettings?: MongoDbSettingsDto | undefined;
}

export enum DatabaseDto_Usage {
  IMPORT = 'IMPORT',
  STORAGE = 'STORAGE',
  EXPORT = 'EXPORT',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface SqlSettingsDto {
  /** jdbc:{mysql|postgresql}://{hostname}:{port}/{databaseName} */
  url: string;
  driverClass: string;
  username: string;
  password?: string | undefined;
  properties?: string | undefined;
  sqlSchema: SqlSettingsDto_SqlSchema;
  jdbcDatasourceSettings?: JdbcDatasourceSettingsDto | undefined;
}

export enum SqlSettingsDto_SqlSchema {
  HIBERNATE = 'HIBERNATE',
  JDBC = 'JDBC',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface MongoDbSettingsDto {
  /** mongodb://{hostname}:{port}/{databaseName} */
  url: string;
  username?: string | undefined;
  password?: string | undefined;
  properties?: string | undefined;
  batchSize?: number | undefined;
}
