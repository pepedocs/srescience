---
title: SRE Science | Service Modifier
editLink: false
head:
  - - meta
    - name: Service Modifier
    - content: |
        Service modifiers mutate service variables.
---

# Service Modifier
> **Formal Definition**: A service modifier is anything that can cause a service's state to transition to another service state, or cause a change of value in at least one of the service variables in a service state.
<br/>

In practice, service actors such as a **customer**, an **engineer** such as an **SRE engineer**, **another service** that operates on a service, or the **service** acting on itself are all considered service modifiers because they can cause a service state to transition to another service state, or cause a change of value in at least one of the service variables in a service state.

In other words, service modifiers mutate service variables.

Using the cloud storage service example, when a user uploads a file, such service will probably transition from **UploadRequested** service state to **UploadInProgress** service state while updating the **totalUploadedBytes** service variable.

Why is a Service Modifier definition important and why not just use a simple concept of a User, Engineer or a Customer? This is so that a definition of a user is clear cut about it being able to modify a service state. By doing this, it effectively includes a "user" in the semantics of a service as a finite-state machine.
<br/><br/>

>*Speaking and listening was never a chicken-and-egg situation, the latter must go first to fill the brain.* - Anonymous

