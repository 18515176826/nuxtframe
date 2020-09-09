const middleware = {}

middleware['router'] = require('../middleware/router.js')
middleware['router'] = middleware['router'].default || middleware['router']

middleware['test'] = require('../middleware/test.js')
middleware['test'] = middleware['test'].default || middleware['test']

export default middleware
