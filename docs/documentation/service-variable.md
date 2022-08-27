# Service Variable

> **Formal Definition**: A service variable (Sv) is a mutable attribute of a service state where its values are said to be [acceptable](./service-variable-acceptability.md) by a service state.
>
> - `Sv = { x | A(x, Sv) == 1 }`
>
> - `A(x, Sv) = Acceptability function`

## Axioms
1. A service variable's value can change within a service state.

2. A change in a service variable's value may cause a service state to transition to another service state.

2. A service variable can be **Observable**, **Partially Observable**, or **Hidden**.
<br/>

In practice, service variables are what [monitoring](./monitoring.md) observes to infer a service state. Usually, a combination of these service variables' values is enough to infer that a service state is active or inactive.
<br/>

