# Service Variable Acceptability

> **Formal Definition**: A Service Variable Acceptability A(x, Sv) is a boolean function that returns 1 if a change in Sv's value to x does not cause Sv's parent state to transition to another state, otherwise returns 0.
>
> - `A(x, Sv) = { 1 | if T(St, Sv, x) = St otherwise 0 }`
>
> - `T(St, Sv, x) = State Transition Function`

