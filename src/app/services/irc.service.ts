import { Injectable } from '@angular/core';
import Irc from 'irc-framework/browser';

@Injectable({ providedIn: 'root' })
export class IrcService {
    private ircClient;
    private clientOpts = {};

    constructor() {
        this.clientOpts = {
            host: 'irc.europnet.org',
            port: 6667,
            tls: false,
            // path: network.connection.path,
            // password: network.password,
            nick: 'test',
            username: 'testt',
            gecos: '22 m france',
            version: null,
            auto_reconnect: false,
            // encoding: network.connection.encoding,
        };

        this.ircClient = new Irc.Client();
    }

    connection(values) {
        console.log(values);
        this.ircClient.connect(this.clientOpts);
    }
}
