const providers = {
  desktop: [{
    name: 'cryptoservers',
    title: 'CryptoServers',
    logo: 'static/img/providers/cryptoservers.svg',
    website: 'https://cryptoservers.net',
    faq: 'https://myvpn.run/faq/setup/cryptoservers',
    oauthConfig: {client_id: "173", redirect_uri: "http://localhost", scope: "*", authorize_url: "https://cryptoservers.net/oauth/authorize", response_type: "token" },
    oauthWindow: {width: 600, height: 540}
  }, {
    name: 'digitalocean',
    title: 'DigitalOcean',
    logo: 'static/img/providers/digitalocean.svg',
    website: 'https://www.digitalocean.com',
    faq: 'https://myvpn.run/faq/setup/digitalocean',
    oauthConfig: {client_id: "a018284aebda94528eb1fdb00e5f53803590f3dd050a1da64a9e549e2eb1c309", redirect_uri: "https://localhost", scope: "read write", authorize_url: "https://cloud.digitalocean.com/v1/oauth/authorize", response_type: "token" },
    oauthWindow: {width: 760, height: 705}
  }, {
    name: 'linode',
    title: 'Linode',
    logo: 'static/img/providers/linode.svg',
    website: 'https://www.linode.com',
    faq: 'https://myvpn.run/faq/setup/linode',
    oauthConfig: {client_id: "839b0a3d0ab64f6c8c2d", redirect_uri: "https://localhost", scope: "linodes:read_write,stackscripts:read_write", authorize_url: "https://login.linode.com/oauth/authorize", response_type: "token" },
    oauthWindow: {width: 600, height: 710}
  }],
  web: [{
    name: 'cryptoservers',
    title: 'CryptoServers',
    logo: 'static/img/providers/cryptoservers.svg',
    website: 'https://cryptoservers.net',
    faq: 'https://myvpn.run/faq/setup/cryptoservers',
    oauthConfig: {client_id: "199", redirect_uri: "http://tool.myvpn.run", scope: "*", authorize_url: "https://cryptoservers.net/oauth/authorize", response_type: "token" },
    oauthWindow: {width: 600, height: 540}
  }]
}

export default providers;
