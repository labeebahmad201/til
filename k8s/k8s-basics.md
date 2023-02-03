## k8s cluster services
this gets fed configuration & it creates the "Desired state"


## worker vs master
A Kubernetes cluster is made up of one **master** node and several **worker** nodes. The worker nodes are responsible for running the containers and doing any work assigned to them by the master node. The master node looks after: scheduling and scaling applications.

config is fed to API and it will be upto cluster services to deploy infrastructure. 

## Pod:
Pod is smallest unit in deployment. In pod we can have 1 or more containers. so 

## Replicas
specify how many of pods we are going to create.

![image](https://user-images.githubusercontent.com/44992984/216569644-2bf9658c-cd70-4217-8bf5-a73da135b376.png)

## Deployment
A Kubernetes Deployment tells Kubernetes how to create or modify instances of the pods that hold a containerized application. 

## Service 
Service provides an interface to the pod. You can create one service for one deployment in the same deployment file.

`docker build -t labeeb/auth-ms .`
`kubectl version --short`

![image](https://user-images.githubusercontent.com/44992984/216603281-d3b62cf8-355e-441a-8a0d-ead86068580b.png)

![image](https://user-images.githubusercontent.com/44992984/216603507-9ed60f14-c5fe-4911-bb09-809118c69c5f.png)

![image](https://user-images.githubusercontent.com/44992984/216604850-c40e4645-4144-46e0-b140-b5115c221141.png)
