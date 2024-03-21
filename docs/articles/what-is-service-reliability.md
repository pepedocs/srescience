# What is Service Reliability?

> **Formal Definition**: Service reliability is equal to the weighted sum of the probabilities of actual state transitions of a service complying with its expected state transitions.


Before we can define service reliability we have to define first a few other important characteristics of a [service](/documentation/service.md).

## Tr_Expected
A set of [service state](/documentation/service-state.md) transitions that are expected to happen during a [service's lifetime](/documentation/service-state.md#service-state-lifetime).

`Tr_Expected = {TrE₀, TrE₁,…,TrEᵢ}`

Each service state transition TrEᵢ is a triple composed of the start state, end state, and the input which when consumed by the start state will cause it to transition to the end state.

`TrEᵢ = {TrE_StartStateᵢ, TrE_EndStateᵢ, TrE_Inputᵢ}`

## Concrete Example
In practice, these expected service state transitions are the expected behavior of any aspect of a service due to how it was designed as a software service solving a particular business problem. For example, an online banking website must enable its users to log in (start state) using a login form, and when the login is successful it must present the user with a home page (end state) that contains a summary of that user's transactions.

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
The weighted sum of the probabilities of actual state transitions of a service complying with its expected state transitions.


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
As you might notice, this is where Service Reliability's value can be found, from the perspective of a customer, otherwise what is the value of 99.999% reliable system if it cannot be calculated directly to a customer's experience? It is important to mention that there are great architectural patterns for improving reliability that became design conventions from a service design point-of-view, however, in practice, their effects are in a wide spectrum of cost efficiency and customer satisfaction, therefore from a business perspective, their negative effects can be either operationally costly or unnecessary. We may loosely call these effects **service entropy** especially if their effects are difficult to quantify from a reliability perspective.


> **Analogy**: Jane love's fishing and on the weekend will be her 100th fishing session. Jane is smart and she realized after her 5th fishing session the 3 most important things she needs to bring with her to make her fishing experience a blast are, in order of importance, a cold 6-pack beer, her wireless earphones, and of course her mobile phone. From then on, Jane tried her best to ensure these items were available and functional to have a great fishing experience. Although sometimes he forgets to charge her smart phone and thus it has caused her a little bit of inconvenience.
> 
> A **state transition** is analogous to Jane starting **from** a state where she didn't have these items **to** a state where these items availability are updated which in this case when she was in her desired fishing spot. 
The **expected state transition** is that she expects that 100% of these items are available and functional.
>
>An example of an **actual state transition** is when she brought all these items but her mobile phone had a low battery.
>
>Jane has a preference of these items and she thinks that without beer to drink fishing is almost pointless. But also it's useful to listen to music when nature sound is too boring. One could add weight values to these preference such as, 0.98 for beer and 0.01 for both of the earphones and the mobile phone. 
>
> One could evaluate reliability in Jane's case as:
>
>  - 0.98(beer) + 0.01(phone) + 0.01(earphones)
>
> Where beer, phone and earphones are the probability of actually having them in the actual state which is the fishing spot.
>
> Therefore to simplify the reliability of Jane making her fishing experience a blast is:
>
> - 0.98(P(beer)) + 0.01(P(phone)) + 0.01(P(earphones))
> where P is "probability of" in the value range of 0 to 1.
