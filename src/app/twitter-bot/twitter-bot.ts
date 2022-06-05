import "reflect-metadata";
import { TwitterServiceLocator } from '../twitter/twitter-service';
import { inject, injectable } from "inversify";
import { ITwitterService } from "../twitter/twitter-service";

export interface ITwitterBot {
    Initialize(...keywords: string[]):void
}

export const TwitterBotLocator = {
    TwitterBot: Symbol.for('ITwitterBot')
};

@injectable()
export class TwitterBot implements ITwitterBot {
    constructor(@inject(TwitterServiceLocator.TwitterService) private twitterService: ITwitterService) {
    }
    
    Initialize(...keywords: string[]): void {
        this.twitterService.WatchToFilterStream({track: keywords.join(',')});
    }
}