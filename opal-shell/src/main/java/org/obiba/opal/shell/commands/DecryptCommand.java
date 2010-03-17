/*******************************************************************************
 * Copyright 2008(c) The OBiBa Consortium. All rights reserved.
 * 
 * This program and the accompanying materials
 * are made available under the terms of the GNU Public License v3.0.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
package org.obiba.opal.shell.commands;

import java.io.File;
import java.util.List;

import org.obiba.magma.MagmaEngine;
import org.obiba.magma.datasource.fs.FsDatasource;
import org.obiba.opal.core.service.DecryptService;
import org.obiba.opal.shell.commands.options.DecryptCommandOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Command to decrypt an Onyx data file.
 */
@CommandUsage(description = "Decrypts one or more Onyx data files.", syntax = "Syntax: decrypt [--out FILE] _FILE_...")
public class DecryptCommand extends AbstractOpalRuntimeDependentCommand<DecryptCommandOptions> {

  private static final Logger log = LoggerFactory.getLogger(DecryptCommand.class);

  //
  // Constants
  //

  public static final String DECRYPT_DATASOURCE_NAME = "decrypt-datasource";

  //
  // Instance Variables
  //
  @Autowired
  private DecryptService decryptService;

  public void execute() {
    if(options.getFiles() == null) {
      getShell().printf("No input file(s) specified.\n");
      return;
    }

    File outputDir = new File(".");
    if(options.isOutput()) {
      outputDir = getOutputDir(options.getOutput());
    }

    if(outputDir != null) {
      decryptFiles(options.getFiles(), outputDir);
    } else {
      System.err.println("Invalid output directory");
    }
  }

  private void decryptFiles(List<File> filesToDecrypt, File outputDir) {
    for(File inputFile : filesToDecrypt) {
      if(inputFile.exists() == false) {
        getShell().printf("Skipping non-existent input file %s\n", inputFile.getName());
      } else {
        getShell().printf("Decrypting input file %s\n", inputFile.getName());
        decryptFile(inputFile, outputDir);
      }
    }
  }

  //
  // Methods
  //

  private void decryptFile(File inputFile, File outputDir) {
    FsDatasource outputDatasource = new FsDatasource(DECRYPT_DATASOURCE_NAME, new File(outputDir, getOutputFileName(inputFile)));
    MagmaEngine.get().addDatasource(outputDatasource);
    try {
      if(options.isUnit()) {
        decryptService.decryptData(options.getUnit(), DECRYPT_DATASOURCE_NAME, inputFile);
      } else {
        decryptService.decryptData(DECRYPT_DATASOURCE_NAME, inputFile);
      }
    } catch(Exception e) {
      log.info("The following file either does not exist or could not be decrypted : {}", inputFile);
      System.err.printf("The following file either does not exist or could not be decrypted : %s\n", inputFile);
    } finally {
      try {
        MagmaEngine.get().removeDatasource(outputDatasource);
      } catch(Exception e) {
        log.warn("Could not remove the following datasource : {}", outputDatasource.getName(), e);
      }
    }
  }

  /**
   * Given the name/path of a directory, returns that directory (creating it if necessary).
   * 
   * @param output the name/path of the directory
   * @return the directory, as a <code>File</code> object (or <code>null</code> if the directory does not exist and
   * could not be created
   */
  private File getOutputDir(File outputDir) {
    if(!outputDir.exists()) {
      boolean dirCreated = outputDir.mkdirs();
      if(!dirCreated) {
        outputDir = null;
      }
    }
    return outputDir;
  }

  private String getOutputFileName(File inputFile) {
    String inputFilename = inputFile.getName();
    String inputFilenameExt = "";
    String inputFilenamePrefix = "";
    int inputFilenameExtIndex = inputFilename.lastIndexOf(".");
    if(inputFilenameExtIndex > 0) {
      inputFilenamePrefix = inputFilename.substring(0, inputFilenameExtIndex);
      inputFilenameExt = inputFilename.substring(inputFilenameExtIndex, inputFilename.length());
    }

    return inputFilenamePrefix + "-plaintext" + inputFilenameExt;
  }
}
