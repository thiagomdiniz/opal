package org.obiba.opal.jdbcmart.batch;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.sql.DataSource;

import liquibase.change.Change;
import liquibase.change.ColumnConfig;
import liquibase.change.CreateTableChange;

import org.easymock.EasyMock;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.obiba.opal.elmo.concepts.DataItem;
import org.obiba.opal.sesame.report.DataItemSet;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class DataItemSetToSchemaChangeProcessorTest {
  //
  // Instance Variables
  //

  private DataSource dataSource;

  private Map<String, String> typeMap;

  //
  // Fixture Methods (setUp / tearDown)
  //

  @SuppressWarnings("unchecked")
  @Before
  public void setUp() {
    ApplicationContext context = new ClassPathXmlApplicationContext("test-context.xml");
    dataSource = (DataSource) context.getBean("dataSource");
    typeMap = (Map<String, String>) context.getBean("typeMap");

    // Drop "test" table if it exists.
    JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
    jdbcTemplate.execute("drop table if exists test");
  }

  //
  // Test Methods
  //

  @Ignore
  @Test
  public void testProcess() throws Exception {
    DataItemSetToSchemaChangeProcessor processor = new DataItemSetToSchemaChangeProcessor();
    processor.setDataSource(dataSource);
    processor.setTypeMap(typeMap);

    DataItemSet dataItemSet = EasyMock.createMock(DataItemSet.class);
    EasyMock.expect(dataItemSet.getName()).andReturn("MySet").anyTimes();
    EasyMock.expect(dataItemSet.getDataItems()).andReturn(createDataItems()).anyTimes();
    EasyMock.replay(dataItemSet);

    // Basic verification.
    Change schemaChange = processor.process(dataItemSet);
    assertNotNull(schemaChange);
    assertTrue(schemaChange instanceof CreateTableChange);

    // Verify the table name.
    CreateTableChange createTableChange = (CreateTableChange) schemaChange;
    assertEquals("MySet", createTableChange.getTableName());

    // Verify table columns.
    for(ColumnConfig column : createTableChange.getColumns()) {
      String columnName = column.getName();

      if(column.getConstraints() == null || !column.getConstraints().isPrimaryKey()) {
        DataItem dataItem = getDataItemByCode(dataItemSet.getDataItems(), Long.valueOf(columnName.substring(SchemaChangeConstants.COLUMN_NAME_PREFIX.length())));
        if(dataItem == null) {
          fail("Unexpected column '" + columnName + "'");
        }

        assertEquals(getColumnTypeFor(dataItem), column.getType());
      }
    }
  }

  //
  // Helper Methods
  //

  private Set<DataItem> createDataItems() {
    Set<DataItem> dataItems = new HashSet<DataItem>();

    for(int i = 0; i < 10; i++) {
      final long code = i;

      DataItem dataItem = EasyMock.createMock(DataItem.class);
      EasyMock.expect(dataItem.getIdentifier()).andReturn(code + "").anyTimes();
      EasyMock.expect(dataItem.getDataType()).andReturn("INTEGER").anyTimes();
      EasyMock.replay(dataItem);
      dataItems.add(dataItem);
    }

    return dataItems;
  }

  private DataItem getDataItemByCode(Set<DataItem> dataItems, Long code) {
    for(DataItem dataItem : dataItems) {
      if(dataItem.getIdentifier().equals(code.toString())) {
        return dataItem;
      }
    }
    return null;
  }

  private String getColumnTypeFor(DataItem dataItem) {
    // TODO: Assuming INTEGER for now, but this will need to be updated.
    return typeMap.get("INTEGER");
  }
}
