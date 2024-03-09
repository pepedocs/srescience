---
title: SRE Science | Monitoring
editLink: false
head:
  - - meta
    - name: Monitoring
    - content: |
        What is monitoring?
---

# Monitoring
> **Formal Definition**: Monitoring is an automation strategy for inferring and presenting service states given a collection of service variables.


It’s therefore an automation strategy with the following end goals.

- Infer service states
- Present service states

We use the term **automation strategy** here because the goals identified must all be achieved through software automation. In contrast, manually inferring service states such as running complex system commands would require a service modifier to determine combinations of these system commands, parse their output into something consumable, then finally interpret this output into a service state.

Service monitoring and observability automate all these manual methods so that their service modifiers can focus more on their core intents and ultimately gain value from them. 

Using the cloud storage service example, a service modifier such as an engineer would need to know the following service states happened in order to know that there were no errors during the file upload;

- UploadInProgress
- U̶p̶l̶o̶a̶d̶F̶a̶i̶l̶e̶d̶
- UploadFinished

**If the goals above aren’t guaranteed, then it’s likely that automation is not a central purpose of monitoring or observability implementation.** In this case, any service modifier can be subjective about the value of monitoring and observability which in turn will not promote SRE as a discipline.