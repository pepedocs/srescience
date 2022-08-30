# Service Modifier
> **Formal Definition**: A service modifier is anything that can cause a service's state to transition to another service state, or cause a change of value in at least one of the service variables in a service state.
<br/>

In practice, service actors such as a customer, an engineer such as an SRE engineer, another service that operates on a service, or the service acting on itself are all considered service modifiers because they can cause a service state to transition to another service state, or cause a change of value in at least one of the service variables in a service state.

As an example, when a user uploads a file to a cloud storage service, such service will probably transition from `UploadFinished` service state to `UploadRequested` service state or at least remain in the `UploadInProgress` service state while updating the `totalBytesUploaded` service variable.
<br/><br/>

>*Speaking and listening was never a chicken-and-egg situation, the latter must go first to fill the brain.* - Anonymous

