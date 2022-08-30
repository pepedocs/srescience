# Service Variable

> **Formal Definition**: A service variable is a mutable attribute of a service state.

## Axioms
1. A change in a service variable's value may cause a service state to transition to another service state.

2. A service variable can be **Observable** which means it can be observed all the time by a service observer, **Partially Observable** if there are instances where it is impossible to observe it by a service observer, or **Hidden** if it is impossible to observe it by a service observer in all of its instances in a service state.

<br/>

In practice, service variables are what [monitoring](./monitoring.md) observes to infer a service state. Usually, a combination of these service variables' values is enough to infer that a service state is active or inactive.
<br/>

