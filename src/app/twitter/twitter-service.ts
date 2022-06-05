import "reflect-metadata";
import { inject, injectable } from 'inversify';
import { ConfigManagerLocator, IConfigManager } from './../config/config-service';
import Twit from 'twit';

export interface ITwitterService {
    WatchToFilterStream(params: Twit.Params | undefined): void;
}

export const TwitterServiceLocator = {
    TwitterService: Symbol.for('ITwitterService')
};

@injectable()
export class TwitterService implements ITwitterService {
    private readonly twit: Twit;

    constructor(@inject(ConfigManagerLocator.ConfigManager) private configManager: IConfigManager) {
        this.twit = new Twit({
            consumer_key: configManager.TwitConsumerKey,
            consumer_secret: configManager.TwitConsumerSecret,
            access_token: configManager.TwitAccessToken,
            access_token_secret: configManager.TwitAccessTokenSecret
        });
    }
    
    public WatchToFilterStream(params: Twit.Params | undefined): void {
        const stream = this.twit.stream('statuses/filter', params);
        stream.on('tweet', tweet => {
            this.twit.post('statuses/retweet/:id', {id: tweet.id_str});
        });
    }
}