export interface ISearchCoin  {
    symbol: string,
    name: string,
    large: string
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

