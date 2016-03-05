/*doc
---
title: Toggle
name: toggle_react
parent: form_react
---

<code class="pam">
  <i class="fa fa-download" alt="Install the Component">
    npm install pui-react-toggle --save
  </i>
</code>

Require the subcomponent:

```
var Toggle = require('pui-react-toggle').Toggle;
```

The Toggle component takes an `onChange` callback.

```react_example
<Toggle onChange={() => console.log('I have been toggled!')}/>
```

Toggles accept a `checked` prop that turns on the switch.

```react_example
 <Toggle checked/>
```

*/