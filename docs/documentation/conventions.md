# Conventions
Throughout this website, global conventions are used to encourage consistency in the documentation.

The following are these conventions and can be skipped for now and referenced later as needed.

### Creating axioms
`Axioms` are created as needed to support a definition.

### Writing service names
A service state name is written in camelcase form and is an identifier that describes a service state such as UploadInProgress, UploadFailed or UploadFinished.

### Service child
A service S's `child` is a service state s that can happen in sometime in S's lifetime.

### Practical service data format
Practical examples for service data such as service, service states, etc are presented in YAML format for usability and interoperability purposes.

### Parent of a service state
A service S is called a `parent` of service state St if and only if St is a child of S.

### Active Inactive service state
An active service state means that a service state is the current state of its parent service while an inactive service state means the opposite case.