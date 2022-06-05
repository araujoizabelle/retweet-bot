import "reflect-metadata";
import { ITwitterBot, TwitterBot, TwitterBotLocator } from './app/twitter-bot/twitter-bot';
import { ITwitterService, TwitterServiceLocator } from './app/twitter/twitter-service';
import container from "./app/dependency-injection/dependency-injection";

const twitterBot = container.get<ITwitterBot>(TwitterBotLocator.TwitterBot);
twitterBot.Initialize('javascript', 'dotnet', 'nodejs');