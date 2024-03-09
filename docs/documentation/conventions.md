# Conventions
Throughout this website, global conventions are used to encourage consistency in the documentation. The following are these conventions.

### Writing service names
A service state name is written in *camelCase* form and is an identifier that must be descriptive to a service state such as **UploadInProgress**, **UploadError**, or **UploadFinalizing**. Avoid service names that only describe a service state variable such as **CPUUsage**.

### Practical service data format
Practical examples for service data such as service, service states, etc are presented in YAML format for usability and machine interoperability purposes.


### Choice of Service Reliability Perspective
Most of the time, we choose the service reliability perspective of a typical human end user or "the customer" as a business would call it. The reason for this is that this user's service requirements are the ultimate reason why software services exist and consequently why service reliability is necessary.
