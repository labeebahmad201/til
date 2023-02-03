## Events in microservices

While using async events in microservices, you might end up misspelling types. This can cause logical error that aren't caught on the 
compile team. 

## Workaround:
You can export all such event in common package & use that as library, now you will be getting all events objects from library & since all 
services will be calling method of this library therefore there won't be any chance of misspelling. 

