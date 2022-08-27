# Service State

> **Formal Definition**: A service state (SS) is a set of service variables [service variables](./service-variable.md).
>
> - `SS = { v | v is an element of SV }`
>
> - `SV = Set of service variables`

## Axioms

1. A service state is identifiable by a subset of service variables and their values.


2. A service state can be active or inactive. The former indicates that a service state is happening while the latter indicates a service state is not happening.

<br/>
In practice, a service state can be monitored by monitoring a subset of service variables and their values.
