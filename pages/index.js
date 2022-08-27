export default function Home() {
  return (
    <>
      <nav className={"p-3 bg-amber-100"}>
        <div className="container mx-auto flex flex-row justify-between">
          <span className={"p-3"}>Twitter</span>
          <span className={"p-3"}>Github</span>
          <span className={"p-3 text-white bg-red-800 hover:bg-red-900 px-5 rounded-full cursor-pointer"}>Buy</span>
          <span className={"p-3"}>Discord</span>
          <span className={"p-3"}>Docs</span>
        </div>
      </nav>
      <main className={"flex w-full"}>
        <div className="container mx-auto">
          <img src="/big.png" alt=""className={"mx-auto rounded-full m-5"}/>
          <h1 className={"text-8xl text-center m-10"}>PUG</h1>
          <p className={"text-center m-5"}>An <a href="//avax.network" className={"text-red-700"}>Avalanche</a> dog token. </p>
          <p className="text-center"><strong>Total supply</strong>: 10,000</p>
          <p className={"text-center"}>No inflation, no deflation, no tax.</p>
          <h2 className="text-6xl font-extrabold text-center m-5">
            Contract
          </h2>
          <p className="text-center">
            <a href="https://snowtrace.io/address/0x49A143d7A188356BAE286273B2244F763DeB080e" className={"text-red-700"}>0x49A143d7A188356BAE286273B2244F763DeB080e</a>
          </p>
          <h2 className={"text-center font-extrabold text-6xl m-5"}>Exchanges</h2>
          <div className="flex flex-row justify-center p-3">
            <a href="https://info.pangolin.exchange/#/token/0x49a143d7a188356bae286273b2244f763deb080e">
              <img src="https://s3.coinmarketcap.com/static/img/portraits/62ccdb7a98365464a59fba8d.png" alt="" width={32}/>
            </a>
          </div>
        </div>
      </main>
    </>

  )
}
