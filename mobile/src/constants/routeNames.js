const NAVIGATOR_SUFFIX = 'Navigator';
const SCREEN_SUFFIX = 'Screen';
const TABBAR_SUFFIX = 'Tabbar';

export default {
  NAVIGATOR: {
    HOME: `Home${NAVIGATOR_SUFFIX}`,
    NO_AUTH: `NoAuth${NAVIGATOR_SUFFIX}`,
  },
  SCREENS: {
    SPLASH: `Splash${SCREEN_SUFFIX}`,
    NEW_CUSTOMER: `NewCustomer${SCREEN_SUFFIX}`,
    CUSTOMER_DETAILS: `CustomerDetails${SCREEN_SUFFIX}`,
  },
  TABBAR: {
    DAILY: `Daily${TABBAR_SUFFIX}`,
    SUMMARY: `Summary${TABBAR_SUFFIX}`,
    ADD_ITEM: `AddItem${TABBAR_SUFFIX}`,
    CUSTOMERS: `Customers${TABBAR_SUFFIX}`,
    RING: `Ring${TABBAR_SUFFIX}`,
    ACCOUNT: `Account${TABBAR_SUFFIX}`,
    PROFILE: `Profile${TABBAR_SUFFIX}`,
  },
};
