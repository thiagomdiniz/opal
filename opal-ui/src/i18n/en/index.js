export default {
  auth: {
    title: 'Sign in to start your session',
    password: 'Password',
    signin: 'Sign in',
    signout: 'Sign out',
    username: 'User name',
    totp_help: 'Open the authenticator mobile app and scan this QR code to initialise your PIN code generator.',
    code: 'Code',
    code_hint: 'Enter the 6-digits PIN code.',
    validate: 'Validate',
  },
  auth_types: {
    PASSWORD: 'Password',
    CERTIFICATE: 'Certificate',
    UNRECOGNIZED: 'Unrecognized',
  },
  error: {
    Forbidden: 'This operation is forbidden',
    NoSuchValueTableInDatasource: 'The table does not exist or you do not have access to it',
    PasswordTooWeak: 'Password is too weak',
    IllegalArgument: 'Invalid data',
    Conflict: 'Conflicting entry detected',
    BannedUser: 'Too many sign in failures, user {0} is banned for {1} seconds',
    InvalidCredentials: 'Invalid credentials, please try again',
    TableAlreadyExists: 'The table already exists'
  },
  importer: {
    file: {
      csv: 'This format expects the file to use a "delimiter separated values" format (default delimiter being comma). The first column should represent the participant identifiers and the subsequent column names identify variables.',
      opal: 'This format comes as a .zip file containing a folder for each table having: the full data dictionary in a XML file, a XML data file per entity.',
      haven_rds: 'This format expects the file to be a valid RDS file containing an R object of tibble class. This import procedure requires a functional R server with the tibble package installed.',
      haven_sas: 'This format expects the file to be a valid SAS file containing the variables and the data. This import procedure requires a functional R server with the tibble and haven packages installed.',
      haven_sast: 'This format expects the file to be a valid SAS Transport file containing the variables and the data. This import procedure requires a functional R server with the tibble and haven packages installed.',
      haven_spss: 'This format expects the file to be a valid SPSS file, optionally compressed, containing the variables and the data. This import procedure requires a functional R server with the tibble and haven packages installed.',
      haven_stata: 'This format expects the file to be a valid Stata file containing the variables and the data. This import procedure requires a functional R server with the tibble and haven packages installed.',
    },
    server: {
      opal: 'This format imports variable dictionaries and data from a remote Opal.',
    },
  },
  validation: {
    user: {
      name_required: 'Name is required',
      password_required: 'Password is required and must be at least 8 characters long',
      certificate_required: 'Certificate is required',
      confirm_password_required: 'Confirm password is required',
      passwords_not_matching: 'Passwords do not match',
    },
  },
  main: {
    brand: 'Opal',
    powered_by: 'Powered by',
  },
  actions: 'Actions',
  add_a_view: 'Add view',
  add_categories_range: 'Add category range',
  add_category: 'Add a category',
  add_folder: 'Add folder',
  add_table: 'Add table',
  add_tables: 'Add/update some tables',
  add: 'Add',
  administration: 'Administration',
  advanced_options: 'Advanced options',
  all_categories: 'All',
  all_projects: 'All',
  apps_caption: 'Manage external applications providing services',
  apps: 'Apps',
  attributes: 'Attributes',
  auth_method: 'Authentication method',
  authentication: 'Authentication',
  back: 'Back',
  bookmark_add: 'Add to favorites',
  bookmark_remove: 'Remove from favorites',
  bookmarks: 'Favorites',
  cancel_task_confirm: 'Are you sure you want to cancel this task?',
  cancel: 'Cancel',
  categories_range_hint: 'Use hyphen \'-\' to specify a range of numerical values and comma \',\' to separate names or ranges of names, for example: \'1-4, 9\', or \'A, B, C\'. Existing categories will not be overridden.',
  categories: 'Categories',
  certificate_placeholder: 'Paste your certificate here',
  certificate: 'Certificate',
  char_set: 'Character set',
  clear_tasks_confirm: 'No tasks to clear | Are you sure you want to clear this task? (does not apply if task is running) | Are you sure you want to clear these {count} tasks? (running tasks will not be affected)',
  clear: 'Clear',
  comment: 'Comment',
  configure_import_source: 'Configure import source',
  confirm: 'Confirm',
  content: 'Content',
  continue: 'Continue',
  copy_data: 'Copy data',
  copy_view: 'Copy view',
  copy_incremental_hint: 'Whether only new or updated data will be copied.',
  copy_incremental: 'Incremental',
  copy_nulls_hint: 'Whether a data can be overridden by a null value.',
  copy_nulls: 'Copy null values',
  copy_tables_data_task_created: 'Copy tables data task created with identifier [ {id} ].',
  copy_tables_data_text: 'No tables to be copied | One table will be copied | {count} tables will be copied.',
  copy_tables_data: 'Copy table data | Copy table data | Copy tables data',
  copy: 'Copy',
  created: 'Created on',
  credentials: 'Credentials',
  dashboard: 'Dashboard',
  data_access: 'Data access',
  data_analysis: 'Data analysis',
  data_file: 'Data file',
  data_format: 'Data format',
  data_management: 'Data management',
  data_server: 'Data server',
  databases_caption: 'Manage identifiers database and data databases for storage, import and export',
  databases: 'Databases',
  datashield_caption: 'Configure DataSHIELD, grant access to DataSHIELD service',
  datashield: 'DataSHIELD',
  date: 'Date',
  default_value_type: 'Default value type',
  delete_categories_confirm: '- | Are you sure you want to delete this category? | Are you sure you want to delete these {count} categories?',
  delete_files_confirm: '- | Are you sure you want to delete this file? | Are you sure you want to delete these {count} files?',
  delete_group_confirm: "Are you sure you want to delete group '{group}'?",
  delete_tables_confirm: 'No tables to delete | Are you sure you want to delete this table? | Are you sure you want to delete these {count} tables?',
  delete_user_confirm: "Are you sure you want to delete user '{user}'?",
  delete_variables_confirm: 'No variables to delete | Are you sure you want to delete this variable? | Are you sure you want to delete these {count} variables?',
  delete: 'Delete',
  density: 'Density',
  derivation_script: 'Derivation script',
  descriptive_statistics: 'Descriptive statistics',
  destination_folder: 'Destination folder',
  dictionary: 'Dictionary',
  disable: 'Disable',
  docs: 'Docs',
  documentation_cookbook: 'Documentation and cookbook',
  download_dictionaries: 'Download dictionaries',
  download_dictionary: 'Download dictionary',
  download_view: 'Download view',
  download_views_backup: 'Backup views',
  download: 'Download',
  edit_category: 'Edit category',
  edit_script: 'Edit script',
  edit_table: 'Edit table',
  edit_view: 'Edit view',
  edit: 'Edit',
  enable: 'Enable',
  enabled: 'Enabled',
  encrypt_file_content: 'Encrypt file content',
  encrypt_password_hint: 'The password must have at least 8 characters.',
  encrypt_password: 'Password',
  end_time: 'End time',
  entities: 'Entities',
  entity_type: 'Entity type',
  export_data: 'Export data',
  export_file: 'Export to file',
  export_tables_task_created: 'Export tables task created with identifier [ {id} ].',
  export_tables_text: 'No tables to be exported | One table will be exported | {count} tables will be exported.',
  export: 'Export',
  extract: 'Extract',
  field_separator: 'Field separator',
  file_already_exists: 'File already exists',
  file_selection: 'File selection',
  file_system: 'System',
  files_caption: 'Manage files and folders, upload and download files',
  files: 'Files',
  frequencies: 'Frequencies',
  frequency: 'Frequency',
  from_row: 'From row',
  from_tables: 'From tables',
  full_name: 'Full name',
  full_summary: 'Full summary',
  general_settings_caption: 'Manage general server configuration',
  general_settings: 'General Settings',
  groups_hint: 'Select a group or type a new name and press \'Enter\'.',
  groups_info: 'Groups can only be defined through users. Removing a group removes users from this group.',
  groups: 'Groups',
  histogram: 'Histogram',
  id_column_hint: 'Name of the column that identifies the entity. If not provided, the first column will be selected as the entity IDs provider.',
  id_column_name_hint: 'Name of the column that identifies the entity. If not provided, the default name applies.',
  id_column_name: 'ID column name',
  id_column: 'ID column',
  id_mappings_caption: 'Manage identifiers mappings',
  id_mappings: 'Identifiers Mappings',
  id: 'ID',
  identity_providers_caption: 'Manage the OpenID Connect providers',
  identity_providers: 'Identity Providers',
  import_data_task_created: 'Import data task created with identifier [ {id} ].',
  import_data: 'Import data',
  import_file: 'Import from file',
  import_limit_hint: 'The maximum number of rows to import. If there is no limit or the limit is 0, all the records will be imported.',
  import_server: 'Import from server',
  import: 'Import',
  incremental_import_hint: 'Import only new or updated data.',
  incremental_import: 'Incremental import',
  index: 'Index',
  intervals: 'Intervals',
  is_missing_hint: 'Indicates that an observational value is missing.',
  is_missing: 'Missing',
  jvm_caption: 'Monitor Java virtual machine',
  jvm: 'Java Virtual Machine',
  kurtosis: 'Kurtosis',
  label: 'Label',
  labels: 'Labels',
  last_update: 'Last update',
  limit: 'Limit',
  locale: 'Locale',
  max: 'Max',
  mean: 'Mean',
  median: 'Median',
  merge_dictionaries_hint: 'When a table already exists, the variable characteristics (properties, categories, attributes) will be merged with the imported ones instead of being simply overridden. This allows to preserve the variable annotations on subsequent imports.',
  merge_dictionaries: 'Merge dictionaries',
  merge_variables_hint: 'If selected, variable with same name will be merged (properties, categories and attributes will be added or updated, no deletion). Else the provided variables will replace the existing ones.',
  merge_variables: 'Merge variables',
  message: 'Message',
  messages: 'Messages',
  mime_type: 'Mime type',
  min: 'Min',
  missings: 'Missings',
  move_down: 'Move down',
  move_up: 'Move up',
  my_profile: 'My profile',
  name: 'Name',
  namespace: 'Namespace',
  new_name: 'New name',
  no_bookmarks: 'No favorites',
  no_options: 'No options',
  non_missings: 'Non missings',
  normal_distribution: 'Normal distribution',
  normal: 'Normal',
  not_empty: 'Not empty',
  occurrence_group: 'Occurrence group',
  opal_url: 'Opal URL',
  optional: 'Optional',
  other_links: 'Other links',
  other: 'Other',
  owner: 'Owner',
  password_confirm: 'Confirm password',
  password_hint: "{'The password must be at least 8 characters long, including one digit, one uppercase letter, one lowercase letter, one special character (e.g., @#$%^&+=!), and no white space.'}",
  password: 'Password',
  percentage: 'Percentage',
  permissions: 'Permissions',
  personal_access_token: 'Personal access token',
  plugins_caption: 'Manage system plugins',
  plugins: 'Plugins',
  preview_import_source: 'Preview the data',
  profiles_caption: 'Manage user and application profiles',
  profiles: 'Profiles',
  progress: 'Progress',
  project_destination: 'Destination project',
  project: 'Project',
  projects_caption: 'Browse tables and variables, create views, import/export data and dictionaries.',
  projects: 'Projects',
  properties: 'Properties',
  quotation_mark: 'Quotation mark',
  range: 'Range',
  referenced_entity_type: 'Referenced entity type',
  refresh: 'Refresh',
  repeatable: 'Repeatable',
  reports_caption: 'Configure and schedule reports',
  reports: 'Reports',
  resources: 'Resources',
  restore_views: 'Restore views',
  rservers_caption: 'Configure R server, grant access to R service',
  rservers: 'R',
  sample_quantiles: 'Sample quantiles',
  sample: 'Sample',
  save: 'Save',
  script: 'Script',
  search_caption: 'Configure search engine, schedule table indexing',
  search: 'Search',
  select_columns: 'Select columns',
  select_dictionary_file_template: 'Use the following Excel template to add new variables or update existing ones:',
  select_dictionary_file: 'Select a dictionary of variables in Excel file format or a View XML file for batch edition of tables and variables.',
  select_files_to_upload: 'Select files to upload',
  select_import_options: 'Select import options',
  select_import_source: 'Select the source of data',
  select: 'Select',
  signin_with: 'Sign in with {provider}',
  size: 'Size',
  skewness: 'Skewness',
  source_code: 'Source code',
  sql: 'SQL',
  start_time: 'Start time',
  status: 'Status',
  std_dev: 'Standard deviation',
  sub_total: 'Sub total',
  sum: 'Sum',
  summary: 'Summary',
  sumsq: 'Sum of squares',
  system: 'System',
  table_name: 'Table name',
  table_references: 'Table references',
  table: 'Table',
  tables_views: 'Tables (views)',
  tables: 'Tables',
  tags: 'Tags',
  tasks_caption: 'Monitor and schedule tasks',
  tasks: 'Tasks',
  taxonomies_caption: 'Manage taxonomies for variable classification with controlled vocabularies',
  taxonomies: 'Taxonomies',
  theoretical_quantiles: 'Theoretical quantiles',
  title: 'Title',
  token: 'Token',
  total: 'Total',
  unique_name_hint: 'The name must be unique.',
  unit: 'Unit',
  unknown_error: 'An unknown error occurred',
  update: 'Update',
  upload: 'Upload',
  user_add_with_crt: 'Add user with certificate',
  user_add_with_pwd: 'Add user with password',
  user_add: 'Add user',
  user_delete: 'Delete user',
  user_disable: 'Disable user',
  user_edit: 'Edit user',
  user_enable: 'Enable user',
  user: 'User',
  username: 'User name',
  users_and_groups_caption: 'Add, update, remove users and groups',
  users_and_groups: 'Users and groups',
  users_filter_placeholder: 'Filter users by name, group or authentication type...',
  users_info: 'Users can login using a password or programmatically by providing a certificate in a secured connection (HTTPS).',
  users: 'Users',
  value_type: 'Value type',
  value: 'Value',
  values: 'Values',
  variables: 'Variables',
  variance: 'Variance',
};
