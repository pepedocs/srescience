import{_ as e,o as s,c as n,d as a}from"./app.b86be3aa.js";const h=JSON.parse('{"title":"Service","description":"","frontmatter":{},"headers":[{"level":2,"title":"Definition","slug":"definition","link":"#definition","children":[]},{"level":2,"title":"Service Lifetime","slug":"service-lifetime","link":"#service-lifetime","children":[]},{"level":2,"title":"Naive Cloud Storage Service Example","slug":"naive-cloud-storage-service-example","link":"#naive-cloud-storage-service-example","children":[]}],"relativePath":"documentation/service.md"}'),t={name:"documentation/service.md"},i=a(`<h1 id="service" tabindex="-1">Service <a class="header-anchor" href="#service" aria-hidden="true">#</a></h1><p>SRE practices can be reduced to their core subject - the abstract version of a software service.</p><p>To precisely and consistently express an abstract service or a service, its parts, and its derivatives, a service must first be defined using a standard computing model. <br></p><p>Below we reuse the <em>finite-state machine</em> (FSM) model to define a service because:</p><ol><li><p>Intuitively, a service can be fully expressed using FSM or automaton primitives and therefore there is no need to invent new abstract concepts.</p></li><li><p>An FSM or automaton is a widely used and understood computing model even in practice. <br></p></li></ol><h2 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h2><blockquote><p>A service <strong>S</strong> is an FSM of the following quintuple: <br><br><strong>S</strong> = (ServiceStates, ServiceInputs, ServiceStart, ServiceEnd, ServiceTransitionFunction) <br><br><strong>ServiceStates</strong> = A set of all <a href="./service-state.html">service states</a> that can happen in S&#39;s lifetime. <br><br><strong>ServiceInputs</strong> = A set of actions that is generated by a <a href="./service-modifier.html">service modifier</a> and can be fed into a ServiceTransitionFunction. <br><br><strong>ServiceTransitionFunction</strong> = A logic that takes a service state and a service input as inputs and in turn outputs a service state. <br><br><strong>ServiceStart</strong> = The starting service state of S. <br><br><strong>ServiceEnd</strong> = A set of service states that can happen last in S&#39;s lifetime.</p></blockquote><h2 id="service-lifetime" tabindex="-1">Service Lifetime <a class="header-anchor" href="#service-lifetime" aria-hidden="true">#</a></h2><p>A service state <strong>S</strong>&#39;s lifetime is the duration that starts from when S&#39;s ServiceStart became active for the first time and ends when S&#39;s ServiceEnd became active for the last time. <br></p><p>To reinforce the knowledge of expressing a service using FSM primitives the following is provided to demonstrate how this expression can be applied to a naive cloud storage service.</p><h2 id="naive-cloud-storage-service-example" tabindex="-1">Naive Cloud Storage Service Example <a class="header-anchor" href="#naive-cloud-storage-service-example" aria-hidden="true">#</a></h2><p>A software service that provides the following services to its clients:</p><ol><li>Upload a client&#39;s file data.</li><li>Download a client&#39;s file data.</li><li>Delete a client&#39;s file data.</li><li>Update a client&#39;s file data. <br></li></ol><p>Using FSM primitives this service can be expressed as the following:</p><br><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Kind: Service</span></span>
<span class="line"><span style="color:#A6ACCD;">metadata:</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;Naive Cloud Storage&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">spec:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - ServiceStates:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: UploadRequested</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: Service is processing a client upload request.</span></span>
<span class="line"><span style="color:#A6ACCD;">        expect:</span></span>
<span class="line"><span style="color:#A6ACCD;">          - The user must be presented with an upload progress widget with text &quot;Upload Requested&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          - At this point the upload progress widget progress must be 0%</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: UploadInProgress</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: Service is uploading chunks of client file data.</span></span>
<span class="line"><span style="color:#A6ACCD;">        expect:</span></span>
<span class="line"><span style="color:#A6ACCD;">          - User must be presented with an upload progress widget updated with progress values from 0% to 100% in real-time</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: UploadFinalizing</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: Service is finalizing a client&#39;s upload request.</span></span>
<span class="line"><span style="color:#A6ACCD;">        expect:</span></span>
<span class="line"><span style="color:#A6ACCD;">          - The user must be presented with  an upload progress widget with text &quot;Upload Finalizing&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          - At this point upload progress widget progress must be 100%</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: UploadError</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: Service has encountered an error while processing a client&#39;s upload request.</span></span>
<span class="line"><span style="color:#A6ACCD;">        expect:</span></span>
<span class="line"><span style="color:#A6ACCD;">          - The user must be presented with an error widget with text &quot;An error was encountered while uploading file {user_file}, please try again&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: UploadThroughputLow</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: Service&#39;s upload throughput is currently lower than average upload througput</span></span>
<span class="line"><span style="color:#A6ACCD;">        expect:</span></span>
<span class="line"><span style="color:#A6ACCD;">          - The user must be presented with a text message stating &quot;The upload is taking longer than expected, please be patient.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Starting</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: Service is starting.</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Finalizing</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: Service is finalizing before it fully stops running.</span></span>
<span class="line"><span style="color:#A6ACCD;">  - ServiceInputs:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: UploadAPIRequest</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: A client requested a file data upload using the service&#39;s upload API.</span></span>
<span class="line"><span style="color:#A6ACCD;">  - ServiceTransitionFunction:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - input: UploadAPIRequest</span></span>
<span class="line"><span style="color:#A6ACCD;">        state: UploadInProgress</span></span>
<span class="line"><span style="color:#A6ACCD;">        output: UploadRequested</span></span>
<span class="line"><span style="color:#A6ACCD;">        description: A service can do multiple upload request at the same time.</span></span>
<span class="line"><span style="color:#A6ACCD;">  - ServiceStart: Starting</span></span>
<span class="line"><span style="color:#A6ACCD;">  - ServiceEnd: Finalizing</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),l=[i];function r(o,p,c,d,u,A){return s(),n("div",null,l)}const C=e(t,[["render",r]]);export{h as __pageData,C as default};
