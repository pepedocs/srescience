# Service Variable

> **Formal Definition**: A service variable is a feature of a service state.


### Axioms
1. A service variable's value can change within a particular state.

2. A service variable can be **Observable**, **Partially Observable**, or **Hidden**.
<br/>

In practice, service variables are what [monitoring](./monitoring.md) observes to infer a particular service state. Usually, a pattern of these service variables' values or behavior is enough to infer a service state.
<br/>

