# Service Modifier
> **Formal Definition**: A service modifier is anything that can cause a service to transition to another service state, or cause a change of value in at least one of the service variables in a service state.
<br/>

In practice, service actors such as a customer, an engineer such as an SRE engineer, or another service that operates on a service are all considered service modifiers because they can cause a service to transition to another service state, or cause a change of value in at least one of the service variables in a service state.

As an example, when a user uploads a file to a cloud-based storage service, such service will probably transition to an "uploaded" service state or at least remain in the "uploading" service state but update the "total bytes uploaded" state variable.
<br/><br/>

>*Speaking and listening was never a chicken-and-egg situation, the latter must go first to fill the brain.* - Anonymous

