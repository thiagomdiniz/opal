/*
 * Copyright (c) 2013 OBiBa. All rights reserved.
 *
 * This program and the accompanying materials
 * are made available under the terms of the GNU Public License v3.0.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.obiba.opal.web.gwt.app.client.permissions.view;

import java.util.List;

import org.obiba.opal.web.gwt.app.client.i18n.Translations;
import org.obiba.opal.web.gwt.app.client.permissions.presenter.ResourcePermissionsPresenter;
import org.obiba.opal.web.gwt.app.client.permissions.presenter.ResourcePermissionsUiHandlers;
import org.obiba.opal.web.gwt.app.client.permissions.support.PermissionResourceType;
import org.obiba.opal.web.gwt.app.client.ui.celltable.ActionsColumn;
import org.obiba.opal.web.gwt.app.client.ui.celltable.ActionsProvider;
import org.obiba.opal.web.gwt.app.client.ui.celltable.HasActionHandler;
import org.obiba.opal.web.model.client.opal.Acl;

import com.github.gwtbootstrap.client.ui.Button;
import com.github.gwtbootstrap.client.ui.CellTable;
import com.github.gwtbootstrap.client.ui.SimplePager;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.view.client.ListDataProvider;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class ResourcePermissionsView extends ViewWithUiHandlers<ResourcePermissionsUiHandlers> implements
    ResourcePermissionsPresenter.Display {

  interface Binder extends UiBinder<Widget, ResourcePermissionsView> {}

  @UiField
  CellTable<Acl> permissionsTable;

  @UiField
  SimplePager tablePager;

  private final static Translations translations = GWT.create(Translations.class);

  private final ListDataProvider<Acl> permissionsDataProvider = new ListDataProvider<Acl>();

  @Inject
  public ResourcePermissionsView(Binder uiBinder) {
    initWidget(uiBinder.createAndBindUi(this));
    initSubjectsPermissionTable();
  }

  @Override
  public void setData(PermissionResourceType resourceType, List<Acl> acls) {
    renderSubjectsPermissionTable(resourceType, acls);
  }

  @Override
  public HasActionHandler<Acl> getActions() {
    return SubjectsPermissionColumns.ACTIONS;
  }

  @UiHandler("addPermission")
  public void onAddPermissionClickec(ClickEvent event) {
    getUiHandlers().addPersmission();
  }

  private void renderSubjectsPermissionTable(PermissionResourceType resourceType, List<Acl> acls) {
    tablePager.firstPage();
    permissionsDataProvider.setList(acls);
    permissionsDataProvider.refresh();
    tablePager.setVisible(permissionsDataProvider.getList().size() > tablePager.getPageSize());
  }

  private void initSubjectsPermissionTable() {
    permissionsTable.addColumn(SubjectsPermissionColumns.NAME, "Name");
    permissionsTable.addColumn(SubjectsPermissionColumns.TYPE, "Type");
    permissionsTable.addColumn(SubjectsPermissionColumns.PERMISSION, "Permission");
    permissionsTable.addColumn(SubjectsPermissionColumns.ACTIONS, translations.actionsLabel());
    permissionsDataProvider.addDataDisplay(permissionsTable);
//    permissionsTable.setEmptyTableWidget(new Label(translations.noVcsCommitHistoryAvailable()));
  }

  private static final class SubjectsPermissionColumns {

    static final Column<Acl, String> NAME = new TextColumn<Acl>() {

      @Override
      public String getValue(Acl acl) {
        return acl.getSubject().getPrincipal();
      }
    };

    static final Column<Acl, String> TYPE = new TextColumn<Acl>() {

      @Override
      public String getValue(Acl acl) {
        return acl.getSubject().getType().getName();
      }
    };

    static final Column<Acl, String> PERMISSION = new TextColumn<Acl>() {

      @Override
      public String getValue(Acl acl) {
        String permissionKey = acl.getActions(0);
        StringBuilder builder = new StringBuilder();
        return builder.append(translations.permissionMap().get(permissionKey))//
          .append("\n")//
          .append(translations.permissionExplanationMap().get(permissionKey)).toString();
      }
    };

    static final ActionsColumn<Acl> ACTIONS = new ActionsColumn<Acl>(new ActionsProvider<Acl>() {

      @Override
      public String[] allActions() {
        return new String[] { ActionsColumn.EDIT_ACTION, ActionsColumn.DELETE_ACTION };
      }

      @Override
      public String[] getActions(Acl value) {
        return allActions();
      }
    });
  }

}
