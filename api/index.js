//IMPORT LIBRARIES
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = express.Router();

//IMPORT SERVICES
const authRouter = require('./auth/auth.service');
const tutorialRouter = require('./tutorial/tutorial.service');
const paymentRouter = require('./subscription/payment.service');
const termsRouter = require('./terms_and_conditions/tc.service');
const credRouter = require('./leaked_credentials/cred.service');
const helpdeskRouter = require('./helpdesk/helpdesk.service');

//IMPORT MIDDLEWARES
const errorHandler = require('../_middleware/error-handler');

//MIDDLEWARES
appRouter.use(errorHandler);
appRouter.use(bodyParser.json());

appRouter.get('/', async (req, res) => {
  res.send('Server is running');
});

// ROUTES
appRouter.use('/auth', authRouter);
appRouter.use('/tutorials', tutorialRouter);
appRouter.use('/payments', paymentRouter);
appRouter.use('/terms', termsRouter);
appRouter.use('/leakCredentials', credRouter);
appRouter.use('/helpdesk', helpdeskRouter);

module.exports = { appRouter };