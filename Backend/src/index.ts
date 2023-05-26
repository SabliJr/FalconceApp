const PORT = 8000;
import express, {Request, Response} from 'express' ;
import cors from 'cors';
import dotenv from 'dotenv';
import axios from "axios";

dotenv.config()
const app = express()
app.use(
  cors({
    origin: "https://falconce.netlify.app",
  })
);

//Getting the coins data
app.get("/coins", (req: Request, resp: Response) => {
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params: {
      vs_currency: "usd",
      page: "1",
      per_page: "300",
      order: "market_cap_desc",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Getting the global status
app.get("/global-status", (req, resp) => {
  const options = {
    method: "GET",
    url: "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    headers: {
      "X-CMC_PRO_API_KEY": process.env.MARKET_CAP_API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

//Getting Crypto News
app.get("/news", (req, resp) => {
  const config = {
    method: "get",
    url: "https://api.coinstats.app/public/v1/news/trending?skip=0&limit=5",
    headers: {},
  };

  axios(config)
    .then((response) => {
      resp.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//Getting Single Coin Data
app.get("/coin", (req, resp) => {
  const coinId = req.query.coinid;
  
  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${coinId}`,
    params: {
      localization: "false",
      tickers: "true",
      market_data: "true",
      community_data: "false",
      developer_data: "false",
      sparkline: "false",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/three-months", (req: express.Request, res: express.Response) => {
  const symbol = req.query.symbol;

  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart`,
    params: { vs_currency: "usd", days: "90", interval: "daily" },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`The app is running on port ${PORT}`))