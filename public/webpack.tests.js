import 'angular';
import 'angular-mocks';
import './src/app';

var testsContext = require.context('./src', true, /spec$/);
testsContext.keys().forEach(testsContext);