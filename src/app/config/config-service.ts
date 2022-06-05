import "reflect-metadata";
import { injectable } from 'inversify';
import config from 'config';

export interface IConfigManager {
    TwitConsumerKey: string,
    TwitConsumerSecret: string,
    TwitAccessToken: string,
    TwitAccessTokenSecret: string
}

export const ConfigManagerLocator = {
    ConfigManager: Symbol.for('IConfigManager')
};

@injectable()
export class ConfigManager implements IConfigManager {
    public get TwitConsumerKey(): string {
        return config.get("Twit.consumerKey");
    }

    public get TwitConsumerSecret(): string {
        return config.get("Twit.consumerSecret");
    }
    
    public get TwitAccessToken(): string {
        return config.get("Twit.accessToken");
    }
    
    public get TwitAccessTokenSecret(): string {
        return config.get("Twit.accessTokenSecret");
    }
}