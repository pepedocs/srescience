# Monitoring
> **Formal Definition**: Monitoring is an automation strategy for inferring and presenting service states given a collection of service variables.
<br/>

<br/>
In practice, the set of service variables is presented as metrics and is usually in a time-series data type. Inference of service states is achieved by the evaluation of a rule expressed in a specific monitoring platform query language.
<br/>


## Parts of Monitoring
As defined, monitoring can be divided into two important parts. One is the **inference of service states** and the second one is for the **presentation of these inferred service states**.


## Inference in Monitoring
Methods of inference are implementation details however one of the most common ones is by using a query language to query a service state from a database of observability metrics.

## Presentation in Monitoring
Like inference in monitoring, presentation methods in monitoring are also an implementation detail. Two of the most common methods are visualizing service states in a visualization system and presenting service states as an alert in an incident management system.