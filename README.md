# OCA Server Auth

This repository contains **29** OCA packages for server auth.

## Packages Included (29 packages)

- **odoo-bringout-oca-server-auth-auth_admin_passkey** - From server: auth_auth_admin_passkey
- **odoo-bringout-oca-server-auth-auth_api_key** - From server: auth_auth_api_key
- **odoo-bringout-oca-server-auth-auth_api_key_group** - From server: auth_auth_api_key_group
- **odoo-bringout-oca-server-auth-auth_api_key_server_env** - From server: auth_auth_api_key_server_env
- **odoo-bringout-oca-server-auth-auth_jwt** - From server: auth_auth_jwt
- **odoo-bringout-oca-server-auth-auth_jwt_demo** - From server: auth_auth_jwt_demo
- **odoo-bringout-oca-server-auth-auth_jwt_server_env** - From server: auth_auth_jwt_server_env
- **odoo-bringout-oca-server-auth-auth_ldaps** - From server: auth_auth_ldaps
- **odoo-bringout-oca-server-auth-auth_oauth_autologin** - From server: auth_auth_oauth_autologin
- **odoo-bringout-oca-server-auth-auth_oauth_filter_by_domain** - From server: auth_auth_oauth_filter_by_domain
- **odoo-bringout-oca-server-auth-auth_oauth_multi_token** - From server: auth_auth_oauth_multi_token
- **odoo-bringout-oca-server-auth-auth_oauth_ropc** - From server: auth_auth_oauth_ropc
- **odoo-bringout-oca-server-auth-auth_oidc** - From server: auth_auth_oidc
- **odoo-bringout-oca-server-auth-auth_oidc_environment** - From server: auth_auth_oidc_environment
- **odoo-bringout-oca-server-auth-auth_saml** - From server: auth_auth_saml
- **odoo-bringout-oca-server-auth-auth_session_timeout** - From server: auth_auth_session_timeout
- **odoo-bringout-oca-server-auth-auth_signup_verify_email** - From server: auth_auth_signup_verify_email
- **odoo-bringout-oca-server-auth-auth_user_case_insensitive** - From server: auth_auth_user_case_insensitive
- **odoo-bringout-oca-server-auth-base_user_show_email** - From server: auth_base_user_show_email
- **odoo-bringout-oca-server-auth-cross_connect_client** - From server: auth_cross_connect_client
- **odoo-bringout-oca-server-auth-cross_connect_server** - From server: auth_cross_connect_server
- **odoo-bringout-oca-server-auth-impersonate_login** - From server: auth_impersonate_login
- **odoo-bringout-oca-server-auth-password_security** - From server: auth_password_security
- **odoo-bringout-oca-server-auth-user_log_view** - From server: auth_user_log_view
- **odoo-bringout-oca-server-auth-users_ldap_groups** - From server: auth_users_ldap_groups
- **odoo-bringout-oca-server-auth-users_ldap_mail** - From server: auth_users_ldap_mail
- **odoo-bringout-oca-server-auth-users_ldap_populate** - From server: auth_users_ldap_populate
- **odoo-bringout-oca-server-auth-vault** - From server: auth_vault
- **odoo-bringout-oca-server-auth-vault_share** - From server: auth_vault_share


## Installation

Install any package from this category:

```bash
# Install from local directory
pip install packages/oca-server-auth/PACKAGE_NAME/

# Install in development mode  
pip install -e packages/oca-server-auth/PACKAGE_NAME/

# Using uv (recommended for speed)
uv add packages/oca-server-auth/PACKAGE_NAME/
```

## Repository Structure

Each package in this repository follows the standard Odoo addon structure:

```
oca-server-auth/
├── odoo-bringout-oca-PROJECT-ADDON/
│   ├── ADDON_NAME/           # Complete addon code
│   │   ├── __init__.py
│   │   ├── __manifest__.py
│   │   └── ... (models, views, etc.)
│   ├── pyproject.toml        # Python package configuration
│   └── README.md            # Package documentation
└── ...
```

## Contributing

These packages are maintained as part of the [OCA (Odoo Community Association)](https://github.com/OCA) ecosystem.

## License

Each package maintains its original license as specified in the OCA repositories.
