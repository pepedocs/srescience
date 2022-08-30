# Service State

> **Formal Definition**: A service state *St* is a set of [service variables](./service-variable.md) that can exist in all of St's lifetimes.

## Axioms

1. A service state is identifiable by a subset of service variables and their values.

2. A service state St can be **Active** or **Inactive** where the former means that St is the current state of St's parent service while the latter means the opposite case.

<br/>

In practice, a service state can be monitored by monitoring a subset of service variables and their values. Using the naive cloud storage service as an example, service variables `uploadedBytes`, `uploadTimeElapsed`, and `uploadAverageThroughput` values can be used to monitor an `UploadThroughputLow` service state where it indicates that the service's current upload throughput is lower than its average upload throughput.
