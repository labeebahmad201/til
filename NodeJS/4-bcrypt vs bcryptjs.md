# bcrypt vs bcryptjs

`bcrypt` internally uses `libuv`, hence event loop isn't blocked but `bcryptjs` blocks the event loop. 
