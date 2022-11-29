# What is Service Reliability?

> **Formal Definition**: Service reliability is equal to the weighted sum of the probabilities of actual state transitions of a service complying with the expected state transitions of the same service.

Before we can define service reliability we have to define first a few other important characteristics of a [service](/documentation/service.md).

## Tr_Expected
A set of [service state](/documentation/service-state.md) transitions that are expected to happen during a [service's lifetime](/documentation/service-state.md#service-state-lifetime).

`Tr_Expected = {TrE₀, TrE₁,…,TrEᵢ}`

Each service state transition TrEᵢ is a triple composed of the start state, end state, and the input which when consumed by the start state will cause it to transition to the end state.

`TrEᵢ = {TrE_StartStateᵢ, TrE_EndStateᵢ, TrE_Inputᵢ}`

## Concrete Example
In practice, these expected service state transitions are the expected behavior of any aspect of a service due to how it was designed as a software service solving a particular business problem. For example, an online banking website must enable its users to log in (start state) using a login form, and when the login is successful it must present the user with a home page (end state) that contains a summary of his or her transactions.

## Tr_Actual
A set of service state transitions that have happened during a service's lifetime.

```
Tr_Actual = {TrA₀, TrA₁,…,TrAᵢ}
TrAᵢ = {TrA_Instance₀, TrA_Instance₁, …, TrA_Instanceᵢ}
```
Tr_Actual's member TrAᵢ is a set of service state transitions that have happened in a service's lifetime. Each of these state transitions is called a TrA_Instance.

> **Important**
TrEᵢ expects compliance for every TrA_Instanceᵢ.

```
TrA_Instanceᵢ = {TrE_StartStateᵢ, TrE_EndStateₓ, TrE_Inputᵢ}
TrEᵢ = {TrE_StartStateᵢ, TrE_EndStateᵢ, TrE_Inputᵢ}
```

Given TrA_Instanceᵢ and TrEᵢ, x in TrE_Endstate subscript is a variable because there can be varied end states in actual state transitions in a service.

The following is the TrE_Compliance function that returns a value of 0 or 1 where 0 means TrA_Instanceᵢ has failed to comply to TrEᵢ, otherwise 1 means the opposite.

`TrE_Compliance(TrA_Instanceᵢ, TrEᵢ) = 1 or 0`

> **Important** When TrE_EndStateₓ is equal to TrE_EndStateᵢ, then TrA_Instanceᵢ is equal to TrEᵢ. In this case, TrE_Compliance is equal to 1, otherwise 0.

## Tr_Target
A set of target service state transition probabilities.

A member of Tr_Target is a probability of an actual state transition to comply with its corresponding expected state transition. As you might see now the instances of Tr_Actual's members can be viewed as probabilistic events therefore we can calculate their probabilities.

An example of a Tr_Target with concrete probability values.

`Tr_Target = {P(TrA, TrE)₀ = 0.99, P(TrA, TrE)₁ = 0.95,…,P(TrA, TrE)ᵢ = 0.999}`

At this point, we can now define service reliability or SR.

```
SR = P(TrA, TrE)₀ * RW₀ + P(TrA, TrE)₁ * RW₁ + … P(TrA, TrE)ᵢ * RWᵢ , or
SR = RW * Tr_Target
```

Where RWᵢ or reliability weight is a weight that denotes the importance of a certain state transition compliance. We can now, therefore, define service reliability.


## Service Reliability
The weighted sum of the probabilities of actual state transitions of a service complying with the expected state transitions of the same service.


## Choosing Tr_Expected
So far the definition of service reliability is agnostic to the perspective of which [service modifier](/documentation/service-modifier.md) perceives it. This is an important feature because in practice **which perspective matters is usually a business choice**.

However, most of the time if not all of the time, SRE Science chooses the perspective of the typical human user or "the customer" as a business would call it. The reason for this is that the human user's service requirements are the ultimate reason why services exist and consequently why service reliability is necessary.

**Tr_Expected must be primarily viewed from the perspective of a human service user that can be equated to a customer of a concrete example of a business providing software services.**

## Concrete Example
Using our [naive cloud storage service](/documentation/service#naive-cloud-storage-service-example) example, we can see that the **UploadProgress** state has a field called **expect**. This field describes Tr_Expected.

```
- name: UploadInProgress
description: Service is uploading chunks of client file data.
expect:
    - User must be presented with an upload progress widget updated with progress values from 0% to 100% in real-time
```

Looks familiar? This is fundamentally a Product Owner's acceptance criteria in the world of Scrums.


## Finding Service Reliability's Value
As you might notice, this is where Service Reliability's value can be found, from the perspective of a customer, otherwise what is the value of 99.999% reliable system if it cannot be calculated directly to a customer's experience? It is important to mention that there are architectural patterns for improving reliability that became design conventions from a service design point-of-view, however, in practice, their effects are in a wide spectrum of cost efficiency and customer satisfaction, therefore from a business perspective, their negative effects can be either operationally costly or unnecessary. We may loosely call these effects **service entropy**.

