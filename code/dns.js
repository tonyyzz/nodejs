var dns = require('dns');
dns.lookup('www.github.com', (err, address, family) => {
    console.log('ip地址：', address);
    dns.reverse(address, (err, hostnames) => {
        if (err) return console.error(err);
        console.log('反向解析' + address + ':' + JSON.stringify(hostnames))
    })
})