// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.12.4
// source: Opal.proto

/* eslint-disable */

export const protobufPackage = 'Opal';

export enum KeyType {
  KEY_PAIR = 'KEY_PAIR',
  CERTIFICATE = 'CERTIFICATE',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum AclAction {
  DATASOURCE_ALL = 'DATASOURCE_ALL',
  DATASOURCE_VIEW = 'DATASOURCE_VIEW',
  TABLE_ADD = 'TABLE_ADD',
  TABLE_ALL = 'TABLE_ALL',
  TABLE_READ = 'TABLE_READ',
  TABLE_VALUES = 'TABLE_VALUES',
  TABLE_EDIT = 'TABLE_EDIT',
  VARIABLE_READ = 'VARIABLE_READ',
  DATABASES_ALL = 'DATABASES_ALL',
  R_USE = 'R_USE',
  DATASHIELD_ALL = 'DATASHIELD_ALL',
  DATASHIELD_USE = 'DATASHIELD_USE',
  FILES_ALL = 'FILES_ALL',
  FILES_READ = 'FILES_READ',
  FILES_SHARE = 'FILES_SHARE',
  PROJECT_ALL = 'PROJECT_ALL',
  TABLE_VALUES_EDIT = 'TABLE_VALUES_EDIT',
  PROJECT_ADD = 'PROJECT_ADD',
  SYSTEM_ALL = 'SYSTEM_ALL',
  VCF_STORE_VIEW = 'VCF_STORE_VIEW',
  VCF_STORE_VALUES = 'VCF_STORE_VALUES',
  VCF_STORE_ALL = 'VCF_STORE_ALL',
  RESOURCES_ALL = 'RESOURCES_ALL',
  RESOURCES_VIEW = 'RESOURCES_VIEW',
  RESOURCE_ALL = 'RESOURCE_ALL',
  RESOURCE_VIEW = 'RESOURCE_VIEW',
  DATASHIELD_PROFILE_USE = 'DATASHIELD_PROFILE_USE',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum ServiceStatus {
  RUNNING = 'RUNNING',
  STOPPED = 'STOPPED',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum TableIndexationStatus {
  /** NOT_INDEXED - this table is not indexable */
  NOT_INDEXED = 'NOT_INDEXED',
  /** OUTDATED - this table is indexable, index is not up-to-date and is not in progress */
  OUTDATED = 'OUTDATED',
  /** IN_PROGRESS - this table is indexable, index is not up-to-date and is in progress */
  IN_PROGRESS = 'IN_PROGRESS',
  /** UPTODATE - this table is indexable and index is up-to-date */
  UPTODATE = 'UPTODATE',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum ScheduleType {
  NOT_SCHEDULED = 'NOT_SCHEDULED',
  MINUTES_5 = 'MINUTES_5',
  MINUTES_15 = 'MINUTES_15',
  MINUTES_30 = 'MINUTES_30',
  HOURLY = 'HOURLY',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export enum Day {
  SUNDAY = 'SUNDAY',
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface KeyDto {
  alias: string;
  certificate: string;
  keyType: KeyType;
}

export interface KeyForm {
  alias: string;
  privateForm?: PrivateKeyForm | undefined;
  privateImport?: string | undefined;
  publicForm?: PublicKeyForm | undefined;
  publicImport?: string | undefined;
  certificateFile?: string | undefined;
  keyType: KeyType;
}

export interface PrivateKeyForm {
  algo: string;
  size: number;
}

export interface PublicKeyForm {
  name: string;
  organizationalUnit: string;
  organization: string;
  locality: string;
  state: string;
  country: string;
}

export interface FileDto {
  name: string;
  path: string;
  type: FileDto_FileType;
  children: FileDto[];
  size?: number | undefined;
  lastModifiedTime?: number | undefined;
  readable: boolean;
  writable: boolean;
}

export enum FileDto_FileType {
  FILE = 'FILE',
  FOLDER = 'FOLDER',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface LocaleDto {
  /** Locale.toString() */
  name: string;
  /** Locale.getDisplayName(clientLocale) */
  display?: string | undefined;
}

export interface ParameterDto {
  key: string;
  value: string;
}

export interface SuggestionsDto {
  query: string;
  suggestions: string[];
}

export interface Subject {
  principal: string;
  type: Subject_SubjectType;
  otpRequired?: boolean | undefined;
}

export enum Subject_SubjectType {
  USER = 'USER',
  GROUP = 'GROUP',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface Acl {
  subject: Subject | undefined;
  resource: string;
  actions: string[];
  domain: string;
}

export interface Acls {
  subject: Subject | undefined;
  acls: Acl[];
}

export interface OpalMap {
  keys: string[];
  values: string[];
}

export interface EntryDto {
  key: string;
  value?: string | undefined;
  values: string[];
}

export interface ServiceDto {
  name: string;
  status: ServiceStatus;
  link: string;
}

export interface ServiceCfgDto {
  /** service name */
  name: string;
}

export interface ESCfgDto {
  clusterName: string;
  indexName?: string | undefined;
  dataNode: boolean;
  shards: number;
  replicas: number;
  settings?: string | undefined;
  enabled?: boolean | undefined;
}

export interface TableIndexStatusDto {
  datasource: string;
  table: string;
  indexCreated?: string | undefined;
  indexLastUpdate?: string | undefined;
  tableLastUpdate?: string | undefined;
  /** if no schedule is defined in the index manager configuration, the default one is returned */
  schedule: ScheduleDto | undefined;
  status: TableIndexationStatus;
  progress?: number | undefined;
  /** link to this index */
  link: string;
}

export interface ScheduleDto {
  type: ScheduleType;
  day?: Day | undefined;
  hours?: number | undefined;
  minutes?: number | undefined;
}

export interface PasswordDto {
  name: string;
  oldPassword: string;
  newPassword: string;
}

export interface SubjectCredentialsDto {
  name: string;
  authenticationType: SubjectCredentialsDto_AuthenticationType;
  /** only set when the password is to be updated on POST or PUT */
  password?: string | undefined;
  certificate?: Uint8Array | undefined;
  groups: string[];
  enabled?: boolean | undefined;
}

export enum SubjectCredentialsDto_AuthenticationType {
  PASSWORD = 'PASSWORD',
  CERTIFICATE = 'CERTIFICATE',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface GroupDto {
  name: string;
  subjectCredentials: string[];
}

export interface SubjectProfileDto {
  principal: string;
  realm: string;
  created: string;
  lastUpdate: string;
  accountUrl?: string | undefined;
  groups: string[];
  otpEnabled?: boolean | undefined;
  otpRequired?: boolean | undefined;
}

export interface SubjectTokenDto {
  principal?: string | undefined;
  token?: string | undefined;
  name: string;
  projects: string[];
  commands: string[];
  useR?: boolean | undefined;
  useDatashield?: boolean | undefined;
  useSQL?: boolean | undefined;
  sysAdmin?: boolean | undefined;
  created?: string | undefined;
  lastUpdate?: string | undefined;
  createProject?: boolean | undefined;
  updateProject?: boolean | undefined;
  deleteProject?: boolean | undefined;
  access?: SubjectTokenDto_AccessType | undefined;
  inactive?: boolean | undefined;
  inactiveAt?: string | undefined;
  expiresAt?: string | undefined;
}

export enum SubjectTokenDto_AccessType {
  READ_NO_VALUES = 'READ_NO_VALUES',
  READ = 'READ',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface LinkDto {
  rel: string;
  link: string;
}

export interface BookmarkDto {
  resource: string;
  type: BookmarkDto_ResourceType;
  links: LinkDto[];
  created: string;
}

export enum BookmarkDto_ResourceType {
  PROJECT = 'PROJECT',
  TABLE = 'TABLE',
  VARIABLE = 'VARIABLE',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

/** Extracts from RuntimeMXBean */
export interface OpalEnv {
  /** opal version */
  version: string;
  vmName: string;
  vmVendor: string;
  vmVersion: string;
  javaVersion: string;
  systemProperties: EntryDto[];
}

/** Extracts from MemoryMXBean, ThreadMXBean and GarbageCollectorMXBeans */
export interface OpalStatus {
  timestamp: number;
  uptime: number;
  heapMemory: OpalStatus_MemoryUsage | undefined;
  nonHeapMemory: OpalStatus_MemoryUsage | undefined;
  threads: OpalStatus_ThreadsUsage | undefined;
  gcs: OpalStatus_GarbageCollectorUsage[];
}

/** http://docs.oracle.com/javase/7/docs/api/java/lang/management/MemoryUsage.html */
export interface OpalStatus_MemoryUsage {
  init: number;
  used: number;
  committed: number;
  max: number;
}

export interface OpalStatus_ThreadsUsage {
  count: number;
  peak: number;
}

export interface OpalStatus_GarbageCollectorUsage {
  name: string;
  collectionCount: number;
  collectionTime: number;
}

export interface GeneralConf {
  name: string;
  /** replaces the property org.obiba.opal.languages */
  languages: string[];
  /** replaces the property org.obiba.opal.charset.default */
  defaultCharSet: string;
  publicURL?: string | undefined;
  logoutURL?: string | undefined;
  enforced2FA: boolean;
  allowRPackageManagement: boolean;
}

export interface AttributeConf {
  namespace: string;
  /** description of this set of attributes */
  description?: string | undefined;
  conf: AttributeConf_Attr[];
}

export interface AttributeConf_Attr {
  name: string;
  /** enumerated values if any */
  values: string[];
}

export interface LocaleTextDto {
  locale: string;
  text: string;
}

export interface TermDto {
  name: string;
  title: LocaleTextDto[];
  description: LocaleTextDto[];
  terms: TermDto[];
  keywords: LocaleTextDto[];
  attributes: EntryDto[];
}

export interface VocabularyDto {
  name: string;
  title: LocaleTextDto[];
  description: LocaleTextDto[];
  /** allows the corresponding attribute name to be applied multiple times */
  repeatable: boolean;
  terms: TermDto[];
  keywords: LocaleTextDto[];
  attributes: EntryDto[];
}

export interface TaxonomiesDto {
  summaries: TaxonomiesDto_TaxonomySummaryDto[];
}

export interface TaxonomiesDto_TaxonomySummaryDto {
  name: string;
  title: LocaleTextDto[];
  vocabularySummaries: TaxonomiesDto_TaxonomySummaryDto_VocabularySummaryDto[];
}

export interface TaxonomiesDto_TaxonomySummaryDto_VocabularySummaryDto {
  name: string;
  title: LocaleTextDto[];
}

export interface TaxonomyDto {
  /** mapped to attribute namespace */
  name: string;
  author?: string | undefined;
  license?: string | undefined;
  title: LocaleTextDto[];
  description: LocaleTextDto[];
  vocabularies: VocabularyDto[];
  keywords: LocaleTextDto[];
  attributes: EntryDto[];
}

export interface TaxonomyBundleDto {
  target: string;
  taxonomy: TaxonomyDto | undefined;
}

export interface OpalConf {
  general: GeneralConf | undefined;
  taxonomies: TaxonomyDto[];
}

export interface VcsTagsInfoDto {
  names: string[];
}

export interface VcsCommitInfosDto {
  commitInfos: VcsCommitInfoDto[];
}

export interface VcsCommitInfoDto {
  author: string;
  date: string;
  comment: string;
  commitId: string;
  diffEntries: string[];
  blob?: string | undefined;
  /** head of the commit tree */
  isHead?: boolean | undefined;
  /** current (latest) commit for a given path */
  isCurrent?: boolean | undefined;
}

export interface IDProviderDto {
  name: string;
  label?: string | undefined;
  providerUrl?: string | undefined;
  clientId: string;
  secret: string;
  discoveryURI: string;
  scope: string;
  useNonce: boolean;
  connectTimeout?: number | undefined;
  readTimeout?: number | undefined;
  groups?: string | undefined;
  groupsClaim?: string | undefined;
  parameters: ParameterDto[];
  enabled: boolean;
  usernameClaim?: string | undefined;
  groupsScript?: string | undefined;
  callbackURL?: string | undefined;
  useLogout?: boolean | undefined;
}

export interface AuthProviderDto {
  name: string;
  label?: string | undefined;
  providerUrl?: string | undefined;
}

export interface NewsDto {
  notes: NewsDto_NoteDto[];
}

export interface NewsDto_NoteDto {
  title: string;
  link: string;
  date: string;
  summary?: string | undefined;
}
