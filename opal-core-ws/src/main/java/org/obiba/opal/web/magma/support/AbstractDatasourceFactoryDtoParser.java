/*******************************************************************************
 * Copyright 2008(c) The OBiBa Consortium. All rights reserved.
 *
 * This program and the accompanying materials
 * are made available under the terms of the GNU Public License v3.0.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
package org.obiba.opal.web.magma.support;

import java.io.File;

import javax.validation.constraints.NotNull;

import org.apache.commons.vfs2.FileObject;
import org.apache.commons.vfs2.FileSystemException;
import org.obiba.magma.DatasourceFactory;
import org.obiba.magma.datasource.crypt.DatasourceEncryptionStrategy;
import org.obiba.magma.support.BatchDatasourceFactory;
import org.obiba.magma.support.IncrementalDatasourceFactory;
import org.obiba.magma.support.Initialisables;
import org.obiba.opal.core.domain.participant.identifier.IParticipantIdentifier;
import org.obiba.opal.core.magma.IdentifiersMappingDatasourceFactory;
import org.obiba.opal.core.runtime.OpalRuntime;
import org.obiba.opal.core.service.IdentifiersTableService;
import org.obiba.opal.core.service.NoSuchIdentifiersMappingException;
import org.obiba.opal.core.unit.FunctionalUnitService;
import org.obiba.opal.web.model.Magma;
import org.obiba.opal.web.model.Magma.DatasourceFactoryDto;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class AbstractDatasourceFactoryDtoParser implements DatasourceFactoryDtoParser {

  @Autowired
  private FunctionalUnitService functionalUnitService;

  @Autowired
  private OpalRuntime opalRuntime;

  @Autowired
  private IdentifiersTableService identifiersTableService;

  @Autowired
  private IParticipantIdentifier participantIdentifier;

  @Override
  public DatasourceFactory parse(DatasourceFactoryDto dto, DatasourceEncryptionStrategy encryptionStrategy) {
    DatasourceFactory factory = internalParse(dto, encryptionStrategy);
    // apply wrappers
    factory = applyIdentifiersMapping(dto, factory);
    factory = applyIncremental(dto, factory);
    factory = applyBatch(dto, factory);

    Initialisables.initialise(factory);
    return factory;
  }

  private DatasourceFactory applyIdentifiersMapping(DatasourceFactoryDto dto, DatasourceFactory factory) {
    if(!dto.hasUnitConfig()) return factory;

    Magma.DatasourceUnitConfigDto unitConfig = dto.getUnitConfig();
    String idMapping = unitConfig.getUnit();
    if(!identifiersTableService.hasIdentifiersMapping(idMapping)) {
      throw new NoSuchIdentifiersMappingException(idMapping);
    }

    return new IdentifiersMappingDatasourceFactory(factory, idMapping, identifiersTableService,
        unitConfig.getAllowIdentifierGeneration() ? participantIdentifier : null,
        unitConfig.getIgnoreUnknownIdentifier());
  }

  private DatasourceFactory applyIncremental(DatasourceFactoryDto dto, DatasourceFactory factory) {
    if(!dto.hasIncrementalConfig()) return factory;
    Magma.DatasourceIncrementalConfigDto incrementalConfig = dto.getIncrementalConfig();
    if(incrementalConfig.getIncremental() && incrementalConfig.hasIncrementalDestinationName()) {
      return new IncrementalDatasourceFactory(factory, incrementalConfig.getIncrementalDestinationName());
    }
    return factory;
  }

  private DatasourceFactory applyBatch(DatasourceFactoryDto dto, DatasourceFactory factory) {
    if(!dto.hasBatchConfig()) return factory;
    return new BatchDatasourceFactory(factory, dto.getBatchConfig().getLimit());
  }

  @NotNull
  protected abstract DatasourceFactory internalParse(DatasourceFactoryDto dto, DatasourceEncryptionStrategy encryptionStrategy);

  @SuppressWarnings("UnusedDeclaration")
  protected OpalRuntime getOpalRuntime() {
    return opalRuntime;
  }

  protected FunctionalUnitService getFunctionalUnitService() {
    return functionalUnitService;
  }

  protected FileObject resolveFileInFileSystem(String path) throws FileSystemException {
    return opalRuntime.getFileSystem().getRoot().resolveFile(path);
  }

  protected File resolveLocalFile(String path) {
    try {
      // note: does not ensure that file exists
      return opalRuntime.getFileSystem().getLocalFile(resolveFileInFileSystem(path));
    } catch(FileSystemException e) {
      throw new IllegalArgumentException(e);
    }
  }
}
