export type AnyType<T> = T | undefined | null | void | [];

export type StripeType = { 
    setCardData: Function;
    loaded: boolean;
    setLoaded: Function;
}

type AddressType = null | string

export type StripeTokenType = {
    "id": string;
    "object": string;
    "card": {
        "id": string;
        "object": string;
        "address_city": AddressType;
        "address_country": AddressType;
        "address_line1": AddressType;
        "address_line1_check": AddressType;
        "address_line2": AddressType;
        "address_state": AddressType;
        "address_zip": AddressType;
        "address_zip_check": AddressType;
        "brand": AddressType;
        "country": AddressType;
        "cvc_check": AddressType;
        "dynamic_last4": AddressType;
        "exp_month": number;
        "exp_year": number;
        "funding": string;
        "last4": string;
        "name": string | null;
        "networks": {
            "preferred": string | null;
        };
        "tokenization_method": string | null;
        "wallet": string;
    };
    "client_ip": string | null;
    "created": number;
    "livemode": boolean;
    "type": string;
    "used": boolean;
    
}

//Remove from Favourites

export type RemoveFavResType = {
    data: RemoveResDataType,
    success: boolean
  }
  
  type RemoveResDataType = {
    data : RemoveMessageType,
    success: boolean
  }
  
  type RemoveMessageType = {
    message: string
  }
// Add to Favourites
  export type FavAddResType = {
    data: FavAddDataType;
    success: boolean;
  };
  
  type FavAddDataType = {
    data: FavAddInfo;
    success: boolean;
  };
  
  type FavAddInfo = {
    message: string;
  };
  // Plus White
  export type PlusWhiteAddResType = {
    data: PlusWhiteAddDataType;
    success: boolean;
  };
  
  type PlusWhiteAddDataType = {
    data: PlusWhiteAddInfo;
    success: boolean;
  };
  
  type PlusWhiteAddInfo = {
    message: string;
  };
  // Red Remove Cross
  export type RemoveCrossResType = {
    data: RedRemoveCrossDataType;
    success: boolean;
  };
  
  type RedRemoveCrossDataType = {
    data: RedRemoveCrossInfo;
    success: boolean;
  };
  
  type RedRemoveCrossInfo = {
    message: string;
  };