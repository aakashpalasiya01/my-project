export const PUBLIC_PATH = {
  LOGIN: "/login",
  REGISTRATION: "/registration",
  FORGOTPASSWORD: "/forgetpassword",
  EMAILCONFIRMATION: "/emailconfirmation",
  GUEST: '/guest',
  RESETPASSWORD:"/resetpassword",
  EXPLORE: '/explore',
  EXPLORESKILL: "/explore-skill",
  THANKYOU: "/thankyou",
};

export const PRIVATE_PATH = {
  HOME: "/home",
  PROFILE: "/profile",
  WATCHLIST: "/watch-list",
  ASSIGNMENTS: "/assignments",
  WATCHHISTORY:"/watch-history",
  INSTRUCTORCHAT:"/instructor-chat",
  SINGLECLASSES: "/single-class",
  THANKYOU: "/thankyou",
  FAVORITES:"/favorites",
  SUBSCRIPTION_CARD: "/subscription",
  SUBSCRIPTION_DETAILS: "/subscription/subscription-details",
  ADD_NEW_CARD: "/subscription/add-new-card",
  EDIT_CARD: "/subscription/edit-card",
  SUBSCRIPTION_THANKU: "/subscription/thankyou",
  SUBSCRIPTION: "/subscription/my-subscription",
  MY_SUBSCRIPTION: "/subscription/my-subscription",
  MY_SUBSCRIPTION_ORDER: "/subscription/subscription-order",
  MY_SUBSCRIPTION_DETAILS: "/subscription/mysubscription-details",
  MY_SUBSCRIPTION_PLAN: "/subscription/new-subscriptionplan",  
  TEACHERS:'/teachers',
  ABOUTUS: "/about-us",
  BLOG: "/blog",
  PRIVACYPOLICY:"/privacy-policy",
  FAQS: "/faqs",
  TERMSANDCONDITIONS: "/terms-conditions",
}

export const ROUTES_PATH = {
  ...PUBLIC_PATH,
  ...PRIVATE_PATH
};

export const pagePerOptions = [5, 10, 25];
export const limit = 10;

export const subscriptionStatus = {
  canceled: "canceled",
  active: "active"
}

export const storage = {
  set(key: string, value: string | object) {
    if (
      typeof value === "object" ||
      Array.isArray(value) ||
      Number.isInteger(value)
    ) {
      value = JSON.stringify(value);
    }
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) localStorage.setItem(key, value);
  },
  get(key: string, defaultValue?: string | null | undefined) {
    let data: string | null = "";
    if (typeof window !== "undefined") {
      // Perform localStorage action
      data = localStorage.getItem(key);
    }

    try {
      let parsed = data ? JSON.parse(data) : null;

      return parsed !== null ? parsed : defaultValue;
    } catch (e) {
      return data !== null ? data : defaultValue;
    }
  },
  remove(key: string) {
    return localStorage.removeItem(key);
  },
  clear() {
    return localStorage.clear();
  },
};


export function convertTimeToHMS(timeString: string) {
  if (timeString?.includes(':')) {
      var timeParts = timeString.split(':');
      var hours = parseInt(timeParts[0]);
      var minutes = parseInt(timeParts[1]);
      var seconds = parseInt(timeParts[2]);

      return `${hours ? hours + " h, " : ""}${minutes ? minutes + " mins, " : ""}${seconds} sec`;
  } else {
      return "0 mins";
  }
}