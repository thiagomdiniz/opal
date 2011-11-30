/*******************************************************************************
 * Copyright (c) 2011 OBiBa. All rights reserved.
 *  
 * This program and the accompanying materials
 * are made available under the terms of the GNU Public License v3.0.
 *  
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
package org.obiba.opal.web.gwt.app.client.widgets.view;

import org.obiba.opal.web.gwt.app.client.i18n.Translations;
import org.obiba.opal.web.gwt.app.client.widgets.presenter.ScriptEvaluationPopupPresenter.Display;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiTemplate;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Widget;

public class ScriptEvaluationPopupView extends DialogBox implements Display {

  @UiTemplate("ScriptEvaluationPopupView.ui.xml")
  interface ViewUiBinder extends UiBinder<FlowPanel, ScriptEvaluationPopupView> {
  }

  private static String DIALOG_WIDTH = "45em";

  private static String DIALOG_HEIGHT = "40em";

  private static ViewUiBinder uiBinder = GWT.create(ViewUiBinder.class);

  private static Translations translations = GWT.create(Translations.class);

  @UiField
  FlowPanel content;

  @UiField
  Button closeButton;

  public ScriptEvaluationPopupView() {
    setHeight(DIALOG_HEIGHT);
    setWidth(DIALOG_WIDTH);
    setText(translations.scriptLabel());
    content = uiBinder.createAndBindUi(this);
    content.setHeight(DIALOG_HEIGHT);
    content.setWidth(DIALOG_WIDTH);
    add(content);
  }

  @Override
  public HasClickHandlers getButton() {
    return closeButton;
  }

  @Override
  public void showDialog() {
    center();
    show();
  }

  @Override
  public void closeDialog() {
    hide();
  }

  @Override
  public void startProcessing() {
  }

  @Override
  public void stopProcessing() {
  }

  @Override
  public void setScriptEvaluationWidget(Widget display) {
    content.add(display);
  }
}
