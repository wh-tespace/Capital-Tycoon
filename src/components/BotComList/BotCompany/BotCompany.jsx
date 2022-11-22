import './botCompany.css';

function BotCompany(companyInfo) {
	console.log(companyInfo, "companyInfo")
  return (
   <li class="botCompanyItem">
		<div class="botCompanyItem__header">
			<img class="botCompanyItem__img" src={companyInfo.company.companyLogo}></img>
			<p class="header__title">{companyInfo.company.name.toUpperCase()}</p>
		</div>
		<div class="botCompanyItem__body">
			<div class="body__netWorth">
				<p class="netWorth__label">NET VALUE</p>
				<p class="netWorth__value">${companyInfo.company.netValue.toLocaleString("en-US")}</p>
			</div>
			<div class="body__stockPrice">
				<p class="stockPrice__value">{companyInfo.company.stockPrice}</p>
				<p>USD</p>
			</div>
			<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 19 16" fill="none">
				<path d="M9.5 0L18.5933 15.75H0.406738L9.5 0Z" fill="#00FF19"/>
			</svg>
		</div>
	</li>
  );
}



export default BotCompany;