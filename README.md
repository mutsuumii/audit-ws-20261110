# Security audit: websockets/ws

Date: 2026-11-10 | Auditor: [mutsuumii](https://github.com/mutsuumii)

## Summary

Found 34 issue(s): 34 high.

## Findings

### 1. [HIGH] Prototype pollution

**CWE-1321** | `test/permessage-deflate.test.js` line 124

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 2. [HIGH] Prototype pollution

**CWE-1321** | `test/permessage-deflate.test.js` line 148

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 3. [HIGH] Prototype pollution

**CWE-1321** | `test/permessage-deflate.test.js` line 166

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 4. [HIGH] Prototype pollution

**CWE-1321** | `test/permessage-deflate.test.js` line 279

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 5. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 11

Prototype mutation through user input affects all objects in the process.

```
foo: [{ __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 6. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 12

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 7. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 18

Prototype mutation through user input affects all objects in the process.

```
foo: [{ bar: [true, '2'], baz: ['1'], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 8. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 19

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 9. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 25

Prototype mutation through user input affects all objects in the process.

```
foo: [{ __proto__: null }, { baz: [true], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 10. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 26

Prototype mutation through user input affects all objects in the process.

```
bar: [{ baz: [true], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 11. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 27

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 12. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 33

Prototype mutation through user input affects all objects in the process.

```
foo: [{ bar: ['hi'], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 13. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 34

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 14. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 37

Prototype mutation through user input affects all objects in the process.

```
foo: [{ bar: ['0'], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 15. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 38

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 16. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 41

Prototype mutation through user input affects all objects in the process.

```
foo: [{ bar: ['baz'], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 17. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 42

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 18. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 45

Prototype mutation through user input affects all objects in the process.

```
foo: [{ bar: ['baz', true], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 19. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 46

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 20. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 60

Prototype mutation through user input affects all objects in the process.

```
hasOwnProperty: [{ __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 21. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 61

Prototype mutation through user input affects all objects in the process.

```
toString: [{ __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 22. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 62

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 23. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 65

Prototype mutation through user input affects all objects in the process.

```
foo: [{ constructor: [true], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 24. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 66

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 25. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 74

Prototype mutation through user input affects all objects in the process.

```
foo: [{ bar: [true, '1'], baz: ['1'], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 26. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 75

Prototype mutation through user input affects all objects in the process.

```
qux: [{ norf: [true], __proto__: null }],
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 27. [HIGH] Prototype pollution

**CWE-1321** | `test/extension.test.js` line 76

Prototype mutation through user input affects all objects in the process.

```
__proto__: null
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 28. [HIGH] NoSQL injection

**CWE-943** | `test/websocket.test.js` line 1087

MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

```
.update(req.headers['sec-websocket-key'] + GUID)
```

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
---

### 29. [HIGH] NoSQL injection

**CWE-943** | `test/websocket.test.js` line 1205

MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

```
.update(req.headers['sec-websocket-key'] + GUID)
```

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
---

### 30. [HIGH] NoSQL injection

**CWE-943** | `test/websocket.test.js` line 1238

MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

```
.update(req.headers['sec-websocket-key'] + GUID)
```

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
---

### 31. [HIGH] NoSQL injection

**CWE-943** | `test/websocket.test.js` line 1268

MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

```
.update(req.headers['sec-websocket-key'] + GUID)
```

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
---

### 32. [HIGH] NoSQL injection

**CWE-943** | `test/websocket.test.js` line 1299

MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

```
.update(req.headers['sec-websocket-key'] + GUID)
```

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
---

### 33. [HIGH] NoSQL injection

**CWE-943** | `test/websocket.test.js` line 1329

MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

```
.update(req.headers['sec-websocket-key'] + GUID)
```

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
---

### 34. [HIGH] NoSQL injection

**CWE-943** | `test/websocket.test.js` line 1398

MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

```
.update(req.headers['sec-websocket-key'] + GUID)
```

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
---
