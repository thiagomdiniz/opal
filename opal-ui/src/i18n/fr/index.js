export default {
  '2fa': '2FA',
  app_configuration: {
    name_hint: 'Un nom pour l\'application qui représente votre organisation.',
    public_url_hint: 'L\'URL publique de l\'application. Cette URL est utilisée pour générer des liens dans les e-mails et les notifications.',
    logout_url_hint: 'Rediriger les utilisateurs vers cette URL après la déconnexion.',
    languages_hint: 'Les langues disponibles pour les dictionnaires.',
    default_charset_hint: 'Le jeu de caractères par défaut pour les dictionnaires.',
    enforced_2fa_hint: 'Activer l\'authentification à deux facteurs pour tous les utilisateurs. Ne s\'applique pas aux utilisateurs de registres extérieurs.',
  },
  auth: {
    title: 'Identifiez-vous pour commencer une session',
    password: 'Mot de passe',
    signin: 'Se connecter',
    signout: 'Se déconnecter',
    username: 'Nom d\'utilisateur',
    totp_help: 'Ouvrir l\'application mobile d\'authentification et scanner ce code QR pour initialiser votre générateur de code NIP.',
    code: 'Code',
    code_hint: 'Entrer le code à 6 chiffres.',
    validate: 'Valider',
  },
  auth_types: {
    PASSWORD: 'Mot de passe',
    CERTIFICATE: 'Certificat',
    UNRECOGNIZED: 'Non reconnu',
  },
  db: {
    data_databases: 'Bases de données de données',
    data_databases_info: 'Les bases de données de données sont utilisées pour stocker les données et les dictionnaires des tables.',
    id_database: 'Base de données d\'identifiants',
    id_database_info: 'La base de données d\'identifiants est utilisée pour stocker les différents identifiants des entités.',
    name_hint: 'Le nom de la base de données doit être unique.',
    usage_hint: 'Détermine si la base de données est utilisée pour stocker les données ou pour importer/exporter des données.',
    driver: 'Pilote',
    driver_hint: 'Détermine comment établir la connexion avec la base de données.',
    batch_size: 'Taille du lot',
    batch_size_hint: 'Le nombre maximum de lignes à traiter en une seule fois.',
    register_sqldb: 'Enregistrer une base de données SQL',
    register_mongodb: 'Enregistrer une base de données MongoDB',
    unregister: 'Retirer',
    unregister_confirm: 'Êtes-vous sûr de vouloir supprimer la base de données \'{name}\' ? Notez que les données NE SERONT PAS supprimées.',
    test_error: 'Test de connexion échoué',
    test_success: 'Test de connexion réussi',
    in_use: 'Utilisée',
    default_entity_type: 'Type d\'entité par défaut',
    default_entity_type_hint: 'Type d\'entité par défaut pour les tables nouvellement créées.',
    default_id_column: 'Colonne d\'identifiant',
    default_id_column_hint: 'Le nom de la colonne d\'identifiant des entités. Assurez-vous qu\'il ne sera pas en conflit avec un nom de variable.',
    default_updated_column: 'Colonne de mise à jour',
    default_updated_column_hint: 'Le nom de la colonne contenant la date de mise à jour des entités, requis pour effectuer des imports incrémentaux. Assurez-vous qu\'il ne sera pas en conflit avec un nom de variable.',
    use_metadata_tables: 'Avec les tables de variables',
    use_metadata_tables_hint: 'Exporter les dictionnaires de données dans les tables de méta-données.',
    save_error: 'Erreur lors de l\'enregistrement de la base de données',
  },
  datashield: {
    access_not_restricted: 'Tous les utilisateurs DataSHIELD peuvent accèder à ce profil.',
    access_restricted: 'Seuls les utilisateurs DataSHIELD autorisés peuvent accèder à ce profil.',
    aggregate_methods_info: 'Les méthodes d\'agrégation sont utilisées par DataSHIELD afin de compiler des données individuelles. Les mêmes méthodes d\'agrégation doivent être définies dans chaque serveur DataSHIELD qui sera impliqué dans un processus de calcul. Chaque méthode d\'agrégation est identifiée par un nom qui sera utilisé depuis le client DataSHIELD.',
    assign_methods_info: 'Les méthodes d\'affectation sont utilisées par DataSHIELD afin de transformer des données individuelles côté serveur. Les mêmes méthodes d\'affectation doivent être définies dans chaque serveur DataSHIELD qui sera impliqué dans un processus de calcul. Chaque méthode d\'affectation est identifiée par un nom qui sera utilisé depuis le client DataSHIELD.',
    audit: 'Audit',
    audit_info: 'Le journal de l\'activité Datashield peut être téléchargé.',
    caption: 'Configurer DataSHIELD, accorder l\'accès au service DataSHIELD',
    delete_methods_confirm: '- | Êtes-vous sûr de vouloir supprimer cette méthode DataSHIELD ? | Êtes-vous sûr de vouloir supprimer ces {count} méthodes DataSHIELD ?',
    delete_options_confirm: ' - | Êtes-vous sûr de vouloir supprimer cette option DataSHIELD ? | Êtes-vous sûr de vouloir supprimer ces {count} options DataSHIELD ?',
    download_all_logs: 'Télécharger tous les logs',
    download_latest_logs: 'Télécharger les derniers logs',
    method_func_hint: 'La fonction R étant effectivement appellée côté serveur. Assurez vous qu\'il n\'y a pas d\'ambiguité en spécifiant le package R package dans lequel elle est définie.',
    method_name_hint: 'Le nom de la méthode DataSHIELD doit être unique. C\'est le nom de la fonction autorisée pouvant être appelée par un client DataSHIELD.',
    method_script_hint: 'Le code de la fonction R adhoc qui sera appelée.',
    option_name_hint: 'Nom de l\'option R.',
    option_value_hint: 'Valeur de l\'option R. Une syntaxe R est attendue : par exemple utiliser des guillemets pour les chaînes de caractère.',
    options_info: 'Les options R sont appliquées lors de la création de la session DataSHIELD et affectent le comportement de certaines méthodes DataSHIELD.',
    packages_info: 'Les packages DataSHIELD sont des packages R qui fournissent des fonctionnalités DataSHIELD. Ils sont installés sur les serveurs R et sont utilisés sont utiliséspar les clients DataSHIELD pour effectuer des analyses.',
    profile_cluster_hint: 'Le cluster de serveurs R pour ce profil DataSHIELD.',
    profile_delete_confirm: 'Êtes-vous sûr de vouloir supprimer ce profil DataSHIELD ?',
    profile_missing_cluster: 'Le cluster de serveurs R pour ce profil DataSHIELD n\'existe pas.',
    profile_name_hint: 'Le nom du profil DataSHIELD doit être unique. C\'est le nom qui sera utilisé par le client DataSHIELD pour démarrer une session DataSHIELD.',
    profile_settings_help: 'Les paramètres du profil DataSHIELD sont utilisés pour définir les méthodes d\'agrégation/affectation qui peuvent être appelées par un client DataSHIELD et les options R qui seront appliquées à la session DataSHIELD du serveur R.',
    profile_access_toggle: 'Restreindre l\'utilisation de ce profil',
    profile_status_toggle: 'Activer or désactivater le profil',
    profiles_info: 'Un profil DataSHIELD est associé à un cluster de serveurs R: les méthodes et options extraits des packages DataSHIELD installés définissent la configuration du profil. Celle-ci peut être modifiée par la suite. ',
    settings_init_help: 'Selectionner quels packages DataSHIELD auront leurs méthodes et options appliqués à ce profil.',
    settings_init: 'Initialiser la configuration DataSHIELD du profil à partir des packages DataSHIELD sélectionnés',
  },
  error: {
    Forbidden: 'L\'operation est interdite',
    NoSuchValueTableInDatasource: 'La table n\'existe pas ou vous n\'y avez pas accès',
    PasswordTooWeak: 'Mot de passe trop faible',
    IllegalArgument: 'Données non valides',
    Conflict: 'Conflit détecté',
    BannedUser: 'Trop d\'erreurs d\'identification, l\'utilisateur {0} est banni pour une durée de {1} secondes',
    InvalidCredentials: 'Nom d\'utilisateur ou mot de passe incorrect, veuillez réessayer',
    TableAlreadyExists: 'La table existe déjà'
  },
  importer: {
    file: {
      csv: 'Ce format s\'attend à ce que le fichier utilise un format "valeurs séparées par des délimiteurs" (le délimiteur par défaut étant la virgule). La première colonne doit représenter les identifiants des participants et les noms de colonnes suivantes identifient les variables.',
      opal: 'Ce format se présente sous la forme d\'un fichier .zip contenant un dossier pour chaque table contenant : le dictionnaire de données complet dans un fichier XML, un fichier de données XML par entité.',
      haven_rds: 'Ce format s\'attend à ce que le fichier soit un fichier RDS valide contenant un objet R de classe tibble. Cette procédure d\'importation nécessite un serveur R fonctionnel avec le package tibble installé.',
      haven_sas: 'Ce format s\'attend à ce que le fichier soit un fichier SAS valide contenant les variables et les données. Cette procédure d\'importation nécessite un serveur R fonctionnel avec les paquets tibble et haven installés.',
      haven_sast: 'Ce format s\'attend à ce que le fichier soit un fichier de transport SAS valide contenant les variables et les données. Cette procédure d\'importation nécessite un serveur R fonctionnel avec les paquets tibble et haven installés.',
      haven_spss: 'Ce format s\'attend à ce que le fichier soit un fichier SPSS valide, éventuellement compressé, contenant les variables et les données. Cette procédure d\'importation nécessite un serveur R fonctionnel avec les paquets tibble et haven installés.',
      haven_stata: 'Ce format s\'attend à ce que le fichier soit un fichier Stata valide contenant les variables et les données. Cette procédure d\'importation nécessite un serveur R fonctionnel avec les paquets tibble et haven installés.',
    },
    server: {
      opal: 'Ce format importe des dictionnaires de variables et des données depuis un Opal distant.',
    },
  },
  acls: {
    // global permissions
    PROJECT_ADD: {
      label: 'Ajouter des projets',
      description: 'Ajouter de nouveaux projets et ainsi pouvoir importer/exporter des données dans ces projets.',
    },
    SYSTEM_ALL: {
      label: 'Administrer le système',
      description: 'Accès complet à toutes les ressources du système (utilisateurs de confiance uniquement !).',
    },
    // r service
    R_USE: {
      label: 'Utiliser le service R',
      description: 'Pouvoir assigner les données accessibles dans une session R et executer n\'importe quel commande R (utilisateurs de confiance uniquement !).',
    },
    // datashield service
    DATASHIELD_USE: {
      label: 'Utiliser le service DataSHIELD',
      description: 'Pouvoir assigner les données accessibles dans une session R et executer les commandes prédifinies.',
    },
    DATASHIELD_ALL: {
      label: 'Administrer le service DataSHIELD',
      description: 'Administrer la configuration de DataSHIELD.',
    },
    // datashield profile
    DATASHIELD_PROFILE_USE: {
      label: 'Utiliser le profil DataSHIELD',
      description: 'Pouvoir assigner les données accessibles dans une session R et executer des commandes dans le contexte de ce profil DataSHIELD.',
    },
    // datasource permissions
    DATASOURCE_VIEW: {
      label: 'Voir le dictonnaire et les données de toutes les tables',
      description: 'Accès en lecture des tables du projet, incluant les données individuelles.',
    },
    TABLE_ADD: {
      label: 'Ajouter des tables',
      description: 'Ajouter de tables ou des vues.',
    },
    DATASOURCE_ALL: {
      label: 'Administrer les tables',
      description: 'Accès complet aux tables du projet, incluant l\'édition des dictionnaire et des données individuelles.',
    },
    // table permissions
    TABLE_READ: {
      label: 'Voir le dictionnaire et les sommaires de la table',
      description: 'Voir le dictionnaire et les sommaires (pas d\'accès aux données individuelles).',
    },
    TABLE_VALUES: {
      label: 'Voir le dictionnaire et les valeurs de la table',
      description: 'Voir le dictionnaire et les données individuelles.',
    },
    TABLE_EDIT: {
      label: 'Éditer le dictionnaire et voir les sommaires de la table',
      description: 'Éditer le dictionnaire et voir les sommaires (pas d\'accès aux données individuelles).',
    },
    TABLE_VALUES_EDIT: {
      label: 'Éditer le dictionnaire et voir les valeurs de la table',
      description: 'Éditer le dictionnaire et voir les données individuelles.',
    },
    TABLE_ALL: {
      label: 'Administrer la table',
      description: 'Accès complet à la table, incluant l\'édition du dictionnaire et des données individuelles.',
    },
    // variable permissions
    VARIABLE_READ: {
      label: 'Voir avec le sommaire de la variable',
      description: 'Voir la description de la variable et le sommaire des données (pas d\'accès aux données individuelles).',
    },
  },
  validation: {
    user: {
      name_required: 'Le nom est requis',
      password_required: 'Le mot de passe est requis et doit comporter au moins 8 caractères',
      certificate_required: 'Le certificat est requis',
      confirm_password_required: 'La confirmation du mot de passe est requise',
      passwords_not_matching: 'Les mots de passe ne correspondent pas',
    },
  },
  main: {
    brand: 'Opal',
    powered_by: 'Propulsé par',
  },
  r: {
    cluster: 'Cluster',
    clusters_count: 'Aucun cluster de serveurs R | 1 cluster de serveurs R | {count} clusters de serveurs R',
    packages_warn: 'Cette opération peut paraître pratique mais elle n\'est pas recommandée dans un environnement de production. Il est préférable de déployer le serveur R à partir d\'une image Docker validée pour garantir la reproductibilité de l\'environnement d\'analyse R.',
    servers_info: 'Les serveurs R sont regroupés par clusters. Dans chaque cluster, tous les serveurs R sont considérés comme interchangeables, c\'est-à-dire que la charge d\'activité sera répartie sur l\'un ou l\'autre serveur lors de la création d\'une session R.',
    servers: 'Serveurs R',
    sessions_counts: '{count} ({active} active)',
    sessions_info: 'Surveillance de l\'activité du serveur R : chaque session R est une unité de calcul démarrée par les utilisateurs R/DataSHIELD ou par des processus internes. Les sessions R sans activité pendant un certain temps seront automatiquement terminées.',
    sessions: 'Sessions R',
    system: 'coeurs : {cores}, mémoire libre : {memory}',
    version: 'Version R',
    workspaces_info: 'Stockage des espaces de travail R : chaque espace de travail R/DataSHIELD enregistré contient l\'image et les fichiers de la session (le cas échéant). Ceux-ci peuvent être restaurés autant de fois que nécessaire à la demande de l\'utilisateur.',
    workspaces: 'Espaces de travail R',
  },
  actions: 'Actions',
  add_a_view: 'Ajouter une vue',
  add_categories_range: 'Ajouter une plage de catégories',
  add_category: 'Ajouter une catégorie',
  add_folder: 'Ajouter un dossier',
  add_method: 'Ajouter une méthode',
  add_option: 'Ajouter une option',
  add_permission: 'Ajouter une permission',
  add_group_permission: 'Ajouter une permission de groupe',
  add_user_permission: 'Ajouter une permission d\'utilisateur',
  add_profile: 'Ajouter un profil',
  add_table: 'Ajouter une table',
  add_tables: 'Ajouter/mettre à jour des tables',
  add: 'Ajouter',
  administration: 'Administration',
  advanced_options: 'Options avancées',
  all_categories: 'Toutes',
  all_projects: 'Tous',
  apps_caption: 'Gérer les applications externes fournissants des services',
  apps: 'Apps',
  attributes: 'Attributs',
  auth_method: 'Méthode d\'authentification',
  authentication: 'Authentification',
  back: 'Retour',
  bookmark_add: 'Ajouter aux favoris',
  bookmark_remove: 'Retirer des favoris',
  bookmarks: 'Favoris',
  built: 'Built',
  busy: 'Occupé',
  cancel_task_confirm: 'Êtes-vous sûr de vouloir annuler cette tâche ?',
  cancel: 'Annuler',
  categories_range_hint: 'Utilisez le trait d\'union \'-\' pour spécifier une plage de valeurs numériques et la virgule \',\' pour séparer les noms ou les plages de noms, par exemple : \'1-4, 9\' ou \'A, B, C \'. Les catégories existantes ne seront pas modifiées.',
  categories: 'Catégories',
  certificate_placeholder: 'Collez votre certificat ici',
  certificate: 'Certificat',
  char_set: 'Jeu de caractères',
  clear_tasks_confirm: 'Aucune tâche à nettoyer | Êtes-vous sûr de vouloir nettoyer cette tâche ? | Êtes-vous sûr de vouloir nettoyer ces {count} tâches ?',
  clear: 'Nettoyer',
  code: 'Code',
  comment: 'Commentaire',
  configuration: 'Configuration',
  configure_import_source: 'Configurer la source de données',
  confirm: 'Confirmer',
  content: 'Contenu',
  context: 'Context',
  continue: 'Continuer',
  copy_data: 'Copier les données',
  copy_incremental_hint: 'Seuls les enregistrements nouveaux ou mises à jour seront copiés.',
  copy_incremental: 'Incrémental',
  copy_nulls_hint: 'Permettre de remplacer une donnée par une valeur nulle.',
  copy_nulls: 'Copier les valeurs nulles',
  copy_tables_data_task_created: 'La tâche de copie des tables a été créée avec l\'identifiant [ {id} ].',
  copy_tables_data_text: 'Aucune table à copier | Une table sera copiée | {count} tables seront copiées.',
  copy_tables_data: 'Copier la table | Copier la table | Copier les tables',
  copy_view: 'Copier la vue',
  copy: 'Copier',
  created: 'Date de création',
  credentials: 'Informations d\'identification',
  dashboard: 'Tableau de bord',
  data_access: 'Accès aux données',
  data_analysis: 'Analyse de données',
  data_file: 'Fichier de données',
  data_format: 'Format des données',
  data_management: 'Gestion des données',
  data_server: 'Serveur de données',
  databases_caption: 'Gérer les bases de données pour le stockage, l\'import et l\'export des données',
  databases: 'Base de données',
  date: 'Date',
  default_value_type: 'Type de valeur par défaut',
  delete_categories_confirm: '- | Êtes-vous sûr de vouloir supprimer cette catégorie ? | Êtes-vous sûr de vouloir supprimer ces {count} catégories ?',
  delete_files_confirm: '- | Êtes-vous sûr de vouloir supprimer ce fichier ? | Êtes-vous sûr de vouloir supprimer ces {count} fichiers ?',
  delete_group_confirm: 'Êtes-vous sûr de vouloir supprimer le groupe \'{groupe}\'?',
  delete_r_package_confirm: 'La suppression d\'un package R peut échouer s\'il est installé dans un dossier non accessible en écriture. Êtes-vous sûr de vouloir supprimer le paquet R "{name}" ?',
  delete_r_workspaces_confirm: '- | Êtes-vous sûr de vouloir terminer cet espace de travail R ? | Êtes-vous sûr de vouloir terminer ces {count} espaces de travail R ?',
  delete_tables_confirm: 'Aucune table à supprimer | Êtes-vous sûr de vouloir supprimer cette table ? | Êtes-vous sûr de vouloir supprimer ces {count} tables ?',
  delete_permission_confirm: 'Êtes-vous sûr de vouloir supprimer la permission de {principal} ?',
  delete_profile_confirm : 'Êtes-vous sûr de vouloir supprimer le profil \'{profile}\'?',
  delete_profiles_confirm : 'Êtes-vous sûr de vouloir supprimer le profil \'{profile}\'? | Êtes-vous sûr de vouloir supprimer ces {count} profils?',
  delete_profiles_selected : 'Supprimer les profils sélectionnés',
  delete_user_confirm: 'Êtes-vous sûr de vouloir supprimer l\'utilisateur {user} ?',
  delete_variables_confirm: 'Aucune variable à supprimer | Êtes-vous sûr de vouloir supprimer cette variable ? | Êtes-vous sûr de vouloir supprimer ces {count} variables ?',
  delete: 'Supprimer',
  density: 'Densité',
  derivation_script: 'Script de dérivation',
  descriptive_statistics: 'Statistiques descriptives',
  destination_folder: 'Dossier de destination',
  dictionary: 'Dictionnaire',
  disable: 'Désactiver',
  docs: 'Docs',
  documentation_cookbook: 'Documentation et recettes',
  download_dictionaries: 'Télécharger les dictionnaires',
  download_dictionary: 'Télécharger le dictionnaire',
  download_logs: 'Télécharger les logs',
  download_view: 'Télécharger la vue',
  download_views_backup: 'Sauvegarder les vues',
  download: 'Télécharger',
  edit_category: 'Éditer la catégorie',
  edit_permission: 'Éditer la permission',
  edit_script: 'Éditer le script',
  edit_table: 'Éditer la table',
  edit_view: 'Éditer la vue',
  edit: 'Éditer',
  enable: 'Activer',
  enabled: 'Activé',
  encrypt_file_content: 'Encrypter le contenu du fichier',
  encrypt_password_hint: 'Le mot de passe doit avoir au moins 8 caractères.',
  encrypt_password: 'Mot de passe',
  end_time: 'Fin',
  entities: 'Entités',
  entity_type: 'Type d\'entité',
  export_data: 'Exporter les données',
  export_file: 'Exporter vers un fichier',
  export_tables_task_created: 'Tâche d\'exportation de tables créée avec l\'identifiant [ {id} ]',
  export_tables_text: 'Aucune table à exporter | Une table sera exportée | {count} tables seront exportées',
  export: 'Exporter',
  extract: 'Extraire',
  field_separator: 'Séparateur de champ',
  file_already_exists: 'Ce fichier existe déjà',
  file_selection: 'Sélection de fichier',
  file_system: 'Système',
  files_caption: 'Gérer le système de fichiers, téléverser et télécharger des fichiers',
  files: 'Fichiers',
  frequencies: 'Fréquences',
  frequency: 'Fréquence',
  from_row: 'A partir de la ligne',
  from_tables: 'Depuis les tables',
  full_name: 'Nom complet',
  full_summary: 'Sommaire complet',
  function: 'Fonction',
  general_settings_caption: 'Gérer la configuration générale du serveur',
  general_settings: 'Paramètres généraux',
  gh_org_hint: 'Exemple: datashield',
  gh_org: 'Organisation ou utilisateur',
  gh_ref_hint: 'Branche, tag ou commit, la valeur par défaut est "master"',
  gh_ref: 'Référence',
  gh_repo_hint: 'Exemple: dsBase',
  gh_repo: 'Dépôt',
  group: 'Groupe',
  groups_hint: 'Sélectionnez un groupe ou saisissez un nouveau nom et appuyez sur \'Entrée\'.',
  groups_info: 'Les groupes ne peuvent être définis que par l\'intermédiaire des utilisateurs. La suppression d\'un groupe supprime les utilisateurs de ce groupe.',
  groups: 'Groupes',
  help: 'Help',
  histogram: 'Histogramme',
  id_column_hint: 'Nom de la colonne des identifiants uniques. Si non fournie, la première colonne sera utilisée pour déterminer l\'identifiant de l\'entité.',
  id_column_name_hint: 'Nom de la colonne qui identifie l\'entité. S\'il n\'est pas fourni, le nom par défaut s\'applique',
  id_column_name: 'Nom de la colonne ID',
  id_column: 'Colonne ID',
  id_mappings_caption: 'Gérer les identifiants',
  id_mappings: 'Identifiants',
  id: 'ID',
  identity_providers_caption: 'Gérer les fournisseurs d\'identité OpenID Connect',
  identity_providers: 'Fournisseurs d\'identité',
  import_data_task_created: 'La tâche d\'importation des données a été créée avec l\'identifiant [ {id} ].',
  import_data: 'Importer des données',
  import_file: 'Importer depuis un fichier',
  import_limit_hint: 'Le nombre maximum de lignes à importer. Si aucune limite n\'est définie ou si la limite est 0, tous les enregistrements seront importés.',
  import_server: 'Importer depuis un serveur',
  import: 'Importer',
  incremental_import_hint: 'Importer uniquement les données nouvelles ou mises à jour',
  incremental_import: 'Importation incrémentale',
  index: 'Index',
  initialize: 'Initialiser',
  install_action: 'Installer',
  install_r_package_task_created: 'La tâche d\'installation du paquet R a été créée avec l\'identifiant [ {id} ].',
  install_r_package: 'Installer un paquet R',
  install: 'Installer',
  intervals: 'Intervalles',
  is_missing_hint: 'Indique qu\'une valeur d\'observation est manquante.',
  is_missing: 'Manquante',
  jvm_caption: 'Monitorer la machine virtuelle Java',
  jvm: 'Machine virtuelle Java',
  kurtosis: 'Kurtosis',
  label: 'Libellé',
  labels: 'Libellés',
  last_access: 'Dernier accès',
  last_update: 'Dernière mise à jour',
  libpath: 'Libpath',
  limit: 'Limite',
  locale: 'Locale',
  max: 'Max',
  mean: 'Moyenne',
  median: 'Médiane',
  merge_dictionaries_hint: 'Lorsqu\'une table existe déjà, les caractéristiques des variables (propriétés, catégories, attributs) seront fusionnées avec celles importées au lieu d\'être simplement remplacées. Cela permet de conserver les annotations des variables lors des importations ultérieures.',
  merge_dictionaries: 'Fusionner les dictionnaires',
  merge_variables_hint: 'Si sélectionné, les variables avec le même nom seront fusionnées (les propriétés, les catégories et les attributs seront ajoutés ou mis à jour, pas de suppression). Sinon, les variables fournies remplaceront les existantes.',
  merge_variables: 'Fusionner les variables',
  message: 'Message',
  messages: 'Messages',
  mime_type: 'Type mime',
  min: 'Min',
  missings: 'Manquantes',
  move_down: 'Descendre',
  move_up: 'Monter',
  my_profile: 'Mon profil',
  name: 'Nom',
  namespace: 'Espace de noms',
  new_name: 'Nouveau nom',
  no_bookmarks: 'Aucun favori',
  no_options: 'Aucune option',
  non_missings: 'Non manquantes',
  normal_distribution: 'Distribution normale',
  normal: 'Normal',
  not_empty: 'Non vide',
  occurrence_group: 'Groupe d\'occurrence',
  opal_url: 'URL Opal',
  optional: 'Optionnel',
  other_links: 'Autres liens',
  other: 'Autre',
  owner: 'Propriétaire',
  package_manager: 'Gestionnaire de paquets',
  package: 'Package',
  packages: 'Packages',
  password_confirm: 'Confirmer le mot de passe',
  password_hint: '{\'Le mot de passe doit comporter au moins 8 caractères, dont un chiffre, une lettre majuscule, une lettre minuscule, un caractère spécial (par exemple, @#$%^&+= !) et aucun espace blanc.\'}',
  password: 'Mot de passe',
  percentage: 'Pourcentage',
  permission: 'Permission',
  permissions: 'Permissions',
  personal_access_token: 'Jeton d\'accès personnel',
  plugins_caption: 'Gérer les greffons du système',
  plugins: 'Greffons',
  preview_import_source: 'Prévisualiser les données',
  profile: 'Profile',
  profiles_caption: 'Gérer les profils',
  profiles: 'Profils',
  progress: 'Progression',
  project_destination: 'Projet de destination',
  project: 'Projet',
  projects_caption: 'Parcourir les tables et les variables, créer des vues, importer/exporter des données et des dictionnaires',
  profiles_info: 'Chaque utilisateur qui se connecte a un profil. Un domaine est le répertoire d\'utilisateurs dans lequel un utilisateur est défini. Pour des raisons de sécurité, il est interdit de se connecter à partir de différents domaines avec le même nom d\'utilisateur. S\'il est supprimé, le profil de l\'utilisateur sera automatiquement recréé lorsque l\'utilisateur se connectera.',
  projects: 'Projets',
  properties: 'Propriétés',
  quotation_mark: 'Marque de citation',
  range: 'Plage',
  realm: 'Domaine',
  referenced_entity_type: 'Type d\'entité référencée',
  refresh: 'Rafraîchir',
  repeatable: 'Répétable',
  reports_caption: 'Configurer et planifier des rapports',
  reports: 'Rapports',
  resources: 'Ressources',
  restore_views: 'Restaurer des vues',
  rservers_caption: 'Configurer les serveurs R, accorder l\'accès au service R',
  rservers: 'R',
  r_func: 'Fonction',
  r_script: 'Script',
  sample_quantiles: 'Quantiles d\'échantillon',
  sample: 'Échantillon',
  save: 'Sauvegarder',
  script: 'Script',
  search_caption: 'Configurer les paramètres de recherche',
  search: 'Recherche',
  select_columns: 'Sélectionner des colonnes',
  select_dictionary_file_template: 'Utilisez le modèle Excel suivant pour ajouter de nouvelles variables ou mettre à jour des variables existantes:',
  select_dictionary_file: 'Sélectionner un fichier de dictionnaire de variables au format Excel ou un fichier XML de vue pour l\'édition en lot des tables et des variables.',
  select_files_to_upload: 'Sélectionner les fichiers à téléverser',
  select_import_options: 'Sélectionner les options d\'import',
  select_import_source: 'Sélectionner la source de données',
  select: 'Sélectionner',
  server: 'Serveur',
  servers: 'Serveurs',
  settings: 'Configuration',
  signin_with: 'S\'identifier avec {provider}',
  size: 'Taille',
  skewness: 'Skewness',
  source_code: 'Code source',
  sql: 'SQL',
  start_time: 'Début',
  start: 'Démarrer',
  started: 'Début',
  status: 'Statut',
  std_dev: 'Écart type',
  stop: 'Arrêter',
  sub_total: 'Sous-total',
  submit: 'Soumettre',
  sum: 'Somme',
  summary: 'Sommaire',
  sumsq: 'Somme des carrés',
  system: 'Système',
  table_name: 'Nom de la table',
  table_references: 'Tables référencées',
  table: 'Table',
  tables_views: 'Tables (vues)',
  tables: 'Tables',
  tags: 'Étiquettes',
  tasks_caption: 'Monitorer et planifier des tâches',
  tasks: 'Tâches',
  taxonomies_caption: 'Gérer les taxonomies et les vocabulaires contrôlés',
  taxonomies: 'Taxonomies',
  terminate_r_sessions_confirm: '- | Êtes-vous sûr de vouloir terminer cette session R ? | Êtes-vous sûr de vouloir terminer ces {count} sessions R ?',
  terminate: 'Terminer',
  theoretical_quantiles: 'Quantiles théoriques',
  title: 'Titre',
  token: 'Jeton',
  total: 'Total',
  type: 'Type',
  unique_name_hint: 'Le nom doit être unique.',
  unit: 'Unité',
  unknown_error: 'Une erreur inconnue est survenue',
  unrecognized: 'Non reconnu',
  update_action: 'Mettre à jour',
  update_all_r_packages_note: 'Cette opération mettra à jour tous les packages R à la dernière version disponible sur CRAN. Il s\'agit d\'une tâche pouvant prendre beaucoup de temps. Si une erreur se produit, recherchez les raisons possibles (dépendance du système manquante, échec de la connexion réseau, etc.) en téléchargeant le log du serveur R.',
  update_all_r_packages_task_created: 'La tâche de mise à jour de tous les paquets R a été créée avec l\'identifiant [ {id} ].',
  update_all_r_packages: 'Mettre à jour tous les paquets R',
  update_method: 'Mettre à jour la méthode',
  update_option: 'Mettre à jour l\'option',
  update: 'Mise à jour',
  upload: 'Téléverser',
  user_add_with_crt: 'Ajouter un utilisateur avec un certificat',
  user_add_with_pwd: 'Ajouter un utilisateur avec un mot de passe',
  user_add: 'Ajouter un utilisateur',
  user_delete: 'Supprimer l\'utilisateur',
  user_disable: 'Désactiver l\'utilisateur',
  user_edit: 'Modifier l\'utilisateur',
  user_enable: 'Activer l\'utilisateur',
  user: 'Utilisateur',
  username: 'Nom d\'utilisateur',
  users_and_groups_caption: 'Ajouter, mettre à jour, supprimer des utilisateurs et des groupes',
  users_and_groups: 'Utilisateurs et groupes',
  users_filter_placeholder: 'Filtrer les utilisateurs par nom, groupe ou type d\'authentification...',
  users_info: 'Les utilisateurs peuvent se connecter à l\'aide d\'un mot de passe ou de manière programmatique en fournissant un certificat dans une connexion sécurisée (HTTPS).',
  users: 'Utilisateurs',
  value_type: 'Type de valeur',
  value: 'Valeur',
  values: 'Valeurs',
  variables: 'Variables',
  variance: 'Variance',
  version: 'Version',
  waiting: 'En attente',
  public_url: 'URL publique',
  logout_url: 'URL après déconnexion',
  laguages: 'Langues',
  default_charset: 'Jeu de caractères par défaut',
  enforced_2fa: 'Authentification à deux facteurs obligatoire',
  usage: 'Utilisation',
  storage: 'Stockage',
  register: 'Enregistrer',
  default_storage: 'Stockage par défaut',
  options: 'Options',
  example: 'Exemple : {text}',
  test: 'Test',
};
