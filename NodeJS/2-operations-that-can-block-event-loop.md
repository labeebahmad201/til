this blocks the event loop cause of `while(1)`
![image](https://user-images.githubusercontent.com/44992984/216249772-131cfbd1-c37a-4dda-84f9-76f9be37c580.png)

this won't block the event loop as the readFile is async & this isn't handled on event loop.
![image](https://user-images.githubusercontent.com/44992984/216249549-26172366-1188-4e10-b99f-212a6e135dd1.png)


