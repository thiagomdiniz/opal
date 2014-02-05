/*******************************************************************************
 * Copyright 2008(c) The OBiBa Consortium. All rights reserved.
 *
 * This program and the accompanying materials
 * are made available under the terms of the GNU Public License v3.0.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
package org.obiba.opal.web.gwt.app.client.magma.view;

import org.obiba.opal.web.gwt.app.client.i18n.Translations;
import org.obiba.opal.web.gwt.app.client.magma.presenter.SummaryTabPresenter;
import org.obiba.opal.web.gwt.app.client.magma.presenter.SummaryTabUiHandlers;
import org.obiba.opal.web.gwt.app.client.ui.NumericTextBox;
import org.obiba.opal.web.model.client.math.CategoricalSummaryDto;
import org.obiba.opal.web.model.client.math.ContinuousSummaryDto;
import org.obiba.opal.web.model.client.math.DefaultSummaryDto;
import org.obiba.opal.web.model.client.math.SummaryStatisticsDto;

import com.github.gwtbootstrap.client.ui.Alert;
import com.github.gwtbootstrap.client.ui.base.IconAnchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.uibinder.client.UiTemplate;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

/**
 *
 */
public class SummaryTabView extends ViewWithUiHandlers<SummaryTabUiHandlers> implements SummaryTabPresenter.Display {

  @UiTemplate("SummaryTabView.ui.xml")
  interface SummaryTabViewUiBinder extends UiBinder<Widget, SummaryTabView> {}

  private static final SummaryTabViewUiBinder uiBinder = GWT.create(SummaryTabViewUiBinder.class);

  private static final Translations translations = GWT.create(Translations.class);

  private final Widget uiWidget;

  @UiField
  Alert previewSummary;

  @UiField
  Label previewSummaryText;

  @UiField
  Label previewSummaryTextSuffix;

  @UiField
  NumericTextBox limitTextBox;

  @UiField
  IconAnchor refreshSummaryLink;

  @UiField
  IconAnchor fullSummaryLink;

  @UiField
  IconAnchor cancelSummaryLink;

  @UiField
  Panel summary;

  public SummaryTabView() {
    uiWidget = uiBinder.createAndBindUi(this);

    limitTextBox.setMaxConstrained(true);
    limitTextBox.setMaxConstrained(false);
    limitTextBox.setMin(1);
    limitTextBox.addKeyUpHandler(new KeyUpHandler() {
      @Override
      public void onKeyUp(KeyUpEvent event) {
        if(event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
          getUiHandlers().onRefreshSummary();
        }
      }
    });
  }

  @Override
  public Widget asWidget() {
    return uiWidget;
  }

  @Override
  public void renderSummary(SummaryStatisticsDto dto) {
    summary.clear();
    if(dto.getExtension(ContinuousSummaryDto.SummaryStatisticsDtoExtensions.continuous) != null) {
      ContinuousSummaryDto continuous = dto.getExtension(ContinuousSummaryDto.SummaryStatisticsDtoExtensions.continuous)
          .cast();
      if(continuous.getSummary().getN() > 0) {
        summary.add(new ContinuousSummaryView(continuous));
      } else {
        renderNoSummary();
      }
    } else if(dto.getExtension(CategoricalSummaryDto.SummaryStatisticsDtoExtensions.categorical) != null) {
      CategoricalSummaryDto categorical = dto
          .getExtension(CategoricalSummaryDto.SummaryStatisticsDtoExtensions.categorical).cast();
      summary.add(new CategoricalSummaryView(dto.getResource(), categorical));

    } else if(dto.getExtension(DefaultSummaryDto.SummaryStatisticsDtoExtensions.defaultSummary) != null) {
      DefaultSummaryDto defaultSummaryDto = dto
          .getExtension(DefaultSummaryDto.SummaryStatisticsDtoExtensions.defaultSummary).cast();
      summary.add(new DefaultSummaryView(defaultSummaryDto));
    } else {
      renderNoSummary();
    }
  }

  @Override
  public void renderNoSummary() {
    summary.clear();
    summary.add(new Label(translations.noSummaryDataAvailableLabel()));
  }

  @Override
  public void requestingSummary(int limit, int entitiesCount) {
    summary.clear();
    summary.add(new Image("image/loading.gif"));

    limitTextBox.setValue(String.valueOf(limit));
    if(limit < entitiesCount) {
      showLimitBox(entitiesCount);
    } else {
      hideLimitBox();
    }
    previewSummary.setVisible(true);
    cancelSummaryLink.setVisible(true);
  }

  private void showLimitBox(int entitiesCount) {
    limitTextBox.setVisible(true);
    previewSummaryTextSuffix.setVisible(true);
    fullSummaryLink.setVisible(false);
    refreshSummaryLink.setVisible(true);
    previewSummaryText.setText(translations.summaryPreviewPendingLabel());
    previewSummaryTextSuffix
        .setText(translations.summaryTotalEntitiesLabel().replace("{0}", String.valueOf(entitiesCount)));
  }

  private void hideLimitBox() {
    limitTextBox.setVisible(false);
    previewSummaryTextSuffix.setVisible(false);
    fullSummaryLink.setVisible(false);
    refreshSummaryLink.setVisible(false);
    previewSummaryText.setText(translations.summaryFullPendingLabel());
  }

  @Override
  public void renderSummaryLimit(int limit, int entitiesCount) {
    limitTextBox.setVisible(true);
    limitTextBox.setValue(String.valueOf(limit));
    previewSummaryTextSuffix.setVisible(true);
    previewSummary.setVisible(true);
    cancelSummaryLink.setVisible(false);
    refreshSummaryLink.setVisible(true);
    fullSummaryLink.setVisible(limit < entitiesCount);
    previewSummaryText.setText(translations.summaryOnLabel());
    previewSummaryTextSuffix
        .setText(translations.summaryTotalEntitiesLabel().replace("{0}", String.valueOf(entitiesCount)));
  }

  @Override
  public void renderCancelSummaryLimit(int limit, int entitiesCount) {
    summary.clear();
    limitTextBox.setValue(String.valueOf(limit));
    limitTextBox.setVisible(true);

    previewSummary.setVisible(true);
    cancelSummaryLink.setVisible(false);
    previewSummaryTextSuffix.setVisible(true);
    fullSummaryLink.setVisible(true);
    refreshSummaryLink.setVisible(true);
    previewSummaryText.setText(translations.summaryFetchSummaryLabel());
    previewSummaryTextSuffix
        .setText(translations.summaryTotalEntitiesLabel().replace("{0}", String.valueOf(entitiesCount)));
  }

  @UiHandler("fullSummaryLink")
  public void onFullSummary(ClickEvent event) {
    getUiHandlers().onFullSummary();
  }

  @UiHandler("cancelSummaryLink")
  public void onCancelSummary(ClickEvent event) {
    getUiHandlers().onCancelSummary();
  }

  @UiHandler("refreshSummaryLink")
  public void onRefreshSummary(ClickEvent event) {
    getUiHandlers().onRefreshSummary();
  }

  @Override
  public Number getLimit() {
    return limitTextBox.getNumberValue();
  }

  @Override
  public void setLimit(int limit) {
    limitTextBox.setText(String.valueOf(limit));
  }

  @Override
  public void hideSummaryPreview() {
    previewSummary.setVisible(false);
  }
}
