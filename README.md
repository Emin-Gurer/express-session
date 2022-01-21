# This repo shows how to use express-session

**express-session secret option should be an environment variable in production**

Sessions is stored in JS memoryStore as default
This is not reliable in production
Refer to express-session docs
If you stop server and restart again data will be lost
