'use strict';
const Container = function (x) { this.__value = x; };

Container.of = x => new Container(x);

console.log(Container.of(Container.of('hi')));