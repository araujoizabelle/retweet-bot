import "reflect-metadata";
import { TwitterBot, TwitterBotLocator } from './../twitter-bot/twitter-bot';
import { ITwitterService, TwitterService, TwitterServiceLocator } from './../twitter/twitter-service';
import { ConfigManager, ConfigManagerLocator, IConfigManager } from './../config/config-service';
import { Container } from "inversify";

const container = new Container();

container.bind<IConfigManager>(ConfigManagerLocator.ConfigManager).to(ConfigManager).inSingletonScope();
container.bind<ITwitterService>(TwitterServiceLocator.TwitterService).to(TwitterService).inSingletonScope();
container.bind<TwitterBot>(TwitterBotLocator.TwitterBot).to(TwitterBot).inSingletonScope();

export default container;