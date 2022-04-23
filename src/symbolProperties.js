const symbols = [
  {
    s: "BTCUSDT",
    t: "0.10",
  },
  {
    s: "ETHUSDT",
    t: "0.01",
  },
  {
    s: "BCHUSDT",
    t: "0.01",
  },
  {
    s: "XRPUSDT",
    t: "0.0001",
  },
  {
    s: "EOSUSDT",
    t: "0.001",
  },
  {
    s: "LTCUSDT",
    t: "0.01",
  },
  {
    s: "TRXUSDT",
    t: "0.00001",
  },
  {
    s: "ETCUSDT",
    t: "0.001",
  },
  {
    s: "LINKUSDT",
    t: "0.001",
  },
  {
    s: "XLMUSDT",
    t: "0.00001",
  },
  {
    s: "ADAUSDT",
    t: "0.00010",
  },
  {
    s: "XMRUSDT",
    t: "0.01",
  },
  {
    s: "DASHUSDT",
    t: "0.01",
  },
  {
    s: "ZECUSDT",
    t: "0.01",
  },
  {
    s: "XTZUSDT",
    t: "0.001",
  },
  {
    s: "BNBUSDT",
    t: "0.010",
  },
  {
    s: "ATOMUSDT",
    t: "0.001",
  },
  {
    s: "ONTUSDT",
    t: "0.0001",
  },
  {
    s: "IOTAUSDT",
    t: "0.0001",
  },
  {
    s: "BATUSDT",
    t: "0.0001",
  },
  {
    s: "VETUSDT",
    t: "0.000010",
  },
  {
    s: "NEOUSDT",
    t: "0.001",
  },
  {
    s: "QTUMUSDT",
    t: "0.001",
  },
  {
    s: "IOSTUSDT",
    t: "0.000001",
  },
  {
    s: "THETAUSDT",
    t: "0.0010",
  },
  {
    s: "ALGOUSDT",
    t: "0.0001",
  },
  {
    s: "ZILUSDT",
    t: "0.00001",
  },
  {
    s: "KNCUSDT",
    t: "0.00100",
  },
  {
    s: "ZRXUSDT",
    t: "0.0001",
  },
  {
    s: "COMPUSDT",
    t: "0.01",
  },
  {
    s: "OMGUSDT",
    t: "0.0010",
  },
  {
    s: "DOGEUSDT",
    t: "0.000010",
  },
  {
    s: "SXPUSDT",
    t: "0.0001",
  },
  {
    s: "KAVAUSDT",
    t: "0.0001",
  },
  {
    s: "BANDUSDT",
    t: "0.0001",
  },
  {
    s: "RLCUSDT",
    t: "0.0001",
  },
  {
    s: "WAVESUSDT",
    t: "0.0010",
  },
  {
    s: "MKRUSDT",
    t: "0.10",
  },
  {
    s: "SNXUSDT",
    t: "0.001",
  },
  {
    s: "DOTUSDT",
    t: "0.001",
  },
  {
    s: "DEFIUSDT",
    t: "0.1",
  },
  {
    s: "YFIUSDT",
    t: "1",
  },
  {
    s: "BALUSDT",
    t: "0.001",
  },
  {
    s: "CRVUSDT",
    t: "0.001",
  },
  {
    s: "TRBUSDT",
    t: "0.010",
  },
  {
    s: "RUNEUSDT",
    t: "0.0010",
  },
  {
    s: "SUSHIUSDT",
    t: "0.0010",
  },
  {
    s: "SRMUSDT",
    t: "0.0010",
  },
  {
    s: "EGLDUSDT",
    t: "0.010",
  },
  {
    s: "SOLUSDT",
    t: "0.0100",
  },
  {
    s: "ICXUSDT",
    t: "0.0001",
  },
  {
    s: "STORJUSDT",
    t: "0.0001",
  },
  {
    s: "BLZUSDT",
    t: "0.00001",
  },
  {
    s: "UNIUSDT",
    t: "0.0010",
  },
  {
    s: "AVAXUSDT",
    t: "0.0100",
  },
  {
    s: "FTMUSDT",
    t: "0.000100",
  },
  {
    s: "HNTUSDT",
    t: "0.0010",
  },
  {
    s: "ENJUSDT",
    t: "0.00010",
  },
  {
    s: "FLMUSDT",
    t: "0.0001",
  },
  {
    s: "TOMOUSDT",
    t: "0.0001",
  },
  {
    s: "RENUSDT",
    t: "0.00010",
  },
  {
    s: "KSMUSDT",
    t: "0.010",
  },
  {
    s: "NEARUSDT",
    t: "0.0010",
  },
  {
    s: "AAVEUSDT",
    t: "0.010",
  },
  {
    s: "FILUSDT",
    t: "0.001",
  },
  {
    s: "RSRUSDT",
    t: "0.000001",
  },
  {
    s: "LRCUSDT",
    t: "0.00010",
  },
  {
    s: "MATICUSDT",
    t: "0.00010",
  },
  {
    s: "OCEANUSDT",
    t: "0.00001",
  },
  {
    s: "CVCUSDT",
    t: "0.00001",
  },
  {
    s: "BELUSDT",
    t: "0.00010",
  },
  {
    s: "CTKUSDT",
    t: "0.00100",
  },
  {
    s: "AXSUSDT",
    t: "0.01000",
  },
  {
    s: "ALPHAUSDT",
    t: "0.00010",
  },
  {
    s: "ZENUSDT",
    t: "0.001",
  },
  {
    s: "SKLUSDT",
    t: "0.00001",
  },
  {
    s: "GRTUSDT",
    t: "0.00001",
  },
  {
    s: "1INCHUSDT",
    t: "0.0001",
  },
  {
    s: "BTCBUSD",
    t: "0.1",
  },
  {
    s: "AKROUSDT",
    t: "0.00001",
  },
  {
    s: "CHZUSDT",
    t: "0.00001",
  },
  {
    s: "SANDUSDT",
    t: "0.00010",
  },
  {
    s: "ANKRUSDT",
    t: "0.000010",
  },
  {
    s: "LUNAUSDT",
    t: "0.0010",
  },
  {
    s: "BTSUSDT",
    t: "0.00001",
  },
  {
    s: "LITUSDT",
    t: "0.001",
  },
  {
    s: "UNFIUSDT",
    t: "0.001",
  },
  {
    s: "DODOUSDT",
    t: "0.001",
  },
  {
    s: "REEFUSDT",
    t: "0.000001",
  },
  {
    s: "RVNUSDT",
    t: "0.00001",
  },
  {
    s: "SFPUSDT",
    t: "0.0001",
  },
  {
    s: "XEMUSDT",
    t: "0.0001",
  },
  {
    s: "BTCSTUSDT",
    t: "0.001",
  },
  {
    s: "COTIUSDT",
    t: "0.00001",
  },
  {
    s: "CHRUSDT",
    t: "0.0001",
  },
  {
    s: "MANAUSDT",
    t: "0.0001",
  },
  {
    s: "ALICEUSDT",
    t: "0.001",
  },
  {
    s: "HBARUSDT",
    t: "0.00001",
  },
  {
    s: "ONEUSDT",
    t: "0.00001",
  },
  {
    s: "LINAUSDT",
    t: "0.00001",
  },
  {
    s: "STMXUSDT",
    t: "0.00001",
  },
  {
    s: "DENTUSDT",
    t: "0.000001",
  },
  {
    s: "CELRUSDT",
    t: "0.00001",
  },
  {
    s: "HOTUSDT",
    t: "0.000001",
  },
  {
    s: "MTLUSDT",
    t: "0.0001",
  },
  {
    s: "OGNUSDT",
    t: "0.0001",
  },
  {
    s: "NKNUSDT",
    t: "0.00001",
  },
  {
    s: "SCUSDT",
    t: "0.000001",
  },
  {
    s: "DGBUSDT",
    t: "0.00001",
  },
  {
    s: "1000SHIBUSDT",
    t: "0.000001",
  },
  {
    s: "ICPUSDT",
    t: "0.01",
  },
  {
    s: "BAKEUSDT",
    t: "0.0001",
  },
  {
    s: "GTCUSDT",
    t: "0.001",
  },
  {
    s: "ETHBUSD",
    t: "0.01",
  },
  {
    s: "BTCDOMUSDT",
    t: "0.1",
  },
  {
    s: "TLMUSDT",
    t: "0.0001",
  },
  {
    s: "BNBBUSD",
    t: "0.010",
  },
  {
    s: "ADABUSD",
    t: "0.00010",
  },
  {
    s: "XRPBUSD",
    t: "0.0001",
  },
  {
    s: "IOTXUSDT",
    t: "0.00001",
  },
  {
    s: "DOGEBUSD",
    t: "0.000010",
  },
  {
    s: "AUDIOUSDT",
    t: "0.0001",
  },
  {
    s: "RAYUSDT",
    t: "0.001",
  },
  {
    s: "C98USDT",
    t: "0.0001",
  },
  {
    s: "MASKUSDT",
    t: "0.0010",
  },
  {
    s: "ATAUSDT",
    t: "0.0001",
  },
  {
    s: "SOLBUSD",
    t: "0.0100",
  },
  {
    s: "FTTBUSD",
    t: "0.001",
  },
  {
    s: "DYDXUSDT",
    t: "0.001",
  },
  {
    s: "1000XECUSDT",
    t: "0.00001",
  },
  {
    s: "GALAUSDT",
    t: "0.00001",
  },
  {
    s: "CELOUSDT",
    t: "0.001",
  },
  {
    s: "ARUSDT",
    t: "0.001",
  },
  {
    s: "KLAYUSDT",
    t: "0.0001",
  },
  {
    s: "ARPAUSDT",
    t: "0.00001",
  },
  {
    s: "CTSIUSDT",
    t: "0.0001",
  },
  {
    s: "LPTUSDT",
    t: "0.001",
  },
  {
    s: "ENSUSDT",
    t: "0.001",
  },
  {
    s: "PEOPLEUSDT",
    t: "0.00001",
  },
  {
    s: "ANTUSDT",
    t: "0.001",
  },
  {
    s: "ROSEUSDT",
    t: "0.00001",
  },
  {
    s: "DUSKUSDT",
    t: "0.00001",
  },
  {
    s: "FLOWUSDT",
    t: "0.001",
  },
  {
    s: "IMXUSDT",
    t: "0.0001",
  },
  {
    s: "API3USDT",
    t: "0.0010",
  },
  {
    s: "ANCUSDT",
    t: "0.0010",
  },
  {
    s: "GMTUSDT",
    t: "0.00001",
  },
  {
    s: "APEUSDT",
    t: "0.0010",
  },
  {
    s: "BTCUSDT_220624",
    t: "0.1",
  },
  {
    s: "ETHUSDT_220624",
    t: "0.01",
  },
  {
    s: "BNXUSDT",
    t: "0.0100",
  },
  {
    s: "WOOUSDT",
    t: "0.00001",
  },
  {
    s: "FTTUSDT",
    t: "0.0010",
  },
  {
    s: "JASMYUSDT",
    t: "0.000010",
  },
];

export function getProps(symbolName) {
  return (
    symbols.filter((prop) => prop.s === symbolName)[0] || {
      s: symbolName,
      t: "0.01",
    }
  );
}
