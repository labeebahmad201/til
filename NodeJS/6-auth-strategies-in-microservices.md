# Auth Strategies

We have a separate auth & order-ms(a microservice that needs to be protected).

![image](https://user-images.githubusercontent.com/44992984/216506439-1fe86d89-101a-495e-ad6d-65bd0e7d2c7e.png)

![image](https://user-images.githubusercontent.com/44992984/216506692-9a532957-9f5e-40bf-ad9b-1c677cd432d0.png)

This order service needs to check if it got the valid token.

## Approaches
order-ms can directly call auth service to verifiy token.

![image](https://user-images.githubusercontent.com/44992984/216507464-c0d6a99e-b29c-424b-a14f-9ab23be604a6.png)
But this means we will have single point of failure. If auth goes down everthing goes down. 

Another variation of this is that we can setup & apiGateway but that would also mean it has single point of failure. 

![image](https://user-images.githubusercontent.com/44992984/216507736-1b43c91b-6917-487e-b0c1-c6ef452a32f0.png)


Option2: We can move auth check logic to a common package  & include that package in order-ms. 
But that would mean that we won't be able to revoke the access granted through jwt token.
this doesn't have that single point of failure problem, but here token can't be revoked.
Let's say we want to ban a user, with this localized auth token verification logic we won't be able to do that. Cause this verification logic won't with auth service if the user has been banned or not. 
![image](https://user-images.githubusercontent.com/44992984/216507859-76512c6b-436b-4cd2-b685-ac946eb71796.png)


![image](https://user-images.githubusercontent.com/44992984/216509021-a132bbfb-9e76-43f5-a724-ec2250162651.png)



