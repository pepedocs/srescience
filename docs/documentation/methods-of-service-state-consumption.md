---
title: SRE Science | Monitoring
editLink: false
head:
  - - meta
    - name: Monitoring
    - content: |
        What is monitoring?
---

# Methods of Service State Consumption
There can be multiple methods of consuming service states. By "consumption" this simply means how these states are processed. For example, a state could be, but not limited to, aggregated with other states or variables, separated with other states or variables, deleted, updated, interpreted or created.

# Methods
The following are methods of service state consumption which can be applied to a service or multiple services.

## Collection
Collection is a method for collecting states.

## Aggregation
Aggregation is a method for aggregating states

## Inference
Inference is a method for inferring sets of variables to a state.

## Interpretation
Interpretation is a method for reading states.

## Relay
Relay is a method for relaying states to another consumer.

## Tracking
Tracking is a method for tracking the transition of states.

> **Author's Note:** These are all the methods I can think of at the moment. This is a recent discovery from myself while having a conversation about Obervability and Monitoring with a colleague.

## Importance
It is important to understand these methods of state consumption because they form bigger concepts that typically have different definitions in organizations, at least at the time of this writing (3/21/2024).

## Status Quo of Observability and Monitoring
There is a status quo of Observability and Monitoring concepts. In order to understand this status quo, these two concepts need to be dissected using the methods of consumption. 

Today (3/21/2024), Observability and Monitoring are almost indistinguishable with each other, organizations use these two terms interchangeably. To make the long story short, Observability means almost everything including monitoring. The distinction of monitoring is that it's the process of `monitoring` metrics and `alerting`. 

The process of monitoring and alerting can be naively classified into the `Tracking` and `Relay` methods of consumption, respectively. However, the key indicator of the status quo of Observability and Monitoring is that there is no clear separation of concerns with regards to which of them does each of the consumption methods.

## Emerging Observability and Monitoring
There is an emerging understanding in Observability and Monitoring concepts. It's stark difference from the status quo is that it separates the concerns of the consumption methods. This separation is evident in `https://www.honeycomb.io/`'s strong stance in Observability. The separation of these methods of consumption is clear and while at the time of this writing, there isn't enough research done about it, it can be safely inferred that the separation is that `Tracking` and `Relay` are Monitoring's concern. However, there is more emphasis on Observability and this can mean that Monitoring will not necessarily evolve its tracking and relaying methods.


## Consequences
The consequences of these methods of consumption with respect to srescience is that it obsoletes the current (3/21/2024) definition of Monitoring and Observability in favor of the emphasis of these consumption methods.



