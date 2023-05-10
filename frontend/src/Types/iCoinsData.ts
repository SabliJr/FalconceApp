 export interface iCoins {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    market_cap: number;
    total_volume: number;
    circulating_supply: number;
 }

export interface iCoin {
    name: string;
    symbol: string;
    market_cap_rank: number;
    image: {
        large: string;
    }
    market_data: {
        price_change_percentage_24h: number;
        market_cap_change_percentage_24h: number;
        circulating_supply: number;
        total_supply: number | null;
        max_supply: number | null;
        total_volume: {
            usd: number;
        }
        current_price: {
            usd: number;
        }
        market_cap: {
            usd: number;
        };
    }
    description: {
        en: string;
    }
}

export interface iChartData {
    prices: {
        price: number;
        time: number;
    }[];
    market_caps: {
        market_cap: number;
        time: number;
    }[];
}


