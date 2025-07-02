import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 889,
  name: 'damai-Subscription',
  version: 0,
  author: 'canc3s',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/canc3s/GKD_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
