# NoSQL injection
# CWE-943 | Severity: HIGH
# File: test/websocket.test.js line 1299

**Risk:** MongoDB/NoSQL query built directly from request data. Attacker manipulates query operators.

**Fix:** Validate and sanitize all query fields. Use query builder methods, not raw objects from req.
