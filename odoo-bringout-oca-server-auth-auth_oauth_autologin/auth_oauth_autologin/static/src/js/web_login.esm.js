/** @odoo-module **/

import {Interaction} from "@web/public/interaction";
import {registry} from "@web/core/registry";
import {rpc} from "@web/core/network/rpc";

/**
 * v19 port: the login form is no longer a public widget
 * (`publicWidget.registry.login` was removed), it is driven by the public
 * Interaction system. On the login page, ask the backend whether a single
 * auto-login OAuth provider is configured and, if so, redirect to it.
 */
export class AutoLoginRedirect extends Interaction {
    static selector = ".oe_login_form";

    async willStart() {
        const parsedUrl = new URL(window.location.href);
        if (parsedUrl.pathname !== "/web/login") {
            return;
        }
        const redirect = window.location.href.replace("/web/login", "/web");
        const result = await rpc("/auth/auto_login_redirect_link", {redirect});
        if (result) {
            window.location = result;
        }
    }
}

registry
    .category("public.interactions")
    .add("auth_oauth_autologin.auto_login_redirect", AutoLoginRedirect);
