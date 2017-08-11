'use strict';

describe('Service: viewsPath', function () {

  // load the service's module
  beforeEach(module('emailSignatureGeneratorApp'));

  // instantiate service
  var viewsPath;
  beforeEach(inject(function (_viewsPath_) {
    viewsPath = _viewsPath_;
  }));

  it('should do something', function () {
    expect(!!viewsPath).toBe(true);
  });

});
