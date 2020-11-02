import React from "react";
import { oauth2 as SMART } from "fhirclient";

/**
 * Typically the launch page is an empty page with a `SMART.authorize`
 * call in it.
 *
 * This example demonstrates that the call to authorize can be postponed
 * and called manually. In this case we use ReactRouter which will match
 * the `/launch` path and render our component. Then, after our page is
 * rendered we start the auth flow.
 */
export default class Launcher extends React.Component {
    /**
     * This is configured to make a Standalone Launch, just in case it
     * is loaded directly. An EHR can still launch it by passing `iss`
     * and `launch` url parameters
     */
    componentDidMount() {
        SMART.authorize({
            clientId: "aac145fa-a1b3-4730-b5ac-c072b383394a",
            scope: "patient/Patient.read patient/Observation.read patient/Condition.read user/*.* patient/*.* launch online_access openid profile",
            redirectUri: "http://localhost:3000/app"
        });
    }
    /**
     * Could also return `null` for empty page
     */
    render() {
        return "Launching...";
    }
}
