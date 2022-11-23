# Service Reliability
Before we can define service reliability we have to define first a few other building blocks.

## Axiom 5: Tr_Expected
A set of service state transitions that are expected to happen during a service’s lifetime.

**Tr_Expected** = {TrE₀, TrE₁,…,TrEᵢ}

Each service state transition TrEᵢ is a triple composed of the start state, end state, and the input which when consumed by the start state will cause it to transition to the end state.

**TrEᵢ** = {TrE_StartStateᵢ, TrE_EndStateᵢ, TrE_Inputᵢ}

In practice, these expected service state transitions are the expected behavior of any aspect of a service due to how it was designed as a software service solving a particular business problem. For example, an online banking website must enable its users to log in (start state) using a login form, and when the login was successful it must present the user with a home page (end state) that contains a summary of his or her transactions.

## Tr_Actual
The set of service state transitions that have happened during a service’s lifetime.

**Tr_Actual** = {TrA₀, TrA₁,…,TrAᵢ}

**TrAᵢ** = {TrA_Instance₀, TrA_Instance₁, …, TrA_Instanceᵢ}

Tr_Actual’s member TrAᵢ is a set of service state transitions that have happened in a service’s lifetime. Each of these state transitions is called a TrA_Instance.

**Theorem 1**

TrEᵢ expects compliance for every TrA_Instanceᵢ. Below is the compliance function that will be defined in further paragraphs.

