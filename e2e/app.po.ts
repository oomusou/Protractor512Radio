import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLabelCount(): any {
    return element.all(by.tagName('label')).count();
  }

  getRadioCount(): any {
    return element.all(by.css('input[type="radio"]')).count();
  }

  selectCloudByIndex(index: number): AppPage {
    element.all(by.tagName('label'))
      .get(index)
      .click();

    return this;
  }

  selectCloudByText(cloud: string): AppPage {
    element(by.cssContainingText('label', cloud)).click();

    return this;
  }

  getSelectedCloud(): any {
    return element(by.css('input[name="cloud"]:checked')).getAttribute('value');
  }

  getSelectedId(): any {
    return element(by.css('p')).getText();
  }
}
