You can do availablity testing using on your nodejs application using autocannon

this send requests to some route that may cause performance bottleneck. this test lasts for 60 seconds. 
> autocannon -d 60 http://localhost/stress 

In parallel, you can send request to /pulse service this performs some simple operation like return a string. 
> autocannon http://localhost/pulse 

In this case if /pulse performance drops then that would mean /stress is blocking event loop. As an example you can use becryptjs in /stress service & that would block the loop
cause of this /pulse would also slow down.

