var { expect } = require('chai');
var providers = require('../../data-providers');
/* eslint-disable no-restricted-syntax, no-unused-expressions */

describe('Providers', function () {
  it('should be an object', function () {
    expect(providers).to.be.an('object');
  });

  it('should contain functions', function () {
    for (const key of Object.keys(providers)) {
      expect(providers[key]).to.be.a('function');
    }
  });

  it('should have the correct properties', function () {
    const testTermSearch = 'testTermSearch';
    for (const key of Object.keys(providers)) {
      const prov = providers[key]({
        searchTerm: testTermSearch,
      });
      expect(prov).to.have.property('providerType')
        .that.is.oneOf(['scrapper', 'rest']);
      expect(prov).to.have.property('providerData')
        .that.is.an('object');
      expect(prov.providerData).to.have.property('url')
        .that.is.a('string').and.is.not.empty;
      expect(prov.providerData).to.have.property('image').that.is.a('string')
        .and.is.not.empty;

      if (prov.providerType === 'scrapper') {
        expect(prov.providerData).to.have.property('itemSelectors').that.is.an('object');
        expect(prov.providerData).to.have.property('pagination').that.is.an('object');

        expect(prov.providerData.itemSelectors).to.have.property('topSelector').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.itemSelectors).to.have.property('title').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.itemSelectors).to.have.property('link').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.itemSelectors).to.have.property('price').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.itemSelectors).to.have.property('thumbnail').that.is.a('string')
          .and.is.not.empty;
      } else if (prov.providerType === 'rest') {
        expect(prov.providerData).to.have.property('payloadProperties').that.is.an('object');

        expect(prov.providerData.payloadProperties).to.have.property('items').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.payloadProperties).to.have.property('title').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.payloadProperties).to.have.property('link').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.payloadProperties).to.have.property('price').that.is.a('string')
          .and.is.not.empty;
        expect(prov.providerData.payloadProperties).to.have.property('thumbnail').that.is.a('string')
          .and.is.not.empty;
      }
    }
  });
});
