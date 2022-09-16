# Service State

> **Formal Definition**: A service state **St** is a set of [service variables](./service-variable.md) that can happen in at least one of St's lifetimes.

## Axioms

1. A service state is identifiable by a subset of service variables and their values.

## Active or Inactive Service State
An **active service state** St means that it is its parent service's current service state and therefore it's currently happening, otherwise, it is an **inactive service state**.

## Service State Lifetime
A service state **St**'s lifetime is the duration that starts from when it was transitioned to by a previous active service state **St - 1** and ends right before it transitions to the next active service state **St + 1**.
St can become active at any time depending on the availability of its parent's ServiceTransitionFunctions and the future ServiceInputs encountered, therefore St can have multiple lifetimes.

## Child of a Service
A service **S**'s **child** is a service state **St** that can happen sometime in S's lifetime.

## Parent of a Service State
A service **S** is called a **parent** of a service state **St** if and only if St is a child of S.

<br/>

In practice, a service state can be monitored by monitoring a subset of service variable values. Using the naive cloud storage service example, the values of service variables **totalUploadedBytes**, **uploadTimeElapsed**, and **uploadAverageThroughput** can be used to monitor a **UploadThrouputLow** service state that indicates the service's current upload throughput is lower than its average upload throughput.

The following is an illustration of the example in the
previous paragraph.

```
Kind: ServiceMonitor
metadata:
  name: "Monitor Low Upload Throughput"
spec:
    - TargetServiceState: UploadThrougputLow
    - ServiceVariables:
        - name: totalUploadedBytes
          description: Real-time count of uploaded file data in bytes
        - name: uploadTimeElapsed
          description: Total time elapsed since the file data upload started
        - name: uploadAverageThroughput
          description: Current average file data upload throughput.

```