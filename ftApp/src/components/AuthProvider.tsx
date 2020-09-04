import React, { useState, useRef } from 'react';

import axios from 'axios';
import { Plugins } from '@capacitor/core';
import { isNull, isNullOrUndefined } from 'util';
import { isContext } from 'vm';

export const Context = React.createContext<any>(undefined);

export const AuthProvider: React.FC = ({ children }) => {

    const [authValues, setAuthValues] = React.useState({
        authenticated: false
    });

    const credentials = "Wrong Login Credentials!"

    const { Storage } = Plugins;

    const authRequest = (user: string, password: string) => {

        console.log(user + " PW: " + password)

        return new Promise((resolve) => {
            axios.post("http://localhost:8000/api/login", {}, {
                data: {
                    email: user,
                    password: password
                },
            }).then((response) => {
                console.log("ERGEBNIS REQUEST" + response.config.data + "STATUS:" + response.status);
                console.log("STATUS 200 OK")
                setAuthValues({
                    authenticated: true
                })
                if (isNullOrUndefined(getLocalToken())) {
                    console.log("Storage erstellen entered")
                    const obj = JSON.parse(response.config.data)
                    //console.log(obj.email)
                    Storage.set({
                        key: obj.email,
                        value: JSON.stringify({
                            token: response.data.access_token,
                        })
                    });
                } else {
                    console.log("TOKEN IN DB vorhanden!")
                }
                resolve(true);
            }).catch(
                (error) => {
                    console.log(error.response);
                    if (error.response.status == 401) {
                        console.log("WRONG PASSWORD OR EMAIL");
                    } else if (error.response.status == 503) {
                        console.log("REQUEST FAILED BECAUSE OF BACKEND")
                    } else {
                        console.log("UNDEFINED")
                    }
                    resolve(false);
                });
        })
    };

    const logout = () => {
        setAuthValues({
            authenticated: false
        })
        return Promise.resolve(true);
    }

    const getLocalToken = () => {
        const value = Storage.get({ key: 'admin@example.com' });
        console.log('Got item: ', value);
        return value;
    }

    let state = {
        authValues,
        setAuthValues,
        authRequest,
        logout,
    };

    const removeLocalToken = () => {
        Storage.remove({ key: 'admin@example.com' });
    }
    return <Context.Provider value={state}>{children}</Context.Provider>
}

export default Context;