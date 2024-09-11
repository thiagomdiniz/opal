// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.12.4
// source: DataShield.proto

/* eslint-disable */

export const protobufPackage = 'DataShield';

export interface DataShieldProfileDto {
  name: string;
  cluster: string;
  enabled: boolean;
  restrictedAccess: boolean;
  rParser?: string | undefined;
}

export interface DataShieldMethodDto {
  name: string;
}

export interface DataShieldROptionDto {
  name: string;
  value: string;
}

export interface RFunctionDataShieldMethodDto {
  func: string;
  rPackage?: string | undefined;
  version?: string | undefined;
}

export interface RScriptDataShieldMethodDto {
  script: string;
}

export interface DataShieldPackageMethodsDto {
  name: string;
  aggregate: DataShieldMethodDto[];
  assign: DataShieldMethodDto[];
}
