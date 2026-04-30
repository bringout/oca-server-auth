# Security

Access control and security definitions in password_security.

## Access Control Lists (ACLs)

Model access permissions defined in:
- **[ir.model.access.csv](../password_security/security/ir.model.access.csv)**
  - 2 model access rules

## Record Rules

Row-level security rules defined in:

## Security Groups & Configuration

Security groups and permissions defined in:
- **[res_users_pass_history.xml](../password_security/security/res_users_pass_history.xml)**

```mermaid
graph TB
    subgraph "Security Layers"
        A[Users] --> B[Groups]
        B --> C[Access Control Lists]
        C --> D[Models]
        B --> E[Record Rules]
        E --> F[Individual Records]
    end
```

Security files overview:
- **[ir.model.access.csv](../password_security/security/ir.model.access.csv)**
  - Model access permissions (CRUD rights)
- **[res_users_pass_history.xml](../password_security/security/res_users_pass_history.xml)**
  - Security groups, categories, and XML-based rules

Notes
- Access Control Lists define which groups can access which models
- Record Rules provide row-level security (filter records by user/group)
- Security groups organize users and define permission sets
- All security is enforced at the ORM level by Odoo
