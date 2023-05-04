export interface iSearchCoin {
  categories?: [] | undefined;
  coins: {
    id: string;
    name: string;
    symbol: string;
    large: string;
  }[];
  exchanges?: [] | undefined;
  nfts?: [] | undefined;
}


export interface iStatus {
    active_cryptocurrencies: number;
    active_exchanges: number;
    btc_dominance: number;
    btc_dominance_24h_percentage_change: number;
    quote: {
        USD: {
            total_market_cap_yesterday_percentage_change: number;
            total_market_cap: number;
        }
    }
}

