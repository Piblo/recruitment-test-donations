# Recruitment Test - Charity Donations
An unattended front end recruitment test for JustGiving.

## Pre-requisites
This project has been built using yarn 1.13.0 but it also works on node v10.4.1 and npm 6.1.0

## Project Scripts
### Running the project
For the first time run, dependencies need to be installed by running ``yarn install`` or ``npm install``

Once dependencies have been installed, the project can be run by using the ``yarn start`` or ``npm start`` command

### Other scripts
* Running Storybook: ``yarn storybook`` or ``npm run storybook``
* Running unit tests: ``yarn test`` or ``npm run test``. These work on a unix environment. For windows, use the ``yarn test-windows`` or ``npm run test-windows`` commands. This is needed in order to set the BABEL_ENV variable correctly
* Build for production: ``yarn build`` or ``npm run build``
* Build the storybook app: ``yarn build-storybook`` or ``npm run build-storybook``

## Project improvements / extensions
* Change folder structure to group files by domain instead of type
* Add service worker
* Explore pre-rendering options
* Include routing library
* Add animations and transitions
* Add bundle analyzer tool
* Use code splitting 
* Improve test coverage for react hooks (useEffect)
* More extensive use of UI theme
