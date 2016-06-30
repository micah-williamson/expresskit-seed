Expresskit-Seed
---------------

An example [Expresskit](https://github.com/iamchairs/expresskit) server application.

# Known Issues

* When building via `tsc`, several "Cannot find module 'express'" appear.

* Expresskit recommends using `ts-node`. This, in fact, does not work well. Instead, use tsc to build, then run `node index.js` from that directory. 