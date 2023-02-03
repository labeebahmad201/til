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

![image](https://user-images.githubusercontent.com/44992984/216509278-cff80a47-0c7e-4967-837e-0840434ce71c.png)

As soon as user gets banner we can send an async event. this will be stored in shortlived cache. Let's say user token remains valid for 15mins. And user was banned when 14mins were left hence an Banned event would be sent which would be stored in cache(accessible by order service) for 15mins. Now whenever a request comes to auth sevice we would be able to look up in cache & know that this user has been banned. Reason we are making this cache shortlived is cause we want to save memory. 



![image](https://user-images.githubusercontent.com/44992984/216509896-160eecc2-7d62-4f5c-a9be-6e461c15a763.png)


