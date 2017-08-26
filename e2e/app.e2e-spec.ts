import { AppPage } from './app.po';

describe('protractor512-radio App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it(`should have '3' labels`, () => {
    expect(page.getLabelCount()).toBe(3);
  });

  it(`should have '3' radios`, () => {
    expect(page.getRadioCount()).toBe(3);
  });

  it(`should get '0' when select 'AWS'`, () => {
    page.selectCloudByIndex(0);
    expect(page.getSelectedCloud()).toBe('0');
    expect(page.getSelectedId()).toBe('0');
  });

  it(`should get '1' when select 'Azure'`, () => {
    page.selectCloudByText('Azure');
    expect(page.getSelectedCloud()).toBe('1');
    expect(page.getSelectedId()).toBe('1');
  });

  it(`should get '2' when select 'GCP'`, () => {
    page.selectCloudByText('GCP');
    expect(page.getSelectedCloud()).toBe('2');
    expect(page.getSelectedId()).toBe('2');
  });
});
