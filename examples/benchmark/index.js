import Benchmark from 'benchmark';
import vm from 'node:vm';
import v8 from 'v8';

import addCoreSuite from './core.js';
import addNormlizrSuite from './normalizr.js';

v8.setFlagsFromString('--expose_gc');
const gc = vm.runInNewContext('gc');

addCoreSuite(addNormlizrSuite(new Benchmark.Suite()))
  .on('cycle', event => {
    // Output benchmark result by converting benchmark result to string
    console.log(String(event.target));
    // collect garbage between runs to make results more consistent
    gc();
  })
  .run();
