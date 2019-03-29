package org.obiba.opal.pac4j;

import com.google.common.base.Strings;
import io.buji.pac4j.context.ShiroSessionStore;
import org.pac4j.core.client.Clients;
import org.pac4j.core.config.Config;
import org.pac4j.core.http.callback.PathParameterCallbackUrlResolver;
import org.pac4j.oidc.client.KeycloakOidcClient;
import org.pac4j.oidc.config.KeycloakOidcConfiguration;
import org.springframework.stereotype.Component;

import java.util.Properties;

/**
 * Initializes some aspects of pac4j, namely the callback path and url.
 * The callback url is defined by appending the opal public url to the callback path.
 */
@Component
public class Pac4jConfigurer {

  private static String callbackUrl;

  private static String callbackPath;

  private Config config;

  /**
   * Initializes based on opal-config properties
   *
   * @param properties
   * @return true if pac4j was enabled (according to properties)
   */
  public static boolean init(Properties properties) {
    String path = properties.getProperty("org.obiba.opal.pac4j.callbackPath");

    if (!Strings.isNullOrEmpty(path)) {
      String opalPublicUrl = properties.getProperty("org.obiba.opal.public.url", "http://localhost:8080");
      callbackUrl = opalPublicUrl + path;
      callbackPath = path;
    }

    return isEnabled();
  }

  public static boolean isEnabled() {
    return !Strings.isNullOrEmpty(callbackPath);
  }

  /**
   * @return callback url (same for all identity providers)
   * @throws java.lang.IllegalStateException if pac4j is not enabled
   */
  public static String getCallbackUrl() {
    if (!isEnabled()) {
      throw new IllegalStateException("Pac4j is not enabled/setup");
    }
    return callbackUrl;
  }

  /**
   * @return callback url (same for all identity providers)
   * @throws java.lang.IllegalStateException if pac4j is not enabled
   */
  public static String getCallbackPath() {
    if (!isEnabled()) {
      throw new IllegalStateException("Pac4j is not enabled/setup");
    }
    return callbackPath;
  }

  public Config getConfig() {
    if (config == null) {
      KeycloakOidcConfiguration kcConfig = new KeycloakOidcConfiguration();
      kcConfig.setClientId("opal");
      kcConfig.setSecret("1aa43945-7166-4292-8f46-c4b836054676");
      kcConfig.setBaseUri("http://localhost:8888/auth");
      kcConfig.setRealm("obiba");
      KeycloakOidcClient kcClient = new KeycloakOidcClient();
      kcClient.setName("kc-test");
      kcClient.setCallbackUrlResolver(new PathParameterCallbackUrlResolver());
      kcClient.setConfiguration(kcConfig);

      config = new Config();
      config.setClients(new Clients(getCallbackUrl(), kcClient));
      config.setSessionStore(ShiroSessionStore.INSTANCE);
    }

    return config;
  }
}
