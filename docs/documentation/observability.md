---
title: SRE Science | Observability
editLink: false
head:
  - - meta
    - name: Observability
    - content: |
        What is observability?
---

**IMPORTANT:** With the new discovery in [Service State Consumption Methods](./methods-of-service-state-consumption.md), the following definition is not anymore necessary because for the purpose of srescience, Monitoring and Observability are not fundamental concepts and therefore they can be implemented in different ways.


# Observability
> **Formal Definition**: Observability is a strategy that exposes service variable values to enable efficient monitoring of a service.
<br/>

It’s therefore an automation strategy with the following end goals.

- Expose service variable values
- Enable service monitoring

## Effective Service Monitoring
Observability promotes effective service monitoring by increasing the availability of observable service variables and therefore providing flexibility in monitor implementation.

## Efficient Service Monitoring
Observability promotes efficient service monitoring by optimizing on exposure of the most valuable service variables in order to create effective monitors.


In practice, observability is usually a two-step process. The first step is the collection of service variables, and the second step is the exportation of these service variables to a [monitoring](./monitoring.md) platform.

## 

<br/>
