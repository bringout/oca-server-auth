/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import {rpc} from "@web/core/network/rpc";

publicWidget.registry.login.include({
    selector: ".oe_login_form",

    start: async function () {
        const def = this._super.apply(this, arguments);
        let url = window.location.href;
        const parsedUrl = new URL(url);
        if (parsedUrl.pathname === "/web/login") {
            url = url.replace("/web/login", "/web");
            const result = await rpc("/auth/auto_login_redirect_link", {
                redirect: url,
            });
            if (result) {
                window.location = result;
            }
        }
        return def;
    },
});
